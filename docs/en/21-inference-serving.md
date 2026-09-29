# Inference serving and runtime economics

Treat model quality, waiting time, capacity, and cost as connected operational measures.

## Learning goal

Describe a request from arrival to response. A serving layer handles identity checks, queues, model calls, and result processing. It must also respond predictably under overload.

## Distinguishing measurements

| Metric | Meaning |
| --- | --- |
| Time to first token | Wait until the first output token |
| End-to-end latency | Time until the complete result |
| Throughput | Completed requests or tokens per unit of time |
| Utilization | Share of available resources in use |
| Cost per success | Total expenditure divided by successful tasks |

An earlier first token may improve perceived waiting time without reducing total duration. Measure both with realistic input lengths.

## Worked example

A service works well with eight concurrent requests, but its queue grows at 80. A bounded queue, explicit deadlines, and a clear overload response prevent indefinite waiting. Deferrable work may suit an asynchronous job with status polling. Document how users can distinguish queued, running, failed, and completed work.

## Limits and failure modes

Batching may increase throughput while delaying individual requests. Caching requires correct keys: identity, permissions, data version, and model configuration may all matter. A cache sharing answers across isolated customers can disclose information.

Quantization or smaller models can save resources but require evaluation on your own tasks. Retrying under overload can worsen overload. Bound retries and use backoff with jitter. Include retry cost when comparing configurations; a cheap call that frequently fails may produce expensive successful tasks.

## Exercise

What information is missing when a vendor reports only “tokens per second”?

## Answer and self-check

Waiting time, input length, concurrency, quality, and full completion time, among other factors. Throughput without load conditions is insufficient for planning user experience or cost.

## Sources and further reading

- [OpenTelemetry — Signals](https://opentelemetry.io/docs/concepts/signals/)
- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Keep learning

[Previous: 20](20-data-pipelines.md) · [Overview](README.md) · [Next: 22](22-human-ai-interaction.md) · [Deutsch](../de/21-inference-serving.md)
