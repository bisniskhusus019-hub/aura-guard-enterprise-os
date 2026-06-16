import { NextResponse } from "next/server";
import { calculateRiskAssessment, type RiskFactorInput } from "@/lib/risk-scoring";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<RiskFactorInput>;

    const result = calculateRiskAssessment({
      dataSensitivity: body.dataSensitivity ?? 0,
      toolAutonomy: body.toolAutonomy ?? 0,
      externalExposure: body.externalExposure ?? 0,
      approvalWeakness: body.approvalWeakness ?? 0,
      vendorRisk: body.vendorRisk ?? 0,
      promptInjectionRisk: body.promptInjectionRisk ?? 0,
      loggingWeakness: body.loggingWeakness ?? 0,
      complianceGap: body.complianceGap ?? 0,
    });

    return NextResponse.json({ ok: true, result });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 400 },
    );
  }
}
