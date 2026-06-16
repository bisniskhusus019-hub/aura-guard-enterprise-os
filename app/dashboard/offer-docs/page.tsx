import { DashboardShell } from "@/components/dashboard-shell";
import { auraPlans, formatUsd } from "@/lib/pricing";
import { getAutomationSummary } from "@/lib/automation-data";

export default async function OfferDocsPage() {
  const data = await getAutomationSummary();

  return (
    <DashboardShell activeHref="/dashboard/offer-docs">
      <div>
        <div className="badge">Offer documents · {data.source}</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Offer Documents</h1>
        <p className="section-copy">Generate plan-specific offer documents for paid audits, monitoring subscriptions, Enterprise OS, and partner licensing.</p>
        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
          <div className="metric-card"><div className="metric-label">Stored Offers</div><div className="metric-value">{data.proposals}</div></div>
          <div className="metric-card"><div className="metric-label">Invoices</div><div className="metric-value">{data.invoices}</div></div>
          <div className="metric-card"><div className="metric-label">Top Plan</div><div className="metric-value">$15k</div></div>
          <div className="metric-card"><div className="metric-label">API</div><div className="metric-value" style={{ fontSize: 22 }}>Ready</div></div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Offer Ladder</h2>
          <table>
            <thead><tr><th>Plan</th><th>Price</th><th>Type</th><th>Reports</th><th>Workspaces</th></tr></thead>
            <tbody>
              {auraPlans.map((plan) => (
                <tr key={plan.code}><td>{plan.name}</td><td>{formatUsd(plan.price)}</td><td>{plan.type}</td><td>{plan.includedReports}</td><td>{plan.includedWorkspaces}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
