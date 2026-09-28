# 26 — Durable State Machines & Recovery

## State model
A long-running agent should model relevant transitions explicitly.

~~~text
CREATED → RUNNING → WAITING_TOOL → VERIFYING → SUCCEEDED
                     ↓                  ↓
                  FAILED ←──────────── RETRY
                     ↓
                 CANCELLED
~~~

## Invariants
- Every run has a unique ID.
- State transitions are validated.
- Resume uses persisted state.
- Retries must not create unintended duplicates.

## Checkpoints
Write checkpoints after meaningful semantic transitions. Large payloads belong in a separate store and are referenced by state.

## Recovery
Recovery distinguishes transient failure, permanent failure, human decision, and unknown state.