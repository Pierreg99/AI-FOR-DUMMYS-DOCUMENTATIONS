# KI-Agenten

Verstehe, wie ein Modell mit Werkzeugen, Zustand und einer begrenzten Kontrollschleife zusammenarbeitet.

## Lernziel

Du kannst einen Agenten von einer einzelnen Textgenerierung unterscheiden. Ein Agent wählt nächste Schritte anhand eines Ziels und beobachteter Ergebnisse. Die Anwendung führt zulässige Aktionen aus und hält dabei Budget, Rechte und Abbruchbedingungen ein.

## Bausteine

| Baustein | Verantwortung |
| --- | --- |
| Modell | Nächste Handlung oder Antwort vorschlagen |
| Laufzeit | Vorschlag prüfen und Aktion ausführen |
| Zustand | Bereits erledigte Schritte und offene Arbeit speichern |
| Werkzeuge | Klar begrenzten Zugriff auf Daten oder Funktionen anbieten |
| Verifikation | Prüfen, ob das Ziel tatsächlich erreicht wurde |

Ein Tool-Aufruf ist zunächst ein strukturierter Vorschlag. Er ist weder eine Berechtigung noch ein Beweis erfolgreicher Ausführung. Die Laufzeit muss das beobachtete Ergebnis wieder in den Zustand übernehmen.

## Beispiel aus der Praxis

Ein Dokumentationsagent soll defekte Links finden. Er liest Dateien, prüft lokale Ziele und erstellt einen Änderungsvorschlag. Er benötigt dafür keine Berechtigung zum Löschen des Repositorys. Ein sinnvolles Ende ist erreicht, wenn alle gefundenen Links geprüft und offene Fälle dokumentiert wurden, nicht wenn das Modell „fertig“ schreibt.

## Grenzen und Fehlerbilder

Wiederholte Aktionen, erfundene Tool-Namen und endlose Schleifen sind typische Probleme. Begrenze Anzahl der Schritte, Gesamtdauer und Kosten. Unbekannte Werkzeuge werden abgelehnt. Fehlgeschlagene Schreibaktionen dürfen nicht blind wiederholt werden, da die erste Aktion bereits teilweise wirksam gewesen sein kann.

## Übung

Ein Agent meldet „Datei gespeichert“, aber das Speicherwerkzeug gab einen Fehler zurück. Welcher Zustand ist korrekt?

## Lösung und Selbstkontrolle

Der Schritt ist fehlgeschlagen oder ungeklärt. Prüfe den tatsächlichen Dateistand, bevor du wiederholst. Eine Erfolgsmeldung des Modells darf das Ergebnis des Werkzeugs nicht überschreiben. Protokolliere den Fehler und eine mögliche Wiederherstellung.

## Quellen und Vertiefung

- [ReAct — Yao et al.](https://arxiv.org/abs/2210.03629)
- [Building effective agents — Anthropic (2024)](https://www.anthropic.com/engineering/building-effective-agents)

## Weiterlernen

[Zurück: 06](06-rag.md) · [Übersicht](README.md) · [Weiter: 08](08-agentic-ai.md) · [English](../en/07-ai-agents.md)
