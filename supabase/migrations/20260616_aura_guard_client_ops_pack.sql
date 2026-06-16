create table if not exists aura_guard.sales_leads (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  website text,
  contact_name text,
  contact_email text,
  company_size text,
  buyer_type text,
  interest_level text default 'new',
  desired_plan_code text,
  source text default 'website',
  notes text,
  status text not null default 'new' check (status in ('new','qualified','demo_scheduled','proposal_sent','won','lost')),
  created_at timestamptz not null default now()
);

create table if not exists aura_guard.demo_requests (
  id uuid primary key default gen_random_uuid(),
  sales_lead_id uuid references aura_guard.sales_leads(id) on delete set null,
  company_name text not null,
  contact_email text not null,
  requested_plan_code text,
  preferred_time text,
  use_case_summary text,
  status text not null default 'requested' check (status in ('requested','scheduled','completed','cancelled')),
  created_at timestamptz not null default now()
);

create table if not exists aura_guard.onboarding_projects (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references aura_guard.organizations(id) on delete cascade,
  project_name text not null,
  package_tier text not null default 'professional_audit',
  owner text,
  status text not null default 'not_started' check (status in ('not_started','active','blocked','completed')),
  start_date date,
  target_date date,
  created_at timestamptz not null default now()
);

create table if not exists aura_guard.onboarding_steps (
  id uuid primary key default gen_random_uuid(),
  onboarding_project_id uuid references aura_guard.onboarding_projects(id) on delete cascade,
  step_title text not null,
  step_order int not null default 0,
  status text not null default 'open' check (status in ('open','active','done','blocked')),
  owner text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists aura_guard.customer_notes (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references aura_guard.organizations(id) on delete cascade,
  note_type text not null default 'general',
  title text not null,
  content text,
  created_by text,
  created_at timestamptz not null default now()
);

create table if not exists aura_guard.support_requests (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references aura_guard.organizations(id) on delete set null,
  requester_email text,
  subject text not null,
  priority text not null default 'medium' check (priority in ('low','medium','high','urgent')),
  status text not null default 'open' check (status in ('open','in_progress','waiting','resolved')),
  description text,
  created_at timestamptz not null default now()
);

create table if not exists aura_guard.usage_snapshots (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references aura_guard.organizations(id) on delete cascade,
  reports_generated int default 0,
  workspaces_used int default 1,
  ai_tools_tracked int default 0,
  period_start date,
  period_end date,
  created_at timestamptz not null default now()
);

create table if not exists aura_guard.admin_tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  area text not null default 'operations',
  priority text not null default 'medium' check (priority in ('low','medium','high','critical')),
  status text not null default 'open' check (status in ('open','active','done','blocked')),
  owner text,
  created_at timestamptz not null default now()
);

create index if not exists idx_aura_guard_sales_leads_status on aura_guard.sales_leads(status);
create index if not exists idx_aura_guard_demo_requests_status on aura_guard.demo_requests(status);
create index if not exists idx_aura_guard_onboarding_projects_org on aura_guard.onboarding_projects(organization_id);
create index if not exists idx_aura_guard_support_requests_status on aura_guard.support_requests(status);
create index if not exists idx_aura_guard_usage_snapshots_org on aura_guard.usage_snapshots(organization_id);
create index if not exists idx_aura_guard_admin_tasks_status on aura_guard.admin_tasks(status);
