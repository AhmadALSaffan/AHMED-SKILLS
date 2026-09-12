---
name: ahmed-skill
description: Start, plan, design, or configure a project using Ahmad's engineering standards and a product-specific anti-template design direction. Use when the user runs /ahmed-skill with init, design, feature, review, readme, or status.
---

# Ahmad Skill

Use this skill to work on projects according to Ahmad's preferences: clear architecture, clean maintainable code, safe incremental changes, strong testing, accurate documentation, and product-specific design rather than generic AI templates.

## Command Router

Interpret the first argument as the mode:

- `init`: Initialize or assess a project, discover requirements, create a tailored project brief, design direction, architecture plan, and project instructions.
- `design`: Run visual and UX discovery, then create or refine a product-specific design direction before building UI.
- `feature`: Turn a feature request into a specification, implementation plan, acceptance criteria, risk list, and testing plan.
- `review`: Review relevant code or a diff for correctness, architecture, security, testing, accessibility, performance, and maintainability.
- `readme`: Inspect the repository and create or improve an accurate README using Ahmad's approved README references as style guidance only.
- `status`: Inspect the project and report current structure, stack, quality checks, risks, missing documentation, and recommended next steps.

If no mode is supplied, ask the user to choose one: `init`, `design`, `feature`, `review`, `readme`, or `status`.

## Mandatory Rules

- Read repository instructions before editing, including `CLAUDE.md`, `.claude/`, README files, package or build files, and relevant documentation.
- If available, read and follow Ahmad's shared skills repository rules and relevant technology skill files.
- Inspect existing code and conventions before proposing a change.
- Make the smallest safe change that satisfies the request.
- Preserve existing behavior unless the user explicitly asks to change it.
- Never invent requirements, APIs, environment variables, commands, dependencies, features, screenshots, URLs, metrics, pricing, testimonials, or deployment details.
- Add or update relevant tests and documentation when behavior changes.
- Run relevant formatting, linting, type checking, tests, and builds when available.
- Review the final diff and report changed files, checks run, assumptions, limitations, and manual steps.
- Ask before destructive, production-impacting, financial, billing, deployment, access-control, secret, migration, or breaking actions.

## Init Mode

When invoked as `/ahmed-skill init`:

1. Inspect the repository before creating or changing files.
2. Determine whether this is a new, partial, or existing project.
3. Read `references/project-init-checklist.md` and use it to gather missing information.
4. Ask only the highest-value unanswered questions in one compact batch. Do not ask questions whose answers can be verified from repository files.
5. For a new project or unclear visual direction, run the design-discovery workflow before implementing final UI.
6. Create a concise plan with scope, architecture, data flow, key risks, tests, and definition of done.
7. After the user confirms important choices, create or update only the applicable files:
   - `CLAUDE.md`
   - `docs/project-brief.md`
   - `docs/design-direction.md`
   - `docs/architecture.md`
   - `README.md` only when enough verified information exists
8. Do not scaffold a full application or install dependencies unless the user explicitly requests implementation.

## Design Mode

When invoked as `/ahmed-skill design`:

1. Read `references/design-discovery.md`.
2. Inspect existing UI, design tokens, Figma links, screenshots, assets, brand material, and relevant user instructions.
3. Ask compact high-value design questions only for unknown decisions.
4. Produce a `Design Direction` before writing final UI code.
5. Wait for user approval when visual direction is new or ambiguous.
6. After approval, create or update `docs/design-direction.md` and then implement only the approved direction.

## Anti-Template Design Rule

Do not produce a generic AI-generated interface.

Avoid these patterns unless the product, existing design system, or user explicitly justifies them:

- Default purple-to-blue gradients.
- Excessive glassmorphism, blur, floating blobs, or glow effects.
- Centered hero text with a generic badge, two default buttons, and unrelated dashboard cards.
- Repeated identical rounded cards with the same shadows and spacing.
- Generic feature grids, fake statistics, fake testimonials, fake logos, or fabricated social proof.
- Sparkle, robot, terminal, brain, or abstract AI illustrations used only as decoration.
- Placeholder marketing copy such as "The future of", "Everything you need", "Supercharge your workflow", or unverified claims.
- Overly spacious layouts that hide weak hierarchy.
- Copying the visual identity of a reference product without permission.

Before creating final UI for a new product, document:

- Product personality and emotional tone.
- Target audience and primary user job.
- User-provided visual references and what to learn from each.
- Color palette rationale and contrast requirements.
- Typography rationale and hierarchy.
- Layout principle and content density.
- Component language: corner radius, borders, shadows, icons, imagery, and interaction patterns.
- Motion principle and reduced-motion behavior.
- Accessibility and responsive behavior.
- Explicit visual patterns to avoid.

## Documentation Style

For README work, use these repositories as style references only:

- `https://github.com/AhmadALSaffan/Neon-Nior`
- `https://github.com/AhmadALSaffan/BANK-AL-DEIR`

Match their general quality, product focus, Markdown hierarchy, visual polish, feature presentation, and scannability when appropriate. Never copy their project-specific names, content, assets, commands, claims, URLs, technologies, or author details into another project.

## Output Format

Use this response structure when applicable:

1. **Understanding**: concise restatement of the task and verified context.
2. **Plan**: numbered, small, safe steps.
3. **Questions**: only blockers or high-impact unknowns.
4. **Implementation**: files changed and what changed.
5. **Verification**: commands run and results.
6. **Risks / Next steps**: assumptions, limitations, or user decisions required.

Keep responses direct and practical. Do not add long theory unless the user asks for it.
