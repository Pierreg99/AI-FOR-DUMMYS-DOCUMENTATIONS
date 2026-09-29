# Autonomy, evaluation, and reliability

Evaluate completed tasks, actual side effects, and failure handling together.

## Learning goal

Describe an agent evaluation whose outcome can be checked. Polished text is insufficient: the system must achieve the correct goal using permitted means. Define success, failure, and unresolved outcomes before running the test.

## Useful measurements

| Metric | What it tells you |
| --- | --- |
| Task success | Fraction of attempts completed successfully |
| Tool correctness | Appropriate tools and arguments |
| Recovery | Success after specified disruptions |
| Human interventions | Assistance needed per task |
| Cost and latency | Effort until the verified result |

Measure unauthorized actions independently of task success. A correct final answer does not justify unauthorized data access.

## Worked numerical example

Of 50 tasks, 42 complete successfully: observed success is 84 percent. Report task selection and repetition count too. A small, easy test set cannot establish performance on arbitrary tasks.

For ten independent steps each succeeding with probability 95 percent, the simplified model `0.95^10` gives approximately 59.9 percent overall success. Real failures are often dependent; this is an illustration, not a production forecast.

## Limits and failure modes

An average can conceal rare, severe failures. Break results down by task type and difficulty. Preserve model, prompt, tool, and data versions. Repeated runs and uncertainty estimates help evaluate stochastic systems. Include timeouts and abandoned tasks in a clearly documented denominator.

A task difficulty scale based on human completion time is not automatically the amount of time an agent can work unattended. Keep those concepts separate when interpreting evaluations.

## Exercise

A system solves nine of ten tasks but performs one unauthorized action. Is “90 percent successful” an adequate report?

## Answer and self-check

No. Report the success rate alongside the authorization violation and a separate release rule. Success and permitted behavior are distinct requirements; a critical violation can block a release.

## Sources and further reading

- [Levels of AGI — Morris et al.](https://arxiv.org/abs/2311.02462)
- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Keep learning

[Previous: 10](10-multi-agent-systems.md) · [Overview](README.md) · [Next: 12](12-agi.md) · [Deutsch](../de/11-autonomy-evaluation.md)
