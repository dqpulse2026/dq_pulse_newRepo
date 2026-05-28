import "./FindingCard.css";

const severityLabel = {
  blue: "Info",
  green: "Good",
  amber: "Watch",
  red: "Critical",
};

function FindingCard({ severity = "blue", text }) {
  return (
    <article className={`finding-card severity-${severity}`}>
      <span className={`dot ${severity}`} />
      <div>
        <small>{severityLabel[severity] || "Info"}</small>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default FindingCard;
