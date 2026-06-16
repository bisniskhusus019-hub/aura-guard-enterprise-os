import { calculateRiskAssessment, type RiskFactorInput } from "@/lib/risk-scoring";

export type IntakePayload = {
  companyName: string;
  website?: string;
  industry?: string;
  region?: string;
  companySize?: string;
  contactName?: string;
  contactEmail?: string;
  aiTools?: string;
  departmentsUsingAi?: string;
  businessFunctions?: string;
  approvedUsageStatus?: string;
  existingAiPolicy?: string;
  customerDataExposure?: boolean;
  financialDataExposure?: boolean;
  hrDataExposure?: boolean;
  legalDataExposure?: boolean;
  internalKbExposure?: boolean;
  credentialExposure?: boolean;
  canSendEmails?: boolean;
  canUpdateRecords?: boolean;
  canApprovePayments?: boolean;
  canModifyFiles?: boolean;
  canCallApis?: boolean;
  approvalProcess?: string;
  vendorNotes?: string;
  desiredOutput?: string;
};

export function getIntakeFactorScores(payload: IntakePayload): RiskFactorInput {
  const dataSensitivity =
    (payload.customerDataExposure ? 3 : 0) +
    (payload.financialDataExposure ? 3 : 0) +
    (payload.hrDataExposure ? 3 : 0) +
    (payload.legalDataExposure ? 2 : 0) +
    (payload.internalKbExposure ? 2 : 0) +
    (payload.credentialExposure ? 2 : 0);

  const toolAutonomy =
    (payload.canSendEmails ? 3 : 0) +
    (payload.canUpdateRecords ? 3 : 0) +
    (payload.canApprovePayments ? 4 : 0) +
    (payload.canModifyFiles ? 2 : 0) +
    (payload.canCallApis ? 3 : 0);

  const approvalWeakness = payload.approvalProcess && payload.approvalProcess.length > 20 ? 4 : 14;
  const complianceGap = payload.existingAiPolicy?.toLowerCase().includes("yes") ? 3 : 9;
  const vendorRisk = payload.vendorNotes && payload.vendorNotes.length > 20 ? 5 : 8;
  const promptInjectionRisk = payload.canCallApis || payload.canSendEmails ? 12 : 7;
  const externalExposure = payload.businessFunctions?.toLowerCase().includes("customer") ? 8 : 4;
  const loggingWeakness = payload.approvalProcess?.toLowerCase().includes("log") ? 4 : 8;

  return {
    dataSensitivity,
    toolAutonomy,
    externalExposure,
    approvalWeakness,
    vendorRisk,
    promptInjectionRisk,
    loggingWeakness,
    complianceGap,
  };
}

export function scoreIntake(payload: IntakePayload) {
  const factors = getIntakeFactorScores(payload);
  return {
    factors,
    assessment: calculateRiskAssessment(factors),
  };
}
