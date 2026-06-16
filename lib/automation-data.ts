import { createSupabaseAdminClient, hasSupabaseServerEnv } from "@/lib/supabase-admin";

export type AutomationSummary = {
  source: "live" | "fallback";
  templates: number;
  queuedNotifications: number;
  automationRules: number;
  proposals: number;
  invoices: number;
  deliveryMilestones: number;
};

async function countRows(table: string, statusFilter?: { column: string; value: string }) {
  const supabase = createSupabaseAdminClient();
  let query = supabase.from(table).select("id", { count: "exact", head: true });

  if (statusFilter) {
    query = query.eq(statusFilter.column, statusFilter.value);
  }

  const { count, error } = await query;
  if (error) throw error;
  return count ?? 0;
}

export async function getAutomationSummary(): Promise<AutomationSummary> {
  if (!hasSupabaseServerEnv()) {
    return {
      source: "fallback",
      templates: 5,
      queuedNotifications: 0,
      automationRules: 4,
      proposals: 0,
      invoices: 0,
      deliveryMilestones: 2,
    };
  }

  try {
    const [templates, queuedNotifications, automationRules, proposals, invoices, deliveryMilestones] = await Promise.all([
      countRows("email_templates"),
      countRows("notification_queue", { column: "status", value: "queued" }),
      countRows("automation_rules"),
      countRows("proposals"),
      countRows("invoice_records"),
      countRows("delivery_milestones"),
    ]);

    return {
      source: "live",
      templates,
      queuedNotifications,
      automationRules,
      proposals,
      invoices,
      deliveryMilestones,
    };
  } catch (error) {
    console.error("Automation summary failed; using fallback.", error);
    return {
      source: "fallback",
      templates: 5,
      queuedNotifications: 0,
      automationRules: 4,
      proposals: 0,
      invoices: 0,
      deliveryMilestones: 2,
    };
  }
}
