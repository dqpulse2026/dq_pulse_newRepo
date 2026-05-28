import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div className="public-shell">
      <header className="marketing-nav glass-nav">
        <Link to="/" className="brand-chip">⚡ DQ PULSE</Link>
        <nav>
          <a href="/#platform">Platform</a>
          <a href="/#workflow">Workflow</a>
          <a href="/#ai-readiness">AI Readiness</a>
          <Link className="nav-cta" to="/auth">Get Started</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default PublicLayout;
