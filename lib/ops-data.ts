import { createSupabaseAdminClient, hasSupabaseServerEnv } from "@/lib/supabase-admin";

export type OpsSummary = {
  source: "live" | "fallback";
  salesLeads: number;
  demoRequests: number;
  activeOnboarding: number;
  openSupport: number;
  reportsGenerated: number;
  aiToolsTracked: number;
  adminOpenTasks: number;
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

export async function getOpsSummary(): Promise<OpsSummary> {
  if (!hasSupabaseServerEnv()) {
    return {
      source: "fallback",
      salesLeads: 1,
      demoRequests: 0,
      activeOnboarding: 1,
      openSupport: 1,
      reportsGenerated: 1,
      aiToolsTracked: 3,
      adminOpenTasks: 3,
    };
  }

  try {
    const supabase = createSupabaseAdminClient();
    const [salesLeads, demoRequests, activeOnboarding, openSupport, adminOpenTasks] = await Promise.all([
      countRows("sales_leads"),
      countRows("demo_requests"),
      countRows("onboarding_projects", { column: "status", value: "active" }),
      countRows("support_requests", { column: "status", value: "open" }),
      countRows("admin_tasks", { column: "status", value: "open" }),
    ]);

    const { data: usage } = await supabase
      .from("usage_snapshots")
      .select("reports_generated, ai_tools_tracked")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    return {
      source: "live",
      salesLeads,
      demoRequests,
      activeOnboarding,
      openSupport,
      reportsGenerated: usage?.reports_generated ?? 0,
      aiToolsTracked: usage?.ai_tools_tracked ?? 0,
      adminOpenTasks,
    };
  } catch (error) {
    console.error("Operations summary failed; using fallback.", error);
    return {
      source: "fallback",
      salesLeads: 1,
      demoRequests: 0,
      activeOnboarding: 1,
      openSupport: 1,
      reportsGenerated: 1,
      aiToolsTracked: 3,
      adminOpenTasks: 3,
    };
  }
}
