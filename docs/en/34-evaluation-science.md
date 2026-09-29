# Evaluation and statistical thinking

Ask measurable quality questions and report uncertainty instead of seemingly definitive rankings.

## Learning goal

Plan a fair comparison of two system versions. A benchmark is a sample under specified conditions. Its meaning depends on task selection, scoring, and possible data overlap.

## Experimental plan

1. Define the goal and success criteria before running the test.
2. Select representative tasks across important groups.
3. Separate development data from the final test set.
4. Run both versions on comparable tasks.
5. Report error types, cost, and duration together.
6. Document uncertainty and limits of generalization.

Subjective criteria require a shared human scoring rubric. An automated model judge can help, but must be checked against human ratings and can have systematic errors of its own.

## Worked numerical example

Version A solves 42 of 50 tasks; version B solves 44. Those results are 84 and 88 percent. A four-percentage-point difference alone does not prove a reliable improvement. Inspect which tasks changed, repeat stochastic runs, and use an appropriate uncertainty method.

## Limits and failure modes

A test set repeatedly used for prompt tuning is no longer independent. Multiple answers to the same task are not automatically independent new tasks either. Account for that grouping in statistical analysis.

An aggregate score can conceal regressions for one language or a difficult user group. Report important subgroups. Document missing and aborted runs too; do not silently remove them from the denominator. Preserve evaluation configuration so comparisons can be reproduced or meaningfully repeated.

## Exercise

A new system improves the average but fails more often on German questions. What release decision is appropriate?

## Answer and self-check

Check the predefined quality thresholds for each language. The average alone does not justify release. Investigate the failures and decide against actual requirements whether the regression is acceptable.

## Sources and further reading

- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Keep learning

[Previous: 33](33-multimodal-ai.md) · [Overview](README.md) · [Next: 35](35-privacy-engineering.md) · [Deutsch](../de/34-evaluation-science.md)
