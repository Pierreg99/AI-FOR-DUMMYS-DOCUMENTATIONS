27 — Tool Protocols, MCP & Interface Contracts

## Goal
Tool calls should use explicit, versioned contracts rather than assumptions made by the model.

## Contract
```text
Tool
├── name
├── version
├── input schema
├── output schema
├── auth scope
├── timeout
└── side-effect class
```

## Side-effect classes
- read-only
- reversible write
- irreversible or high-impact action

## Security
Tool metadata is untrusted input. The model must not be the sole authorization authority; policy enforcement belongs outside the model.

## Compatibility
Schema versions, error codes, and deprecation windows help runtimes evolve independently of individual tool implementations.