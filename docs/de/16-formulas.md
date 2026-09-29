# Formeln und quantitative Modelle

Rechne Kosten, Erfolgsraten und Latenzen mit ausdrücklich benannten Einheiten und Annahmen.

## Lernziel

Du kannst einfache Systemrechnungen durchführen und erklären, wann ihre Annahmen nicht passen. Die folgenden Modelle sind Planungshilfen. Sie sind weder aktuelle Preislisten noch universelle Qualitätsmaße.

## Tokenkosten

Wenn Preise pro einer Million Tokens angegeben werden, gilt:

```text
cost = input_tokens / 1_000_000 * input_price
     + output_tokens / 1_000_000 * output_price
```

Mit angenommenen Preisen von 2 und 8 Geldeinheiten pro Million kosten 2.000 Eingabe- und 500 Ausgabetokens insgesamt `0.004 + 0.004 = 0.008`. Tool-, Speicher- und Infrastrukturkosten kommen gegebenenfalls hinzu. Die Werte sind ausschließlich ein Rechenbeispiel.

## Erfolgsrate und Wiederholungen

```text
success_rate = successful_tasks / attempted_tasks
independent_chain_success = p ** steps
cost_per_success = total_cost / successful_tasks
```

Bei null Erfolgen ist „Kosten pro Erfolg“ nicht definiert; zeige keine erfundene Null an. Das Kettenmodell setzt unabhängige Schritte mit gleicher Erfolgswahrscheinlichkeit voraus. Gemeinsame Fehlerursachen und Wiederherstellung verändern das Ergebnis.

## Latenz und Kapazität

Bei serieller Ausführung addieren sich Zeiten. Bei parallelen Zweigen bestimmen der längste abhängige Pfad und Koordinationsaufwand die Dauer. Unter stabilen Bedingungen beschreibt Little's Law den Zusammenhang `mittlere Anzahl im System = Ankunftsrate × mittlere Verweildauer`.

Beispiel: 4 Anfragen pro Sekunde mit durchschnittlich 3 Sekunden im System entsprechen im Mittel 12 gleichzeitigen Anfragen. Das ist keine ausreichende Dimensionierung für Lastspitzen.

## Grenzen und Fehlerbilder

Verwechsle Durchschnitt und 95. Perzentil nicht. Perzentile einzelner Stufen lassen sich nicht einfach zum Gesamtperzentil addieren. Preise müssen dieselbe Währung und Einheit verwenden. Kosten fehlgeschlagener Versuche gehören in die Gesamtkosten.

## Übung

Ein Test kostet 12 Euro und löst 40 von 50 Aufgaben. Wie hoch sind Erfolgsrate und Kosten pro Erfolg?

## Lösung und Selbstkontrolle

Die Erfolgsrate beträgt 80 Prozent; die Kosten pro Erfolg betragen 0,30 Euro. Kosten pro Versuch wären dagegen 0,24 Euro. Beide Größen beantworten unterschiedliche Fragen.

## Quellen und Vertiefung

- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Weiterlernen

[Zurück: 15](15-architecture-patterns.md) · [Übersicht](README.md) · [Weiter: 17](17-practice-llm-to-runtime.md) · [English](../en/16-formulas.md)
