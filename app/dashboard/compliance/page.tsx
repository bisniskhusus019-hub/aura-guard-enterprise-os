import { DashboardShell } from "@/components/dashboard-shell";
import { ModulePage } from "@/components/module-page";
import { getDashboardModule } from "@/lib/module-data";

export default function CompliancePage() {
  const module = getDashboardModule("compliance");
  if (!module) return null;

  return (
    <DashboardShell activeHref="/dashboard/compliance">
      <ModulePage module={module} />
    </DashboardShell>
  );
}
