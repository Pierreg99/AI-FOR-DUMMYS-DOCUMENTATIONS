# Große Sprachmodelle

Verstehe Tokens, Kontext und Textgenerierung, ohne Sprachmodelle mit vollständigen Agenten gleichzusetzen.

## Lernziel

Du kannst einen Modellaufruf beschreiben und erklären, weshalb plausible Antworten überprüft werden müssen. Ein Large Language Model verarbeitet Sprache als Tokens. Ein Token kann ein Wort, ein Wortteil oder ein anderes Zeichenmuster sein. Die Anzahl hängt vom Tokenizer und von der Sprache ab.

## Vom Text zur Antwort

1. Der Tokenizer übersetzt die Eingabe in Token-IDs.
2. Das Modell verarbeitet die verfügbaren Repräsentationen.
3. Bei einem autoregressiven Modell entsteht eine Verteilung für das nächste Token.
4. Eine Decoding-Regel wählt ein Token; der Ablauf wird wiederholt.

```text
P(next_token | previous_tokens)
```

Temperatur und Sampling beeinflussen die Auswahl. Eine niedrige Temperatur macht eine Antwort nicht automatisch wahr. Auch reproduzierbare Antworten können sachlich falsch sein; Backend- und Modelländerungen können Ergebnisse verändern.

## Beispiel aus der Praxis

Ein Assistent soll eine Lieferzeit nennen. Ohne Bestelldaten kann er eine plausible Zahl erzeugen. Mit einem geprüften Datensatz kann die Anwendung eine Antwort aus vorhandenen Fakten formulieren. Lege vorab fest, wie sie reagiert, wenn das Lieferdatum fehlt: beispielsweise „Noch nicht bestätigt“ statt einer erfundenen Schätzung.

## Grenzen und Fehlerbilder

Das Kontextfenster begrenzt die Informationen eines Aufrufs. Je nach Dienst müssen Eingabe und erzeugte Ausgabe in gemeinsame oder gesonderte Limits passen. Persistente Erinnerung erfordert zusätzliche Speicherung. Ein Sprachmodell allein verfügt weder automatisch über aktuelle Informationen noch über die Berechtigung, externe Aktionen auszuführen.

Für strukturierte Ausgaben braucht die Anwendung Schema- und Inhaltsprüfungen. Gültiges JSON kann immer noch eine falsche Bestellnummer enthalten.

## Übung

Eine Antwort hat korrektes JSON und nennt ein nicht vorhandenes Produkt. Welche Prüfung fehlt?

## Lösung und Selbstkontrolle

Die semantische Prüfung gegen den Produktbestand. Syntax, Schema, Fakten und Berechtigungen sind getrennte Prüfschritte. Ein Parser bestätigt lediglich, dass eine Ausgabe lesbar ist.

## Quellen und Vertiefung

- [Deep Learning — Goodfellow, Bengio & Courville](https://www.deeplearningbook.org/)
- [Attention Is All You Need — Vaswani et al.](https://arxiv.org/abs/1706.03762)

## Weiterlernen

[Zurück: 03](03-transformers-foundation-models.md) · [Übersicht](README.md) · [Weiter: 05](05-generative-ai.md) · [English](../en/04-llms.md)
