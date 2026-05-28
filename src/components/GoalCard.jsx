import "./GoalCard.css";

function GoalCard({ icon, title, subtitle, selected, onClick }) {
  return (
    <button className={`select-card ${selected ? "selected" : ""}`} onClick={onClick}>
      <span className="select-card-icon">{icon}</span>
      <strong>{title}</strong>
      <span>{subtitle}</span>
    </button>
  );
}

export default GoalCard;
