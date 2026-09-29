# Praxisprojekte

Drei kleine Übungen verbinden die Kapitel mit ausführbaren, lokalen Beispielen.

## Projekt 1: Eine Suche verstehen

Führe im Repository `python examples/retrieval.py --lang de --query "Rückgabe"` aus. Das Skript durchsucht drei Beispieldokumente anhand gemeinsamer Wörter. Es nutzt kein Sprachmodell und keine Embeddings. Das macht die Grenzen der Baseline sichtbar.

Prüfe eine bekannte Frage, eine unbekannte Frage und eine englische Frage mit `--lang en`. Erfolg bedeutet: Ein passender Treffer erscheint oder es wird ausdrücklich kein Treffer gemeldet. Lies anschließend [Retrieval-Optimierung](32-retrieval-optimization.md).

## Projekt 2: Wiederholungen ohne doppelte Wirkung

Führe `python examples/durable_job.py` aus. Ein lokales SQLite-Beispiel verarbeitet dieselbe Vorgangskennung zweimal und speichert nur einen Effekt. Zustand und Effekt liegen absichtlich in derselben Datenbanktransaktion.

Erfolg bedeutet: Ein Effekt nach zwei Aufrufen. Überlege danach, warum dies eine externe API nicht automatisch einschließt. Lies [Recovery](26-durable-state-machines.md). Das Beispiel verwendet eine temporäre Datenbank und löscht sie nach dem Lauf.

## Projekt 3: Eine Evaluation lesen

Führe `python examples/evaluate.py` aus. Acht gekennzeichnete Demonstrationsfälle werden insgesamt und je Sprache ausgewertet. Die Daten sind synthetisch und kein Anbieterbenchmark.

Erfolg bedeutet: Du kannst erklären, warum die Gesamtrate den Sprachunterschied verdeckt. Verändere einen Fall und berechne das Ergebnis zunächst von Hand. Lies [Evaluation](34-evaluation-science.md).

## Ergebnisse festhalten

Dokumentiere Aufgabe, Eingabe, erwartetes Ergebnis, beobachtetes Ergebnis und einen nächsten Verbesserungsschritt. Verwende für die Übungen keine personenbezogenen oder vertraulichen Daten. Die Beispiele benötigen nur die Python-Standardbibliothek.
