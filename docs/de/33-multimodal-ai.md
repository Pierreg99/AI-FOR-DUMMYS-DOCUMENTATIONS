# 33 — Multimodale KI-Systeme

## Ziel
Multimodale Systeme verbinden Text, Bild, Audio, Video oder Sensordaten. Zentrale Aufgaben sind Alignment, Fusion, Uncertainty und Grounding.

## Architektur
~~~text
Text ─┐
Image ├→ Encoders → Alignment/Fusion → Reasoning → Output/Tools
Audio ┤
Video ┘
~~~

## Kernprobleme
1. Temporal und semantic alignment.
2. Missing modality muss von „kein Befund“ unterschieden werden.
3. Unsicherheit und Provenienz müssen weitergereicht werden.

## Evaluation
OCR · ASR · Object Grounding · Temporal Alignment · Cross-Modal Retrieval · Task Success · Hallucination

## Failure Modes
False Grounding · Transcription Error · Frame Sampling Gap · Temporal Drift · Ambiguous Reference

## Engineering-Regel
Mehr Modalitäten erhöhen die Evaluationsoberfläche; Verifikation bleibt erforderlich.

## Dokumentationsstandard

Begriffe, Architektur, Annahmen, Metriken und Failure Modes werden explizit getrennt. Unsichere oder hypothetische Aussagen werden als solche markiert.
