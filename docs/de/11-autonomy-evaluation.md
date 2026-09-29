# Autonomie, Evaluation und Zuverlässigkeit

Bewerte abgeschlossene Aufgaben, tatsächliche Seiteneffekte und Fehlerbehandlung gemeinsam.

## Lernziel

Du kannst einen Agententest so beschreiben, dass sein Ergebnis nachprüfbar ist. Ein schöner Antworttext reicht nicht: Das System muss das richtige Ziel mit zulässigen Mitteln erreichen. Lege vor dem Test fest, welche Zustände als Erfolg, Fehlschlag oder ungeklärtes Ergebnis zählen.

## Sinnvolle Messgrößen

| Messgröße | Aussage |
| --- | --- |
| Aufgabenerfolg | Anteil erfolgreich abgeschlossener Versuche |
| Tool-Korrektheit | Passende Werkzeuge und Argumente |
| Wiederherstellung | Erfolg nach vorgesehenen Störungen |
| Menschliche Eingriffe | Benötigte Unterstützung pro Aufgabe |
| Kosten und Latenz | Aufwand bis zum überprüften Ergebnis |

Miss außerdem unerlaubte Aktionen unabhängig vom Erfolg. Eine richtige Endantwort rechtfertigt keinen unerlaubten Datenzugriff.

## Beispiel mit Zahlen

Von 50 Aufgaben werden 42 vollständig gelöst: Die beobachtete Erfolgsrate beträgt 84 Prozent. Berichte auch Aufgabenauswahl und Anzahl der Wiederholungen. Ein kleiner, leichter Testsatz erlaubt keine Aussage über beliebige Aufgaben.

Für zehn unabhängige Schritte mit jeweils 95 Prozent Erfolgswahrscheinlichkeit ergibt das vereinfachte Modell `0.95^10` ungefähr 59,9 Prozent Gesamterfolg. Reale Fehler sind häufig abhängig; die Rechnung ist eine Illustration, keine Produktionsprognose.

## Grenzen und Fehlerbilder

Ein Durchschnitt kann seltene, schwerwiegende Fehler verdecken. Gruppiere Ergebnisse nach Aufgabentyp und Schwierigkeit. Bewahre Modell-, Prompt-, Tool- und Datenversionen auf. Bei stochastischen Systemen helfen wiederholte Läufe und Unsicherheitsangaben.

Ein anhand menschlicher Bearbeitungszeit definierter Aufgabenschwierigkeitsgrad ist nicht automatisch die Dauer, die ein Agent unbeaufsichtigt arbeiten kann.

## Übung

Ein System löst neun von zehn Aufgaben, führt dabei aber einmal eine nicht autorisierte Aktion aus. Ist „90 Prozent erfolgreich“ ausreichend?

## Lösung und Selbstkontrolle

Nein. Berichte die Erfolgsrate zusammen mit dem Berechtigungsverstoß und einer eigenen Freigaberegel. Erfolg und zulässiges Verhalten sind getrennte Anforderungen; ein kritischer Verstoß kann eine Veröffentlichung verhindern.

## Quellen und Vertiefung

- [Levels of AGI — Morris et al.](https://arxiv.org/abs/2311.02462)
- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Weiterlernen

[Zurück: 10](10-multi-agent-systems.md) · [Übersicht](README.md) · [Weiter: 12](12-agi.md) · [English](../en/11-autonomy-evaluation.md)
