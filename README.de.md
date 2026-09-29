# AI for Everyone — KI verstehen und anwenden

**Ein offener Lern-Guide auf Deutsch und Englisch.** 36 aufeinander abgestimmte Kapitel führen von Machine Learning und Sprachmodellen über RAG und Agenten bis zu Sicherheit, Evaluation und produktiven Systemen. Jedes Kapitel enthält ein Beispiel, ein Fehlerbild, eine Übung mit Lösung und Links zu vertiefenden Originalquellen.

[Deutsche Lern-Website öffnen](https://pierreg99.github.io/AI-FOR-Everyone-Learn-Docs/de/) · [English README](README.md) · [English learning site](https://pierreg99.github.io/AI-FOR-Everyone-Learn-Docs/en/)

Die Website wird statisch auf GitHub Pages bereitgestellt. Sie braucht weder Konto noch Analyse-Dienst, externe Schriftart oder Laufzeit-API. Fortschritt und Lesezeichen bleiben im aktuellen Browser. Alle Kapitel sind auch ohne JavaScript lesbar; Suche, interaktive Werkzeuge und gespeicherter Fortschritt benötigen JavaScript.

## Dein Einstieg

- **KI verstehen:** Kapitel 1–6 erklären Modelle, Lernen, Transformer, Sprachmodelle, generative KI und RAG.
- **Agenten entwickeln:** Kapitel 7–9, 14–15, 17, 24, 27 und 29–30 verbinden Werkzeuge, Kontext, Berechtigungen, Laufzeit und Tests.
- **Systeme betreiben:** Kapitel 19–23, 25–26, 31–32 und 34–36 behandeln Beobachtbarkeit, Daten, Inferenz, Recovery, Evaluation, Datenschutz und Kosten.

Die übrigen Kapitel vertiefen Architektur und Forschungsgrenzen. AGI und ASI sind Fähigkeits- beziehungsweise hypothetische Zukunftskonzepte; sie sind keine garantierten Entwicklungsschritte.

[Deutsche Kapitelübersicht](docs/de/README.md) · [Englische Kapitelübersicht](docs/en/README.md) · [Schnellstart](docs/de/getting-started.md) · [Glossar](docs/de/glossary.md) · [Quellen](docs/de/sources.md) · [Praxisprojekte](docs/de/projects.md)

## Website lokal starten

Für den Build benötigst du Node.js 22+ und npm. Python 3.10+ wird nur für die optionalen Praxisbeispiele benötigt.

```sh
npm ci
npm run check
npm run dev
```

Öffne `http://127.0.0.1:4173/`. Der Ordner `dist/` enthält die komplette Website für GitHub Pages. Nach einer Kapiteländerung muss `npm run build` erneut ausgeführt werden. Browsertests laufen mit `npx playwright install chromium && npm run test:e2e`, sofern ein Browser-Download verfügbar ist.

[WEBSITE.md](WEBSITE.md) beschreibt Dateien und Deployment, [CONTRIBUTING.de.md](CONTRIBUTING.de.md) das Mitwirken und [ROADMAP.md](ROADMAP.md) abgeschlossene sowie mögliche nächste Schritte. Frühere V1.2-Einstiege und Kapitel-Adressen verweisen auf die aktuellen Ausgaben.
