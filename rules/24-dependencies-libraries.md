# Dependencies & Libraries

### Goal
Use a minimal, secure, maintainable dependency set with clear ownership and upgrade practices.

### AI Must Do
- Prefer stable, maintained, well-documented dependencies.
- Evaluate functionality, security, maintenance activity, license, compatibility, bundle size, performance, cost, and lock-in risk.
- Keep direct dependency count low.
- Pin versions appropriately and update dependencies regularly.
- Remove unused dependencies and transitive risks where possible.
- Read release notes before major upgrades.
- Wrap external SDKs behind internal boundaries when this improves testability, portability, or resilience.
- Audit direct and transitive dependencies for vulnerabilities.

### AI Must Not Do
- Do not add a library for trivial functionality that can be safely implemented with existing tools.
- Do not add abandoned, unmaintained, incompatible, or insecure dependencies without explicit approval and risk explanation.
- Do not upgrade multiple major dependencies blindly in an unrelated task.
- Do not expose third-party SDK details throughout business logic without a reason.

### Verification Checklist
- Confirm the dependency is necessary and compatible with the project.
- Confirm license and security implications are acceptable.
- Confirm lockfiles and manifests are updated consistently.
- Confirm tests and build pass after dependency changes.

### When to Ask
- Ask before adding paid services, dependencies with restrictive licenses, major framework upgrades, or libraries that introduce vendor lock-in.
