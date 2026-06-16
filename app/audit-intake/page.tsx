import Link from "next/link";
import { AuditIntakeForm } from "@/components/audit-intake-form";

export default function AuditIntakePage() {
  return (
    <main className="container" style={{ padding: "34px 0 84px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 54 }}>
        <Link href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>
          AURA-GUARD
        </Link>
        <Link className="btn btn-secondary" href="/dashboard">
          Dashboard Demo
        </Link>
      </header>

      <div className="badge">Paid audit intake · Supabase-ready submission flow</div>
      <h1 className="section-title" style={{ marginTop: 18 }}>AI Risk Audit Intake</h1>
      <p className="section-copy">
        This intake captures the evidence needed to generate an AI risk score, permission matrix, data exposure map, vendor review, and executive audit report. Submissions post to `/api/audit-intake` and are stored in Supabase when environment variables are configured.
      </p>

      <AuditIntakeForm />
    </main>
  );
}
