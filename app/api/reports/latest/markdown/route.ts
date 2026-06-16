import { getLatestStoredReport, generateAndStoreReport } from "@/lib/report-storage";

export async function GET() {
  let report = await getLatestStoredReport();

  if (!report) {
    report = (await generateAndStoreReport()).report;
  }

  return new Response(report.markdownContent, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="aura-guard-ai-risk-audit-report.md"`,
    },
  });
}
