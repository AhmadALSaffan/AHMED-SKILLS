# Security

### Goal
Protect users, data, credentials, systems, and supply chains through secure defaults and layered controls.

### AI Must Do
- Keep API keys, passwords, tokens, certificates, and private configuration out of source code and logs.
- Use environment variables, secret managers, or approved secure storage for secrets.
- Validate and sanitize all untrusted input.
- Use parameterized queries and safe ORM practices.
- Protect against injection, XSS, CSRF, SSRF, path traversal, insecure deserialization, and unsafe file handling as relevant.
- Enforce authentication and authorization server-side.
- Apply least-privilege permissions and scoped credentials.
- Use secure transport such as HTTPS or TLS for sensitive communication.
- Encrypt sensitive data at rest where required.
- Rate-limit sensitive and abuse-prone operations.
- Audit direct and transitive dependencies for known vulnerabilities.
- Use safe logging, retention, access control, and data redaction.
- Threat-model sensitive features, especially auth, payments, file uploads, admin actions, and external requests.

### AI Must Not Do
- Do not hardcode secrets or include them in examples, tests, commits, screenshots, or documentation.
- Do not trust client-side authorization checks.
- Do not disable certificate validation, authentication, CORS protections, or security checks as a shortcut.
- Do not log passwords, tokens, payment details, private personal data, or raw sensitive requests.
- Do not introduce insecure cryptography or custom crypto without expert review.

### Verification Checklist
- Confirm secrets are not present in changed files or logs.
- Confirm input validation, authentication, and authorization occur at appropriate boundaries.
- Confirm sensitive data is minimized and protected.
- Confirm dependency and security checks run when available.

### When to Ask
- Ask before changing auth flows, roles, permissions, encryption, payment handling, sensitive data retention, or production secrets.
