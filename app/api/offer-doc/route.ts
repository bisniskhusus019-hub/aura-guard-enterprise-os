import { NextResponse } from "next/server";
import { buildProposalMarkdown } from "@/lib/proposal-generator";
import { getPlanByCode } from "@/lib/pricing";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  const planCode = String(payload.planCode ?? "professional_audit_999");
  const plan = getPlanByCode(planCode);

  if (!plan) {
    return NextResponse.json({ ok: false, error: "Unknown plan." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    planCode: plan.code,
    title: `AURA-GUARD ${plan.name} Offer`,
    markdown: buildProposalMarkdown(plan.code),
  });
}
