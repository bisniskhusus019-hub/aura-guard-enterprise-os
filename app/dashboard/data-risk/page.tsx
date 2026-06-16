import { DashboardShell } from "@/components/dashboard-shell";
import { ModulePage } from "@/components/module-page";
import { getDashboardModule } from "@/lib/module-data";

export default function DataRiskPage() {
  const module = getDashboardModule("data-risk");
  if (!module) return null;

  return (
    <DashboardShell activeHref="/dashboard/data-risk">
      <ModulePage module={module} />
    </DashboardShell>
  );
}
