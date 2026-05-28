import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Panel from "../components/Panel";
import { useAudit } from "../context/AuditContext";

function AuthPage() {
  const [email, setEmail] = useState("analyst@example.com");
  const { signIn } = useAudit();
  const navigate = useNavigate();

  const login = () => {
    signIn(email);
    navigate("/app/audit");
  };

  return (
    <main className="auth-page">
      <section className="auth-grid">
        <Panel className="signin">
          <p className="eyebrow">Welcome</p>
          <h1>Sign in to your audit workspace</h1>
          <p>Access guided setup, confidence scoring, and recommendations your business team can understand.</p>
          <div className="stack">
            <Button onClick={login}>Continue with Google</Button>
            <div className="signin-grid">
              <input value={email} onChange={(event) => setEmail(event.target.value)} />
              <input defaultValue="DEMO2026" />
            </div>
            <Button kind="ghost" onClick={login}>
              Sign in with email
            </Button>
          </div>
        </Panel>
        <Panel className="auth-preview">
          <h3>Why teams choose DQ Pulse</h3>
          <ul>
            <li>Plain-language scorecards for leadership</li>
            <li>Enterprise visual clarity inspired by modern AI SaaS</li>
            <li>Read-only BigQuery scanning with zero data mutation</li>
          </ul>
        </Panel>
      </section>
    </main>
  );
}

export default AuthPage;
