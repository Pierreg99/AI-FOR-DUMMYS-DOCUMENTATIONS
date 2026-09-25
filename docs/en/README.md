# AI for Dummies — English Documentation

**Version:** V1.0  
**Purpose:** Technical introduction and reference for modern AI, from machine learning through agentic systems, AGI, and ASI.

## 1. Learning Model

~~~text
AI
├── Machine Learning
│   └── Deep Learning
│       └── Transformers
│           ├── LLMs
│           └── Multimodal Foundation Models
└── Agentic Systems
    ├── Workflows
    ├── Agents
    └── Multi-Agent Systems

AGI / ASI
= capability and goal concepts, not a single model architecture
~~~

**Mnemonic:** LLM = model · Agent = acting system · Agentic AI = system paradigm · AGI = general capability · ASI = hypothetical superintelligence concept.

## 2. Chapter Overview

| No. | Topic | Core question |
|---|---|---|
| 01 | AI Fundamentals | What is AI and how can it be described systematically? |
| 02 | Machine Learning | How do models learn from data? |
| 03 | Transformers & Foundation Models | Why are Transformers a core building block of modern foundation models? |
| 04 | LLMs | How do language models process and generate tokens? |
| 05 | Generative AI | How are text, images, audio, video, and code generated? |
| 06 | RAG & Knowledge Systems | How can external knowledge be incorporated at runtime? |
| 07 | AI Agents | How does a model become an acting software system? |
| 08 | Agentic AI & Workflows | When should a workflow be preferred over an autonomous agent? |
| 09 | Memory, Tools & Context Engineering | How are context, tools, and persistent information managed? |
| 10 | Multi-Agent Systems | How can multiple specialized agents coordinate? |
| 11 | Autonomy, Evaluation & Reliability | How are success, failure recovery, and long-horizon reliability measured? |
| 12 | AGI | What does general intelligence mean as a capability concept? |
| 13 | ASI & Future Concepts | Which concepts are discussed for hypothetical superintelligence? |
| 14 | Security & Safety | How can prompt injection, data leakage, and tool misuse be constrained? |
| 15 | Architecture Patterns | Which reusable system architectures are available? |
| 16 | Formulas & Quantitative Models | Which simple models help reason about cost, latency, and reliability? |
| 17 | LLM → Agent Runtime | How does a model become a production-oriented runtime stack? |
| 18 | LLM → Agent → AGI Roadmap | Which technical stages can be distinguished? |

## 3. Core Concepts

### Model, Agent, and Workflow

A **model** maps inputs to outputs.  
An **agent** combines a model with state, goals, tools, observations, and control logic.  
A **workflow** makes more of the execution path explicit and deterministic.

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

A typical Retrieval-Augmented Generation pipeline:

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

RAG is not a replacement for model training. It is a runtime strategy for supplying relevant external information to generation.

### Memory

- **Working memory:** short-lived state for the active task.
- **Episodic memory:** records of previous events or executions.
- **Semantic memory:** abstracted facts and knowledge.
- **Long-term storage:** persistent storage outside the immediate context window.

**Important:** a context window and persistent memory are different mechanisms.

## 4. Agent and Multi-Agent Patterns

### Single-Agent Patterns

- Tool calling
- Planner / Executor
- Generator / Critic
- Router
- Supervisor
- Human-in-the-loop
- Event-driven agent
- Durable agent

### Multi-Agent Patterns

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

Production agent systems require more than model quality:

- idempotent tools and jobs
- bounded retries and timeouts
- concurrency control and leases
- explicit authorization boundaries
- secret isolation
- audit logs
- tracing and metrics
- recovery and resume mechanisms
- human approval gates for sensitive actions
- kill switches and rate limits

A powerful model should not automatically receive unrestricted system privileges.

## 6. Evaluation

Relevant metrics include:

- Task Success Rate
- Tool Correctness
- Recovery Rate
- Long-horizon Reliability
- Latency
- Token and infrastructure cost
- Human Intervention Rate
- Safety Violations

For a simple chain of independent steps with per-step success probability p:

P(all steps succeed) = p^N

This illustrates why additional sequential steps can materially reduce reliability.

Other basic engineering models:

SuccessRate = successful tasks / total tasks

TotalLatency = sum of step latencies

ExpectedUtility = Value − Cost − Risk

These are simplified engineering models, not complete scientific evaluation frameworks.

## 7. Security & Safety

Important threat classes:

- Prompt Injection
- Tool Injection
- Data Exfiltration
- Privilege Escalation
- Secret Leakage
- Uncontrolled Side Effects
- Untrusted External Content
- Jailbreak Attempts

Core controls:

~~~text
Least Privilege
+ Sandboxing
+ Input / Output Validation
+ Approval Gates
+ Secret Isolation
+ Auditability
+ Monitoring
~~~

## 8. Correctly Framing AGI and ASI

**AGI** is a capability concept: a system would demonstrate broad competence across many different kinds of tasks. It is not automatically a particular model architecture.

**ASI** refers to hypothetical systems whose general cognitive capabilities substantially exceed human performance. Technical claims about such systems include open research questions and future scenarios.

The documentation therefore separates:

1. established technical foundations,
2. observed engineering practice,
3. open research questions,
4. speculative future concepts.

## 9. Technical Development Stages

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

These stages are an engineering framework for organizing system development, not a claim that AGI follows a guaranteed or linear path.

## 10. Repository Navigation

Primary chapters live under docs/.

- Glossary: ../glossary.md
- Diagrams: ../diagrams.md
- Formulas: ../16-formulas.md
- Sources: ../sources.md
- Roadmap: ../../ROADMAP.md
- Deutsche Dokumentation: ../de/README.md

## 11. Documentation Standard

Every new chapter should:

1. define its terms,
2. expose the architecture or execution flow,
3. state assumptions,
4. separate facts from hypotheses,
5. name metrics and failure modes,
6. document technical limits,
7. provide sources or references.


## 12. V1.1 Expansion — Production Systems

| No. | Topic | Focus |
|---|---|---|
| 19 | Observability & Tracing | Logs, metrics, traces, and privacy |
| 20 | Data Pipelines & Knowledge Quality | Data quality, provenance, and drift |
| 21 | Inference Serving & Runtime Economics | Serving, latency, throughput, and cost |
| 22 | Human-AI Interaction | Approval gates and control levels |
| 23 | Governance, Risk & Lifecycle | Risk, change management, and incidents |
| 24 | Agent Testing & Verification | Unit, contract, scenario, and reliability tests |

The six expansion chapters move V1.0 from conceptual foundations toward production-oriented system engineering.
