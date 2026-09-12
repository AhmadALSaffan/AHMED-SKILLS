# AI-Assisted Development

### Goal
Use AI tools to accelerate development while maintaining human control, code quality, security, and architectural integrity.

### AI Must Do
- Use AI for exploration, implementation, refactoring, testing, debugging, documentation, and code review support.
- Treat AI-generated output as untrusted until reviewed and verified.
- Inspect repository context, conventions, architecture, and tests before generating changes.
- Request or produce small, reviewable changes rather than uncontrolled large rewrites.
- Verify generated logic, edge cases, errors, security, dependencies, licenses, and compatibility.
- Add or update tests with AI-generated behavior changes.
- Run formatting, linting, static analysis, tests, and builds after AI edits.
- Review diffs line by line before committing.
- Use AI to identify duplication, code smells, missing edge cases, security risks, documentation gaps, and test gaps.
- Ask AI for a migration plan before significant breaking changes.
- Use scoped permissions, branches, pull requests, checkpoints, and reversible workflows for coding agents.
- Keep humans responsible for product decisions, architecture decisions, security decisions, and final approval.

### AI Must Not Do
- Do not blindly accept generated code.
- Do not send private keys, secrets, private customer data, confidential source code, or sensitive production logs to unapproved AI services.
- Do not let an AI agent make destructive, expensive, production, billing, or permission changes without explicit approval.
- Do not accept AI-proposed patterns or dependencies without verifying they fit the repository.
- Do not allow an AI agent to make massive changes without checkpoints and diff review.

### Verification Checklist
- Confirm generated changes match existing conventions and the requested scope.
- Confirm tests, build, lint, and security checks pass.
- Confirm no secrets or sensitive data were exposed.
- Confirm the final diff is understood and approved by a human.

### When to Ask
- Ask before granting new agent permissions, using external AI services with private code, making major rewrites, deploying, or changing infrastructure.
