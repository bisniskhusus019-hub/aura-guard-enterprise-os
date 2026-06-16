import { DashboardShell } from "@/components/dashboard-shell";
import { ModulePage } from "@/components/module-page";
import { getDashboardModule } from "@/lib/module-data";

export default function AiInventoryPage() {
  const module = getDashboardModule("ai-inventory");
  if (!module) return null;

  return (
    <DashboardShell activeHref="/dashboard/ai-inventory">
      <ModulePage module={module} />
    </DashboardShell>
  );
}
