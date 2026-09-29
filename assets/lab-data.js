// Conceptual stages, not live model calls or universal architecture prescriptions.
export const labData = {
  de: [
    [
      [
        'Tokens',
        'Ein Tokenizer zerlegt Text in modellabhängige Einheiten.',
        'Tokens sind nicht gleich Wörter.',
      ],
      [
        'Repräsentation',
        'Token-IDs werden zu Vektoren und mit Positionsinformationen verarbeitet.',
        'Reihenfolge und Modellarchitektur spielen eine Rolle.',
      ],
      [
        'Modell',
        'Gelernte Parameter transformieren die verfügbaren Informationen.',
        'Eine flüssige Ausgabe ist kein Wahrheitsbeweis.',
      ],
      [
        'Decoding',
        'Eine Auswahlregel bestimmt die nächsten Ausgabetokens.',
        'Niedrige Temperatur garantiert keine Richtigkeit.',
      ],
      [
        'Antwort',
        'Die Anwendung erhält Text oder strukturierte Daten.',
        'Schema und Inhalt getrennt prüfen.',
      ],
    ],
    [
      [
        'Quellen',
        'Dokumente mit Version, Herkunft und Zugriffsrechten einlesen.',
        'Veraltete Quellen erzeugen veraltete Antworten.',
      ],
      [
        'Suche',
        'Relevante Abschnitte mit Keyword-, Vektor- oder hybrider Suche finden.',
        'Berechtigungen vor dem Abruf durchsetzen.',
      ],
      [
        'Auswahl',
        'Kandidaten ordnen und ein begrenztes Belegpaket zusammenstellen.',
        'Mehr Kontext ist nicht automatisch besser.',
      ],
      [
        'Generierung',
        'Das Modell formuliert eine Antwort mit den ausgewählten Belegen.',
        'Dokumentanweisungen bleiben fremde Inhalte.',
      ],
      [
        'Prüfung',
        'Antwortaussagen gegen die angegebenen Quellen prüfen.',
        'Eine echte Quellenangabe kann trotzdem die Aussage nicht stützen.',
      ],
    ],
    [
      [
        'Ziel',
        'Aufgabe, Erfolgskriterien und Budget festlegen.',
        'Ein vages Ziel ergibt schwer überprüfbare Ergebnisse.',
      ],
      [
        'Entscheidung',
        'Das Modell schlägt einen nächsten Schritt vor.',
        'Ein Vorschlag ist keine Berechtigung.',
      ],
      [
        'Aktion',
        'Die Laufzeit prüft Argumente und führt ein erlaubtes Werkzeug aus.',
        'Externe Seiteneffekte können trotz Timeout eintreten.',
      ],
      [
        'Beobachtung',
        'Tatsächliche Ergebnisse in den Arbeitszustand übernehmen.',
        'Tool-Fehler nicht durch Erfolgsbehauptungen ersetzen.',
      ],
      [
        'Verifikation',
        'Ziel prüfen, kontrolliert stoppen oder mit neuer Beobachtung erneut entscheiden.',
        'Schleife mit Schritt-, Zeit- und Kostenlimits begrenzen.',
      ],
    ],
    [
      [
        'Aufteilung',
        'Ein Koordinator benennt unabhängige Aufgaben und klare Ergebnisse.',
        'Nicht jede Aufgabe lässt sich sinnvoll parallelisieren.',
      ],
      [
        'Zuständigkeit',
        'Spezialisten erhalten begrenzte Eingaben und Schreibbereiche.',
        'Geteilte Dateien brauchen Konfliktkontrolle.',
      ],
      [
        'Bearbeitung',
        'Unabhängige Teilaufgaben können gleichzeitig laufen.',
        'Diese Stufenansicht zeigt keine konkrete Ausführungstopologie.',
      ],
      [
        'Integration',
        'Ergebnisse und Widersprüche werden zusammengeführt.',
        'Übereinstimmung ist kein unabhängiger Beweis.',
      ],
      [
        'Review',
        'Das gemeinsame Ergebnis wird gegen das ursprüngliche Ziel geprüft.',
        'Kosten und Qualität mit einer einfachen Baseline vergleichen.',
      ],
    ],
    [
      [
        'Eingang',
        'Identität, Anfrage und Budget am Eingang prüfen.',
        'Bei Überlast neue Arbeit begrenzen.',
      ],
      [
        'Zustand',
        'Ausführungs-ID, Version und Fortschritt dauerhaft speichern.',
        'Prozessspeicher überlebt keinen Neustart.',
      ],
      [
        'Ausführung',
        'Worker führen begrenzte Schritte mit geprüften Rechten aus.',
        'Veraltete Leases dürfen keine konkurrierenden Schreibaktionen erlauben.',
      ],
      [
        'Beobachtung',
        'Traces, Status und Verbrauch verbinden die Schritte.',
        'Keine Secrets oder unnötigen persönlichen Daten protokollieren.',
      ],
      [
        'Recovery',
        'Nach Fehlern abgleichen, begrenzt wiederholen oder kontrolliert stoppen.',
        'Eine externe Wirkung ist nach einem Timeout möglicherweise ungeklärt.',
      ],
    ],
  ],
  en: [
    [
      [
        'Tokens',
        'A tokenizer splits text into model-dependent units.',
        'Tokens are not the same as words.',
      ],
      [
        'Representation',
        'Token IDs become vectors and are processed with position information.',
        'Order and model architecture matter.',
      ],
      [
        'Model',
        'Learned parameters transform the available information.',
        'Fluent output is not proof of truth.',
      ],
      [
        'Decoding',
        'A selection rule determines the next output tokens.',
        'Low temperature does not guarantee correctness.',
      ],
      [
        'Response',
        'The application receives text or structured data.',
        'Check schema and content separately.',
      ],
    ],
    [
      [
        'Sources',
        'Ingest documents with version, provenance, and access permissions.',
        'Outdated sources produce outdated answers.',
      ],
      [
        'Retrieval',
        'Find relevant passages with keyword, vector, or hybrid retrieval.',
        'Enforce permissions before retrieval.',
      ],
      [
        'Selection',
        'Rank candidates and assemble a bounded evidence package.',
        'More context is not automatically better.',
      ],
      [
        'Generation',
        'The model writes an answer using selected evidence.',
        'Document instructions remain untrusted content.',
      ],
      [
        'Verification',
        'Check answer claims against the cited sources.',
        'A real citation can still fail to support the claim.',
      ],
    ],
    [
      [
        'Goal',
        'Define the task, success criteria, and budget.',
        'Vague goals make outcomes difficult to verify.',
      ],
      [
        'Decision',
        'The model proposes the next step.',
        'A proposal is not authorization.',
      ],
      [
        'Action',
        'The runtime validates arguments and executes an allowed tool.',
        'External effects can occur despite a timeout.',
      ],
      [
        'Observation',
        'Incorporate actual results into working state.',
        'Do not replace tool errors with success claims.',
      ],
      [
        'Verification',
        'Check the goal, stop deliberately, or decide again using new observations.',
        'Bound the loop by steps, time, and cost.',
      ],
    ],
    [
      [
        'Decompose',
        'A coordinator defines independent tasks and clear outcomes.',
        'Not every task benefits from parallel work.',
      ],
      [
        'Ownership',
        'Specialists receive scoped inputs and write ownership.',
        'Shared files need conflict control.',
      ],
      [
        'Execution',
        'Independent subtasks may run concurrently.',
        'This stage explorer does not prescribe an execution topology.',
      ],
      [
        'Integration',
        'Combine results and resolve contradictions.',
        'Agreement is not independent evidence.',
      ],
      [
        'Review',
        'Verify the combined result against the original goal.',
        'Compare cost and quality with a simple baseline.',
      ],
    ],
    [
      [
        'Ingress',
        'Check identity, request, and budget at the boundary.',
        'Limit new work during overload.',
      ],
      [
        'State',
        'Persist run ID, version, and progress.',
        'Process memory does not survive a restart.',
      ],
      [
        'Execution',
        'Workers execute bounded steps with checked permissions.',
        'Stale leases must not permit conflicting writes.',
      ],
      [
        'Observation',
        'Traces, status, and consumption connect the steps.',
        'Do not log secrets or unnecessary personal information.',
      ],
      [
        'Recovery',
        'After failure, reconcile, retry within limits, or stop deliberately.',
        'An external effect may be uncertain after a timeout.',
      ],
    ],
  ],
};
