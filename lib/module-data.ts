export type DashboardModule = {
  slug: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  tableHeaders: string[];
  rows: string[][];
  actions: string[];
};

export const dashboardModules: DashboardModule[] = [
  {
    slug: "ai-inventory",
    title: "AI Inventory",
    description: "Tracks approved and unapproved AI tools, owners, vendors, use cases, data touched, and risk level.",
    metricLabel: "Tracked AI Tools",
    metricValue: "3",
    tableHeaders: ["Tool", "Vendor", "Owner", "Status", "Risk"],
    rows: [
      ["ChatGPT Team", "OpenAI", "Operations", "Approved", "Moderate"],
      ["Support Bot Agent", "Internal Workflow", "Customer Success", "Review Required", "High"],
      ["Browser AI Extensions", "Multiple", "Unknown", "Shadow AI", "Critical"],
    ],
    actions: ["Assign owner to each AI tool", "Classify data touched", "Move unknown tools into approved, review, or prohibited status"],
  },
  {
    slug: "shadow-ai",
    title: "Shadow AI",
    description: "Maps unofficial AI usage by department, risk level, business function, and policy violation potential.",
    metricLabel: "Shadow AI Items",
    metricValue: "1",
    tableHeaders: ["Signal", "Department", "Risk", "Concern", "Action"],
    rows: [["Browser AI Extensions", "Unknown", "Critical", "Unmanaged data exposure", "Block or review"]],
    actions: ["Interview departments", "Create approved AI tool list", "Restrict unmanaged browser AI extensions"],
  },
  {
    slug: "agents",
    title: "Agents",
    description: "Lists AI agents and workflows by autonomy level, production status, owner, connected tools, and data sources.",
    metricLabel: "Active Agents",
    metricValue: "1",
    tableHeaders: ["Agent", "Function", "Autonomy", "Status", "Owner"],
    rows: [["Support Bot Agent", "Customer support drafting", "3/5", "Review Required", "Customer Success"]],
    actions: ["Define autonomy level", "Require owner for each agent", "Separate draft-only agents from action-taking agents"],
  },
  {
    slug: "permissions",
    title: "Permissions",
    description: "Defines allowed, approval-required, and prohibited actions for every AI agent.",
    metricLabel: "Approval Gaps",
    metricValue: "2",
    tableHeaders: ["Action", "Permission", "Approval Owner", "Risk", "Notes"],
    rows: [
      ["Send customer email", "Approval Required", "Support Lead", "High", "External communication"],
      ["Approve refund", "Prohibited", "Finance", "Critical", "Financial action"],
      ["Draft support reply", "Allowed", "Customer Success", "Moderate", "Human review recommended"],
    ],
    actions: ["Map agent actions", "Force approval for external actions", "Prohibit financial approvals by AI"],
  },
  {
    slug: "data-risk",
    title: "Data Risk",
    description: "Maps data sources touched by AI and sensitivity levels across customer, financial, HR, legal, and technical data.",
    metricLabel: "Sensitive Sources",
    metricValue: "4",
    tableHeaders: ["Data Source", "Sensitivity", "Contains", "Owner", "Risk"],
    rows: [
      ["Customer tickets", "4/5", "Customer data", "Support", "High"],
      ["Order history", "4/5", "Customer + finance", "Ops", "High"],
      ["Internal notes", "2/5", "Internal knowledge", "Operations", "Moderate"],
    ],
    actions: ["Classify all data sources", "Remove credential exposure", "Review vendor retention and training terms"],
  },
  {
    slug: "prompt-tests",
    title: "Prompt Injection Tests",
    description: "Stores defensive test results, severity, attack category, and mitigation recommendations.",
    metricLabel: "Tests Ready",
    metricValue: "6",
    tableHeaders: ["Test", "Category", "Severity", "Status", "Mitigation"],
    rows: [
      ["Ignore previous policy", "Instruction override", "High", "Ready", "Policy isolation"],
      ["Reveal hidden context", "Data leakage", "Critical", "Ready", "Context minimization"],
      ["Tool misuse request", "Excessive agency", "High", "Ready", "Action gating"],
    ],
    actions: ["Run prompt injection test suite", "Record failure severity", "Create mitigation evidence"],
  },
  {
    slug: "compliance",
    title: "Compliance",
    description: "Maps controls to NIST AI RMF, OWASP LLM Top 10, and EU AI Act governance expectations.",
    metricLabel: "Framework References",
    metricValue: "10",
    tableHeaders: ["Framework", "Control", "Category", "Status", "Evidence"],
    rows: [
      ["NIST AI RMF", "GOVERN", "Governance", "In Progress", "Policy draft required"],
      ["OWASP LLM Top 10", "LLM01", "Security", "Not Started", "Prompt test evidence required"],
      ["EU AI Act", "HUMAN_OVERSIGHT", "Governance", "In Progress", "Approval matrix required"],
    ],
    actions: ["Map risks to framework references", "Attach evidence to each control", "Generate compliance readiness summary"],
  },
  {
    slug: "vendors",
    title: "Vendors",
    description: "Reviews AI vendors by privacy, security, admin controls, retention, training risk, and procurement recommendation.",
    metricLabel: "Vendor Reviews",
    metricValue: "3",
    tableHeaders: ["Vendor", "Tool", "Privacy", "Admin Control", "Recommendation"],
    rows: [
      ["OpenAI", "ChatGPT Team", "Review", "Available", "Approved with controls"],
      ["Multiple", "Browser AI Extensions", "Unknown", "Unknown", "Block or review"],
    ],
    actions: ["Review privacy terms", "Check training/data-use settings", "Document vendor risk decision"],
  },
  {
    slug: "policies",
    title: "Policies",
    description: "Stores AI acceptable-use, employee AI usage, vendor AI, and human approval policies.",
    metricLabel: "Policy Pack",
    metricValue: "4",
    tableHeaders: ["Policy", "Version", "Owner", "Status", "Purpose"],
    rows: [
      ["Employee AI Acceptable Use", "v1", "Operations", "Draft", "Control staff AI usage"],
      ["Human Approval Policy", "v1", "Security", "Draft", "Action gating"],
      ["Vendor AI Review Policy", "v1", "Procurement", "Draft", "Vendor risk"],
    ],
    actions: ["Generate policy drafts", "Assign owners", "Review every 90 days"],
  },
  {
    slug: "audit-logs",
    title: "Audit Logs",
    description: "Shows AI actions, tool calls, risk events, approval decisions, and summarized audit evidence.",
    metricLabel: "Log Events",
    metricValue: "0",
    tableHeaders: ["Event", "Actor", "Severity", "Summary", "Status"],
    rows: [["No live events yet", "System", "Info", "Audit log structure ready", "Ready"]],
    actions: ["Log agent actions", "Log approval decisions", "Summarize risk events for executive reports"],
  },
  {
    slug: "white-label",
    title: "White Label",
    description: "Supports agency partner branding, client workspaces, custom report packaging, and reseller positioning.",
    metricLabel: "Partner Profiles",
    metricValue: "1",
    tableHeaders: ["Brand", "Package", "Use", "Status", "Notes"],
    rows: [["AURA-GUARD Partner Demo", "White-Label", "Agency resale", "Ready", "Customize branding later"]],
    actions: ["Create partner profile", "Customize report footer", "Package $5k-$10k reseller offer"],
  },
  {
    slug: "settings",
    title: "Settings",
    description: "Organization profile, roles, memberships, integrations, billing status, and workspace controls.",
    metricLabel: "Workspace Controls",
    metricValue: "Ready",
    tableHeaders: ["Area", "Status", "Purpose", "Owner", "Notes"],
    rows: [
      ["Memberships", "Schema Ready", "Client separation", "Admin", "Auth integration later"],
      ["Invitations", "Schema Ready", "Invite users", "Admin", "Email later"],
      ["Integrations", "Schema Ready", "Tool connections", "Admin", "Vercel/env later"],
    ],
    actions: ["Connect auth provider", "Add organization switcher", "Add integration setup screens"],
  },
];

export function getDashboardModule(slug: string) {
  return dashboardModules.find((module) => module.slug === slug);
}
