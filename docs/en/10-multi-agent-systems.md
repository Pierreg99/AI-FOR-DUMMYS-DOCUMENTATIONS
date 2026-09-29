# Multi-agent systems

Split work across agents when it creates clear responsibilities and verifiable handoffs.

## Learning goal

Compare coordination patterns and identify their additional costs. Multiple agents are multiple execution units, not an automatic quality guarantee. They may share failure sources and repeat the same incorrect assumptions.

## Coordination patterns

| Pattern | Useful for | Main risk |
| --- | --- | --- |
| Sequential handoff | Dependent stages | Early errors propagate |
| Parallel subtasks | Independent investigations | Duplicate or conflicting results |
| Shared working state | Collaboration on one problem | Concurrent write conflicts |
| Coordinator with specialists | Different areas of expertise | Coordinator bottleneck |

Each handoff needs a goal, inputs, expected format, time budget, and verifiable result. Decide in advance who may modify a shared artifact. Version checks help prevent silent overwrites.

## Worked example

Documentation receives separate technical and language reviews. Both reviewers return specific locations and proposed edits. One accountable integration step resolves conflicts. If both reviewers inherit the same unsupported claim, agreement is not independent evidence. Keep the underlying references available to the integrator so disputed claims can be checked directly.

## Limits and failure modes

Inter-agent messages consume context and time. Parallel work reduces latency only when tasks are genuinely independent and resources are available. Also inspect whether confidential information is being unnecessarily shared with additional execution units.

Compare the final result against a single-agent baseline. Success rate, added cost, integration effort, and lost information are more informative than the number of participants. Include the coordinator's work in the cost calculation.

## Exercise

Two agents edit the same file simultaneously. Which two simple measures prevent silent data loss?

## Answer and self-check

Assign exclusive write ownership or separate working copies. Check the original version during integration and resolve conflicts explicitly. A shared chat transcript alone does not protect a file against overwriting.

## Sources and further reading

- [Building effective agents — Anthropic (2024)](https://www.anthropic.com/engineering/building-effective-agents)

## Keep learning

[Previous: 09](09-memory-tools-context.md) · [Overview](README.md) · [Next: 11](11-autonomy-evaluation.md) · [Deutsch](../de/10-multi-agent-systems.md)
