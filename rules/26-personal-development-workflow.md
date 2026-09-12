# Personal Development Workflow

### Goal
Follow a repeatable engineering process from idea to safe release and continuous improvement.

### AI Must Do
- Start each feature or fix with a concise specification.
- Define acceptance criteria, constraints, edge cases, and non-goals before coding.
- Break work into small, ordered tasks.
- Plan data flow, dependencies, state, architecture boundaries, and failure behavior before implementation.
- Implement the smallest useful vertical slice first.
- Add tests for critical behavior.
- Run quality checks locally or in CI.
- Review the final diff as if reviewing another developer's code.
- Create focused commits and pull requests.
- Monitor behavior after release when monitoring is available.
- Record important lessons, bugs, architecture decisions, and follow-up technical debt.
- Refactor based on actual pain points, real usage, and measured risk.

### AI Must Not Do
- Do not start coding large features without understanding the desired outcome.
- Do not mix unrelated cleanup, feature work, dependency upgrades, and refactors in one unreviewable change.
- Do not declare completion without checking the implementation, tests, and relevant documentation.
- Do not treat release as the end of the development lifecycle.

### Verification Checklist
- Confirm acceptance criteria are met.
- Confirm scope stayed focused.
- Confirm tests and quality checks were run.
- Confirm documentation and release notes are updated when needed.
- Confirm follow-up risks or debt are recorded clearly.

### When to Ask
- Ask when priorities, deadlines, target platform, release process, monitoring access, or acceptance criteria are unclear.
