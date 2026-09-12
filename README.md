# Ahmed Skills

[![Claude Code](https://img.shields.io/badge/Claude%20Code-Custom%20Skills-5A4FCF?style=for-the-badge)](https://docs.anthropic.com/en/docs/claude-code)
[![AI Engineering](https://img.shields.io/badge/AI-Engineering%20Rulebook-111827?style=for-the-badge)](#هيكل-المستودع)
[![Android](https://img.shields.io/badge/Android-Kotlin%20%2B%20Compose-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://developer.android.com/)
[![Web](https://img.shields.io/badge/Web-Frontend%20%2B%20Backend-2563EB?style=for-the-badge)](#المهارات)
[![No Emoji](https://img.shields.io/badge/Emoji-Disabled-red?style=for-the-badge)](#قواعد-التواصل)

نظام شخصي قابل لإعادة الاستخدام للعمل مع **Claude Code** ووكلاء البرمجة بالذكاء الاصطناعي.

يحتوي هذا المستودع على ملف Ahmad الشخصي العام، وقوالب المشاريع، وقواعد الهندسة البرمجية، والمهارات الخاصة بالتقنيات المختلفة، وأمر Claude Code المخصص `/ahmed-skill`. الهدف هو جعل العمل بالـ AI متسقًا في مشاريع Android والويب والـ backend والـ cloud والـ desktop والمنتجات الرقمية.

الهدف ليس توليد كود بسرعة بأي ثمن، بل بناء برمجيات مفهومة، قابلة للصيانة، مختبرة، آمنة، مركزة على المنتج، وسهلة التحسين لاحقًا.

## التثبيت السريع

ثبّت النظام كاملًا بأمر واحد:

```bash
npx github:AhmadALSaffan/AHMED-SKILLS install
```

سيظهر لك خيار مكان التثبيت:

```text
1) Global  - متاح في جميع مشاريع Claude Code
2) Project - متاح في المشروع الحالي فقط
```

يمكنك تحديد نوع التثبيت مباشرة:

```bash
# تثبيت النظام لكل مشاريع Claude Code على هذا الكمبيوتر
npx github:AhmadALSaffan/AHMED-SKILLS install --global

# تثبيت النظام داخل مجلد المشروع الحالي فقط
npx github:AhmadALSaffan/AHMED-SKILLS install --project

# استبدال النسخة المثبتة مسبقًا
npx github:AhmadALSaffan/AHMED-SKILLS install --global --force

# فحص حالة التثبيت
npx github:AhmadALSaffan/AHMED-SKILLS status
```

المتطلبات:

- Node.js إصدار 18 أو أحدث
- npm أو npx
- Claude Code مثبت على جهازك
- اتصال إنترنت لتنزيل هذا المستودع من GitHub

بعد التثبيت، أعد تشغيل Claude Code ثم اكتب:

```text
/ahmed-skill init
```

## أوامر Claude Code

الـ skill المرفقة `ahmed-skill` تعطيك workflow منظم داخل Claude Code:

```text
/ahmed-skill init
/ahmed-skill design
/ahmed-skill feature
/ahmed-skill review
/ahmed-skill readme
/ahmed-skill status
```

| الأمر | وظيفته |
|---|---|
| `/ahmed-skill init` | يفحص المشروع، يجمع المعلومات الناقصة، يحدد اتجاه التصميم، ويجهز تعليمات المشروع وخطة المعمارية. |
| `/ahmed-skill design` | يحدد اتجاه UI وUX خاص بالمنتج قبل تنفيذ واجهة نهائية. |
| `/ahmed-skill feature` | يحوّل طلب feature إلى متطلبات، حالات طرفية، معايير قبول، خطة تنفيذ، وخطة اختبار. |
| `/ahmed-skill review` | يراجع الكود أو الـ diff من ناحية الصحة، المعمارية، الأمان، الاختبارات، accessibility، الأداء، وقابلية الصيانة. |
| `/ahmed-skill readme` | ينشئ أو يحدّث README حقيقي بعد فحص المشروع، مع اعتماد ستايل مشاريع Ahmad المرجعية فقط. |
| `/ahmed-skill status` | يعرض هيكل المشروع، الـ stack، المخاطر، الفحوصات الناقصة، وأفضل الخطوات التالية. |

## هيكل المستودع

```text
AHMED-SKILLS/
├── .claude/
│   └── skills/
│       └── ahmed-skill/
│           ├── SKILL.md
│           └── references/
│               ├── design-discovery.md
│               ├── project-init-checklist.md
│               └── readme-style-guide.md
│
├── rules/
│   ├── 00-ai-operating-rules.md
│   ├── 01-core-mindset.md
│   ├── 02-code-quality.md
│   ├── 03-solid-principles.md
│   ├── 04-architecture.md
│   ├── 05-data-modeling.md
│   ├── 06-api-design.md
│   ├── 07-error-handling.md
│   ├── 08-testing-strategy.md
│   ├── 09-refactoring-technical-debt.md
│   ├── 10-common-code-smells.md
│   ├── 11-design-patterns.md
│   ├── 12-state-management.md
│   ├── 13-concurrency-async.md
│   ├── 14-security.md
│   ├── 15-database-persistence.md
│   ├── 16-cloud-infrastructure.md
│   ├── 17-observability.md
│   ├── 18-performance.md
│   ├── 19-accessibility-ux.md
│   ├── 20-version-control.md
│   ├── 21-code-review.md
│   ├── 22-ci-cd.md
│   ├── 23-documentation.md
│   ├── 24-dependencies-libraries.md
│   ├── 25-ai-assisted-development.md
│   └── 26-personal-development-workflow.md
│
├── templates/
│   ├── project-context-template.md
│   ├── feature-spec-template.md
│   ├── bug-fix-template.md
│   ├── ai-task-prompt-template.md
│   ├── pull-request-template.md
│   ├── adr-template.md
│   └── readme-template.md
│
├── skills/
│   ├── android/
│   │   ├── kotlin.md
│   │   ├── jetpack-compose.md
│   │   ├── android-architecture.md
│   │   ├── android-testing.md
│   │   └── android-release.md
│   ├── web/
│   │   ├── frontend.md
│   │   ├── backend-api.md
│   │   ├── nextjs-react.md
│   │   └── web-deployment.md
│   ├── ai/
│   │   ├── claude-code-workflow.md
│   │   ├── codex-workflow.md
│   │   └── ai-agent-tasking.md
│   ├── cloud/
│   │   ├── docker.md
│   │   ├── github-actions.md
│   │   └── deployment.md
│   └── product/
│       ├── project-planning.md
│       ├── landing-page.md
│       └── app-release.md
│
├── bin/
│   └── ahmed-skills.js
├── package.json
├── CLAUDE_GLOBAL_PROFILE.md
└── CLAUDE_PROJECT_TEMPLATE.md
```

## كيف يعمل النظام

النظام يستخدم أربع طبقات من السياق:

```text
طلب Ahmad المباشر
        ↓
تعليمات المشروع الحالي و conventions الخاصة به
        ↓
Ahmad Skills: rules والمهارات المناسبة والقوالب
        ↓
Global Profile والممارسات الهندسية العامة
```

الـ AI لا يقرأ كل الملفات في كل مهمة. يقرأ فقط المهارات التي تخص نوع المشروع والمهمة. مثال: مهمة Android Compose تحتاج قواعد Android وKotlin وCompose والمعمارية والاختبار والأمان وجودة الكود. مهمة نشر موقع تحتاج قواعد Web وCloud وCI/CD والأمان والتوثيق.

## القواعد

مجلد `rules/` يحتوي على المعايير الهندسية العامة التي يجب على الـ AI اتباعها.

أهم القواعد:

- يفحص المشروع والملفات ذات العلاقة قبل التعديل.
- ينفذ أصغر تغيير آمن يحقق المطلوب.
- يحافظ على السلوك الحالي إلا إذا طلبت تغييره بوضوح.
- يفضل الكود المقروء والقابل للصيانة والاختبار على abstractions المعقدة.
- يضيف أو يعدل الاختبارات عند تغيير behavior عندما يكون ذلك عمليًا.
- يشغل formatter وlint وtype checks وtests وbuild المناسبة.
- لا يكشف أو يرفع secrets أو credentials أو private keys أو بيانات مستخدمين حساسة.
- يسأل قبل أي تغيير destructive أو production أو deployment أو billing أو permissions أو migration أو breaking change.
- يراجع الـ diff النهائي ويعطيك نتائج التحقق والافتراضات والقيود والخطوات اليدوية المطلوبة.

## القوالب

مجلد `templates/` يحتوي على ملفات قابلة لإعادة الاستخدام لتنظيم العمل في كل مشروع.

| القالب | استخدامه |
|---|---|
| `project-context-template.md` | إنشاء ملف `CLAUDE.md` خاص بالمشروع. |
| `feature-spec-template.md` | تحديد متطلبات feature والحالات الطرفية ومعايير القبول. |
| `bug-fix-template.md` | تحليل سبب bug وإصلاحه وإضافة regression test. |
| `ai-task-prompt-template.md` | إعطاء AI coding agent مهمة واضحة وآمنة. |
| `pull-request-template.md` | تجهيز Pull Request واضح وسهل المراجعة. |
| `adr-template.md` | توثيق قرار معماري مهم. |
| `readme-template.md` | إنشاء README حقيقي ودقيق للمشروع. |

## المهارات

مجلد `skills/` يحتوي تعليمات خاصة بالتقنيات والـ workflows، ويكمل القواعد العامة. يتم تحميل الملفات المناسبة فقط حسب نوع المهمة.

| المجال | المهارات الموجودة |
|---|---|
| Android | Kotlin وJetpack Compose ومعمارية Android واختبارات Android وتحضير الإصدارات |
| Web | Frontend وBackend APIs وNext.js/React ونشر الويب |
| AI | Claude Code workflow وCodex workflow وإدارة AI coding agents |
| Cloud | Docker وGitHub Actions وDeployment |
| Product | تخطيط المنتج وLanding Pages وإدارة إصدار التطبيق |

## إعداد مشروع جديد

عند بدء مشروع جديد، انسخ `CLAUDE_PROJECT_TEMPLATE.md` إلى root المشروع ثم غيّر اسمه إلى:

```text
CLAUDE.md
```

ثم عبئ المعلومات الخاصة بالمشروع:

- هدف المنتج والمستخدمون المستهدفون.
- الـ tech stack وأوامر التشغيل.
- المعمارية وتدفق البيانات.
- UI واتجاه التصميم.
- الـ backend والبيانات والـ authentication والتكاملات.
- متطلبات الاختبار والإصدار.
- القيود والـ technical debt والأشياء التي لا يجب تغييرها.

أو استخدم الأمر:

```text
/ahmed-skill init
```

هذا الـ workflow يفحص المشروع أولًا، ثم يسألك فقط عن المعلومات المهمة الناقصة، وينشئ أو يحدّث ملفات المشروع المناسبة بدون عمل scaffolding عشوائي أو افتراضات غير مؤكدة.

## اتجاه التصميم

النظام يفرّق بين استخدام أدوات AI في التطوير وبين الشكل البصري العام الذي يجعل المنتج يبدو كـ AI template مكرر.

```text
AI tools for development
        = مسموح

Generic AI-looking product design
        = غير مسموح افتراضيًا
```

قبل تنفيذ UI لمشروع جديد أو redesign كبير، أمر `/ahmed-skill design` يكتب Design Direction خاص بالمنتج حسب الفكرة، المستخدمين، المنصة، المحتوى، المراجع البصرية، accessibility، وتفضيلاتك.

افتراضيًا، يجب على الـ AI تجنب هذه الأنماط إلا إذا كان هناك سبب حقيقي في المنتج أو طلبتها أنت صراحة:

- Gradients البنفسجي والأزرق الافتراضية.
- Glassmorphism أو blur أو glow أو floating blobs بشكل مبالغ فيه.
- Hero section عامة فيها badge وزرين وdashboard cards بلا علاقة بالمنتج.
- Rounded cards متطابقة ومكررة أو dashboard templates جاهزة.
- Testimonials أو metrics أو logos أو social proof غير حقيقية.
- صور robots أو brains أو terminals أو circuits أو sparkles لمجرد الإشارة إلى AI.
- عبارات تسويقية فارغة مثل `The future of` أو `Supercharge your workflow`.
- Visual noise أو 3D أو animations بلا قيمة حقيقية.

عملية التصميم المطلوبة:

```text
Product
   ↓
Target users
   ↓
User journeys
   ↓
Information architecture
   ↓
Design direction and system
   ↓
UI implementation
```

## إعدادات Android الافتراضية

في مشاريع Android، النظام يفضل غالبًا:

- Kotlin.
- Jetpack Compose أو XML حسب المشروع الحالي وتكلفة الـ migration.
- MVVM عندما يكون مناسبًا.
- Clean Architecture فقط عندما تضيف قيمة حقيقية.
- Repository Pattern عندما يكون فصل data boundary مفيدًا.
- Dependency Injection وHilt عندما يكون متوافقًا مع المشروع.
- Coroutines وFlow.
- UI state واضحة وحالات Loading وEmpty وError وOffline وSuccess عند الحاجة.
- Business logic وViewModels قابلة للاختبار.

الـ AI لا يفرض Compose أو XML أو Clean Architecture أو Hilt أو repositories أو use cases أو interfaces إذا لم يكن حجم المشروع أو الكود الموجود يبرر ذلك.

## ستايل التوثيق

عند العمل على README، يستخدم الـ AI المشاريع التالية كمرجع **لأسلوب العرض فقط**:

- [Neon-Nior](https://github.com/AhmadALSaffan/Neon-Nior)
- [BANK-AL-DEIR](https://github.com/AhmadALSaffan/BANK-AL-DEIR)

المطلوب منه أن يقتبس الجودة العامة، التركيز على المنتج، ترتيب Markdown، الوضوح، والتقديم البصري عندما يناسب المشروع. ممنوع نسخ أسماء المشاريع، الصور، الكود، الأوامر، التقنيات، الروابط، المزايا، بيانات الكاتب، أو الادعاءات من هذه المشاريع إلى مشروع آخر.

كل محتوى README يجب أن يكون مثبتًا من المشروع الحالي. لا يسمح للـ AI باختراع features أو أوامر setup أو dependencies أو environment variables أو API endpoints أو screenshots أو deployment URLs أو badges أو licenses أو performance claims.

## قواعد التواصل

اللغة الافتراضية للكود والتعليقات والتوثيق واقتراحات الـ commits والشرح التقني وUI text هي **English**، إلا إذا طلبت لغة مختلفة أو كان المنتج يحتاج لغة أخرى.

الـ Emojis معطلة افتراضيًا في:

```text
Conversation
Code
Comments
Documentation
UI
Logs
Examples
Design mockups
Commit suggestions
```

تُستخدم Emojis فقط عندما تطلبها أنت بشكل صريح.

## قواعد Git

يسمح للـ AI بفحص حالة المشروع باستخدام أوامر مثل:

```text
git status
git diff
git log
git branch
```

لكن افتراضيًا ممنوع عليه تنفيذ هذه العمليات دون موافقة واضحة منك:

```text
git commit
git push
git pull --rebase
git merge
git rebase
git reset
git clean
git branch -D
git push --force
```

بعد إنهاء مهمة مهمة، يجب أن يكتب أن المهمة انتهت، ويقترح رسالة commit بدون أن ينفذها:

```text
DONE
Suggested commit: feat(auth): add email authentication flow
```

## الفلسفة

> افهم أولًا. صمّم عن قصد. ابنِ باحتراف. تحقق من كل شيء. لا تعمل commit إلا عندما يطلب Ahmad ذلك.

Built for Ahmad's development workflow.
