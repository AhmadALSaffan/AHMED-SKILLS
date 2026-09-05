# Ahmad's Claude Code Setup

[![Claude Code](https://img.shields.io/badge/Claude%20Code-Global%20Instructions-5A4FCF?style=for-the-badge)](https://docs.anthropic.com/en/docs/claude-code)
[![Android](https://img.shields.io/badge/Android-Kotlin-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://developer.android.com/)
[![Architecture](https://img.shields.io/badge/Architecture-Clean%20Architecture-111827?style=for-the-badge)](#-المعمارية)
[![Pattern](https://img.shields.io/badge/Pattern-MVVM-2563EB?style=for-the-badge)](#-المعمارية)
[![Firebase](https://img.shields.io/badge/Backend-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=111827)](https://firebase.google.com/)
[![No Emoji](https://img.shields.io/badge/Emoji-Disabled-red?style=for-the-badge)](#-قواعد-التواصل)

## ما هو هذا المشروع؟

هذا المستودع يحتوي على إعداد شخصي لاستخدام **Claude Code** كمساعد برمجي ثابت مع جميع المشاريع.

الفكرة ليست كتابة Prompt جديد في كل مرة تبدأ فيها مشروعاً. بدلاً من ذلك، يوجد ملف عالمي يعرّف Claude بأسلوب العمل والقواعد التقنية والتصميمية الخاصة بك، بالإضافة إلى قالب خاص بكل مشروع يضيف معلومات المشروع نفسه.

النظام مبني على مستويين:

```text
Global Profile
    ↓
القواعد الشخصية والثابتة لجميع المشاريع

Project Template
    ↓
معلومات وقواعد المشروع الحالي
```

---

## الملفات

| الملف | وظيفته | مكان استخدامه |
|---|---|---|
| `CLAUDE_GLOBAL_PROFILE.md` | التعليمات الشخصية والعامة | `~/.claude/CLAUDE.md` |
| `CLAUDE_PROJECT_TEMPLATE.md` | قالب معلومات المشروع | داخل كل مشروع باسم `CLAUDE.md` |

### 1. `CLAUDE_GLOBAL_PROFILE.md`

هذا هو الملف الأهم. يحتوي على القواعد التي تريدها في **كل مشروع**، مثل أسلوب البرمجة، المعمارية، التصميم، Git، Firebase، الاختبارات، وطريقة تعامل Claude معك.

بعد وضعه في مجلد Claude الشخصي، لا تحتاج إلى نسخه داخل كل مشروع.

المسار على Windows:

```text
C:\Users\AHMED AL SAFFAN\.claude\CLAUDE.md
```

> انتبه: الاسم يجب أن يكون `CLAUDE.md` وليس `CLAUDE.md.md`.

---

### 2. `CLAUDE_PROJECT_TEMPLATE.md`

هذا قالب لكل مشروع جديد.

تنسخه داخل المشروع وتعيد تسميته إلى:

```text
CLAUDE.md
```

ثم تعبئ المعلومات الخاصة بالتطبيق أو الموقع، مثل:

- ما هو المنتج؟
- من هم المستخدمون؟
- ما هي أهم الـ user journeys؟
- ما هي المتطلبات؟
- ما هو الـ backend؟
- ما هو الـ UI framework؟
- ما هي قرارات التصميم؟
- كيف يتم الاختبار والبناء؟
- ما هي القيود الخاصة بالمشروع؟

---

# كيف يعمل النظام؟

عند بدء مشروع جديد، Claude يحصل على سياق من مستويين.

```text
~/.claude/CLAUDE.md
        │
        │ القواعد العامة
        ▼
project/CLAUDE.md
        │
        │ معلومات المشروع
        ▼
       Claude
```

الملف العالمي يحدد **كيف تعمل أنت**، بينما ملف المشروع يحدد **ما هو المشروع الحالي**.

هذا يمنعك من إعادة شرح تفضيلاتك في كل مرة.

---

# طريقة بدء مشروع جديد

مثلاً لديك تطبيق Android جديد:

```text
MyApp/
├── CLAUDE.md
├── data/
├── domain/
├── presentation/
├── core/
└── di/
```

الخطوات:

1. انسخ `CLAUDE_PROJECT_TEMPLATE.md` إلى داخل المشروع.
2. غيّر اسمه إلى `CLAUDE.md`.
3. املأ معلومات المنتج والمتطلبات والخدمات والتصميم.
4. افتح Claude Code داخل المشروع.
5. دع Claude يفهم المشروع قبل أن يبدأ التنفيذ.

---

# فلسفة العمل مع Claude

Claude هنا ليس مجرد مولد كود.

الملف العالمي يطلب منه التصرف كـ **Senior Software Engineer / Product Engineer** لديه خبرة عملية قوية، مع التركيز على:

- جودة الإنتاج Production Quality
- قابلية الصيانة Maintainability
- الأمان Security
- الاختبارات Testing
- تجربة المستخدم UX
- جودة التصميم UI
- الأداء Performance
- البساطة وعدم التعقيد غير الضروري

الهدف هو ألا يقوم Claude بتنفيذ الطلب حرفياً بطريقة سريعة فقط، بل يفهم السبب وراء الميزة ويختار حلاً مناسباً للمشروع.

---

# قبل أن يبدأ Claude بالبرمجة

القاعدة الأساسية هي:

> **افهم المشروع أولاً، ثم ناقش التصميم، ثم نفّذ.**

عند بداية مشروع أو Feature كبيرة، يتأكد Claude من فهم:

- فكرة المنتج والمشكلة التي يحلها.
- المستخدمين المستهدفين.
- أهم الـ user journeys.
- المتطلبات الوظيفية وغير الوظيفية.
- البيانات والتكاملات الخارجية.
- Authentication وAuthorization.
- Security وPrivacy.
- Offline/Online behavior.
- قيود المنصة والأداء.
- بنية المشروع الحالية.
- المكتبات والـ dependencies الموجودة.

بعد ذلك يناقش معك **اتجاه التصميم**.

لا يفترض Claude شكلاً بصرياً من تلقاء نفسه لمجرد أن المشروع يحتاج UI.

---

# قواعد التصميم

هذه من أهم أجزاء الـ Global Profile.

التصميم يجب أن ينبني على:

```text
Product
   ↓
Users
   ↓
User Journeys
   ↓
Information Architecture
   ↓
Design System
   ↓
UI
```

وليس:

```text
"اصنع شيئاً يبدو AI"
```

## أشياء ممنوعة افتراضياً

Claude لا يستخدم في التصميم، إلا إذا طلبت ذلك صراحة:

- تصميمات AI-looking العامة.
- Gradients المبالغ فيها.
- Neon palettes.
- Glow effects.
- Glassmorphism.
- Floating blobs.
- زخارف عشوائية بلا وظيفة.
- كثرة الـ rounded cards.
- Card grids غير الضرورية.
- Bento layouts عشوائية.
- Dashboard templates جاهزة بلا سبب.
- عناصر 3D زخرفية غير مفيدة.
- Holographic / futuristic styling.
- AI sparkles.
- Robot / brain / circuit motifs لمجرد الإشارة إلى AI.
- Animations غير الضرورية.
- Visual noise.
- صور أو illustrations بمظهر مولد آلياً عندما يكون التصميم الحقيقي أبسط وأفضل.
- عبارات مثل `Powered by AI` ما لم تكن مطلوبة فعلاً.

## قاعدة مهمة

Claude يفهم المنتج **قبل التصميم**، والتصميم يجب أن يخدم المنتج وليس العكس.

كما يُسمح باستخدام **Impeccable** عندما تكون أداة التصميم متوفرة، لكن أي اقتراح منها يجب أن يبقى متوافقاً مع متطلبات المنتج وقواعد هذا الملف.

---

# قواعد عدم استخدام AI في التصميم

المقصود هنا ليس منع استخدام أدوات الذكاء الاصطناعي في العمل البرمجي.

المقصود هو منع النمط البصري الشائع الذي يجعل كل التطبيقات تبدو وكأنها منتجات AI.

لذلك:

```text
AI tools for development
        = OK

Generic AI-looking product design
        = NOT OK
```

وإذا احتاج المنتج نفسه إلى Feature مبنية على AI، فلا توجد مشكلة بوجودها **وظيفياً**؛ المنع هنا متعلق بالـ visual style وليس بمنع تقنيات AI داخل التطبيق.

---

# قواعد البرمجة

## Android

مشاريع الجوال تستخدم:

- Kotlin.
- Clean Architecture.
- MVVM كخيار افتراضي.
- Repository Pattern عند الحاجة.
- Dependency Injection.
- Hilt كخيار افتراضي عندما لا يكون هناك سبب لاستخدام إطار آخر.
- Coroutines.
- Flow.
- تصميم قابل للاختبار.

### Compose أم XML؟

Claude لا يفرض واحداً منهما دائماً.

يختار بين Compose وXML حسب:

- المشروع الحالي.
- الكود الموجود.
- consistency.
- تكلفة migration.
- متطلبات الـ UI.

---

# المعمارية

الهيكل الأساسي المفضل لمشاريع Android هو:

```text
data/
domain/
presentation/
core/
di/
```

### `data/`

يحتوي على تفاصيل البيانات مثل:

- Remote data sources.
- Local data sources.
- DTOs.
- Database entities.
- Repository implementations.

### `domain/`

يحتوي على منطق العمل:

- Business models.
- Use cases.
- Repository contracts.
- Business rules.

### `presentation/`

يحتوي على:

- Screens.
- ViewModels.
- UI state.
- UI events.
- Presentation navigation logic.

### `core/`

للعناصر المشتركة، مثل:

- Utilities.
- Common networking/database infrastructure.
- Shared primitives.
- Result/Error handling.

### `di/`

يحتوي على:

- Dependency injection modules.
- Dependency wiring.

لا يتم إنشاء طبقات إضافية لمجرد زيادة عدد المجلدات. التعقيد يضاف عندما يكون له سبب حقيقي.

---

# قواعد جودة الكود

Claude مطالب بالتعامل مع الكود على أنه Production Code وليس Demo Code.

من أهم القواعد:

- Single Responsibility.
- Composition over inheritance عندما تكون مناسبة.
- عدم التكرار في منطق الأعمال.
- عدم وضع Business Logic داخل الـ UI عندما يجب أن تكون في ViewModel أو Domain.
- عدم ربط Domain بتفاصيل الشبكة أو قاعدة البيانات.
- تجنب God Classes.
- تجنب ViewModels العملاقة.
- تجنب Composables ضخمة.
- تجنب ملفات Utility ضخمة.
- أسماء واضحة بدلاً من الاعتماد على التعليقات لشرح كود سيئ التسمية.
- التعليقات فقط عند الحاجة لشرح Intent أو Constraint أو Trade-off غير واضح.
- إزالة dead code وunused imports.
- عدم إضافة TODO بلا سبب حقيقي.
- عدم hardcode للأسرار أو API keys أو tokens.
- معالجة الأخطاء بشكل واضح.
- الاهتمام بـ Loading / Empty / Error / Success states عند الحاجة.
- عدم إنشاء abstraction لمجرد إنشاء abstraction.
- عدم إضافة dependency جديدة إذا كان المشروع يحتوي بالفعل على حل مناسب.

---

# Security

الأمان ليس مرحلة لاحقة.

القواعد تشمل:

- عدم رفع secrets إلى Git.
- عدم وضع private keys أو tokens داخل source code.
- استخدام configuration/environment injection للأسرار.
- تطبيق Least Privilege.
- التحقق من المدخلات عند حدود النظام.
- عدم تعطيل Authentication أو Authorization لتسهيل التنفيذ.
- عدم إضعاف Firebase Security Rules حتى تعمل Feature بسرعة.

---

# Firebase

Firebase هو الخيار المفضل عندما يحتاج المشروع إلى خدماته.

يمكن استخدام:

- Firebase Authentication.
- Cloud Firestore.
- Firebase Storage.
- Firebase Cloud Messaging (FCM).
- Firebase Security Rules.
- Crash/Analytics عندما تكون مطلوبة فعلاً.

لا يعني ذلك استخدام جميع الخدمات في كل مشروع؛ يتم اختيار الخدمات بناءً على المتطلبات.

### Supabase

Supabase ليس خياراً افتراضياً في هذا الإعداد.

لا يتم إدخاله إلى المشروع إلا إذا طلبته أنت صراحة.

---

# Testing

التنفيذ لا يعتبر منتهياً بمجرد أن الكود يـcompile.

Claude يهتم بـ:

- Unit tests لمنطق الأعمال.
- Repository/Data tests عندما تكون مهمة.
- ViewModel/state tests.
- UI/Integration tests للـ user journeys المهمة عندما تكون مناسبة.
- اختبار الحالات الحرجة وحالات الفشل.
- تشغيل أضيق اختبار مفيد أولاً، ثم التوسع عند الحاجة.

ولا يسمح لنفسه بتعديل الاختبارات فقط لتجعل implementation الخاطئ يمر.

---

# احترام المشروع الحالي

قبل تعديل أي شيء، Claude يجب أن:

1. يقرأ الملفات ذات العلاقة.
2. يفهم patterns الموجودة.
3. يعيد استخدام components وabstractions المناسبة.
4. يحافظ على naming/package conventions.
5. يقلل التغييرات غير المتعلقة بالمهمة.
6. لا يعيد كتابة كود يعمل لمجرد أنه يفضل أسلوباً آخر.
7. لا يضيف Library جديدة بدون سبب واضح.
8. ينتبه لتأثير upgrades على dependencies والإصدارات.

هذه القاعدة مهمة لمنع ما يسمى:

> "While I'm here, I'll rewrite half the project."

---

# طريقة تنفيذ Feature جديدة

Claude يتبع هذا التسلسل:

```text
1. Understand the request
        ↓
2. Inspect the repository
        ↓
3. Clarify real unknowns
        ↓
4. Define behavior + edge cases
        ↓
5. Define technical approach
        ↓
6. Discuss design
        ↓
7. Implement incrementally
        ↓
8. Verify
        ↓
9. Finish with DONE
```

ولا يبدأ بالتصميم قبل فهم الـ feature والـ product.

---

# Git

Git history والـ remote operations ملك لك.

Claude يستطيع قراءة:

- `git status`
- `git diff`
- `git log`
- branches
- الملفات

لكن ممنوع عليه افتراضياً:

```text
commit
push
force-push
merge
branch deletion
history rewriting
```

أنت من يقوم بالـ commit والـ push.

## طريقة إنهاء الخطوة

بعد إنهاء خطوة مهمة، الرد المطلوب يكون:

```text
DONE
Suggested commit: feat(auth): add email authentication flow
```

أي أن Claude يوضح أن الخطوة انتهت ويقترح لك رسالة commit، لكنه لا ينفذ commit بنفسه.

---

# اللغة

اللغة الافتراضية لكل شيء هي **English**:

- Conversation.
- Code.
- Comments.
- Documentation.
- Commit suggestions.
- Technical explanations.
- UI text عندما لا يتم طلب لغة أخرى.

يمكنك طلب العربية أو أي لغة أخرى داخل المنتج، وعندها ينفذ Claude الطلب كما هو.

---

# قواعد التواصل

## Emojis

**لا توجد Emojis نهائياً بشكل افتراضي.**

هذا ينطبق على:

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

الاستثناء الوحيد:

> إذا طلبت أنت استخدام Emojis بشكل صريح.

---

# كيف تستخدم الملف العالمي؟

بعد تنزيل `CLAUDE_GLOBAL_PROFILE.md`، غيّر اسمه إلى:

```text
CLAUDE.md
```

ثم ضعه هنا:

```text
C:\Users\AHMED AL SAFFAN\.claude\CLAUDE.md
```

أصبح هذا الملف قاعدة عامة لجميع مشاريع Claude Code التي تعمل من حساب Windows نفسه.

---

# كيف تستخدم قالب المشروع؟

عند إنشاء مشروع جديد:

```text
cp CLAUDE_PROJECT_TEMPLATE.md MyProject/CLAUDE.md
```

على Windows يمكنك ببساطة نسخ الملف وإعادة تسميته يدوياً.

ثم املأ الأقسام:

```text
Project Overview
Requirements
Architecture
Design Direction
Backend and Services
Testing
Build and Run
Important Project Constraints
Known Decisions
Project-Specific Overrides
```

---

# Project-Specific Overrides

هناك فرق مهم بين القواعد العامة وقواعد المشروع.

مثلاً:

```text
Global:
MVVM + Clean Architecture

Project:
This legacy project must remain in MVP.
```

في هذه الحالة Claude يتبع قرار المشروع لأنه متعمد ومحدد للمشروع.

ترتيب الأولوية هو:

```text
1. Your current explicit request
2. Project-specific instructions
3. Global profile
4. Existing repository conventions
5. General engineering preferences
```

---

# مثال عملي

بدلاً من أن تقول في كل مرة:

> استخدم Kotlin، MVVM، Clean Architecture، لا تستخدم emojis، لا تعمل commit، لا تعمل تصميم AI، اسألني عن المشروع أولاً، واستخدم Firebase...

يكفي أن تقول مثلاً:

```text
Build the authentication flow.
```

Claude سيأخذ القواعد العامة من `~/.claude/CLAUDE.md`، ثم يقرأ `CLAUDE.md` الخاص بالمشروع، ثم يتعامل مع المهمة ضمن هذه القواعد.

---

# فلسفة مختصرة

هذا الإعداد يمكن تلخيصه بهذه الجملة:

> **Understand first. Design intentionally. Build professionally. Verify everything. Commit nothing unless Ahmad does it.**

---

# الملفات المقترحة للمستودع

```text
.
├── README.md
├── CLAUDE_GLOBAL_PROFILE.md
└── CLAUDE_PROJECT_TEMPLATE.md
```

ولا يلزم رفع `~/.claude/CLAUDE.md` نفسه كنسخة مختلفة؛ الملف العالمي الموجود على جهازك يمكن أن يكون هو نسخة `CLAUDE_GLOBAL_PROFILE.md` بعد إعادة تسميتها، بينما قالب المشروع يبقى منفصلاً.

---

# ملاحظة مهمة

`CLAUDE.md` هو نظام تعليمات وسياق لـ Claude Code، وليس بديلاً عن صلاحيات النظام أو Git hooks أو أدوات الحماية التقنية.

لذلك قواعد مثل منع `commit` و`push` هنا هي قواعد سلوكية. ولمنعها تقنياً بدرجة أقوى، يمكن إضافة إعدادات Permissions/Hooks في Claude Code.

---

## ملفات الإعداد

| الملف | الاستخدام |
|---|---|
| [`CLAUDE_GLOBAL_PROFILE.md`](./CLAUDE_GLOBAL_PROFILE.md) | الملف الشخصي العام |
| [`CLAUDE_PROJECT_TEMPLATE.md`](./CLAUDE_PROJECT_TEMPLATE.md) | قالب لكل مشروع |
| `README.md` | شرح النظام وطريقة استخدامه |

---

**Built for Ahmad's development workflow.**
