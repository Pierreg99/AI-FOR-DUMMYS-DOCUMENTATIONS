# Architektur-Patterns

Nutze wiederkehrende Entwurfsmuster als prüfbare Entscheidungen statt als Sammlung immer neuer Komponenten.

## Lernziel

Du kannst ein Architekturpattern mit einer konkreten Anforderung verbinden. Patterns beschreiben Verantwortlichkeiten und Kontrollflüsse. Sie können kombiniert werden, doch jede zusätzliche Stufe sollte eine erkennbare Aufgabe erfüllen.

## Patterns vergleichen

| Pattern | Zweck | Prüffrage |
| --- | --- | --- |
| Router | Aufgabe an passende Verarbeitung geben | Erkennt er unbekannte Fälle? |
| Planner/Executor | Planung von Ausführung trennen | Ist jeder Planschritt ausführbar? |
| Generator/Critic | Entwurf anhand von Kriterien verbessern | Erkennt die Kritik echte Fehler? |
| Menschliche Freigabe | Folgenreiche Aktionen kontrollieren | Ist die konkrete Änderung sichtbar? |
| Persistente Ausführung | Nach Unterbrechung fortsetzen | Wird ein Seiteneffekt doppelt ausgeführt? |

Ein Critic-Modell ist keine unabhängige Wahrheitsquelle. Für berechenbare Kriterien sind deterministische Prüfungen oft aussagekräftiger: Ein Test kann etwa feststellen, ob eine referenzierte Datei existiert.

## Beispiel aus der Praxis

Ein Supportsystem verwendet einen Router für Rechnung, Lieferung und technische Hilfe. Unbekannte Kategorien gehen in eine allgemeine Warteschlange. Innerhalb jeder Route bleiben die Werkzeuge eng begrenzt. Die Rechnungsroute erhält dadurch nicht automatisch Schreibrechte für die Lieferdatenbank.

## Grenzen und Fehlerbilder

Router können falsche Spezialisten auswählen. Planner können unerfüllbare Schritte erzeugen. Kritiker können Stilvorlieben mit sachlichen Fehlern verwechseln. Lege pro Pattern Eingabe, Ausgabe, Abbruchbedingung und Fehlerzustand fest.

Bewerte eine neue Stufe durch einen Vergleich mit und ohne diese Stufe. Miss nicht nur Antwortqualität, sondern auch zusätzliche Latenz und Kosten. Ohne klaren Nutzen erhöht ein Pattern vor allem den Wartungsaufwand.

## Übung

Welches Pattern passt zu einer Aufgabe, bei der ein Bericht erstellt und gegen fünf feste Regeln geprüft werden soll?

## Lösung und Selbstkontrolle

Ein Entwurfs- und Prüfschritt. Verwende für maschinell entscheidbare Regeln deterministische Validatoren. Ein Modell kann qualitative Aspekte ergänzen, sollte aber klare Regelverletzungen nicht überstimmen.

## Quellen und Vertiefung

- [Building effective agents — Anthropic (2024)](https://www.anthropic.com/engineering/building-effective-agents)

## Weiterlernen

[Zurück: 14](14-security-safety.md) · [Übersicht](README.md) · [Weiter: 16](16-formulas.md) · [English](../en/15-architecture-patterns.md)
