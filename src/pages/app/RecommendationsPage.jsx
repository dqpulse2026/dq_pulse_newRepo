import EmptyState from "../../components/EmptyState";
import FindingCard from "../../components/FindingCard";
import Panel from "../../components/Panel";
import UseCaseCard from "../../components/UseCaseCard";
import { useAudit } from "../../context/AuditContext";
import { useCases } from "../../data/useCases";

function RecommendationsPage() {
  const { recommendations, selectedGoals } = useAudit();
  const tools = useCases.filter((item) => selectedGoals.has(item.goal));
  return (
    <main className="workspace-page">
      <Panel>
        <h2>Recommendations</h2>
        <p className="helper-copy">Actions prioritized for business impact and effort.</p>
        {!recommendations.length ? <EmptyState subtitle="Run an audit to generate recommendations." /> : null}
        <h3>Action plan</h3>
        <div className="stack">{recommendations.map((item) => <FindingCard key={item} severity="blue" text={item} />)}</div>
        <h3>Recommended tools</h3>
        <div className="stack">{tools.map((item) => <UseCaseCard key={item.id} {...item} />)}</div>
      </Panel>
    </main>
  );
}

export default RecommendationsPage;
