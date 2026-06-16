import Link from "next/link";
import { getPlanByCode, formatUsd } from "@/lib/pricing";

function getStripePriceId(planCode: string) {
  const envKey = `STRIPE_PRICE_${planCode.toUpperCase()}`;
  return process.env[envKey];
}

export default async function CheckoutPage({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const params = await searchParams;
  const plan = getPlanByCode(params.plan ?? "professional_audit_999");

  if (!plan) {
    return (
      <main className="container" style={{ padding: "70px 0" }}>
        <h1 className="section-title">Plan not found</h1>
        <Link className="btn btn-primary" href="/pricing">Back to Pricing</Link>
      </main>
    );
  }

  const billingConfigured = Boolean(process.env.STRIPE_SECRET_KEY && getStripePriceId(plan.code));

  return (
    <main className="container" style={{ padding: "70px 0" }}>
      <Link href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</Link>
      <div className="card" style={{ padding: 32, maxWidth: 760, marginTop: 48 }}>
        <div className="badge">{billingConfigured ? "Checkout-ready routing" : "Sales-assisted checkout"}</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Confirm {plan.name}</h1>
        <p className="section-copy">{billingConfigured ? "Hosted checkout is configured for this plan." : "Payment is not live yet. Submit a sales or demo request to continue manually."}</p>
        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 22 }}>
          <div className="metric-card"><div className="metric-label">Price</div><div className="metric-value">{formatUsd(plan.price)}</div></div>
          <div className="metric-card"><div className="metric-label">Type</div><div className="metric-value" style={{ fontSize: 22 }}>{plan.type}</div></div>
          <div className="metric-card"><div className="metric-label">Reports</div><div className="metric-value">{plan.includedReports}</div></div>
          <div className="metric-card"><div className="metric-label">Workspaces</div><div className="metric-value">{plan.includedWorkspaces}</div></div>
        </div>
        {billingConfigured ? (
          <form action="/api/billing/checkout" method="POST">
            <input type="hidden" name="planCode" value={plan.code} />
            <button className="btn btn-primary" type="submit">Continue to Hosted Checkout</button>
          </form>
        ) : (
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn btn-primary" href="/contact-sales">Contact Sales</Link>
            <Link className="btn btn-secondary" href="/demo-request">Request Demo</Link>
            <Link className="btn btn-secondary" href="/pricing">Back to Pricing</Link>
          </div>
        )}
        <p style={{ color: "var(--muted)", lineHeight: 1.7, marginTop: 18 }}>Paid checkout can be activated later by adding the billing server key and matching price ID in Vercel.</p>
      </div>
    </main>
  );
}
