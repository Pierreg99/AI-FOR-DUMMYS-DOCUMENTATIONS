# 19 — Observability & Tracing

## Goal

Observability makes agentic systems measurable. Logs alone are insufficient for long-running agent loops.

## Three pillars

- **Logs:** structured events and failures.
- **Metrics:** counters, histograms, gauges, and SLO-oriented measurements.
- **Traces:** the temporal chain of model calls, tool calls, retries, and sub-agents.

## Agent trace

```text
Request
  ↓
Planner span
  ├── LLM span
  ├── Tool span
  │    └── external API span
  └── Verification span
  ↓
Final response
```

## Important fields

Each execution step should capture at least correlation ID, run ID, agent/tool identity, duration, status, and failure class.

## Privacy

Tracing must not expose secrets or unnecessary personal data. Redaction and access control belong in the observability architecture.

## Engineering rule

> If an agent failure cannot be reproduced or localized, the problem is often not only debugging — it is missing system observability.
