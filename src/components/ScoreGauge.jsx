import "./ScoreGauge.css";

function ScoreGauge({ score = 0 }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (score / 100) * circumference;

  return (
    <div className="gauge-wrap">
      <svg className="gauge" viewBox="0 0 130 130">
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b5bdb" />
            <stop offset="100%" stopColor="#2f9e44" />
          </linearGradient>
        </defs>
        <circle className="gauge-bg" cx="65" cy="65" r={radius} />
        <circle className="gauge-fill" cx="65" cy="65" r={radius} style={{ strokeDasharray: circumference, strokeDashoffset: dashOffset }} />
      </svg>
      <div className="gauge-score">{score}</div>
    </div>
  );
}

export default ScoreGauge;
