# Design Patterns

### Goal
Apply patterns only when they make a current problem simpler, safer, or more extensible.

### AI Must Do
- Use Repository patterns to isolate data-access details when appropriate.
- Use Use Case or Command patterns to represent business actions with meaningful workflows.
- Use Adapter patterns for incompatible external interfaces.
- Use Strategy patterns when behavior must vary by a known, replaceable rule.
- Use Factory or Builder patterns when object construction is complex or depends on runtime conditions.
- Use Observer or Pub-Sub for well-defined state and event propagation.
- Use State patterns for genuinely complex workflows or UI states.
- Use Decorator or Facade patterns when they reduce coupling or simplify complex subsystems.
- Use Circuit Breakers, retries with backoff, and cache-aside patterns when external service reliability requires them.

### AI Must Not Do
- Do not force a design pattern into code for prestige or theoretical purity.
- Do not introduce a pattern when a clear function, map, enum, or conditional is simpler.
- Do not hide core business behavior behind layers of generic abstractions.

### Verification Checklist
- Confirm the chosen pattern solves a real current problem.
- Confirm the pattern reduces complexity for callers or future changes.
- Confirm abstractions have meaningful names and boundaries.

### When to Ask
- Ask before adding patterns that change architecture broadly or introduce new framework dependencies.
