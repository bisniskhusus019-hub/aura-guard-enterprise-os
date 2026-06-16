# AURA-GUARD Billing Environment Guide

## Purpose
Billing keys must be added only in Vercel Project Settings or local `.env.local`. Never commit real payment keys to GitHub.

## Required Billing Variables

Add the server-side Stripe key required by the billing API.

Add one Stripe price ID for each AURA-GUARD plan:

- Starter Audit 299
- Professional Audit 999
- Enterprise Readiness 2500
- Monitoring Core 499
- Monitoring Scale 1500
- Enterprise OS 5000
- Agency Partner 7500
- Strategic Partner 15000

## Vercel Setup

1. Open Vercel project settings.
2. Open Environment Variables.
3. Add Supabase variables.
4. Add billing variables.
5. Save for Production and Preview.
6. Redeploy.

## Safety Rule
Do not paste real payment keys into chat messages, screenshots, GitHub, public docs, or frontend code.

## Billing Behavior
If billing variables are missing, `/api/billing/checkout` returns a setup-needed response instead of crashing.

If billing variables are configured, checkout redirects to the hosted payment flow.
