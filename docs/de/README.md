# AI for Dummies — Deutsche Dokumentation

**Version:** V1.0  
**Zweck:** Technische Einführung und Referenz zu moderner KI von Machine Learning bis zu agentischen Systemen, AGI und ASI.

## 1. Lernmodell

~~~text
KI / AI
├── Machine Learning
│   └── Deep Learning
│       └── Transformer
│           ├── LLMs
│           └── Multimodale Foundation Models
└── Agentische Systeme
    ├── Workflows
    ├── Agents
    └── Multi-Agent Systems

AGI / ASI
= Fähigkeits- und Zielkonzepte, keine einzelne Modellarchitektur
~~~

**Merksatz:** LLM = Modell · Agent = handelndes System · Agentic AI = Systemparadigma · AGI = allgemeine Fähigkeit · ASI = hypothetisches Superintelligenz-Konzept.

## 2. Kapitelübersicht

| Nr. | Thema | Kernfrage |
|---|---|---|
| 01 | AI Fundamentals | Was ist KI und wie wird sie systematisch beschrieben? |
| 02 | Machine Learning | Wie lernen Modelle aus Daten? |
| 03 | Transformers & Foundation Models | Warum sind Transformer ein zentraler Baustein moderner Foundation Models? |
| 04 | LLMs | Wie verarbeiten und erzeugen Sprachmodelle Tokens? |
| 05 | Generative AI | Wie entstehen Text, Bild, Audio, Video und Code? |
| 06 | RAG & Knowledge Systems | Wie werden externe Wissensquellen in Generierung einbezogen? |
| 07 | AI Agents | Wie wird ein Modell zu einem handelnden Softwaresystem? |
| 08 | Agentic AI & Workflows | Wann ist ein Workflow geeigneter als ein autonomer Agent? |
| 09 | Memory, Tools & Context Engineering | Wie werden Kontext, Werkzeuge und persistente Informationen verwaltet? |
| 10 | Multi-Agent Systems | Wie arbeiten mehrere spezialisierte Agenten zusammen? |
| 11 | Autonomy, Evaluation & Reliability | Wie werden Erfolg, Fehlerverhalten und Langzeitzuverlässigkeit gemessen? |
| 12 | AGI | Was bedeutet allgemeine Intelligenz als Fähigkeitskonzept? |
| 13 | ASI & Future Concepts | Welche Konzepte werden für hypothetische Superintelligenz diskutiert? |
| 14 | Security & Safety | Wie werden Prompt Injection, Datenabfluss und Tool-Missbrauch begrenzt? |
| 15 | Architecture Patterns | Welche wiederverwendbaren Systemarchitekturen existieren? |
| 16 | Formulas & Quantitative Models | Welche einfachen Modelle helfen bei Kosten, Latenz und Reliability? |
| 17 | LLM → Agent Runtime | Wie wird aus einem Modell ein produktionsfähiger Runtime-Stack? |
| 18 | LLM → Agent → AGI Roadmap | Welche technischen Stufen lassen sich voneinander unterscheiden? |

## 3. Zentrale Begriffe

### Modell, Agent und Workflow

Ein **Modell** berechnet Ausgaben aus Eingaben.  
Ein **Agent** kombiniert ein Modell mit Zustandsverwaltung, Zielorientierung, Werkzeugen, Beobachtungen und Kontrolllogik.  
Ein **Workflow** legt die Schritte stärker deterministisch fest.

~~~text
Goal
  ↓
Plan / Decide
  ↓
Tool Action
  ↓
Observation
  ↓
Verify
  ├── success → finish
  └── failure → replan / recover
~~~

### RAG

Eine typische Retrieval-Augmented-Generation-Pipeline:

~~~text
Documents
  → ingestion
  → chunking
  → embeddings/index
  → retrieval
  → reranking
  → context assembly
  → generation
  → citation / validation
~~~

RAG ersetzt kein Modelltraining. Es ist eine Laufzeitstrategie, um relevante externe Informationen in einen Generationskontext einzubringen.

### Memory

- **Working memory:** kurzfristiger Kontext der laufenden Aufgabe.
- **Episodic memory:** vergangene Ereignisse oder Ausführungen.
- **Semantic memory:** abstrahiertes Wissen und Fakten.
- **Long-term storage:** persistenter Speicher außerhalb des reinen Kontextfensters.

**Wichtig:** Kontextfenster und persistentes Gedächtnis sind unterschiedliche Mechanismen.

## 4. Agent- und Multi-Agent-Patterns

### Single-Agent-Patterns

- Tool calling
- Planner / Executor
- Generator / Critic
- Router
- Supervisor
- Human-in-the-loop
- Event-driven agent
- Durable agent

### Multi-Agent-Patterns

**Sequential delegation**
~~~text
Agent A → Agent B → Agent C
~~~

**Fan-out / fan-in**
~~~text
            → Agent B →
Agent A →                → Aggregator
            → Agent C →
~~~

