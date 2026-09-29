# Context engineering and prompt architecture

Assemble bounded model input from the task, working state, and selected evidence.

## Learning goal

Structure context by purpose and trust level. Context engineering determines which information reaches a call. A longer prompt is not automatically a better prompt.

## Context layers

| Layer | Content |
| --- | --- |
| Governing rules | Behavior and enforced system boundaries |
| Current task | User goal and acceptance criteria |
| Working state | Confirmed results and pending steps |
| Evidence | Relevant sources with provenance |
| Tool results | Observations from permitted actions |

Keep source content distinguishable from instructions. Prioritize relevance, freshness, and traceability. Reserve room for output and necessary intermediate results instead of filling all available space with documents.

## Worked example

An assistant answers a question about a product version. It receives the question, selected version number, and three relevant passages. Older versions are excluded or explicitly labeled historical. Missing information should be acknowledged. Exporting an entire folder would be longer but not necessarily more useful.

## Limits and failure modes

Summaries can lose conditions. Duplicate evidence can create apparent corroboration. Conflicting information must be resolved or exposed. Compressed state must not turn unresolved uncertainty into a confirmed fact. Preserve whether a statement came from a source, a user correction, or an inference.

Compare context variants on the same tasks. Measure answer faithfulness, missing evidence, cost, and context overflow. High token utilization is not a quality goal. Check cases where relevant evidence occurs early, late, or among distracting passages.

## Exercise

Which three pieces of information must survive summarizing a search result?

## Answer and self-check

The relevant claim, its qualifications, and source or version attribution. Losing any of these can make the shorter representation produce an incorrect or unsupported answer.

## Sources and further reading

- [Effective context engineering — Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

## Keep learning

[Previous: 28](28-memory-retrieval-evaluation.md) · [Overview](README.md) · [Next: 30](30-tool-security.md) · [Deutsch](../de/29-context-engineering.md)
