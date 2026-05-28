import "./UseCaseCard.css";

function UseCaseCard({ title, blurb, onClick }) {
  return (
    <button className="usecase-card" onClick={onClick}>
      <span className="blue-dot" />
      <div>
        <strong>{title}</strong>
        <p>{blurb}</p>
      </div>
    </button>
  );
}

export default UseCaseCard;
