26 — Durable State Machines & Recovery

## Zustandsmodell
Ein langlebiger Agent sollte jeden relevanten Übergang explizit modellieren.

```text
CREATED → RUNNING → WAITING_TOOL → VERIFYING → SUCCEEDED
                     ↓                  ↓
                  FAILED ←──────────── RETRY
                     ↓
                 CANCELLED
```

## Invarianten
- Jeder Run besitzt eine eindeutige ID.
- Zustandsübergänge sind validierbar.
- Wiederaufnahme nutzt persistierten Zustand.
- Retries dürfen keine unbeabsichtigten Duplikate erzeugen.

## Checkpoints
Checkpoints sollten nach semantisch wichtigen Übergängen geschrieben werden. Große Payloads gehören in einen separaten Store; der Zustand referenziert sie.

## Recovery
Recovery unterscheidet zwischen transientem Fehler, permanentem Fehler, menschlicher Entscheidung und unbekanntem Zustand.