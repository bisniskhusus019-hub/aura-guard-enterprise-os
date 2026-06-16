import { DashboardShell } from "@/components/dashboard-shell";
import { RiskScoreCard } from "@/components/risk-score-card";
import { remediationRoadmap } from "@/lib/demo-data";
import { getDashboardOverviewData } from "@/lib/dashboard-data";

export default async function DashboardPage() {
  const dashboard = await getDashboardOverviewData();

  return (
    <DashboardShell>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 18, alignItems: "start", marginBottom: 28 }}>
        <div>
          <div className="badge">
            {dashboard.source === "live" ? "Live Supabase workspace" : "Fallback demo workspace"} · AURA-GUARD Demo Client
          </div>
          <h1 className="section-title" style={{ marginTop: 16 }}>AI Risk Command Center</h1>
          <p className="section-copy">A boardroom-ready view of AI usage, agent autonomy, approval gaps, data exposure, vendor risk, and compliance readiness.</p>
        </div>
      </div>

      <div className="metric-grid" style={{ marginBottom: 18 }}>
        <div className="metric-card"><div className="metric-label">Total AI Tools</div><div className="metric-value">{dashboard.aiToolsCount}</div></div>
        <div className="metric-card"><div className="metric-label">Shadow AI Items</div><div className="metric-value">{dashboard.shadowAiCount}</div></div>
        <div className="metric-card"><div className="metric-label">Approval Gaps</div><div className="metric-value">{dashboard.approvalGaps}</div></div>
        <div className="metric-card"><div className="metric-label">Reports Ready</div><div className="metric-value">{dashboard.reportsReady}</div></div>
      </div>

      <div className="metric-grid" style={{ marginBottom: 18 }}>
        <div className="metric-card"><div className="metric-label">Organizations</div><div className="metric-value">{dashboard.organizationCount}</div></div>
        <div className="metric-card"><div className="metric-label">Intake Submissions</div><div className="metric-value">{dashboard.intakeCount}</div></div>
        <div className="metric-card"><div className="metric-label">Assessments</div><div className="metric-value">{dashboard.assessmentCount}</div></div>
        <div className="metric-card"><div className="metric-label">Data Source</div><div className="metric-value" style={{ fontSize: 22 }}>{dashboard.source}</div></div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "0.85fr 1.15fr", alignItems: "start" }}>
        <RiskScoreCard result={dashboard.riskResult} />

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
              {dashboard.inventory.map((item) => (
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
