# Datenpipelines und Wissensqualität

Behandle Datenherkunft, Versionen und Zugriffsrechte als Teil der Antwortqualität.

## Lernziel

Du kannst eine überprüfbare Datenpipeline für ein Wissenssystem entwerfen. Eine Pipeline beginnt bei der Quelle und endet nicht mit einem erfolgreichen Upload. Entscheidend ist, ob relevante, aktuelle und zulässige Inhalte später korrekt gefunden werden.

## Kontrollen entlang der Pipeline

1. Quelle, Eigentümer und erlaubten Verwendungszweck erfassen.
2. Format und Vollständigkeit beim Einlesen prüfen.
3. Duplikate, ungültige Inhalte und Parserfehler erkennen.
4. Versionen und Metadaten beim Aufteilen erhalten.
5. Suchindex erstellen und mit bekannten Fragen testen.
6. Änderungen und Löschungen in abgeleitete Speicher übertragen.

Ein Dokumentstatus wie `active`, `archived` oder `deleted` hilft, veraltete Inhalte gezielt auszuschließen. Metadaten dürfen nicht nur auf dem Original stehen, wenn die Suche einzelne Abschnitte zurückgibt.

## Beispiel aus der Praxis

Ein Produktblatt wird ersetzt. Die neue Version erhält eine eigene Versionskennung, während die alte als archiviert markiert wird. Der Suchindex wird aktualisiert, zugehörige Caches werden ungültig und eine bekannte Produktfrage wird erneut geprüft. Ein bloßes Hinzufügen der neuen Datei würde widersprüchliche Treffer hinterlassen.

## Grenzen und Fehlerbilder

PDF-Parser können Spalten vertauschen oder Tabellen zerlegen. OCR kann Zahlen verändern. Stichproben sollten daher auch strukturell schwierige Dokumente einschließen. Ein technisch erfolgreicher Import ist kein Beleg für korrekte Inhalte.

Miss Importfehler, Aktualisierungsverzug, Duplikatanteil und Antworten mit falscher Version. Bei Rechteänderungen muss der Suchzugriff zeitnah angepasst werden; ein alter Index darf keine frühere Berechtigung konservieren.

## Übung

Warum sollte ein Chunk eine Dokument-ID, Versions-ID und Abschnittsreferenz besitzen?

## Lösung und Selbstkontrolle

Damit Herkunft, Aktualisierung, Löschung und Quellenangabe eindeutig funktionieren. Ohne diese Beziehungen lassen sich fehlerhafte oder veraltete Abschnitte schwer gezielt ersetzen.

## Quellen und Vertiefung

- [Retrieval-Augmented Generation — Lewis et al.](https://arxiv.org/abs/2005.11401)
- [Privacy Framework — NIST](https://www.nist.gov/privacy-framework)

## Weiterlernen

[Zurück: 19](19-observability.md) · [Übersicht](README.md) · [Weiter: 21](21-inference-serving.md) · [English](../en/20-data-pipelines.md)
