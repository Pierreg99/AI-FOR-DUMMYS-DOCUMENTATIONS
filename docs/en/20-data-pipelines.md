# Data pipelines and knowledge quality

Treat provenance, versions, and access permissions as part of answer quality.

## Learning goal

Design a verifiable data pipeline for a knowledge system. A pipeline starts at the source and does not end with a successful upload. What matters is whether relevant, current, permitted content can later be found correctly.

## Controls throughout the pipeline

1. Record source, owner, and permitted purpose.
2. Check format and completeness during ingestion.
3. Detect duplicates, invalid content, and parsing failures.
4. Preserve versions and metadata during chunking.
5. Build the search index and test known questions.
6. Propagate changes and deletions into derived stores.

A document status such as `active`, `archived`, or `deleted` helps exclude outdated content. Metadata cannot live only on the original when search returns individual passages.

## Worked example

A product sheet is replaced. The new version receives its own version identifier while the old one is marked archived. The search index is updated, related caches are invalidated, and a known product question is checked again. Merely adding the new file would leave conflicting results. Keep the update event traceable so a bad import can be diagnosed and corrected.

## Limits and failure modes

PDF parsers may reorder columns or break tables. OCR may alter numbers. Samples should therefore include structurally difficult documents. A technically successful import does not establish content correctness.

Measure import errors, freshness lag, duplicate share, and answers using the wrong version. When permissions change, search access must follow promptly; an old index must not preserve a former authorization. Include a deletion test, not just an ingestion test.

## Exercise

Why should a chunk carry a document ID, version ID, and section reference?

## Answer and self-check

So provenance, updates, deletion, and citations work unambiguously. Without these relationships, defective or outdated passages are difficult to replace selectively.

## Sources and further reading

- [Retrieval-Augmented Generation — Lewis et al.](https://arxiv.org/abs/2005.11401)
- [Privacy Framework — NIST](https://www.nist.gov/privacy-framework)

## Keep learning

[Previous: 19](19-observability.md) · [Overview](README.md) · [Next: 21](21-inference-serving.md) · [Deutsch](../de/20-data-pipelines.md)
