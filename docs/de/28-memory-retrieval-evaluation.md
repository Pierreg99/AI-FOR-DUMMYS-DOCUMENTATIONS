# Gedächtnis und Retrieval-Evaluation

Prüfe, ob gespeicherte Informationen bei späteren Aufgaben relevant, aktuell und korrekt zugeordnet sind.

## Lernziel

Du kannst einen kleinen Testsatz für ein Gedächtnissystem aufbauen. Gute Speicherung allein reicht nicht: Der Abruf muss die richtige Information für die richtige Person zum richtigen Zeitpunkt liefern.

## Vier Prüfdimensionen

| Dimension | Testfrage |
| --- | --- |
| Relevanz | Hilft die Erinnerung bei der aktuellen Aufgabe? |
| Aktualität | Wurde eine spätere Korrektur berücksichtigt? |
| Zuordnung | Gehört die Information zum richtigen Konto? |
| Löschung | Verschwindet sie auch aus abgeleiteten Speichern? |

Erstelle Testfälle mit ursprünglicher Aussage, Korrektur, späterer Frage und erwarteter gültiger Information. Ergänze Fälle ohne passende Erinnerung. Das System sollte fehlendes Wissen erkennen können.

## Beispiel mit Zahlen

Für eine Frage gibt es vier relevante gespeicherte Einträge. Unter fünf abgerufenen Treffern sind drei davon enthalten. Dann beträgt `Precision@5 = 3/5 = 0,6` und `Recall@5 = 3/4 = 0,75`. Diese Rechnung setzt einen vollständig bekannten Relevanzsatz voraus.

## Grenzen und Fehlerbilder

Eine ähnliche Formulierung kann einen anderen Nutzer oder Zeitpunkt betreffen. Semantische Nähe ist deshalb kein ausreichender Gültigkeitsnachweis. Filtere Identität und Berechtigung vor der Antwortbildung und berücksichtige widersprüchliche Versionen.

Bewerte den Nutzen außerdem an der späteren Aufgabe. Ein relevantes Suchergebnis kann in der Antwort falsch wiedergegeben werden. Ein Gedächtnissystem sollte Herkunft offenlegen und Korrekturen ermöglichen, statt alte Vermutungen dauerhaft zu verstärken.

## Übung

Eine gelöschte Präferenz erscheint erneut in einer Antwort. Welche Speicher untersuchst du?

## Lösung und Selbstkontrolle

Primärspeicher, Suchindex, Cache, Zusammenfassungen und eventuell gespeicherte Gesprächsausschnitte. Prüfe danach mit derselben Frage, ob die Löschung in allen verwendeten Abrufpfaden wirksam ist.

## Quellen und Vertiefung

- [Effective context engineering — Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [Privacy Framework — NIST](https://www.nist.gov/privacy-framework)

## Weiterlernen

[Zurück: 27](27-tool-protocols-mcp.md) · [Übersicht](README.md) · [Weiter: 29](29-context-engineering.md) · [English](../en/28-memory-retrieval-evaluation.md)
