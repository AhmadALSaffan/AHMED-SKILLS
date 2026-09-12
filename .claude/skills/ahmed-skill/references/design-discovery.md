# Design Discovery Workflow

Use this workflow before creating final UI for a new product, a major redesign, or any task where the visual direction is unclear.

## Objective

Create a design direction specific to the product, audience, content, platform, and brand. The goal is to avoid generic AI-template output.

## Inspect First

Before asking questions, inspect what already exists:

- Existing screens, components, design tokens, themes, and style files.
- Figma links, screenshots, logos, icons, illustrations, brand guidelines, and image assets.
- Product brief, README, user stories, target platforms, and existing copy.
- Competing or reference products explicitly provided by the user.
- Accessibility, localization, device, and performance constraints.

## High-Value Questions

Ask only unknown and important questions. Prefer a compact batch.

- What is the product, and what is the main job a user needs to complete?
- Who is the primary audience, and what feeling should the product create?
- Is the desired direction quiet and minimal, editorial, bold, playful, technical, premium, cinematic, utilitarian, or something else?
- Are there visual references, screenshots, Figma files, brands, apps, websites, or art directions to learn from?
- What should be avoided? Ask about gradients, glass effects, cards, rounded corners, illustrations, animation, density, and anything the user dislikes.
- Are there brand colors, a logo, typography requirements, dark/light mode preferences, or accessibility constraints?
- What platform is this for: mobile, desktop, web, dashboard, landing page, kiosk, or multi-platform?
- What is the primary conversion or action on the first important screen?

## Create a Design Direction

Before implementation, write the following in `docs/design-direction.md` or present it for approval:

### Product Character

- Product name: <Name>
- Product type: <Type>
- Target audience: <Audience>
- Primary user job: <Job>
- Brand personality: <3-5 adjectives>
- Emotional tone: <Tone>

### Visual Direction

- Theme: <Dark, light, adaptive, or product-specific>
- Color system: <Primary, secondary, neutrals, semantic colors, and rationale>
- Typography: <Font approach, hierarchy, readable scale, and rationale>
- Layout principle: <Editorial, dense tool UI, immersive, content-first, etc.>
- Content density: <Compact, balanced, spacious, and rationale>
- Grid and spacing: <Approach>
- Component language: <Radii, borders, shadows, surfaces, controls>
- Icon and imagery direction: <Approach>
- Motion: <Subtle, expressive, none, reduced-motion support>

### UX Direction

- Primary screen goal: <Goal>
- Primary call to action: <CTA>
- Navigation model: <Model>
- Loading, empty, error, and offline behavior: <Approach>
- Responsive behavior: <Approach>
- Accessibility requirements: <Approach>
- Localization and RTL requirements: <Approach>

### Reference Analysis

For each approved reference, write:

- Reference: <Name or URL>
- What to learn: <Specific patterns, not copied identity>
- What not to copy: <Brand-specific or unsuitable elements>

### Explicitly Avoid

- <Pattern to avoid>
- <Pattern to avoid>
- <Pattern to avoid>

## Approval Gate

Do not implement a major new visual system until the user approves the design direction when the direction is new, subjective, or unclear.

## Implementation Rules

- Build a product-specific information hierarchy before decorative details.
- Use existing design tokens and components when they exist.
- Use semantic, accessible components and test critical interactions with keyboard and screen readers where relevant.
- Design loading, empty, error, disabled, and offline states intentionally.
- Verify mobile, desktop, and narrow-screen behavior where relevant.
- Do not fabricate social proof, metrics, testimonials, logos, screenshots, prices, or claims.
