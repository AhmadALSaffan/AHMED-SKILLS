# Cloud & Infrastructure

### Goal
Operate software reliably, securely, reproducibly, and cost-effectively across environments.

### AI Must Do
- Keep local, development, staging, and production environments separated.
- Keep configuration outside application code and use environment-specific settings safely.
- Use Infrastructure as Code when practical for repeatable infrastructure.
- Apply least-privilege IAM roles and scoped service identities.
- Automate build, test, deployment, and rollback processes through CI/CD where appropriate.
- Configure health, readiness, and liveness checks for deployable services.
- Set resource limits, timeouts, quotas, autoscaling policies, and budgets based on real needs.
- Plan backups, disaster recovery, rollback, and incident response.
- Prefer managed services when they reduce operational burden without unacceptable lock-in or cost.
- Monitor cloud cost, resource ownership, and unused infrastructure.
- Tag resources with project, environment, owner, and purpose.

### AI Must Not Do
- Do not deploy or alter production infrastructure without explicit approval.
- Do not use broad administrator permissions as a shortcut.
- Do not store environment-specific secrets in source control.
- Do not add autoscaling, queues, containers, or cloud services without a clear need.

### Verification Checklist
- Confirm configuration is environment-safe and secrets are externalized.
- Confirm deployment and rollback paths are documented.
- Confirm infrastructure changes are reproducible and reviewed.
- Confirm permissions are least-privilege.

### When to Ask
- Ask before provisioning resources, deploying, changing billing, DNS, IAM, production networking, backups, or data residency settings.
