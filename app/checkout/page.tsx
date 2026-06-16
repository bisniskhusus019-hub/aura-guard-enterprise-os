import Link from "next/link";
import { getPlanByCode, formatUsd } from "@/lib/pricing";

export default function CheckoutPage({ searchParams }: { searchParams: { plan?: string } }) {
  const plan = getPlanByCode(searchParams.plan ?? "professional_audit_999");

  if (!plan) {
    return (
      <main className="container" style={{ padding: "70px 0" }}>
        <h1 className="section-title">Plan not found</h1>
        <Link className="btn btn-primary" href="/pricing">Back to Pricing</Link>
      </main>
    );
  }

  return (
    <main className="container" style={{ padding: "70px 0" }}>
      <Link href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</Link>
      <div className="card" style={{ padding: 32, maxWidth: 760, marginTop: 48 }}>
        <div className="badge">Checkout-ready routing</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Confirm {plan.name}</h1>
        <p className="section-copy">This checkout page is ready to connect to Stripe Checkout when `STRIPE_SECRET_KEY` and price IDs are added in Vercel.</p>
        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 22 }}>
          <div className="metric-card"><div className="metric-label">Price</div><div className="metric-value">{formatUsd(plan.price)}</div></div>
          <div className="metric-card"><div className="metric-label">Type</div><div className="metric-value" style={{ fontSize: 22 }}>{plan.type}</div></div>
          <div className="metric-card"><div className="metric-label">Reports</div><div className="metric-value">{plan.includedReports}</div></div>
          <div className="metric-card"><div className="metric-label">Workspaces</div><div className="metric-value">{plan.includedWorkspaces}</div></div>
        </div>
        <form action="/api/billing/checkout" method="POST">
          <input type="hidden" name="planCode" value={plan.code} />
          <button className="btn btn-primary" type="submit">Continue to Checkout</button>
        </form>
        <p style={{ color: "var(--muted)", lineHeight: 1.7, marginTop: 18 }}>If payment keys are not configured yet, the API returns a safe setup-needed response instead of breaking the site.</p>
      </div>
    </main>
  );
}
