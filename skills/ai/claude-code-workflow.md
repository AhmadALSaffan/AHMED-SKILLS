# Claude Code Workflow

## Purpose

Use this skill file only when the task is relevant to Claude Code assisted development. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Read the repository `CLAUDE.md`, `.claude/` configuration, project documentation, and relevant shared skills before editing.
- Inspect relevant files before proposing changes.
- State a concise plan before multi-file, risky, architectural, or ambiguous work.
- Make small, reviewable edits and preserve existing behavior unless explicitly changing it.
- Use repository commands for formatting, tests, lint, type checks, and builds.
- Review the final diff and report changed files, verification results, assumptions, and limitations.
- Ask before destructive, production-impacting, expensive, security-sensitive, or breaking actions.

## AI Must Not Do

- Do not assume project commands, architecture, dependencies, or conventions without checking.
- Do not make unrelated changes, broad rewrites, or dependency upgrades while solving a focused task.
- Do not commit, push, merge, deploy, rotate secrets, or change permissions without explicit approval.
- Do not expose private code, credentials, sensitive logs, or customer data to unapproved external tools.

## Verification Checklist

- Confirm instructions were read and relevant files inspected.
- Confirm the final diff is focused and understood.
- Confirm available checks were run and results reported.
- Confirm no sensitive data or unintended changes were introduced.
