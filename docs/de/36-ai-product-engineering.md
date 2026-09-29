# KI-Produktentwicklung und Wirtschaftlichkeit

Verbinde Nutzererfolg, Qualität, Kapazität und Kosten zu einer überprüfbaren Produktentscheidung.

## Lernziel

Du kannst eine KI-Funktion anhand des gelösten Nutzerproblems bewerten. Eine beeindruckende Demo reicht nicht für einen tragfähigen Betrieb. Entscheidend sind wiederholbar nützliche Ergebnisse bei vertretbarem Aufwand.

## Ein vollständigeres Kostenmodell

| Kostenblock | Beispiele |
| --- | --- |
| Modell | Eingabe, Ausgabe und Wiederholungen |
| Daten und Werkzeuge | Suche, APIs und Aktualisierung |
| Infrastruktur | Rechenleistung, Speicher und Netzwerk |
| Betrieb | Überwachung, Support und Vorfälle |
| Menschliche Arbeit | Prüfung, Korrektur und Ausnahmefälle |

Miss Kosten pro erfolgreich gelöster Aufgabe. Definiere Erfolg gemeinsam mit den Nutzern, etwa eine korrekt abgeschlossene Anfrage statt eines bloß erzeugten Antworttexts.

## Beispiel mit Zahlen

100 Aufgaben verursachen 20 Euro Systemkosten und 30 Euro Prüfaufwand. 80 Aufgaben bestehen die Abnahme. Die Gesamtkosten pro Erfolg betragen `50 / 80 = 0,625 Euro`. Ein Modell mit niedrigeren Tokenkosten kann trotzdem teurer sein, wenn mehr Antworten nachbearbeitet werden müssen.

## Grenzen und Fehlerbilder

Durchschnittslast reicht nicht zur Kapazitätsplanung. Berücksichtige Spitzen, lange Eingaben und Ausfälle externer Dienste. Caching, Routing und kleinere Modelle sind mögliche Hebel, deren Qualität jeweils geprüft werden muss.

Ein lokaler Pilot benötigt andere Betriebsentscheidungen als ein öffentlicher Dienst. Definiere Eigentümer, Qualitätsziele, Kostenbudget, Rückfalloption und Abschaltkriterien. Behalte den manuellen Ausgangsprozess als Vergleich, statt ausschließlich zwei KI-Varianten zu vergleichen.

## Übung

Eine neue Version halbiert Modellkosten, verdoppelt aber menschlichen Prüfaufwand. Ist sie wirtschaftlicher?

## Lösung und Selbstkontrolle

Das lässt sich erst aus Gesamtkosten und Erfolgsrate beantworten. Rechne Modell-, Betriebs- und menschlichen Aufwand zusammen und vergleiche dieselben Aufgaben. Berücksichtige zusätzlich Bearbeitungsdauer und Fehlerfolgen.

## Quellen und Vertiefung

- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)
- [OpenTelemetry — Signals](https://opentelemetry.io/docs/concepts/signals/)

## Weiterlernen

[Zurück: 35](35-privacy-engineering.md) · [Übersicht](README.md) · [English](../en/36-ai-product-engineering.md)
