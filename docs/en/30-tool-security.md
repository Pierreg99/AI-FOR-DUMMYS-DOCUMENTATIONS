# Tool security and capability sandboxing

Give tools exactly the capabilities required for a task.

## Learning goal

Design a tool contract with enforced boundaries. A capability describes a specific permitted action on particular resources. It should be narrower than unrestricted shell, database, or network access.

## Required checks

| Area | Example |
| --- | --- |
| Function | Read documents rather than run arbitrary commands |
| Resource | An allowed project directory rather than the whole filesystem |
| Arguments | Bounded file size and a valid identifier |
| Runtime | Time, memory, and call budgets |
| Effect | Reading, reversible editing, or publication |

Enforce authorization in the executing service. A model-supplied `approved: true` field is not evidence of permission. Approval needs a trusted origin and must match the exact proposal.

## Worked example

A tool may update documentation. Its service normalizes the path, checks the permitted directory, and accounts for symbolic links. It accepts only known text files and bounds the change. A path such as `../../private/config` does not become safe because the tool has a friendly description.

## Limits and failure modes

Sandboxing reduces possible impact but does not replace business validation. Combinations of individually allowed tools can create new risks. Restrict outbound destinations too and prevent secrets from entering tool results.

Tests should include invalid paths, oversized input, expired approval, and changed resource versions. Perform checks close to the actual action so changes between checking and use do not silently defeat them. Record rejected attempts without logging sensitive payloads unnecessarily.

## Exercise

A tool validates argument types but then uses an unchecked path in a shell command. Is schema validation sufficient?

## Answer and self-check

No. Type checking prevents neither path traversal nor command injection. Use narrow file APIs, validated resources, and no uncontrolled command concatenation.

## Sources and further reading

- [OWASP Top 10 for LLM Applications](https://owasp.org/projects/top-10-for-large-language-model-applications)
- [Model Context Protocol — Architecture](https://modelcontextprotocol.io/docs/learn/architecture)

## Keep learning

[Previous: 29](29-context-engineering.md) · [Overview](README.md) · [Next: 31](31-event-driven-orchestration.md) · [Deutsch](../de/30-tool-security.md)
