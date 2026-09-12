# API Design

### Goal
Create predictable, secure, documented APIs with stable contracts and clear failure behavior.

### AI Must Do
- Design endpoints and contracts around clear resources and use cases.
- Use consistent naming, request formats, response formats, status codes, and error structures.
- Validate authentication, authorization, input shape, business rules, and limits at API boundaries.
- Return stable error codes and useful messages that clients can handle.
- Define pagination, filtering, sorting, searching, and rate limiting where relevant.
- Make idempotency, retries, timeouts, and concurrency behavior explicit for mutating operations.
- Version APIs when making breaking contract changes.
- Maintain an API contract or OpenAPI specification when appropriate.
- Avoid leaking internal implementation, database schema, stack traces, or vendor-specific details.

### AI Must Not Do
- Do not expose secrets or internal-only fields in API responses.
- Do not trust client-side validation as the only validation.
- Do not return inconsistent response shapes for equivalent outcomes.
- Do not introduce a breaking API change without versioning or explicit approval.

### Verification Checklist
- Confirm input validation, authentication, and authorization are enforced server-side.
- Confirm success and error responses are consistent and documented.
- Confirm mutating endpoints are safe against accidental duplicate execution where necessary.
- Confirm API changes are covered by tests.

### When to Ask
- Ask before introducing breaking API changes, public endpoints, external webhooks, or data exposure changes.
