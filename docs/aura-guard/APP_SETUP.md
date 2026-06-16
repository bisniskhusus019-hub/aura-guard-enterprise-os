# AURA-GUARD App Setup

## Current Stage
The app foundation is structured as a Next.js product with:

- Premium public landing page
- Dashboard shell
- AI Risk Command Center connected to live Supabase reads with safe fallback
- Live audit intake form shell
- Audit intake API route
- Dashboard API route
- Report generator engine
- Latest report API route
- Generate report API route
- Printable report page
- Risk scoring engine
- Supabase helpers
- Safe `.env.example`

## Local Run

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Environment Variables
Copy `.env.example` into `.env.local` and add the real Supabase values only locally or inside Vercel.

```bash
cp .env.example .env.local
```

Required values:

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Never commit `.env.local`. The service role key is server-only and must never be exposed in client-side code.

## Current Routes

```txt
/                         Premium landing page
/audit-intake              Live audit intake form shell
/dashboard                 AI Risk Command Center with live/fallback data
/dashboard/reports         Generated report dashboard view
/reports/print             Printable report page
/api/risk-score            Risk scoring API route
/api/audit-intake          Audit intake submission API route
/api/dashboard             Dashboard overview API route
/api/reports/generate      Generate and store report API route
/api/reports/latest        Latest report API route
```

## Supabase Status
Dedicated project: `aura-guard`
Schema: `aura_guard`
Tables: 15 total tables including `intake_submissions`
Reports table upgraded with payload, markdown, score, risk band, package tier, client name, and generated timestamp
Demo scoring verified: `83 / Critical Risk`
Live demo inventory seeded: 3 AI tools, including 1 Shadow AI item

## Intake Flow
The `/audit-intake` page posts to `/api/audit-intake`.

When environment variables are configured, the API route:

1. Creates an organization record
2. Stores raw intake data in `intake_submissions`
3. Calculates preliminary risk score
4. Stores factor scores in `risk_assessments`
5. Returns score, risk band, organization ID, and top drivers

## Dashboard Flow
The `/dashboard` page uses `getDashboardOverviewData()`.

When environment variables are configured, it reads:

- `organizations`
- `intake_submissions`
- `risk_assessments`
- `ai_tools`

If environment variables are missing, it falls back to demo data so local builds do not break.

## Report Generator Flow
The report engine builds a complete audit report from dashboard data.

It outputs:

- structured JSON report payload
- markdown report content
- executive summary
- final score and risk band
- top risk drivers
- report sections
- findings
- recommendations
- remediation roadmap
- commercial next step

The `/api/reports/generate` route stores the generated report in Supabase when environment variables are configured.

## Next Engineering Tasks

1. Add authentication-ready structure
2. Add polished export/download pipeline
3. Prepare Vercel deployment when ready
