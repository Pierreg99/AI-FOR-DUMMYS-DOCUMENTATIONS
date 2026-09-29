# Durable state machines and recovery

Persist execution state so interruptions can be handled deliberately.

## Learning goal

Describe allowed state transitions and uncertain external effects. A durable state machine makes progress independent of a single process's lifetime.

## A small state model

| State | Possible next state |
| --- | --- |
| Ready | Running, cancelled |
| Running | Waiting, succeeded, failed, uncertain |
| Waiting | Running, cancelled |
| Uncertain | Reconciled, human review |
| Succeeded | Terminal state |

A checkpoint contains a run ID, state version, confirmed results, and pending actions. It must not store an unverified assumption as a successful step.

## Worked example

A ticket service accepts a request, but its response is lost. The agent does not know whether the ticket exists. Instead of sending a new request with a new identifier, it looks up the operation using the original identifier. Only after reconciliation is the state marked successful or safe to retry.

## Limits and failure modes

A local database commit and an external API action are not automatically atomic. Idempotency, an outbox pattern, and reconciliation can address this gap, but require suitable contracts. “Exactly once” is not a meaningful guarantee without a stated scope.

Bound retries and add delays. Persistent business failures, such as missing permission, should not be retried indefinitely. A compensating action is not always a complete reversal: a sent message cannot be made unread. Record what compensation can and cannot restore before relying on it.

## Exercise

What should happen if a process crashes immediately after an external write?

## Answer and self-check

Resumption checks the recorded operation and reconciles its effect. It executes again only under the agreed idempotency conditions and records remaining uncertainty. A restart is not permission to replay all actions blindly.

## Sources and further reading

- [Temporal — Workflow execution](https://docs.temporal.io/workflow-execution)

## Keep learning

[Previous: 25](25-distributed-agent-runtime.md) · [Overview](README.md) · [Next: 27](27-tool-protocols-mcp.md) · [Deutsch](../de/26-durable-state-machines.md)
