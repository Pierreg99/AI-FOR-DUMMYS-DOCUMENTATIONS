# 22 — Human-AI Interaction & Approval Design

## Ziel

Autonomie ist nicht binär. Ein System kann Menschen an unterschiedlichen Kontrollpunkten einbinden.

## Kontrollstufen

```text
Human executes
 → Human approves
 → Human supervises
 → Agent executes within policy
 → Agent executes autonomously
```

## Approval Gate

Ein Approval Gate sollte zeigen:

- geplante Aktion
- betroffene Ressource
- erwartete Nebenwirkung
- Risiko-/Policy-Klasse
- Rollback-Möglichkeit

## UX-Regel

Menschen sollten nicht jeden trivialen Schritt bestätigen müssen. Bestätigungen sind dort wertvoll, wo irreversible oder sensible Seiteneffekte entstehen.

## Audit

Eine Genehmigung muss mit Run ID, Zeitpunkt, Aktion und Entscheidungsstatus nachvollziehbar sein.
