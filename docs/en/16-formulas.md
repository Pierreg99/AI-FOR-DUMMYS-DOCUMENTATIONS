# Formulas and quantitative models

Calculate cost, success rates, and latency with explicit units and assumptions.

## Learning goal

Perform simple system calculations and explain when their assumptions do not hold. These models are planning aids, not current price lists or universal quality measures.

## Token cost

When prices are quoted per million tokens:

```text
cost = input_tokens / 1_000_000 * input_price
     + output_tokens / 1_000_000 * output_price
```

At assumed prices of 2 and 8 currency units per million, 2,000 input tokens and 500 output tokens cost `0.004 + 0.004 = 0.008`. Tool, storage, and infrastructure costs may be additional. These values are exclusively a worked example.

## Success and repeated attempts

```text
success_rate = successful_tasks / attempted_tasks
independent_chain_success = p ** steps
cost_per_success = total_cost / successful_tasks
```

With zero successes, cost per success is undefined; do not display an invented zero. The chain model assumes independent steps with equal success probability. Shared failure causes and recovery change the result.

## Latency and capacity

Serial execution times add up. For parallel branches, the longest dependent path and coordination overhead determine duration. Under stable conditions, Little's Law relates `average number in system = arrival rate * average time in system`.

For example, 4 requests per second spending an average of 3 seconds in the system correspond to an average of 12 concurrent requests. This is not sufficient capacity planning for traffic spikes.

## Limits and failure modes

Do not confuse the mean with the 95th percentile. Adding stage percentiles does not generally produce an end-to-end percentile. Prices must use consistent currencies and units. Include unsuccessful attempts in total cost. State whether human review is included before comparing two systems.

## Exercise

A test costs 12 euros and solves 40 of 50 tasks. What are its success rate and cost per success?

## Answer and self-check

Success is 80 percent; cost per success is 0.30 euros. Cost per attempt is instead 0.24 euros. These measurements answer different questions.

## Sources and further reading

- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Keep learning

[Previous: 15](15-architecture-patterns.md) · [Overview](README.md) · [Next: 17](17-practice-llm-to-runtime.md) · [Deutsch](../de/16-formulas.md)
