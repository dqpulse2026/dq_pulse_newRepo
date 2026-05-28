import "./PillarCard.css";

function PillarCard({ title, state }) {
  return (
    <div className={`pillar-card ${state}`}>
      <span className="pillar-icon">{state === "done" ? "✓" : state === "running" ? "●" : "○"}</span>
      <span>{title}</span>
      {state === "running" && <span className="blink">_</span>}
    </div>
  );
}

export default PillarCard;
