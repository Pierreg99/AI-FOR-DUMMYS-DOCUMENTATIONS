# Multimodal AI systems

Combine text, images, and audio while preserving provenance, timing, and each modality's limits.

## Learning goal

Break a multimodal task into inputs, processing, and outcome verification. Multimodal systems process or generate multiple kinds of information. A shared interface does not imply equally strong capabilities in every modality.

## Checking inputs and outputs

| Modality | Typical disruption | Useful test |
| --- | --- | --- |
| Image | Small text or cropped regions | Different resolutions and crops |
| Audio | Noise or overlapping voices | Intelligibility and speaker changes |
| Video | Missing temporal context | Event order and timestamps |
| Text | Conflict with visible details | Check claims against original evidence |

Preserve relevant original references and timestamps. A transcript is a derived representation and can contain errors.

## Worked example

A system summarizes a learning video using selected frames and a timestamped transcript. If it claims a slide contains three steps, that claim is checked against the corresponding frame. A spoken “not” must not disappear during transcription. Keep enough context to distinguish a speaker's example from their actual recommendation.

## Limits and failure modes

Unreadable details may be replaced with plausible guesses. Audio and visual information can be misaligned in time. Instructions inside images or recordings are also untrusted content and must not grant additional permissions.

Measure errors per modality and for the combined task. Strong text performance can conceal weak image recognition. Provide alternative descriptions and captions where needed for accessibility. Account for processing time and input size when comparing configurations.

## Exercise

A model reads a serial number from a blurry photograph. What should the application do before updating inventory?

## Answer and self-check

Check the number against a reliable source or request a clearer image or confirmation. Uncertain perception must not trigger an unchecked change to a specific object.

## Sources and further reading

- [Deep Learning — Goodfellow, Bengio & Courville](https://www.deeplearningbook.org/)
- [OWASP Top 10 for LLM Applications](https://owasp.org/projects/top-10-for-large-language-model-applications)

## Keep learning

[Previous: 32](32-retrieval-optimization.md) · [Overview](README.md) · [Next: 34](34-evaluation-science.md) · [Deutsch](../de/33-multimodal-ai.md)
