import { buildReportPayload, renderReportMarkdown } from "@/lib/report-generator";
import { getDashboardOverviewData } from "@/lib/dashboard-data";
import { createSupabaseAdminClient, hasSupabaseServerEnv } from "@/lib/supabase-admin";
import type { AuraGuardReportPayload } from "@/types/report";

export type StoredReport = {
  id: string;
  title: string;
  clientName: string;
  status: string;
  generatedScore: number;
  generatedRiskBand: string;
  packageTier: string;
  markdownContent: string;
  payload: AuraGuardReportPayload;
  generatedAt: string;
};

export async function generateAndStoreReport() {
  const dashboard = await getDashboardOverviewData();
  const payload = buildReportPayload(dashboard);
  const markdown = renderReportMarkdown(payload);

  if (!hasSupabaseServerEnv()) {
    return {
      stored: false,
      report: {
        id: "fallback-report",
        title: payload.reportTitle,
        clientName: payload.clientName,
        status: "preview",
        generatedScore: payload.finalScore,
        generatedRiskBand: payload.riskBand,
        packageTier: payload.packageTier,
        markdownContent: markdown,
        payload,
        generatedAt: payload.generatedAt,
      } satisfies StoredReport,
    };
  }

  const supabase = createSupabaseAdminClient();

  const { data: latestOrganization, error: orgError } = await supabase
    .from("organizations")
    .select("id, name")
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (orgError) throw orgError;

  const { data: latestAssessment, error: assessmentError } = await supabase
    .from("risk_assessments")
    .select("id")
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (assessmentError) throw assessmentError;

  const { data: report, error: reportError } = await supabase
    .from("reports")
    .insert({
      organization_id: latestOrganization?.id ?? null,
      risk_assessment_id: latestAssessment?.id ?? null,
      report_type: "ai_risk_audit",
      title: payload.reportTitle,
      status: "ready",
      report_payload: payload,
      markdown_content: markdown,
      generated_score: payload.finalScore,
      generated_risk_band: payload.riskBand,
      package_tier: payload.packageTier,
      client_name: latestOrganization?.name ?? payload.clientName,
      generated_at: payload.generatedAt,
    })
    .select("id, title, status, generated_score, generated_risk_band, package_tier, client_name, markdown_content, report_payload, generated_at")
    .single();

  if (reportError) throw reportError;

  await supabase.from("report_exports").insert({
    report_id: report.id,
    export_type: "markdown",
    export_status: "ready",
  });

  return {
    stored: true,
    report: {
      id: report.id,
      title: report.title,
      clientName: report.client_name ?? payload.clientName,
      status: report.status,
      generatedScore: report.generated_score ?? payload.finalScore,
      generatedRiskBand: report.generated_risk_band ?? payload.riskBand,
      packageTier: report.package_tier ?? payload.packageTier,
      markdownContent: report.markdown_content ?? markdown,
      payload: (report.report_payload ?? payload) as AuraGuardReportPayload,
      generatedAt: report.generated_at ?? payload.generatedAt,
    } satisfies StoredReport,
  };
}

export async function getLatestStoredReport(): Promise<StoredReport | null> {
  if (!hasSupabaseServerEnv()) {
    return (await generateAndStoreReport()).report;
  }

  const supabase = createSupabaseAdminClient();
  const { data: report, error } = await supabase
    .from("reports")
    .select("id, title, status, generated_score, generated_risk_band, package_tier, client_name, markdown_content, report_payload, generated_at")
    .order("generated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  if (!report) return null;

  return {
    id: report.id,
    title: report.title,
    clientName: report.client_name ?? "AURA-GUARD Demo Client",
    status: report.status,
    generatedScore: report.generated_score ?? 0,
    generatedRiskBand: report.generated_risk_band ?? "Unscored",
    packageTier: report.package_tier ?? "Professional Audit",
    markdownContent: report.markdown_content ?? "",
    payload: report.report_payload as AuraGuardReportPayload,
    generatedAt: report.generated_at ?? new Date().toISOString(),
  };
}
