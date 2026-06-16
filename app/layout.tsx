import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://aura-guard-enterprise-os.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AURA-GUARD — Enterprise AI Governance OS",
    template: "%s · AURA-GUARD",
  },
  description:
    "Enterprise AI governance SaaS for AI risk audits, tool inventory, compliance readiness, client operations, reports, and monitoring.",
  applicationName: "AURA-GUARD",
  keywords: [
    "AI governance",
    "AI risk audit",
    "AI compliance",
    "AI tool inventory",
    "enterprise AI security",
    "AI monitoring",
    "AI audit report",
  ],
  authors: [{ name: "AURA-GUARD" }],
  creator: "AURA-GUARD",
  publisher: "AURA-GUARD",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "AURA-GUARD",
    title: "AURA-GUARD — Enterprise AI Governance OS",
    description:
      "Audit, monitor, and govern AI tools, agents, workflows, reports, and client operations from one SaaS dashboard.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AURA-GUARD — Enterprise AI Governance OS",
    description:
      "Enterprise AI governance SaaS for risk scoring, reports, compliance readiness, client operations, and monitoring.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
