import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getPlanByCode } from "@/lib/pricing";

function getStripePriceId(planCode: string) {
  const envKey = `STRIPE_PRICE_${planCode.toUpperCase()}`;
  return process.env[envKey];
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const planCode = String(formData.get("planCode") ?? "professional_audit_999");
  const plan = getPlanByCode(planCode);

  if (!plan) {
    return NextResponse.json({ ok: false, error: "Unknown plan." }, { status: 400 });
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const priceId = getStripePriceId(plan.code);

  if (!stripeKey || !priceId) {
    return NextResponse.json({
      ok: false,
      setupNeeded: true,
      planCode: plan.code,
      planName: plan.name,
      message: "Stripe is not configured yet. Add STRIPE_SECRET_KEY and the matching STRIPE_PRICE_* environment variable in Vercel.",
    });
  }

  const stripe = new Stripe(stripeKey);
  const origin = request.headers.get("origin") ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: plan.type === "monthly" ? "subscription" : "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/dashboard/billing?checkout=success&plan=${plan.code}`,
    cancel_url: `${origin}/pricing?checkout=cancelled&plan=${plan.code}`,
    metadata: { planCode: plan.code, planName: plan.name },
  });

  if (!session.url) {
    return NextResponse.json({ ok: false, error: "Stripe session created without URL." }, { status: 500 });
  }

  return NextResponse.redirect(session.url, 303);
}
