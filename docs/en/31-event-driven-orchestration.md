# 31 — Event-Driven Orchestration & Distributed Coordination

## Goal
Events entkoppeln Ingress, Orchestrator, Scheduler und Worker und schaffen einen nachvollziehbaren Ausführungsverlauf.

## Architecture
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

## Failure modes
Partition · Duplicate Delivery · Out-of-Order Event · Delayed Consumer · Partial Failure

## Metrics
Queue Depth · Consumer Lag · Event Latency · Retry Volume · Dead-Letter Rate

## Dokumentationsstandard

Terms, architecture, assumptions, metrics, and failure modes are kept explicit. Uncertain or hypothetical claims are labeled as such.
