# Android Testing

## Purpose

Use this skill file only when the task is relevant to Android testing. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Test business rules, ViewModel state transitions, mappers, validators, and calculations with unit tests.
- Test repositories, persistence, networking, and serialization with integration tests when relevant.
- Test critical user flows with UI tests only where they provide meaningful protection.
- Use fake repositories or data sources when they make tests clearer and more stable.
- Test loading, success, empty, error, offline, invalid input, cancellation, and retry behavior where applicable.
- Use deterministic coroutine testing and control dispatchers, clocks, and external dependencies.
- Add a regression test for a fixed bug when practical.

## AI Must Not Do

- Do not write tests that depend on real network services, test order, real time, arbitrary delays, or production data.
- Do not use mocks for every dependency when a fake is simpler.
- Do not claim tests pass without running available relevant tests.
- Do not prioritize coverage percentage over meaningful behavioral coverage.

## Verification Checklist

- Confirm changed behavior has relevant test coverage.
- Confirm tests are deterministic and can run repeatedly.
- Confirm failure cases are tested, not only success cases.
- Confirm the relevant test command and Android build pass.
