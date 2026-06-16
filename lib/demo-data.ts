import { calculateRiskAssessment, demoRiskInput } from "@/lib/risk-scoring";

export const demoAssessment = calculateRiskAssessment(demoRiskInput);

export const aiInventory = [
  {
    tool: "ChatGPT Team",
    vendor: "OpenAI",
    useCase: "Internal drafting and analysis",
    owner: "Operations",
    dataTouched: "Internal notes, customer summaries",
    status: "Approved",
    risk: "Moderate",
  },
  {
    tool: "Support Bot Agent",
    vendor: "Internal Workflow",
    useCase: "Customer support response drafting",
    owner: "Customer Success",
    dataTouched: "Tickets, customer profiles, order history",
    status: "Review Required",
    risk: "High",
  },
  {
    tool: "Browser AI Extensions",
    vendor: "Multiple",
    useCase: "Unmanaged employee usage",
    owner: "Unknown",
    dataTouched: "Unknown",
    status: "Shadow AI",
    risk: "Critical",
  },
];

export const auditModules = [
  "AI Usage Inventory",
  "Shadow AI Scanner",
  "Agent Permission Matrix",
  "Prompt Injection Defensive Test Lab",
  "Data Leak Risk Auditor",
  "Human Approval Policy Builder",
  "Compliance Mapper",
  "AI Vendor Risk Auditor",
  "Audit Log Explainer",
  "Executive Report Generator",
  "White-Label Agency Mode",
];

export const remediationRoadmap = [
  {
    week: "Week 1",
    title: "Inventory and ownership",
    action: "List all AI tools, owners, business functions, data exposure points, and approved status.",
  },
  {
    week: "Week 2",
    title: "Permission matrix",
    action: "Define what AI can do automatically, what requires approval, and what is prohibited.",
  },
  {
    week: "Week 3",
    title: "Data and vendor risk",
    action: "Classify sensitive data sources and review external AI vendors for privacy and control gaps.",
  },
  {
    week: "Week 4",
    title: "Policy and executive evidence",
    action: "Create AI usage policy, approval rules, audit evidence, and boardroom-ready risk report.",
  },
];
