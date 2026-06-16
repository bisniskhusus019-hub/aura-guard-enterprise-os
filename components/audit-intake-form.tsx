"use client";

import { useState } from "react";

type SubmissionResult = {
  ok: boolean;
  score?: number;
  riskBand?: string;
  organizationId?: string;
  error?: string;
  topDrivers?: Array<{ label: string; score: number; maxScore: number }>;
};

const textFields = [
  ["companyName", "Company name", "AURA-GUARD Demo Client"],
  ["website", "Website", "https://example.com"],
  ["industry", "Industry", "AI Automation Agency"],
  ["region", "Country / region", "Global"],
  ["companySize", "Company size", "1-10"],
  ["contactName", "Main buyer contact", "Founder"],
  ["contactEmail", "Contact email", "founder@example.com"],
  ["aiTools", "AI tools currently used", "ChatGPT, Claude, Gemini, support bot, browser extensions"],
  ["departmentsUsingAi", "Departments using AI", "Operations, customer support, sales"],
  ["businessFunctions", "Business functions using AI", "Customer support drafting and internal workflow automation"],
  ["approvedUsageStatus", "Approved or unofficial usage", "Mixed approved and shadow AI usage"],
  ["existingAiPolicy", "Existing AI policy", "No formal AI policy yet"],
  ["approvalProcess", "Human approval process", "Drafts are reviewed manually, but logs are inconsistent"],
  ["vendorNotes", "Vendor and security notes", "Some vendor privacy policies reviewed, browser extension risk unclear"],
  ["desiredOutput", "Desired output package", "Professional Audit"],
] as const;

const checkboxFields = [
  ["customerDataExposure", "AI touches customer data"],
  ["financialDataExposure", "AI touches financial data"],
  ["hrDataExposure", "AI touches HR data"],
  ["legalDataExposure", "AI touches contracts/legal documents"],
  ["internalKbExposure", "AI touches internal knowledge base"],
  ["credentialExposure", "AI may touch API keys or technical logs"],
  ["canSendEmails", "AI can send emails"],
  ["canUpdateRecords", "AI can update CRM/database records"],
  ["canApprovePayments", "AI can approve payments/refunds"],
  ["canModifyFiles", "AI can modify files"],
  ["canCallApis", "AI can call external tools/APIs"],
] as const;

export function AuditIntakeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    const payload: Record<string, string | boolean> = {};

    textFields.forEach(([name]) => {
      payload[name] = String(formData.get(name) ?? "");
    });

    checkboxFields.forEach(([name]) => {
      payload[name] = formData.get(name) === "on";
    });

    try {
      const response = await fetch("/api/audit-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as SubmissionResult;
      setResult(data);
    } catch (error) {
      setResult({ ok: false, error: error instanceof Error ? error.message : "Submission failed" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid" style={{ marginTop: 34 }}>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {textFields.map(([name, label, placeholder]) => (
          <label key={name} className="card" style={{ display: "grid", gap: 10, padding: 18, color: "var(--muted)", fontSize: 13 }}>
            {label}
            <input
              name={name}
              required={name === "companyName"}
              placeholder={placeholder}
              style={{ padding: 12, borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.04)", color: "var(--text)" }}
            />
          </label>
        ))}
      </div>

      <div className="card" style={{ padding: 24 }}>
        <h2 style={{ marginTop: 0 }}>Risk Signals</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          {checkboxFields.map(([name, label]) => (
            <label key={name} style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--muted)" }}>
              <input name={name} type="checkbox" />
              {label}
            </label>
          ))}
        </div>
      </div>

      <button className="btn btn-primary" type="submit" disabled={isSubmitting} style={{ width: "fit-content" }}>
        {isSubmitting ? "Submitting audit intake..." : "Submit AI Risk Intake"}
      </button>

      {result && (
        <div className="card" style={{ padding: 24 }}>
          {result.ok ? (
            <>
              <div className="badge">Submission saved</div>
              <h2 style={{ marginBottom: 8 }}>Preliminary Score: {result.score} / {result.riskBand}</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                Intake saved to Supabase. Organization ID: {result.organizationId}
              </p>
              {result.topDrivers && (
                <div className="grid">
                  {result.topDrivers.map((driver) => (
                    <div key={driver.label} style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>{driver.label}</span>
                      <strong>{driver.score}/{driver.maxScore}</strong>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              <div className="badge">Submission error</div>
              <p style={{ color: "var(--danger)", lineHeight: 1.7 }}>{result.error}</p>
            </>
          )}
        </div>
      )}
    </form>
  );
}
