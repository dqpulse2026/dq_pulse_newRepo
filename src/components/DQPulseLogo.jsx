import { useId } from "react";

export default function DQPulseLogo({ size = "default", showTagline = false }) {
  const h = size === "small" ? 28 : size === "large" ? 48 : 36;
  const gradId = useId();
  const gradUrl = `url(#${gradId})`;
  return (
    <span className={`dq-logo dq-logo-${size}`} aria-label="DQ Pulse">
      <svg width={h} height={h} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a2540" />
            <stop offset="50%" stopColor="#1a73e8" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        {/* D shape */}
        <path d="M6 8h8c8 0 14 6 14 14s-6 14-14 14H6V8z" fill="none" stroke={gradUrl} strokeWidth="3.5" strokeLinejoin="round" />
        {/* Bar chart inside D */}
        <rect x="11" y="18" width="3" height="12" rx="1.5" fill="#4fc3f7" opacity="0.8" />
        <rect x="16" y="14" width="3" height="16" rx="1.5" fill="#1a73e8" opacity="0.9" />
        {/* Magnifying glass Q */}
        <circle cx="34" cy="22" r="10" fill="none" stroke={gradUrl} strokeWidth="3" />
        <line x1="41" y1="30" x2="46" y2="36" stroke={gradUrl} strokeWidth="3" strokeLinecap="round" />
        {/* Pulse line inside magnifier */}
        <polyline points="26,22 30,22 32,17 34,27 36,20 38,22 42,22" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="dq-logo-text">
        <span className="dq-logo-name">DQ <span className="dq-logo-pulse">Pulse</span></span>
        {showTagline && <span className="dq-logo-tagline">Insights that drive impact</span>}
      </span>
    </span>
  );
}
