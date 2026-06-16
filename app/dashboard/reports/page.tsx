import { DashboardShell } from "@/components/dashboard-shell";
import { generateAndStoreReport, getLatestStoredReport } from "@/lib/report-storage";

export default async function ReportsPage() {
  let report = await getLatestStoredReport();

  if (!report) {
    report = (await generateAndStoreReport()).report;
  }

  return (
    <DashboardShell>
      <div className="badge">Executive report generator · {report.status}</div>
      <h1 className="section-title" style={{ marginTop: 16 }}>{report.title}</h1>
      <p className="section-copy">
        Client: {report.clientName} · Package: {report.packageTier} · Generated: {new Date(report.generatedAt).toLocaleString()}
      </p>

      <div className="grid" style={{ gridTemplateColumns: "0.75fr 1.25fr", alignItems: "start", marginTop: 28 }}>
        <div className="card" style={{ padding: 24 }}>
          <div className="metric-label">Final Risk Score</div>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.07em" }}>{report.generatedScore}</div>
          <div style={{ color: "var(--danger)", fontWeight: 900, fontSize: 22, marginTop: 10 }}>{report.generatedRiskBand}</div>
          <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>Generated from weighted governance, security, vendor, approval, and compliance factors.</p>
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Top Risk Drivers</h2>
          <div className="grid">
            {report.payload.topDrivers.map((driver) => (
              <div key={driver.label} style={{ display: "flex", justifyContent: "space-between", gap: 18 }}>
                <span>{driver.label}</span>
                <strong>{driver.score}/{driver.maxScore}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: 24, marginTop: 18 }}>
        <h2 style={{ marginTop: 0 }}>Executive Summary</h2>
        <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{report.payload.executiveSummary}</p>
      </div>

      <div className="grid" style={{ marginTop: 18 }}>
        {report.payload.sections.map((section) => (
          <section className="card" style={{ padding: 24 }} key={section.title}>
            <h2 style={{ marginTop: 0 }}>{section.title}</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{section.summary}</p>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginTop: 18 }}>
              <div>
                <h3>Findings</h3>
                <ul style={{ color: "var(--muted)", lineHeight: 1.8 }}>
                  {section.findings.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h3>Recommendations</h3>
                <ul style={{ color: "var(--muted)", lineHeight: 1.8 }}>
                  {section.recommendations.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="card" style={{ padding: 24, marginTop: 18 }}>
        <h2 style={{ marginTop: 0 }}>30-Day Remediation Plan</h2>
        <table>
          <thead>
            <tr>
              <th>Timeline</th>
              <th>Focus</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {report.payload.remediationRoadmap.map((item) => (
              <tr key={item.timeline}>
                <td>{item.timeline}</td>
                <td>{item.focus}</td>
                <td>{item.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card" style={{ padding: 24, marginTop: 18 }}>
        <h2 style={{ marginTop: 0 }}>Commercial Next Step</h2>
        <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{report.payload.commercialNextStep}</p>
      </div>
    </DashboardShell>
  );
}
