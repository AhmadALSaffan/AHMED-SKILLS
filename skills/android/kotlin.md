# Kotlin Development

## Purpose

Use this skill file only when the task is relevant to Kotlin development. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Prefer idiomatic Kotlin with clear names, small functions, and focused classes.
- Use null safety intentionally; avoid `!!` unless a checked invariant makes it unavoidable.
- Prefer immutable `val` values and immutable state where practical.
- Use `data class`, `sealed interface` or `sealed class`, `enum class`, and extension functions only when they improve clarity.
- Use coroutines for asynchronous work and respect structured concurrency and cancellation.
- Keep business logic independent from Android framework classes when practical.
- Use `Result` or explicit typed outcomes for expected failures when appropriate.
- Follow project formatting, linting, and dependency conventions.

## AI Must Not Do

- Do not use `!!`, `lateinit`, global mutable state, unchecked casts, or broad exception catches as shortcuts.
- Do not create unnecessary utility classes, generic abstractions, or extension functions with unclear ownership.
- Do not block the main thread or use unstructured background work.
- Do not introduce a new Kotlin library without checking the current stack and explaining the need.

## Verification Checklist

- Confirm nullability and error paths are handled safely.
- Confirm coroutine scopes, cancellation, dispatchers, and lifecycle ownership are correct.
- Confirm relevant tests, lint, and build pass.
