import Link from "next/link";
import { featureAccessMatrix } from "@/lib/final-readiness";

export default function FeaturesPage() {
  return (
    <main className="container" style={{ padding: "34px 0 84px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 54 }}>
        <Link href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</Link>
        <Link className="btn btn-secondary" href="/pricing">Pricing</Link>
      </header>
      <div className="badge">Feature access matrix</div>
      <h1 className="section-title" style={{ marginTop: 18 }}>A bigger product needs clear plan boundaries.</h1>
      <p className="section-copy">AURA-GUARD separates public, audit, monitoring, enterprise, and partner capabilities so the price ladder matches the feature depth.</p>
      <div className="card" style={{ padding: 24, marginTop: 30 }}>
        <table>
          <thead><tr><th>Feature</th><th>Minimum Plan</th><th>Price Gate</th></tr></thead>
          <tbody>
            {featureAccessMatrix.map((row) => <tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td></tr>)}
          </tbody>
        </table>
      </div>
    </main>
  );
}
