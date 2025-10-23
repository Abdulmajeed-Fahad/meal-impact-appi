# دليل التثبيت والتشغيل - Setup Guide

## اختر وجبتك واكتشف تأثيرها
## Choose Your Meal and Discover Its Impact

---

## المتطلبات - Requirements

قبل البدء، تأكد من تثبيت البرامج التالية:
Before starting, make sure you have installed:

1. **Node.js** (الإصدار 18 أو أحدث - Version 18 or newer)
   - تحميل من: https://nodejs.org/
   - Download from: https://nodejs.org/

2. **Visual Studio Code**
   - تحميل من: https://code.visualstudio.com/
   - Download from: https://code.visualstudio.com/

---

## خطوات التثبيت - Installation Steps

### الخطوة 1: تحميل المشروع
### Step 1: Download the Project

1. اضغط على زر "Download ZIP" من v0
2. فك ضغط الملف في المكان المناسب على جهازك
3. ستجد مجلد باسم المشروع

1. Click "Download ZIP" button from v0
2. Extract the file to a suitable location on your computer
3. You will find a folder with the project name

---

### الخطوة 2: فتح المشروع في Visual Studio Code
### Step 2: Open Project in Visual Studio Code

1. افتح Visual Studio Code
2. من القائمة العلوية، اختر: **File → Open Folder**
3. اختر مجلد المشروع الذي قمت بفك ضغطه
4. انتظر حتى يتم تحميل المشروع بالكامل

1. Open Visual Studio Code
2. From the top menu, select: **File → Open Folder**
3. Select the project folder you extracted
4. Wait for the project to load completely

---

### الخطوة 3: فتح Terminal (الطرفية)
### Step 3: Open Terminal

في Visual Studio Code:
In Visual Studio Code:

1. من القائمة العلوية: **Terminal → New Terminal**
   أو اضغط: **Ctrl + `** (Windows/Linux) أو **Cmd + `** (Mac)

2. ستظهر نافذة Terminal في الأسفل

1. From top menu: **Terminal → New Terminal**
   Or press: **Ctrl + `** (Windows/Linux) or **Cmd + `** (Mac)

2. A Terminal window will appear at the bottom

---

### الخطوة 4: تثبيت المكتبات المطلوبة
### Step 4: Install Required Libraries

في نافذة Terminal، اكتب الأمر التالي واضغط Enter:
In the Terminal window, type the following command and press Enter:

