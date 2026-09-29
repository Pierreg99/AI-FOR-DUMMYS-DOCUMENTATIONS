# Inferenzbetrieb und Laufzeitkosten

Betrachte Modellqualität, Wartezeit, Kapazität und Kosten als zusammenhängende Betriebsgrößen.

## Lernziel

Du kannst den Weg einer Anfrage vom Eingang bis zur Antwort beschreiben. Eine Serving-Schicht übernimmt Identitätsprüfung, Warteschlangen, Modellaufrufe und Ergebnisverarbeitung. Sie muss auch bei Überlast kontrolliert reagieren.

## Messgrößen unterscheiden

| Messgröße | Bedeutung |
| --- | --- |
| Time to first token | Wartezeit bis zum ersten Ausgabetoken |
| Gesamtlatenz | Zeit bis zum vollständigen Ergebnis |
| Durchsatz | Abgeschlossene Anfragen oder Tokens pro Zeiteinheit |
| Auslastung | Beanspruchter Anteil verfügbarer Ressourcen |
| Kosten pro Erfolg | Gesamtaufwand geteilt durch erfolgreiche Aufgaben |

Ein früher erstes Token kann die gefühlte Wartezeit verbessern, ohne die Gesamtdauer zu reduzieren. Miss deshalb beide Größen unter realistischen Eingabelängen.

## Beispiel aus der Praxis

Bei acht gleichzeitigen Anfragen arbeitet ein Dienst gut, bei 80 wächst die Warteschlange. Eine begrenzte Queue, klare Zeitlimits und eine verständliche Überlastantwort verhindern unbegrenztes Warten. Für aufschiebbare Arbeit kann ein asynchroner Auftrag mit Statusabfrage geeigneter sein.

## Grenzen und Fehlerbilder

Batching kann den Durchsatz erhöhen und zugleich einzelne Anfragen verzögern. Caching braucht korrekte Schlüssel: Identität, Berechtigungen, Datenversion und Modellkonfiguration können relevant sein. Ein Cache, der Antworten zwischen getrennten Kunden teilt, kann Informationen offenlegen.

Quantisierung oder kleinere Modelle können Ressourcen sparen, müssen aber am eigenen Testsatz überprüft werden. Wiederholungen bei Überlast können die Überlast verstärken. Begrenze sie und verwende verzögerte Wiederholungen mit zufälliger Streuung.

## Übung

Welche Messung fehlt, wenn ein Anbieter nur „Tokens pro Sekunde“ angibt?

## Lösung und Selbstkontrolle

Unter anderem Wartezeit, Eingabelänge, Parallelität, Qualität und vollständige Bearbeitungsdauer. Ein Durchsatzwert ohne Lastbedingungen reicht nicht aus, um die Nutzererfahrung oder Kosten zu planen.

## Quellen und Vertiefung

- [OpenTelemetry — Signals](https://opentelemetry.io/docs/concepts/signals/)
- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Weiterlernen

[Zurück: 20](20-data-pipelines.md) · [Übersicht](README.md) · [Weiter: 22](22-human-ai-interaction.md) · [English](../en/21-inference-serving.md)
