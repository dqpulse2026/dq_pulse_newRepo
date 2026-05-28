import { Link } from "react-router-dom";
import LoadingState from "../../components/LoadingState";
import Panel from "../../components/Panel";
import PillarCard from "../../components/PillarCard";
import StepBar from "../../components/StepBar";
import ErrorState from "../../components/ErrorState";
import { useAudit } from "../../context/AuditContext";
import { pillarsByAudit } from "../../data/pillars";

function RunningAuditPage() {
  const { selectedAudit, auditProgress, running, error } = useAudit();
  const pillars = pillarsByAudit[selectedAudit] || [];
  const percent = auditProgress.total ? Math.round((auditProgress.step / auditProgress.total) * 100) : 0;

  return (
    <main className="workspace-page">
      <Panel className="running-panel">
        <StepBar current={5} />
        <p className="eyebrow">Audit in progress</p>
        <h1>Scanning your data quality pillars</h1>
        <p className="helper-copy">We are validating schema quality, identity integrity, attribution consistency, and event reliability.</p>
        {error ? <ErrorState message={error} /> : null}
        {running ? <LoadingState title="Processing your checks" subtitle={auditProgress.status} /> : null}
        <div className="stack">
          {pillars.map((pillar, index) => {
            const state = index < auditProgress.step ? "done" : index === auditProgress.step ? "running" : "queued";
            return <PillarCard key={pillar} title={pillar} state={state} />;
          })}
        </div>
        <div className="progress-rail"><div className="progress-fill" style={{ width: `${percent}%` }} /></div>
        <div className="status-row"><strong>{percent}%</strong><span>{auditProgress.status}</span></div>
        {!running && !error ? <Link className="btn btn-primary" to="/app/results">Open audit report</Link> : null}
      </Panel>
    </main>
  );
}

export default RunningAuditPage;
