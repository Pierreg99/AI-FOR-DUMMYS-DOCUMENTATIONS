# KI-Grundlagen

Unterscheide Modell, Anwendung und Autonomie, bevor du ein KI-System auswählst.

## Lernziel

Du kannst eine KI-Anwendung anhand ihrer Aufgabe, Daten und Grenzen beschreiben. Künstliche Intelligenz umfasst unterschiedliche Verfahren für Wahrnehmung, Lernen, Planung und Entscheidungen. Nicht jede KI lernt aus Daten: Ein regelbasiertes Expertensystem kann Wissen ausdrücklich kodieren.

## Das Grundmodell

Ein Modell ist eine Komponente. Eine Anwendung ergänzt Datenzugriff, Bedienoberfläche, Berechtigungen und Fehlerbehandlung. Ein Spamfilter ordnet Nachrichten ein; ein Assistent kann zusätzlich Nachrichten entwerfen. Erst eine Ausführungsumgebung entscheidet, ob und wie dieser Entwurf versendet wird.

| Dimension | Leitfrage | Beispiel |
| --- | --- | --- |
| Leistung | Wie gut löst das System eine Aufgabe? | Anteil korrekt erkannter Spamnachrichten |
| Breite | Welche Aufgaben beherrscht es? | Nur E-Mail oder auch Bilder? |
| Autonomie | Welche Entscheidungen darf es selbst treffen? | Markieren, verschieben oder löschen? |

Diese Dimensionen sind getrennt. Mehr Berechtigungen verbessern nicht automatisch die Qualität eines Modells.

## Beispiel aus der Praxis

Ein Team bearbeitet 100 Anfragen täglich. Eine regelbasierte Suche findet bekannte Bestellnummern zuverlässig. Ein Sprachmodell formuliert anschließend eine verständliche Antwort aus dem gefundenen Datensatz. Für diesen Ablauf ist kein frei planender Agent erforderlich. Die Kombination ist leichter zu prüfen, weil Datenabruf und Textentwurf getrennte Verantwortlichkeiten haben.

## Grenzen und Fehlerbilder

Eine flüssige Antwort beweist weder Wahrheit noch Verständnis. Ein gutes Ergebnis auf Beispieldaten sagt wenig über unbekannte Fälle aus. Definiere deshalb vor der Auswahl eine einfache Vergleichslösung und einen repräsentativen Testsatz. Zähle auch fälschlich abgelehnte legitime Nachrichten, nicht nur erkannte Spamnachrichten.

## Übung

Beschreibe einen Kalenderassistenten mit den drei Dimensionen. Welche zusätzliche Kontrolle benötigt er, wenn er Termine buchen darf?

## Lösung und Selbstkontrolle

Leistung betrifft korrekte Zeiten und Teilnehmer, Breite die unterstützten Terminarten, Autonomie die zulässigen Aktionen. Vor einer Buchung braucht die Anwendung eine konkrete Prüfung von Kalender, Zeitpunkt und Berechtigung. Gute Formulierungen ersetzen diese Prüfung nicht.

## Quellen und Vertiefung

- [Levels of AGI — Morris et al.](https://arxiv.org/abs/2311.02462)
- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Weiterlernen

[Übersicht](README.md) · [Weiter: 02](02-machine-learning.md) · [English](../en/01-ai-fundamentals.md)
