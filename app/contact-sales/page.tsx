import Link from "next/link";
import { LeadCaptureForm } from "@/components/lead-capture-form";

export default function ContactSalesPage() {
  return (
    <main className="container" style={{ padding: "34px 0 84px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 54 }}>
        <Link href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</Link>
        <Link className="btn btn-secondary" href="/pricing">View Pricing</Link>
      </header>

      <div className="badge">Contact Sales · High-ticket AI governance</div>
      <h1 className="section-title" style={{ marginTop: 18 }}>Talk to AURA-GUARD sales.</h1>
      <p className="section-copy">Use this form for Professional Audit, Enterprise Readiness, monthly monitoring, Enterprise OS, or partner licensing interest.</p>
      <LeadCaptureForm mode="sales" />
    </main>
  );
}
