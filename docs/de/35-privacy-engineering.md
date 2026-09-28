# 35 — Privacy Engineering, Data Protection & Compliance

## Ziel
Privacy Engineering behandelt personenbezogene und vertrauliche Daten als Architekturgrenze.

## Datenlebenszyklus
~~~text
Collect → Classify → Minimize → Use → Store/Cache
       → Share → Delete/Retain
~~~

## Controls
Data Minimization · Purpose Limitation · Access Control · Retention · Deletion · Encryption · Pseudonymization · Log Redaction · Tenant Isolation

## AI-spezifische Risiken
RAG kann sensible Inhalte retrieven. Tool-Aufrufe können Daten an externe Dienste senden. Traces und Logs können Geheimnisse enthalten.

## Audit
~~~text
Who → What → Why → When → Policy → Result
~~~

## Failure Modes
Cross-Tenant Retrieval · Secret Exposure · Unauthorized Export · Excessive Permissions · Deletion Mismatch

## Engineering-Regel
Privacy by Design begrenzt Datenflüsse bereits im Systemdesign. Technische Maßnahmen ersetzen keine Rechtsprüfung.

## Dokumentationsstandard

Begriffe, Architektur, Annahmen, Metriken und Failure Modes werden explizit getrennt. Unsichere oder hypothetische Aussagen werden als solche markiert.
