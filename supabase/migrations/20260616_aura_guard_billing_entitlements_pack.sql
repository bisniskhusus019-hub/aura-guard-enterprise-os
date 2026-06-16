alter table aura_guard.subscriptions
  add column if not exists stripe_customer_id text,
  add column if not exists stripe_subscription_id text,
  add column if not exists billing_period text default 'manual',
  add column if not exists current_period_start timestamptz,
  add column if not exists current_period_end timestamptz,
  add column if not exists cancel_at_period_end boolean default false,
  add column if not exists usage_limit_reports int,
  add column if not exists usage_limit_workspaces int,
  add column if not exists usage_limit_ai_tools int;

create table if not exists aura_guard.pricing_plans (
  id uuid primary key default gen_random_uuid(),
  plan_code text not null unique,
  plan_name text not null,
  plan_type text not null check (plan_type in ('one_time','monthly','annual','partner')),
  price_usd numeric(12,2) not null,
  setup_fee_usd numeric(12,2) default 0,
  included_reports int default 0,
  included_workspaces int default 1,
  included_ai_tools int default 10,
  includes_partner_mode boolean default false,
  includes_custom_branding boolean default false,
  includes_compliance_mapping boolean default false,
  includes_priority_support boolean default false,
  is_active boolean default true,
  created_at timestamptz not null default now()
);

create table if not exists aura_guard.entitlements (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references aura_guard.organizations(id) on delete cascade,
  entitlement_key text not null,
  entitlement_value text not null,
  source_plan_code text,
  created_at timestamptz not null default now(),
  unique (organization_id, entitlement_key)
);

create table if not exists aura_guard.usage_events (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references aura_guard.organizations(id) on delete cascade,
  event_key text not null,
  quantity int not null default 1,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists aura_guard.checkout_sessions (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references aura_guard.organizations(id) on delete set null,
  plan_code text references aura_guard.pricing_plans(plan_code) on delete set null,
  provider text not null default 'stripe',
  provider_session_id text,
  checkout_url text,
  status text not null default 'created',
  created_at timestamptz not null default now()
);

create table if not exists aura_guard.billing_events (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references aura_guard.organizations(id) on delete set null,
  provider text not null default 'stripe',
  provider_event_id text,
  event_type text not null,
  event_payload jsonb default '{}'::jsonb,
  processed_at timestamptz default now(),
  created_at timestamptz not null default now()
);

create index if not exists idx_aura_guard_entitlements_org on aura_guard.entitlements(organization_id);
create index if not exists idx_aura_guard_usage_events_org on aura_guard.usage_events(organization_id);
create index if not exists idx_aura_guard_checkout_sessions_org on aura_guard.checkout_sessions(organization_id);
create index if not exists idx_aura_guard_billing_events_org on aura_guard.billing_events(organization_id);
