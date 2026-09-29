# Ereignisgesteuerte Orchestrierung

Verbinde lose gekoppelte Arbeitsschritte mit identifizierbaren Ereignissen und kontrollierter Zustellung.

## Lernziel

Du kannst ein Ereignis von einem Befehl unterscheiden. Ein Ereignis beschreibt etwas Geschehenes, etwa „Dokument aktualisiert“. Ein Befehl fordert eine Handlung, etwa „Index neu aufbauen“. Diese Unterscheidung hilft bei Verantwortlichkeit und Wiederholung.

## Ein brauchbarer Ereignisvertrag

| Feld | Zweck |
| --- | --- |
| ID | Zustellung und Deduplizierung zuordnen |
| Typ und Schemaversion | Bedeutung und Format festlegen |
| Quelle und Zeitpunkt | Herkunft und zeitlichen Kontext erhalten |
| Ressourcenkennung | Betroffenes Objekt identifizieren |
| Korrelation | Ereignisse derselben Aufgabe verbinden |

Standards wie CloudEvents vereinheitlichen Metadaten. Sie legen nicht automatisch die fachliche Bedeutung, Reihenfolge oder Zustellgarantie deiner Anwendung fest.

## Beispiel aus der Praxis

Nach einer Dokumentänderung entsteht ein Ereignis. Ein Index-Worker verarbeitet es und schreibt die Dokumentversion in den Suchindex. Wird dieselbe Nachricht erneut zugestellt, erkennt er die bereits verarbeitete Version. Trifft danach eine ältere Version ein, darf sie den neueren Stand nicht überschreiben.

## Grenzen und Fehlerbilder

Mindestens-einmal-Zustellung kann Duplikate erzeugen. Reihenfolge ist oft nur innerhalb bestimmter Schlüssel oder Partitionen garantiert. Benenne den Geltungsbereich ausdrücklich. Fehlerhafte Ereignisse benötigen nach begrenzten Versuchen eine gesonderte Warteschlange und eine verantwortliche Bearbeitung.

Backpressure begrenzt die Aufnahme neuer Arbeit, wenn Verbraucher nicht nachkommen. Miss Alter der ältesten Nachricht, Wiederholungsquote, Verarbeitungsdauer und Fehlerbestand. Eine leere Fehlerliste hilft wenig, wenn Nachrichten unbegrenzt warten.

## Übung

Ein Ereignis mit Version 4 trifft nach Version 5 ein. Was sollte der Index-Worker tun?

## Lösung und Selbstkontrolle

Die Versionsordnung prüfen und den veralteten Schreibversuch überspringen oder gesondert behandeln. Zustellreihenfolge allein ist keine verlässliche Quelle für den aktuellen fachlichen Stand.

## Quellen und Vertiefung

- [CloudEvents — Specification and project](https://cloudevents.io/)
- [Temporal — Workflow execution](https://docs.temporal.io/workflow-execution)

## Weiterlernen

[Zurück: 30](30-tool-security.md) · [Übersicht](README.md) · [Weiter: 32](32-retrieval-optimization.md) · [English](../en/31-event-driven-orchestration.md)
