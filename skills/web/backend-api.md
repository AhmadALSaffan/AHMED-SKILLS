# Backend API Development

## Purpose

Use this skill file only when the task is relevant to backend and API development. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Validate input, authentication, authorization, ownership, and business rules on the server.
- Use consistent request, response, status code, and error formats.
- Keep controllers or route handlers thin; move business rules into focused services or use cases.
- Use parameterized queries or safe ORM operations.
- Handle timeouts, retries, idempotency, rate limits, pagination, and observability where relevant.
- Keep secrets in approved server-side configuration.
- Add API, integration, and authorization tests for changed behavior when practical.

## AI Must Not Do

- Do not trust client-provided roles, IDs, prices, permissions, or validation results.
- Do not expose stack traces, internal errors, database details, or secrets in responses.
- Do not construct database queries by string concatenation with untrusted input.
- Do not introduce breaking API changes without versioning or explicit approval.

## Verification Checklist

- Confirm authentication and authorization are enforced server-side.
- Confirm validation and error responses are consistent.
- Confirm database operations are safe and transactional where required.
- Confirm API tests, lint, type checks, and build pass.
