# AURA-GUARD Risk Assessment Score Guard

## Purpose
The database now protects risk assessment consistency by automatically filling `total_score` and `risk_band` when a new assessment is inserted or updated.

## Why This Exists
The intake API stores factor-level scores. Dashboard and report generation can calculate totals from those factors, but the database should also keep durable summary fields for history, exports, and future analytics.

## Guard Behavior
The database function clamps each factor score to its maximum allowed value, then computes a total score.

Risk band logic:

- 0-20: Low Risk
- 21-40: Moderate Risk
- 41-60: Elevated Risk
- 61-80: High Risk
- 81-100: Critical Risk

## Benefit
Even if another API route later inserts a risk assessment without summary fields, the database keeps the record usable for dashboards, reports, and analytics.
