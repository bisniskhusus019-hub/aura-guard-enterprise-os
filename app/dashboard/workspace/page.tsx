import { DashboardShell } from "@/components/dashboard-shell";

export default function WorkspacePage() {
  return (
    <DashboardShell activeHref="/dashboard/workspace">
      <div>
        <div className="badge">AURA-GUARD module · Workspace</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Workspace</h1>
        <p className="section-copy">Organization profile, team roles, client separation, integrations, and manual billing readiness.</p>
        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
          <div className="metric-card"><div className="metric-label">Member Roles</div><div className="metric-value">Ready</div></div>
          <div className="metric-card"><div className="metric-label">Invites</div><div className="metric-value">Ready</div></div>
          <div className="metric-card"><div className="metric-label">Client Split</div><div className="metric-value">Ready</div></div>
          <div className="metric-card"><div className="metric-label">Billing</div><div className="metric-value">Manual</div></div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Workspace Readiness</h2>
          <table>
            <thead><tr><th>Area</th><th>Status</th><th>Purpose</th><th>Next Hook</th></tr></thead>
            <tbody>
              <tr><td>Members</td><td>Schema ready</td><td>Team access</td><td>Connect login later</td></tr>
              <tr><td>Organizations</td><td>Live</td><td>Client separation</td><td>Workspace switcher</td></tr>
              <tr><td>Integrations</td><td>Schema ready</td><td>External tools</td><td>Deployment env later</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
