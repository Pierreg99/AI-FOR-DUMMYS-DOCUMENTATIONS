# Agentic AI and workflows

Choose a fixed process, an agent, or a combination that fits the actual task.

## Learning goal

Explain which parts of a task should be deterministic and which should adapt. A workflow has a largely predefined control path. An agent can change its next steps based on observations. Both can use language models.

## Decision guide

| Situation | Useful starting point |
| --- | --- |
| Same steps and a clear schema | Deterministic workflow |
| Variable inputs with a few known routes | Classification and routing |
| Unpredictable intermediate steps | Bounded agent with tools |
| Sensitive execution after flexible research | Agent for drafting, checked workflow for execution |

Start with the simplest option that meets acceptance criteria. An additional model call takes time and creates another failure point. Its benefit should be measurable.

## Worked example

An invoice is read, fields are extracted, and required rules are checked. This suits a workflow. When information is missing, a model can draft a clarification request. Payment remains a separate, authorized step; it does not follow automatically from plausible extraction results.

## Limits and failure modes

Overly rigid workflows fail on unexpected cases. Overly free agents may make simple tasks unnecessarily long. Provide an exit path for both: return incomplete inputs, request human review, or stop in a controlled state. Document who owns unresolved cases so stopping does not silently lose work.

Compare both designs on the same tasks using correctness, duration, cost, and intervention count. Greater automation is useful only when outcomes improve for the intended use. A narrow workflow can outperform a flexible agent when requirements are stable and checks are explicit.

## Exercise

A system must produce the same three reports every night. Does it need an agent that plans freely?

## Answer and self-check

A scheduled workflow with three verifiable steps probably suffices. A model can write individual report sections. Dynamic planning becomes useful only when real requirements make the fixed sequence inadequate.

## Sources and further reading

- [Building effective agents — Anthropic (2024)](https://www.anthropic.com/engineering/building-effective-agents)

## Keep learning

[Previous: 07](07-ai-agents.md) · [Overview](README.md) · [Next: 09](09-memory-tools-context.md) · [Deutsch](../de/08-agentic-ai.md)
