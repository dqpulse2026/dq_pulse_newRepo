import "./UseCaseCard.css";

function UseCaseCard({ title, blurb, icon, onClick }) {
  const hasClick = typeof onClick === "function";
  const content = (
    <>
      <span className="blue-dot" />
      <div>
        {icon ? <span className="usecase-icon" aria-hidden="true">{icon}</span> : null}
        <strong>{title}</strong>
        <p>{blurb}</p>
      </div>
    </>
  );

  if (!hasClick) {
    return <article className="usecase-card">{content}</article>;
  }

  return (
    <button className="usecase-card" onClick={onClick} type="button">
      {content}
    </button>
  );
}

export default UseCaseCard;
