# Observability

### Goal
Make system behavior diagnosable through useful logs, metrics, traces, dashboards, and alerts.

### AI Must Do
- Use structured logging with consistent, searchable fields.
- Include correlation or request IDs across services and asynchronous workflows when relevant.
- Integrate error tracking and crash reporting where available.
- Track latency, traffic, error rate, saturation, reliability, and meaningful business events.
- Use distributed tracing for multi-service flows when it provides clear operational value.
- Maintain dashboards for key health and product indicators.
- Create actionable alerts with clear severity, thresholds, ownership, and response intent.
- Redact or omit secrets and sensitive personal data from telemetry.

### AI Must Not Do
- Do not log sensitive data.
- Do not create noisy alerts with no clear action.
- Do not rely only on logs when metrics or error tracking are required to detect systemic problems.
- Do not add expensive verbose telemetry to hot paths without considering cost and performance.

### Verification Checklist
- Confirm failures can be investigated with available logs and error context.
- Confirm key operations have measurable success, failure, and latency signals.
- Confirm telemetry is privacy-safe and cost-conscious.

### When to Ask
- Ask when alert ownership, service-level objectives, privacy requirements, log retention, or monitoring provider are unspecified.
