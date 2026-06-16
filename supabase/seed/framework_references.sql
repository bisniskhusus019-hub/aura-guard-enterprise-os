insert into aura_guard.framework_references (framework_name, reference_code, reference_title, reference_summary, category)
values
  ('NIST AI RMF', 'GOVERN', 'Governance Function', 'Policies, accountability, roles, and governance structures for AI risk management.', 'governance'),
  ('NIST AI RMF', 'MAP', 'Map Function', 'Context, use case, stakeholders, impacts, and risk context mapping.', 'risk_mapping'),
  ('NIST AI RMF', 'MEASURE', 'Measure Function', 'Methods and metrics to analyze, assess, benchmark, and monitor AI risks.', 'risk_assessment'),
  ('NIST AI RMF', 'MANAGE', 'Manage Function', 'Risk treatment, prioritization, monitoring, and response actions.', 'remediation'),
  ('OWASP LLM Top 10', 'LLM01', 'Prompt Injection', 'Manipulation of LLM behavior through crafted or indirect instructions.', 'security'),
  ('OWASP LLM Top 10', 'LLM06', 'Sensitive Information Disclosure', 'Risk of exposing confidential information through LLM inputs or outputs.', 'data_security'),
  ('OWASP LLM Top 10', 'LLM08', 'Excessive Agency', 'Risk from LLM systems having too much autonomy or unchecked action permissions.', 'agent_control'),
  ('EU AI Act', 'RISK_BASED', 'Risk-Based Classification', 'AI systems should be governed according to their risk level and use context.', 'compliance'),
  ('EU AI Act', 'HUMAN_OVERSIGHT', 'Human Oversight', 'High-risk AI systems require appropriate human oversight measures.', 'governance'),
  ('EU AI Act', 'LOGGING_DOCUMENTATION', 'Logging and Documentation', 'High-risk AI systems require traceability and documentation evidence.', 'evidence')
on conflict (framework_name, reference_code) do nothing;
