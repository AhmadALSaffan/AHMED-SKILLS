# Architecture

### Goal
Maintain a clear structure where features, business rules, infrastructure, and user interfaces can evolve safely.

### AI Must Do
- Inspect the existing project architecture before adding files or layers.
- Organize growing projects by feature when that improves discoverability and ownership.
- Separate presentation, domain, data, and infrastructure concerns where project complexity justifies it.
- Keep UI and presentation responsible for rendering, interaction, navigation, and UI state.
- Keep domain responsible for business rules, use cases, domain models, and contracts.
- Keep data responsible for APIs, databases, caches, files, DTOs, and repository implementations.
- Keep external SDKs, cloud services, auth providers, analytics, notifications, and queues at infrastructure boundaries.
- Avoid circular dependencies and enforce a clear dependency direction.
- Use dependency injection when it improves testability, configuration, or separation from external implementations.
- Prefer a modular monolith before microservices unless independent deployment, scaling, team ownership, or operational requirements justify microservices.
- Add short Architecture Decision Records for important, long-lived technical decisions.

### AI Must Not Do
- Do not force every small project into a complex multi-layer architecture.
- Do not allow UI code to directly control database, network, or vendor SDK logic when a boundary is appropriate.
- Do not introduce microservices, message queues, event buses, or distributed systems without a verified need.
- Do not create circular imports or modules that depend on each other in both directions.

### Verification Checklist
- Confirm every changed file belongs to an appropriate layer or feature.
- Confirm dependency direction is clear and does not create cycles.
- Confirm business logic is not tightly coupled to framework or vendor details.
- Confirm new architecture complexity is justified by the project.

### When to Ask
- Ask before reorganizing major folders, introducing modules, splitting services, or changing architectural boundaries broadly.
