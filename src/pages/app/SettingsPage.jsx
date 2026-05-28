import Panel from "../../components/Panel";

function SettingsPage() {
  return (
    <main className="workspace-page">
      <Panel>
        <h2>Settings & configuration</h2>
        <p className="helper-copy">Workspace-level controls placeholder for production integration.</p>
        <div className="settings-grid">
          <article>
            <h3>Data connectors</h3>
            <p>Manage additional BigQuery projects, service accounts, and region settings.</p>
          </article>
          <article>
            <h3>Alerts</h3>
            <p>Configure Slack/email alerts when score drops below threshold.</p>
          </article>
          <article>
            <h3>Team access</h3>
            <p>Invite team members and control viewer/editor/admin permissions.</p>
          </article>
        </div>
      </Panel>
    </main>
  );
}

export default SettingsPage;
