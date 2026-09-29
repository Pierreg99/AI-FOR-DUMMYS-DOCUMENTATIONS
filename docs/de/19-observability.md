# Beobachtbarkeit und Tracing

Mache Modellaufrufe, Werkzeuge und Wiederholungen so sichtbar, dass Fehler eingegrenzt werden können.

## Lernziel

Du kannst Logs, Metriken und Traces unterscheiden. Logs beschreiben Ereignisse, Metriken aggregieren Messwerte, Traces verbinden Arbeitsschritte einer Ausführung. Zusammen zeigen sie nicht nur, dass etwas fehlschlägt, sondern auch wo.

## Was eine Ausführung dokumentiert

| Feld | Zweck |
| --- | --- |
| Run-ID und Trace-ID | Zugehörige Schritte verbinden |
| Schritt und Version | Verwendete Komponente identifizieren |
| Dauer und Status | Engpässe und Fehler erkennen |
| Fehlerklasse | Timeout, Berechtigung und Inhaltsfehler trennen |
| Verbrauch | Tokens, Tool-Aufrufe und Wiederholungen zuordnen |

Verknüpfe Modellaufruf, Suche, Tool-Ausführung und Verifikation. Behalte die Beziehung zwischen ursprünglichem Versuch und Wiederholung bei. Eine neue ID für jeden Versuch darf den gemeinsamen Aufgabenkontext nicht verlieren.

## Beispiel aus der Praxis

Eine Antwort benötigt zwölf Sekunden. Der Trace zeigt zwei Sekunden Modellzeit, acht Sekunden Suchwartezeit und zwei Sekunden Verarbeitung. Ein schnelleres Modell würde nur einen kleinen Teil verbessern. Die eigentliche Untersuchung betrifft Warteschlange, Suchdienst und konkurrierende Anfragen.

## Grenzen und Fehlerbilder

Vollständige Prompts in Logs können vertrauliche Inhalte verbreiten. Erfasse bevorzugt notwendige Metadaten, redigiere sensible Felder und beschränke Zugriff sowie Aufbewahrung. Auch Fehlermeldungen können Secrets enthalten.

Sampling spart Speicher, kann aber seltene Fehler verbergen. Dokumentiere, welche Ausführungen fehlen. Unbegrenzte Nutzer-IDs als Metriklabels erzeugen hohe Kardinalität; solche Zuordnungen gehören eher in kontrollierte Ereignisprotokolle.

## Übung

Die durchschnittliche Latenz sinkt, aber viele Nutzer melden lange Wartezeiten. Welche zusätzlichen Messwerte helfen?

## Lösung und Selbstkontrolle

Prüfe Perzentile, Timeout-Rate, Warteschlangenzeit und Aufgabengruppen. Ein schneller Großteil kann wenige sehr langsame Anfragen im Durchschnitt verdecken. Verbinde auffällige Messwerte mit konkreten Traces.

## Quellen und Vertiefung

- [OpenTelemetry — Signals](https://opentelemetry.io/docs/concepts/signals/)

## Weiterlernen

[Zurück: 18](18-roadmap-llm-agent-agi.md) · [Übersicht](README.md) · [Weiter: 20](20-data-pipelines.md) · [English](../en/19-observability.md)
