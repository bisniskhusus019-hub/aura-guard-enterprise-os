import { generateAndStoreReport, getLatestStoredReport } from "@/lib/report-storage";

export default async function PrintableReportPage() {
  let report = await getLatestStoredReport();

  if (!report) {
    report = (await generateAndStoreReport()).report;
  }

  return (
    <main style={{ background: "#ffffff", color: "#111827", minHeight: "100vh", padding: "48px 24px", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <article style={{ maxWidth: 920, margin: "0 auto" }}>
        <header style={{ borderBottom: "3px solid #111827", paddingBottom: 22, marginBottom: 28 }}>
          <div style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "#4b5563", fontWeight: 700 }}>AURA-GUARD</div>
          <h1 style={{ fontSize: 42, lineHeight: 1.05, letterSpacing: -1.5, margin: "10px 0" }}>{report.title}</h1>
          <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
            Client: {report.clientName}<br />
            Package: {report.packageTier}<br />
            Generated: {new Date(report.generatedAt).toLocaleString()}
          </p>
        </header>

        <section style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 22, marginBottom: 30 }}>
          <div style={{ border: "1px solid #d1d5db", borderRadius: 14, padding: 20 }}>
            <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 8 }}>Final Risk Score</div>
            <div style={{ fontSize: 62, lineHeight: 0.9, fontWeight: 900 }}>{report.generatedScore}</div>
            <div style={{ marginTop: 10, fontWeight: 800 }}>{report.generatedRiskBand}</div>
          </div>
          <div style={{ border: "1px solid #d1d5db", borderRadius: 14, padding: 20 }}>
            <h2 style={{ marginTop: 0 }}>Executive Summary</h2>
            <p style={{ color: "#374151", lineHeight: 1.75 }}>{report.payload.executiveSummary}</p>
          </div>
        </section>

        {report.payload.sections.map((section) => (
          <section key={section.title} style={{ pageBreakInside: "avoid", borderTop: "1px solid #e5e7eb", paddingTop: 24, marginTop: 24 }}>
            <h2>{section.title}</h2>
            <p style={{ color: "#374151", lineHeight: 1.75 }}>{section.summary}</p>
            <h3>Findings</h3>
            <ul style={{ color: "#374151", lineHeight: 1.75 }}>
              {section.findings.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <h3>Recommendations</h3>
            <ul style={{ color: "#374151", lineHeight: 1.75 }}>
              {section.recommendations.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        ))}

        <section style={{ borderTop: "1px solid #e5e7eb", paddingTop: 24, marginTop: 24 }}>
          <h2>30-Day Remediation Roadmap</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", borderBottom: "1px solid #d1d5db", padding: 10 }}>Timeline</th>
                <th style={{ textAlign: "left", borderBottom: "1px solid #d1d5db", padding: 10 }}>Focus</th>
                <th style={{ textAlign: "left", borderBottom: "1px solid #d1d5db", padding: 10 }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {report.payload.remediationRoadmap.map((item) => (
                <tr key={item.timeline}>
                  <td style={{ borderBottom: "1px solid #e5e7eb", padding: 10 }}>{item.timeline}</td>
                  <td style={{ borderBottom: "1px solid #e5e7eb", padding: 10 }}>{item.focus}</td>
                  <td style={{ borderBottom: "1px solid #e5e7eb", padding: 10 }}>{item.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </article>
    </main>
  );
}
