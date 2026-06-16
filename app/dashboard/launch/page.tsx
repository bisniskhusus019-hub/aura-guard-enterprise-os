import { DashboardShell } from "@/components/dashboard-shell";
import { launchChecklist } from "@/lib/final-readiness";

export default function LaunchPage() {
  const complete = launchChecklist.filter((item) => item.status === "complete").length;
  const pending = launchChecklist.filter((item) => item.status === "pending").length;

  return (
    <DashboardShell activeHref="/dashboard/launch">
      <div>
        <div className="badge">Final readiness · pre-payment</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Launch Readiness</h1>
        <p className="section-copy">This page shows what is finished and what is intentionally waiting for payment keys, auth configuration, and final production publish.</p>
        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
          <div className="metric-card"><div className="metric-label">Complete</div><div className="metric-value">{complete}</div></div>
          <div className="metric-card"><div className="metric-label">Pending</div><div className="metric-value">{pending}</div></div>
          <div className="metric-card"><div className="metric-label">Payment</div><div className="metric-value" style={{ fontSize: 22 }}>Only keys</div></div>
          <div className="metric-card"><div className="metric-label">Publish</div><div className="metric-value" style={{ fontSize: 22 }}>After env</div></div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Final Checklist</h2>
          <table>
            <thead><tr><th>Item</th><th>Area</th><th>Status</th></tr></thead>
            <tbody>
              {launchChecklist.map((item) => (
                <tr key={item.key}><td>{item.title}</td><td>{item.area}</td><td>{item.status}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
