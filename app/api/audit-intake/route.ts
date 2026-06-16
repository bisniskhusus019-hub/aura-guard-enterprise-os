import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { scoreIntake, type IntakePayload } from "@/lib/intake-scoring";

function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  }

  return createClient(url, serviceRoleKey, {
    db: { schema: "aura_guard" },
    auth: { persistSession: false },
  });
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as IntakePayload;

    if (!payload.companyName || payload.companyName.trim().length < 2) {
      return NextResponse.json({ ok: false, error: "Company name is required." }, { status: 400 });
    }

    const scoring = scoreIntake(payload);
    const supabase = getAdminClient();

    const { data: organization, error: orgError } = await supabase
      .from("organizations")
      .insert({
        name: payload.companyName,
        industry: payload.industry ?? null,
        size_band: payload.companySize ?? null,
        region: payload.region ?? null,
        risk_profile: scoring.riskBand,
      })
      .select("id")
      .single();

    if (orgError) throw orgError;

    const { error: intakeError } = await supabase.from("intake_submissions").insert({
      organization_id: organization.id,
      company_name: payload.companyName,
      website: payload.website ?? null,
      industry: payload.industry ?? null,
      region: payload.region ?? null,
      company_size: payload.companySize ?? null,
      contact_name: payload.contactName ?? null,
      contact_email: payload.contactEmail ?? null,
      ai_tools: payload.aiTools ?? null,
      departments_using_ai: payload.departmentsUsingAi ?? null,
      business_functions: payload.businessFunctions ?? null,
      approved_usage_status: payload.approvedUsageStatus ?? null,
      existing_ai_policy: payload.existingAiPolicy ?? null,
      customer_data_exposure: payload.customerDataExposure ?? false,
      financial_data_exposure: payload.financialDataExposure ?? false,
      hr_data_exposure: payload.hrDataExposure ?? false,
      legal_data_exposure: payload.legalDataExposure ?? false,
      internal_kb_exposure: payload.internalKbExposure ?? false,
      credential_exposure: payload.credentialExposure ?? false,
      can_send_emails: payload.canSendEmails ?? false,
      can_update_records: payload.canUpdateRecords ?? false,
      can_approve_payments: payload.canApprovePayments ?? false,
      can_modify_files: payload.canModifyFiles ?? false,
      can_call_apis: payload.canCallApis ?? false,
      approval_process: payload.approvalProcess ?? null,
      vendor_notes: payload.vendorNotes ?? null,
      desired_output: payload.desiredOutput ?? null,
      generated_score: scoring.totalScore,
      generated_risk_band: scoring.riskBand,
    });

    if (intakeError) throw intakeError;

    const { error: assessmentError } = await supabase.from("risk_assessments").insert({
      organization_id: organization.id,
      assessment_name: "AI Risk Intake Assessment",
      data_sensitivity_score: scoring.topDrivers.find((driver) => driver.key === "dataSensitivity")?.score ?? 0,
      tool_autonomy_score: scoring.topDrivers.find((driver) => driver.key === "toolAutonomy")?.score ?? 0,
      external_exposure_score: 0,
      approval_weakness_score: 0,
      vendor_risk_score: 0,
      prompt_injection_score: 0,
      logging_weakness_score: 0,
      compliance_gap_score: 0,
      executive_summary: `Automated intake received for ${payload.companyName}. Generated preliminary risk score: ${scoring.totalScore} / ${scoring.riskBand}.`,
      remediation_plan: "Complete AI inventory, permission matrix, data exposure review, vendor review, and executive audit report.",
    });

    if (assessmentError) throw assessmentError;

    return NextResponse.json({
      ok: true,
      organizationId: organization.id,
      score: scoring.totalScore,
      riskBand: scoring.riskBand,
      topDrivers: scoring.topDrivers,
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Unknown submission error." },
      { status: 500 },
    );
  }
}
