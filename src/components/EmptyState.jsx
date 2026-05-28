function EmptyState({ title = "No data yet", subtitle = "Run an audit to populate this section." }) {
  return (
    <div className="state-card">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <small>Tip: start from Audit Wizard and connect your dataset.</small>
    </div>
  );
}

export default EmptyState;
