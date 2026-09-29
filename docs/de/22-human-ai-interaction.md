# Menschliche Kontrolle und Freigaben

Gestalte Freigaben so, dass Menschen die konkrete Wirkung einer Aktion beurteilen können.

## Lernziel

Du kannst zwischen Entwurf, Genehmigung und Ausführung unterscheiden. Menschliche Kontrolle ist besonders hilfreich an klaren Entscheidungsstellen. Zu viele belanglose Rückfragen erzeugen Gewöhnung; zu wenig Information macht eine Zustimmung wertlos.

## Inhalt einer guten Freigabe

| Bestandteil | Beispiel |
| --- | --- |
| Aktion | Drei Dateien aktualisieren |
| Betroffene Ressourcen | Exakte Dateinamen und Versionen |
| Änderung | Sichtbarer Unterschied zum bisherigen Stand |
| Wirkung | Veröffentlichung oder nur interner Entwurf |
| Gültigkeit | Freigabe für genau diesen Vorschlag |

Eine Zustimmung sollte an einen konkreten Änderungsstand gebunden sein. Wenn sich Empfänger, Ressourcen oder Inhalt danach ändern, muss die Anwendung prüfen, ob die Freigabe noch gilt.

## Beispiel aus der Praxis

Ein Agent bereitet eine neue Produktbeschreibung vor. Die prüfende Person sieht den bisherigen und neuen Text sowie das Veröffentlichungsziel. Nach der Freigabe wird genau diese Fassung veröffentlicht. Scheitert der Vorgang, zeigt das System den tatsächlichen Zustand und bietet einen nachvollziehbaren Wiederholungsweg.

## Grenzen und Fehlerbilder

Ein Dialog mit „Fortfahren?“ ohne Details überträgt keine sinnvolle Kontrolle. Eine zeitlich unbegrenzte Zustimmung kann später missbraucht werden. Protokolliere Entscheidung, Zeitpunkt, Vorschlagsversion und ausführende Identität, ohne unnötige persönliche Inhalte zu sammeln.

Barrierefreie Bedienung ist Teil der Kontrolle: Schaltflächen brauchen klare Namen, Tastaturbedienung und sichtbaren Fokus. Nutzer müssen ablehnen oder abbrechen können, ohne versehentlich die Standardaktion auszulösen.

## Übung

Nach einer Freigabe ändert der Agent die Zieladresse einer Veröffentlichung. Darf er automatisch fortfahren?

## Lösung und Selbstkontrolle

Die ursprüngliche Zustimmung deckt die geänderte Wirkung nicht automatisch ab. Stoppe die Ausführung und prüfe den neuen Vorschlag nach den festgelegten Freigaberegeln.

## Quellen und Vertiefung

- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)
- [Building effective agents — Anthropic (2024)](https://www.anthropic.com/engineering/building-effective-agents)

## Weiterlernen

[Zurück: 21](21-inference-serving.md) · [Übersicht](README.md) · [Weiter: 23](23-governance-risk.md) · [English](../en/22-human-ai-interaction.md)
