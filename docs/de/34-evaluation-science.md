# Evaluation und statistisches Denken

Formuliere messbare Qualitätsfragen und berichte Unsicherheit statt scheinbar endgültiger Ranglisten.

## Lernziel

Du kannst einen fairen Vergleich zweier Systemversionen planen. Ein Benchmark ist eine Stichprobe unter bestimmten Bedingungen. Seine Aussage hängt von Aufgabenauswahl, Bewertung und möglicher Datenüberschneidung ab.

## Versuchsplan

1. Ziel und Erfolgsdefinition vor dem Versuch festlegen.
2. Repräsentative Aufgaben nach wichtigen Gruppen auswählen.
3. Entwicklungssatz und abschließenden Testsatz trennen.
4. Beide Versionen auf vergleichbaren Aufgaben ausführen.
5. Fehlerarten, Kosten und Laufzeiten gemeinsam berichten.
6. Unsicherheit und Grenzen der Übertragbarkeit dokumentieren.

Bei subjektiven Kriterien benötigen Menschen eine gemeinsame Bewertungsrubrik. Ein automatischer Modellrichter kann helfen, muss aber gegen menschliche Bewertungen geprüft werden und kann eigene systematische Fehler haben.

## Beispiel mit Zahlen

Version A löst 42 von 50 Aufgaben, Version B 44. Das sind 84 und 88 Prozent. Die vier Prozentpunkte Unterschied beweisen allein keine verlässliche Verbesserung. Betrachte, welche Aufgaben gewechselt haben, wiederhole stochastische Läufe und verwende ein geeignetes Unsicherheitsverfahren.

## Grenzen und Fehlerbilder

Wenn der Testsatz regelmäßig zur Promptoptimierung genutzt wird, ist er kein unabhängiger Test mehr. Mehrere Antworten derselben Aufgabe sind zudem nicht automatisch unabhängige neue Aufgaben. Berücksichtige diese Gruppierung bei statistischen Auswertungen.

Ein Gesamtscore kann Rückschritte für eine Sprache oder schwierige Nutzergruppe verdecken. Berichte wichtige Teilgruppen. Dokumentiere auch fehlende oder abgebrochene Läufe; entferne sie nicht stillschweigend aus dem Nenner.

## Übung

Ein neues System verbessert den Durchschnitt, scheitert aber häufiger bei deutschsprachigen Fragen. Welche Freigabeentscheidung ist angemessen?

## Lösung und Selbstkontrolle

Prüfe die vorher festgelegten Qualitätsgrenzen pro Sprache. Der Durchschnitt allein rechtfertigt keine Freigabe. Untersuche die Fehlerfälle und entscheide anhand der tatsächlichen Anforderungen, ob die Verschlechterung akzeptabel ist.

## Quellen und Vertiefung

- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Weiterlernen

[Zurück: 33](33-multimodal-ai.md) · [Übersicht](README.md) · [Weiter: 35](35-privacy-engineering.md) · [English](../en/34-evaluation-science.md)
