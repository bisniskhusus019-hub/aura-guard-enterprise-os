import { DashboardShell } from "@/components/dashboard-shell";
import { getOpsSummary } from "@/lib/ops-data";

const steps = [
  ["Collect company profile", "Done", "Operations"],
  ["Collect AI usage inventory", "Active", "Client"],
  ["Run risk scoring", "Open", "Auditor"],
  ["Generate executive report", "Open", "Auditor"],
  ["Deliver remediation roadmap", "Open", "Operations"],
];

export default async function OnboardingPage() {
  const ops = await getOpsSummary();

  return (
    <DashboardShell activeHref="/dashboard/onboarding">
      <div>
        <div className="badge">Client delivery · {ops.source}</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Client Onboarding</h1>
        <p className="section-copy">Turn a paid audit into a repeatable delivery workflow with steps, owners, package tier, and target date.</p>
        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
          <div className="metric-card"><div className="metric-label">Active Projects</div><div className="metric-value">{ops.activeOnboarding}</div></div>
          <div className="metric-card"><div className="metric-label">Delivery Window</div><div className="metric-value">14d</div></div>
          <div className="metric-card"><div className="metric-label">Package</div><div className="metric-value" style={{ fontSize: 22 }}>Professional</div></div>
          <div className="metric-card"><div className="metric-label">Report Ready</div><div className="metric-value">Soon</div></div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Delivery Steps</h2>
          <table>
            <thead><tr><th>Step</th><th>Status</th><th>Owner</th></tr></thead>
            <tbody>{steps.map((row) => <tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
