# Kapitel 9 — Memory, Tools & Context Engineering

## Memory-Arten
- **Working memory:** aktueller Task-Kontext
- **Episodic memory:** frühere Ereignisse/Trajektorien
- **Semantic memory:** abstrahierte Fakten und Beziehungen
- **Long-term memory:** persistente externe Speicherung

## Context ≠ Memory
Das Context Window ist der aktuelle Modellinput. Langzeitgedächtnis erfordert typischerweise persistente Speicherung und selektives Retrieval.

## Tools
```text
Model → Tool Call → Runtime → API/Shell/DB/Browser → Result → Model
```

## Context Engineering
Bestimmt, welche Informationen in welchem Zeitpunkt in den begrenzten Kontext gelangen.

## Referenz
- Anthropic, Effective Context Engineering: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
