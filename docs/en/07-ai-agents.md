# AI agents

Understand how a model works with tools, state, and a bounded control loop.

## Learning goal

Distinguish an agent from a single text generation. An agent chooses next steps using a goal and observed results. The application executes permitted actions while enforcing budgets, permissions, and stopping conditions.

## Building blocks

| Component | Responsibility |
| --- | --- |
| Model | Propose the next action or response |
| Runtime | Validate the proposal and execute the action |
| State | Record completed steps and remaining work |
| Tools | Offer narrowly scoped access to data or functions |
| Verification | Check whether the goal was actually achieved |

A tool call is initially a structured proposal. It is neither authorization nor evidence of successful execution. The runtime must incorporate the observed result into state.

## Worked example

A documentation agent is asked to find broken links. It reads files, checks local destinations, and prepares proposed changes. It does not need permission to delete the repository. A useful stopping condition is that all discovered links have been checked and unresolved cases documented, not merely that the model writes “done.”

## Limits and failure modes

Repeated actions, invented tool names, and endless loops are common problems. Limit step count, total time, and cost. Reject unknown tools. Failed writes must not be retried blindly because the first action may already have had a partial effect. Keep execution identifiers so an ambiguous result can be reconciled with the external system.

## Exercise

An agent says “File saved,” but the storage tool returned an error. What is the correct state?

## Answer and self-check

The step failed or remains uncertain. Inspect actual file state before retrying. A model's success message must not override the tool result. Record the error and a possible recovery path.

## Sources and further reading

- [ReAct — Yao et al.](https://arxiv.org/abs/2210.03629)
- [Building effective agents — Anthropic (2024)](https://www.anthropic.com/engineering/building-effective-agents)

## Keep learning

[Previous: 06](06-rag.md) · [Overview](README.md) · [Next: 08](08-agentic-ai.md) · [Deutsch](../de/07-ai-agents.md)
