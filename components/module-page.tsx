import type { DashboardModule } from "@/lib/module-data";

export function ModulePage({ module }: { module: DashboardModule }) {
  return (
    <div>
      <div className="badge">AURA-GUARD module · {module.title}</div>
      <h1 className="section-title" style={{ marginTop: 16 }}>{module.title}</h1>
      <p className="section-copy">{module.description}</p>

      <div className="metric-grid" style={{ marginTop: 26, marginBottom: 18 }}>
        <div className="metric-card">
          <div className="metric-label">Primary Metric</div>
          <div className="metric-value" style={{ fontSize: module.metricValue.length > 4 ? 26 : 34 }}>{module.metricValue}</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Metric Type</div>
          <div className="metric-value" style={{ fontSize: 22 }}>{module.metricLabel}</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Module Status</div>
          <div className="metric-value" style={{ fontSize: 22 }}>Ready</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Evidence Mode</div>
          <div className="metric-value" style={{ fontSize: 22 }}>Audit</div>
        </div>
      </div>

      <div className="card" style={{ padding: 24 }}>
        <h2 style={{ marginTop: 0 }}>Module Table</h2>
        <table>
          <thead>
            <tr>
              {module.tableHeaders.map((header) => <th key={header}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {module.rows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell) => <td key={cell}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card" style={{ padding: 24, marginTop: 18 }}>
        <h2 style={{ marginTop: 0 }}>Required Actions</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {module.actions.map((action) => (
            <div className="metric-card" key={action}>
              <strong>{action}</strong>
              <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>This action contributes evidence to the final AI Risk Audit Report.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
