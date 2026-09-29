# Human interaction and approval design

Design approvals so people can judge the concrete effect of an action.

## Learning goal

Distinguish drafting, approval, and execution. Human control is particularly useful at clear decision points. Excessive trivial prompts create habituation; insufficient information makes approval meaningless.

## A useful approval includes

| Element | Example |
| --- | --- |
| Action | Update three files |
| Affected resources | Exact filenames and versions |
| Change | Visible difference from the current state |
| Effect | Public release or internal draft only |
| Validity | Approval for this specific proposal |

Consent should bind to a particular proposed change. If recipients, resources, or content change afterward, the application must check whether approval remains valid.

## Worked example

An agent prepares a new product description. The reviewer sees old and new text and the publication destination. After approval, exactly that version is published. If execution fails, the system displays the actual state and provides a traceable retry path. It does not describe the draft as published before receiving confirmation from the publishing system.

## Limits and failure modes

A dialog saying only “Continue?” provides little meaningful control. Approval with no expiry can be reused inappropriately later. Record the decision, time, proposal version, and executing identity without collecting unnecessary personal content.

Accessible operation is part of control: buttons need clear names, keyboard support, and visible focus. Users must be able to reject or cancel without accidentally triggering the default action. Make the distinction between approving a draft and approving publication explicit.

## Exercise

After approval, an agent changes the publication destination. May it automatically continue?

## Answer and self-check

The original approval does not automatically cover the changed effect. Stop execution and assess the new proposal under the defined approval rules. A previously approved action is not unrestricted permission for related actions.

## Sources and further reading

- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)
- [Building effective agents — Anthropic (2024)](https://www.anthropic.com/engineering/building-effective-agents)

## Keep learning

[Previous: 21](21-inference-serving.md) · [Overview](README.md) · [Next: 23](23-governance-risk.md) · [Deutsch](../de/22-human-ai-interaction.md)
