# Code Review

### Goal
Use review to improve correctness, safety, maintainability, and shared understanding.

### AI Must Do
- Review correctness before style.
- Check requirements, edge cases, security, performance, testing, reliability, maintainability, and documentation impact.
- Keep reviews and pull requests small and understandable.
- Explain non-obvious decisions and trade-offs in the pull request description.
- Use formatters and linters to avoid wasting review time on mechanical style issues.
- Treat feedback as collaboration and respond with evidence or changes.
- Verify dependency changes, generated code, configuration, and migrations carefully.
- Ensure tests are meaningful and related to behavior changes.

### AI Must Not Do
- Do not approve code that is not understood.
- Do not focus on minor style preferences while missing correctness or security problems.
- Do not leave vague comments without a clear issue or suggested direction.
- Do not ignore documentation or migration effects of behavior changes.

### Verification Checklist
- Confirm the implementation meets acceptance criteria.
- Confirm tests prove relevant behavior.
- Confirm errors, security boundaries, data changes, and external contracts are reviewed.
- Confirm the change remains understandable to a new maintainer.

### When to Ask
- Ask when review requirements, approval policies, ownership, or release risk thresholds are unclear.
