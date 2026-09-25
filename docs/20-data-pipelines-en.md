# 20 — Data Pipelines & Knowledge Quality

## Why data quality determines system quality

RAG, fine-tuning, and evaluation depend on data. A flawed corpus can make a technically correct retrieval system unreliable.

## Pipeline

```text
Source
 → Ingestion
 → Validation
 → Normalization
 → Chunking
 → Index
 → Retrieval
 → Evaluation
```

## Quality controls

- schema and format validation
- duplicate detection
- freshness checks
- provenance
- access control
- sampling and human review
- drift detection

## Provenance

Important knowledge items should be traceable to their source and acquisition time.

## Failure modes

Key risks include stale documents, incorrect permissions, broken parser output, duplicates, and conflicting sources.
