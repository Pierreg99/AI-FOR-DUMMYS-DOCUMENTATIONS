# Gedächtnis, Werkzeuge und Kontext

Trenne dauerhafte Informationen vom aktuellen Modellinput und gib jedem Speicher eine klare Aufgabe.

## Lernziel

Du kannst erklären, welche Informationen gespeichert werden, welche abgerufen werden und welche tatsächlich in einem Modellaufruf landen. Ein großes Kontextfenster ist kein dauerhaftes Gedächtnis. Persistenz entsteht durch eine externe Speicherung und Regeln für den Zugriff.

## Speicherarten

| Art | Inhalt | Beispiel |
| --- | --- | --- |
| Arbeitszustand | Aktuelle Aufgabe und Zwischenschritte | Noch ungeprüfte Dokumente |
| Episodisches Gedächtnis | Frühere Ereignisse | Ergebnis einer vergangenen Ausführung |
| Semantisches Gedächtnis | Gespeicherte Aussagen | Bestätigte Produktbeschreibung |
| Kontext | Für diesen Aufruf ausgewählte Informationen | Frage plus relevante Quellen |

Werkzeuge verbinden die Laufzeit mit Suchdiensten, Datenbanken oder anderen Funktionen. Ihre Ergebnisse werden geprüft und gegebenenfalls für den nächsten Modellaufruf zusammengefasst. Nicht jeder Tool-Output gehört vollständig in den Kontext.

## Beispiel aus der Praxis

Ein Lernassistent speichert, dass Kapitel 6 abgeschlossen wurde. Für eine spätere Frage benötigt er den Kapitelstatus und passende Fachinhalte, nicht zwangsläufig den gesamten Gesprächsverlauf. Die Herkunft einer gespeicherten Präferenz bleibt sichtbar; eine spätere Korrektur ersetzt die frühere Fassung.

## Grenzen und Fehlerbilder

Veraltete Erinnerungen können neue Antworten verfälschen. Zusammenfassungen können Einschränkungen verlieren. Ein ungeprüfter Modelltext sollte deshalb nicht automatisch als dauerhafte Tatsache gelten. Speichere Quelle, Zeitpunkt, Gültigkeit und Zuordnung zur richtigen Person oder Organisation.

Definiere Löschung und Ablaufzeiten auch für abgeleitete Indizes. Prüfe, ob ein gelöschter Eintrag noch aus einem Cache oder einer Zusammenfassung zurückkehren kann.

## Übung

Ein Nutzer ändert seine bevorzugte Sprache. Warum genügt es nicht, die neue Angabe nur an den Gesprächsverlauf anzuhängen?

## Lösung und Selbstkontrolle

Spätere Abrufe könnten die alte Angabe höher gewichten. Aktualisiere den maßgeblichen Präferenzeintrag, behandle Widersprüche ausdrücklich und prüfe den nächsten Abruf. Historie und aktuell gültiger Zustand erfüllen unterschiedliche Zwecke.

## Quellen und Vertiefung

- [Effective context engineering — Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [Privacy Framework — NIST](https://www.nist.gov/privacy-framework)

## Weiterlernen

[Zurück: 08](08-agentic-ai.md) · [Übersicht](README.md) · [Weiter: 10](10-multi-agent-systems.md) · [English](../en/09-memory-tools-context.md)
