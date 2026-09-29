# Transformer und Foundation Models

Verstehe Attention als Baustein und Foundation Models als breit einsetzbare Ausgangsmodelle.

## Lernziel

Du kannst erklären, warum Tokenpositionen, Attention und Anpassung unterschiedliche Aufgaben haben. Ein Transformer verarbeitet Repräsentationen von Sequenzelementen. Attention verknüpft Informationen zwischen diesen Elementen; weitere Netzwerkschichten transformieren die Ergebnisse.

## Architektur verstehen

Tokens werden zunächst in Vektoren übersetzt. Positionsinformationen machen ihre Reihenfolge unterscheidbar. In Attention entstehen aus Repräsentationen sogenannte Queries, Keys und Values. Gewichte bestimmen, welche Value-Informationen in eine neue Repräsentation einfließen.

Die gebräuchliche skalierte Dot-Product-Attention lautet:

```text
Attention(Q, K, V) = softmax(Q K^T / sqrt(d_k)) V
```

Die Formel beschreibt einen Mechanismus, nicht das gesamte Modell. Decoder-Sprachmodelle begrenzen Attention beim autoregressiven Erzeugen auf erlaubte vorherige Positionen. Encoder und andere Modellfamilien können andere Masken verwenden.

## Beispiel aus der Praxis

In „Die Tasse passt nicht in die Kiste, weil sie zu klein ist“ muss ein System relevante Beziehungen zwischen Wörtern verarbeiten. Attention bietet dafür eine rechnerische Struktur. Ein visualisiertes Attention-Gewicht ist jedoch keine vollständige Erklärung einer Modellentscheidung.

Ein Foundation Model wird breit vortrainiert und kann anschließend durch Beispiele im Kontext, zusätzliche Komponenten oder weiteres Training für Aufgaben nutzbar gemacht werden. Prompting ändert die Eingabe; Fine-Tuning ändert Modellparameter.

## Grenzen und Fehlerbilder

Die klassische dichte Attention über eine Sequenz hat einen quadratisch wachsenden Rechenanteil in deren Länge. Optimierte Implementierungen und alternative Architekturen verändern praktische Kosten. Ein langes Kontextfenster garantiert zudem nicht, dass jede Information zuverlässig genutzt wird.

## Übung

Du gibst einem Modell drei korrekt beantwortete Beispiele im Prompt. Hast du damit ein Fine-Tuning durchgeführt?

## Lösung und Selbstkontrolle

Nein. Du hast In-Context-Beispiele bereitgestellt. Die Parameter bleiben bei gewöhnlicher Inferenz unverändert. Erst ein gesonderter Trainingsprozess aktualisiert sie. Prüfe den Nutzen der Beispiele mit neuen, vorher nicht verwendeten Aufgaben.

## Quellen und Vertiefung

- [Attention Is All You Need — Vaswani et al.](https://arxiv.org/abs/1706.03762)
- [Deep Learning — Goodfellow, Bengio & Courville](https://www.deeplearningbook.org/)

## Weiterlernen

[Zurück: 02](02-machine-learning.md) · [Übersicht](README.md) · [Weiter: 04](04-llms.md) · [English](../en/03-transformers-foundation-models.md)
