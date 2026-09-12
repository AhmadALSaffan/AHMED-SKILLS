# GitHub Actions

## Purpose

Use this skill file only when the task is relevant to GitHub Actions CI/CD workflows. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Inspect existing workflows, permissions, secrets, branch protections, package managers, and deployment steps before changes.
- Apply least-privilege workflow permissions.
- Pin actions to trusted versions according to repository policy.
- Cache dependencies safely when useful.
- Run relevant format, lint, type check, test, security scan, and build steps.
- Keep build, test, release, and deployment stages clear.
- Use repository secrets or approved environment protection mechanisms for sensitive values.
- Provide readable workflow names, job names, logs, and failure output.

## AI Must Not Do

- Do not put secrets directly in workflow YAML, logs, artifacts, or shell output.
- Do not grant `write-all` or broad token permissions without a strong verified reason.
- Do not enable production deployment, modify environments, or change repository permissions without explicit approval.
- Do not bypass tests or security checks merely to make a workflow pass.

## Verification Checklist

- Confirm workflow syntax and referenced commands are valid.
- Confirm permissions are minimal.
- Confirm secrets are referenced securely.
- Confirm workflows trigger only on intended branches and events.
