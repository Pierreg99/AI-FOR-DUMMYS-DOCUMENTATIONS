# 32 — Retrieval Optimization & Search Quality

## Goal
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

## Failure modes
Semantic False Positive · Stale Index · Duplicate Chunk · Missing Metadata · Over-Retrieval · Citation Mismatch

## Engineering rule
Gute Retrieval-Qualität ist nicht automatisch gute Antwortqualität; beide Ebenen müssen separat gemessen werden.

## Dokumentationsstandard

Terms, architecture, assumptions, metrics, and failure modes are kept explicit. Uncertain or hypothetical claims are labeled as such.
