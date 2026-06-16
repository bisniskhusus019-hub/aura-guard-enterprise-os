import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="container" style={{ padding: "70px 0" }}>
      <Link href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</Link>
      <div className="card" style={{ padding: 32, maxWidth: 560, marginTop: 48 }}>
        <div className="badge">Workspace onboarding shell</div>
        <h1 className="section-title" style={{ marginTop: 16, fontSize: 46 }}>Create Workspace</h1>
        <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>Prepared for account creation, organization setup, membership role assignment, and client workspace separation.</p>
        <div className="grid" style={{ marginTop: 22 }}>
          <input placeholder="Full name" style={{ padding: 14, borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.04)", color: "var(--text)" }} />
          <input placeholder="Work email" style={{ padding: 14, borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.04)", color: "var(--text)" }} />
          <input placeholder="Organization name" style={{ padding: 14, borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.04)", color: "var(--text)" }} />
          <input placeholder="Password" type="password" style={{ padding: 14, borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.04)", color: "var(--text)" }} />
          <button className="btn btn-primary">Create Workspace Shell</button>
          <Link className="btn btn-secondary" href="/login">Already have access?</Link>
        </div>
      </div>
    </main>
  );
}
