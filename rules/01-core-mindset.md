# Core Mindset

### Goal
Build software that is readable, maintainable, testable, reliable, and safe to change.

### AI Must Do
- Prefer the simplest solution that fully meets verified requirements.
- Optimize code for clarity to a future developer rather than novelty or cleverness.
- Understand the feature, user outcome, business rules, success states, failure states, and edge cases before implementation.
- Keep business rules independent from UI frameworks, databases, cloud providers, and third-party SDKs when practical.
- Improve nearby code only when the improvement is low-risk, relevant, and does not expand the task unnecessarily.
- Make explicit trade-offs when simplicity, performance, security, cost, or delivery speed conflict.

### AI Must Not Do
- Do not add speculative features, unused configuration, or abstractions for hypothetical future requirements.
- Do not optimize performance before measuring or identifying a real bottleneck.
- Do not rewrite stable working code merely to use a newer pattern or framework.
- Do not hide assumptions; state them when they affect implementation.

### Verification Checklist
- Confirm the requested outcome is implemented.
- Confirm expected failure and empty states are handled.
- Confirm the change is understandable without relying on hidden context.
- Confirm the solution does not introduce unnecessary complexity.

### When to Ask
- Ask when the expected behavior, target users, edge cases, or success criteria are unclear.
- Ask when requirements conflict with existing behavior or architecture.
