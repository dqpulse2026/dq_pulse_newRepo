import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <main className="landing">
      <section className="hero hero-grid">
        <div>
          <p className="eyebrow">Enterprise Data Readiness Platform</p>
          <h1>Audit your BigQuery data quality with clarity, confidence, and AI-ready guidance.</h1>
          <p>
            DQ Pulse turns technical telemetry into executive-friendly insights, so growth, product, and analytics teams can
            align on what to fix next.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/auth">Start free audit</Link>
            <a className="btn btn-ghost" href="#workflow">See product tour</a>
          </div>
        </div>
        <article className="hero-showcase">
          <h3>Live Audit Preview</h3>
          <ul>
            <li><strong>78</strong> Overall confidence score</li>
            <li><strong>3</strong> High-impact findings detected</li>
            <li><strong>5</strong> Prioritized actions generated</li>
          </ul>
          <p>Built for non-technical stakeholders and data teams to collaborate on one trusted readiness score.</p>
        </article>
      </section>

      <section id="platform" className="section-block">
        <h2>Built like a premium intelligence product</h2>
        <div className="feature-grid">
          <article><h3>AI Readiness Lens</h3><p>Understand whether your data is usable for machine learning and activation.</p></article>
          <article><h3>Executive Summaries</h3><p>Business language findings, confidence indicators, and clear decision context.</p></article>
          <article><h3>Action Plans</h3><p>Prioritized next steps with impact and effort guidance for teams.</p></article>
        </div>
      </section>

      <section id="workflow" className="section-block workflow-preview">
        <h2>Guided onboarding from sign-in to action plan</h2>
        <div className="workflow-steps">
          <article><span>01</span><h3>Business profile</h3><p>Select goals so checks match your growth model.</p></article>
          <article><span>02</span><h3>Audit depth</h3><p>Choose complete, ML readiness, or tracking integrity.</p></article>
          <article><span>03</span><h3>Connect data</h3><p>Securely connect your GA4 export dataset in BigQuery.</p></article>
          <article><span>04</span><h3>Scan + explain</h3><p>Get severity-coded findings and recommended fixes.</p></article>
        </div>
      </section>

      <section id="ai-readiness" className="section-block cta-band">
        <h2>Move from “data exists” to “data is trusted”</h2>
        <p>Use DQ Pulse as the quality layer before attribution modeling, LTV forecasting, or activation workflows.</p>
        <Link className="btn btn-primary" to="/auth">Launch your first audit</Link>
      </section>

      <footer className="marketing-footer">© {new Date().getFullYear()} DQ Pulse · Secure · Read-only · Built for enterprise teams</footer>
    </main>
  );
}

export default LandingPage;
