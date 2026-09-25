# 22 — Human-AI Interaction & Approval Design

## Goal

Autonomy is not binary. A system can involve humans at different control points.

## Control levels

```text
Human executes
 → Human approves
 → Human supervises
 → Agent executes within policy
 → Agent executes autonomously
```

## Approval gate

An approval gate should expose:

- proposed action
- affected resource
- expected side effect
- risk/policy class
- rollback option

## UX rule

Humans should not approve every trivial step. Approval is most useful where actions create irreversible or sensitive side effects.

## Audit

An approval should be traceable through run ID, timestamp, action, and decision status.
