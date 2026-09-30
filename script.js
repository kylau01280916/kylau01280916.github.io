(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('#site-header');
  const navToggle = document.querySelector('#navToggle');
  const navLinks = document.querySelector('#navLinks');
  const themeToggle = document.querySelector('#themeToggle');
  const root = document.body;

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  navToggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }));

  if (localStorage.getItem('sl-theme') === 'dark') root.classList.add('dark');
  themeToggle?.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('sl-theme', root.classList.contains('dark') ? 'dark' : 'light');
  });

  const languageNames = { en: 'English', 'zh-Hant': '繁體中文', 'zh-Hans': '简体中文' };
  const translations = {
    en: {
      '众屿科技 · 众屿云峦舍': 'ARCHIPELAGO Technology X · Cloud Ridge House'
    },
    'zh-Hant': {
      'Skip to main content': '跳至主要內容', 'About': '自我介紹', 'Education': '學歷', 'Skills': '技能', 'Projects': '項目', 'Contact': '聯絡',
      'Hello, I’m': '你好，我是', 'BBA-SCM Student': '供應鏈管理工商管理學士生', 'CEO of 众屿科技 X · 众屿云峦舍': '眾嶼科技 X · 眾嶼雲巒舍行政總裁', '众屿科技 X · 众屿云峦舍': '眾嶼科技 X · 眾嶼雲巒舍', '众屿科技 · 众屿云峦舍': '眾嶼科技 X · 眾嶼雲巒舍', 'Aspiring Supply Chain Leader': '立志成為供應鏈領袖', 'Lifelong Learner': '終身學習者',
      'A BBA-SCM student at The Hang Seng University of Hong Kong and CEO of ': '我現為香港恒生大學供應鏈管理工商管理學士生，亦是', '. I explore how supply chains, entrepreneurship, and technology connect to create real-world value.': '的行政總裁。我致力探索供應鏈、創業與科技如何結合，創造實際價值。',
      'View my projects': '查看我的項目', 'Get in touch': '聯絡我', 'Featured projects': '精選項目', 'Company founded': '創立公司', 'Expected graduation': '預計畢業年份', '2025 Visit to Reed Flute Cave, Guilin': '2025 年桂林蘆笛岩',
      'A little about me': '關於我', 'About Me': '自我介紹', 'I am studying BBA in Supply Chain Management at The Hang Seng University of Hong Kong. I am interested in how goods, information, and value move through organisations, and how better decisions at each step can create meaningful impact.': '我在香港恒生大學修讀供應鏈管理工商管理學士。我對貨物、資訊與價值如何在機構中流動，以及每個環節的更佳決策如何帶來深遠影響深感興趣。',
      'Outside the classroom, I serve as CEO of': '課堂以外，我擔任', '. Building a venture has taught me that leadership is a daily practice: listen carefully, communicate clearly, test ideas, and keep moving when the first plan changes.': '的行政總裁。創業讓我明白，領導力是日常實踐：細心聆聽、清晰溝通、測試想法，並在計劃有變時繼續前進。',
      'This website documents my learning journey, the work I am building, and the questions I want to explore next.': '這個網站記錄我的學習旅程、正在建立的事業，以及我接下來希望探索的問題。',
      'Where I study': '我的學習之地', 'Education': '學歷', 'BBA in Supply Chain Management': '供應鏈管理工商管理學士', 'The Hang Seng University of Hong Kong': '香港恒生大學',
      'Focused on logistics, procurement, operations management, and the role of digital tools in modern supply chains.': '專注物流、採購、營運管理，以及數碼工具在現代供應鏈中的作用。', 'COM1006 — Artificial Intelligence and Its Applications': 'COM1006 — 人工智能及其應用', 'Learning how AI can be used responsibly to design, build, and improve digital products through vibe coding.': '學習如何以負責任的方式運用人工智能，透過氛圍編碼設計、建立和改良數碼產品。',
      'Ongoing': '持續進行', 'Self-directed learning': '自主學習', 'Continuous': '持續進修', 'Exploring entrepreneurship, technology trends, business communication, and practical leadership through real projects.': '透過實際項目探索創業、科技趨勢、商業溝通與實踐領導力。',
      'What I enjoy': '我的興趣', 'Skills & Interests': '技能與興趣', 'Supply chain management': '供應鏈管理', 'Understanding how planning, sourcing, production, and delivery connect to create value.': '了解規劃、採購、生產和交付如何相互配合並創造價值。', 'Entrepreneurship': '創業', 'Turning ideas into action while learning leadership, problem-solving, and resilience.': '將想法付諸實踐，同時培養領導力、解難能力與韌性。', 'Technology & innovation': '科技與創新', 'Following useful ways AI, data, and digital tools can support people and organisations.': '探索人工智能、數據和數碼工具如何有效支援個人與機構。', 'Areas of focus': '專注範疇', 'Supply chain operations': '供應鏈營運', 'Business strategy': '商業策略', 'Team leadership': '團隊領導', 'AI & digital tools': '人工智能與數碼工具',
      'Things I am working on': '正在進行的項目', 'Projects': '項目', 'A selection of ventures, coursework, and experiments. Each project has taught me something about operations, leadership, or technology.': '以下是部分創業、課程作業與實驗項目。每個項目都讓我對營運、領導或科技有新的體會。', 'All': '全部', 'Business': '商業', 'Technology': '科技', 'Academic': '學術', 'Project 01': '項目 01', 'Project 02': '項目 02', 'Project 03': '項目 03', 'Project 04': '項目 04', 'Project 05': '項目 05',
      'As CEO, I am leading this venture from a rough idea into a working operation. My responsibilities include shaping direction, coordinating with team members, planning operations, and learning how to turn a vision into something real.': '作為行政總裁，我正帶領這項事業由初步構思發展成實際營運。我的工作包括制定方向、協調團隊、規劃營運，並學習如何把願景化為現實。', 'Role': '職務', 'CEO & Founder': '行政總裁及創辦人', 'Focus': '重點', 'Strategy & Operations': '策略與營運', 'Status': '狀態', 'Active': '進行中', 'Key lesson:': '重要體會：', 'Clear communication matters as much as a good idea.': '清晰溝通與好點子同樣重要。',
      'Personal Website': '個人網站', 'Built through vibe coding: prompting AI to generate HTML, CSS, and JavaScript while reviewing and refining every output. I learned how to structure an accessible site, use CSS variables, and design for mobile.': '透過氛圍編碼建立：提示人工智能生成 HTML、CSS 和 JavaScript，並逐一檢視及完善結果。我學會了建立無障礙網站、使用 CSS 變數，以及為手機設計。', 'Stack': '技術', 'Course': '課程', 'Year': '年份', 'AI accelerates drafts, but human judgment makes the result personal.': '人工智能加快草稿生成，但人的判斷才能令成果展現個性。',
      'Supply Chain Case Study': '供應鏈個案研究', 'A coursework analysis of how a Hong Kong company manages its supply chain. I researched sourcing strategy, mapped logistics flows, identified bottlenecks, and proposed practical improvements.': '分析一家香港公司的供應鏈管理課程作業。我研究採購策略、繪製物流流程、找出瓶頸，並提出實際改善建議。', 'Type': '類型', 'Case analysis': '個案分析', 'Outcome': '成果', 'Action plan': '行動方案',
      'AI Study Assistant': '人工智能學習助手', 'An early-stage concept for helping university students organise notes, generate revision questions, and prepare for exams. I am researching existing tools, sketching user flows, and considering student-data privacy.': '一個協助大學生整理筆記、生成溫習問題和準備考試的初步構想。我正研究現有工具、規劃使用流程，並考慮學生資料私隱。', 'Stage': '階段', 'Concept': '構想', 'AI & Education': '人工智能與教育', 'Next': '下一步', 'Prototype': '原型',
      'Supply Chain Simulation': '供應鏈模擬', 'A team exercise modelling a simple supplier-to-customer chain and testing order quantities and lead times. It gave me a practical introduction to the bullwhip effect and inventory theory.': '一項模擬供應商至客戶流程，並測試訂購數量和交貨時間的團隊練習。這讓我實際認識牛鞭效應與庫存理論。', 'Team exercise': '團隊練習', 'Operations': '營運', 'No projects in this category yet.': '此類別暫無項目。',
      'Let’s connect': '歡迎聯絡', 'Contact': '聯絡', 'If you would like to say hello, discuss a project, or share an idea, feel free to reach out. I usually reply within two business days.': '歡迎與我打招呼、討論項目或分享想法。我通常會在兩個工作天內回覆。', 'Email': '電郵', 'Location': '地點', 'Hong Kong SAR': '香港特別行政區', 'Response time': '回覆時間', 'Within 2 business days': '兩個工作天內', 'Your name': '你的姓名', 'Your email': '你的電郵', 'Message': '訊息', 'Send message': '傳送訊息', 'Thanks! Opening your email client…': '謝謝！正在開啟你的電郵程式…', 'Please enter your name.': '請輸入姓名。', 'Please enter a valid email.': '請輸入有效的電郵地址。', 'Please write a short message.': '請輸入簡短訊息。', 'Built with care and curiosity · COM1006 Individual Assignment': '以細心與好奇心製作 · COM1006 個人作業', 'Email me': '寄電郵給我', 'Back to top': '返回頁首', 'Toggle navigation': '切換導覽列', 'Toggle dark mode': '切換深色模式', 'Main navigation': '主導覽列', 'Filter projects': '篩選項目', 'Samuel Lau outdoors among illuminated rocks': 'Samuel Lau 在發光岩石旁的戶外照片'
    },
    'zh-Hans': {
      'Skip to main content': '跳至主要内容', 'About': '关于我', 'Education': '学历', 'Skills': '技能', 'Projects': '项目', 'Contact': '联系',
      'Hello, I’m': '你好，我是', 'BBA-SCM Student': '供应链管理工商管理学士生', 'CEO of 众屿科技 X · 众屿云峦舍': '众屿科技 X · 众屿云峦舍首席执行官', '众屿科技 X · 众屿云峦舍': '众屿科技 X · 众屿云峦舍', '众屿科技 · 众屿云峦舍': '众屿科技 X · 众屿云峦舍', 'Aspiring Supply Chain Leader': '立志成为供应链领袖', 'Lifelong Learner': '终身学习者',
      'A BBA-SCM student at The Hang Seng University of Hong Kong and CEO of ': '我现为香港恒生大学供应链管理工商管理学士生，亦是', '. I explore how supply chains, entrepreneurship, and technology connect to create real-world value.': '的首席执行官。我致力探索供应链、创业与科技如何结合，创造实际价值。',
      'View my projects': '查看我的项目', 'Get in touch': '联系我', 'Featured projects': '精选项目', 'Company founded': '创立公司', 'Expected graduation': '预计毕业年份', '2025 Visit to Reed Flute Cave, Guilin': '2025 年桂林芦笛岩',
      'A little about me': '关于我', 'About Me': '自我介绍', 'I am studying BBA in Supply Chain Management at The Hang Seng University of Hong Kong. I am interested in how goods, information, and value move through organisations, and how better decisions at each step can create meaningful impact.': '我在香港恒生大学修读供应链管理工商管理学士。我对货物、信息与价值如何在机构中流动，以及每个环节的更佳决策如何带来深远影响深感兴趣。',
      'Outside the classroom, I serve as CEO of': '课堂以外，我担任', '. Building a venture has taught me that leadership is a daily practice: listen carefully, communicate clearly, test ideas, and keep moving when the first plan changes.': '的首席执行官。创业让我明白，领导力是日常实践：细心聆听、清晰沟通、测试想法，并在计划有变时继续前进。',
      'This website documents my learning journey, the work I am building, and the questions I want to explore next.': '这个网站记录我的学习旅程、正在建立的事业，以及我接下来希望探索的问题。',
      'Where I study': '我的学习之地', 'BBA in Supply Chain Management': '供应链管理工商管理学士', 'The Hang Seng University of Hong Kong': '香港恒生大学',
      'Focused on logistics, procurement, operations management, and the role of digital tools in modern supply chains.': '专注物流、采购、运营管理，以及数字工具在现代供应链中的作用。', 'COM1006 — Artificial Intelligence and Its Applications': 'COM1006 — 人工智能及其应用', 'Learning how AI can be used responsibly to design, build, and improve digital products through vibe coding.': '学习如何以负责任的方式运用人工智能，通过氛围编程设计、建立和改良数字产品。',
      'Ongoing': '持续进行', 'Self-directed learning': '自主学习', 'Continuous': '持续进修', 'Exploring entrepreneurship, technology trends, business communication, and practical leadership through real projects.': '通过实际项目探索创业、科技趋势、商业沟通与实践领导力。',
      'What I enjoy': '我的兴趣', 'Skills & Interests': '技能与兴趣', 'Supply chain management': '供应链管理', 'Understanding how planning, sourcing, production, and delivery connect to create value.': '了解规划、采购、生产和交付如何相互配合并创造价值。', 'Entrepreneurship': '创业', 'Turning ideas into action while learning leadership, problem-solving, and resilience.': '将想法付诸实践，同时培养领导力、解决问题的能力与韧性。', 'Technology & innovation': '科技与创新', 'Following useful ways AI, data, and digital tools can support people and organisations.': '探索人工智能、数据和数字工具如何有效支持个人与机构。', 'Areas of focus': '专注领域', 'Supply chain operations': '供应链运营', 'Business strategy': '商业战略', 'Team leadership': '团队领导', 'AI & digital tools': '人工智能与数字工具',
      'Things I am working on': '正在进行的项目', 'A selection of ventures, coursework, and experiments. Each project has taught me something about operations, leadership, or technology.': '以下是部分创业、课程作业与实验项目。每个项目都让我对运营、领导或科技有新的体会。', 'All': '全部', 'Business': '商业', 'Technology': '科技', 'Academic': '学术', 'Project 01': '项目 01', 'Project 02': '项目 02', 'Project 03': '项目 03', 'Project 04': '项目 04', 'Project 05': '项目 05',
      'As CEO, I am leading this venture from a rough idea into a working operation. My responsibilities include shaping direction, coordinating with team members, planning operations, and learning how to turn a vision into something real.': '作为首席执行官，我正带领这项事业从初步构想发展成实际运营。我的工作包括制定方向、协调团队、规划运营，并学习如何把愿景化为现实。', 'Role': '职务', 'CEO & Founder': '首席执行官及创始人', 'Focus': '重点', 'Strategy & Operations': '战略与运营', 'Status': '状态', 'Active': '进行中', 'Key lesson:': '重要体会：', 'Clear communication matters as much as a good idea.': '清晰沟通与好点子同样重要。',
      'Personal Website': '个人网站', 'Built through vibe coding: prompting AI to generate HTML, CSS, and JavaScript while reviewing and refining every output. I learned how to structure an accessible site, use CSS variables, and design for mobile.': '通过氛围编程建立：提示人工智能生成 HTML、CSS 和 JavaScript，并逐一检查及完善结果。我学会了建立无障碍网站、使用 CSS 变量，以及为手机设计。', 'Stack': '技术', 'Course': '课程', 'Year': '年份', 'AI accelerates drafts, but human judgment makes the result personal.': '人工智能加快草稿生成，但人的判断才能令成果展现个性。',
      'Supply Chain Case Study': '供应链案例研究', 'A coursework analysis of how a Hong Kong company manages its supply chain. I researched sourcing strategy, mapped logistics flows, identified bottlenecks, and proposed practical improvements.': '分析一家香港公司的供应链管理课程作业。我研究采购策略、绘制物流流程、找出瓶颈，并提出实际改善建议。', 'Type': '类型', 'Case analysis': '案例分析', 'Outcome': '成果', 'Action plan': '行动方案',
      'AI Study Assistant': '人工智能学习助手', 'An early-stage concept for helping university students organise notes, generate revision questions, and prepare for exams. I am researching existing tools, sketching user flows, and considering student-data privacy.': '一个帮助大学生整理笔记、生成复习问题和准备考试的初步构想。我正研究现有工具、规划使用流程，并考虑学生数据隐私。', 'Stage': '阶段', 'Concept': '构想', 'AI & Education': '人工智能与教育', 'Next': '下一步', 'Prototype': '原型',
      'Supply Chain Simulation': '供应链模拟', 'A team exercise modelling a simple supplier-to-customer chain and testing order quantities and lead times. It gave me a practical introduction to the bullwhip effect and inventory theory.': '一项模拟供应商至客户流程，并测试订购数量和交货时间的团队练习。这让我实际认识牛鞭效应与库存理论。', 'Team exercise': '团队练习', 'Operations': '运营', 'No projects in this category yet.': '此类别暂无项目。',
      'Let’s connect': '欢迎联系', 'If you would like to say hello, discuss a project, or share an idea, feel free to reach out. I usually reply within two business days.': '欢迎与我打招呼、讨论项目或分享想法。我通常会在两个工作日内回复。', 'Email': '邮箱', 'Location': '地点', 'Hong Kong SAR': '香港特别行政区', 'Response time': '回复时间', 'Within 2 business days': '两个工作日内', 'Your name': '你的姓名', 'Your email': '你的邮箱', 'Message': '消息', 'Send message': '发送消息', 'Thanks! Opening your email client…': '谢谢！正在打开你的邮箱程序…', 'Please enter your name.': '请输入姓名。', 'Please enter a valid email.': '请输入有效的邮箱地址。', 'Please write a short message.': '请输入简短消息。', 'Built with care and curiosity · COM1006 Individual Assignment': '以细心与好奇心制作 · COM1006 个人作业', 'Email me': '给我发邮件', 'Back to top': '返回页首', 'Toggle navigation': '切换导航栏', 'Toggle dark mode': '切换深色模式', 'Main navigation': '主导航栏', 'Filter projects': '筛选项目', 'Samuel Lau outdoors among illuminated rocks': 'Samuel Lau 在发光岩石旁的户外照片'
    }
  };
  const languageButtons = document.querySelectorAll('[data-language]');
  const textNodes = [];
  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (textWalker.nextNode()) textNodes.push(textWalker.currentNode);
  const originalTexts = textNodes.map((node) => node.nodeValue);
  let currentLanguage = localStorage.getItem('sl-language');
  if (!languageNames[currentLanguage]) currentLanguage = 'en';

  const localeAttributes = {
    'Main navigation': { en: 'Main navigation', 'zh-Hant': '主導覽列', 'zh-Hans': '主导航栏' },
    'Website language': { en: 'Website language', 'zh-Hant': '網站語言', 'zh-Hans': '网站语言' },
    'Toggle navigation': { en: 'Toggle navigation', 'zh-Hant': '切換導覽列', 'zh-Hans': '切换导航栏' },
    'Toggle dark mode': { en: 'Toggle dark mode', 'zh-Hant': '切換深色模式', 'zh-Hans': '切换深色模式' },
    'Filter projects': { en: 'Filter projects', 'zh-Hant': '篩選項目', 'zh-Hans': '筛选项目' },
    'Samuel Lau outdoors among illuminated rocks': { en: 'Samuel Lau outdoors among illuminated rocks', 'zh-Hant': 'Samuel Lau 在發光岩石旁的戶外照片', 'zh-Hans': 'Samuel Lau 在发光岩石旁的户外照片' }
  };

  const pageTitles = {
    home: { en: 'Samuel Lau | BBA-SCM Student & CEO', 'zh-Hant': 'Samuel Lau | 供應鏈管理學生及行政總裁', 'zh-Hans': 'Samuel Lau | 供应链管理学生及首席执行官' },
    about: { en: 'About | Samuel Lau', 'zh-Hant': '自我介紹 | Samuel Lau', 'zh-Hans': '自我介绍 | Samuel Lau' },
    education: { en: 'Education | Samuel Lau', 'zh-Hant': '學歷 | Samuel Lau', 'zh-Hans': '学历 | Samuel Lau' },
    skills: { en: 'Skills | Samuel Lau', 'zh-Hant': '技能 | Samuel Lau', 'zh-Hans': '技能 | Samuel Lau' },
    projects: { en: 'Projects | Samuel Lau', 'zh-Hant': '項目 | Samuel Lau', 'zh-Hans': '项目 | Samuel Lau' },
    'project-detail': { en: 'Project | Samuel Lau', 'zh-Hant': '項目 | Samuel Lau', 'zh-Hans': '项目 | Samuel Lau' },
    contact: { en: 'Contact | Samuel Lau', 'zh-Hant': '聯絡 | Samuel Lau', 'zh-Hans': '联系 | Samuel Lau' }
  };

  const applyLanguage = (language) => {
    currentLanguage = languageNames[language] ? language : 'en';
    const dictionary = translations[currentLanguage] || {};
    textNodes.forEach((node, index) => {
      const original = originalTexts[index];
      const trimmed = original.trim();
      if (!trimmed) return;
      const translated = dictionary[trimmed] || trimmed;
      node.nodeValue = original.replace(trimmed, translated);
    });
    const heroIntro = document.querySelector('.hero-intro');
    if (heroIntro) {
      const localizedIntro = {
        en: 'A BBA-SCM student at The Hang Seng University of Hong Kong and CEO of <strong>ARCHIPELAGO Technology X · Cloud Ridge House</strong>. I explore how supply chains, entrepreneurship, and technology connect to create real-world value.',
        'zh-Hant': '我現為香港恒生大學供應鏈管理工商管理學士生，亦擔任<strong>眾嶼科技 X · 眾嶼雲巒舍</strong>行政總裁。我致力探索供應鏈、創業與科技如何結合，創造實際價值。',
        'zh-Hans': '我现为香港恒生大学供应链管理工商管理学士生，亦担任<strong>众屿科技 X · 众屿云峦舍</strong>首席执行官。我致力探索供应链、创业与科技如何结合，创造实际价值。'
      };
      heroIntro.innerHTML = localizedIntro[currentLanguage];
    }
    document.documentElement.lang = currentLanguage;
    document.title = pageTitles[document.body.dataset.page]?.[currentLanguage] || pageTitles.home[currentLanguage];
    document.querySelector('meta[name="description"]').content = currentLanguage === 'en'
      ? 'Personal website of Samuel Lau, a BBA-SCM student at HSUHK and CEO of 众屿科技 X · 众屿云峦舍.'
      : currentLanguage === 'zh-Hant' ? 'Samuel Lau 的個人網站，香港恒生大學供應鏈管理學生及眾嶼科技 X · 眾嶼雲巒舍行政總裁。'
        : 'Samuel Lau 的个人网站，香港恒生大学供应链管理学生及众屿科技 X · 众屿云峦舍首席执行官。';
    document.querySelectorAll('[aria-label]').forEach((element) => {
      const labels = localeAttributes[element.getAttribute('aria-label')];
      if (labels) element.setAttribute('aria-label', labels[currentLanguage]);
    });
    document.querySelectorAll('img[alt]').forEach((image) => {
      const labels = localeAttributes[image.alt];
      if (labels) image.alt = labels[currentLanguage];
    });
    languageButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage)));
    roles = roleSets[currentLanguage];
    phrase = 0;
    position = 0;
    deleting = false;
    if (typed) typed.textContent = roles[0];
    localStorage.setItem('sl-language', currentLanguage);
  };

  languageButtons.forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language)));

  const roleSets = {
    en: ['BBA-SCM Student', 'CEO of ARCHIPELAGO Technology X · Cloud Ridge House', 'Aspiring Supply Chain Leader', 'Lifelong Learner'],
    'zh-Hant': ['供應鏈管理工商管理學士生', '眾嶼科技 X · 眾嶼雲巒舍行政總裁', '立志成為供應鏈領袖', '終身學習者'],
    'zh-Hans': ['供应链管理工商管理学士生', '众屿科技 X · 众屿云峦舍首席执行官', '立志成为供应链领袖', '终身学习者']
  };
  let roles = roleSets.en;
  let phrase = 0;
  let position = 0;
  let deleting = false;
  const typed = document.querySelector('#typedRole');
  applyLanguage(currentLanguage);
  if (typed && !reduceMotion) {
    const tick = () => { const text = roles[phrase]; typed.textContent = text.slice(0, position); if (!deleting && position++ === text.length) { deleting = true; return setTimeout(tick, 1500); } if (deleting && position-- === 0) { deleting = false; phrase = (phrase + 1) % roles.length; return setTimeout(tick, 350); } setTimeout(tick, deleting ? 35 : 65); };
    tick();
  }

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
    reveals.forEach((item) => observer.observe(item));
  } else reveals.forEach((item) => item.classList.add('visible'));

  const counters = document.querySelectorAll('[data-count]');
  const count = (element) => { const target = Number(element.dataset.count); if (reduceMotion) return void (element.textContent = target); const start = performance.now(); const step = (now) => { const progress = Math.min((now - start) / 1000, 1); element.textContent = Math.floor(target * (1 - (1 - progress) ** 3)); if (progress < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); };
  if ('IntersectionObserver' in window) { const counterObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { count(entry.target); counterObserver.unobserve(entry.target); } }), { threshold: .6 }); counters.forEach((item) => counterObserver.observe(item)); } else counters.forEach(count);

  const bars = document.querySelectorAll('.skill-bar i');
  if ('IntersectionObserver' in window) { const barObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.style.width = `${entry.target.dataset.width}%`; barObserver.unobserve(entry.target); } }), { threshold: .5 }); bars.forEach((bar) => barObserver.observe(bar)); } else bars.forEach((bar) => { bar.style.width = `${bar.dataset.width}%`; });

  const filters = document.querySelectorAll('.filter-btn'); const cards = document.querySelectorAll('.project-card'); const empty = document.querySelector('#emptyState');
  filters.forEach((button) => button.addEventListener('click', () => { const filter = button.dataset.filter; filters.forEach((item) => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-selected', String(active)); }); let shown = 0; cards.forEach((card) => { const match = filter === 'all' || card.dataset.category === filter; card.classList.toggle('hidden', !match); if (match) shown += 1; }); if (empty) empty.hidden = shown > 0; }));

  const sections = document.querySelectorAll('main section[id]'); const anchors = document.querySelectorAll('[data-nav]');
  if ('IntersectionObserver' in window) { const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) anchors.forEach((anchor) => anchor.classList.toggle('active', anchor.getAttribute('href') === `#${entry.target.id}`)); }), { rootMargin: '-45% 0px -50% 0px' }); sections.forEach((section) => sectionObserver.observe(section)); }

  const top = document.querySelector('#backToTop');
  window.addEventListener('scroll', () => top?.classList.toggle('visible', window.scrollY > 500), { passive: true });
  top?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

  const form = document.querySelector('#contactForm');
  form?.querySelector('#cancelForm')?.addEventListener('click', () => {
    form.querySelectorAll('[data-error-for]').forEach((error) => { error.textContent = ''; });
    const success = document.querySelector('#formSuccess');
    if (success) success.hidden = true;
  });

  document.querySelector('#closeWindow')?.addEventListener('click', () => {
    window.close();
    window.setTimeout(() => {
      if (!window.closed) window.location.assign('index.html');
    }, 100);
  });

  form?.addEventListener('submit', (event) => { event.preventDefault(); let valid = true; const name = form.name.value.trim(); const email = form.email.value.trim(); const message = form.message.value.trim(); const emailOkay = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); const messages = {
    en: ['Please enter your name.', 'Please enter a valid email.', 'Please write a short message.'],
    'zh-Hant': ['請輸入姓名。', '請輸入有效的電郵地址。', '請輸入簡短訊息。'],
    'zh-Hans': ['请输入姓名。', '请输入有效的邮箱地址。', '请输入简短消息。']
  }; const error = (field, text) => { form.querySelector(`[data-error-for="${field}"]`).textContent = text; if (text) valid = false; }; error('name', name ? '' : messages[currentLanguage][0]); error('email', emailOkay ? '' : messages[currentLanguage][1]); error('message', message ? '' : messages[currentLanguage][2]); if (!valid) return; const subject = encodeURIComponent(`Website contact from ${name}`); const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`); window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=kinyeung.lau@gmail.com&su=${subject}&body=${body}`, '_blank', 'noopener,noreferrer'); form.reset(); const success = document.querySelector('#formSuccess'); success.textContent = currentLanguage === 'en' ? 'Thanks! Opening your email client…' : currentLanguage === 'zh-Hant' ? '謝謝！正在開啟你的電郵程式…' : '谢谢！正在打开你的邮箱程序…'; success.hidden = false; });

  document.querySelector('#year').textContent = new Date().getFullYear();
})();
