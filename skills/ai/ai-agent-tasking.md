# AI Agent Tasking

## Purpose

Use this skill file only when the task is relevant to delegating software work to AI coding agents. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Give agents a clear objective, scope, repository context, constraints, acceptance criteria, and verification requirements.
- Require agents to inspect relevant files before editing.
- Split large tasks into small, independently reviewable milestones.
- Require plans before risky, ambiguous, architectural, destructive, or multi-file changes.
- Require agents to add or update tests and documentation when behavior changes.
- Require agents to report changed files, commands run, results, assumptions, limitations, and follow-up work.
- Use branches, pull requests, checkpoints, scoped permissions, and reversible workflows.
- Keep human approval for product decisions, architecture, security, production, financial, and irreversible actions.

## AI Must Not Do

- Do not grant unrestricted filesystem, credential, production, billing, or deployment access without clear need and approval.
- Do not allow an agent to merge, deploy, delete data, change permissions, or purchase services autonomously.
- Do not send secrets, private customer data, or confidential project content to unapproved tools.
- Do not ask an agent to solve vague tasks without acceptance criteria.

## Verification Checklist

- Confirm the task scope and success criteria are explicit.
- Confirm agent permissions match the minimum required scope.
- Confirm outputs are reviewed through diffs, tests, and build results.
- Confirm risky actions required human approval.
