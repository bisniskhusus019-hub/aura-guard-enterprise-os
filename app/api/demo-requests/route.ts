import { NextResponse } from "next/server";
import { createSupabaseAdminClient, hasSupabaseServerEnv } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  const payload = await request.json();

  if (!payload.companyName || !payload.contactEmail) {
    return NextResponse.json({ ok: false, error: "Company name and work email are required." }, { status: 400 });
  }

  if (!hasSupabaseServerEnv()) {
    return NextResponse.json({ ok: false, setupNeeded: true, message: "Supabase server environment is not configured yet." });
  }

  const supabase = createSupabaseAdminClient();

  const { data: lead, error: leadError } = await supabase
    .from("sales_leads")
    .insert({
      company_name: payload.companyName,
      website: payload.website ?? null,
      contact_name: payload.contactName ?? null,
      contact_email: payload.contactEmail,
      company_size: payload.companySize ?? null,
      buyer_type: payload.buyerType ?? null,
      desired_plan_code: payload.desiredPlanCode ?? null,
      notes: payload.notes ?? null,
      source: "demo_request_page",
      status: "demo_scheduled",
    })
    .select("id")
    .single();

  if (leadError) {
    return NextResponse.json({ ok: false, error: leadError.message }, { status: 500 });
  }

  const { error: demoError } = await supabase.from("demo_requests").insert({
    sales_lead_id: lead.id,
    company_name: payload.companyName,
    contact_email: payload.contactEmail,
    requested_plan_code: payload.desiredPlanCode ?? null,
    preferred_time: payload.preferredTime ?? null,
    use_case_summary: payload.notes ?? null,
    status: "requested",
  });

  if (demoError) {
    return NextResponse.json({ ok: false, error: demoError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, message: "Demo request saved. Review it from the Sales dashboard." });
}
