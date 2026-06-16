import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container" style={{ padding: "90px 0" }}>
      <div className="badge">404</div>
      <h1 className="section-title" style={{ marginTop: 16 }}>Page not found</h1>
      <p className="section-copy">This AURA-GUARD route does not exist or has not been activated yet.</p>
      <Link className="btn btn-primary" href="/dashboard">Back to Dashboard</Link>
    </main>
  );
}
