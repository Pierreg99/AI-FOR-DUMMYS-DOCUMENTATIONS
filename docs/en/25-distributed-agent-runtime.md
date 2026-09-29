# Distributed agent runtimes

Coordinate workers through durable state, explicit ownership, and bounded load.

## Learning goal

Explain why process memory is not an adequate authority for distributed execution state. Workers can fail or observe the same job simultaneously. The runtime must handle those cases explicitly.

## Responsibilities

| Component | Responsibility |
| --- | --- |
| Queue | Make pending work available |
| Scheduler | Assign work and resources |
| Lease | Grant time-limited processing ownership |
| State store | Persist progress and versions |
| Worker | Execute a bounded unit of work |

A lease can expire while a slow worker is still running. The old and new workers must not both write without control. Version checks or fencing tokens help reject stale writes.

## Worked example

Worker A claims a document import and loses connectivity. Worker B takes over after the lease expires. Both use the same import identifier. Storage accepts current ownership and recognizes document versions already processed, preventing silent duplicate effects. The external destination must participate in the protection; a scheduler-only check cannot stop an already running write.

## Limits and failure modes

Heartbeats show reachability but do not prove progress. Large queues increase latency; bound concurrent jobs and respond to overload. A restart must not forget every pending task.

Measure queue age, lease losses, duplicate deliveries, and recovery time. Give customer groups separate budgets so one large job cannot displace everyone else. Test a worker that pauses and later resumes, not just one that permanently crashes.

## Exercise

Why does an expired lease alone not prevent a late write?

## Answer and self-check

The old worker may still run. The destination must recognize its stale ownership and reject the write. A timer at the scheduler does not prevent a remote side effect.

## Sources and further reading

- [Temporal — Workflow execution](https://docs.temporal.io/workflow-execution)

## Keep learning

[Previous: 24](24-agent-testing.md) · [Overview](README.md) · [Next: 26](26-durable-state-machines.md) · [Deutsch](../de/25-distributed-agent-runtime.md)
