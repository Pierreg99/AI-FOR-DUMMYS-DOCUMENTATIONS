# Kapitel 15 — Architektur-Patterns

## Tool-Calling Agent
```text
Goal → Model → Tool → Observation → Model
```

## Planner/Executor
```text
Planner → Task Graph → Executor → Verification
```

## Generator/Critic
```text
Generator → Artifact → Critic → Revision
```

## Router
```text
Request → Router → Specialist → Result
```

## Supervisor
```text
Supervisor → Agents → Aggregation
```

## Human-in-the-loop
```text
Agent → Risk Gate → Human Approval → Action
```

## Event-driven Agent
```text
Event → Queue → Agent → Action → Event
```

## Durable Agent
Persistent checkpoints erlauben Recovery nach Restart, Timeout oder Worker-Ausfall.
