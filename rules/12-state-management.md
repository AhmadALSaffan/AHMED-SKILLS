# State Management

### Goal
Make application state explicit, predictable, observable, and safe under change or interruption.

### AI Must Do
- Model state explicitly using meaningful types or structures.
- Separate persistent state, UI state, domain state, and one-time events.
- Use unidirectional data flow when appropriate.
- Maintain a single source of truth for each piece of state.
- Prefer immutable state updates.
- Define loading, success, empty, error, offline, and unauthorized states where relevant.
- Prevent duplicate requests, stale responses, race conditions, and conflicting state updates.
- Design state restoration intentionally for process death, refresh, navigation, and app restart when applicable.

### AI Must Not Do
- Do not use global mutable state without a strong, documented reason.
- Do not mix persistent data with transient UI events without clear handling.
- Do not trigger uncontrolled duplicate network requests because of rendering or lifecycle events.
- Do not let stale asynchronous responses overwrite newer user state.

### Verification Checklist
- Confirm all important UI or workflow states can be represented.
- Confirm state updates are predictable and testable.
- Confirm navigation and one-time effects are not accidentally replayed.
- Confirm state restoration behavior matches product expectations.

### When to Ask
- Ask when state ownership, persistence duration, conflict handling, or offline behavior is not specified.
