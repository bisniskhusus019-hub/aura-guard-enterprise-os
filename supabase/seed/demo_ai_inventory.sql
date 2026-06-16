insert into aura_guard.ai_tools (organization_id, tool_name, vendor_name, use_case, owner_department, data_touched, approved_status, risk_level)
select id, 'ChatGPT Team', 'OpenAI', 'Internal drafting and analysis', 'Operations', 'Internal notes, customer summaries', 'Approved', 'Moderate'
from aura_guard.organizations
where name = 'AURA-GUARD Demo Client'
and not exists (select 1 from aura_guard.ai_tools where tool_name = 'ChatGPT Team');

insert into aura_guard.ai_tools (organization_id, tool_name, vendor_name, use_case, owner_department, data_touched, approved_status, risk_level)
select id, 'Support Bot Agent', 'Internal Workflow', 'Customer support response drafting', 'Customer Success', 'Tickets, customer profiles, order history', 'Review Required', 'High'
from aura_guard.organizations
where name = 'AURA-GUARD Demo Client'
and not exists (select 1 from aura_guard.ai_tools where tool_name = 'Support Bot Agent');

insert into aura_guard.ai_tools (organization_id, tool_name, vendor_name, use_case, owner_department, data_touched, approved_status, risk_level)
select id, 'Browser AI Extensions', 'Multiple', 'Unmanaged employee usage', 'Unknown', 'Unknown', 'Shadow AI', 'Critical'
from aura_guard.organizations
where name = 'AURA-GUARD Demo Client'
and not exists (select 1 from aura_guard.ai_tools where tool_name = 'Browser AI Extensions');
