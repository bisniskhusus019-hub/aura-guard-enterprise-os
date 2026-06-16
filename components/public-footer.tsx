import Link from "next/link";

const links = [
  ["Pricing", "/pricing"],
  ["Features", "/features"],
  ["Trust", "/trust"],
  ["Contact Sales", "/contact-sales"],
  ["Request Demo", "/demo-request"],
  ["Terms", "/terms"],
  ["Privacy", "/privacy"],
];

export function PublicFooter() {
  return (
    <footer className="container" style={{ padding: "48px 0", borderTop: "1px solid var(--border)", marginTop: 48 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
        <div>
          <strong style={{ fontSize: 18, letterSpacing: "-0.04em" }}>AURA-GUARD</strong>
          <p style={{ color: "var(--muted)", lineHeight: 1.7, maxWidth: 520 }}>
            Enterprise AI governance, risk reporting, client operations, and monitoring platform.
          </p>
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </div>
      </div>
    </footer>
  );
}
