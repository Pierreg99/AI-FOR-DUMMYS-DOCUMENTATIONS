# Agent testing and verification

Test state changes and authorization boundaries as well as the visible final answer.

## Learning goal

Distinguish deterministic software tests from probabilistic behavior evaluations. Both matter: a tool validator can be checked precisely, while an open-ended answer needs a rubric and possibly repeated runs.

## Testing layers

| Layer | Example |
| --- | --- |
| Unit test | Invalid tool arguments are rejected |
| Contract test | Tool results follow the agreed schema |
| Integration test | Stored state matches external effects |
| Scenario test | A complete user task is solved |
| Fault test | Restart after a partial failure |
| Adversarial test | External document text gains no extra permissions |

Use realistic but safe test data. External writes should run in controlled test systems or through traceable fakes. Clearly label the boundary between simulated behavior and a real integration.

## Worked example

An agent creates a ticket. The test checks the actual ticket, title, assignment, and call count, not just “Ticket created.” Then simulate a connection failure. A retry with the same operation identifier must not create a second ticket.

## Limits and failure modes

Tests that merely reproduce the implementation can share its mistaken assumptions. Write requirements first and check observable behavior. Hold back an untouched evaluation set so optimization does not only improve familiar examples.

Record model, prompt, and tool versions, configuration, and test data identifiers. A fixed random seed can help but does not guarantee identical results in every situation on external model platforms. Report the number of runs and distinguish intermittent failures from consistent ones.

## Exercise

Which three assertions belong in a test for an unauthorized deletion request?

## Answer and self-check

The request is rejected; the resource remains intact; the rejection reason is traceable. A polite refusal message is insufficient if the tool was nevertheless executed.

## Sources and further reading

- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)
- [OWASP Top 10 for LLM Applications](https://owasp.org/projects/top-10-for-large-language-model-applications)

## Keep learning

[Previous: 23](23-governance-risk.md) · [Overview](README.md) · [Next: 25](25-distributed-agent-runtime.md) · [Deutsch](../de/24-agent-testing.md)
