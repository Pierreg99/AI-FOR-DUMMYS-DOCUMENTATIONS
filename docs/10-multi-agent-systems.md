# Kapitel 10 — Multi-Agent Systems

## Grundarchitektur
```text
                 Coordinator
             ┌──────┼──────┐
             ↓      ↓      ↓
         Research  Code     QA
             └──────┼──────┘
                    ↓
                 Reviewer
```

## Kommunikationsmuster
1. Sequential delegation: A → B → C
2. Fan-out/fan-in: A → {B,C,D} → A
3. Blackboard: gemeinsamer Zustand
4. Negotiation: Vorschläge und Entscheidungen zwischen Agenten

## Risiken
Koordinationskosten, widersprüchliche Zustände, Race Conditions, Fehlerpropagation und höhere Latenz.
