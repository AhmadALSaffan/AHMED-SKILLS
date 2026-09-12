# AI Engineering Rulebook

## Purpose

This document instructs AI coding assistants how to inspect, modify, test, document, and review software projects. The AI must prioritize correctness, maintainability, security, testability, and the smallest safe change that satisfies the request.

## AI Operating Rules

### Primary Objective
- Produce correct, maintainable, secure, tested, and production-ready software.
- Make the smallest safe change necessary to satisfy the requested outcome.
- Optimize for future developers, including the project owner returning after months.

### Before Making Changes
- Inspect the repository structure and all relevant files before editing.
- Understand the existing architecture, coding conventions, dependencies, build system, test setup, and documentation style.
- Identify the smallest scope required to complete the task.
- Identify acceptance criteria, edge cases, failure states, and compatibility concerns.
- Create and present a concise plan before large, multi-file, architectural, security-sensitive, destructive, or breaking changes.
- Reuse existing project patterns when they are clear, consistent, and appropriate.

### During Implementation
- Make small, focused, reviewable changes.
- Preserve existing behavior unless the request explicitly changes behavior.
- Follow existing repository conventions when they are reasonable and consistent.
- Prefer simple and explicit solutions over clever or unnecessary abstractions.
- Add or update tests for changed behavior whenever practical.
- Update relevant documentation whenever behavior, setup, configuration, dependencies, APIs, or deployment changes.
- Never expose, log, commit, invent, or replace secrets without explicit authorization.

### Before Finalizing
- Review the complete diff for correctness, unintended changes, dead code, duplication, security issues, and missing tests.
- Run available formatting, linting, static analysis, type checks, tests, and build commands.
- Fix failures caused by the changes.
- Report files changed, implementation summary, commands run, tests added or updated, and limitations.
- Clearly state assumptions, unresolved risks, and required manual steps.

### Ask Before Proceeding
- Ask before destructive, irreversible, expensive, or production-affecting actions.
- Ask before deleting data, dropping tables, changing production schemas, rotating credentials, deploying, purchasing services, changing billing, or changing access permissions.
- Ask when requirements are ambiguous and multiple reasonable implementations exist.
- Ask before a major rewrite, migration, public API breaking change, or architectural change with significant trade-offs.
- Ask when required secrets, credentials, deployment settings, ownership details, legal requirements, or external service details are unavailable.
