# Memory, tools, and context

Separate persistent information from current model input and give each store a clear purpose.

## Learning goal

Explain what is stored, what is retrieved, and what actually enters a model call. A large context window is not persistent memory. Persistence requires external storage and rules governing access.

## Types of information

| Type | Content | Example |
| --- | --- | --- |
| Working state | Current task and intermediate steps | Documents still awaiting review |
| Episodic memory | Previous events | Outcome of an earlier run |
| Semantic memory | Stored assertions | A confirmed product description |
| Context | Information selected for this call | A question and relevant sources |

Tools connect the runtime to search, databases, or other functions. Their results are checked and, where appropriate, summarized for the next model call. Not every tool output belongs in context in full.

## Worked example

A learning assistant stores that chapter 6 is complete. A later question needs the chapter status and relevant subject material, not necessarily the entire conversation. A stored preference retains its provenance; a later correction supersedes the earlier version. The interface should explain where persistent preferences can be reviewed or removed.

## Limits and failure modes

Stale memories can distort new answers. Summaries can lose qualifications. Unverified model text should therefore not automatically become a persistent fact. Store source, timestamp, validity, and the correct person or organization association.

Define deletion and expiry for derived indexes too. Check whether a deleted entry can reappear from a cache or summary. Measure retrieval relevance as well as storage size; more retained information is not automatically more useful memory.

## Exercise

A user changes their preferred language. Why is appending the new statement to conversation history insufficient?

## Answer and self-check

Later retrieval might rank the old statement higher. Update the authoritative preference, handle contradictions explicitly, and check the next retrieval. History and currently valid state serve different purposes.

## Sources and further reading

- [Effective context engineering — Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [Privacy Framework — NIST](https://www.nist.gov/privacy-framework)

## Keep learning

[Previous: 08](08-agentic-ai.md) · [Overview](README.md) · [Next: 10](10-multi-agent-systems.md) · [Deutsch](../de/09-memory-tools-context.md)
