import Link from "next/link";
import { AuthForm } from "@/components/auth-form";

export default function SignupPage() {
  return (
    <main className="container" style={{ padding: "70px 0" }}>
      <Link href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</Link>
      <div className="card" style={{ padding: 32, maxWidth: 560, marginTop: 48 }}>
        <div className="badge">Workspace onboarding · Supabase Auth-ready</div>
        <h1 className="section-title" style={{ marginTop: 16, fontSize: 46 }}>Create Workspace</h1>
        <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>Account creation is ready to connect to Supabase Auth. Workspace and membership tables already exist for the next production layer.</p>
        <AuthForm mode="signup" />
        <Link className="btn btn-secondary" href="/login" style={{ marginTop: 12 }}>Already have access?</Link>
      </div>
    </main>
  );
}
