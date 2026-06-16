import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="container" style={{ padding: "34px 0 84px" }}>
      <Link href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</Link>
      <div className="badge" style={{ marginTop: 54 }}>Privacy</div>
      <h1 className="section-title" style={{ marginTop: 18 }}>Privacy Notice</h1>
      <div className="card" style={{ padding: 28, marginTop: 28 }}>
        <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>AURA-GUARD is designed to collect only the information needed to evaluate AI governance workflows, generate reports, manage workspaces, and support client delivery.</p>
        <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>Sensitive keys, payment credentials, and service-role credentials must be stored only in secure environment variables, not in public code or client-side pages.</p>
        <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>This notice is a launch-ready placeholder and should be reviewed before accepting production customers.</p>
      </div>
    </main>
  );
}
