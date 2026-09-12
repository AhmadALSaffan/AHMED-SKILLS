# SOLID Principles

### Goal
Use SOLID principles pragmatically to reduce coupling and make changes and tests safer.

### AI Must Do
- Apply the Single Responsibility Principle by separating unrelated responsibilities.
- Apply Dependency Inversion by depending on stable contracts when external implementations need isolation, replacement, or testing.
- Prefer composition over inheritance unless inheritance accurately models the relationship and remains safe.
- Split oversized interfaces when consumers are forced to depend on methods they do not use.
- Ensure implementations honor the behavior promised by their interfaces or base types.
- Extend stable behavior through focused implementations when doing so reduces risk.

### AI Must Not Do
- Do not create interfaces with only one implementation unless there is a clear testing, boundary, plugin, or replacement reason.
- Do not add factories, providers, wrappers, or layers solely to claim SOLID compliance.
- Do not replace simple direct code with complex abstractions without a demonstrated benefit.
- Do not use inheritance as a shortcut for code reuse when composition is clearer.

### Verification Checklist
- Confirm each component has a focused reason to change.
- Confirm high-level business logic is not tightly coupled to infrastructure details.
- Confirm contracts are small, meaningful, and honored by all implementations.
- Confirm abstractions solve a real present problem.

### When to Ask
- Ask before introducing a major abstraction layer or changing public interfaces across modules.
