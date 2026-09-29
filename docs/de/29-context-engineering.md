# Kontextgestaltung und Prompt-Architektur

Baue einen begrenzten Modellinput aus Aufgabe, Zustand und ausgewählten Belegen auf.

## Lernziel

Du kannst Kontext nach Zweck und Vertrauensniveau strukturieren. Kontextgestaltung entscheidet, welche Informationen einen Aufruf erreichen. Ein längerer Prompt ist nicht automatisch ein besserer Prompt.

## Kontextschichten

| Schicht | Inhalt |
| --- | --- |
| Verbindliche Regeln | Verhalten und durchgesetzte Systemgrenzen |
| Aktuelle Aufgabe | Nutzerziel und Abnahmekriterien |
| Arbeitszustand | Bestätigte Ergebnisse und offene Schritte |
| Belege | Relevante Quellen mit Herkunft |
| Tool-Ergebnisse | Beobachtungen aus erlaubten Aktionen |

Halte Quelleninhalte von Anweisungen unterscheidbar. Priorisiere Relevanz, Aktualität und Nachvollziehbarkeit. Reserviere ein Budget für Ausgabe und notwendige Zwischenergebnisse, statt den gesamten verfügbaren Raum mit Dokumenten zu füllen.

## Beispiel aus der Praxis

Ein Assistent beantwortet eine Frage zu einer Produktversion. Er erhält die Frage, die ausgewählte Versionsnummer und drei passende Absätze. Alte Versionen werden ausgeschlossen oder ausdrücklich als historisch markiert. Fehlen Angaben, soll er die Lücke benennen. Ein vollständiger Ordnerexport wäre länger, aber nicht unbedingt hilfreicher.

## Grenzen und Fehlerbilder

Zusammenfassungen können Bedingungen verlieren. Doppelte Belege erzeugen scheinbare Bestätigung. Widersprüchliche Informationen müssen aufgelöst oder sichtbar gemacht werden. Ein komprimierter Zustand darf offene Unsicherheit nicht in eine bestätigte Tatsache verwandeln.

Vergleiche Kontextvarianten auf denselben Aufgaben. Messe Antworttreue, fehlende Belege, Kosten und Kontextüberläufe. Eine hohe Tokenauslastung ist kein Qualitätsziel.

## Übung

Welche drei Informationen müssen bei einer Zusammenfassung eines Suchergebnisses erhalten bleiben?

## Lösung und Selbstkontrolle

Die relevante Aussage, ihre Einschränkungen und die Quellen- beziehungsweise Versionszuordnung. Wenn eine dieser Informationen verloren geht, kann die kürzere Fassung zu einer falschen oder unbelegten Antwort führen.

## Quellen und Vertiefung

- [Effective context engineering — Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

## Weiterlernen

[Zurück: 28](28-memory-retrieval-evaluation.md) · [Übersicht](README.md) · [Weiter: 30](30-tool-security.md) · [English](../en/29-context-engineering.md)
