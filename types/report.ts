export type ReportRiskDriver = {
  label: string;
  score: number;
  maxScore: number;
};

export type ReportInventoryItem = {
  tool: string;
  vendor: string;
  useCase: string;
  owner: string;
  dataTouched: string;
  status: string;
  risk: string;
};

export type ReportSection = {
  title: string;
  summary: string;
  findings: string[];
  recommendations: string[];
};

export type AuraGuardReportPayload = {
  reportTitle: string;
  clientName: string;
  packageTier: string;
  generatedAt: string;
  finalScore: number;
  riskBand: string;
  topDrivers: ReportRiskDriver[];
  inventory: ReportInventoryItem[];
  executiveSummary: string;
  sections: ReportSection[];
  remediationRoadmap: Array<{
    timeline: string;
    focus: string;
    action: string;
  }>;
  commercialNextStep: string;
};
