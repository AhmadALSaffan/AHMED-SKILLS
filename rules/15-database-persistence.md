# Database & Persistence

### Goal
Store data safely, consistently, efficiently, and with recoverable evolution over time.

### AI Must Do
- Design schema around real access patterns, integrity rules, and ownership.
- Use migrations for schema changes.
- Add indexes based on verified query patterns and performance evidence.
- Use transactions for atomic multi-step writes.
- Enforce appropriate constraints in the database as well as in application validation.
- Prevent N+1 queries and unnecessary data loading.
- Paginate large datasets.
- Plan backups, restore verification, retention, deletion, and recovery requirements.
- Protect personally identifiable and sensitive data.
- Monitor slow queries, lock contention, connection errors, and storage failures.

### AI Must Not Do
- Do not make destructive schema changes without migration, backup, and rollback consideration.
- Do not load full datasets when pagination or filtering is necessary.
- Do not rely solely on application code for critical integrity constraints when the database can enforce them.
- Do not expose raw database errors to users.

### Verification Checklist
- Confirm migrations apply cleanly from supported previous versions.
- Confirm writes that must be atomic use transactions.
- Confirm new queries are indexed or measured when performance-sensitive.
- Confirm schema changes preserve data or document migration behavior.

### When to Ask
- Ask before dropping data, changing production schemas, changing retention, or performing irreversible migrations.
