"use client";

import { useState } from "react";
import { auraPlans } from "@/lib/pricing";

type FormMode = "sales" | "demo";

type LeadResult = {
  ok: boolean;
  message?: string;
  error?: string;
};

export function LeadCaptureForm({ mode }: { mode: FormMode }) {
  const [result, setResult] = useState<LeadResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const endpoint = mode === "sales" ? "/api/sales-leads" : "/api/demo-requests";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as LeadResult;
      setResult(data);
    } catch (error) {
      setResult({ ok: false, error: error instanceof Error ? error.message : "Submission failed." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid" onSubmit={handleSubmit} style={{ marginTop: 28 }}>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        <input name="companyName" required placeholder="Company name" style={inputStyle} />
        <input name="website" placeholder="Website" style={inputStyle} />
        <input name="contactName" placeholder="Your name" style={inputStyle} />
        <input name="contactEmail" required type="email" placeholder="Work email" style={inputStyle} />
        <input name="companySize" placeholder="Company size" style={inputStyle} />
        <input name="buyerType" placeholder="Buyer type, e.g. agency / SaaS / SMB" style={inputStyle} />
      </div>

      <select name="desiredPlanCode" style={inputStyle} defaultValue="professional_audit_999">
        {auraPlans.map((plan) => <option key={plan.code} value={plan.code}>{plan.name}</option>)}
      </select>

      {mode === "demo" ? <input name="preferredTime" placeholder="Preferred demo time" style={inputStyle} /> : null}
      <textarea name="notes" placeholder="Tell us what AI workflows, tools, or risk concerns you want reviewed." rows={6} style={inputStyle} />

      <button className="btn btn-primary" type="submit" disabled={isSubmitting} style={{ width: "fit-content" }}>
        {isSubmitting ? "Submitting..." : mode === "sales" ? "Contact Sales" : "Request Demo"}
      </button>

      {result ? (
        <div className="card" style={{ padding: 20 }}>
          <strong>{result.ok ? "Saved" : "Needs setup"}</strong>
          <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{result.message ?? result.error}</p>
        </div>
      ) : null}
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  padding: 14,
  borderRadius: 12,
  border: "1px solid var(--border)",
  background: "rgba(255,255,255,0.04)",
  color: "var(--text)",
};
