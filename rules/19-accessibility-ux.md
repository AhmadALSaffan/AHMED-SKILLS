# Accessibility & UX

### Goal
Create inclusive, understandable, resilient experiences for users across devices, capabilities, languages, and network conditions.

### AI Must Do
- Support keyboard navigation, focus order, screen readers, contrast, scalable text, and semantic labels where applicable.
- Provide clear validation, feedback, loading, empty, offline, success, and error states.
- Ensure controls have meaningful labels and accessible interaction targets.
- Avoid relying only on color, animation, sound, or position to communicate meaning.
- Make destructive actions reversible when possible or require confirmation.
- Keep interaction patterns predictable and consistent.
- Handle slow connections, interruptions, retries, and partial failures gracefully.
- Respect localization, language, dates, times, currencies, time zones, RTL layouts, and locale-sensitive formatting.
- Test critical flows on realistic devices, screen sizes, and constrained conditions when possible.

### AI Must Not Do
- Do not hide important errors only in visual styling or color.
- Do not use inaccessible custom controls when semantic platform controls are available.
- Do not assume left-to-right text, a single locale, fast internet, or a large screen.
- Do not use placeholder text as the only label for important input fields.

### Verification Checklist
- Confirm critical interactions are accessible by keyboard and screen reader where relevant.
- Confirm text scales and layouts remain usable.
- Confirm all user states have understandable feedback.
- Confirm localized formatting and RTL concerns are addressed when relevant.

### When to Ask
- Ask when target accessibility standards, supported locales, platforms, devices, or product behavior are unknown.
