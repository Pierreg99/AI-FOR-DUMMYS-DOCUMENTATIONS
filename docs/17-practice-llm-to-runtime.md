# Kapitel 17 — Praxis: Vom LLM zur Agent Runtime

## Stufe 1 — Model
```text
request → model → response
```

## Stufe 2 — Context
```text
request + retrieved context → model
```

## Stufe 3 — Tools
```text
model ↔ tools
```

## Stufe 4 — Control Loop
```text
goal → plan → act → observe → verify
```

## Stufe 5 — Durable State
```text
agent state → persistent store
```

## Stufe 6 — Production Agent Fabric
```text
Gateway → Model Router → Agent Runtime
                         ├── State
                         ├── Memory
                         ├── Scheduler
                         ├── Queue
                         ├── Tools
                         ├── Sandbox
                         ├── Policy
                         ├── Audit
                         └── Tracing
```

## Production Controls
Idempotency, retries, timeouts, leases, concurrency control, secret isolation, audit trails, tracing und Kill Switches.
