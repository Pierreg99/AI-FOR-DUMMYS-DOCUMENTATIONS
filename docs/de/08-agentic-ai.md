# Agentische KI und Workflows

Wähle einen festen Ablauf, einen Agenten oder eine Kombination passend zur tatsächlichen Aufgabe.

## Lernziel

Du kannst begründen, welche Teile einer Aufgabe deterministisch und welche adaptiv sein sollten. Ein Workflow besitzt einen weitgehend vorab definierten Kontrollpfad. Ein Agent kann seine nächsten Schritte anhand neuer Beobachtungen verändern. Beide können Sprachmodelle verwenden.

## Entscheidungshilfe

| Situation | Geeigneter Ausgangspunkt |
| --- | --- |
| Gleiche Schritte, klares Schema | Deterministischer Workflow |
| Unterschiedliche Eingaben, wenige bekannte Wege | Klassifikation und Routing |
| Unvorhersehbare Zwischenschritte | Begrenzter Agent mit Werkzeugen |
| Sensible Ausführung nach flexibler Recherche | Agent für Entwurf, geprüfter Workflow für Ausführung |

Beginne mit der einfachsten Variante, die die Abnahmekriterien erreicht. Ein zusätzlicher Modellaufruf kostet Zeit und schafft eine weitere Fehlerquelle. Seine Wirkung sollte messbar sein.

## Beispiel aus der Praxis

Eine Rechnung wird eingelesen, Felder werden extrahiert und gegen Pflichtregeln geprüft. Dieser Ablauf eignet sich für einen Workflow. Bei fehlenden Angaben kann ein Modell eine Rückfrage entwerfen. Eine Zahlung bleibt ein gesonderter, berechtigungsgeprüfter Schritt und folgt nicht automatisch aus einem plausiblen Extraktionsergebnis.

## Grenzen und Fehlerbilder

Zu starre Workflows scheitern an ungeplanten Fällen. Zu freie Agenten können einfache Aufgaben unnötig verlängern. Halte für beide Varianten einen Abbruchpfad bereit: unvollständige Eingaben zurückgeben, menschliche Prüfung auslösen oder kontrolliert stoppen.

Vergleiche dieselben Aufgaben hinsichtlich Korrektheit, Bearbeitungsdauer, Kosten und Eingriffen. Ein höherer Automatisierungsgrad ist nur dann nützlich, wenn die Ergebnisse im vorgesehenen Einsatz besser werden.

## Übung

Ein System muss jede Nacht dieselben drei Berichte erstellen. Braucht es einen frei planenden Agenten?

## Lösung und Selbstkontrolle

Wahrscheinlich reicht ein geplanter Workflow mit drei überprüfbaren Schritten. Ein Modell kann einzelne Berichtstexte verfassen. Dynamische Planung wird erst sinnvoll, wenn reale Anforderungen die feste Reihenfolge unzureichend machen.

## Quellen und Vertiefung

- [Building effective agents — Anthropic (2024)](https://www.anthropic.com/engineering/building-effective-agents)

## Weiterlernen

[Zurück: 07](07-ai-agents.md) · [Übersicht](README.md) · [Weiter: 09](09-memory-tools-context.md) · [English](../en/08-agentic-ai.md)
