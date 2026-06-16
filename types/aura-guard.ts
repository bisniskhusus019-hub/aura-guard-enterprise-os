export type Organization = {
  id: string;
  name: string;
  industry: string | null;
  size_band: string | null;
  region: string | null;
  risk_profile: string | null;
  created_at: string;
};

export type AiTool = {
  id: string;
  organization_id: string;
  tool_name: string;
  vendor_name: string | null;
  use_case: string | null;
  owner_department: string | null;
  data_touched: string | null;
  approved_status: string | null;
  risk_level: string | null;
  created_at: string;
};

export type RiskAssessment = {
  id: string;
  organization_id: string;
  assessment_name: string;
  data_sensitivity_score: number;
  tool_autonomy_score: number;
  external_exposure_score: number;
  approval_weakness_score: number;
  vendor_risk_score: number;
  prompt_injection_score: number;
  logging_weakness_score: number;
  compliance_gap_score: number;
  total_score: number;
  risk_band: string;
  executive_summary: string | null;
  remediation_plan: string | null;
  created_at: string;
};
