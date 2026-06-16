# AURA-GUARD Smoke Test Script

Use this script immediately after every Vercel deployment.

## Visual Test

Open:

```txt
/
```

Check:

- Hero section visible
- CTA buttons visible
- Pricing cards visible
- Modules visible
- Layout responsive on desktop and mobile width

## Dashboard Test

Open:

```txt
/dashboard
```

Check:

- Data source badge appears
- AI tools count appears
- Risk score card appears
- AI inventory table appears
- 30-day roadmap appears

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
- Dashboard loads
- All module pages load
- Report pages load
- Healthcheck works
- No blank screen appears
- No secrets are exposed
