import Link from "next/link";
import { DashboardShell } from "@/components/dashboard-shell";
import { auraPlans, formatUsd } from "@/lib/pricing";

export default function BillingPage() {
  const monthlyPlans = auraPlans.filter((plan) => plan.type === "monthly");
  const partnerPlans = auraPlans.filter((plan) => plan.type === "partner");

  return (
    <DashboardShell activeHref="/dashboard/billing">
      <div>
        <div className="badge">Revenue layer · Billing-ready</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Billing & Subscription Control</h1>
        <p className="section-copy">This area is prepared for recurring subscriptions, one-time audit packages, partner licenses, usage limits, and customer portal management.</p>

        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
          <div className="metric-card"><div className="metric-label">Audit Entry</div><div className="metric-value">$299+</div></div>
          <div className="metric-card"><div className="metric-label">Monthly Core</div><div className="metric-value">$499+</div></div>
          <div className="metric-card"><div className="metric-label">Enterprise OS</div><div className="metric-value">$5k</div></div>
          <div className="metric-card"><div className="metric-label">Partner Max</div><div className="metric-value">$15k</div></div>
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Subscription Plans</h2>
          <table>
            <thead><tr><th>Plan</th><th>Price</th><th>Setup</th><th>Reports</th><th>Workspaces</th><th>Action</th></tr></thead>
            <tbody>
              {[...monthlyPlans, ...partnerPlans].map((plan) => (
                <tr key={plan.code}>
                  <td>{plan.name}</td>
                  <td>{formatUsd(plan.price)}</td>
                  <td>{plan.setupFee ? formatUsd(plan.setupFee) : "—"}</td>
                  <td>{plan.includedReports}</td>
                  <td>{plan.includedWorkspaces}</td>
                  <td><Link href={`/checkout?plan=${plan.code}`}>Open checkout</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card" style={{ padding: 24, marginTop: 18 }}>
          <h2 style={{ marginTop: 0 }}>Customer Portal</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>Once Stripe is configured and a customer exists, this sends customers to the billing portal for subscription management.</p>
          <form action="/api/billing/portal" method="POST">
            <button className="btn btn-secondary" type="submit">Open Customer Portal</button>
          </form>
        </div>
      </div>
    </DashboardShell>
  );
}
