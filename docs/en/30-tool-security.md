# 30 — Tool Security & Capability Sandboxing

## Goal
Tool-Sicherheit trennt Modellvorschlag, Policy-Entscheidung und technische Berechtigung.

## Architecture
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

## Side-effect classes
Read-only · Reversible Write · External Write · Irreversible / High-Impact

## Controls
Least Privilege · Egress Control · Secret Isolation · Schema Validation · Rate Limits · Replay Protection · Audit

## Engineering rule
Authorization gehört außerhalb des Sprachmodells.

## Failure modes
Manipulierte Tool-Metadaten · schädliche Tool-Antworten · überweite Scopes · Secret Leakage · unerwartete Seiteneffekte

## Dokumentationsstandard

Terms, architecture, assumptions, metrics, and failure modes are kept explicit. Uncertain or hypothetical claims are labeled as such.
