# 31 — Event-Driven Orchestration & Distributed Coordination

## Ziel
Events entkoppeln Ingress, Orchestrator, Scheduler und Worker und schaffen einen nachvollziehbaren Ausführungsverlauf.

## Architektur
~~~text
API → Orchestrator → Event Bus → Queue → Workers
             ↓            ↓
          State Store   Tool/Model APIs
             ↓
       Projections / Audit
~~~

## Delivery
At-most-once, at-least-once und effectively-once through idempotency sind unterschiedliche Semantiken. Exactly-once sollte nur bei tatsächlicher Garantie behauptet werden.

## Backpressure
Wenn Input-Rate dauerhaft über der Service-Rate liegt, wächst der Backlog. Admission Control, Queue Limits und Rate Limiting begrenzen diesen Zustand.

## Coordination
Leases · Heartbeats · Fencing Tokens · Deduplication · Correlation IDs · Dead-Letter Queues

## Failure Modes
Partition · Duplicate Delivery · Out-of-Order Event · Delayed Consumer · Partial Failure

## Metriken
Queue Depth · Consumer Lag · Event Latency · Retry Volume · Dead-Letter Rate

## Dokumentationsstandard

Begriffe, Architektur, Annahmen, Metriken und Failure Modes werden explizit getrennt. Unsichere oder hypothetische Aussagen werden als solche markiert.
