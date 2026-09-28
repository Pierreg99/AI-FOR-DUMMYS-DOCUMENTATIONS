25 — Distributed Agent Runtime

## Goal
A distributed agent needs explicit runtime boundaries for scheduling, state transitions, and execution.

## Reference architecture
```text
Ingress → Scheduler → Lease → Worker
                    ↓
                 Durable State
                    ↓
              Tool / Model Calls
                    ↓
             Event / Audit Stream
```

## Core components
- durable run state
- distributed leases
- heartbeats and expiration
- queueing and backpressure
- idempotent work units
- worker health and draining

## Failure modes
Worker crashes, duplicate execution, lost events, stale leases, and partial external side effects must be handled explicitly.

## Engineering rule
Distributed autonomy needs a persistent state machine; process memory is not a sufficient source of truth.