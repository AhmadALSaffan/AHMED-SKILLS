# Concurrency & Async

### Goal
Perform asynchronous work safely, efficiently, and with correct cancellation, retry, and lifecycle behavior.

### AI Must Do
- Avoid blocking UI, main, request, or event-loop threads.
- Define who owns asynchronous work and when it should start, cancel, or complete.
- Handle cancellation correctly and release resources promptly.
- Protect shared mutable state and transactional operations.
- Use timeouts for network and external operations.
- Retry only transient and safe failures.
- Use exponential backoff with jitter when repeated retries are appropriate.
- Make idempotency explicit for operations that may be retried.
- Limit concurrency when resources, APIs, or rate limits require it.
- Log and monitor failed background jobs with relevant context.

### AI Must Not Do
- Do not launch unbounded background tasks.
- Do not ignore cancellation signals.
- Do not retry permanent failures, invalid input, authorization failures, or unsafe writes blindly.
- Do not access shared mutable state without synchronization or a safe ownership model.

### Verification Checklist
- Confirm expensive work does not block critical threads.
- Confirm cancellation, timeouts, and cleanup are handled.
- Confirm retry behavior cannot duplicate side effects.
- Confirm concurrent operations do not corrupt state.

### When to Ask
- Ask when retry policy, ordering, conflict resolution, or background-job durability requirements are unclear.
