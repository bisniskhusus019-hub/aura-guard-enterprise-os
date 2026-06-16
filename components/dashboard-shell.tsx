import type { ReactNode } from "react";
import Link from "next/link";

const navItems = [
  "Overview",
  "AI Inventory",
  "Shadow AI",
  "Agents",
  "Permissions",
  "Data Risk",
  "Prompt Injection Tests",
  "Compliance",
  "Vendors",
  "Policies",
  "Audit Logs",
  "Reports",
  "White Label",
  "Settings",
];

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <Link href="/" className="sidebar-title">
          AURA-GUARD
        </Link>
        <div className="sidebar-subtitle">Enterprise AI Governance OS</div>
        <nav className="nav-list">
          {navItems.map((item, index) => (
            <Link
              className={index === 0 ? "nav-item active" : "nav-item"}
              href={item === "Reports" ? "/dashboard/reports" : "/dashboard"}
              key={item}
            >
              {item}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="dashboard-main">{children}</main>
    </div>
  );
}
