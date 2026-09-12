# Android Release

## Purpose

Use this skill file only when the task is relevant to Android release preparation and publishing. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Inspect Gradle configuration, application IDs, version names, version codes, signing setup, build variants, and release workflows before changing release settings.
- Keep debug, staging, and release configuration separated when applicable.
- Verify release notes, changelog, privacy policy links, permissions, screenshots, store metadata, and support links before publication.
- Verify minSdk, targetSdk, ProGuard or R8 rules, app size, crash reporting, analytics, and dependency versions when relevant.
- Ensure secrets and signing credentials are stored through approved secure mechanisms.
- Prepare a rollback or hotfix plan for production releases.

## AI Must Not Do

- Do not publish, upload, sign, change store listings, change production credentials, or alter billing without explicit approval.
- Do not commit keystores, signing files, API keys, service-account keys, or production configuration.
- Do not increase version codes, change package names, or modify release channels without confirming release intent.

## Verification Checklist

- Confirm release build succeeds.
- Confirm versioning and signing configuration are correct.
- Confirm no secrets are in source control or release artifacts.
- Confirm release notes and store metadata match real functionality.
