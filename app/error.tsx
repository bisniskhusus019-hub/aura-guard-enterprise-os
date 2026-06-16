"use client";

import Link from "next/link";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="container" style={{ padding: "90px 0" }}>
      <div className="badge">Runtime recovery</div>
      <h1 className="section-title" style={{ marginTop: 16 }}>Something needs attention</h1>
      <p className="section-copy">AURA-GUARD caught a runtime error instead of showing a blank page.</p>
      <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>Error: {error.message}</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
        <button className="btn btn-primary" onClick={() => reset()}>Try Again</button>
        <Link className="btn btn-secondary" href="/dashboard">Back to Dashboard</Link>
      </div>
    </main>
  );
}
