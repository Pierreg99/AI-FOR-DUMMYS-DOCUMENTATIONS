# Architecture patterns

Use recurring design patterns as testable decisions, rather than a collection of ever more components.

## Learning goal

Connect an architecture pattern to a concrete requirement. Patterns describe responsibilities and control flow. They can be combined, but every additional stage should have an identifiable purpose.

## Comparing patterns

| Pattern | Purpose | Verification question |
| --- | --- | --- |
| Router | Send a task to appropriate processing | Does it recognize unknown cases? |
| Planner/executor | Separate planning from execution | Is every planned step executable? |
| Generator/critic | Improve a draft against criteria | Does criticism identify real defects? |
| Human approval | Control consequential actions | Is the exact change visible? |
| Durable execution | Resume after interruption | Could a side effect run twice? |

A critic model is not an independent source of truth. Deterministic checks are often more informative for computable criteria: a test can establish whether a referenced file exists.

## Worked example

A support system routes requests to billing, delivery, or technical help. Unknown categories enter a general queue. Tools remain narrowly scoped inside each route. The billing route therefore does not automatically gain write access to the delivery database. Routing and authorization remain separate responsibilities.

## Limits and failure modes

Routers can select the wrong specialist. Planners can propose impossible steps. Critics can confuse stylistic preferences with factual defects. Define inputs, outputs, stopping conditions, and failure states for each pattern.

Evaluate a new stage by comparing the system with and without it. Measure additional latency and cost as well as answer quality. Without a clear benefit, a pattern primarily increases maintenance work and creates another place where information can be lost.

## Exercise

Which pattern suits a task that creates a report and checks it against five fixed rules?

## Answer and self-check

A drafting stage followed by verification. Use deterministic validators for machine-decidable rules. A model may contribute qualitative review but should not overrule explicit rule violations.

## Sources and further reading

- [Building effective agents — Anthropic (2024)](https://www.anthropic.com/engineering/building-effective-agents)

## Keep learning

[Previous: 14](14-security-safety.md) · [Overview](README.md) · [Next: 16](16-formulas.md) · [Deutsch](../de/15-architecture-patterns.md)
