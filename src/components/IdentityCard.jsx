import "./IdentityCard.css";

function IdentityCard(props) {
  return (
    <button className={`identity-card ${props.selected ? "selected" : ""}`} onClick={props.onClick}>
      <span className="identity-icon">{props.icon}</span>
      <strong>{props.title}</strong>
      <small>{props.description}</small>
    </button>
  );
}

export default IdentityCard;
