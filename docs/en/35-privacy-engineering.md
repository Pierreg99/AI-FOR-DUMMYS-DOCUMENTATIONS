# Privacy engineering and data protection

Track personal information throughout its lifecycle and minimize unnecessary copies.

## Learning goal

Describe a data-flow inventory and testable privacy controls. Privacy engineering translates protection goals into technical decisions. Legal assessment depends on the deployment context; this chapter does not assert legal compliance.

## Lifecycle and controls

| Phase | Question |
| --- | --- |
| Collection | Which data is necessary for the purpose? |
| Processing | Which services and people receive access? |
| Storage | Where are originals, indexes, caches, and logs? |
| Use | Are purpose and permissions respected? |
| Deletion | Are derived copies included? |

Document retention and ownership for each store. Encryption protects particular access paths but replaces neither authorization nor data minimization.

## Worked example

A support assistant needs an order number and shipping status. Full payment details do not belong in the model context for that task. The application retrieves only necessary fields and logs operation identifiers instead of entire messages. Deletion covers search and cache as well as the primary database.

## Limits and failure modes

Embeddings or pseudonymized datasets are not automatically anonymous. Derived information can still reveal sensitive relationships. Check who can link datasets and what enters error messages or telemetry. Use synthetic personal data to test redaction and deletion without introducing additional exposure.

For external services, verify actual processing, retention, and configuration. Do not rely on assumptions from an earlier product version. Technical controls and applicable legal requirements need accountable owners. Keep that assessment connected to the real deployment rather than a generic checklist.

## Exercise

An application deletes a user from its database but retains conversation summaries in a vector index. Is the technical deletion chain complete?

## Answer and self-check

No. Associate derived records with their origins and include them in deletion. Then verify through targeted retrieval that the information is no longer used.

## Sources and further reading

- [Privacy Framework — NIST](https://www.nist.gov/privacy-framework)
- [AI Risk Management Framework — NIST](https://www.nist.gov/itl/ai-risk-management-framework)

## Keep learning

[Previous: 34](34-evaluation-science.md) · [Overview](README.md) · [Next: 36](36-ai-product-engineering.md) · [Deutsch](../de/35-privacy-engineering.md)
