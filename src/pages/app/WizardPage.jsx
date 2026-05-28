import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import AuditCard from "../../components/AuditCard";
import Button from "../../components/Button";
import GoalCard from "../../components/GoalCard";
import IdentityCard from "../../components/IdentityCard";
import Panel from "../../components/Panel";
import StepBar from "../../components/StepBar";
import { useAudit } from "../../context/AuditContext";

const goals = [
  { key: "ecommerce", icon: "🛒", title: "Online Store", subtitle: "E-commerce" },
  { key: "leadgen", icon: "📈", title: "Service & Leads", subtitle: "Lead Generation" },
  { key: "publisher", icon: "📱", title: "Content & Apps", subtitle: "Publisher" },
];
const audits = [
  { key: "complete", icon: "🔍", title: "Complete Audit", description: "Full data health check" },
  { key: "ml", icon: "🤖", title: "ML / AI Readiness", description: "Data readiness for model use-cases" },
  { key: "tracking", icon: "📊", title: "Event & Tracking", description: "Tracking setup quality and consistency" },
];

function WizardPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const {
    selectedGoals,
    toggleGoal,
    selectedAudit,
    setAudit,
    userIdentity,
    setIdentity,
    project,
    dataset,
    setProject,
    setDataset,
    runAudit,
    loading,
  } = useAudit();
  const totalSteps = selectedAudit === "complete" ? 4 : 3;
  const stepNarrative = useMemo(() => {
    if (step === 1) return "We customize your report language and benchmark logic based on your business model.";
    if (step === 2) return "Audit mode changes the depth of analysis and recommendation strategy.";
    if (step === 3 && selectedAudit === "complete") return "Identity coverage helps us judge attribution trust and user journey continuity.";
    return "We run read-only checks and generate an executive report with priorities.";
  }, [step, selectedAudit]);
  const canMoveNext = useMemo(() => {
    if (step === 1) return selectedGoals.size > 0;
    if (step === 2) return Boolean(selectedAudit);
    if (step === 3 && selectedAudit === "complete") return Boolean(userIdentity);
    return Boolean(project && dataset);
  }, [step, selectedGoals.size, selectedAudit, userIdentity, project, dataset]);

  const onRun = async () => {
    navigate("/app/running");
    try {
      await runAudit();
      navigate("/app/results");
    } catch {
      navigate("/app/running");
    }
  };

  return (
    <main className="workspace-page">
      <div className="wizard-shell">
        <Panel className="wizard-hero">
          <p className="eyebrow">Guided setup</p>
          <h1>Build your audit in a few focused steps</h1>
          <p className="helper-copy">
            Each step personalizes the checks and recommendations for your business, so your final report is clear and actionable.
          </p>
          <StepBar current={step + 1} />
          <div className="wizard-progress">Step {step} of {totalSteps}</div>
        </Panel>

        <Panel className="wizard-stage">
          {step === 1 ? (
            <>
              <h2>What does your business do?</h2>
              <p className="helper-copy">Choose one or more goals. We tailor findings and recommendations to these selections.</p>
              <div className="grid-3">
                {goals.map((goal) => (
                  <GoalCard key={goal.key} {...goal} selected={selectedGoals.has(goal.key)} onClick={() => toggleGoal(goal.key)} />
                ))}
              </div>
            </>
          ) : null}

          {step === 2 ? (
            <>
              <h2>What should we evaluate?</h2>
              <p className="helper-copy">Select the audit depth based on what your team needs right now.</p>
              <div className="stack">
                {audits.map((item) => (
                  <AuditCard key={item.key} {...item} selected={selectedAudit === item.key} onClick={() => setAudit(item.key)} />
                ))}
              </div>
            </>
          ) : null}

          {step === 3 && selectedAudit === "complete" ? (
            <>
              <h2>Do your users typically log in?</h2>
              <p className="helper-copy">Identity coverage impacts attribution trust and user-level analytics quality.</p>
              <div className="grid-3">
                <IdentityCard icon="✅" title="Yes" description="Most users log in" selected={userIdentity === "yes"} onClick={() => setIdentity("yes")} />
                <IdentityCard icon="❌" title="No" description="Mostly anonymous traffic" selected={userIdentity === "no"} onClick={() => setIdentity("no")} />
                <IdentityCard icon="🤷" title="Not sure" description="Need help evaluating this" selected={userIdentity === "unknown"} onClick={() => setIdentity("unknown")} />
              </div>
            </>
          ) : null}

          {(step === totalSteps) ? (
            <>
              <h2>Connect your BigQuery source</h2>
              <p className="helper-copy">Read-only access only. No data is modified or written back.</p>
              <div className="selects">
                <label>
                  Project
                  <select value={project} onChange={(event) => setProject(event.target.value)}>
                    <option value="demo-project">demo-project</option>
                    <option value="northstar-data">northstar-data</option>
                    <option value="growth-labs">growth-labs</option>
                  </select>
                </label>
                <label>
                  Dataset
                  <select value={dataset} onChange={(event) => setDataset(event.target.value)}>
                    <option value="analytics_123">analytics_123</option>
                    <option value="events_prod">events_prod</option>
                    <option value="ga4_export">ga4_export</option>
                  </select>
                </label>
              </div>
            </>
          ) : null}
          <div className="wizard-actions">
            <Button kind="ghost" disabled={step === 1} onClick={() => setStep((prev) => Math.max(1, prev - 1))}>
              Back
            </Button>
            {step < totalSteps ? (
              <Button disabled={!canMoveNext} onClick={() => setStep((prev) => prev + 1)}>
                Continue
              </Button>
            ) : (
              <Button disabled={!canMoveNext || loading} onClick={onRun}>
                {loading ? "Preparing..." : "Run audit"}
              </Button>
            )}
          </div>
        </Panel>
        <Panel className="wizard-side-notes">
          <h3>Guided by AI context</h3>
          <p className="helper-copy">{stepNarrative}</p>
          <div className="insight-preview">
            <strong>Live insight preview</strong>
            <p>
              {step === 1 && "Choosing e-commerce unlocks revenue and cart quality diagnostics."}
              {step === 2 && "Complete audit includes identity continuity and attribution readiness checks."}
              {step === 3 && selectedAudit === "complete" && "Identity signals influence confidence scoring and recommendation priority."}
              {step === totalSteps && "Final report includes confidence score, severity heat, and action roadmap."}
            </p>
          </div>
          <h3>What you’ll get</h3>
          <ul>
            <li>Executive score with confidence indicator</li>
            <li>Severity-based findings in plain language</li>
            <li>Prioritized actions for business impact</li>
            <li>AI readiness summary and next best moves</li>
          </ul>
          <p>Average completion time: under 2 minutes.</p>
        </Panel>
      </div>
    </main>
  );
}

export default WizardPage;
