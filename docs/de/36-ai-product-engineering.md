# 36 — AI Product Engineering, Capacity Planning & Unit Economics

## Ziel
Produktionsreife KI verbindet Qualität, Reliability, Latenz, Kapazität, Kosten und menschlichen Aufwand.

## Kostenmodell
~~~text
Total Cost
= Model + Retrieval + Tools + Compute
+ Storage + Observability + Human Review
~~~

## Capacity
Request Rate · Concurrency · Tokens/Request · Model Latency · Batch Size · Cache Hit Rate · Peak Traffic

## Optimierungshebel
Routing · Caching · Batching · Context Reduction · Retrieval Optimization · Async Execution · Specialized Models · Scheduling

## Kernmetrik
~~~text
Cost per successful task
= Total cost / Successful tasks
~~~

## Failure Modes
Unbounded Retries · Context Bloat · Costly Routing · Noisy Telemetry · Underprovisioning · Idle Overprovisioning

## Engineering-Regel
Produktion bedeutet, dass Verhalten, Reliability, Capacity und Cost gemeinsam messbar und steuerbar sind.

## Dokumentationsstandard

Begriffe, Architektur, Annahmen, Metriken und Failure Modes werden explizit getrennt. Unsichere oder hypothetische Aussagen werden als solche markiert.
