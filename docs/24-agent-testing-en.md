# 24 — Agent Testing & Verification

## Why classic unit tests are not enough

Agents combine probabilistic model outputs with deterministic software components. Testing therefore needs multiple layers.

## Test pyramid

```text
Unit tests
  ↓
Tool contract tests
  ↓
Integration tests
  ↓
Scenario tests
  ↓
Long-horizon evaluations
  ↓
Production monitoring
```

## Test types

- **Unit:** deterministic functions
- **Contract:** tool schemas and failure contracts
- **Scenario:** defined agent tasks
- **Adversarial:** prompt injection and unexpected inputs
- **Regression:** behavior across model/prompt versions
- **Reliability:** repeated execution and recovery

## Reproducibility

Tests should record model version, prompt version, tool version, test data, and relevant runtime configuration.

## Success criteria

The final answer is not the only signal. Tool selection, authorization, side effects, cost, and recovery behavior should also be evaluated.
