# Architekturdiagramme

## Gesamtmodell
```text
AI
├── Models
│   ├── ML / Deep Learning
│   ├── Transformers
│   ├── LLMs
│   └── Multimodal Foundation Models
└── Systems
    ├── Applications
    └── Agentic Systems
        ├── Workflows
        ├── Agents
        └── Multi-Agent Systems

AGI / ASI = capability concepts
```

## Agent Fabric
```text
Model Router → Agent Runtime
                  ├── State
                  ├── Memory
                  ├── Tools
                  ├── Scheduler
                  ├── Policy
                  ├── Audit
                  └── Tracing
                         ↓
                    Environment
```

## Multi-Agent Fan-out/Fan-in
```text
Task → Coordinator → {A,B,C} → Aggregator → Result
```

## Durable Execution
```text
Event → Queue → Worker → Checkpoint → State DB
                          ↑             │
                          └── Recovery ┘
```
