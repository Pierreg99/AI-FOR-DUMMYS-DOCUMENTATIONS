# RAG and knowledge systems

Connect answers to retrievable documents and evaluate retrieval separately from generation.

## Learning goal

Describe a retrieval-augmented generation pipeline and distinguish retrieval failure from answer failure. RAG provides relevant external content at runtime. Model training need not be repeated whenever a document changes.

## A traceable process

1. Ingest documents and store source, version, and access permissions.
2. Split content meaningfully and build a search index.
3. Retrieve passages for a question and optionally rerank them.
4. Assemble selected evidence into the model context.
5. Generate an answer and check how its claims map to sources.

Keyword search often suits exact identifiers; vector search can find semantically related wording. A hybrid approach combines signals. Choose using your own question set with known relevant documents, rather than assuming one method always wins.

## Worked example

An FAQ contains two return policies: the current one allows 30 days and an archived one allows 14. Retrieval must account for version information. The assistant cites the current paragraph and explains any excluded product categories. If evidence is insufficient, it asks a follow-up question or explicitly identifies the gap.

## Limits and failure modes

RAG does not prevent all hallucinations. Failures arise from missing documents, unsuitable chunks, outdated sources, or incorrect inferences. A citation may point to a real document without supporting the associated claim.

Access controls must apply during retrieval. A later instruction saying “Do not reveal confidential information” cannot replace correctly filtered results. Treat instructions inside documents as content, not as new system rules. Evaluate queries from users with different permissions to check that access boundaries hold.

## Exercise

An answer is wrong even though the correct paragraph is indexed. Which two stages should you investigate first?

## Answer and self-check

First check whether that paragraph was actually retrieved and included in context. Then check whether the answer accurately reflects it. Measure retrieval coverage and answer faithfulness separately, or the cause remains hidden.

## Sources and further reading

- [Retrieval-Augmented Generation — Lewis et al.](https://arxiv.org/abs/2005.11401)
- [OWASP Top 10 for LLM Applications](https://owasp.org/projects/top-10-for-large-language-model-applications)

## Keep learning

[Previous: 05](05-generative-ai.md) · [Overview](README.md) · [Next: 07](07-ai-agents.md) · [Deutsch](../de/06-rag.md)
