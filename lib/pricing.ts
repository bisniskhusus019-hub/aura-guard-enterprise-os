export type AuraPlan = {
  code: string;
  name: string;
  type: "one_time" | "monthly" | "partner";
  price: number;
  setupFee?: number;
  description: string;
  bestFor: string;
  includedReports: number;
  includedWorkspaces: number;
  includedAiTools: number;
  features: string[];
  cta: string;
};

export const auraPlans: AuraPlan[] = [
  {
    code: "starter_audit_299",
    name: "Starter Audit",
    type: "one_time",
    price: 299,
    description: "Fast AI governance baseline for small teams.",
    bestFor: "Small businesses, consultants, and early AI agencies.",
    includedReports: 1,
    includedWorkspaces: 1,
    includedAiTools: 10,
    features: ["AI usage inventory", "Preliminary risk score", "Shadow AI check", "Data exposure summary", "7-day action plan"],
    cta: "Start Starter Audit",
  },
  {
    code: "professional_audit_999",
    name: "Professional Audit",
    type: "one_time",
    price: 999,
    description: "Executive-ready AI risk audit with report and roadmap.",
    bestFor: "AI agencies, SaaS teams, and B2B service businesses.",
    includedReports: 3,
    includedWorkspaces: 1,
    includedAiTools: 50,
    features: ["Full risk score", "Permission matrix", "Vendor risk summary", "Compliance readiness", "Printable executive report"],
    cta: "Start Professional Audit",
  },
  {
    code: "enterprise_readiness_2500",
    name: "Enterprise Readiness Report",
    type: "one_time",
    price: 2500,
    description: "Boardroom-grade AI governance evidence package.",
    bestFor: "Teams preparing for enterprise clients, procurement, or investor review.",
    includedReports: 8,
    includedWorkspaces: 3,
    includedAiTools: 150,
    features: ["Expanded vendor review", "Framework mapping", "Department risk segmentation", "Remediation register", "Priority delivery"],
    cta: "Request Enterprise Readiness",
  },
  {
    code: "monitoring_core_499",
    name: "Monitoring Core",
    type: "monthly",
    price: 499,
    description: "Monthly AI governance monitoring for active teams.",
    bestFor: "Teams that want recurring visibility after the audit.",
    includedReports: 4,
    includedWorkspaces: 1,
    includedAiTools: 50,
    features: ["Monthly risk refresh", "Ongoing dashboard access", "Report exports", "Basic framework mapping", "Email support"],
    cta: "Subscribe to Core",
  },
  {
    code: "monitoring_scale_1500",
    name: "Monitoring Scale",
    type: "monthly",
    price: 1500,
    setupFee: 2500,
    description: "Higher-volume monitoring for growing AI operations.",
    bestFor: "Agencies, SaaS teams, and operations-heavy companies.",
    includedReports: 12,
    includedWorkspaces: 5,
    includedAiTools: 250,
    features: ["Multi-workspace monitoring", "Priority support", "Expanded remediation tracking", "Vendor review cadence", "Executive update reports"],
    cta: "Subscribe to Scale",
  },
  {
    code: "enterprise_os_5000",
    name: "Enterprise OS",
    type: "monthly",
    price: 5000,
    setupFee: 10000,
    description: "Full AI governance operating system for serious B2B teams.",
    bestFor: "Larger teams and enterprise-facing operators.",
    includedReports: 30,
    includedWorkspaces: 20,
    includedAiTools: 1000,
    features: ["Partner mode", "Custom branding", "Advanced control mapping", "Priority support", "Enterprise report package"],
    cta: "Apply for Enterprise OS",
  },
  {
    code: "agency_partner_7500",
    name: "Agency Partner License",
    type: "partner",
    price: 7500,
    description: "Partner package for agencies selling AI governance audits.",
    bestFor: "AI automation agencies and B2B consultants.",
    includedReports: 20,
    includedWorkspaces: 25,
    includedAiTools: 500,
    features: ["Partner Mode", "Client workspaces", "Branded report structure", "Offer one-pagers", "Sales delivery workflow"],
    cta: "Apply for Partner License",
  },
  {
    code: "strategic_partner_15000",
    name: "Strategic Partner License",
    type: "partner",
    price: 15000,
    setupFee: 5000,
    description: "High-ticket partner system for larger agencies and consultancies.",
    bestFor: "Partners serving multiple clients or premium B2B accounts.",
    includedReports: 50,
    includedWorkspaces: 100,
    includedAiTools: 2500,
    features: ["Large workspace capacity", "Strategic partner packaging", "Custom-branded delivery", "Priority roadmap influence", "Premium onboarding"],
    cta: "Apply for Strategic Partner",
  },
];

export function getPlanByCode(code: string) {
  return auraPlans.find((plan) => plan.code === code);
}

export function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);
}
