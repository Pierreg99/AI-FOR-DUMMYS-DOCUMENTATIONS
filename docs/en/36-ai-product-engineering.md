# AI product engineering and unit economics

Connect user outcomes, quality, capacity, and cost into a testable product decision.

## Learning goal

Evaluate an AI feature through the user problem it solves. An impressive demo does not establish sustainable operation. What matters is repeatedly useful outcomes at an acceptable total cost.

## A more complete cost model

| Cost category | Examples |
| --- | --- |
| Model | Input, output, and retries |
| Data and tools | Search, APIs, and updates |
| Infrastructure | Compute, storage, and networking |
| Operations | Monitoring, support, and incidents |
| Human effort | Review, correction, and exceptions |

Measure cost per successfully completed task. Define success with users, such as a correctly resolved request rather than merely a generated answer.

## Worked numerical example

100 tasks incur 20 euros of system cost and 30 euros of review effort. 80 tasks pass acceptance. Total cost per success is `50 / 80 = 0.625 euros`. A model with lower token prices can still be more expensive if more answers require correction.

## Limits and failure modes

Average traffic is insufficient for capacity planning. Include spikes, long inputs, and failures of external services. Caching, routing, and smaller models are possible optimizations whose quality must be checked separately.

A local pilot needs different operational decisions from a public service. Define owners, quality goals, spending budgets, fallback options, and shutdown criteria. Keep the manual process as a baseline rather than comparing only two AI variants. Track adoption and completed user goals so a cheaper feature nobody can use is not counted as a success.

## Exercise

A new version halves model costs but doubles human review effort. Is it more economical?

## Answer and self-check

Only total cost and success rate can answer that. Add model, operational, and human effort and compare the same tasks. Also consider completion time and the consequences of failures.

## Sources and further reading

- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)
- [OpenTelemetry — Signals](https://opentelemetry.io/docs/concepts/signals/)

## Keep learning

[Previous: 35](35-privacy-engineering.md) · [Overview](README.md) · [Deutsch](../de/36-ai-product-engineering.md)
