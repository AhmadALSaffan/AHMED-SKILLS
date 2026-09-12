# Frontend Development

## Purpose

Use this skill file only when the task is relevant to frontend web development. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Inspect the existing frontend framework, routing, styling system, component library, state management, tests, and build configuration.
- Build responsive, accessible, and semantic interfaces.
- Keep components focused, reusable where appropriate, and aligned with the existing design system.
- Handle loading, empty, error, offline, and disabled states.
- Validate untrusted input and safely render user-controlled content.
- Optimize images, assets, requests, and rendering only when relevant and measured.
- Support localization, RTL, screen readers, keyboard navigation, and scalable text when applicable.

## AI Must Not Do

- Do not use unsafe HTML rendering for untrusted content.
- Do not put secrets in client-side code or environment variables exposed to the browser.
- Do not create inaccessible controls, color-only feedback, or non-semantic clickable elements without keyboard support.
- Do not add a UI library or replace styling systems without a clear need and approval.

## Verification Checklist

- Confirm responsive behavior across relevant screen sizes.
- Confirm keyboard navigation and accessible labels for critical interactions.
- Confirm browser build, lint, type checks, and relevant tests pass.
- Confirm client bundles do not expose private values.
