import { DashboardShell } from "@/components/dashboard-shell";
import { ModulePage } from "@/components/module-page";
import { getDashboardModule } from "@/lib/module-data";

export default function VendorsPage() {
  const module = getDashboardModule("vendors");
  if (!module) return null;

  return (
    <DashboardShell activeHref="/dashboard/vendors">
      <ModulePage module={module} />
    </DashboardShell>
  );
}
