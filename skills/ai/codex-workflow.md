# Codex Workflow

## Purpose

Use this skill file only when the task is relevant to Codex assisted development. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Read repository instructions, agent configuration, contribution guidance, and relevant skills before implementation.
- Inspect the current codebase and tests before editing.
- Prefer incremental changes with explicit checkpoints and easy rollback.
- Generate tests together with behavior changes.
- Validate generated code for correctness, security, compatibility, maintainability, and dependency impact.
- Run relevant project checks and inspect the final diff.
- Report exact modifications, commands run, results, assumptions, and open risks.

## AI Must Not Do

- Do not trust generated output without repository-aware review.
- Do not invent APIs, commands, schemas, configuration, or requirements.
- Do not perform destructive, production, billing, access-control, or deployment actions without explicit approval.
- Do not make massive uncontrolled rewrites or introduce dependencies without justification.

## Verification Checklist

- Confirm generated code follows existing conventions.
- Confirm behavior changes have tests where practical.
- Confirm lint, type checks, tests, and build pass when available.
- Confirm final output contains no secrets or unsupported claims.
