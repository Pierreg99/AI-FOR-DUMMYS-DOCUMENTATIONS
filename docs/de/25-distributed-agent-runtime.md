# Verteilte Agenten-Laufzeiten

Koordiniere mehrere Worker mit dauerhaftem Zustand, klarer Zuständigkeit und begrenzter Last.

## Lernziel

Du kannst erklären, weshalb ein Prozessspeicher keine ausreichende Quelle für einen verteilten Ausführungszustand ist. Worker können ausfallen oder denselben Auftrag gleichzeitig sehen. Die Laufzeit muss diese Fälle ausdrücklich behandeln.

## Verantwortlichkeiten

| Komponente | Aufgabe |
| --- | --- |
| Warteschlange | Ausstehende Arbeit bereitstellen |
| Scheduler | Arbeit und Ressourcen zuordnen |
| Lease | Zeitlich begrenzte Bearbeitungszuständigkeit vergeben |
| Zustandsspeicher | Fortschritt und Version dauerhaft halten |
| Worker | Begrenzte Arbeitseinheit ausführen |

Eine Lease kann ablaufen, während ein langsamer Worker noch arbeitet. Ein neuer Worker und der alte Worker dürfen dann nicht beide unkontrolliert schreiben. Versionsprüfungen oder Fencing Tokens helfen, veraltete Schreibversuche abzuweisen.

## Beispiel aus der Praxis

Worker A übernimmt einen Dokumentenimport und verliert die Verbindung. Nach Ablauf seiner Lease übernimmt Worker B. Beide verwenden dieselbe Importkennung. Die Speicherung akzeptiert die aktuelle Zuständigkeit und erkennt bereits verarbeitete Dokumentversionen. Dadurch wird der Import nicht unbemerkt doppelt wirksam.

## Grenzen und Fehlerbilder

Herzschläge zeigen Erreichbarkeit, beweisen aber keinen Fortschritt. Große Warteschlangen erhöhen Latenz; begrenze gleichzeitig laufende Aufträge und reagiere auf Überlast. Ein Neustart darf nicht alle offenen Aufgaben vergessen.

Miss Warteschlangenalter, Lease-Verluste, doppelte Zustellungen und Wiederherstellungsdauer. Nutze für Kundengruppen getrennte Budgets, damit ein großer Auftrag andere nicht vollständig verdrängt.

## Übung

Warum schützt eine abgelaufene Lease allein nicht vor einer verspäteten Schreibaktion?

## Lösung und Selbstkontrolle

Der alte Worker kann weiterlaufen. Die Zielseite muss seine veraltete Zuständigkeit erkennen und den Schreibversuch ablehnen. Ein Timer beim Scheduler verhindert keinen entfernten Seiteneffekt.

## Quellen und Vertiefung

- [Temporal — Workflow execution](https://docs.temporal.io/workflow-execution)

## Weiterlernen

[Zurück: 24](24-agent-testing.md) · [Übersicht](README.md) · [Weiter: 26](26-durable-state-machines.md) · [English](../en/25-distributed-agent-runtime.md)
