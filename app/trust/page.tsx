import Link from "next/link";
import { trustItems } from "@/lib/final-readiness";

export default function TrustPage() {
  return (
    <main className="container" style={{ padding: "34px 0 84px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 54 }}>
        <Link href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</Link>
        <Link className="btn btn-secondary" href="/contact-sales">Contact Sales</Link>
      </header>
      <div className="badge">Trust center</div>
      <h1 className="section-title" style={{ marginTop: 18 }}>Prepared for serious AI governance buyers.</h1>
      <p className="section-copy">AURA-GUARD is designed around privacy, server-only secrets, human review, workspace separation, and hosted payment handoff.</p>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: 30 }}>
        {trustItems.map(([title, summary]) => (
          <div className="card" style={{ padding: 24 }} key={title}>
            <h2 style={{ marginTop: 0 }}>{title}</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{summary}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
