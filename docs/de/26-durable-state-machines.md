# Dauerhafte Zustandsautomaten und Recovery

Speichere Ausführungszustände so, dass Unterbrechungen kontrolliert behandelt werden können.

## Lernziel

Du kannst erlaubte Zustandsübergänge und ungeklärte externe Wirkungen beschreiben. Ein dauerhafter Zustandsautomat macht Fortschritt unabhängig vom Lebenszyklus eines einzelnen Prozesses.

## Ein kleines Zustandsmodell

| Zustand | Möglicher nächster Zustand |
| --- | --- |
| Bereit | Läuft, abgebrochen |
| Läuft | Wartet, erfolgreich, fehlgeschlagen, ungeklärt |
| Wartet | Läuft, abgebrochen |
| Ungeklärt | Abgeglichen, menschliche Prüfung |
| Erfolgreich | Endzustand |

Ein Checkpoint enthält Ausführungs-ID, Zustandsversion, bestätigte Ergebnisse und offene Aktionen. Er sollte keine unbestätigte Vermutung als erfolgreichen Schritt speichern.

## Beispiel aus der Praxis

Ein Ticketdienst nimmt eine Anfrage an, aber die Antwort geht verloren. Der Agent weiß nicht, ob das Ticket existiert. Statt eine neue Anfrage mit neuer Kennung zu senden, fragt er den Vorgang anhand der ursprünglichen Kennung ab. Erst nach dem Abgleich wird der Zustand als erfolgreich oder erneut ausführbar markiert.

## Grenzen und Fehlerbilder

Ein lokaler Datenbank-Commit und eine externe API-Aktion sind nicht automatisch atomar. Idempotenz, Outbox-Muster und Abgleich können diese Lücke behandeln, benötigen aber passende Verträge. „Genau einmal“ ist ohne klar benannten Geltungsbereich keine belastbare Zusage.

Wiederholungen erhalten Grenzen und Verzögerungen. Dauerhafte fachliche Fehler, etwa fehlende Berechtigung, werden nicht endlos wiederholt. Ein kompensierender Vorgang ist zudem nicht immer ein vollständiges Rückgängigmachen: Eine versandte Nachricht kann nicht ungelesen gemacht werden.

## Übung

Was sollte passieren, wenn der Prozess direkt nach einem externen Schreibvorgang abstürzt?

## Lösung und Selbstkontrolle

Die Wiederaufnahme prüft den dokumentierten Vorgang und gleicht seine Wirkung ab. Sie führt ihn nur unter den vereinbarten Idempotenzbedingungen erneut aus und dokumentiert verbleibende Unsicherheit.

## Quellen und Vertiefung

- [Temporal — Workflow execution](https://docs.temporal.io/workflow-execution)

## Weiterlernen

[Zurück: 25](25-distributed-agent-runtime.md) · [Übersicht](README.md) · [Weiter: 27](27-tool-protocols-mcp.md) · [English](../en/26-durable-state-machines.md)
