# Engineering stages and research boundaries

Plan measurable improvements from model integration to reliable operation without claiming a guaranteed AGI roadmap.

## Learning goal

Derive the next technical improvement from an observed problem. Development stages help planning; they are not a ranking every project must climb to completion.

## A practical sequence

| Stage | Evidence needed before further expansion |
| --- | --- |
| Model integration | Representative tasks meet quality requirements |
| Sources and tools | Data access and arguments are checked |
| Bounded agent | Stopping conditions and permissions work |
| Reliable runtime | Restarts and partial failures are handled |
| Longer tasks | State and intermediate goals remain traceable |
| Coordinated systems | Multiple units measurably improve outcomes |

Broad generalization remains a separate research question. A better runtime can improve availability and control without changing the underlying model's capabilities.

## Worked example

An FAQ assistant answers simple questions correctly but fails on outdated documents. The next useful investment is a better data pipeline with version control. A second agent or a larger planner does not automatically solve the freshness problem. Keep the original evaluation questions so the effect of the pipeline change can be measured.

## Limits and failure modes

An architecture can be technically elaborate and still miss user needs. Choose one bottleneck, a metric, and a stopping criterion for each expansion. Then compare against the previous version. If the improvement does not materialize, simplify or revise the hypothesis.

AGI and ASI are capability and future concepts in this documentation. They do not inevitably follow from more tools, longer memory, or more agents. Operational maturity and general intelligence are different dimensions.

## Exercise

A system is correct but too slow. What information do you need before changing its architecture?

## Answer and self-check

Measure queueing, model time, tool time, and verification separately. Inspect the critical path and load conditions. Optimize the demonstrated bottleneck; parallelism does not help when slow steps depend on one another.

## Sources and further reading

- [Levels of AGI — Morris et al.](https://arxiv.org/abs/2311.02462)
- [Building effective agents — Anthropic (2024)](https://www.anthropic.com/engineering/building-effective-agents)

## Keep learning

[Previous: 17](17-practice-llm-to-runtime.md) · [Overview](README.md) · [Next: 19](19-observability.md) · [Deutsch](../de/18-roadmap-llm-agent-agi.md)
