# 21 — Inference Serving & Runtime Economics

## Ziel

Ein Modell wird erst durch eine Serving-Schicht zu einem nutzbaren Produktionsbaustein.

## Runtime

```text
Client
 ↓
API Gateway
 ↓
Auth / Policy
 ↓
Scheduler / Queue
 ↓
Inference Workers
 ↓
Model
 ↓
Post-processing
```

## Zentrale Größen

- Throughput
- Time to First Token
- Inter-token latency
- Batch size
- GPU/CPU utilization
- Memory footprint
- Cost per successful task

## Engineering Trade-offs

Batching kann Throughput erhöhen, aber Latenz verändern. Caching kann Kosten reduzieren, benötigt aber korrekte Invalidierung. Quantisierung kann Ressourcen sparen, muss aber gegen Qualitätsanforderungen evaluiert werden.

## Reliability

Serving braucht Timeouts, backpressure, health checks, graceful degradation und kontrollierte Rollouts.
