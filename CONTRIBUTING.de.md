# Bei AI for Everyone mitwirken

Danke für deine Mitarbeit. Deutsche und englische Kapitel sollen Nummer, fachlichen Umfang, Beispiele, Übungen, Grenzen und Quellen gemeinsam abdecken. Die Formulierungen dürfen sich natürlich unterscheiden.

## Ein Kapitel bearbeiten

1. Bearbeite gemeinsam `docs/de/{slug}.md` und `docs/en/{slug}.md`. Die erste Überschrift ist der Titel; der nächste eigenständige Absatz ist die Kurzbeschreibung in der Bibliothek.
2. Erhalte Lernziel, Erklärung, Beispiel, Grenzen oder Fehlerbilder, Übung mit Lösung, Originalquellen sowie die Navigation zu benachbarten Kapiteln. Trenne beobachtete Technik von Annahmen und spekulativer Forschung.
3. Für ein neues Kapitel ergänze Nummer, Slug, Themenbereich (0–5) und gültige Vorwissens-IDs in `data/chapters.json`. Aktualisiere beide Übersichten, gegebenenfalls Lernpfade und die Markdown-Navigation. Bestehende Slugs bleiben stabile Links.
4. Führe `npm ci && npm run check` aus und, wenn Chromium verfügbar ist, `npx playwright install chromium && npm run test:e2e`. Prüfe beide Sprachen auf schmalen Bildschirmen.

Veränderliche technische Details sollten auf offizielle Dokumentation oder Originalarbeiten verweisen und ihre Version benennen. Preise in Rechenbeispielen sind Annahmen und keine Anbieterpreise. Veröffentliche keine API-Schlüssel, Kundendaten oder unnötigen personenbezogenen Inhalte. Die Kapitel sollen ohne JavaScript lesbar bleiben.

Die Website entsteht im Git-ignorierten Ordner `dist/`. Committe die Quelldateien, nicht den generierten Build. Beschreibe im Pull Request, was sich für Leser geändert hat und welche Prüfungen liefen.
