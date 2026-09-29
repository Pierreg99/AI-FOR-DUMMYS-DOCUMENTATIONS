# Machine learning and deep learning

Learn how models learn from data and how to separate honest evaluation from impressive training scores.

## Learning goal

Separate training, validation, and test data and identify a suitable learning approach. Machine learning adjusts model parameters using data. Deep learning uses neural networks with multiple processing layers; it is a subset of machine learning.

## Learning approaches

| Approach | Learning signal | Example |
| --- | --- | --- |
| Supervised learning | Input paired with a target | Support request category |
| Unsupervised learning | Structure without target labels | Grouping similar documents |
| Self-supervised learning | A target derived from the data | Predicting missing or subsequent tokens |
| Reinforcement learning | Feedback about actions | A strategy in a simulated environment |

During training, an optimization method changes parameters to reduce a loss function. During inference, the system applies learned parameters to new inputs. A user correction does not automatically update those parameters.

## Worked example

For 1,000 support requests, allocate an illustrative 700 to training, 150 to model selection, and 150 to the final test. Messages from the same conversation stay in the same group. Otherwise the model may already know nearly identical text. These numbers are an exercise split, not a universal prescription.

Accuracy alone misleads when urgent requests are rare: if only 20 of 1,000 are urgent, always predicting “not urgent” achieves 98 percent accuracy while finding no urgent cases.

## Limits and failure modes

Overfitting means a model captures training-specific details too strongly. Data leakage, changing input distributions, and imbalanced classes distort evaluation. Inspect precision and recall for each class and compare against simple rules. Keep the final test set separate from repeated tuning decisions; once used for tuning, it no longer provides an untouched estimate.

## Exercise

Why should ten near-identical copies of one message not be randomly distributed across training and test sets?

## Answer and self-check

The copies expose test information to the model. Remove duplicates or group related records before splitting. For time-dependent tasks, a chronological split may better reflect real use.

## Sources and further reading

- [Deep Learning — Goodfellow, Bengio & Courville](https://www.deeplearningbook.org/)

## Keep learning

[Previous: 01](01-ai-fundamentals.md) · [Overview](README.md) · [Next: 03](03-transformers-foundation-models.md) · [Deutsch](../de/02-machine-learning.md)
