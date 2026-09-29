# Generative AI

Compare text, image, audio, and code generation and define quality goals you can actually verify.

## Learning goal

Describe a generation task through its input, intended output, and acceptance criteria. Generative AI produces synthetic content using learned patterns and an input. Language models are part of this landscape; image and audio systems may use different architectures.

## Distinguishing tasks

| Medium | Example | Useful check |
| --- | --- | --- |
| Text | A summary | Are key claims and qualifications preserved? |
| Image | A product illustration | Are the subject, composition, and visible details correct? |
| Audio | Speech output | Are words intelligible and pronounced correctly? |
| Code | A helper function | Does behavior pass tests and edge cases? |

Judge output in its intended context. An attractive image and a precise technical drawing have different requirements. Simply producing an output is not a success criterion.

## Worked example

You want to shorten an instruction manual. Specify the audience, maximum length, and indispensable warnings. Then compare the draft against the original sentence by sentence. If a safety step disappears, the shorter text is unsuitable even if it reads smoothly. Keep the original, input, and revised version together so changes remain traceable.

## Limits and failure modes

Generated content may invent details, reproduce bias, or overlook task constraints. For public or personal material, provenance, usage rights, and consent belong in the review. Do not assume synthetic content is automatically unrestricted to use.

For code, plausible API names do not prove that a library provides those functions. Check the relevant documentation and run the example in a bounded test environment. Include a failing input as well as the happy path: a program that works only for the example supplied by its generator has not been meaningfully checked.

## Exercise

Write three acceptance criteria for an automatically generated summary of an operating manual.

## Answer and self-check

All necessary actions remain present; warnings are represented accurately; no new technical claims appear. Length and style are additional criteria but must not displace correctness.

## Sources and further reading

- [Deep Learning — Goodfellow, Bengio & Courville](https://www.deeplearningbook.org/)
- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Keep learning

[Previous: 04](04-llms.md) · [Overview](README.md) · [Next: 06](06-rag.md) · [Deutsch](../de/05-generative-ai.md)
