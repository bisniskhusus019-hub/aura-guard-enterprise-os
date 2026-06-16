# AURA-GUARD Deployment Readiness Checklist

## Purpose
This checklist prepares AURA-GUARD for production activation after the first Vercel deployment.

## Pre-Deployment Already Done

- Dedicated GitHub repository exists
- Dedicated Supabase project exists
- Core schema applied
- Security advisor warning fixed
- Public execute access revoked from old helper function
- Landing page exists
- Dashboard exists
- Intake page exists
- Report generator exists
- Printable report exists
- Markdown export route exists
- Healthcheck route exists
- Readiness route exists
- Loading, not-found, and error pages exist
- Vercel security headers exist

## Required Vercel Environment Variables

Set these in Vercel project settings, not in GitHub:

```txt
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

## Smoke Test URLs

After deployment, test these in order:

```txt
/
/api/health
/api/readiness
/dashboard
/dashboard/ai-inventory
/dashboard/reports
/reports/print
/api/dashboard
/api/reports/latest
/api/reports/latest/markdown
/audit-intake
/login
/signup
```

## Expected Results

- `/` loads landing page
- `/api/health` returns `ok: true`
- `/api/readiness` shows env presence booleans without exposing secrets
- `/dashboard` loads dashboard metrics
- `/dashboard/reports` loads generated report
- `/reports/print` opens printable report
- `/api/reports/latest/markdown` downloads markdown
- `/audit-intake` can submit only after environment variables are configured

## Not Yet Required For First Test

- Payment provider
- Custom domain
- Full production auth
- Real client data
- Email automation

## Next Production Activation

1. Add Vercel environment variables
2. Redeploy
3. Run smoke test URLs
4. Submit one test intake
5. Generate one report
6. Print/save report as PDF
7. Add custom domain later
