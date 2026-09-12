# Data Modeling

### Goal
Represent business concepts accurately while keeping external and storage formats isolated from core logic.

### AI Must Do
- Use domain models separate from API DTOs and database entities when formats or responsibilities differ.
- Map external responses and persistence entities explicitly into domain models.
- Validate untrusted input at boundaries.
- Use meaningful types or value objects for important concepts such as money, email, IDs, dates, and statuses when useful.
- Define nullability, defaults, ownership, lifecycle, and valid state transitions clearly.
- Handle missing, invalid, stale, partial, and legacy data deliberately.
- Plan migrations and backward compatibility for persisted data changes.

### AI Must Not Do
- Do not expose raw DTOs or database entities directly throughout UI and business logic without justification.
- Do not use generic strings or numbers for important values if mistakes would be costly or confusing.
- Do not make incompatible schema changes without a migration strategy.
- Do not silently discard invalid data without logging or a defined product behavior.

### Verification Checklist
- Confirm mappings preserve required fields and handle missing values.
- Confirm data validation occurs at external boundaries.
- Confirm database or storage changes include a migration plan where required.
- Confirm serialized contracts remain compatible or are versioned.

### When to Ask
- Ask before changing schemas, serialized fields, data retention rules, or data ownership boundaries.
