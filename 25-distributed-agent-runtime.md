25 — Distributed Agent Runtime

## Ziel
Ein verteilter Agent benötigt klare Runtime-Grenzen für Scheduling, Zustandsübergänge und Ausführung.

## Referenzarchitektur
```text
Ingress → Scheduler → Lease → Worker
                    ↓
                 Durable State
                    ↓
              Tool / Model Calls
                    ↓
             Event / Audit Stream
```

## Kernbausteine
- durable run state
- distributed leases
- heartbeats und expiration
- queueing und backpressure
- idempotente Work Units
- worker health und draining

## Failure Modes
Worker-Absturz, doppelte Ausführung, verlorene Events, stale leases und partielle externe Seiteneffekte müssen explizit behandelt werden.

## Engineering-Regel
Verteilte Autonomie braucht einen persistenten Zustandsautomaten; ein Prozessspeicher ist kein ausreichender Source of Truth.