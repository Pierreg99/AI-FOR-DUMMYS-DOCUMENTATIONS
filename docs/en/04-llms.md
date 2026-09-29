# Large language models

Understand tokens, context, and text generation without confusing a language model with a complete agent.

## Learning goal

Describe a model call and explain why plausible answers need verification. A large language model processes language as tokens. A token may be a word, part of a word, or another character pattern. Counts depend on both the tokenizer and the language.

## From text to response

1. The tokenizer converts input into token IDs.
2. The model processes the available representations.
3. An autoregressive model produces a distribution for the next token.
4. A decoding rule selects a token, and the process repeats.

```text
P(next_token | previous_tokens)
```

Temperature and sampling influence selection. Low temperature does not make an answer true. A repeatable answer can still be factually wrong, and changes in the backend or model can change results.

## Worked example

An assistant is asked for a delivery date. Without order data, it may generate a plausible date. With a checked record, the application can formulate an answer from available facts. Define what happens when the date is missing: for example, respond “Not yet confirmed” instead of inventing an estimate.

## Limits and failure modes

The context window bounds information available to a call. Depending on the service, input and generated output may share a limit or have separate limits. Persistent memory requires additional storage. A language model alone does not automatically have current information or permission to perform external actions.

Structured output needs schema and content checks in the application. Valid JSON can still contain an incorrect order number. Evaluate factual support, missing-data behavior, and response format separately; a single overall score can hide a severe defect in one of them.

## Exercise

A response is valid JSON but names a product that does not exist. Which check is missing?

## Answer and self-check

A semantic check against the product inventory. Syntax, schema, facts, and permissions require separate checks. A parser establishes only that an output can be read.

## Sources and further reading

- [Deep Learning — Goodfellow, Bengio & Courville](https://www.deeplearningbook.org/)
- [Attention Is All You Need — Vaswani et al.](https://arxiv.org/abs/1706.03762)

## Keep learning

[Previous: 03](03-transformers-foundation-models.md) · [Overview](README.md) · [Next: 05](05-generative-ai.md) · [Deutsch](../de/04-llms.md)