\`\`\`bash
npm install
\`\`\`

**ملاحظة:** قد يستغرق هذا الأمر عدة دقائق لتحميل جميع المكتبات المطلوبة.
**Note:** This command may take several minutes to download all required libraries.

انتظر حتى ترى رسالة تشير إلى اكتمال التثبيت.
Wait until you see a message indicating installation is complete.

---

### الخطوة 5: تشغيل التطبيق
### Step 5: Run the Application

بعد اكتمال التثبيت، اكتب الأمر التالي في Terminal:
After installation is complete, type the following command in Terminal:

\`\`\`bash
npm run dev
\`\`\`

**ستظهر رسالة مشابهة لهذه:**
**You will see a message similar to this:**

\`\`\`
> meal-impact-app@0.1.0 dev
> next dev

  ▲ Next.js 15.x.x
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Starting...
 ✓ Ready in 2.5s
\`\`\`

---

### الخطوة 6: فتح التطبيق في المتصفح
### Step 6: Open Application in Browser

1. افتح متصفح الإنترنت (Chrome, Edge, Firefox, Safari)
2. اكتب في شريط العنوان: **http://localhost:3000**
3. اضغط Enter

**الآن يجب أن ترى التطبيق يعمل!**
**Now you should see the application running!**

---

## المميزات - Features

### 1. اختيار اللغة - Language Selection
- زر "ابدأ" للغة العربية
- زر "Start" للغة الإنجليزية
- "ابدأ" button for Arabic
- "Start" button for English

### 2. اختيار الوجبات - Meal Selection
- 15 وجبة عشوائية من 50 وجبة سعودية/خليجية
- صور توضيحية لكل وجبة
- 15 random meals from 50 Saudi/Gulf meals
- Illustrative images for each meal

### 3. تحليل القيم الغذائية - Nutritional Analysis
- السعرات الحرارية (Calories)
- الدهون (Fats)
- السكريات (Sugars)
- الصوديوم (Sodium)
- أشرطة تقدم ملونة لكل قيمة
- Colored progress bars for each value

### 4. التقييم الصحي - Health Assessment
- مؤشر صحي بالألوان (أحمر/أصفر/أخضر)
- الأضرار المحتملة
- البدائل الصحية
- Color-coded health index (Red/Yellow/Green)
- Potential harms
- Healthy alternatives

### 5. رمز QR للنصيحة - QR Code for Advice
- زر "اعرض النصيحة" لإظهار رمز QR
- يحتوي على معلومات الوجبة والنصائح الصحية
- "Show Advice" button to display QR code
- Contains meal information and health advice

### 6. الأصوات التفاعلية - Interactive Sounds
- صوت عند الضغط على الأزرار
- صوت عند اختيار الوجبة
- زر كتم الصوت في جميع الصفحات
- Sound when clicking buttons
- Sound when selecting meals
- Mute button on all pages

### 7. شعار المؤتمر - Conference Logo
- يظهر في أعلى اليمين للعربية
- يظهر في أعلى اليسار للإنجليزية
- Appears at top right for Arabic
- Appears at top left for English

---

## استكشاف الأخطاء - Troubleshooting

### المشكلة: لا يعمل الأمر npm
### Problem: npm command doesn't work

**الحل:**
- تأكد من تثبيت Node.js بشكل صحيح
- أعد تشغيل Visual Studio Code
- أعد تشغيل الكمبيوتر

**Solution:**
- Make sure Node.js is installed correctly
- Restart Visual Studio Code
- Restart your computer

---

### المشكلة: خطأ في التثبيت
### Problem: Installation error

**الحل:**
- احذف مجلد `node_modules` إن وجد
- احذف ملف `package-lock.json` إن وجد
- شغل الأمر مرة أخرى: `npm install`

**Solution:**
- Delete `node_modules` folder if exists
- Delete `package-lock.json` file if exists
- Run the command again: `npm install`

---

### المشكلة: المنفذ 3000 مستخدم
### Problem: Port 3000 is in use

**الحل:**
- أغلق أي تطبيق آخر يستخدم المنفذ 3000
- أو استخدم منفذ آخر: `npm run dev -- -p 3001`

**Solution:**
- Close any other application using port 3000
- Or use another port: `npm run dev -- -p 3001`

---

## إيقاف التطبيق - Stop the Application

لإيقاف التطبيق:
To stop the application:

1. اذهب إلى نافذة Terminal في Visual Studio Code
2. اضغط: **Ctrl + C** (Windows/Linux) أو **Cmd + C** (Mac)
3. اكتب `y` واضغط Enter إذا طُلب منك ذلك

1. Go to Terminal window in Visual Studio Code
2. Press: **Ctrl + C** (Windows/Linux) or **Cmd + C** (Mac)
3. Type `y` and press Enter if prompted

---

## ملاحظات مهمة - Important Notes

### للعرض على شاشة 55 بوصة:
### For 55-inch Display:

1. افتح المتصفح في وضع ملء الشاشة (F11)
2. اضبط الشاشة على الوضع الرأسي (Portrait)
3. تأكد من دقة الشاشة 1080x1920 أو مشابهة

1. Open browser in fullscreen mode (F11)
2. Set display to Portrait orientation
3. Make sure screen resolution is 1080x1920 or similar

### الموسيقى الخلفية:
### Background Music:

- يمكنك إضافة ملف موسيقى بصيغة MP3
- ضع الملف في مجلد `public` باسم `background-music.mp3`
- سيتم تشغيله تلقائياً عند فتح التطبيق

- You can add an MP3 music file
- Place the file in `public` folder named `background-music.mp3`
- It will play automatically when opening the application

---

## الدعم الفني - Technical Support

إذا واجهت أي مشاكل:
If you encounter any problems:

1. تأكد من اتباع جميع الخطوات بالترتيب
2. تحقق من رسائل الخطأ في Terminal
3. تأكد من اتصالك بالإنترنت أثناء التثبيت

1. Make sure to follow all steps in order
2. Check error messages in Terminal
3. Make sure you're connected to internet during installation

---

## معلومات إضافية - Additional Information

### التقنيات المستخدمة:
### Technologies Used:

- **Next.js 15** - إطار عمل React
- **TypeScript** - لغة البرمجة
- **Tailwind CSS** - تنسيق الواجهة
- **QR Code** - لإنشاء رموز QR
- **Web Audio API** - للأصوات التفاعلية

- **Next.js 15** - React framework
- **TypeScript** - Programming language
- **Tailwind CSS** - UI styling
- **QR Code** - For generating QR codes
- **Web Audio API** - For interactive sounds

---

## بنية المشروع - Project Structure

\`\`\`
meal-impact-app/
├── app/                    # صفحات التطبيق - Application pages
│   ├── page.tsx           # الصفحة الرئيسية - Home page
│   ├── meals/             # صفحة الوجبات - Meals page
│   └── layout.tsx         # التخطيط العام - Main layout
├── components/            # المكونات - Components
│   ├── meal-card.tsx     # بطاقة الوجبة - Meal card
│   └── meal-analysis.tsx # تحليل الوجبة - Meal analysis
├── lib/                   # المكتبات - Libraries
│   ├── meals-data.ts     # بيانات الوجبات - Meals data
│   └── utils.ts          # وظائف مساعدة - Helper functions
└── public/               # الملفات العامة - Public files
    └── conference-logo.png # شعار المؤتمر - Conference logo
\`\`\`

---

**تم إعداد هذا الدليل لمساعدتك في تشغيل التطبيق بنجاح**
**This guide was prepared to help you run the application successfully**

**بالتوفيق! - Good Luck!**
