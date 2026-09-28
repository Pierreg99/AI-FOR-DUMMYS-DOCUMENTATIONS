# 35 — Privacy Engineering, Data Protection & Compliance

## Goal
Privacy Engineering behandelt personenbezogene und vertrauliche Daten als Architecturegrenze.

## Data lifecycle
~~~text
Collect → Classify → Minimize → Use → Store/Cache
       → Share → Delete/Retain
~~~

## Controls
Data Minimization · Purpose Limitation · Access Control · Retention · Deletion · Encryption · Pseudonymization · Log Redaction · Tenant Isolation

## AI-specific risks
RAG kann sensible Inhalte retrieven. Tool-Aufrufe können Daten an externe Dienste senden. Traces und Logs können Geheimnisse enthalten.

## Audit
~~~text
Who → What → Why → When → Policy → Result
~~~

## Failure modes
Cross-Tenant Retrieval · Secret Exposure · Unauthorized Export · Excessive Permissions · Deletion Mismatch

## Engineering rule
Privacy by Design begrenzt Datenflüsse bereits im Systemdesign. Technische Maßnahmen ersetzen keine Rechtsprüfung.

## Dokumentationsstandard

Terms, architecture, assumptions, metrics, and failure modes are kept explicit. Uncertain or hypothetical claims are labeled as such.
