import EmptyState from "../../components/EmptyState";
import Panel from "../../components/Panel";
import UseCaseCard from "../../components/UseCaseCard";
import { useAudit } from "../../context/AuditContext";
import { useCases } from "../../data/useCases";

function PriorityPill({ priority }) {
  const value = (priority || "medium").toLowerCase();
  return <span className={`priority-pill priority-${value}`}>{`${value} priority`}</span>;
}

function RecommendationsPage() {
  const { recommendations, selectedGoals } = useAudit();
  const tools = useCases.filter((item) => selectedGoals.has(item.goal));
  return (
    <main className="workspace-page">
      <Panel>
        <h2>Recommendations</h2>
        <p className="helper-copy">Actions prioritized for business impact and effort.</p>
        {!recommendations.length ? <EmptyState subtitle="Run an audit to generate recommendations." /> : null}

        {recommendations.length > 0 && (
          <>
            <h3>Action plan</h3>
            <div className="action-plan-list">
              {recommendations.map((item, idx) => (
                <article className="action-plan-item" key={item.title || idx}>
                  <span className="action-plan-number">{idx + 1}</span>
                  <div className="action-plan-content">
                    <div className="action-plan-head">
                      <h4>{item.title}</h4>
                      <PriorityPill priority={item.priority} />
                    </div>
                    <p>{item.description}</p>
                    <p className="action-impact">
                      <strong>Expected impact:</strong> {item.impact}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {tools.length > 0 && (
          <>
            <h3>Recommended use cases</h3>
            <p className="helper-copy">Based on your audit results, here are practical ideas your team can start using right away.</p>
            <div className="stack">{tools.map((item) => <UseCaseCard key={item.id} {...item} />)}</div>
          </>
        )}
      </Panel>
    </main>
  );
}

export default RecommendationsPage;
