import { aiInventory as fallbackInventory, demoAssessment } from "@/lib/demo-data";
import { calculateRiskAssessment, type RiskAssessmentResult } from "@/lib/risk-scoring";
import { createSupabaseAdminClient, hasSupabaseServerEnv } from "@/lib/supabase-admin";

export type DashboardInventoryItem = {
  tool: string;
  vendor: string;
  useCase: string;
  owner: string;
  dataTouched: string;
  status: string;
  risk: string;
};

export type DashboardOverviewData = {
  source: "live" | "fallback";
  organizationCount: number;
  intakeCount: number;
  assessmentCount: number;
  aiToolsCount: number;
  shadowAiCount: number;
  approvalGaps: number;
  reportsReady: number;
  riskResult: RiskAssessmentResult;
  inventory: DashboardInventoryItem[];
};

async function getCount(table: string) {
  const supabase = createSupabaseAdminClient();
  const { count, error } = await supabase.from(table).select("id", { count: "exact", head: true });
  if (error) throw error;
  return count ?? 0;
}

function fallbackDashboardData(): DashboardOverviewData {
  return {
    source: "fallback",
    organizationCount: 1,
    intakeCount: 0,
    assessmentCount: 1,
    aiToolsCount: fallbackInventory.length,
    shadowAiCount: fallbackInventory.filter((item) => item.status === "Shadow AI").length,
    approvalGaps: 6,
    reportsReady: 1,
    riskResult: demoAssessment,
    inventory: fallbackInventory,
  };
}

export async function getDashboardOverviewData(): Promise<DashboardOverviewData> {
  if (!hasSupabaseServerEnv()) {
    return fallbackDashboardData();
  }

  try {
    const supabase = createSupabaseAdminClient();

    const [organizationCount, intakeCount, assessmentCount, aiToolsCount] = await Promise.all([
      getCount("organizations"),
      getCount("intake_submissions"),
      getCount("risk_assessments"),
      getCount("ai_tools"),
    ]);

    const { data: latestAssessment, error: assessmentError } = await supabase
      .from("risk_assessments")
      .select(
        "data_sensitivity_score, tool_autonomy_score, external_exposure_score, approval_weakness_score, vendor_risk_score, prompt_injection_score, logging_weakness_score, compliance_gap_score",
      )
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (assessmentError) throw assessmentError;

    const riskResult = latestAssessment
      ? calculateRiskAssessment({
          dataSensitivity: latestAssessment.data_sensitivity_score ?? 0,
          toolAutonomy: latestAssessment.tool_autonomy_score ?? 0,
          externalExposure: latestAssessment.external_exposure_score ?? 0,
          approvalWeakness: latestAssessment.approval_weakness_score ?? 0,
          vendorRisk: latestAssessment.vendor_risk_score ?? 0,
          promptInjectionRisk: latestAssessment.prompt_injection_score ?? 0,
          loggingWeakness: latestAssessment.logging_weakness_score ?? 0,
          complianceGap: latestAssessment.compliance_gap_score ?? 0,
        })
      : demoAssessment;

    const { data: tools, error: toolsError } = await supabase
      .from("ai_tools")
      .select("tool_name, vendor_name, use_case, owner_department, data_touched, approved_status, risk_level")
      .order("created_at", { ascending: true })
      .limit(10);

    if (toolsError) throw toolsError;

    const inventory =
      tools && tools.length > 0
        ? tools.map((item) => ({
            tool: item.tool_name ?? "Unknown AI tool",
            vendor: item.vendor_name ?? "Unknown vendor",
            useCase: item.use_case ?? "Unclassified use case",
            owner: item.owner_department ?? "Unknown owner",
            dataTouched: item.data_touched ?? "Unknown data exposure",
            status: item.approved_status ?? "Unknown",
            risk: item.risk_level ?? "Unscored",
          }))
        : fallbackInventory;

    return {
      source: "live",
      organizationCount,
      intakeCount,
      assessmentCount,
      aiToolsCount,
      shadowAiCount: inventory.filter((item) => item.status === "Shadow AI").length,
      approvalGaps: inventory.filter((item) => item.status === "Review Required" || item.status === "Shadow AI").length,
      reportsReady: assessmentCount,
      riskResult,
      inventory,
    };
  } catch (error) {
    console.error("Dashboard live data failed; using fallback demo data.", error);
    return fallbackDashboardData();
  }
}
