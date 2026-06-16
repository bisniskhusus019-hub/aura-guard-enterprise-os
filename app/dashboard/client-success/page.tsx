import { DashboardShell } from "@/components/dashboard-shell";
import { getAutomationSummary } from "@/lib/automation-data";

export default async function ClientSuccessPage() {
  const data = await getAutomationSummary();

  return (
    <DashboardShell activeHref="/dashboard/client-success">
      <div>
        <div className="badge">Client success · {data.source}</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Client Success Milestones</h1>
        <p className="section-copy">Track audit evidence, report handoff, roadmap review, and monitoring expansion milestones.</p>
        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
          <div className="metric-card"><div className="metric-label">Milestones</div><div className="metric-value">{data.deliveryMilestones}</div></div>
          <div className="metric-card"><div className="metric-label">Mode</div><div className="metric-value" style={{ fontSize: 22 }}>Audit</div></div>
          <div className="metric-card"><div className="metric-label">Expansion</div><div className="metric-value" style={{ fontSize: 22 }}>Monitoring</div></div>
          <div className="metric-card"><div className="metric-label">Timeline</div><div className="metric-value">14d</div></div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Milestone Flow</h2>
          <table>
            <thead><tr><th>Milestone</th><th>Status</th><th>Owner</th><th>Business Value</th></tr></thead>
            <tbody>
              <tr><td>Complete AI inventory evidence</td><td>Active</td><td>Client</td><td>Audit input</td></tr>
              <tr><td>Generate executive audit report</td><td>Open</td><td>Auditor</td><td>Paid deliverable</td></tr>
              <tr><td>Review roadmap</td><td>Open</td><td>Operations</td><td>Client outcome</td></tr>
              <tr><td>Recommend monthly monitoring</td><td>Open</td><td>Sales</td><td>Subscription expansion</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
