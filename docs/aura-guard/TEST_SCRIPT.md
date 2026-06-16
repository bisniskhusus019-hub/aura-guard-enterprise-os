# AURA-GUARD Smoke Test Script

Use this script immediately after every Vercel deployment.

## Visual Test

Open:

```txt
/
/pricing
```

Check:

- Hero section visible
- CTA buttons visible
- Pricing cards visible
- Bigger subscription and partner plans visible
- Modules visible
- Layout responsive on desktop and mobile width

## Pricing and Checkout Test

Open:

```txt
/pricing
/checkout?plan=professional_audit_999
/checkout?plan=monitoring_core_499
/checkout?plan=enterprise_os_5000
/checkout?plan=strategic_partner_15000
```

Check:

- Selected plan appears
- Price appears
- Reports/workspaces limits appear
- Continue to Checkout button appears
- If billing keys are missing, API returns setup-needed response instead of crashing

## Login and Signup Test

Open:

```txt
/login
/signup
```

Check:

- Auth form loads
- Email field exists
- Password field exists
- If Supabase env is missing, user sees setup/config message instead of blank page
- If Supabase env is configured, login/signup can call Supabase Auth

## Dashboard Test

Open:

```txt
/dashboard
/dashboard/billing
```

Check:

- Data source badge appears
- AI tools count appears
- Risk score card appears
- AI inventory table appears
- 30-day roadmap appears
- Billing page shows monthly and partner plans
- Customer portal button appears

## Module Navigation Test

Open each route:

```txt
/dashboard/ai-inventory
/dashboard/shadow-ai
/dashboard/agents
/dashboard/permissions
/dashboard/data-risk
/dashboard/defense-tests
/dashboard/compliance
/dashboard/vendors
/dashboard/policies
/dashboard/audit-logs
/dashboard/white-label
/dashboard/workspace
```

Check:

- Page loads without 404
- Sidebar stays visible
- Module title appears
- Table or module content appears

## Report Test

Open:

```txt
/dashboard/reports
/reports/print
/api/reports/latest/markdown
```

Check:

- Report title appears
- Final score appears
- Top drivers appear
- Printable page opens
- Markdown download works

## API Test

Open:

```txt
/api/health
/api/readiness
/api/dashboard
/api/reports/latest
```

Check:

- JSON response appears
- `/api/health` returns `ok: true`
- `/api/readiness` does not reveal secret values
- `/api/readiness` shows Supabase and billing readiness booleans/counts

## Intake Test

Open:

```txt
/audit-intake
```

Check:

- Form loads
- Submit works only after Supabase env variables are configured
- Score and risk band appear after successful submission

## Pass Criteria

The deployment passes the first smoke test when:

- Main page loads
- Pricing page loads
- Checkout route loads
- Login and signup pages load
- Dashboard loads
- Billing dashboard loads
- All module pages load
- Report pages load
- Healthcheck works
- No blank screen appears
- No secrets are exposed
