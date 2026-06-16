import Link from "next/link";
import { auditModules } from "@/lib/demo-data";

const pricing = [
  ["Starter Audit", "$299", "AI inventory, risk summary, and first remediation map."],
  ["Professional Audit", "$999", "Full AI governance report, permission matrix, and policy pack."],
  ["Enterprise Readiness", "$2,500", "Executive report, vendor review, compliance gaps, and 30-day plan."],
  ["Monitoring Core", "$499/mo", "Recurring governance monitoring after the audit."],
  ["Enterprise OS", "$5,000/mo", "Large-team operating system for AI governance workflows."],
  ["Strategic Partner", "$15,000+", "Premium partner package for agencies and consultancies."],
];

export default function HomePage() {
  return (
    <main>
      <header className="container" style={{ padding: "26px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong style={{ fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</strong>
        <div style={{ display: "flex", gap: 10 }}>
          <Link className="btn btn-secondary" href="/pricing">Pricing</Link>
          <Link className="btn btn-secondary" href="/dashboard">Dashboard Demo</Link>
        </div>
      </header>

      <section className="container" style={{ padding: "90px 0 70px" }}>
        <div className="badge">Enterprise AI Agent Governance · Security · Compliance</div>
        <h1 style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 0.92, letterSpacing: "-0.075em", margin: "24px 0" }}>
          Turn uncontrolled AI adoption into executive-ready governance evidence.
        </h1>
        <p className="section-copy">
          AURA-GUARD is a B2B SaaS web app for agencies, SaaS teams, and modern companies that need AI inventory, risk scoring, compliance mapping, report generation, and recurring governance monitoring.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 30 }}>
          <Link className="btn btn-primary" href="/audit-intake">Start AI Risk Intake</Link>
          <Link className="btn btn-secondary" href="/pricing">View Pricing Ladder</Link>
          <Link className="btn btn-secondary" href="/dashboard">Run Dashboard Demo</Link>
        </div>
      </section>

      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: "1.1fr 0.9fr" }}>
          <div>
            <h2 className="section-title">Built as a public website plus private SaaS dashboard.</h2>
            <p className="section-copy">
              The public website sells the audit. The intake collects evidence. The private dashboard tracks AI tools, workspaces, risks, compliance mapping, reports, subscriptions, and partner delivery workflows.
            </p>
          </div>
          <div className="card" style={{ padding: 26 }}>
            <div className="metric-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div className="metric-card"><div className="metric-label">Audit Score</div><div className="metric-value">0–100</div></div>
              <div className="metric-card"><div className="metric-label">Plans</div><div className="metric-value">8</div></div>
              <div className="metric-card"><div className="metric-label">Modules</div><div className="metric-value">12+</div></div>
              <div className="metric-card"><div className="metric-label">Top Offer</div><div className="metric-value">$15k+</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Governance modules for a larger product, not a small audit page.</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginTop: 28 }}>
            {auditModules.map((module) => (
              <div className="card" style={{ padding: 22 }} key={module}>
                <strong>{module}</strong>
                <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>Designed to turn messy AI usage into boardroom-ready evidence, reports, controls, and recurring monitoring.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <h2 className="section-title">High-ticket entry. Bigger subscriptions. Partner upside.</h2>
          <p className="section-copy">AURA-GUARD now supports one-time audits, monthly monitoring, enterprise OS pricing, and partner licensing.</p>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginTop: 28 }}>
            {pricing.map(([name, price, description]) => (
              <div className="card" style={{ padding: 24 }} key={name}>
                <div style={{ color: "var(--muted)", fontSize: 13 }}>{name}</div>
                <div style={{ fontSize: 38, fontWeight: 900, letterSpacing: "-0.06em", margin: "8px 0" }}>{price}</div>
                <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{description}</p>
              </div>
            ))}
          </div>
          <Link className="btn btn-primary" href="/pricing" style={{ marginTop: 26 }}>Open Full Pricing Page</Link>
        </div>
      </section>
    </main>
  );
}
