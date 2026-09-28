# 36 — AI Product Engineering, Capacity Planning & Unit Economics

## Goal
Productionsreife KI verbindet Qualität, Reliability, Latenz, Kapazität, Kosten und menschlichen Aufwand.

## Kostenmodell
~~~text
Total Cost
= Model + Retrieval + Tools + Compute
+ Storage + Observability + Human Review
~~~

## Capacity
Request Rate · Concurrency · Tokens/Request · Model Latency · Batch Size · Cache Hit Rate · Peak Traffic

## Optimization levers
Routing · Caching · Batching · Context Reduction · Retrieval Optimization · Async Execution · Specialized Models · Scheduling

## Core metric
~~~text
Cost per successful task
= Total cost / Successful tasks
~~~

## Failure modes
Unbounded Retries · Context Bloat · Costly Routing · Noisy Telemetry · Underprovisioning · Idle Overprovisioning

## Engineering rule
Production bedeutet, dass Verhalten, Reliability, Capacity und Cost gemeinsam messbar und steuerbar sind.

## Dokumentationsstandard

Terms, architecture, assumptions, metrics, and failure modes are kept explicit. Uncertain or hypothetical claims are labeled as such.
