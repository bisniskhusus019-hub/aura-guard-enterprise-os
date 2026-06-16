import Link from "next/link";

const sections = [
  {
    title: "Company Profile",
    fields: ["Company name", "Website", "Industry", "Country/region", "Company size", "Main buyer contact", "Contact email"],
  },
  {
    title: "AI Usage",
    fields: ["AI tools currently used", "Departments using AI", "Business functions using AI", "Approved or unofficial usage", "Existing AI policy"],
  },
  {
    title: "Data Exposure",
    fields: ["Customer data", "Financial data", "HR data", "Contracts/legal documents", "Internal knowledge base", "API keys or technical logs"],
  },
  {
    title: "Agent Autonomy",
    fields: ["Draft-only actions", "Can send emails", "Can update CRM/database", "Can approve refunds/payments", "Can call external tools/API"],
  },
  {
    title: "Human Approval",
    fields: ["Actions requiring approval", "Approval owner", "Escalation process", "Approval logs"],
  },
  {
    title: "Desired Output",
    fields: ["Starter Audit", "Professional Audit", "Enterprise Readiness Report", "White-Label Partner Review"],
  },
];

export default function AuditIntakePage() {
  return (
    <main className="container" style={{ padding: "34px 0 84px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 54 }}>
        <Link href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</Link>
        <Link className="btn btn-secondary" href="/dashboard">Dashboard Demo</Link>
      </header>

      <div className="badge">Paid audit intake · Enterprise-ready questionnaire</div>
      <h1 className="section-title" style={{ marginTop: 18 }}>AI Risk Audit Intake</h1>
      <p className="section-copy">
        This intake structure captures the minimum evidence needed to generate an AI risk score, permission matrix, data exposure map, vendor review, and executive audit report.
      </p>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginTop: 34 }}>
        {sections.map((section) => (
          <div className="card" style={{ padding: 24 }} key={section.title}>
            <h2 style={{ marginTop: 0 }}>{section.title}</h2>
            <div className="grid">
              {section.fields.map((field) => (
                <label key={field} style={{ display: "grid", gap: 8, color: "var(--muted)", fontSize: 13 }}>
                  {field}
                  <input
                    placeholder={field}
                    style={{ padding: 12, borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.04)", color: "var(--text)" }}
                  />
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ padding: 24, marginTop: 22 }}>
        <h2 style={{ marginTop: 0 }}>Commercial Routing</h2>
        <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          Intake answers should route prospects into Starter Audit, Professional Audit, Enterprise Readiness Report, or White-Label Partner License. Live submission wiring will connect this page to Supabase in the next engineering pass.
        </p>
      </div>
    </main>
  );
}
