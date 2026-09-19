# Kapitel 14 — Security & Safety

## Zentrale Risiken
- Halluzinationen
- Prompt Injection
- Datenabfluss
- Tool-Missbrauch
- Jailbreaks
- Kontextmanipulation

## Agenten-Risikokette
```text
Bad assumption → Bad tool call → Real side effect
```

## Defense in Depth
```text
Policy
 ↓
Least-privilege tools
 ↓
Sandbox
 ↓
Approval gates
 ↓
Secrets isolation
 ↓
Audit / Monitoring
```

## Referenz
- Anthropic, Trustworthy Agents: https://www.anthropic.com/research/trustworthy-agents
