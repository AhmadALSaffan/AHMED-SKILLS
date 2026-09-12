# App Release Management

## Purpose

Use this skill file only when the task is relevant to planning and managing software releases. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Define release scope, included features, bug fixes, risks, target users, rollout plan, and success metrics.
- Verify versioning, release notes, changelog, migrations, compatibility, configuration, and feature flags.
- Run required build, tests, lint, security checks, and manual verification before release.
- Prepare monitoring, error tracking, support guidance, rollback, and hotfix procedures.
- Use staged rollout or feature flags for higher-risk releases when supported.
- Record release artifacts, version, date, known limitations, and deployment status.

## AI Must Not Do

- Do not release, publish, deploy, submit to stores, change production configuration, or alter billing without explicit approval.
- Do not claim release readiness when checks were not run or known blockers remain.
- Do not include unreviewed migrations, secrets, debug settings, or unsupported claims in release artifacts.

## Verification Checklist

- Confirm release criteria and approval requirements are met.
- Confirm versioning, release notes, and changelog are accurate.
- Confirm monitoring and rollback plans are ready.
- Confirm known risks and limitations are documented.
