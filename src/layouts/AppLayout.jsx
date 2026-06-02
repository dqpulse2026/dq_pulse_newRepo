import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAudit } from "../context/AuditContext";
import DQPulseLogo from "../components/DQPulseLogo";

export default function AppLayout() {
  const { user, signOut, scores } = useAudit();
  const navigate = useNavigate();
  const hasResults = Boolean(scores);

  return (
    <div className="workspace-shell">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header className="workspace-nav">
        <div className="workspace-brand">
          <NavLink to="/app/audit" className="brand-link" aria-label="DQ Pulse home">
            <DQPulseLogo size="small" />
          </NavLink>
        </div>

        <nav aria-label="Main navigation" className="workspace-nav-links">
          <NavLink to="/app/audit" className="nav-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l2 2"/></svg>
            New Audit
          </NavLink>

          {hasResults ? (
            <NavLink to="/app/results" className="nav-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              Results
            </NavLink>
          ) : (
            <span className="nav-pill nav-locked" title="Run an audit first">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              Results
            </span>
          )}

          <NavLink to="/app/settings" className="nav-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            Settings
          </NavLink>
        </nav>

        <div className="workspace-meta">
          {scores ? <span className="meta-pill score-pill">Score: {scores.score}</span> : null}
          <div className="user-avatar-pill">
            <span className="user-avatar">{user?.email?.[0]?.toUpperCase() || "U"}</span>
            <span className="user-email">{user?.email}</span>
          </div>
          <button
            className="btn-signout"
            onClick={() => { signOut(); navigate("/"); }}
            aria-label="Sign out of your account"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </button>
        </div>
      </header>

      <div id="main-content">
        <Outlet />
      </div>
    </div>
  );
}
