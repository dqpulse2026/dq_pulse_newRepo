import "./AuditCard.css";

function AuditCard(props) {
  return (
    <button className={`audit-card ${props.selected ? "selected" : ""}`} onClick={props.onClick}>
      <span className="audit-icon">{props.icon}</span>
      <div>
        <strong>{props.title}</strong>
        <p>{props.description}</p>
      </div>
    </button>
  );
}

export default AuditCard;
