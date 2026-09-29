# Security and safety

Limit what an AI system can read and change, and validate consequential actions outside the model.

## Learning goal

Distinguish prompt injection from an ordinary factual error. Prompt injection occurs when untrusted content tries to redirect system behavior. A document might claim that its instructions outrank the actual task.

## Protective layers

| Boundary | Technical control |
| --- | --- |
| Data access | Check identity and permissions before retrieval |
| Tool call | Validate the allowed function and arguments |
| Network | Restrict permitted destinations |
| Write action | Check exact scope and any required approval |
| Operations | Record failures and support stopping execution |

A text instruction alone is not a security boundary. The runtime must reject forbidden actions even when the model provides a persuasive justification.

## Worked example

A retrieved document requests that a secret configuration be sent to an unfamiliar URL. The system treats the request as document content. More importantly, the reading tool cannot access secrets and the network tool does not allow that destination. Multiple independent boundaries reduce the consequences of a failure.

## Limits and failure modes

Filters can be bypassed and classifiers can be wrong. Therefore limit permissions and potential impact. Keep secrets out of model context and logs. For risky actions, approval should display the exact resource state and proposed change.

Tests must cover indirect attacks through search results, tool outputs, and stored memories. A block is meaningful only if no unauthorized side effect actually occurred. Inspect external state rather than relying solely on a refusal message or a safety label in the trace.

## Exercise

A prompt says “Never delete files,” but the tool allows unrestricted deletion. What is missing?

## Answer and self-check

An enforced authorization boundary. Remove deletion capability or restrict it to explicitly permitted resources and conditions. Test the boundary with deliberately unauthorized calls.

## Sources and further reading

- [OWASP Top 10 for LLM Applications](https://owasp.org/projects/top-10-for-large-language-model-applications)
- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Keep learning

[Previous: 13](13-asi.md) · [Overview](README.md) · [Next: 15](15-architecture-patterns.md) · [Deutsch](../de/14-security-safety.md)
