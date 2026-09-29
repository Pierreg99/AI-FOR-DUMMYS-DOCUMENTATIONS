# Event-driven orchestration

Connect loosely coupled steps through identifiable events and controlled delivery.

## Learning goal

Distinguish an event from a command. An event describes something that happened, such as “Document updated.” A command requests an action, such as “Rebuild the index.” The distinction helps clarify ownership and retries.

## A useful event contract

| Field | Purpose |
| --- | --- |
| ID | Associate delivery and deduplication |
| Type and schema version | Define meaning and format |
| Source and time | Preserve provenance and temporal context |
| Resource identifier | Identify the affected object |
| Correlation | Connect events from the same task |

Standards such as CloudEvents normalize metadata. They do not automatically define your application's business meaning, ordering, or delivery guarantees.

## Worked example

A document update emits an event. An indexing worker processes it and writes the document version to search. If the message arrives again, the worker recognizes the version already processed. If an older version arrives afterward, it must not overwrite the newer state.

## Limits and failure modes

At-least-once delivery can produce duplicates. Ordering is often guaranteed only within particular keys or partitions. State the scope explicitly. After bounded attempts, malformed events need a separate queue and accountable handling. A dead-letter queue is not a resolution process by itself.

Backpressure limits new work when consumers cannot keep up. Measure oldest-message age, retry rate, processing time, and failure backlog. An empty error list is little comfort if messages wait indefinitely. Test duplicate, delayed, and reordered messages.

## Exercise

An event for version 4 arrives after version 5. What should the indexing worker do?

## Answer and self-check

Check version order and skip or explicitly handle the stale write. Delivery order alone is not a reliable authority for current business state.

## Sources and further reading

- [CloudEvents — Specification and project](https://cloudevents.io/)
- [Temporal — Workflow execution](https://docs.temporal.io/workflow-execution)

## Keep learning

[Previous: 30](30-tool-security.md) · [Overview](README.md) · [Next: 32](32-retrieval-optimization.md) · [Deutsch](../de/31-event-driven-orchestration.md)
