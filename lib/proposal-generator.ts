import { getPlanByCode, formatUsd } from "@/lib/pricing";

export function buildProposalMarkdown(planCode = "professional_audit_999") {
  const plan = getPlanByCode(planCode) ?? getPlanByCode("professional_audit_999");

  if (!plan) {
    throw new Error("Proposal plan not found.");
  }

  return `# AURA-GUARD ${plan.name} Proposal\n\n## Investment\n\n${formatUsd(plan.price)}${plan.setupFee ? ` + ${formatUsd(plan.setupFee)} setup` : ""}\n\n## Best For\n\n${plan.bestFor}\n\n## Scope\n\n${plan.description}\n\n## Included Capacity\n\n- Reports: ${plan.includedReports}\n- Workspaces: ${plan.includedWorkspaces}\n- AI tools tracked: ${plan.includedAiTools}\n\n## Included Features\n\n${plan.features.map((feature) => `- ${feature}`).join("\n")}\n\n## Delivery Outcome\n\nAURA-GUARD converts AI usage into risk visibility, governance evidence, executive reporting, and a practical remediation roadmap.\n\n## Next Step\n\nConfirm the plan, complete the intake, and start the audit delivery workflow.\n`;
}
