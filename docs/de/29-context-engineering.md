# 29 — Context Engineering & Prompt Architecture

## Ziel
Kontext ist ein Systeminput, nicht nur ein langer Prompt. Eine robuste Pipeline baut einen begrenzten, priorisierten und provenance-aware Kontext.

## Architektur
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

## Kontextschichten
Instruction, Task State, Knowledge, Tools, Memory und Verification sollten getrennt modelliert werden.

## Qualitätsregeln
Relevanz, Autorität und Aktualität werden gegenüber bloßer Kontextmenge priorisiert. Untrusted Content darf keine Policy-Ebene überschreiben.

## Failure Modes
Instruction Conflict · Context Injection · stale Memory · Duplicate Evidence · Context Overflow · Unsupported Assumption

## Metriken
Context Utilization · Retrieval Hit Rate · Citation Coverage · Grounding Rate · Conflict Rate

## Dokumentationsstandard

Begriffe, Architektur, Annahmen, Metriken und Failure Modes werden explizit getrennt. Unsichere oder hypothetische Aussagen werden als solche markiert.
