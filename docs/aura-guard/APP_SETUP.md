# AURA-GUARD App Setup

## Current Stage
The app foundation is now structured as a Next.js project with:

- Premium public landing page
- Dashboard shell
- AI Risk Command Center connected to live Supabase reads with safe fallback
- Report preview page
- Live audit intake form shell
- Audit intake API route
- Dashboard API route
- Risk scoring engine
- Supabase client helper
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
/                    Premium landing page
/audit-intake         Live audit intake form shell
/dashboard            AI Risk Command Center with live/fallback data
/dashboard/reports    Executive report preview
/api/risk-score       Risk scoring API route
/api/audit-intake     Audit intake submission API route
/api/dashboard        Dashboard overview API route
```

## Supabase Status
Dedicated project: `aura-guard`
Schema: `aura_guard`
Tables: 15 total tables including `intake_submissions`
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

## Next Engineering Tasks

1. Create report generation payload
2. Add PDF export or report rendering pipeline
3. Add authentication-ready structure
4. Prepare Vercel deployment when ready
