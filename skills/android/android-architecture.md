# Android Architecture

## Purpose

Use this skill file only when the task is relevant to Android application architecture. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Inspect the existing Android architecture before adding new layers, modules, or packages.
- Organize code by feature when it improves discoverability and maintenance.
- Keep UI responsible for rendering and interaction, ViewModels responsible for UI state, and domain logic independent from UI details.
- Use repositories to isolate remote, local, cache, and persistence details when appropriate.
- Keep API DTOs and database entities separate from domain and UI models when formats differ.
- Use dependency injection consistent with the existing project setup.
- Keep navigation, state, error handling, and lifecycle behavior explicit.
- Prefer the smallest architecture that fits the project; use Clean Architecture layers only when they add real value.

## AI Must Not Do

- Do not put business logic, Retrofit calls, Room queries, or large stateful workflows directly in Activities, Fragments, or composables.
- Do not force repositories, use cases, interfaces, or multi-module structures into small features without a practical reason.
- Do not create circular module dependencies.
- Do not leak Android framework types into core business logic when avoidable.

## Verification Checklist

- Confirm the change follows existing dependency direction.
- Confirm UI, state, domain, and data responsibilities remain separated appropriately.
- Confirm the feature can be tested without unnecessary Android framework coupling.
- Confirm no architecture expansion is included without justification.
