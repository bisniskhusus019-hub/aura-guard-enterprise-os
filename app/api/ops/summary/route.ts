import { NextResponse } from "next/server";
import { getOpsSummary } from "@/lib/ops-data";

export async function GET() {
  const data = await getOpsSummary();
  return NextResponse.json({ ok: true, data });
}
