create table if not exists aura_guard.user_profiles (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique,
  email text not null,
  full_name text,
  role text default 'user',
  created_at timestamptz not null default now()
);

create table if not exists aura_guard.organization_memberships (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references aura_guard.organizations(id) on delete cascade,
  user_profile_id uuid references aura_guard.user_profiles(id) on delete cascade,
  membership_role text not null default 'viewer' check (membership_role in ('owner','admin','auditor','client','viewer')),
  created_at timestamptz not null default now(),
  unique (organization_id, user_profile_id)
);

create table if not exists aura_guard.invitations (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references aura_guard.organizations(id) on delete cascade,
  email text not null,
  invited_role text not null default 'viewer',
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists aura_guard.framework_references (
  id uuid primary key default gen_random_uuid(),
  framework_name text not null,
  reference_code text not null,
  reference_title text not null,
  reference_summary text,
  category text,
  created_at timestamptz not null default now(),
  unique (framework_name, reference_code)
);

create table if not exists aura_guard.control_mappings (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references aura_guard.organizations(id) on delete cascade,
  framework_reference_id uuid references aura_guard.framework_references(id) on delete cascade,
  control_status text not null default 'not_started' check (control_status in ('not_started','in_progress','implemented','not_applicable')),
  evidence_summary text,
  owner_department text,
  created_at timestamptz not null default now()
);

create table if not exists aura_guard.remediation_tasks (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references aura_guard.organizations(id) on delete cascade,
  report_id uuid references aura_guard.reports(id) on delete set null,
  title text not null,
  priority text not null default 'medium' check (priority in ('low','medium','high','critical')),
  status text not null default 'open' check (status in ('open','in_progress','blocked','done')),
  due_date date,
  owner text,
  created_at timestamptz not null default now()
);

create table if not exists aura_guard.white_label_profiles (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references aura_guard.organizations(id) on delete cascade,
  brand_name text not null,
  logo_url text,
  primary_color text,
  report_footer text,
  created_at timestamptz not null default now()
);

create table if not exists aura_guard.integration_settings (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references aura_guard.organizations(id) on delete cascade,
  integration_name text not null,
  integration_status text not null default 'not_connected',
  public_config jsonb default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique (organization_id, integration_name)
);

create index if not exists idx_aura_guard_memberships_org on aura_guard.organization_memberships(organization_id);
create index if not exists idx_aura_guard_control_mappings_org on aura_guard.control_mappings(organization_id);
create index if not exists idx_aura_guard_remediation_org on aura_guard.remediation_tasks(organization_id);
create index if not exists idx_aura_guard_white_label_org on aura_guard.white_label_profiles(organization_id);
