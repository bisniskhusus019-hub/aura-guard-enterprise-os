import { NextResponse } from "next/server";

const billingPriceKeys = [
  "STRIPE_PRICE_STARTER_AUDIT_299",
  "STRIPE_PRICE_PROFESSIONAL_AUDIT_999",
  "STRIPE_PRICE_ENTERPRISE_READINESS_2500",
  "STRIPE_PRICE_MONITORING_CORE_499",
  "STRIPE_PRICE_MONITORING_SCALE_1500",
  "STRIPE_PRICE_ENTERPRISE_OS_5000",
  "STRIPE_PRICE_AGENCY_PARTNER_7500",
  "STRIPE_PRICE_STRATEGIC_PARTNER_15000",
];

export async function GET() {
  const configuredBillingPrices = billingPriceKeys.filter((key) => Boolean(process.env[key])).length;

  return NextResponse.json({
    ok: true,
    checks: {
      supabaseUrl: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
      supabaseAnonKey: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
      supabaseServerKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
      stripeServerKey: Boolean(process.env.STRIPE_SECRET_KEY),
      configuredBillingPrices,
      totalBillingPrices: billingPriceKeys.length,
    },
    note: "This endpoint only returns whether required environment variables exist. It never returns secret values.",
  });
}
