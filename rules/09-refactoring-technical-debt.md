# Refactoring & Technical Debt

### Goal
Improve internal design safely without changing externally expected behavior unless requested.

### AI Must Do
- Refactor in small, reviewable, behavior-preserving steps.
- Add protective tests before risky refactors in legacy areas when practical.
- Remove duplication, dead code, obsolete configuration, stale TODOs, and unnecessary complexity when directly relevant.
- Track deferred debt clearly with context and an issue reference when available.
- Prefer incremental migration paths over large rewrites.
- Keep commits and changes focused so regressions are easy to isolate.

### AI Must Not Do
- Do not perform a broad rewrite while implementing a small feature or bug fix.
- Do not change external behavior during a refactor unless explicitly requested.
- Do not delete apparently unused code without checking dynamic usage, reflection, configuration, generated code, and public contracts.
- Do not leave the system in a partially migrated state without a safe transition plan.

### Verification Checklist
- Confirm behavior remains unchanged unless change was requested.
- Confirm tests pass before and after refactoring.
- Confirm removed code has no active references or runtime dependency.
- Confirm the change reduces complexity rather than redistributing it.

### When to Ask
- Ask before a large rewrite, framework migration, data migration, or refactor likely to affect many features.
