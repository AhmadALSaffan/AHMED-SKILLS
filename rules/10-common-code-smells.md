# Common Code Smells

### Goal
Detect design warning signs early and apply focused, low-risk improvements.

### AI Must Do
- Identify long methods and extract coherent steps when it improves readability.
- Identify large classes and separate unrelated responsibilities.
- Identify duplicated business logic and centralize it only when the logic should evolve together.
- Replace long parameter lists with focused request objects or meaningful models when appropriate.
- Reduce deep nesting through guard clauses, helper functions, or explicit state modeling.
- Reduce tight coupling by introducing a boundary only where it has a practical purpose.
- Replace growing switch or if chains with a clear model, strategy, or map when new cases are expected.
- Remove dead code, hidden side effects, and catch-and-ignore behavior.

### AI Must Not Do
- Do not apply refactors mechanically without understanding the domain.
- Do not replace a simple two-case condition with a complex pattern prematurely.
- Do not centralize unrelated similar-looking code into a misleading shared utility.

### Verification Checklist
- Confirm refactoring makes the code easier to understand and modify.
- Confirm there is no new unnecessary indirection.
- Confirm tests still cover the changed logic.

### When to Ask
- Ask if multiple potential refactor directions have meaningfully different architecture or maintenance costs.
