# 33 — Multimodale KI-Systeme

## Goal
Multimodale Systeme verbinden Text, Bild, Audio, Video oder Sensordaten. Core tasks sind Alignment, Fusion, Uncertainty und Grounding.

## Architecture
~~~text
Text ─┐
Image ├→ Encoders → Alignment/Fusion → Reasoning → Output/Tools
Audio ┤
Video ┘
~~~

## Core problems
1. Temporal und semantic alignment.
2. Missing modality muss von „kein Befund“ unterschieden werden.
3. Unsicherheit und Provenienz müssen weitergereicht werden.

## Evaluation
OCR · ASR · Object Grounding · Temporal Alignment · Cross-Modal Retrieval · Task Success · Hallucination

## Failure modes
False Grounding · Transcription Error · Frame Sampling Gap · Temporal Drift · Ambiguous Reference

## Engineering rule
Mehr Modalitäten erhöhen die Evaluationsoberfläche; Verifikation bleibt erforderlich.

## Dokumentationsstandard

Terms, architecture, assumptions, metrics, and failure modes are kept explicit. Uncertain or hypothetical claims are labeled as such.
