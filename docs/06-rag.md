# Kapitel 6 — RAG & Knowledge Systems

## Retrieval-Augmented Generation
RAG verbindet Retrieval mit Generation.

```text
Question → Retriever → Relevant Context → LLM → Answer
```

## Typische Pipeline
```text
Ingestion → Chunking → Embeddings/Search → Reranking → Context → Generation
```

## Failure Modes
Retrieval-Miss, schlechte Chunks, veraltete Dokumente, falsche Priorisierung und Kontextüberladung.

RAG ist ein Systemmuster, keine Intelligenzstufe.

## Referenz
- Lewis et al., RAG: https://arxiv.org/abs/2005.11401
