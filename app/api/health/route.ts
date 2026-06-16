import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    app: "AURA-GUARD",
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
}
