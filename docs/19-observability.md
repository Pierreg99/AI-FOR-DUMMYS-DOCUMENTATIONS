# 19 — Observability & Tracing

## Ziel

Observability macht agentische Systeme messbar. Logs allein reichen bei langen Agent-Loops nicht aus.

## Drei Säulen

- **Logs:** strukturierte Ereignisse und Fehler.
- **Metrics:** Zähler, Histogramme, Gauges und SLO-relevante Kennzahlen.
- **Traces:** zeitliche Kette von Modellaufrufen, Tool Calls, Retries und Sub-Agents.

## Agent Trace

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

## Wichtige Felder

Jeder Ausführungsschritt sollte mindestens Correlation ID, Run ID, Agent/Tool, Dauer, Status und Fehlerklasse erfassen.

## Datenschutz

Tracing darf keine Secrets oder unnötigen personenbezogenen Inhalte protokollieren. Redaction und Zugriffskontrolle gehören in die Observability-Architektur.

## Engineering-Regel

> Wenn ein Agentenfehler nicht reproduzierbar oder lokalisierbar ist, fehlt meist nicht nur Debugging — es fehlt Systemobservability.
