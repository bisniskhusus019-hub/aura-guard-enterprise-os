import Link from "next/link";
import { DashboardShell } from "@/components/dashboard-shell";
import { getOpsSummary } from "@/lib/ops-data";

export default async function SalesDashboardPage() {
  const ops = await getOpsSummary();

  return (
    <DashboardShell activeHref="/dashboard/sales">
      <div>
        <div className="badge">Sales pipeline · {ops.source}</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Sales Operations</h1>
        <p className="section-copy">Track leads, demo requests, plan interest, qualification, and proposal readiness from one internal view.</p>
        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
          <div className="metric-card"><div className="metric-label">Sales Leads</div><div className="metric-value">{ops.salesLeads}</div></div>
          <div className="metric-card"><div className="metric-label">Demo Requests</div><div className="metric-value">{ops.demoRequests}</div></div>
          <div className="metric-card"><div className="metric-label">Entry Offer</div><div className="metric-value">$299</div></div>
          <div className="metric-card"><div className="metric-label">Top Offer</div><div className="metric-value">$15k</div></div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Sales Actions</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn btn-primary" href="/contact-sales">Open Contact Sales Form</Link>
            <Link className="btn btn-secondary" href="/demo-request">Open Demo Request Form</Link>
            <Link className="btn btn-secondary" href="/pricing">Review Pricing</Link>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
