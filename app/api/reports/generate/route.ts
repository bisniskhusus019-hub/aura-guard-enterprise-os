import { NextResponse } from "next/server";
import { generateAndStoreReport } from "@/lib/report-storage";

export async function POST() {
  try {
    const result = await generateAndStoreReport();
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Report generation failed." },
      { status: 500 },
    );
  }
}
