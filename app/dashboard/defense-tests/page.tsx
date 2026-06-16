import { DashboardShell } from "@/components/dashboard-shell";

export default function DefenseTestsPage() {
  return (
    <DashboardShell activeHref="/dashboard/defense-tests">
      <div>
        <div className="badge">AURA-GUARD module · Defense Tests</div>
        <h1 className="section-title" style={{ marginTop: 16 }}>Defense Tests</h1>
        <p className="section-copy">Stores defensive validation results, severity, evidence notes, and mitigation recommendations for AI workflows.</p>

        <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
          <div className="metric-card"><div className="metric-label">Tests Ready</div><div className="metric-value">6</div></div>
          <div className="metric-card"><div className="metric-label">Evidence Mode</div><div className="metric-value" style={{ fontSize: 22 }}>Audit</div></div>
          <div className="metric-card"><div className="metric-label">Severity Bands</div><div className="metric-value">5</div></div>
          <div className="metric-card"><div className="metric-label">Status</div><div className="metric-value" style={{ fontSize: 22 }}>Ready</div></div>
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Validation Table</h2>
          <table>
            <thead><tr><th>Test</th><th>Category</th><th>Severity</th><th>Status</th><th>Mitigation</th></tr></thead>
            <tbody>
              <tr><td>Policy override resistance</td><td>Instruction control</td><td>High</td><td>Ready</td><td>Policy isolation</td></tr>
              <tr><td>Hidden context protection</td><td>Data protection</td><td>Critical</td><td>Ready</td><td>Context minimization</td></tr>
              <tr><td>Tool action gating</td><td>Agency control</td><td>High</td><td>Ready</td><td>Approval workflow</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
