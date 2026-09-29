# Agententests und Verifikation

Teste Zustandsänderungen und Berechtigungsgrenzen zusätzlich zur sichtbaren Endantwort.

## Lernziel

Du kannst deterministische Softwaretests von probabilistischen Verhaltensevaluationen unterscheiden. Beide sind nötig: Ein Tool-Validator kann exakt geprüft werden, während eine offene Antwort eine Rubrik und gegebenenfalls mehrere Durchläufe benötigt.

## Testebenen

| Ebene | Beispiel |
| --- | --- |
| Unit-Test | Ungültige Tool-Argumente werden abgelehnt |
| Vertragstest | Tool-Ergebnis erfüllt das vereinbarte Schema |
| Integrationstest | Zustand und externe Wirkung passen zusammen |
| Szenariotest | Eine vollständige Nutzeraufgabe wird gelöst |
| Störungstest | Neustart nach einem partiellen Fehler |
| Angriffstest | Fremder Dokumenttext erhält keine zusätzlichen Rechte |

Verwende realistische, aber sichere Testdaten. Externe Schreibaktionen sollten in kontrollierten Testsystemen oder mit nachvollziehbaren Fakes ausgeführt werden.

## Beispiel aus der Praxis

Ein Agent erstellt ein Ticket. Der Test prüft nicht nur den Satz „Ticket erstellt“, sondern das tatsächliche Ticket, Titel, Zuordnung und Anzahl der Aufrufe. Danach wird ein Verbindungsabbruch simuliert. Eine Wiederholung mit derselben Vorgangskennung darf kein zweites Ticket erzeugen.

## Grenzen und Fehlerbilder

Tests, die nur dieselbe Implementierung nachbauen, übersehen gemeinsame Annahmefehler. Schreibe Anforderungen zuerst und prüfe beobachtbares Verhalten. Halte einen unangetasteten Satz von Evaluationsaufgaben zurück, damit Optimierungen nicht ausschließlich auf bekannten Beispielen funktionieren.

Speichere Modell-, Prompt- und Tool-Version, Konfiguration sowie Testdatenkennung. Ein fester Zufallswert kann helfen, garantiert bei externen Modellplattformen aber nicht in jeder Situation identische Ergebnisse.

## Übung

Welche drei Prüfungen gehören zu einem Test für eine nicht autorisierte Löschanfrage?

## Lösung und Selbstkontrolle

Die Anfrage wird abgelehnt; die Ressource bleibt erhalten; der Ablehnungsgrund ist nachvollziehbar dokumentiert. Eine freundliche Ablehnungsantwort allein reicht nicht, wenn das Tool trotzdem ausgeführt wurde.

## Quellen und Vertiefung

- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)
- [OWASP Top 10 for LLM Applications](https://owasp.org/projects/top-10-for-large-language-model-applications)

## Weiterlernen

[Zurück: 23](23-governance-risk.md) · [Übersicht](README.md) · [Weiter: 25](25-distributed-agent-runtime.md) · [English](../en/24-agent-testing.md)
