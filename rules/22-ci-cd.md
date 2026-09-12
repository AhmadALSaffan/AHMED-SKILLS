# CI/CD

### Goal
Automate repeatable quality checks, builds, releases, deployments, and rollback safeguards.

### AI Must Do
- Run formatting, linting, static analysis, type checks, tests, and builds automatically where supported.
- Block merges on required quality failures.
- Run security scanning and dependency scanning where available.
- Build reproducible artifacts.
- Deploy automatically to non-production environments when appropriate.
- Use feature flags or staged rollout strategies for risky changes.
- Maintain rollback procedures and deploy known stable versions when needed.
- Keep CI/CD configuration version-controlled and reviewed.
- Separate build, test, release, and deployment stages clearly.
- Monitor deployments for errors and regressions.

### AI Must Not Do
- Do not bypass required checks without explicit approval.
- Do not deploy to production automatically without verified authorization and safeguards.
- Do not put secrets directly in workflow files.
- Do not create pipelines that cannot be reproduced locally or diagnosed from logs.

### Verification Checklist
- Confirm CI runs required checks for relevant changes.
- Confirm artifacts and deployment inputs are traceable to a commit.
- Confirm secrets are provided through approved secure mechanisms.
- Confirm rollback is possible for released changes.

### When to Ask
- Ask before enabling production deployment, changing CI permissions, adding secrets, disabling checks, or changing release policy.
