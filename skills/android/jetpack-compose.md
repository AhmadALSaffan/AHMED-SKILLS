# Jetpack Compose

## Purpose

Use this skill file only when the task is relevant to Jetpack Compose Android UI development. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Keep composables focused on rendering state and sending user events.
- Hoist state when it improves reuse, testability, and ownership clarity.
- Model loading, success, empty, error, offline, and disabled states where relevant.
- Use stable keys for dynamic lazy lists and stable models when appropriate.
- Keep business logic, networking, database access, and long-running work out of composables.
- Use ViewModel or existing state holders for screen state and events.
- Apply accessibility semantics, content descriptions, readable labels, scalable text, and sufficient contrast.
- Reuse the existing design system, theme, components, spacing, typography, and navigation patterns.

## AI Must Not Do

- Do not trigger network calls, database work, or uncontrolled side effects during recomposition.
- Do not create new mutable state for values that should come from a single existing source of truth.
- Do not use index keys for lists when stable item identifiers exist.
- Do not add custom UI patterns that conflict with the established design system without approval.

## Verification Checklist

- Confirm recomposition does not repeat side effects or requests.
- Confirm state restoration and navigation behavior are intentional.
- Confirm important UI states and accessibility behavior are tested or manually verified.
- Confirm the Android build and relevant UI tests pass.
