# Next.js and React

## Purpose

Use this skill file only when the task is relevant to Next.js and React development. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Inspect the project router, rendering strategy, data fetching, component conventions, styling, and deployment configuration.
- Prefer server components and server-side work when appropriate; use client components only when browser interaction or state is required.
- Keep server-only secrets and data access out of client bundles.
- Handle loading, error, not-found, and empty states using existing project patterns.
- Use stable keys, controlled state, and effect cleanup correctly.
- Follow existing caching, revalidation, routing, metadata, and image optimization conventions.
- Add tests for changed components, utilities, API routes, or critical flows when practical.

## AI Must Not Do

- Do not expose server secrets through `NEXT_PUBLIC_` variables or client components.
- Do not use effects for data fetching if the project architecture already supports better server or query patterns.
- Do not add client-side state management libraries without a demonstrated need.
- Do not mix incompatible routing patterns or rendering approaches without checking the current project setup.

## Verification Checklist

- Confirm server and client boundaries are correct.
- Confirm metadata, error states, and routing behavior are handled where relevant.
- Confirm type checks, lint, tests, and production build pass.
- Confirm no private data enters the browser bundle.
