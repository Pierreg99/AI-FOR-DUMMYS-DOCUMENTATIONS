# Tool-Protokolle und MCP

Trenne standardisierte Verbindung, Funktionsvertrag und tatsächliche Berechtigung.

## Lernziel

Du kannst Host, Client und Server in Model Context Protocol unterscheiden. MCP beschreibt eine standardisierte Kommunikation für Kontext und Funktionen. Es ersetzt weder die fachliche Bedeutung eines Tools noch die Sicherheitsentscheidung der Anwendung.

## Rollen und Verträge

| Element | Aufgabe |
| --- | --- |
| Host | Anwendung, die die Integration verwaltet |
| Client | Verbindung zu einem Server innerhalb des Hosts |
| Server | Fähigkeiten wie Tools, Ressourcen oder Prompts anbieten |
| Tool-Vertrag | Eingaben, Ergebnisse und mögliche Fehler definieren |

Ein Tool sollte Name, Zweck, Eingabeschema und Wirkung verständlich beschreiben. Ressourcen liefern Kontext; angebotene Prompts sind Vorlagen. Diese Funktionen verleihen einem Server keine Autorität über die Regeln des Hosts.

## Beispiel aus der Praxis

Ein Dokumentensuchtool akzeptiert `query` und `limit` und liefert Titel, Quelle und Textausschnitt. Der Server prüft die Identität und filtert Ergebnisse nach Zugriffsrechten. Der Host behandelt zurückgelieferte Texte als Inhalte, auch wenn sie Anweisungen enthalten.

## Grenzen und Fehlerbilder

Ein gültiges Schema beweist keine ungefährliche Wirkung. Ein Tool mit dem Namen „preview“ könnte trotzdem schreiben; Vertrag und Verhalten müssen übereinstimmen. Protokollversionen und unterstützte Fähigkeiten werden bewusst gewählt und getestet.

Transport, Authentifizierung, Timeouts und Fehlerbehandlung sind gesonderte Integrationsaufgaben. Speichere keine Zugangsdaten in Beispielen oder Modellprompts. Prüfe vor produktiver Nutzung die offizielle Dokumentation der tatsächlich eingesetzten Protokollversion.

## Übung

Ein MCP-Server bietet ein Löschwerkzeug an. Bedeutet seine Verfügbarkeit, dass der Agent es verwenden darf?

## Lösung und Selbstkontrolle

Nein. Der Host und der ausführende Dienst müssen Berechtigung, Aufgabe und konkreten Umfang prüfen. Discovery beschreibt vorhandene Fähigkeiten; sie erteilt keine pauschale Genehmigung.

## Quellen und Vertiefung

- [Model Context Protocol — Architecture](https://modelcontextprotocol.io/docs/learn/architecture)
- [OWASP Top 10 for LLM Applications](https://owasp.org/projects/top-10-for-large-language-model-applications)

## Weiterlernen

[Zurück: 26](26-durable-state-machines.md) · [Übersicht](README.md) · [Weiter: 28](28-memory-retrieval-evaluation.md) · [English](../en/27-tool-protocols-mcp.md)
