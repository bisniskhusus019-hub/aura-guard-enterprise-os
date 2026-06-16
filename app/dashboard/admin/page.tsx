import { DashboardShell } from "@/components/dashboard-shell";
import { getOpsSummary } from "@/lib/ops-data";

export default async function AdminPage() {
  const ops = await getOpsSummary();

  return (
    <DashboardShell activeHref="/dashboard/admin">
      <div>
        <div className="badge">Founder ops · {ops.source}</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Admin Operations</h1>
        <p className="section-copy">Track production activation, environment setup, billing setup, auth setup, and deployment readiness from one founder-control page.</p>
        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
          <div className="metric-card"><div className="metric-label">Open Tasks</div><div className="metric-value">{ops.adminOpenTasks}</div></div>
          <div className="metric-card"><div className="metric-label">Supabase</div><div className="metric-value" style={{ fontSize: 22 }}>Ready</div></div>
          <div className="metric-card"><div className="metric-label">Billing</div><div className="metric-value" style={{ fontSize: 22 }}>Ready</div></div>
          <div className="metric-card"><div className="metric-label">Deploy</div><div className="metric-value" style={{ fontSize: 22 }}>Ready</div></div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Activation Tasks</h2>
          <table>
            <thead><tr><th>Task</th><th>Area</th><th>Priority</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>Configure production environment variables</td><td>Deployment</td><td>Critical</td><td>Open</td></tr>
              <tr><td>Connect hosted checkout price IDs</td><td>Billing</td><td>High</td><td>Open</td></tr>
              <tr><td>Enable production auth settings</td><td>Auth</td><td>High</td><td>Open</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
