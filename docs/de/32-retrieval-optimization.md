# 32 — Retrieval Optimization & Search Quality

## Ziel
Retrieval ist eine eigene Systemschicht zwischen Wissensspeicher und Generationskontext.

## Pipeline
~~~text
Query → Rewrite → Candidate Retrieval → Filter
      → Rerank → Diversity/Dedup → Context
      → Generation → Grounding Check
~~~

## Signale
Lexical Match · Dense Similarity · Metadata · Freshness · Authority · Diversity · Task Relevance

## Evaluation
Recall@K · Precision@K · MRR · nDCG · Grounded Answer Rate

## Chunking
Semantische Grenzen, Tabellen, Code, Überschriften und Metadaten können unterschiedliche Repräsentationen benötigen.

## Failure Modes
Semantic False Positive · Stale Index · Duplicate Chunk · Missing Metadata · Over-Retrieval · Citation Mismatch

## Engineering-Regel
Gute Retrieval-Qualität ist nicht automatisch gute Antwortqualität; beide Ebenen müssen separat gemessen werden.

## Dokumentationsstandard

Begriffe, Architektur, Annahmen, Metriken und Failure Modes werden explizit getrennt. Unsichere oder hypothetische Aussagen werden als solche markiert.
