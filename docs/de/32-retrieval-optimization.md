# Retrieval-Optimierung und Suchqualität

Verbessere Suchergebnisse anhand bekannter relevanter Belege und überprüfbarer Fragen.

## Lernziel

Du kannst Chunking, Suchverfahren und Reranking getrennt bewerten. Eine Suche ist gut, wenn passende, zulässige Informationen rechtzeitig verfügbar sind. Ein hoher Ähnlichkeitsscore allein beweist das nicht.

## Optimierungshebel

| Hebel | Nutzen | Risiko |
| --- | --- | --- |
| Sinnvolle Abschnittsgrenzen | Aussagen bleiben zusammen | Sehr große Chunks enthalten Ablenkung |
| Keyword-Suche | Exakte Begriffe und Kennungen | Andere Formulierungen werden übersehen |
| Vektorsuche | Semantisch ähnliche Inhalte | Ähnliche, aber falsche Inhalte |
| Hybride Suche | Ergänzende Signale | Zusätzliche Abstimmung |
| Reranking | Kandidaten genauer ordnen | Mehr Zeit und Rechenaufwand |

Beginne mit einer einfachen Baseline. Ändere jeweils eine wichtige Variable und vergleiche denselben Fragensatz. Sonst bleibt unklar, welche Änderung geholfen hat.

## Beispiel aus der Praxis

Eine Frage enthält die Produktkennung `AX-204`. Exakte Suche findet den richtigen Datensatz, während rein semantische Suche ähnliche Produkte bevorzugt. Eine kombinierte Suche erhält den exakten Treffer und ergänzt passende Erklärungen. Ein anschließendes Reranking darf Zugriffsfilter nicht umgehen.

## Grenzen und Fehlerbilder

Recall misst gefundene relevante Belege, Precision den relevanten Anteil der Treffer. Rangmetriken wie MRR betonen, wie früh ein relevanter Treffer erscheint. Keine dieser Größen beweist allein eine korrekte generierte Antwort.

Bewerte deutsche und englische Fragen getrennt, einschließlich Übersetzungen und gemischter Fachbegriffe. Teste außerdem leere Anfragen, unbekannte Kennungen und Fragen ohne vorhandene Antwort. Mehr Treffer können die Antwort verschlechtern, wenn sie den Kontext mit Widersprüchen füllen.

## Übung

Warum ist ein Testsatz aus automatisch erzeugten Fragen zu denselben Chunks möglicherweise zu leicht?

## Lösung und Selbstkontrolle

Die Fragen können Wortlaut und Struktur der Quellen spiegeln. Ergänze echte Nutzerformulierungen, schwierige Gegenbeispiele und Fälle ohne Antwort. Halte Testfragen von der Optimierung getrennt.

## Quellen und Vertiefung

- [Retrieval-Augmented Generation — Lewis et al.](https://arxiv.org/abs/2005.11401)

## Weiterlernen

[Zurück: 31](31-event-driven-orchestration.md) · [Übersicht](README.md) · [Weiter: 33](33-multimodal-ai.md) · [English](../en/32-retrieval-optimization.md)
