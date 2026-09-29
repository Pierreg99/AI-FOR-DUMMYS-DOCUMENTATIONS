# Memory systems and retrieval evaluation

Check whether stored information remains relevant, current, and correctly associated when used later.

## Learning goal

Build a small evaluation set for a memory system. Good storage is insufficient: retrieval must provide the right information for the right person at the right time.

## Four evaluation dimensions

| Dimension | Test question |
| --- | --- |
| Relevance | Does the memory help with the current task? |
| Freshness | Was a later correction incorporated? |
| Association | Does the information belong to the correct account? |
| Deletion | Does it disappear from derived stores too? |

Create cases containing an original statement, a correction, a later question, and the expected valid information. Include cases without a relevant memory. The system should recognize missing knowledge.

## Worked numerical example

A question has four relevant stored entries. Three appear among five retrieved results. Then `Precision@5 = 3/5 = 0.6` and `Recall@5 = 3/4 = 0.75`. This calculation assumes a fully known relevance set. State the labeling process when using these metrics in a report.

## Limits and failure modes

Similar wording can concern a different user or time. Semantic similarity is therefore insufficient evidence of validity. Filter identity and authorization before constructing answers, and account for conflicting versions.

Also evaluate usefulness on the downstream task. A relevant result can still be misrepresented in the answer. Memory should expose provenance and support corrections rather than reinforce old guesses indefinitely. Include cross-account and stale-preference cases in regression tests.

## Exercise

A deleted preference reappears in an answer. Which stores should you investigate?

## Answer and self-check

The primary store, search index, cache, summaries, and any retained conversation excerpts. Then repeat the question to verify deletion across every retrieval path actually used.

## Sources and further reading

- [Effective context engineering — Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [Privacy Framework — NIST](https://www.nist.gov/privacy-framework)

## Keep learning

[Previous: 27](27-tool-protocols-mcp.md) · [Overview](README.md) · [Next: 29](29-context-engineering.md) · [Deutsch](../de/28-memory-retrieval-evaluation.md)
