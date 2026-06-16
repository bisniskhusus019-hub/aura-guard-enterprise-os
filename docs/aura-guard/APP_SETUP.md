# AURA-GUARD App Setup

## Current Stage
The app foundation is now structured as a Next.js project with:

- Premium public landing page
- Dashboard shell
- AI Risk Command Center demo
- Report preview page
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

Never commit `.env.local`.

## Current Routes

```txt
/                  Premium landing page
/dashboard          AI Risk Command Center demo
/dashboard/reports  Executive report preview
```

## Supabase Status
Dedicated project: `aura-guard`
Schema: `aura_guard`
Tables: 14 core tables
Demo scoring verified: `83 / Critical Risk`

## Next Engineering Tasks

1. Connect dashboard to live Supabase read queries
2. Build audit intake form
3. Store intake submissions in `aura_guard.organizations` and related tables
4. Create report generation payload
5. Add PDF export or report rendering pipeline
6. Prepare Vercel deployment when ready
