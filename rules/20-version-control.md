# Version Control

### Goal
Maintain a clean, traceable history that supports review, collaboration, rollback, and safe experimentation.

### AI Must Do
- Create small, focused commits with meaningful messages.
- Keep each pull request or change set limited to one logical outcome where possible.
- Follow the repository branch, merge, rebase, and release conventions.
- Use `.gitignore` correctly and avoid tracking build artifacts, local settings, and secrets.
- Tag stable releases when the project uses releases.
- Maintain changelogs for user-facing releases where appropriate.
- Use semantic versioning when appropriate.
- Preserve rollback-friendly release practices.

### AI Must Not Do
- Do not commit secrets, generated credentials, local configuration, large unnecessary artifacts, or unrelated formatting changes.
- Do not squash unrelated changes into one commit.
- Do not rewrite shared history, force-push protected branches, or alter release tags without explicit approval.
- Do not commit code that fails required checks unless explicitly requested and clearly reported.

### Verification Checklist
- Confirm changed files are relevant to the requested task.
- Confirm commit messages explain the change clearly.
- Confirm no secrets or unintended binaries are staged.
- Confirm the branch is in a reviewable state.

### When to Ask
- Ask before force-pushing, rewriting shared history, merging, releasing, tagging, or modifying protected branches.
