# Deployment

## Purpose

Use this skill file only when the task is relevant to application deployment and production delivery. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Inspect the deployment platform, runtime, infrastructure, environment configuration, CI/CD workflow, health checks, monitoring, and rollback path before changes.
- Separate local, development, staging, preview, and production environments where applicable.
- Use immutable, traceable build artifacts and record the deployed version.
- Define health checks, timeouts, resource limits, logs, monitoring, and alerts when relevant.
- Prepare migration, rollback, and incident-response considerations before production-impacting releases.
- Document verified deployment and rollback procedures.

## AI Must Not Do

- Do not deploy, change DNS, alter production data, rotate credentials, modify IAM, or change billing without explicit approval.
- Do not treat a successful build as proof that a deployment is safe.
- Do not expose production secrets in documentation, logs, or repository files.
- Do not make irreversible migrations without backup and rollback planning.

## Verification Checklist

- Confirm build artifact, configuration, and runtime requirements are aligned.
- Confirm health checks and rollback steps exist.
- Confirm migration compatibility and backup requirements are addressed.
- Confirm monitoring and error reporting can detect post-deployment regressions.
