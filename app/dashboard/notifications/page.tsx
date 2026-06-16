import { DashboardShell } from "@/components/dashboard-shell";
import { getAutomationSummary } from "@/lib/automation-data";

export default async function NotificationsPage() {
  const data = await getAutomationSummary();

  return (
    <DashboardShell activeHref="/dashboard/notifications">
      <div>
        <div className="badge">Notification queue · {data.source}</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Notifications</h1>
        <p className="section-copy">Queue sales replies, demo confirmations, onboarding messages, report delivery notes, and upgrade prompts.</p>
        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
          <div className="metric-card"><div className="metric-label">Queued</div><div className="metric-value">{data.queuedNotifications}</div></div>
          <div className="metric-card"><div className="metric-label">Templates</div><div className="metric-value">{data.templates}</div></div>
          <div className="metric-card"><div className="metric-label">Status</div><div className="metric-value" style={{ fontSize: 22 }}>Prepared</div></div>
          <div className="metric-card"><div className="metric-label">Send Mode</div><div className="metric-value" style={{ fontSize: 22 }}>Manual</div></div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Prepared Messages</h2>
          <table>
            <thead><tr><th>Template</th><th>Use Case</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td>Professional Audit Lead Reply</td><td>Sales</td><td>Lead response</td></tr>
              <tr><td>Demo Request Confirmation</td><td>Demo</td><td>Demo follow-up</td></tr>
              <tr><td>Report Ready</td><td>Delivery</td><td>Report notification</td></tr>
              <tr><td>Monitoring Upgrade</td><td>Upsell</td><td>Recurring revenue prompt</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
