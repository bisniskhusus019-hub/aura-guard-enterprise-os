export const launchChecklist = [
  { key: "repo_ready", title: "Dedicated GitHub repository ready", area: "Code", status: "complete" },
  { key: "supabase_ready", title: "Supabase schema and seed data ready", area: "Database", status: "complete" },
  { key: "security_advisor_clean", title: "Supabase security advisor clean", area: "Security", status: "complete" },
  { key: "landing_ready", title: "Public landing page ready", area: "Website", status: "complete" },
  { key: "dashboard_ready", title: "Dashboard modules ready", area: "App", status: "complete" },
  { key: "report_ready", title: "Report generator ready", area: "Reporting", status: "complete" },
  { key: "ops_ready", title: "Client operations layer ready", area: "Operations", status: "complete" },
  { key: "billing_code_ready", title: "Billing code and plan structure ready", area: "Billing", status: "complete" },
  { key: "payment_keys_needed", title: "Payment provider keys and price IDs needed", area: "Billing", status: "pending" },
  { key: "auth_config_needed", title: "Production auth configuration needed", area: "Auth", status: "pending" },
  { key: "final_deploy_needed", title: "Final production deploy/publish needed", area: "Deployment", status: "pending" },
];

export const trustItems = [
  ["Data minimization", "Collect only what is needed for audit scoring, reporting, and governance workflows."],
  ["Server-only secrets", "Service-role and billing keys stay in environment variables, never frontend code."],
  ["Human review", "Client-facing reports should be reviewed before final delivery."],
  ["Workspace separation", "Client data is structured by organization and prepared for role-based access."],
  ["Hosted payment handoff", "AURA-GUARD is designed to use hosted checkout rather than collecting card data directly."],
];

export const featureAccessMatrix = [
  ["Public website", "Public", "All visitors"],
  ["AI risk intake", "Starter Audit", "$299+"],
  ["Risk scoring", "Starter Audit", "$299+"],
  ["Executive report", "Professional Audit", "$999+"],
  ["Compliance mapping", "Professional Audit", "$999+"],
  ["Monthly monitoring", "Monitoring Core", "$499/mo+"],
  ["Multi-workspace operations", "Monitoring Scale", "$1,500/mo+"],
  ["Enterprise OS", "Enterprise OS", "$5,000/mo+"],
  ["Partner Mode", "Agency Partner", "$7,500+"],
  ["Strategic Partner Package", "Strategic Partner", "$15,000+"],
];
