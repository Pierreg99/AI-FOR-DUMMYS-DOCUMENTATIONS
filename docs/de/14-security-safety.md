# Sicherheit und Schutzmaßnahmen

Begrenze, was ein KI-System lesen und verändern darf, und prüfe jede folgenreiche Aktion außerhalb des Modells.

## Lernziel

Du kannst Prompt Injection von einem gewöhnlichen sachlichen Fehler unterscheiden. Bei Prompt Injection versucht nicht vertrauenswürdiger Inhalt, das Verhalten des Systems umzulenken. Ein Dokument könnte etwa behaupten, seine Anweisungen seien wichtiger als die eigentliche Aufgabe.

## Schutzschichten

| Grenze | Technische Kontrolle |
| --- | --- |
| Datenzugriff | Identität und Berechtigungen vor dem Abruf prüfen |
| Werkzeugaufruf | Erlaubte Funktion und Argumente validieren |
| Netzwerk | Zulässige Ziele begrenzen |
| Schreibaktion | Konkreten Umfang und gegebenenfalls Freigabe prüfen |
| Betrieb | Fehler protokollieren und Ausführung stoppen können |

Eine Textanweisung allein ist keine Sicherheitsgrenze. Die Laufzeit muss Aktionen auch dann ablehnen, wenn das Modell sie überzeugend begründet.

## Beispiel aus der Praxis

Ein abgerufenes Dokument fordert, eine geheime Konfiguration an eine fremde URL zu senden. Das System behandelt diese Aufforderung als Dokumentinhalt. Noch entscheidender: Das Lesewerkzeug besitzt keinen Zugriff auf Secrets und das Netzwerkwerkzeug erlaubt dieses Ziel nicht. Mehrere voneinander unabhängige Grenzen reduzieren die Auswirkung eines Fehlers.

## Grenzen und Fehlerbilder

Filter können umgangen werden und Klassifikatoren können sich irren. Begrenze deshalb Rechte und mögliche Auswirkungen. Trenne Secrets von Modellkontext und Logs. Für riskante Aktionen sollte eine Freigabe den genauen Ressourcenstand und die vorgeschlagene Änderung zeigen.

Tests müssen auch indirekte Angriffe über Suchergebnisse, Tool-Ausgaben und gespeicherte Erinnerungen abdecken. Eine Blockierung ist nur dann belastbar, wenn tatsächlich kein unerlaubter Seiteneffekt aufgetreten ist.

## Übung

Ein Prompt sagt „Lösche niemals Dateien“, aber das Tool erlaubt beliebige Löschungen. Was fehlt?

## Lösung und Selbstkontrolle

Eine durchgesetzte Berechtigungsgrenze. Entferne die Löschfunktion oder beschränke sie auf ausdrücklich erlaubte Ressourcen und Bedingungen. Prüfe diese Grenze mit absichtlich unzulässigen Aufrufen.

## Quellen und Vertiefung

- [OWASP Top 10 for LLM Applications](https://owasp.org/projects/top-10-for-large-language-model-applications)
- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Weiterlernen

[Zurück: 13](13-asi.md) · [Übersicht](README.md) · [Weiter: 15](15-architecture-patterns.md) · [English](../en/14-security-safety.md)
