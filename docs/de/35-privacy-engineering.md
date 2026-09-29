# Privacy Engineering und Datenschutz

Verfolge personenbezogene Informationen durch den gesamten Datenlebenszyklus und minimiere unnötige Kopien.

## Lernziel

Du kannst eine Datenflussübersicht und überprüfbare Datenschutzkontrollen beschreiben. Privacy Engineering übersetzt Schutzziele in technische Entscheidungen. Eine konkrete rechtliche Einordnung hängt vom Einsatzkontext ab; dieses Kapitel gibt keine Rechtskonformitätszusage.

## Lebenszyklus und Kontrollen

| Phase | Prüffrage |
| --- | --- |
| Erhebung | Welche Daten sind für den Zweck notwendig? |
| Verarbeitung | Welche Dienste und Personen erhalten Zugriff? |
| Speicherung | Wo liegen Originale, Indizes, Caches und Logs? |
| Nutzung | Werden Zweck und Berechtigungen eingehalten? |
| Löschung | Werden abgeleitete Kopien berücksichtigt? |

Dokumentiere Aufbewahrung und Verantwortlichkeit pro Speicher. Verschlüsselung schützt bestimmte Zugriffswege, ersetzt aber keine Berechtigungsprüfung oder Datenminimierung.

## Beispiel aus der Praxis

Ein Supportassistent braucht eine Bestellnummer und einen Versandstatus. Vollständige Zahlungsdaten gehören dafür nicht in den Modellkontext. Die Anwendung ruft nur erforderliche Felder ab und protokolliert Vorgangskennungen statt kompletter Nachrichten. Ein Löschprozess berücksichtigt Suchindex und Cache zusätzlich zur Hauptdatenbank.

## Grenzen und Fehlerbilder

Embeddings oder pseudonymisierte Datensätze sind nicht automatisch anonym. Aus abgeleiteten Informationen können weiterhin sensible Zusammenhänge entstehen. Prüfe, wer Daten miteinander verknüpfen kann und welche Inhalte in Fehlermeldungen oder Telemetrie gelangen.

Bei externen Diensten müssen tatsächliche Verarbeitung, Aufbewahrung und Konfiguration geprüft werden. Verlass dich nicht auf Annahmen aus einem früheren Produktstand. Technische Maßnahmen und anwendbare rechtliche Anforderungen benötigen zuständige Verantwortliche.

## Übung

Eine Anwendung löscht einen Nutzer aus der Datenbank, behält aber Gesprächszusammenfassungen im Vektorindex. Ist die technische Löschkette vollständig?

## Lösung und Selbstkontrolle

Nein. Ordne abgeleitete Einträge ihrer Herkunft zu und beziehe sie in die Löschung ein. Verifiziere anschließend mit gezielten Abrufen, dass die Informationen nicht weiter verwendet werden.

## Quellen und Vertiefung

- [Privacy Framework — NIST](https://www.nist.gov/privacy-framework)
- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Weiterlernen

[Zurück: 34](34-evaluation-science.md) · [Übersicht](README.md) · [Weiter: 36](36-ai-product-engineering.md) · [English](../en/35-privacy-engineering.md)
