# From language model to agent runtime

Build a small, verifiable runtime before adding more autonomy.

## Learning goal

Extend a model integration step by step with state, tools, and verification. Start with a clear task, such as inspecting documents and producing a report. Explicitly define which resources may be changed.

## Incremental implementation

1. Build one model call with fixed inputs and checkable output.
2. Retrieve sources while preserving provenance and access rights.
3. Add tools with schemas, deadlines, and error formats.
4. Introduce a bounded loop with explicit terminal states.
5. Persist state transitions and test restarts.
6. Add metrics, authorization checks, and approvals.

## Pseudocode example

```text
for step in allowed_steps:
    proposal = model(current_state)
    action = validate_schema_and_permissions(proposal)
    if action.is_final:
        return verify_result(action, current_state)
    result = execute_with_deadline(action)
    current_state = persist_observation(result)
return controlled_stop("step budget exhausted")
```

This is not a complete production implementation. Atomic storage, concurrent execution, and external side effects require additional decisions. Keep those decisions explicit rather than hiding them behind a generic retry function.

## Limits and failure modes

If a connection fails after a write call, the effect may be unknown. Retrying requires the same idempotency key or reconciliation with external state. The model should not resolve this uncertainty by guessing.

Record a run ID, relevant versions, and observed results. Secrets belong in runtime configuration, not in the prompt. A clear failure state is more useful than an endless loop. Include a cancellation path and make sure it prevents new work from starting while ongoing actions are reconciled.

## Exercise

Which three interruptions should you simulate before the first release?

## Answer and self-check

A model timeout, a tool error, and a process restart after an external action. For each, check that the task ends or resumes traceably and that no duplicate effect occurs.

## Sources and further reading

- [ReAct — Yao et al.](https://arxiv.org/abs/2210.03629)
- [Temporal — Workflow execution](https://docs.temporal.io/workflow-execution)

## Keep learning

[Previous: 16](16-formulas.md) · [Overview](README.md) · [Next: 18](18-roadmap-llm-agent-agi.md) · [Deutsch](../de/17-practice-llm-to-runtime.md)
