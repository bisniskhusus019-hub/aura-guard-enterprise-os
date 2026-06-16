import type { ReactNode } from "react";
import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/dashboard" },
  { label: "AI Inventory", href: "/dashboard/ai-inventory" },
  { label: "Shadow AI", href: "/dashboard/shadow-ai" },
  { label: "Agents", href: "/dashboard/agents" },
  { label: "Permissions", href: "/dashboard/permissions" },
  { label: "Data Risk", href: "/dashboard/data-risk" },
  { label: "Defense Tests", href: "/dashboard/defense-tests" },
  { label: "Compliance", href: "/dashboard/compliance" },
  { label: "Vendors", href: "/dashboard/vendors" },
  { label: "Policies", href: "/dashboard/policies" },
  { label: "Audit Logs", href: "/dashboard/audit-logs" },
  { label: "Reports", href: "/dashboard/reports" },
  { label: "White Label", href: "/dashboard/white-label" },
  { label: "Settings", href: "/dashboard/settings" },
];

export function DashboardShell({ children, activeHref = "/dashboard" }: { children: ReactNode; activeHref?: string }) {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <Link href="/" className="sidebar-title">AURA-GUARD</Link>
        <div className="sidebar-subtitle">Enterprise AI Governance OS</div>
        <nav className="nav-list">
          {navItems.map((item) => (
            <Link className={item.href === activeHref ? "nav-item active" : "nav-item"} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="dashboard-main">{children}</main>
    </div>
  );
}
