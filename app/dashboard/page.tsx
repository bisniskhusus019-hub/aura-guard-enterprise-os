import { DashboardShell } from "@/components/dashboard-shell";
import { RiskScoreCard } from "@/components/risk-score-card";
import { aiInventory, demoAssessment, remediationRoadmap } from "@/lib/demo-data";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 18, alignItems: "start", marginBottom: 28 }}>
        <div>
          <div className="badge">Demo workspace · AURA-GUARD Demo Client</div>
          <h1 className="section-title" style={{ marginTop: 16 }}>AI Risk Command Center</h1>
          <p className="section-copy">A boardroom-ready view of AI usage, agent autonomy, approval gaps, data exposure, vendor risk, and compliance readiness.</p>
        </div>
      </div>

      <div className="metric-grid" style={{ marginBottom: 18 }}>
        <div className="metric-card"><div className="metric-label">Total AI Tools</div><div className="metric-value">3</div></div>
        <div className="metric-card"><div className="metric-label">Shadow AI Items</div><div className="metric-value">1</div></div>
        <div className="metric-card"><div className="metric-label">Approval Gaps</div><div className="metric-value">6</div></div>
        <div className="metric-card"><div className="metric-label">Reports Ready</div><div className="metric-value">1</div></div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "0.85fr 1.15fr", alignItems: "start" }}>
        <RiskScoreCard result={demoAssessment} />

        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>AI Inventory Snapshot</h2>
          <table>
            <thead>
              <tr>
                <th>Tool</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Risk</th>
              </tr>
            </thead>
            <tbody>
              {aiInventory.map((item) => (
                <tr key={item.tool}>
                  <td>{item.tool}</td>
                  <td>{item.owner}</td>
                  <td>{item.status}</td>
                  <td>{item.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card" style={{ padding: 24, marginTop: 18 }}>
        <h2 style={{ marginTop: 0 }}>30-Day Remediation Roadmap</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {remediationRoadmap.map((item) => (
            <div className="metric-card" key={item.week}>
              <div className="metric-label">{item.week}</div>
              <strong>{item.title}</strong>
              <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{item.action}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
