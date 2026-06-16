import { DashboardShell } from "@/components/dashboard-shell";
import { ModulePage } from "@/components/module-page";
import { getDashboardModule } from "@/lib/module-data";

export default function PoliciesPage() {
  const module = getDashboardModule("policies");
  if (!module) return null;

  return (
    <DashboardShell activeHref="/dashboard/policies">
      <ModulePage module={module} />
    </DashboardShell>
  );
}
