# اختر وجبتك واكتشف تأثيرها | Choose Your Meal and Discover Its Impact

تطبيق تعليمي تفاعلي ثنائي اللغة (عربي/إنجليزي) يساعد المستخدمين على فهم التأثير الغذائي للمأكولات السعودية والخليجية.

An interactive bilingual (Arabic/English) educational app that helps users understand the nutritional impact of Saudi and Gulf cuisine.

## المميزات | Features

- **واجهة ثنائية اللغة | Bilingual Interface**: دعم كامل للعربية والإنجليزية | Full support for Arabic and English
- **50 وجبة حقيقية | 50 Real Meals**: قاعدة بيانات كاملة للأطباق السعودية والخليجية الأصيلة | Complete database of authentic Saudi/Gulf dishes
- **تحليل غذائي | Nutritional Analysis**: تفصيل دقيق للسعرات والدهون والسكريات والصوديوم | Detailed breakdown of calories, fats, sugars, and sodium
- **تقييم التأثير الصحي | Health Impact Assessment**: شرح واضح للمخاطر الصحية عند التكرار | Clear explanations of health risks with frequent consumption
- **بدائل صحية | Healthy Alternatives**: اقتراحات عملية لخيارات أكثر صحة | Practical suggestions for healthier options
- **مؤشر صحي ملون | Color-Coded Health Index**: نظام بصري (أحمر/أصفر/أخضر) للتقييم السريع | Visual system (Red/Yellow/Green) for quick assessment
- **مشاركة عبر QR | QR Code Sharing**: إنشاء ومشاركة النصائح الصحية عبر رموز QR | Generate and share health tips via QR codes
- **موسيقى خلفية | Background Music**: موسيقى محيطة اختيارية مع زر كتم الصوت | Optional ambient music with mute toggle
- **محسّن للشاشات الكبيرة | Optimized for Large Displays**: مصمم لشاشات 55 بوصة بالطول | Designed for 55-inch portrait screens

## البدء | Getting Started

### المتطلبات | Prerequisites

- Node.js 18+ مثبت | installed
- npm أو yarn لإدارة الحزم | or yarn package manager

### التثبيت | Installation

**1. تحميل المشروع | Download the project** من v0 (انقر على النقاط الثلاث ← تحميل ZIP | click the three dots → Download ZIP)

**2. فك ضغط ملف ZIP | Extract the ZIP file** إلى الموقع المطلوب | to your desired location

**3. فتح Terminal/Command Prompt | Open terminal/command prompt** والانتقال إلى مجلد المشروع | and navigate to the project folder:
\`\`\`bash
cd path/to/meal-impact-app
\`\`\`

**4. تثبيت الحزم | Install dependencies**:
\`\`\`bash
npm install
\`\`\`

**5. تشغيل خادم التطوير | Run the development server**:
\`\`\`bash
npm run dev
\`\`\`

**6. فتح المتصفح | Open your browser** وزيارة | and visit:
\`\`\`
http://localhost:3000
\`\`\`

### البناء للإنتاج | Building for Production

لإنشاء نسخة إنتاج محسّنة | To create an optimized production build:

\`\`\`bash
npm run build
npm start
\`\`\`

## هيكل المشروع | Project Structure

\`\`\`
meal-impact-app/
├── app/
│   ├── page.tsx              # صفحة البداية مع اختيار اللغة | Landing page with language selection
│   ├── meals/
│   │   └── page.tsx          # شاشة اختيار الوجبات | Meal selection screen
│   ├── layout.tsx            # التخطيط الرئيسي | Root layout
│   └── globals.css           # الأنماط العامة | Global styles
├── components/
│   ├── meal-card.tsx         # مكون بطاقة الوجبة | Individual meal card component
│   └── meal-analysis.tsx     # نافذة تحليل الوجبة مع رمز QR | Meal analysis modal with QR code
├── lib/
│   ├── meals-data.ts         # قاعدة بيانات كاملة لـ 50 وجبة | Complete database of 50 meals
│   └── utils.ts              # وظائف مساعدة | Utility functions
├── public/
│   └── conference-logo.png   # شعار المؤتمر | Conference logo
└── package.json
\`\`\`

## الاستخدام | Usage

1. **شاشة البداية | Start Screen**: اختر لغتك (عربي أو إنجليزي) | Choose your language (Arabic or English)
2. **اختيار الوجبة | Meal Selection**: تصفح 15 وجبة مختارة عشوائياً من قاعدة البيانات | Browse 15 randomly selected meals from the database
3. **عرض التحليل | View Analysis**: انقر على أي وجبة لرؤية المعلومات الغذائية التفصيلية | Click any meal to see detailed nutritional information
4. **مشاركة النتائج | Share Results**: أنشئ رمز QR لمشاركة نصيحتك الصحية | Generate a QR code to share your health tip
5. **جرب مرة أخرى | Try Again**: احصل على اختيار عشوائي جديد من 15 وجبة | Get a new random selection of 15 meals

## التخصيص | Customization

### إضافة موسيقى خلفية | Adding Background Music

استبدل ملف الصوت الافتراضي بملفك الخاص | Replace the placeholder audio file with your own:
1. أضف ملف MP3 الخاص بك إلى مجلد `public` | Add your MP3 file to the `public` folder
2. حدّث مصدر الصوت في `app/page.tsx` | Update the audio source in `app/page.tsx`:
   \`\`\`typescript
   <source src="/your-music-file.mp3" type="audio/mpeg" />
   \`\`\`

### تعديل قاعدة بيانات الوجبات | Modifying Meals Database

عدّل `lib/meals-data.ts` لإضافة أو حذف أو تعديل الوجبات في قاعدة البيانات | Edit `lib/meals-data.ts` to add, remove, or modify meals in the database.

## التقنيات المستخدمة | Technologies Used

- **Next.js 15**: إطار عمل React مع App Router | React framework with App Router
- **TypeScript**: تطوير آمن من حيث الأنواع | Type-safe development
- **Tailwind CSS v4**: تنسيق قائم على الأدوات | Utility-first styling
- **shadcn/ui**: مكتبة مكونات واجهة المستخدم | UI component library
- **qrcode.react**: إنشاء رموز QR | QR code generation
- **Lucide React**: مكتبة الأيقونات | Icon library

## دعم المتصفحات | Browser Support

- Chrome/Edge (أحدث إصدار | latest)
- Firefox (أحدث إصدار | latest)
- Safari (أحدث إصدار | latest)

## ملاحظات للتشغيل في Visual Studio | Notes for Visual Studio

هذا المشروع مصمم للعمل مع Visual Studio Code. للحصول على أفضل تجربة:
This project is designed to work with Visual Studio Code. For the best experience:

1. افتح المجلد في VS Code | Open the folder in VS Code
2. ثبّت الإضافات الموصى بها (TypeScript, ESLint, Tailwind CSS IntelliSense) | Install recommended extensions (TypeScript, ESLint, Tailwind CSS IntelliSense)
3. استخدم Terminal المدمج لتشغيل الأوامر | Use the integrated Terminal to run commands

## الترخيص | License

هذا المشروع تم إنشاؤه لأغراض تعليمية.
This project is created for educational purposes.
