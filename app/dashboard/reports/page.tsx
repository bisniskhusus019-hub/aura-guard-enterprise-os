import { DashboardShell } from "@/components/dashboard-shell";
import { demoAssessment, remediationRoadmap } from "@/lib/demo-data";

const reportSections = [
  "Executive Summary",
  "AI Usage Inventory Summary",
  "Shadow AI Risk Map",
  "Agent Permission Matrix",
  "Data Exposure Assessment",
  "Prompt Injection Defensive Test Summary",
  "Vendor AI Risk Review",
  "Compliance Readiness Summary",
  "Final Risk Score",
  "30-Day Remediation Roadmap",
  "Appendix",
];

export default function ReportsPage() {
  return (
    <DashboardShell>
      <div className="badge">Executive report generator · Preview</div>
      <h1 className="section-title" style={{ marginTop: 16 }}>AI Risk Audit Report</h1>
      <p className="section-copy">This preview converts risk scoring, AI inventory, permission gaps, vendor risk, and remediation planning into a premium report structure for paid audits.</p>

      <div className="grid" style={{ gridTemplateColumns: "0.75fr 1.25fr", alignItems: "start", marginTop: 28 }}>
        <div className="card" style={{ padding: 24 }}>
          <div className="metric-label">Final Risk Score</div>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.07em" }}>{demoAssessment.totalScore}</div>
          <div style={{ color: "var(--danger)", fontWeight: 900, fontSize: 22, marginTop: 10 }}>{demoAssessment.riskBand}</div>
          <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>Generated from eight weighted governance, security, vendor, approval, and compliance factors.</p>
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Report Sections</h2>
          <div className="grid">
            {reportSections.map((section, index) => (
              <div key={section} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ width: 34, height: 34, borderRadius: 12, display: "grid", placeItems: "center", background: "rgba(255,255,255,0.06)", border: "1px solid var(--border)", color: "var(--muted)" }}>
                  {index + 1}
                </div>
                <strong>{section}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: 24, marginTop: 18 }}>
        <h2 style={{ marginTop: 0 }}>Executive Remediation Plan</h2>
        <table>
          <thead>
            <tr>
              <th>Timeline</th>
              <th>Focus</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {remediationRoadmap.map((item) => (
              <tr key={item.week}>
                <td>{item.week}</td>
                <td>{item.title}</td>
                <td>{item.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  );
}
