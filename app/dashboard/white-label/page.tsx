import { DashboardShell } from "@/components/dashboard-shell";

export default function PartnerModePage() {
  return (
    <DashboardShell activeHref="/dashboard/white-label">
      <div>
        <div className="badge">AURA-GUARD module · Partner Mode</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Partner Mode</h1>
        <p className="section-copy">Supports agency branding, client workspaces, custom report packaging, and partner delivery workflows.</p>
        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
          <div className="metric-card"><div className="metric-label">Partner Profiles</div><div className="metric-value">1</div></div>
          <div className="metric-card"><div className="metric-label">Client Workspaces</div><div className="metric-value">Ready</div></div>
          <div className="metric-card"><div className="metric-label">Report Branding</div><div className="metric-value">Ready</div></div>
          <div className="metric-card"><div className="metric-label">Offer Tier</div><div className="metric-value">$5k+</div></div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Partner Package</h2>
          <table>
            <thead><tr><th>Area</th><th>Status</th><th>Use</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Brand profile</td><td>Schema ready</td><td>Agency delivery</td><td>Custom footer and color</td></tr>
              <tr><td>Client workspace</td><td>Schema ready</td><td>Multi-client separation</td><td>Connect to auth later</td></tr>
              <tr><td>Report package</td><td>Ready</td><td>Premium audit delivery</td><td>Printable report route exists</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
