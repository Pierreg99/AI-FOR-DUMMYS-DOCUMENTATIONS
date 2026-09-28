# 34 — Evaluation Science, Benchmarks & Statistical Thinking

## Ziel
Evaluation ist Messdesign: Population, Task, Baseline, Metric, Sampling, Uncertainty und Interpretation gehören zusammen.

## Evaluationspyramide
~~~text
Unit → Component → System → Scenario → Adversarial → Production
~~~

## Benchmark-Hygiene
Dokumentiere Datensatzversion, Leakage-Risiken, Scoring, Testpopulation und Grader-Verhalten. Achte auf Distribution Shift und Selection Bias.

## Fehlerklassen
Factual · Reasoning · Retrieval · Tool · Policy · Formatting · Timeout · Recovery

## Statistische Disziplin
Eine beobachtete Erfolgsrate ist eine Stichprobenschätzung. Stichprobengröße und Unsicherheit gehören deshalb zur Interpretation.

## Regression
Eine Verbesserung ist nur dann belastbar, wenn Nebenmetriken und relevante Failure Modes nicht gleichzeitig schlechter werden.

## Reproduzierbarkeit
Systemversion, Konfiguration, Dataset, Scorer und Ergebnisartefakte müssen gemeinsam versioniert werden.

## Dokumentationsstandard

Begriffe, Architektur, Annahmen, Metriken und Failure Modes werden explizit getrennt. Unsichere oder hypothetische Aussagen werden als solche markiert.
