import { NextResponse } from "next/server";
import { getAutomationSummary } from "@/lib/automation-data";

export async function GET() {
  const data = await getAutomationSummary();
  return NextResponse.json({ ok: true, data });
}
