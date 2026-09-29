# Multi-Agent-Systeme

Teile Arbeit nur dann auf mehrere Agenten auf, wenn klare Zuständigkeiten und überprüfbare Übergaben entstehen.

## Lernziel

Du kannst Koordinationsmuster vergleichen und deren zusätzliche Kosten benennen. Mehrere Agenten sind mehrere Ausführungseinheiten, keine automatische Qualitätsgarantie. Sie können gemeinsame Fehlerquellen und dieselben falschen Annahmen teilen.

## Koordinationsmuster

| Muster | Geeignet für | Hauptrisiko |
| --- | --- | --- |
| Sequenzielle Übergabe | Abhängige Arbeitsschritte | Frühe Fehler wandern weiter |
| Parallele Teilaufgaben | Unabhängige Recherchen | Doppelte oder widersprüchliche Ergebnisse |
| Gemeinsamer Arbeitsstand | Zusammenarbeit am selben Problem | Gleichzeitige Schreibkonflikte |
| Koordinator mit Spezialisten | Unterschiedliche Fachgebiete | Engpass beim Koordinator |

Jede Übergabe braucht Ziel, Eingaben, erwartetes Format, Zeitbudget und ein prüfbares Ergebnis. Entscheide vorab, wer ein gemeinsames Artefakt verändern darf. Versionsprüfungen helfen, unbemerkte Überschreibungen zu vermeiden.

## Beispiel aus der Praxis

Eine Dokumentation erhält getrennte technische und sprachliche Reviews. Beide Prüfer liefern konkrete Fundstellen und Änderungsvorschläge. Ein verantwortlicher Integrationsschritt entscheidet über Widersprüche. Wenn beide Prüfer dieselbe unbelegte Behauptung übernehmen, ist ihre Übereinstimmung kein unabhängiger Beweis.

## Grenzen und Fehlerbilder

Nachrichten zwischen Agenten verbrauchen Kontext und Zeit. Parallele Arbeit spart nur dann Latenz, wenn die Aufgaben wirklich unabhängig sind und verfügbare Ressourcen ausreichen. Prüfe außerdem, ob vertrauliche Daten unnötig an weitere Ausführungseinheiten weitergegeben werden.

Vergleiche das Gesamtergebnis mit einem einzelnen Agenten: Erfolgsrate, zusätzliche Kosten, Integrationsaufwand und verlorene Informationen sind aussagekräftiger als die Anzahl der Beteiligten.

## Übung

Zwei Agenten ändern gleichzeitig dieselbe Datei. Welche zwei einfachen Maßnahmen verhindern stillen Datenverlust?

## Lösung und Selbstkontrolle

Vergib eindeutige Schreibzuständigkeiten oder getrennte Arbeitskopien. Prüfe beim Zusammenführen die Ausgangsversion und löse Konflikte ausdrücklich. Ein gemeinsames Chatprotokoll allein schützt keine Datei vor Überschreibung.

## Quellen und Vertiefung

- [Building effective agents — Anthropic (2024)](https://www.anthropic.com/engineering/building-effective-agents)

## Weiterlernen

[Zurück: 09](09-memory-tools-context.md) · [Übersicht](README.md) · [Weiter: 11](11-autonomy-evaluation.md) · [English](../en/10-multi-agent-systems.md)
