# 20 — Data Pipelines & Knowledge Quality

## Warum Datenqualität Systemqualität bestimmt

RAG, Fine-Tuning und Evaluation hängen von Daten ab. Ein fehlerhafter Datenbestand kann ein technisch korrektes Retrieval-System unzuverlässig machen.

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

## Qualitätskontrollen

- Schema- und Formatprüfung
- Duplikaterkennung
- Aktualitätsprüfung
- Provenienz
- Zugriffskontrolle
- Sampling und manuelle Review
- Drift Detection

## Provenienz

Jeder wichtige Wissenseintrag sollte auf seine Quelle und seinen Erfassungszeitpunkt zurückgeführt werden können.

## Failure Modes

Besonders relevant sind stale documents, falsche Zugriffsrechte, beschädigte Parser-Ausgaben, Duplikate und widersprüchliche Quellen.
