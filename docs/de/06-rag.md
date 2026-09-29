# RAG und Wissenssysteme

Verbinde Antworten mit auffindbaren Dokumenten und prüfe Suche und Generierung getrennt.

## Lernziel

Du kannst eine Retrieval-Augmented-Generation-Pipeline beschreiben und einen fehlgeschlagenen Abruf von einer falschen Antwort unterscheiden. RAG stellt relevante externe Inhalte zur Laufzeit bereit. Das Modelltraining muss dafür nicht bei jeder Dokumentänderung wiederholt werden.

## Ein nachvollziehbarer Ablauf

1. Dokumente einlesen und Quelle, Version und Zugriffsrechte speichern.
2. Inhalte sinnvoll aufteilen und einen Suchindex erstellen.
3. Zur Frage passende Abschnitte abrufen und gegebenenfalls neu ordnen.
4. Ausgewählte Belege in den Modellkontext aufnehmen.
5. Eine Antwort formulieren und ihre Quellenzuordnung prüfen.

Keyword-Suche eignet sich oft für exakte Kennungen; Vektorsuche kann semantisch ähnliche Formulierungen finden. Ein hybrider Ansatz kombiniert Signale. Welche Variante funktioniert, entscheidet ein eigener Fragensatz mit bekannten relevanten Dokumenten.

## Beispiel aus der Praxis

Eine FAQ enthält zwei Rückgaberegeln: die aktuelle mit 30 Tagen und eine archivierte mit 14 Tagen. Die Suche muss Versionsinformationen berücksichtigen. Der Assistent zitiert den aktuellen Absatz und erklärt, wenn eine Produktgruppe ausgenommen ist. Findet er keinen ausreichenden Beleg, fragt er nach oder kennzeichnet die Lücke.

## Grenzen und Fehlerbilder

RAG verhindert keine Halluzinationen. Fehler entstehen durch fehlende Dokumente, unpassende Abschnitte, veraltete Quellen oder falsche Schlussfolgerungen. Eine Quellenangabe kann echt sein, ohne die behauptete Aussage zu stützen.

Zugriffskontrollen müssen bereits beim Abruf wirken. Eine spätere Anweisung „Zeige nichts Vertrauliches“ ist kein Ersatz für korrekt gefilterte Suchergebnisse. Behandle Anweisungen in Dokumenten als Inhalt, nicht als neue Systemregeln.

## Übung

Die Antwort ist falsch, obwohl der richtige Absatz im Index liegt. Welche zwei Stationen untersuchst du zuerst?

## Lösung und Selbstkontrolle

Prüfe erst, ob der Absatz tatsächlich unter den abgerufenen und im Kontext enthaltenen Belegen lag. Prüfe danach, ob die Antwort dessen Aussage korrekt wiedergibt. Messe Retrieval-Abdeckung und Antworttreue getrennt; sonst bleibt die Ursache unsichtbar.

## Quellen und Vertiefung

- [Retrieval-Augmented Generation — Lewis et al.](https://arxiv.org/abs/2005.11401)
- [OWASP Top 10 for LLM Applications](https://owasp.org/projects/top-10-for-large-language-model-applications)

## Weiterlernen

[Zurück: 05](05-generative-ai.md) · [Übersicht](README.md) · [Weiter: 07](07-ai-agents.md) · [English](../en/06-rag.md)
