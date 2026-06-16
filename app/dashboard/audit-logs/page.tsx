import { DashboardShell } from "@/components/dashboard-shell";

export default function ActivityEvidencePage() {
  return (
    <DashboardShell activeHref="/dashboard/audit-logs">
      <div>
        <div className="badge">AURA-GUARD module · Activity Evidence</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Activity Evidence</h1>
        <p className="section-copy">Tracks system events, review decisions, risk notes, and evidence summaries for executive reporting.</p>
        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
          <div className="metric-card"><div className="metric-label">Events</div><div className="metric-value">0</div></div>
          <div className="metric-card"><div className="metric-label">Evidence Mode</div><div className="metric-value" style={{ fontSize: 22 }}>Ready</div></div>
          <div className="metric-card"><div className="metric-label">Review Queue</div><div className="metric-value">0</div></div>
          <div className="metric-card"><div className="metric-label">Report Sync</div><div className="metric-value" style={{ fontSize: 22 }}>On</div></div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Evidence Table</h2>
          <table>
            <thead><tr><th>Event</th><th>Actor</th><th>Severity</th><th>Summary</th><th>Status</th></tr></thead>
            <tbody><tr><td>No live events yet</td><td>System</td><td>Info</td><td>Evidence structure ready</td><td>Ready</td></tr></tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
