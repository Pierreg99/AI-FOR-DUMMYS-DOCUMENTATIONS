# Tool-Sicherheit und Capability-Sandboxing

Gib Werkzeugen genau die Fähigkeiten, die für eine Aufgabe erforderlich sind.

## Lernziel

Du kannst einen Tool-Vertrag mit durchgesetzten Grenzen entwerfen. Eine Capability beschreibt eine konkrete erlaubte Handlung an bestimmten Ressourcen. Sie sollte enger sein als allgemeiner Shell-, Datenbank- oder Netzwerkzugriff.

## Was geprüft werden muss

| Bereich | Beispiel |
| --- | --- |
| Funktion | Nur Dokumente lesen, keine beliebigen Befehle ausführen |
| Ressource | Erlaubter Projektordner statt gesamtes Dateisystem |
| Argumente | Begrenzte Dateigröße und gültige Kennung |
| Laufzeit | Zeit-, Speicher- und Aufrufbudget |
| Wirkung | Lesezugriff, reversible Änderung oder Veröffentlichung |

Prüfe Rechte im ausführenden Dienst. Ein vom Modell gesetztes Feld `approved: true` ist kein Berechtigungsnachweis. Freigaben benötigen eine vertrauenswürdige Herkunft und müssen zum konkreten Vorschlag passen.

## Beispiel aus der Praxis

Ein Tool darf eine Dokumentation aktualisieren. Der Dienst normalisiert den Pfad, prüft das erlaubte Verzeichnis und berücksichtigt symbolische Links. Er akzeptiert nur bekannte Textdateien und begrenzt die Änderung. Ein Pfad wie `../../private/config` wird nicht durch eine freundliche Tool-Beschreibung sicher.

## Grenzen und Fehlerbilder

Sandboxing reduziert mögliche Auswirkungen, ersetzt aber keine fachliche Prüfung. Erlaubte Werkzeuge können durch ihre Kombination neue Risiken schaffen. Begrenze auch ausgehende Netzwerkziele und verhindere, dass Secrets in Tool-Ausgaben gelangen.

Tests umfassen ungültige Pfade, übergroße Eingaben, abgelaufene Freigaben und geänderte Ressourcenstände. Führe Prüfungen möglichst nahe an der tatsächlichen Aktion durch, damit zwischen Prüfung und Nutzung keine unbemerkte Änderung wirksam wird.

## Übung

Ein Tool validiert Argumente, nutzt aber anschließend einen ungeprüften Pfad in einem Shell-Befehl. Reicht die Schema-Prüfung?

## Lösung und Selbstkontrolle

Nein. Typprüfung verhindert weder Pfadüberschreitung noch Befehlsinjektion. Verwende begrenzte Datei-APIs, geprüfte Ressourcen und keine unkontrollierte Befehlsverkettung.

## Quellen und Vertiefung

- [OWASP Top 10 for LLM Applications](https://owasp.org/projects/top-10-for-large-language-model-applications)
- [Model Context Protocol — Architecture](https://modelcontextprotocol.io/docs/learn/architecture)

## Weiterlernen

[Zurück: 29](29-context-engineering.md) · [Übersicht](README.md) · [Weiter: 31](31-event-driven-orchestration.md) · [English](../en/30-tool-security.md)
