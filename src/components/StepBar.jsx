import "./StepBar.css";

const labels = ["Sign in", "Goals", "Audit", "Connect", "Run", "Results"];

function StepBar({ current = 1, total = 6 }) {
  return (
    <div className="stepbar">
      {Array.from({ length: total }).map((_, index) => {
        const step = index + 1;
        const state = step < current ? "done" : step === current ? "active" : "";
        return (
          <div key={step} className={`stepbar-item ${state}`}>
            <span className={`stepbar-dot ${state}`}>
              {step < current ? "✓" : step}
            </span>
            <small>{labels[index] || `Step ${step}`}</small>
          </div>
        );
      })}
    </div>
  );
}

export default StepBar;
