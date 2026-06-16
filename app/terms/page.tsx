import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="container" style={{ padding: "34px 0 84px" }}>
      <Link href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>AURA-GUARD</Link>
      <div className="badge" style={{ marginTop: 54 }}>Terms</div>
      <h1 className="section-title" style={{ marginTop: 18 }}>Terms of Use</h1>
      <div className="card" style={{ padding: 28, marginTop: 28 }}>
        <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>AURA-GUARD provides AI governance visibility, risk scoring, reporting, and operational workflow support. It does not provide legal certification or replace professional legal, compliance, or security review.</p>
        <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>Users are responsible for reviewing final client-facing materials, validating information, and using the platform according to applicable laws and internal policies.</p>
        <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>Payment, subscription, and partner terms will be finalized when the payment provider is connected and production launch begins.</p>
      </div>
    </main>
  );
}
