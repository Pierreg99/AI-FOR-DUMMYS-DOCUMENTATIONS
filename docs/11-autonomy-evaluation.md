# Kapitel 11 — Autonomy, Evaluation & Reliability

## Agenten brauchen mehr als klassische LLM-Benchmarks
Wichtige Größen sind Task Success, Tool Correctness, Recovery, Long-Horizon Reliability, Kosten, Latenz, Human Intervention und Safety.

## Grundformeln
Erfolgsrate:
\[
SR=\frac{successful\ runs}{total\ runs}
\]

Bei N unabhängigen Schritten mit gleicher Erfolgswahrscheinlichkeit p:
\[
P(all)=p^N
\]

Das illustriert, warum lange Trajektorien fragil werden können.

## Time Horizon
METR nutzt Task-Completion Time Horizons als Aufgabenschwierigkeitsskala auf Basis menschlicher Bearbeitungszeit und definierter Erfolgswahrscheinlichkeit. Das ist nicht gleichbedeutend mit „Autonomie für X Stunden“.

## Referenzen
- METR: https://metr.org/time-horizons/
- AgentBench: https://arxiv.org/abs/2308.03688
