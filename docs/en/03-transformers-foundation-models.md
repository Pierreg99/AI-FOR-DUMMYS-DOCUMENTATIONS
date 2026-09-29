# Transformers and foundation models

Understand attention as a building block and foundation models as broadly reusable starting points.

## Learning goal

Explain why token positions, attention, and adaptation serve different purposes. A Transformer processes representations of sequence elements. Attention connects information across those elements; other network layers transform the results.

## Understanding the architecture

Tokens first become vectors. Position information distinguishes their order. Attention derives queries, keys, and values from representations. Weights determine which value information contributes to an updated representation.

Common scaled dot-product attention is written as:

```text
Attention(Q, K, V) = softmax(Q K^T / sqrt(d_k)) V
```

This formula describes one mechanism, not the whole model. Autoregressive decoder language models restrict attention to permitted earlier positions during generation. Encoders and other model families may use different masks.

## Worked example

In “The cup does not fit inside the box because it is too small,” a system needs to process relevant relationships between words. Attention supplies a computational structure for this. A displayed attention weight is not a complete explanation of the model's decision.

A foundation model is broadly pretrained and can then be adapted through examples in context, additional components, or further training. Prompting changes the input; fine-tuning changes model parameters. Neither choice removes the need to evaluate performance on the intended task.

## Limits and failure modes

Classical dense attention contains a computation term that grows quadratically with sequence length. Optimized implementations and alternative architectures change practical costs. A long context window also does not guarantee reliable use of every piece of information. Measure results on your actual document lengths and question types.

## Exercise

You provide three correctly answered examples in a prompt. Have you performed fine-tuning?

## Answer and self-check

No. You supplied in-context examples. Parameters remain unchanged during ordinary inference. A separate training process is needed to update them. Test the examples' usefulness using fresh tasks that were not part of your prompt design.

## Sources and further reading

- [Attention Is All You Need — Vaswani et al.](https://arxiv.org/abs/1706.03762)
- [Deep Learning — Goodfellow, Bengio & Courville](https://www.deeplearningbook.org/)

## Keep learning

[Previous: 02](02-machine-learning.md) · [Overview](README.md) · [Next: 04](04-llms.md) · [Deutsch](../de/03-transformers-foundation-models.md)
