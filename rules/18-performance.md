# Performance

### Goal
Deliver responsive, efficient software by measuring real bottlenecks and applying proportionate optimizations.

### AI Must Do
- Measure or profile before making non-trivial performance changes.
- Define performance budgets for critical user flows when relevant.
- Profile CPU, memory, startup, rendering, network, database, and storage behavior as applicable.
- Reduce unnecessary network requests, payload sizes, allocations, rerenders, recompositions, and database queries.
- Use pagination, lazy loading, virtualization, batching, compression, and caching where supported by evidence.
- Define cache ownership, expiration, invalidation, and fallback behavior.
- Move expensive work off critical threads.
- Monitor production performance when monitoring is available.

### AI Must Not Do
- Do not optimize based solely on assumptions.
- Do not add caching without an invalidation strategy.
- Do not trade clear maintainable code for negligible theoretical speed gains.
- Do not load, render, or transfer large unnecessary datasets.

### Verification Checklist
- Confirm the performance issue is measured or supported by evidence.
- Confirm optimization does not change correctness or stale-data behavior.
- Confirm performance-sensitive changes are benchmarked or tested where possible.
- Confirm resource use remains within expected limits.

### When to Ask
- Ask when target devices, traffic, performance budgets, cost limits, or acceptable freshness are unknown.
