# AURA-GUARD Client Operations Architecture

## Goal
This layer turns AURA-GUARD from a product demo into a business operating system for selling, onboarding, supporting, and expanding clients.

## New Public Routes

```txt
/contact-sales
/demo-request
```

## New Internal Routes

```txt
/dashboard/sales
/dashboard/onboarding
/dashboard/support
/dashboard/usage
/dashboard/admin
```

## New API Routes

```txt
/api/sales-leads
/api/demo-requests
/api/ops/summary
```

## New Database Tables

```txt
sales_leads
demo_requests
onboarding_projects
onboarding_steps
customer_notes
support_requests
usage_snapshots
admin_tasks
```

## Why This Matters
AURA-GUARD now has the operating structure required to move prospects through a commercial workflow:

1. Visitor reads the website
2. Visitor requests demo or contacts sales
3. Lead enters sales dashboard
4. Lead buys audit or subscription
5. Client enters onboarding project
6. Dashboard tracks usage and support
7. Report generator produces client deliverables
8. Billing dashboard supports subscriptions and partner plans

## Still Pending For Production

- Email notifications
- Calendar booking integration
- Real CRM export
- Full Supabase Auth workspace enforcement
- Payment provider keys and price IDs

## Position
This layer supports a larger SaaS and services business, not a small landing page. It prepares the product for higher-ticket sales, recurring subscriptions, partner packaging, and multi-client operations.
