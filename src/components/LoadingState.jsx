function LoadingState({ title = "Loading...", subtitle = "Please wait." }) {
  return (
    <div className="state-card">
      <div className="spinner" />
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <small>Analyzing event streams, identity signals, and attribution readiness.</small>
    </div>
  );
}

export default LoadingState;
