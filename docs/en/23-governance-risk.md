# Governance, risk, and lifecycle

Connect technical controls to clear accountability and verifiable operational decisions.

## Learning goal

Create a concise system record and a useful risk register. Governance means owning decisions and maintaining controls throughout the lifecycle. A document alone does not establish a functioning process.

## A practical system record

| Field | Content |
| --- | --- |
| Purpose | Supported users and tasks |
| Boundaries | Uses outside the intended scope |
| Components | Models, data, tools, and versions |
| Accountability | Business and technical owners |
| Evidence | Evaluations, known failures, and release criteria |
| Operations | Monitoring, incident response, and shutdown |

A risk register adds the scenario, possible impact, control, owner, and remaining uncertainty. Tie risks to concrete processes rather than collecting abstract labels.

## Worked example

A model upgrade improves summaries but worsens detection of missing sources. The change runs through the same test set as the existing version. A named owner decides using previously defined criteria. A rollback to the previous configuration remains available. Record both improvements and regressions so the decision can be understood later.

## Limits and failure modes

Outdated records can create false confidence. Changes to prompts, data, and tools can also change behavior and belong in version history. Incident response needs detection, containment, investigation, recovery, and follow-up.

The NIST AI RMF provides a voluntary risk-management framework. It replaces neither concrete technical evidence nor assessment of applicable legal requirements. This chapter describes an engineering process and does not assert legal compliance. Assign ownership for checking requirements relevant to the actual deployment.

## Exercise

A new data source is added but the model is unchanged. Is another review necessary?

## Answer and self-check

Yes. New content, permissions, or freshness problems can change answers. Check provenance, authorization, data quality, and representative tasks; update the recorded system version.

## Sources and further reading

- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Keep learning

[Previous: 22](22-human-ai-interaction.md) · [Overview](README.md) · [Next: 24](24-agent-testing.md) · [Deutsch](../de/23-governance-risk.md)
