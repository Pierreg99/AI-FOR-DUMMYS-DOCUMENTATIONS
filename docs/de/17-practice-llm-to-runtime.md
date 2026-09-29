# Vom Sprachmodell zur Agenten-Laufzeit

Entwickle eine kleine, überprüfbare Laufzeit, bevor du zusätzliche Autonomie einführst.

## Lernziel

Du kannst eine Modellintegration schrittweise um Zustand, Werkzeuge und Verifikation erweitern. Beginne mit einer klaren Aufgabe: beispielsweise Dokumente prüfen und einen Bericht erstellen. Definiere ausdrücklich, welche Ressourcen verändert werden dürfen.

## Schrittweise Umsetzung

1. Einen Modellaufruf mit festen Eingaben und überprüfbarer Ausgabe bauen.
2. Quellen abrufen und Herkunft sowie Zugriffsrechte erhalten.
3. Werkzeuge mit Schemas, Zeitlimits und Fehlerformaten hinzufügen.
4. Eine begrenzte Schleife mit eindeutigen Endzuständen einführen.
5. Zustandsübergänge speichern und Neustarts testen.
6. Metriken, Berechtigungsprüfungen und Freigaben ergänzen.

## Beispiel als Pseudocode

```text
for step in allowed_steps:
    proposal = model(current_state)
    action = validate_schema_and_permissions(proposal)
    if action.is_final:
        return verify_result(action, current_state)
    result = execute_with_deadline(action)
    current_state = persist_observation(result)
return controlled_stop("step budget exhausted")
```

Dieses Schema ist keine fertige produktive Implementierung. Insbesondere atomare Speicherung, konkurrierende Ausführung und externe Seiteneffekte brauchen weitere Entscheidungen.

## Grenzen und Fehlerbilder

Wenn die Verbindung nach einem Schreibaufruf abbricht, kann dessen Wirkung unbekannt sein. Ein erneuter Versuch braucht dieselbe Idempotenzkennung oder einen Abgleich des externen Zustands. Das Modell sollte diese Unsicherheit nicht durch eine Vermutung auflösen.

Speichere eine Ausführungs-ID, die eingesetzten Versionen und relevante Ergebnisse. Geheimnisse gehören in die Laufzeitkonfiguration, nicht in den Prompt. Ein klarer Fehlerzustand ist nützlicher als eine Endlosschleife.

## Übung

Welche drei Unterbrechungen solltest du vor der ersten Freigabe simulieren?

## Lösung und Selbstkontrolle

Einen Modell-Timeout, einen Werkzeugfehler und einen Prozessneustart nach einer externen Aktion. Prüfe jeweils, ob die Aufgabe nachvollziehbar endet oder fortgesetzt wird und ob keine doppelte Wirkung entsteht.

## Quellen und Vertiefung

- [ReAct — Yao et al.](https://arxiv.org/abs/2210.03629)
- [Temporal — Workflow execution](https://docs.temporal.io/workflow-execution)

## Weiterlernen

[Zurück: 16](16-formulas.md) · [Übersicht](README.md) · [Weiter: 18](18-roadmap-llm-agent-agi.md) · [English](../en/17-practice-llm-to-runtime.md)
