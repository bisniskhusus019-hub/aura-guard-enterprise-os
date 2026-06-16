import { DashboardShell } from "@/components/dashboard-shell";
import { ModulePage } from "@/components/module-page";
import { getDashboardModule } from "@/lib/module-data";

export default function PermissionsPage() {
  const module = getDashboardModule("permissions");
  if (!module) return null;

  return (
    <DashboardShell activeHref="/dashboard/permissions">
      <ModulePage module={module} />
    </DashboardShell>
  );
}
