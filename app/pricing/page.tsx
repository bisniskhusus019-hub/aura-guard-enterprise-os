import Link from "next/link";
import { auraPlans, formatUsd } from "@/lib/pricing";

export default function PricingPage() {
  return (
    <main className="container" style={{ padding: "34px 0 84px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 54 }}>
        <Link href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</Link>
        <Link className="btn btn-secondary" href="/dashboard">Dashboard Demo</Link>
      </header>

      <div className="badge">Premium audit, subscription, and partner plans</div>
      <h1 className="section-title" style={{ marginTop: 18 }}>Pricing built for serious B2B AI governance.</h1>
      <p className="section-copy">Start with a paid audit, expand into monthly monitoring, then upgrade into Enterprise OS or Partner License for larger recurring revenue.</p>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginTop: 34 }}>
        {auraPlans.map((plan) => (
          <div className="card" style={{ padding: 24 }} key={plan.code}>
            <div className="badge">{plan.type.replace("_", " ")}</div>
            <h2 style={{ fontSize: 28, letterSpacing: "-0.04em" }}>{plan.name}</h2>
            <div style={{ fontSize: 46, fontWeight: 900, letterSpacing: "-0.07em" }}>{formatUsd(plan.price)}</div>
            {plan.setupFee ? <p style={{ color: "var(--muted)" }}>Setup: {formatUsd(plan.setupFee)}</p> : null}
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{plan.description}</p>
            <p style={{ lineHeight: 1.7 }}><strong>Best for:</strong> {plan.bestFor}</p>
            <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", margin: "18px 0" }}>
              <div className="metric-card"><div className="metric-label">Reports</div><div className="metric-value" style={{ fontSize: 24 }}>{plan.includedReports}</div></div>
              <div className="metric-card"><div className="metric-label">Workspaces</div><div className="metric-value" style={{ fontSize: 24 }}>{plan.includedWorkspaces}</div></div>
              <div className="metric-card"><div className="metric-label">AI Tools</div><div className="metric-value" style={{ fontSize: 24 }}>{plan.includedAiTools}</div></div>
            </div>
            <ul style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <Link className="btn btn-primary" href={`/checkout?plan=${plan.code}`} style={{ width: "100%" }}>{plan.cta}</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
