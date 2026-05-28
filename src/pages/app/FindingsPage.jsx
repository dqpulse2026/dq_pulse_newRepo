import EmptyState from "../../components/EmptyState";
import FindingCard from "../../components/FindingCard";
import Panel from "../../components/Panel";
import { useAudit } from "../../context/AuditContext";

function FindingsPage() {
  const { findings } = useAudit();
  return (
    <main className="workspace-page">
      <Panel>
        <h2>Detailed findings</h2>
        <p className="helper-copy">Plain-language issues detected during your scan.</p>
        {!findings.length ? <EmptyState subtitle="No findings available yet. Run an audit first." /> : null}
        <div className="stack">{findings.map((item) => <FindingCard key={item.text} {...item} />)}</div>
      </Panel>
    </main>
  );
}

export default FindingsPage;
