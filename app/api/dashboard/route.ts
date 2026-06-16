import { NextResponse } from "next/server";
import { getDashboardOverviewData } from "@/lib/dashboard-data";

export async function GET() {
  const data = await getDashboardOverviewData();
  return NextResponse.json({ ok: true, data });
}
