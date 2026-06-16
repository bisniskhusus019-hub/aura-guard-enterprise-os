import Link from "next/link";
import { LeadCaptureForm } from "@/components/lead-capture-form";

export default function DemoRequestPage() {
  return (
    <main className="container" style={{ padding: "34px 0 84px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 54 }}>
        <Link href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</Link>
        <Link className="btn btn-secondary" href="/dashboard">Dashboard Demo</Link>
      </header>

      <div className="badge">Request Demo · See the governance workflow</div>
      <h1 className="section-title" style={{ marginTop: 18 }}>Request an AURA-GUARD demo.</h1>
      <p className="section-copy">Use this page for agencies, SaaS teams, consultants, and companies that want to see the audit, dashboard, report, and subscription workflow before buying.</p>
      <LeadCaptureForm mode="demo" />
    </main>
  );
}
