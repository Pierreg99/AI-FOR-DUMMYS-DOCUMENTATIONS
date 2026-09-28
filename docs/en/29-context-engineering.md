# 29 — Context Engineering & Prompt Architecture

## Goal
Kontext ist ein Systeminput, nicht nur ein langer Prompt. Eine robuste Pipeline baut einen begrenzten, priorisierten und provenance-aware Kontext.

## Architecture
~~~text
Policy → Task State → Retrieval → Tool Results
                 ↓
          Context Assembly
                 ↓
               Model
                 ↓
         Parse / Validate
                 ↓
           Action / Reply
~~~

## Context layers
Instruction, Task State, Knowledge, Tools, Memory und Verification sollten getrennt modelliert werden.

## Quality rules
Relevanz, Autorität und Aktualität werden gegenüber bloßer Kontextmenge priorisiert. Untrusted Content darf keine Policy-Ebene überschreiben.

## Failure modes
Instruction Conflict · Context Injection · stale Memory · Duplicate Evidence · Context Overflow · Unsupported Assumption

## Metrics
Context Utilization · Retrieval Hit Rate · Citation Coverage · Grounding Rate · Conflict Rate

## Dokumentationsstandard

Terms, architecture, assumptions, metrics, and failure modes are kept explicit. Uncertain or hypothetical claims are labeled as such.
