import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    checks: {
      supabaseUrl: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
      supabaseAnonKey: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
      supabaseServerKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
    },
    note: "This endpoint only returns whether required environment variables exist. It never returns secret values.",
  });
}
