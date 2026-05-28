function ErrorState({ message = "Something went wrong.", onRetry }) {
  return (
    <div className="state-card error">
      <h3>We hit a problem</h3>
      <p>{message}</p>
      {onRetry ? (
        <button className="btn btn-primary" onClick={onRetry}>
          Retry
        </button>
      ) : null}
    </div>
  );
}

export default ErrorState;
