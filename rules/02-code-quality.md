# Code Quality

### Goal
Write code that clearly communicates intent and can be safely understood, modified, and tested.

### AI Must Do
- Use clear, intention-revealing names for variables, functions, classes, modules, files, and APIs.
- Keep functions focused on one clear responsibility.
- Keep classes and modules cohesive around one responsibility or feature area.
- Remove meaningful duplication when duplicated code represents the same rule and must change together.
- Use constants, enums, configuration, or meaningful types instead of unexplained magic values.
- Prefer immutable data and explicit state transitions where practical.
- Use guard clauses and early returns to reduce nesting.
- Keep side effects visible and isolated from pure business logic when possible.
- Write comments to explain non-obvious decisions, constraints, or why a solution exists.
- Apply existing formatting and code-style rules consistently.

### AI Must Not Do
- Do not use vague names such as `data`, `temp`, `helper`, `manager`, `utils`, `value`, `item`, or `result` when a more meaningful name is possible.
- Do not create excessively small functions that make the main flow difficult to follow.
- Do not duplicate business rules across multiple files without a clear reason.
- Do not add comments that merely repeat what obvious code already says.
- Do not leave debug prints, commented-out code, unused imports, unused variables, or dead branches.

### Verification Checklist
- Confirm names explain purpose and behavior.
- Confirm functions and modules have focused responsibilities.
- Confirm no avoidable deep nesting or duplicated logic remains.
- Confirm formatter and linter pass when available.

### When to Ask
- Ask before renaming public APIs, database fields, serialized fields, environment variables, or external contracts that may break compatibility.
