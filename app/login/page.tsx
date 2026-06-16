import Link from "next/link";
import { AuthForm } from "@/components/auth-form";

export default function LoginPage() {
  return (
    <main className="container" style={{ padding: "70px 0" }}>
      <Link href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</Link>
      <div className="card" style={{ padding: 32, maxWidth: 520, marginTop: 48 }}>
        <div className="badge">Supabase Auth-ready</div>
        <h1 className="section-title" style={{ marginTop: 16, fontSize: 46 }}>Login</h1>
        <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>Login can connect to Supabase Auth when project environment variables are configured.</p>
        <AuthForm mode="login" />
        <Link className="btn btn-secondary" href="/signup" style={{ marginTop: 12 }}>Create account</Link>
      </div>
    </main>
  );
}
