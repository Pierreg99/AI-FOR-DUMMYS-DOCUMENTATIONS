# 30 — Tool Security & Capability Sandboxing

## Ziel
Tool-Sicherheit trennt Modellvorschlag, Policy-Entscheidung und technische Berechtigung.

## Architektur
~~~text
Agent → Policy Engine → Tool Gateway → Sandbox
             ↓              ↓
          Identity        Audit
          Scope           Result
          Risk
          Approval
~~~

## Capability-Modell
Eine Capability definiert mindestens Subject, Action, Resource, Scope und Expiration. Hochwirksame Side Effects benötigen zusätzliche Kontrolle.

## Side-Effect-Klassen
Read-only · Reversible Write · External Write · Irreversible / High-Impact

## Kontrollen
Least Privilege · Egress Control · Secret Isolation · Schema Validation · Rate Limits · Replay Protection · Audit

## Engineering-Regel
Authorization gehört außerhalb des Sprachmodells.

## Failure Modes
Manipulierte Tool-Metadaten · schädliche Tool-Antworten · überweite Scopes · Secret Leakage · unerwartete Seiteneffekte

## Dokumentationsstandard

Begriffe, Architektur, Annahmen, Metriken und Failure Modes werden explizit getrennt. Unsichere oder hypothetische Aussagen werden als solche markiert.
