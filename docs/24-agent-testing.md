# 24 — Agent Testing & Verification

## Warum klassische Unit Tests nicht genügen

Agenten kombinieren probabilistische Modelloutputs mit deterministischen Softwarekomponenten. Tests müssen deshalb mehrere Ebenen abdecken.

## Testpyramide

```text
Unit tests
  ↓
Tool contract tests
  ↓
Integration tests
  ↓
Scenario tests
  ↓
Long-horizon evaluations
  ↓
Production monitoring
```

## Testtypen

- **Unit:** deterministische Funktionen
- **Contract:** Tool-Schemas und Fehlerverträge
- **Scenario:** definierte Agentenaufgaben
- **Adversarial:** Prompt Injection und unerwartete Eingaben
- **Regression:** Verhalten über Modell-/Prompt-Versionen
- **Reliability:** wiederholte Ausführung und Recovery

## Reproduzierbarkeit

Tests sollten Modellversion, Prompt-Version, Tool-Version, Testdaten und relevante Runtime-Konfiguration erfassen.

## Erfolgskriterium

Nicht nur die Endantwort zählt. Auch Tool-Auswahl, Berechtigungen, Seiteneffekte, Kosten und Recovery-Verhalten müssen bewertet werden.
