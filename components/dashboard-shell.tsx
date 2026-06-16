import type { ReactNode } from "react";
import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/dashboard" },
  { label: "Sales", href: "/dashboard/sales" },
  { label: "Onboarding", href: "/dashboard/onboarding" },
  { label: "Support", href: "/dashboard/support" },
  { label: "Usage", href: "/dashboard/usage" },
  { label: "AI Inventory", href: "/dashboard/ai-inventory" },
  { label: "Shadow AI", href: "/dashboard/shadow-ai" },
  { label: "Agents", href: "/dashboard/agents" },
  { label: "Permissions", href: "/dashboard/permissions" },
  { label: "Data Risk", href: "/dashboard/data-risk" },
  { label: "Defense Tests", href: "/dashboard/defense-tests" },
  { label: "Compliance", href: "/dashboard/compliance" },
  { label: "Vendors", href: "/dashboard/vendors" },
  { label: "Policies", href: "/dashboard/policies" },
  { label: "Activity", href: "/dashboard/audit-logs" },
  { label: "Reports", href: "/dashboard/reports" },
  { label: "Billing", href: "/dashboard/billing" },
  { label: "Partner Mode", href: "/dashboard/white-label" },
  { label: "Workspace", href: "/dashboard/workspace" },
  { label: "Admin", href: "/dashboard/admin" },
];

export function DashboardShell({ children, activeHref = "/dashboard" }: { children: ReactNode; activeHref?: string }) {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <Link href="/" className="sidebar-title">AURA-GUARD</Link>
        <div className="sidebar-subtitle">Enterprise AI Governance OS</div>
        <nav className="nav-list">
          {navItems.map((item) => (
            <Link className={item.href === activeHref ? "nav-item active" : "nav-item"} href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
      </aside>
      <main className="dashboard-main">{children}</main>
    </div>
  );
}
