import { NextResponse } from "next/server";
import { getLatestStoredReport } from "@/lib/report-storage";

export async function GET() {
  try {
    const report = await getLatestStoredReport();
    return NextResponse.json({ ok: true, report });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Latest report lookup failed." },
      { status: 500 },
    );
  }
}
