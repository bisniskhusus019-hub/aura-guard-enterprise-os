import { remediationRoadmap } from "@/lib/demo-data";
import type { DashboardOverviewData } from "@/lib/dashboard-data";
import type { AuraGuardReportPayload, ReportSection } from "@/types/report";

function listToMarkdown(items: string[]) {
  return items.map((item) => `- ${item}`).join("\n");
}

function getCriticalityLanguage(riskBand: string) {
  if (riskBand === "Critical Risk") return "immediate executive attention";
  if (riskBand === "High Risk") return "rapid remediation within the next 30 days";
  if (riskBand === "Elevated Risk") return "structured governance improvement";
  if (riskBand === "Moderate Risk") return "targeted policy and control tightening";
  return "ongoing monitoring and evidence maintenance";
}

export function buildReportPayload(input: DashboardOverviewData): AuraGuardReportPayload {
  const riskBand = input.riskResult.riskBand;
  const finalScore = input.riskResult.totalScore;
  const topDrivers = input.riskResult.topDrivers.map((driver) => ({
    label: driver.label,
    score: driver.score,
    maxScore: driver.maxScore,
  }));

  const shadowItems = input.inventory.filter((item) => item.status === "Shadow AI");
  const highRiskItems = input.inventory.filter((item) => ["High", "Critical"].includes(item.risk));

  const sections: ReportSection[] = [
    {
      title: "Executive Summary",
      summary: `The organization currently presents a preliminary AI governance score of ${finalScore}/100, classified as ${riskBand}. This indicates ${getCriticalityLanguage(riskBand)} before AI workflows are expanded or positioned for enterprise customers.`,
      findings: [
        `${input.aiToolsCount} AI tools or agent workflows are currently represented in the inventory.`,
        `${input.shadowAiCount} Shadow AI item(s) require immediate review.`,
        `${input.approvalGaps} approval/control gap(s) are visible from the current inventory state.`,
      ],
      recommendations: [
        "Formalize the AI tool inventory and assign owners for every AI workflow.",
        "Create a permission matrix separating allowed, approval-required, and prohibited actions.",
        "Generate executive audit evidence before scaling AI usage or selling AI-enabled services.",
      ],
    },
    {
      title: "AI Usage Inventory Summary",
      summary: "The inventory summarizes approved AI tools, review-required workflows, and unmanaged Shadow AI usage.",
      findings: input.inventory.map((item) => `${item.tool} is used for ${item.useCase}. Owner: ${item.owner}. Status: ${item.status}. Risk: ${item.risk}.`),
      recommendations: [
        "Move every AI tool into an approved, review-required, or prohibited status.",
        "Assign a business owner and data owner to every AI tool.",
        "Review tools touching customer, financial, HR, legal, or technical credential data first.",
      ],
    },
    {
      title: "Shadow AI Risk Map",
      summary: shadowItems.length > 0 ? "Shadow AI exists and creates visibility, data, and accountability gaps." : "No active Shadow AI item is visible in the current inventory snapshot.",
      findings: shadowItems.length > 0 ? shadowItems.map((item) => `${item.tool} is currently classified as Shadow AI with ${item.risk} risk.`) : ["No Shadow AI records are currently listed."],
      recommendations: [
        "Interview each department to identify unofficial AI usage.",
        "Block or review unmanaged browser extensions and unsanctioned AI tools.",
        "Create a simple approved AI tools list for employees and contractors.",
      ],
    },
    {
      title: "Agent Permission Matrix",
      summary: "Agent permissions should define what AI may do automatically, what requires approval, and what is prohibited.",
      findings: [
        "Permission rules are not yet fully connected to each AI workflow in the current dashboard stage.",
        "High-autonomy actions such as sending messages, modifying records, approving refunds, and calling APIs should be treated as high-risk by default.",
      ],
      recommendations: [
        "Create permission rows for each agent action type.",
        "Require human approval for external communication, payment, refund, database update, and file modification actions.",
        "Log every approval decision with owner, timestamp, and business justification.",
      ],
    },
    {
      title: "Data Exposure Assessment",
      summary: "AI risk increases materially when AI tools touch customer, financial, HR, legal, internal knowledge, or credential-related data.",
      findings: highRiskItems.length > 0 ? highRiskItems.map((item) => `${item.tool} is marked ${item.risk} and touches: ${item.dataTouched}.`) : ["No high-risk data exposure is visible in the current inventory snapshot."],
      recommendations: [
        "Classify all data sources by sensitivity level from 0 to 5.",
        "Prevent unapproved tools from touching sensitive customer or credential data.",
        "Review logging, retention, and vendor training settings for every external AI vendor.",
      ],
    },
    {
      title: "Vendor AI Risk Review",
      summary: "External AI vendors should be reviewed for privacy controls, data retention, training usage, admin controls, and export/deletion options.",
      findings: input.inventory.map((item) => `${item.vendor} is associated with ${item.tool}; current risk classification: ${item.risk}.`),
      recommendations: [
        "Review vendor privacy terms and enterprise security pages.",
        "Document whether customer data can be used for model training.",
        "Prefer vendors with admin controls, audit logs, data export, and deletion controls.",
      ],
    },
    {
      title: "Compliance Readiness Summary",
      summary: "The organization needs governance evidence, oversight rules, transparency artifacts, and audit logs before AI usage can be considered enterprise-ready.",
      findings: [
        "Current evidence is sufficient for a preliminary audit view, but not yet a full compliance archive.",
        "The next maturity step is to generate policies, approval rules, and reportable audit evidence.",
      ],
      recommendations: [
        "Create an employee AI acceptable-use policy.",
        "Create a human approval policy for AI actions.",
        "Create a vendor AI review checklist and repeat it for every new AI tool.",
      ],
    },
  ];

  return {
    reportTitle: "AURA-GUARD AI Agent Governance, Security & Compliance Audit",
    clientName: "AURA-GUARD Demo Client",
    packageTier: "Professional Audit",
    generatedAt: new Date().toISOString(),
    finalScore,
    riskBand,
    topDrivers,
    inventory: input.inventory,
    executiveSummary: `AURA-GUARD generated a preliminary AI governance score of ${finalScore}/100 (${riskBand}). The primary drivers are ${topDrivers.map((driver) => driver.label).join(", ")}. Recommended next step: complete governance controls, data exposure review, vendor review, and executive report evidence before scaling AI workflows.`,
    sections,
    remediationRoadmap: remediationRoadmap.map((item) => ({
      timeline: item.week,
      focus: item.title,
      action: item.action,
    })),
    commercialNextStep: "Offer the client a Professional Audit at $999 or Enterprise Readiness Report at $2,500 depending on urgency, AI autonomy, and data sensitivity.",
  };
}

export function renderReportMarkdown(report: AuraGuardReportPayload) {
  const sectionMarkdown = report.sections
    .map(
      (section) => `## ${section.title}\n\n${section.summary}\n\n### Findings\n${listToMarkdown(section.findings)}\n\n### Recommendations\n${listToMarkdown(section.recommendations)}`,
    )
    .join("\n\n");

  const topDrivers = report.topDrivers
    .map((driver) => `- ${driver.label}: ${driver.score}/${driver.maxScore}`)
    .join("\n");

  const roadmap = report.remediationRoadmap
    .map((item) => `- ${item.timeline}: ${item.focus} — ${item.action}`)
    .join("\n");

  return `# ${report.reportTitle}\n\nClient: ${report.clientName}\nPackage: ${report.packageTier}\nGenerated: ${report.generatedAt}\n\n## Final Risk Score\n\n${report.finalScore}/100 — ${report.riskBand}\n\n## Executive Summary\n\n${report.executiveSummary}\n\n## Top Risk Drivers\n\n${topDrivers}\n\n${sectionMarkdown}\n\n## 30-Day Remediation Roadmap\n\n${roadmap}\n\n## Commercial Next Step\n\n${report.commercialNextStep}\n`;
}
