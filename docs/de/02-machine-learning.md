# Machine Learning und Deep Learning

Lerne, wie Modelle aus Daten lernen und wie du ehrliche Tests von guten Trainingswerten unterscheidest.

## Lernziel

Du kannst Trainings-, Validierungs- und Testdaten trennen und ein passendes Lernverfahren benennen. Machine Learning passt Modellparameter anhand von Daten an. Deep Learning verwendet neuronale Netze mit mehreren Verarbeitungsschichten; es ist ein Teilgebiet von Machine Learning.

## Lernverfahren

| Verfahren | Lernsignal | Beispiel |
| --- | --- | --- |
| Überwachtes Lernen | Eingabe mit Zielwert | Kategorie einer Supportanfrage |
| Unüberwachtes Lernen | Struktur ohne Zielkategorie | Ähnliche Dokumente gruppieren |
| Selbstüberwachtes Lernen | Aus Daten erzeugtes Lernziel | Verdeckte oder folgende Tokens vorhersagen |
| Reinforcement Learning | Rückmeldung über Handlungen | Strategie in einer simulierten Umgebung |

Beim Training verändert ein Optimierungsverfahren die Parameter, um eine Verlustfunktion zu reduzieren. Bei der Inferenz wendet das System die gelernten Parameter auf neue Eingaben an. Eine Nutzerkorrektur verändert diese Parameter nicht automatisch.

## Beispiel aus der Praxis

Für 1.000 Supportanfragen reservierst du beispielhaft 700 zum Training, 150 zur Modellwahl und 150 für den abschließenden Test. Nachrichten derselben Unterhaltung bleiben in derselben Gruppe. Sonst könnte das Modell fast identische Texte bereits kennen. Die Zahlen sind eine Übungsaufteilung, keine allgemeine Vorgabe.

Bei seltenen dringenden Anfragen ist Accuracy allein irreführend: Wenn nur 20 von 1.000 dringend sind, erreicht ein Modell mit immer „nicht dringend“ bereits 98 Prozent Accuracy und findet keinen dringenden Fall.

## Grenzen und Fehlerbilder

Overfitting bedeutet, dass ein Modell Besonderheiten der Trainingsdaten zu stark übernimmt. Datenlecks, veränderte Eingabeverteilungen und unausgewogene Klassen verfälschen die Bewertung. Prüfe Precision und Recall je Klasse und vergleiche mit einer einfachen Regelbasis.

## Übung

Warum sollten zehn nahezu identische Kopien einer Nachricht nicht zufällig auf Training und Test verteilt werden?

## Lösung und Selbstkontrolle

Die Kopien verraten dem Modell Testinformationen. Entferne Duplikate oder gruppiere verwandte Datensätze vor der Aufteilung. Bei zeitabhängigen Aufgaben kann eine zeitliche Trennung realistischere Ergebnisse liefern.

## Quellen und Vertiefung

- [Deep Learning — Goodfellow, Bengio & Courville](https://www.deeplearningbook.org/)

## Weiterlernen

[Zurück: 01](01-ai-fundamentals.md) · [Übersicht](README.md) · [Weiter: 03](03-transformers-foundation-models.md) · [English](../en/02-machine-learning.md)
