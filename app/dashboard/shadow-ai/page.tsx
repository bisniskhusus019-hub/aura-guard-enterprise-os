import { DashboardShell } from "@/components/dashboard-shell";
import { ModulePage } from "@/components/module-page";
import { getDashboardModule } from "@/lib/module-data";

export default function ShadowAiPage() {
  const module = getDashboardModule("shadow-ai");
  if (!module) return null;

  return (
    <DashboardShell activeHref="/dashboard/shadow-ai">
      <ModulePage module={module} />
    </DashboardShell>
  );
}
