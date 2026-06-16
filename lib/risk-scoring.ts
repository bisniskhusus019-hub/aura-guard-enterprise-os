export type RiskFactorKey =
  | "dataSensitivity"
  | "toolAutonomy"
  | "externalExposure"
  | "approvalWeakness"
  | "vendorRisk"
  | "promptInjectionRisk"
  | "loggingWeakness"
  | "complianceGap";

export type RiskFactorInput = Record<RiskFactorKey, number>;

export type RiskBand = "Low Risk" | "Moderate Risk" | "Elevated Risk" | "High Risk" | "Critical Risk";

export type RiskAssessmentResult = {
  totalScore: number;
  riskBand: RiskBand;
  topDrivers: Array<{ key: RiskFactorKey; label: string; score: number; maxScore: number }>;
};

export const riskFactorDefinitions: Record<RiskFactorKey, { label: string; maxScore: number }> = {
  dataSensitivity: { label: "Data Sensitivity", maxScore: 15 },
  toolAutonomy: { label: "Tool Autonomy", maxScore: 15 },
  externalExposure: { label: "External Exposure", maxScore: 10 },
  approvalWeakness: { label: "Approval Weakness", maxScore: 15 },
  vendorRisk: { label: "Vendor Risk", maxScore: 10 },
  promptInjectionRisk: { label: "Prompt Injection Risk", maxScore: 15 },
  loggingWeakness: { label: "Logging Weakness", maxScore: 10 },
  complianceGap: { label: "Compliance Gap", maxScore: 10 },
};

export function getRiskBand(totalScore: number): RiskBand {
  if (totalScore <= 20) return "Low Risk";
  if (totalScore <= 40) return "Moderate Risk";
  if (totalScore <= 60) return "Elevated Risk";
  if (totalScore <= 80) return "High Risk";
  return "Critical Risk";
}

function clampScore(score: number, maxScore: number): number {
  if (!Number.isFinite(score)) return 0;
  return Math.max(0, Math.min(Math.round(score), maxScore));
}

export function calculateRiskAssessment(input: RiskFactorInput): RiskAssessmentResult {
  const normalized = Object.entries(riskFactorDefinitions).map(([key, definition]) => {
    const factorKey = key as RiskFactorKey;
    return {
      key: factorKey,
      label: definition.label,
      maxScore: definition.maxScore,
      score: clampScore(input[factorKey], definition.maxScore),
    };
  });

  const totalScore = normalized.reduce((sum, factor) => sum + factor.score, 0);
  const topDrivers = [...normalized]
    .sort((a, b) => b.score / b.maxScore - a.score / a.maxScore)
    .slice(0, 3);

  return {
    totalScore,
    riskBand: getRiskBand(totalScore),
    topDrivers,
  };
}

export const demoRiskInput: RiskFactorInput = {
  dataSensitivity: 12,
  toolAutonomy: 13,
  externalExposure: 8,
  approvalWeakness: 14,
  vendorRisk: 7,
  promptInjectionRisk: 12,
  loggingWeakness: 8,
  complianceGap: 9,
};
