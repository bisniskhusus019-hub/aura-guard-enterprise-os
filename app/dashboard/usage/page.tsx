import { DashboardShell } from "@/components/dashboard-shell";
import { getOpsSummary } from "@/lib/ops-data";

export default async function UsagePage() {
  const ops = await getOpsSummary();

  return (
    <DashboardShell activeHref="/dashboard/usage">
      <div>
        <div className="badge">Usage · {ops.source}</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Usage & Entitlements</h1>
        <p className="section-copy">Track reports generated, workspaces used, AI tools tracked, and plan-based limits for subscriptions and partner packages.</p>
        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
          <div className="metric-card"><div className="metric-label">Reports Generated</div><div className="metric-value">{ops.reportsGenerated}</div></div>
          <div className="metric-card"><div className="metric-label">AI Tools Tracked</div><div className="metric-value">{ops.aiToolsTracked}</div></div>
          <div className="metric-card"><div className="metric-label">Workspaces Used</div><div className="metric-value">1</div></div>
          <div className="metric-card"><div className="metric-label">Plan Gate</div><div className="metric-value" style={{ fontSize: 22 }}>Ready</div></div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Entitlement Controls</h2>
          <table>
            <thead><tr><th>Limit</th><th>Current</th><th>Professional</th><th>Enterprise OS</th></tr></thead>
            <tbody>
              <tr><td>Reports</td><td>{ops.reportsGenerated}</td><td>3</td><td>30</td></tr>
              <tr><td>Workspaces</td><td>1</td><td>1</td><td>20</td></tr>
              <tr><td>AI Tools</td><td>{ops.aiToolsTracked}</td><td>50</td><td>1000</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
