import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="container" style={{ padding: "70px 0" }}>
      <Link href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</Link>
      <div className="card" style={{ padding: 32, maxWidth: 520, marginTop: 48 }}>
        <div className="badge">Auth-ready shell</div>
        <h1 className="section-title" style={{ marginTop: 16, fontSize: 46 }}>Login</h1>
        <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>This page is prepared for Supabase Auth integration. The database already includes profile, membership, and invitation tables.</p>
        <div className="grid" style={{ marginTop: 22 }}>
          <input placeholder="Email" style={{ padding: 14, borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.04)", color: "var(--text)" }} />
          <input placeholder="Password" type="password" style={{ padding: 14, borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.04)", color: "var(--text)" }} />
          <button className="btn btn-primary">Login Shell</button>
          <Link className="btn btn-secondary" href="/signup">Create account</Link>
        </div>
      </div>
    </main>
  );
}
