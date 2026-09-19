# Kapitel 4 — Large Language Models

## Definition
LLMs sind großskalige Sprachmodelle. Bei autoregressiven Modellen wird vereinfacht die nächste Token-Wahrscheinlichkeit geschätzt:

\[
P(x_t \mid x_1,\ldots,x_{t-1})
\]

## Inference-Pipeline
```text
Text → Tokenizer → Token IDs → Model → Logits → Decoding
```

## LLM ≠ Agent
Ein LLM kann hochwertige Antworten erzeugen und dennoch ohne Tools, dauerhaften Zustand oder autonome Ausführung betrieben werden.

## Referenz
- NIST LLM Glossary: https://csrc.nist.gov/glossary/term/large_language_model
