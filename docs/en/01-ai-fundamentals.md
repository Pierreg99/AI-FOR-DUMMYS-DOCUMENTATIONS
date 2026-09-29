# AI fundamentals

Distinguish models, applications, and autonomy before choosing an AI system.

## Learning goal

Describe an AI application through its task, data, and limits. Artificial intelligence includes different methods for perception, learning, planning, and decisions. Not every AI system learns from data: a rule-based expert system can encode knowledge explicitly.

## The core idea

A model is a component. An application adds data access, an interface, permissions, and error handling. A spam filter classifies messages; an assistant may also draft replies. An execution environment decides whether and how a draft is sent.

| Dimension | Question | Example |
| --- | --- | --- |
| Performance | How well does it solve a task? | Fraction of spam correctly identified |
| Breadth | Which tasks does it cover? | Email only, or images too? |
| Autonomy | Which decisions may it make independently? | Label, move, or delete? |

These dimensions are separate. Giving a model more permissions does not automatically improve its quality.

## Worked example

A team handles 100 requests each day. A rule-based lookup reliably finds known order numbers. A language model then writes a readable response using the retrieved record. This process does not require an agent that plans freely. The combination is easier to inspect because retrieving data and drafting text have separate responsibilities.

## Limits and failure modes

Fluent output is not proof of truth or understanding. Good results on example data say little about unfamiliar cases. Define a simple baseline and a representative test set before selecting a system. Count legitimate messages rejected by mistake, as well as correctly detected spam. Keep the cost of each kind of error visible: losing a customer email may matter more than leaving one advertisement in an inbox.

## Exercise

Describe a calendar assistant using the three dimensions. What extra control does it need when allowed to book meetings?

## Answer and self-check

Performance covers correct times and participants; breadth covers supported meeting types; autonomy covers permitted actions. Before booking, the application needs a concrete check of the calendar, time, and authorization. Good wording cannot replace that check.

## Sources and further reading

- [Levels of AGI — Morris et al.](https://arxiv.org/abs/2311.02462)
- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Keep learning

[Overview](README.md) · [Next: 02](02-machine-learning.md) · [Deutsch](../de/01-ai-fundamentals.md)
