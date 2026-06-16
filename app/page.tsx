import Link from "next/link";
import { auditModules } from "@/lib/demo-data";

const pricing = [
  ["Starter Audit", "$299", "AI inventory, risk summary, and first remediation map."],
  ["Professional Audit", "$999", "Full AI governance report, permission matrix, and policy pack."],
  ["Enterprise Readiness", "$2,500", "Executive report, vendor review, compliance gaps, and 30-day plan."],
  ["White-Label Partner", "$5k–$10k", "Agency-ready audit system and resellable client package."],
];

export default function HomePage() {
  return (
    <main>
      <header className="container" style={{ padding: "26px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong style={{ fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</strong>
        <Link className="btn btn-secondary" href="/dashboard">
          View Dashboard Demo
        </Link>
      </header>

      <section className="container" style={{ padding: "90px 0 70px" }}>
        <div className="badge">Enterprise AI Agent Governance · Security · Compliance</div>
        <h1 style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 0.92, letterSpacing: "-0.075em", margin: "24px 0" }}>
          Secure your AI agents before they leak data, break policy, or fail compliance.
        </h1>
        <p className="section-copy">
          AURA-GUARD is an enterprise AI governance operating system for agencies, SaaS teams, and modern businesses adopting AI tools, chatbots, and autonomous workflows.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 30 }}>
          <Link className="btn btn-primary" href="/dashboard">
            Run Demo AI Risk Audit
          </Link>
          <a className="btn btn-secondary" href="#pricing">
            View High-Ticket Offers
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: "1.1fr 0.9fr" }}>
          <div>
            <h2 className="section-title">Companies are adopting AI faster than they are controlling it.</h2>
            <p className="section-copy">
              Employees paste sensitive data into AI tools. Agencies deploy agents without permission matrices. SaaS teams add AI features without audit evidence. Founders cannot clearly explain what AI tools are used, what data they touch, what actions require approval, and where risk lives.
            </p>
          </div>
          <div className="card" style={{ padding: 26 }}>
            <div className="metric-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div className="metric-card"><div className="metric-label">Audit Score</div><div className="metric-value">0–100</div></div>
              <div className="metric-card"><div className="metric-label">Risk Band</div><div className="metric-value">5</div></div>
              <div className="metric-card"><div className="metric-label">Modules</div><div className="metric-value">11</div></div>
              <div className="metric-card"><div className="metric-label">Offer Max</div><div className="metric-value">$10k</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">One platform. Eleven governance modules.</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginTop: 28 }}>
            {auditModules.map((module) => (
              <div className="card" style={{ padding: 22 }} key={module}>
                <strong>{module}</strong>
                <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                  Designed to turn messy AI usage into boardroom-ready audit evidence and remediation actions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <h2 className="section-title">High-ticket from day one.</h2>
          <p className="section-copy">The product is positioned as a B2B audit and SaaS platform, not a cheap prompt pack.</p>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginTop: 28 }}>
            {pricing.map(([name, price, description]) => (
              <div className="card" style={{ padding: 24 }} key={name}>
                <div style={{ color: "var(--muted)", fontSize: 13 }}>{name}</div>
                <div style={{ fontSize: 38, fontWeight: 900, letterSpacing: "-0.06em", margin: "8px 0" }}>{price}</div>
                <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
