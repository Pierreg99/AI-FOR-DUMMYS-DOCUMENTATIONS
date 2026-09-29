# Observability and tracing

Make model calls, tools, and retries visible enough to localize failures.

## Learning goal

Distinguish logs, metrics, and traces. Logs describe events, metrics aggregate measurements, and traces connect steps within an execution. Together they show where a failure occurs as well as whether it occurs.

## What to record

| Field | Purpose |
| --- | --- |
| Run ID and trace ID | Connect related steps |
| Step and version | Identify the component used |
| Duration and status | Find bottlenecks and failures |
| Error class | Separate timeout, authorization, and content errors |
| Consumption | Attribute tokens, tool calls, and retries |

Connect model calls, retrieval, tool execution, and verification. Preserve the relationship between an original attempt and its retry. Giving every attempt a new ID must not lose the shared task context.

## Worked example

An answer takes twelve seconds. Its trace shows two seconds of model time, eight seconds waiting for search, and two seconds of processing. A faster model would improve only a small part. The investigation should focus on the queue, search service, and concurrent requests.

## Limits and failure modes

Full prompts in logs can spread confidential content. Prefer necessary metadata, redact sensitive fields, and limit access and retention. Error messages can contain secrets too. Verify redaction using synthetic sensitive values before collecting production data.

Sampling saves storage but can hide rare failures. Document which executions are absent. Unbounded user IDs as metric labels create high cardinality; such associations usually belong in controlled event records instead.

## Exercise

Average latency falls, yet many users report long waits. Which additional measurements help?

## Answer and self-check

Inspect percentiles, timeout rate, queue time, and task groups. A fast majority can conceal a few very slow requests in the average. Connect unusual measurements to concrete traces.

## Sources and further reading

- [OpenTelemetry — Signals](https://opentelemetry.io/docs/concepts/signals/)

## Keep learning

[Previous: 18](18-roadmap-llm-agent-agi.md) · [Overview](README.md) · [Next: 20](20-data-pipelines.md) · [Deutsch](../de/19-observability.md)
