# Web Deployment

## Purpose

Use this skill file only when the task is relevant to web deployment and hosting. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Inspect deployment platform, environment configuration, domain setup, CI/CD workflow, build command, output directory, and runtime requirements before changes.
- Keep development, preview, staging, and production configurations separate when applicable.
- Use secure environment-variable management and least-privilege tokens.
- Configure health checks, error tracking, logs, monitoring, and rollback procedures when relevant.
- Verify redirects, headers, HTTPS, caching, asset delivery, and environment-specific URLs where applicable.
- Document verified deployment and rollback steps.

## AI Must Not Do

- Do not deploy, modify DNS, alter domains, change production environment variables, or change billing without explicit approval.
- Do not put production secrets in repository files, frontend bundles, screenshots, or logs.
- Do not assume deployment platform configuration without inspecting existing configuration.

## Verification Checklist

- Confirm production build succeeds locally or in CI.
- Confirm required environment variables are documented without exposing values.
- Confirm deployment configuration matches runtime requirements.
- Confirm rollback steps are available.
