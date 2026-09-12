# Docker

## Purpose

Use this skill file only when the task is relevant to Docker containers and containerized development. Follow the shared engineering rules first, especially security, code quality, testing, documentation, and AI operating rules.

## AI Workflow

1. Inspect the repository, existing conventions, dependencies, build configuration, tests, and relevant source files.
2. Identify the smallest safe change that satisfies the task.
3. Reuse existing project patterns when they are clear and appropriate.
4. Add or update tests for changed behavior when practical.
5. Run the relevant formatter, lint, tests, and build commands.
6. Report changed files, verification performed, assumptions, limitations, and required manual steps.

## AI Must Do

- Inspect existing Dockerfiles, Compose files, ignore files, CI configuration, runtime requirements, and deployment targets before changes.
- Use small, maintained base images and pin versions where practical.
- Use multi-stage builds when they reduce final image size or isolate build tools.
- Run processes as non-root when feasible.
- Use `.dockerignore` to exclude secrets, dependencies, build outputs, and unnecessary files.
- Keep configuration and secrets outside images.
- Define health checks and documented ports, volumes, networks, and startup commands when relevant.
- Verify local build and container startup behavior.

## AI Must Not Do

- Do not copy `.env`, credentials, SSH keys, node_modules, build caches, or private files into images.
- Do not run containers as root without a justified requirement.
- Do not use floating `latest` tags for critical production images without approval.
- Do not publish images, change registries, or deploy containers without explicit approval.

## Verification Checklist

- Confirm image builds successfully.
- Confirm container starts and required health checks pass.
- Confirm image contains no secrets or unnecessary large files.
- Confirm ports, volumes, environment variables, and networking are documented.