**Blackboard**
~~~text
Agent A ─┐
Agent B ─┼→ Shared State / Blackboard
Agent C ─┘
~~~

**Negotiation**
~~~text
Planner ↔ Specialist ↔ Critic ↔ Coordinator
~~~

## 5. Production Engineering

Produktive Agentensysteme benötigen nicht nur Modellqualität, sondern auch:

- idempotente Tools und Jobs
- Timeouts und begrenzte Retries
- Concurrency Control und Leases
- klare Berechtigungsgrenzen
- Secret Isolation
- Audit-Logs
- Tracing und Metriken
- Recovery- und Resume-Mechanismen
- Human Approval Gates für sensible Aktionen
- Kill Switches und Rate Limits

Ein Agent darf nicht mit unbegrenzten Rechten ausgestattet werden, nur weil sein zugrunde liegendes Modell leistungsfähig ist.

## 6. Evaluation

Relevante Metriken sind unter anderem:

- Task Success Rate
- Tool Correctness
- Recovery Rate
- Long-horizon Reliability
- Latenz
- Token- und Infrastrukturkosten
- Human Intervention Rate
- Safety Violations

Für eine Kette unabhängiger Schritte mit Erfolgswahrscheinlichkeit p je Schritt ist ein einfaches Modell:

P(alle Schritte erfolgreich) = p^N

Das zeigt, warum zusätzliche Schritte die Zuverlässigkeit stark beeinflussen können.

Weitere Grundmodelle:

SuccessRate = successful tasks / total tasks

TotalLatency = Summe aller Einzellatenzen

ExpectedUtility = Value − Cost − Risk

Diese Modelle sind Vereinfachungen für Engineering-Entscheidungen, keine vollständigen wissenschaftlichen Evaluationsmodelle.

## 7. Security & Safety

Wichtige Bedrohungen:

- Prompt Injection
- Tool Injection
- Datenexfiltration
- Privilege Escalation
- Secret Leakage
- Unkontrollierte Seiteneffekte
- Unsichere externe Inhalte
- Jailbreak-Versuche

Grundprinzipien:

~~~text
Least Privilege
+ Sandboxing
+ Input / Output Validation
+ Approval Gates
+ Secret Isolation
+ Auditability
+ Monitoring
~~~

## 8. AGI und ASI korrekt einordnen

**AGI** ist ein Fähigkeitskonzept: Ein System wäre über viele unterschiedliche Aufgaben hinweg allgemein leistungsfähig. Es ist nicht automatisch eine bestimmte Modellarchitektur.

**ASI** bezeichnet hypothetische Systeme, deren allgemeine kognitive Fähigkeiten menschliche Leistungsgrenzen deutlich übertreffen würden. Technische Details dazu gehören teilweise in den Bereich offener Forschung und Zukunftsszenarien.

Die Dokumentation trennt deshalb ausdrücklich:

1. etablierte technische Grundlagen,
2. beobachtete Engineering-Praktiken,
3. offene Forschungsfragen,
4. spekulative Zukunftskonzepte.

## 9. Technische Entwicklungsstufen

~~~text
Foundation Model
      ↓
Tool-Augmented Model
      ↓
Single Agent
      ↓
Reliable Agent
      ↓
Long-Horizon Agent
      ↓
Multi-Agent Fabric
      ↓
Generality Research
      ↓
AGI Evaluation
~~~

Die Stufen sind ein Engineering-Modell zur Strukturierung von Systementwicklung, keine Behauptung über einen sicheren oder linearen Pfad zu AGI.

## 10. Repository-Navigation

Primäre Kapitel liegen unter docs/.

- Glossar: ../glossary.md
- Diagramme: ../diagrams.md
- Formeln: ../16-formulas.md
- Quellen: ../sources.md
- Roadmap: ../../ROADMAP.md
- English documentation: ../en/README.md

## 11. Dokumentationsstandard

Alle neuen Kapitel sollten:

1. Begriffe definieren,
2. Architektur oder Ablauf sichtbar machen,
3. Annahmen markieren,
4. Fakten von Hypothesen trennen,
5. Metriken und Failure Modes benennen,
6. technische Grenzen dokumentieren,
7. Quellen oder Referenzen angeben.


## 12. Erweiterung V1.1 — Production Systems

| Nr. | Thema | Fokus |
|---|---|---|
| 19 | Observability & Tracing | Logs, Metrics, Traces und Datenschutz |
| 20 | Data Pipelines & Knowledge Quality | Datenqualität, Provenienz und Drift |
| 21 | Inference Serving & Runtime Economics | Serving, Latenz, Throughput und Kosten |
| 22 | Human-AI Interaction | Approval Gates und Kontrollstufen |
| 23 | Governance, Risk & Lifecycle | Risiko, Change Management und Incidents |
| 24 | Agent Testing & Verification | Unit-, Contract-, Scenario- und Reliability-Tests |

Die sechs Erweiterungskapitel führen die V1.0 von der konzeptionellen Grundlage in Richtung produktionsnaher Systementwicklung.
