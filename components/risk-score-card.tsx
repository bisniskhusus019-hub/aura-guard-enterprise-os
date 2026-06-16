import type { RiskAssessmentResult } from "@/lib/risk-scoring";

export function RiskScoreCard({ result }: { result: RiskAssessmentResult }) {
  return (
    <div className="card" style={{ padding: 26 }}>
      <div className="badge">Live scoring model</div>
      <div style={{ display: "flex", alignItems: "end", gap: 18, marginTop: 22 }}>
        <div style={{ fontSize: 78, lineHeight: 0.9, fontWeight: 900, letterSpacing: "-0.07em" }}>
          {result.totalScore}
        </div>
        <div style={{ marginBottom: 8 }}>
          <div style={{ color: "var(--danger)", fontWeight: 900, fontSize: 22 }}>{result.riskBand}</div>
          <div style={{ color: "var(--muted)", fontSize: 14 }}>AI agent governance risk score</div>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <div style={{ color: "var(--muted)", fontSize: 13, marginBottom: 10 }}>Top risk drivers</div>
        <div className="grid">
          {result.topDrivers.map((driver) => (
            <div key={driver.key} style={{ display: "flex", justifyContent: "space-between", gap: 14 }}>
              <span>{driver.label}</span>
              <strong>
                {driver.score}/{driver.maxScore}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
