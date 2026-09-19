# Kapitel 7 — AI Agents

## Arbeitsdefinition
Ein AI Agent ist ein zielorientiertes System, das seinen Ausführungsprozess dynamisch steuert und über Werkzeuge mit einer Umgebung interagiert.

```text
Goal → Reason/Plan → Tool Action → Observation → Verify/Replan → …
```

## Agentenkomponenten
```text
Agent
├── Model
├── Instructions / Policy
├── State
├── Memory
├── Tools
├── Control Loop
├── Environment
└── Safety / Permissions
```

## ReAct-Muster
Reasoning und Acting werden iterativ verbunden: Reason → Act → Observe → Reason.

## Referenzen
- Anthropic, Trustworthy Agents: https://www.anthropic.com/research/trustworthy-agents
- ReAct: https://arxiv.org/abs/2210.03629
