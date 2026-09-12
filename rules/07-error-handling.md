# Error Handling

### Goal
Handle failures explicitly, preserve diagnostic information, and provide safe user-facing behavior.

### AI Must Do
- Treat expected errors as product states and model them explicitly.
- Distinguish validation, authentication, authorization, network, timeout, server, persistence, and unexpected failures.
- Use typed results, error objects, or well-defined exceptions where appropriate.
- Preserve useful diagnostic context in technical logs.
- Convert technical failures into clear, safe, user-friendly messages at the presentation boundary.
- Define retry, fallback, cache, offline, and recovery behavior intentionally.
- Clean up resources and preserve consistent state after failures.

### AI Must Not Do
- Do not silently swallow exceptions.
- Do not use broad catch-all handling that hides the root cause.
- Do not expose stack traces, credentials, internal paths, or sensitive implementation details to users.
- Do not retry non-idempotent or permanent failures blindly.

### Verification Checklist
- Confirm expected failure paths are tested.
- Confirm technical errors retain enough context for debugging.
- Confirm user-facing errors are actionable and safe.
- Confirm retries and fallbacks cannot create duplicate or inconsistent state.

### When to Ask
- Ask when product behavior for offline, conflict, retry, or unrecoverable errors is undefined.
