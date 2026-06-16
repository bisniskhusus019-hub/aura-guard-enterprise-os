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
  const { error } = await supabase.from("sales_leads").insert({
    company_name: payload.companyName,
    website: payload.website ?? null,
    contact_name: payload.contactName ?? null,
    contact_email: payload.contactEmail,
    company_size: payload.companySize ?? null,
    buyer_type: payload.buyerType ?? null,
    desired_plan_code: payload.desiredPlanCode ?? null,
    notes: payload.notes ?? null,
    source: "contact_sales_page",
    status: "new",
  });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, message: "Sales lead saved. Follow up from the Sales dashboard." });
}
