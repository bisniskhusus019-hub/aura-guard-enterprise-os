import { DashboardShell } from "@/components/dashboard-shell";
import { getOpsSummary } from "@/lib/ops-data";

export default async function SupportPage() {
  const ops = await getOpsSummary();

  return (
    <DashboardShell activeHref="/dashboard/support">
      <div>
        <div className="badge">Customer success · {ops.source}</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Support Operations</h1>
        <p className="section-copy">Track client requests, onboarding questions, report delivery issues, priority, and resolution state.</p>
        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
          <div className="metric-card"><div className="metric-label">Open Requests</div><div className="metric-value">{ops.openSupport}</div></div>
          <div className="metric-card"><div className="metric-label">Priority Queue</div><div className="metric-value">0</div></div>
          <div className="metric-card"><div className="metric-label">Response Mode</div><div className="metric-value" style={{ fontSize: 22 }}>Manual</div></div>
          <div className="metric-card"><div className="metric-label">Client Notes</div><div className="metric-value">Ready</div></div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Support Queue</h2>
          <table>
            <thead><tr><th>Subject</th><th>Priority</th><th>Status</th><th>Owner</th></tr></thead>
            <tbody><tr><td>Demo support request</td><td>Medium</td><td>Open</td><td>Operations</td></tr></tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
