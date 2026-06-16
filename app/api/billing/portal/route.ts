import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const customerId = process.env.DEMO_STRIPE_CUSTOMER_ID;

  if (!stripeKey || !customerId) {
    return NextResponse.json({
      ok: false,
      setupNeeded: true,
      message: "Stripe portal is not configured yet. Add STRIPE_SECRET_KEY and a real customer ID after first checkout.",
    });
  }

  const stripe = new Stripe(stripeKey);
  const origin = request.headers.get("origin") ?? "http://localhost:3000";

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${origin}/dashboard/billing`,
  });

  return NextResponse.redirect(portalSession.url, 303);
}
