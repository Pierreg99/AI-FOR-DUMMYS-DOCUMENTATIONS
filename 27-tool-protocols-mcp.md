27 — Tool Protocols, MCP & Interface Contracts

## Ziel
Tool-Aufrufe sollten über explizite, versionierte Verträge laufen statt über implizite Annahmen des Modells.

## Vertrag
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

## Side-Effect-Klassen
- read-only
- reversible write
- irreversible or high-impact action

## Security
Tool-Metadaten sind untrusted input. Das Modell entscheidet nicht allein über Berechtigungen; Policy Enforcement muss außerhalb des Modells liegen.

## Compatibility
Schema-Versionen, Fehlercodes und deprecation windows helfen, Agenten-Runtimes unabhängig von einzelnen Tool-Implementierungen weiterzuentwickeln.