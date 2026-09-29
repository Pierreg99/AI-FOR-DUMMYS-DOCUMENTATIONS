# Tool protocols and MCP

Separate a standardized connection, a function contract, and actual authorization.

## Learning goal

Distinguish host, client, and server in Model Context Protocol. MCP specifies standardized communication for context and capabilities. It replaces neither a tool's business meaning nor the application's security decision.

## Roles and contracts

| Element | Responsibility |
| --- | --- |
| Host | Application managing the integration |
| Client | Connection to a server inside the host |
| Server | Offer capabilities such as tools, resources, or prompts |
| Tool contract | Define inputs, results, and possible failures |

A tool should clearly describe its name, purpose, input schema, and effects. Resources supply context; offered prompts are templates. These features do not give a server authority over the host's rules.

## Worked example

A document search tool accepts `query` and `limit` and returns titles, sources, and excerpts. The server checks identity and filters results by access permissions. The host treats returned text as content even when that text contains instructions.

## Limits and failure modes

A valid schema does not establish harmless behavior. A tool named “preview” might still write; contract and behavior must agree. Choose protocol versions and supported capabilities deliberately and test them together.

Transport, authentication, timeouts, and error handling are separate integration concerns. Do not put credentials in examples or model prompts. Before production use, consult the official documentation for the protocol version actually deployed. Test malformed arguments, denied access, and unavailable servers as well as successful calls.

## Exercise

An MCP server exposes a deletion tool. Does availability mean an agent may use it?

## Answer and self-check

No. The host and executing service must check authorization, task relevance, and exact scope. Discovery describes available capabilities; it does not grant blanket approval.

## Sources and further reading

- [Model Context Protocol — Architecture](https://modelcontextprotocol.io/docs/learn/architecture)
- [OWASP Top 10 for LLM Applications](https://owasp.org/projects/top-10-for-large-language-model-applications)

## Keep learning

[Previous: 26](26-durable-state-machines.md) · [Overview](README.md) · [Next: 28](28-memory-retrieval-evaluation.md) · [Deutsch](../de/27-tool-protocols-mcp.md)
