import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AURA-GUARD — AI Agent Governance OS",
  description:
    "Enterprise AI Agent Governance, Security & Compliance OS for teams adopting AI tools, agents, and automated workflows.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
