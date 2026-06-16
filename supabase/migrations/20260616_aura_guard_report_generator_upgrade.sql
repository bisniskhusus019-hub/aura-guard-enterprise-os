alter table aura_guard.reports
  add column if not exists report_payload jsonb,
  add column if not exists markdown_content text,
  add column if not exists generated_score int,
  add column if not exists generated_risk_band text,
  add column if not exists package_tier text default 'professional',
  add column if not exists client_name text,
  add column if not exists generated_at timestamptz default now();

create table if not exists aura_guard.report_exports (
  id uuid primary key default gen_random_uuid(),
  report_id uuid references aura_guard.reports(id) on delete cascade,
  export_type text not null default 'markdown',
  export_status text not null default 'ready',
  export_url text,
  created_at timestamptz not null default now()
);

create index if not exists idx_aura_guard_reports_generated_at on aura_guard.reports(generated_at desc);
create index if not exists idx_aura_guard_report_exports_report_id on aura_guard.report_exports(report_id);
