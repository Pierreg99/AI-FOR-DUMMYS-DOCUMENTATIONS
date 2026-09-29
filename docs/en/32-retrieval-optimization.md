# Retrieval optimization and search quality

Improve search using known relevant evidence and questions with checkable outcomes.

## Learning goal

Evaluate chunking, retrieval methods, and reranking separately. Good search provides suitable, permitted information in time. A high similarity score alone does not establish that.

## Optimization choices

| Choice | Benefit | Risk |
| --- | --- | --- |
| Meaningful passage boundaries | Keep claims together | Large chunks contain distractions |
| Keyword search | Exact terms and identifiers | Misses alternative wording |
| Vector search | Semantically related content | Similar but incorrect content |
| Hybrid retrieval | Complementary signals | Additional tuning |
| Reranking | More precise candidate ordering | Additional time and computation |

Start with a simple baseline. Change one important variable at a time and compare on the same questions. Otherwise it is unclear which change helped.

## Worked example

A question includes product identifier `AX-204`. Exact search finds the correct record while purely semantic search favors similar products. A combined search preserves the exact match and adds relevant explanations. Subsequent reranking must not bypass access filters.

## Limits and failure modes

Recall measures retrieved relevant evidence; precision measures the relevant share of results. Ranking metrics such as MRR emphasize how early a relevant result appears. None alone proves that a generated answer is correct.

Evaluate German and English queries separately, including translations and mixed technical vocabulary. Test empty queries, unknown identifiers, and questions without an available answer. More results may harm answers when they fill context with contradictions. Track latency alongside relevance when adding reranking.

## Exercise

Why might questions automatically generated from the same chunks create an overly easy test set?

## Answer and self-check

They may mirror source wording and structure. Add real user phrasing, difficult counterexamples, and unanswerable cases. Keep final test questions separate from optimization.

## Sources and further reading

- [Retrieval-Augmented Generation — Lewis et al.](https://arxiv.org/abs/2005.11401)

## Keep learning

[Previous: 31](31-event-driven-orchestration.md) · [Overview](README.md) · [Next: 33](33-multimodal-ai.md) · [Deutsch](../de/32-retrieval-optimization.md)
