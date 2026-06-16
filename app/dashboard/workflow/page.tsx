import { DashboardShell } from "@/components/dashboard-shell";
import { getAutomationSummary } from "@/lib/automation-data";

export default async function WorkflowPage() {
  const data = await getAutomationSummary();

  return (
    <DashboardShell activeHref="/dashboard/workflow">
      <div>
        <div className="badge">Workflow engine · {data.source}</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Workflow Automation</h1>
        <p className="section-copy">Prepared rules for lead replies, demo confirmations, onboarding messages, report-ready messages, and upgrade prompts.</p>
        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
          <div className="metric-card"><div className="metric-label">Templates</div><div className="metric-value">{data.templates}</div></div>
          <div className="metric-card"><div className="metric-label">Rules</div><div className="metric-value">{data.automationRules}</div></div>
          <div className="metric-card"><div className="metric-label">Queued</div><div className="metric-value">{data.queuedNotifications}</div></div>
          <div className="metric-card"><div className="metric-label">Mode</div><div className="metric-value" style={{ fontSize: 22 }}>Ready</div></div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Core Rules</h2>
          <table>
            <thead><tr><th>Trigger</th><th>Action</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td>Lead created</td><td>Queue reply</td><td>Fast sales response</td></tr>
              <tr><td>Demo requested</td><td>Queue confirmation</td><td>Demo follow-up</td></tr>
              <tr><td>Report generated</td><td>Queue delivery notice</td><td>Client delivery</td></tr>
              <tr><td>Audit completed</td><td>Queue upgrade prompt</td><td>Subscription upsell</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
