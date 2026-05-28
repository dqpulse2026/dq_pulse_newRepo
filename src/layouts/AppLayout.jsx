import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAudit } from "../context/AuditContext";

function AppLayout() {
  const { user, signOut, scores } = useAudit();
  const navigate = useNavigate();

  return (
    <div className="workspace-shell">
      <header className="workspace-nav glass-nav">
        <div className="workspace-brand">
          <span className="brand-chip">⚡ DQ PULSE</span>
          <p>Data Quality Intelligence</p>
        </div>
        <nav>
          <NavLink to="/app/audit">Audit Wizard</NavLink>
          <NavLink to="/app/results">Results</NavLink>
          <NavLink to="/app/findings">Findings</NavLink>
          <NavLink to="/app/recommendations">Recommendations</NavLink>
          <NavLink to="/app/settings">Settings</NavLink>
        </nav>
        <div className="workspace-meta">
          {scores ? <span className="meta-pill">Latest score: {scores.score}</span> : null}
          <span className="meta-pill">{user?.email}</span>
          <button
            className="text-btn"
            onClick={() => {
              signOut();
              navigate("/");
            }}
          >
            Sign out
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default AppLayout;
