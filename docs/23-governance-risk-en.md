# 23 — AI Governance, Risk & Lifecycle

## Goal

Governance connects technical controls with organizational responsibility.

## Lifecycle

```text
Design
 → Risk assessment
 → Build
 → Evaluation
 → Release
 → Monitoring
 → Incident response
 → Review / retire
```

## Risk register

Production systems should document at least purpose, data sources, model version, tools, permissions, known failure modes, evaluation results, and ownership.

## Change management

Model, prompt, tool, and policy changes can alter behavior. Critical changes require reproducible tests and traceable versioning.

## Incident response

An incident process should cover detection, containment, evidence preservation, root-cause analysis, recovery, and lessons learned.
