import { DashboardShell } from "@/components/dashboard-shell";
import { ModulePage } from "@/components/module-page";
import { getDashboardModule } from "@/lib/module-data";

export default function AgentsPage() {
  const module = getDashboardModule("agents");
  if (!module) return null;

  return (
    <DashboardShell activeHref="/dashboard/agents">
      <ModulePage module={module} />
    </DashboardShell>
  );
}
