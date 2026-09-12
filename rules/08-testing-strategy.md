# Testing Strategy

### Goal
Use a balanced automated test suite to protect critical behavior and support safe refactoring.

### AI Must Do
- Add or update tests for behavior changed by the task.
- Prioritize unit tests for business rules, calculations, validation, transformations, and state logic.
- Use integration tests for databases, APIs, queues, auth, cloud services, and serialization boundaries.
- Use end-to-end tests only for critical user flows and high-value integrations.
- Test success, failure, empty, loading, invalid input, timeout, unauthorized, and edge cases where relevant.
- Follow Arrange-Act-Assert or Given-When-Then consistently.
- Keep tests deterministic, isolated, readable, and fast.
- Prefer simple fakes when they express the scenario clearly.
- Use mocks only when verifying interactions or when a fake is not practical.
- Add regression tests for fixed bugs whenever practical.

### AI Must Not Do
- Do not chase code coverage percentage while missing important behavior.
- Do not write tests that depend on test order, real time, unstable external services, or random production data.
- Do not mock every dependency by default.
- Do not accept flaky tests as normal.

### Verification Checklist
- Confirm tests cover changed behavior and important edge cases.
- Confirm tests fail for the intended broken behavior before the fix when practical.
- Confirm tests pass consistently when rerun.
- Confirm test names communicate the expected behavior.

### When to Ask
- Ask if testing tools, environments, external-service credentials, or expected behavior are missing.
