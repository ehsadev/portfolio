/* ============================================================
   SITE DATA — the only file you need to edit for content.
   Every text is { en: "...", fa: "..." }. Plain strings are shown in both languages.
   Keep this file as the single source of portfolio content.
   ============================================================ */
window.SITE = {
  siteUrl: "https://ehsadev.github.io/", // used for SEO files — verify it matches your real Pages URL

  heroChips: [
    "Python",
    "FastAPI",
    "Django",
    "PostgreSQL",
    "Redis",
    "RAG",
    "LLM API Integration",
    "Structured Outputs",
    "NLP Pipelines",
    "Celery",
    "RabbitMQ",
    "Docker",
    "asyncio",
    "Pydantic",
  ], // rotate 4 at a time around your photo (use your own skills)

  articlesPerPage: 4, // articles shown per page
  /* Tag dictionary: articles refer to these ids. Add a tag here, then use its id in an article. */
  articleTags: {
    llm: { en: "LLM", fa: "LLM" },
    rag: { en: "RAG", fa: "RAG" },
    nlp: { en: "NLP", fa: "NLP" },
    python: { en: "Python", fa: "پایتون" },
    fastapi: { en: "FastAPI", fa: "FastAPI" },
    postgres: { en: "PostgreSQL", fa: "PostgreSQL" },
    automation: { en: "Automation", fa: "اتوماسیون" },
    architecture: { en: "Architecture", fa: "معماری" },
    ai: { en: "AI", fa: "هوش مصنوعی" },
    apidesign: { en: "API Design", fa: "طراحی API" },
    backend: { en: "Backend", fa: "بک‌اند" },
  },
  photo: "assets/photo.webp",
  initials: { en: "ES", fa: "ES" },

  roles: [
    {
      en: "Backend Software Engineer",
      fa: "مهندس نرم‌افزار بک‌اند",
    },
    {
      en: "Python Backend Engineer",
      fa: "مهندس بک‌اند با پایتون",
    },
    {
      en: "AI Engineer",
      fa: "مهندس هوش مصنوعی",
    },
    {
      en: "AI Application Engineer",
      fa: "مهندس توسعه اپلیکیشن‌های هوش مصنوعی",
    },
    {
      en: "LLM Application Development",
      fa: "توسعه اپلیکیشن‌های مبتنی بر مدل‌های زبانی بزرگ",
    },
    {
      en: "AI Agent Engineering",
      fa: "مهندسی عامل‌های هوش مصنوعی",
    },
    {
      en: "Agentic Workflow Design",
      fa: "طراحی گردش‌کارهای عامل‌محور هوش مصنوعی",
    },
    {
      en: "RAG & Knowledge Systems",
      fa: "سیستم‌های بازیابی اطلاعات و مدیریت دانش",
    },
    {
      en: "Context Engineering",
      fa: "مهندسی زمینه و مدیریت اطلاعات ورودی مدل‌های هوش مصنوعی",
    },
    {
      en: "LLM Evaluation & Reliability",
      fa: "ارزیابی و افزایش قابلیت اطمینان مدل‌های زبانی",
    },
    {
      en: "AI Observability & Monitoring",
      fa: "پایش و نظارت بر عملکرد سیستم‌های هوش مصنوعی",
    },
    {
      en: "MCP & Tool Integration",
      fa: "یکپارچه‌سازی مدل‌های هوش مصنوعی با ابزارها از طریق MCP",
    },
    {
      en: "API Engineering & Integration",
      fa: "مهندسی و یکپارچه‌سازی APIها",
    },
    {
      en: "AI-Powered Automation",
      fa: "اتوماسیون مبتنی بر هوش مصنوعی",
    },
    {
      en: "Software Architecture & System Design",
      fa: "معماری نرم‌افزار و طراحی سیستم",
    },
    {
      en: "Production-Ready AI Systems",
      fa: "سیستم‌های هوش مصنوعی آماده بهره‌برداری در محیط واقعی",
    },
  ],

  /* Optional sections — empty list = section hidden. */
  /* Articles. Sorted automatically: newest date first (same date = the order written here).
     date: "2026" or exact "2026-03-14" for precise ordering.  tags: ids from articleTags above.
     read: number of minutes.  Optional: image + alt, body { en:[paragraphs], fa:[paragraphs] }
     ("## " = heading, "- " lines = list), refs: [{ label, url }]. No body = the description is shown in the modal. */
  articles: [
    {
      tags: ["rag"],
      date: "2026-10-05",
      read: 9,
      title: {
        en: "Why Every Knowledge-Heavy Product Needs RAG: A Practical Introduction",
        fa: "چرا هر محصول دانش‌محور به RAG نیاز دارد: یک معرفی کاربردی",
      },
      desc: {
        en: "LLMs hallucinate when they lack context. Retrieval-Augmented Generation (RAG) solves this by grounding every model response in your own documents, databases or knowledge bases — making AI answers accurate, auditable and up to date without retraining the model. This article explains what RAG is, when you need it, and how to wire it into a Python backend.",
        fa: "مدل‌های زبانی بزرگ وقتی فاقد زمینه هستند دچار توهم می‌شوند. RAG این مشکل را با لنگر انداختن هر پاسخ مدل در اسناد، پایگاه‌داده یا دانش‌پایه خودتان حل می‌کند — پاسخ‌های AI را دقیق، قابل ردیابی و به‌روز می‌کند بدون نیاز به آموزش مجدد مدل. این مقاله توضیح می‌دهد RAG چیست، چه زمانی به آن نیاز دارید و چطور آن را به یک بک‌اند پایتون متصل کنید.",
      },
      image: "assets/articles/sample-1.svg",
      link: "",
    },
    {
      tags: ["llm", "python", "fastapi"],
      date: "2026-10-26",
      read: 8,
      title: {
        en: "Integrating LLMs into a Python Backend: Structured Outputs and Validation",
        fa: "یکپارچه‌سازی LLMها در بک‌اند پایتون: خروجی ساختاریافته و اعتبارسنجی",
      },
      desc: {
        en: "An LLM that returns freeform text is hard to rely on in production. This guide covers how to call LLM APIs from FastAPI, enforce structured JSON outputs using Pydantic, handle model failures gracefully and treat AI responses with the same rigour as any other backend dependency.",
        fa: "یک LLM که متن آزاد برمی‌گرداند در محیط production قابل اطمینان نیست. این راهنما نحوه فراخوانی APIهای LLM از FastAPI، اجبار به خروجی JSON ساختاریافته با Pydantic، مدیریت خطاهای مدل و رفتار با پاسخ‌های AI با همان دقتی که با هر dependency بک‌اند دیگری رفتار می‌شود را پوشش می‌دهد.",
      },
      link: "",
    },
    {
      tags: ["nlp"],
      date: "2026-08-14",
      read: 7,
      title: {
        en: "NLP in Production: Turning Unstructured Text into Actionable Data",
        fa: "NLP در محیط عملیاتی: تبدیل متن غیرساختاریافته به داده قابل اقدام",
      },
      desc: {
        en: "Most business data lives in emails, documents, news feeds and user messages — none of it structured. Natural Language Processing bridges that gap. This article walks through a real pipeline: ingesting raw text, running summarisation and keyword extraction with an LLM, validating the output and storing structured records in PostgreSQL, with Python code you can adapt.",
        fa: "اکثر داده‌های کسب‌وکار در ایمیل‌ها، اسناد، فیدهای خبری و پیام‌های کاربران قرار دارند — هیچ‌کدام ساختاریافته نیستند. NLP این شکاف را پر می‌کند. این مقاله یک پایپ‌لاین واقعی را توضیح می‌دهد: دریافت متن خام، اجرای خلاصه‌سازی و استخراج کلیدواژه با LLM، اعتبارسنجی خروجی و ذخیره رکوردهای ساختاریافته در PostgreSQL.",
      },
      link: "",
    },
    {
      tags: ["rag", "fastapi", "postgres"],
      date: "2026",
      read: 10,
      title: {
        en: "Building a RAG Pipeline with FastAPI, PostgreSQL and pgvector",
        fa: "ساخت پایپ‌لاین RAG با FastAPI، PostgreSQL و pgvector",
      },
      desc: {
        en: "A step-by-step guide to implementing Retrieval-Augmented Generation without adding a separate vector database: store embeddings directly in PostgreSQL using pgvector, build a semantic search endpoint in FastAPI, retrieve the most relevant chunks and pass them as context to an LLM — all in a single, maintainable Python service.",
        fa: "راهنمای گام‌به‌گام پیاده‌سازی RAG بدون افزودن یک پایگاه‌داده برداری جداگانه: ذخیره embedding‌ها مستقیماً در PostgreSQL با pgvector، ساخت یک endpoint جستجوی معنایی در FastAPI، بازیابی مرتبط‌ترین chunk‌ها و ارسال آن‌ها به عنوان context به LLM — همه در یک سرویس پایتون قابل‌نگهداری.",
      },
      link: "",
    },
    {
      tags: ["ai", "nlp"],
      date: "2026-09-29",
      read: 6,
      title: {
        en: "Building a News-to-Insight Pipeline with NLP and Python",
        fa: "ساخت پایپ‌لاین تبدیل خبر به بینش با NLP و پایتون",
      },
      desc: {
        en: "Raw news is noise. This article shows how to build an automated pipeline that fetches content from multiple sources, extracts clean text, summarises each item with an LLM, pulls out named entities and keywords, and stores structured results ready for downstream analysis — the same approach used in the Coinora project.",
        fa: "خبر خام سر و صداست. این مقاله نشان می‌دهد چطور یک پایپ‌لاین خودکار بسازید که محتوا را از منابع مختلف دریافت می‌کند، متن تمیز استخراج می‌کند، هر آیتم را با LLM خلاصه می‌کند، موجودیت‌های نام‌گذاری‌شده و کلیدواژه‌ها را استخراج می‌کند و نتایج ساختاریافته را آماده تحلیل ذخیره می‌کند.",
      },
      link: "",
    },
    {
      tags: ["apidesign"],
      date: "2026-06-13",
      read: 7,
      title: {
        en: "API Transformation Patterns: Decoupling Your App from External Providers",
        fa: "الگوهای تبدیل API: جداسازی اپلیکیشن از پروایدرهای خارجی",
      },
      desc: {
        en: "Changing an external API provider should not require rewriting your application. This article covers the transformation layer pattern: mapping request and response schemas between your internal contract and any third-party API, using NLP-assisted field matching to detect semantic equivalence, and keeping your business logic entirely insulated from provider details.",
        fa: "تغییر پروایدر API خارجی نباید به بازنویسی اپلیکیشن شما نیاز داشته باشد. این مقاله الگوی لایه تبدیل را پوشش می‌دهد: mapping اسکیماهای request و response بین قرارداد داخلی شما و هر API شخص ثالث، استفاده از تطابق فیلد با کمک NLP برای تشخیص هم‌ارزی معنایی و کاملاً عایق‌بندی کردن منطق کسب‌وکار از جزئیات پروایدر.",
      },
      link: "",
    },
    {
      tags: ["backend", "fastapi"],
      date: "2026-05-28",
      read: 6,
      title: {
        en: "Structuring FastAPI Projects for Real-World Scale",
        fa: "ساختاردهی پروژه‌های FastAPI برای مقیاس واقعی",
      },
      desc: {
        en: "How to organise a FastAPI codebase with modular routers, layered dependency injection and Pydantic schemas so the project stays easy to extend as requirements grow — covering folder layout, service layer separation, error handling patterns and async best practices drawn from production experience.",
        fa: "چطور یک پروژه FastAPI را با روترهای ماژولار، dependency injection لایه‌بندی‌شده و اسکیماهای Pydantic ساختاردهی کنیم تا با رشد نیازمندی‌ها به‌راحتی قابل گسترش بماند — شامل چیدمان پوشه‌ها، جداسازی لایه سرویس، الگوهای مدیریت خطا و بهترین روش‌های async از تجربه عملیاتی.",
      },
      link: "",
    },
    {
      tags: ["automation", "python"],
      date: "2026-03-11",
      read: 5,
      title: {
        en: "Reliable Background Jobs in Python: Retries, Idempotency and Monitoring",
        fa: "کارهای پس‌زمینه قابل‌اتکا در پایتون: تلاش مجدد، idempotency و پایش",
      },
      desc: {
        en: "AI pipelines and data workflows run in the background — and they fail in unpredictable ways. This article covers patterns for making async jobs resilient: idempotent task design, exponential back-off retries, dead-letter queues and lightweight observability hooks that catch silent failures before they compound.",
        fa: "پایپ‌لاین‌های AI و گردش‌کارهای داده در پس‌زمینه اجرا می‌شوند — و به روش‌های غیرقابل پیش‌بینی شکست می‌خورند. این مقاله الگوهایی برای مقاوم کردن جاب‌های async پوشش می‌دهد: طراحی تسک idempotent، تلاش مجدد با back-off نمایی، صف‌های dead-letter و قلاب‌های observability سبک که خرابی‌های خاموش را قبل از تجمیع می‌گیرند.",
      },
      link: "",
    },
  ],

  testimonials: [],
  education: [],

  email: "dev1ehsan@gmail.com",
  cv: "assets/Ehsan_Saberi_Resume.pdf",

  links: [
    { label: "GitHub", icon: "github", url: "https://github.com/ehsadev" },
    { label: "WhatsApp", icon: "whatsapp", url: "https://wa.me/dev_ehsan" },
    {
      label: "LinkedIn",
      icon: "linkedin",
      url: "https://linkedin.com/in/ehsansaberi",
    },
    { label: "Telegram", icon: "telegram", url: "https://t.me/devbyehsan" },
  ],

  flow: [
    {
      k: "Python",
      d: {
        en: "Building reliable, maintainable backend services with clean and practical code.",
        fa: "توسعه سرویس‌های بک‌اند قابل اتکا و نگهداری‌پذیر با کدی تمیز و کاربردی.",
      },
    },
    {
      k: "AI Integration",
      d: {
        en: "Connecting AI models and APIs to real products, with a focus on practical value.",
        fa: "اتصال مدل‌ها و APIهای هوش مصنوعی به محصولات واقعی، با تمرکز بر کاربرد و ارزش عملی.",
      },
    },
    {
      k: "API Engineering",
      d: {
        en: "Designing clear API contracts and dependable integrations between services.",
        fa: "طراحی قراردادهای شفاف API و یکپارچه‌سازی قابل اتکای سرویس‌ها.",
      },
    },
    {
      k: "Automation",
      d: {
        en: "Turning repetitive manual tasks into consistent, efficient workflows.",
        fa: "تبدیل کارهای تکراری و دستی به گردش‌کارهای منظم و کارآمد.",
      },
    },
    {
      k: "Intelligent Workflows",
      d: {
        en: "Combining business logic, external services, and AI capabilities into useful workflows.",
        fa: "ترکیب منطق کسب‌وکار، سرویس‌های خارجی و قابلیت‌های هوش مصنوعی در گردش‌کارهای کاربردی.",
      },
    },
    {
      k: "System Design",
      d: {
        en: "Designing practical architectures that remain maintainable as products evolve.",
        fa: "طراحی معماری‌های کاربردی و نگهداری‌پذیر که با تکامل محصولات سازگار می‌مانند.",
      },
    },
  ],

  experience: [
    {
      role: { en: "Software Engineer", fa: "مهندس نرم‌افزار" },
      org: "API DNA",
      period: "",
      points: [
        {
          en: "Contributed to an intelligent API transformation layer that decouples applications from external provider contracts, reducing the need to change application code when switching providers.",
          fa: "مشارکت در توسعه‌ی لایه‌ای هوشمند برای تبدیل API که وابستگی اپلیکیشن به قراردادهای ارائه‌دهندگان خارجی را کاهش می‌دهد و امکان تعویض ارائه‌دهنده را بدون بازنویسی منطق اصلی برنامه فراهم می‌کند.",
        },
        {
          en: "Worked with NLP- and LLM-assisted field matching to identify semantic similarities between API schemas and support mapping suggestions across differently structured APIs.",
          fa: "کار روی تطبیق فیلدها با کمک NLP و LLM برای شناسایی شباهت معنایی میان ساختارهای API و ارائه‌ی پیشنهادهای نگاشت بین APIهای دارای ساختار متفاوت.",
        },
        {
          en: "Contributed to feature development, quality assurance, debugging, and improving the reliability of the core transformation engine.",
          fa: "مشارکت در توسعه‌ی قابلیت‌ها، تضمین کیفیت، عیب‌یابی و بهبود قابلیت اطمینان موتور اصلی تبدیل API.",
        },
      ],
    },
    {
      role: { en: "Software Engineer", fa: "مهندس نرم‌افزار" },
      org: "ZandAva",
      period: "",
      points: [
        {
          en: "Worked on AI-powered workflows for processing and analysing voice and music submissions to support a more structured, data-driven talent discovery process.",
          fa: "کار روی گردش‌کارهای مبتنی بر هوش مصنوعی برای پردازش و تحلیل نمونه‌های صوتی و موسیقی با هدف کمک به فرایند ساختارمندتر و داده‌محور کشف استعداد.",
        },
        {
          en: "Contributed to classification and scoring workflows designed to help filter submissions and identify promising candidates.",
          fa: "مشارکت در فرایندهای طبقه‌بندی و امتیازدهی برای غربال‌گری ارسال‌ها و شناسایی گزینه‌های امیدوارکننده.",
        },
        {
          en: "Helped integrate structured AI results into the backend workflow so that model outputs could support downstream application logic.",
          fa: "کمک به یکپارچه‌سازی خروجی‌های ساختاریافته‌ی هوش مصنوعی با جریان کاری بک‌اند تا نتایج مدل‌ها در منطق بعدی برنامه قابل استفاده باشند.",
        },
      ],
    },
    {
      role: { en: "Software Engineer", fa: "مهندس نرم‌افزار" },
      org: "Coinora",
      period: "",
      points: [
        {
          en: "Worked on a content-processing pipeline for Bitcoin-related news and video, turning unstructured material into more useful information for analysis.",
          fa: "کار روی گردش‌کار پردازش محتوای خبری و ویدئویی مرتبط با بیت‌کوین با هدف تبدیل محتوای غیرساختاریافته به اطلاعات کاربردی‌تر برای تحلیل.",
        },
        {
          en: "Used AI-assisted summarisation and keyword extraction to make market-related content easier to review and process.",
          fa: "استفاده از خلاصه‌سازی و استخراج کلیدواژه با کمک هوش مصنوعی برای ساده‌تر کردن بررسی و پردازش محتوای مرتبط با بازار.",
        },
        {
          en: "Helped structure the processing workflow so collected content could be prepared for subsequent analysis.",
          fa: "کمک به ساختاردهی جریان پردازش محتوا تا داده‌های جمع‌آوری‌شده برای تحلیل‌های بعدی آماده شوند.",
        },
      ],
    },
  ],

  categories: [
    { id: "all", label: { en: "All", fa: "همه" } },
    { id: "backend", label: { en: "Backend", fa: "بک‌اند" } },
    { id: "ai", label: { en: "AI / NLP", fa: "هوش مصنوعی / NLP" } },
    { id: "automation", label: { en: "Automation", fa: "اتوماسیون" } },
    { id: "api", label: { en: "API Design", fa: "طراحی API" } },
  ],

  /* Add a project by copying a block. Keep the existing data structure. */
  projects: [
    {
      id: "api-dna",
      categories: ["backend", "api"],
      image: "assets/projects/api-dna.svg",
      title: "API DNA",
      alt: {
        en: "Abstract diagram of connected API nodes",
        fa: "نمودار انتزاعی از گره‌های متصل API",
      },
      summary: {
        en: "An API transformation and customization platform.",
        fa: "پلتفرمی برای تبدیل و سفارشی‌سازی APIها.",
      },
      desc: {
        en: "API DNA helps applications work with different API providers through a transformation layer. My contribution included feature development, QA, and debugging.",
        fa: "API DNA به اپلیکیشن‌ها کمک می‌کند از طریق یک لایه‌ی تبدیل با ارائه‌دهندگان مختلف API کار کنند. مشارکت من در این پروژه شامل توسعه‌ی قابلیت‌ها، تضمین کیفیت و عیب‌یابی بود.",
      },
      points: [
        {
          en: "Contributed to a transformation layer that maps request and response structures between an application and external API providers.",
          fa: "مشارکت در توسعه‌ی لایه‌ای برای نگاشت ساختار درخواست‌ها و پاسخ‌ها میان اپلیکیشن و ارائه‌دهندگان خارجی API.",
        },
        {
          en: "Worked on semantic field matching with LLM assistance to identify similarities between differently structured API schemas and suggest mappings.",
          fa: "کار روی تطبیق معنایی فیلدها با کمک LLM برای شناسایی شباهت میان ساختارهای متفاوت API و پیشنهاد نگاشت مناسب.",
        },
        {
          en: "Contributed to request and response transformation workflows to help isolate application logic from provider-specific differences.",
          fa: "مشارکت در جریان‌های تبدیل درخواست و پاسخ برای جدا نگه داشتن منطق اپلیکیشن از تفاوت‌های اختصاصی هر ارائه‌دهنده.",
        },
        {
          en: "Supported quality assurance and debugging to improve the reliability of the transformation workflow.",
          fa: "مشارکت در تضمین کیفیت و عیب‌یابی برای افزایش قابلیت اطمینان فرایند تبدیل API.",
        },
      ],
      tags: [
        { en: "API Transformation", fa: "تبدیل API" },
        { en: "Schema Mapping", fa: "نگاشت ساختار داده" },
        { en: "LLM Field Matching", fa: "تطبیق فیلد با LLM" },
        { en: "Provider Abstraction", fa: "انتزاع ارائه‌دهنده" },
        "FastAPI",
        "Python",
      ],
      github: "",
      demo: "",
    },

    {
      id: "zandava",
      categories: ["ai"],
      image: "assets/projects/zandava.svg",
      title: "ZandAva",
      alt: {
        en: "Abstract audio waveform",
        fa: "شکل موج صوتی انتزاعی",
      },
      summary: {
        en: "AI-assisted voice and music analysis for talent discovery.",
        fa: "تحلیل هوشمند صدا و موسیقی برای کمک به کشف استعداد.",
      },
      desc: {
        en: "ZandAva uses AI-assisted workflows to process and analyse voice and music submissions, helping make talent discovery more structured.",
        fa: "ZandAva از گردش‌کارهای مبتنی بر هوش مصنوعی برای پردازش و تحلیل نمونه‌های صوتی و موسیقی استفاده می‌کند تا فرایند کشف استعداد ساختارمندتر شود.",
      },
      points: [
        {
          en: "Worked on audio-processing workflows that prepare voice and music submissions for further analysis.",
          fa: "کار روی جریان‌های پردازش صوت برای آماده‌سازی نمونه‌های صدا و موسیقی جهت تحلیل‌های بعدی.",
        },
        {
          en: "Contributed to AI-assisted scoring and classification workflows for evaluating submissions against defined criteria.",
          fa: "مشارکت در گردش‌کارهای امتیازدهی و طبقه‌بندی مبتنی بر هوش مصنوعی برای ارزیابی ارسال‌ها بر اساس معیارهای مشخص.",
        },
        {
          en: "Helped connect structured AI results with backend data and application workflows.",
          fa: "کمک به اتصال نتایج ساختاریافته‌ی هوش مصنوعی به داده‌ها و گردش‌کارهای بک‌اند.",
        },
        {
          en: "Supported a more scalable pre-screening process by using automated analysis to help prioritise submissions.",
          fa: "کمک به مقیاس‌پذیرتر شدن فرایند بررسی اولیه با استفاده از تحلیل خودکار برای اولویت‌بندی ارسال‌ها.",
        },
      ],
      tags: [
        { en: "Audio Processing", fa: "پردازش صوت" },
        { en: "AI Scoring", fa: "امتیازدهی هوشمند" },
        { en: "Audio Pipeline", fa: "گردش‌کار پردازش صوت" },
        { en: "AI Classification", fa: "طبقه‌بندی هوشمند" },
        "Python",
        "FastAPI",
      ],
      github: "",
      demo: "",
    },

    {
      id: "coinora",
      categories: ["ai", "automation"],
      image: "assets/projects/coinora.svg",
      title: "Coinora",
      alt: {
        en: "Abstract text lines with highlighted keywords",
        fa: "خطوط متن انتزاعی با کلیدواژه‌های برجسته",
      },
      summary: {
        en: "Turning Bitcoin-related news and video content into structured information.",
        fa: "تبدیل اخبار و ویدئوهای مرتبط با بیت‌کوین به اطلاعات ساختاریافته.",
      },
      desc: {
        en: "Coinora processes Bitcoin-related news and video content with AI-assisted text extraction, summarisation, and keyword analysis to make information more useful for downstream analysis.",
        fa: "Coinora اخبار و ویدئوهای مرتبط با بیت‌کوین را با کمک هوش مصنوعی پردازش می‌کند؛ از استخراج متن و خلاصه‌سازی گرفته تا تحلیل کلیدواژه‌ها، تا اطلاعات برای تحلیل‌های بعدی کاربردی‌تر شوند.",
      },
      points: [
        {
          en: "Worked on ingesting Bitcoin-related news and video content and preparing extracted text for further processing.",
          fa: "کار روی دریافت اخبار و محتوای ویدئویی مرتبط با بیت‌کوین و آماده‌سازی متن استخراج‌شده برای پردازش‌های بعدی.",
        },
        {
          en: "Used LLM-assisted summarisation and keyword extraction to turn unstructured market commentary into more structured information.",
          fa: "استفاده از خلاصه‌سازی و استخراج کلیدواژه با کمک LLM برای تبدیل محتوای غیرساختاریافته‌ی بازار به اطلاعات ساختاریافته‌تر.",
        },
        {
          en: "Explored entity and keyword analysis to make market-related content easier to search, filter, and review.",
          fa: "به‌کارگیری تحلیل موجودیت‌ها و کلیدواژه‌ها برای آسان‌تر کردن جست‌وجو، فیلتر و بررسی محتوای مرتبط با بازار.",
        },
        {
          en: "Helped organise content-processing workflows to prepare collected information for subsequent analysis.",
          fa: "کمک به سازمان‌دهی جریان‌های پردازش محتوا برای آماده‌سازی اطلاعات جمع‌آوری‌شده جهت تحلیل‌های بعدی.",
        },
      ],
      tags: [
        { en: "NLP Pipeline", fa: "گردش‌کار پردازش زبان طبیعی" },
        { en: "LLM Summarisation", fa: "خلاصه‌سازی با LLM" },
        { en: "Keyword Analysis", fa: "تحلیل کلیدواژه" },
        { en: "Content Processing", fa: "پردازش محتوا" },
        "Python",
      ],
      github: "",
      demo: "",
    },
  ],

  /* Skills — no percentage bars, to avoid implying arbitrary proficiency scores. */
  skills: [
    {
      title: { en: "Backend", fa: "بک‌اند" },
      items: [
        { name: "Python", icon: "python" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "Django", icon: "django" },
        { en: "REST API Design", fa: "طراحی REST API" },
        {
          en: "Dependency Injection",
          fa: "تزریق وابستگی (Dependency Injection)",
        },
        {
          en: "Pydantic & Data Validation",
          fa: "Pydantic و اعتبارسنجی داده",
        },
        {
          en: "JWT & Authentication",
          fa: "JWT و احراز هویت",
        },
        {
          en: "Modular Architecture",
          fa: "معماری ماژولار",
        },
      ],
    },
    {
      title: { en: "Databases", fa: "پایگاه‌داده‌ها" },
      items: [
        { name: "PostgreSQL", icon: "postgresql" },
        "SQL",
        {
          en: "Database Modelling",
          fa: "مدل‌سازی پایگاه‌داده",
        },
        {
          en: "Query Optimisation",
          fa: "بهینه‌سازی پرس‌وجوها",
        },
        { name: "Redis", icon: "redis" },
      ],
    },
    {
      title: { en: "AI & NLP", fa: "هوش مصنوعی و پردازش زبان طبیعی" },
      items: [
        {
          en: "LLM API Integration",
          fa: "یکپارچه‌سازی API مدل‌های زبانی",
        },
        {
          en: "Structured Outputs",
          fa: "خروجی‌های ساختاریافته",
        },
        {
          en: "Prompt Engineering",
          fa: "مهندسی پرامپت",
        },
        {
          en: "RAG (Retrieval-Augmented Generation)",
          fa: "تولید تقویت‌شده با بازیابی (RAG)",
        },
        {
          en: "NLP Pipelines",
          fa: "گردش‌کارهای پردازش زبان طبیعی",
        },
        {
          en: "Text Summarisation",
          fa: "خلاصه‌سازی متن",
        },
        {
          en: "Keyword & Entity Extraction",
          fa: "استخراج کلیدواژه و شناسایی موجودیت",
        },
        {
          en: "Speech-to-Text Integration",
          fa: "یکپارچه‌سازی تبدیل گفتار به متن",
        },
      ],
    },
    {
      title: { en: "Async & Messaging", fa: "ناهمزمانی و پیام‌رسانی" },
      items: [
        "asyncio",
        { name: "Celery", icon: "celery" },
        { name: "RabbitMQ", icon: "rabbitmq" },
        {
          en: "Background Workers",
          fa: "پردازشگرهای پس‌زمینه",
        },
        {
          en: "Idempotent Task Design",
          fa: "طراحی وظایف امن در برابر اجرای تکراری",
        },
      ],
    },
    {
      title: { en: "Infrastructure", fa: "زیرساخت" },
      items: [
        { name: "Docker", icon: "docker" },
        { name: "Linux", icon: "linux" },
        { name: "Git", icon: "git" },
        { name: "Nginx", icon: "nginx" },
        {
          en: "CI/CD Concepts",
          fa: "مفاهیم یکپارچه‌سازی و استقرار پیوسته (CI/CD)",
        },
      ],
    },
    {
      title: { en: "Frontend (Complementary)", fa: "فرانت‌اند (مهارت مکمل)" },
      items: [
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Node.js", icon: "nodedotjs" },
        { name: "Next.js", icon: "nextdotjs" },
        { name: "React", icon: "react" },
      ],
    },
  ],

  /* Interface texts — English and Persian. */
  ui: {
    a_refs: { en: "References", fa: "منابع" },
    a_source: { en: "Source", fa: "منبع" },
    a_search: { en: "Search articles…", fa: "جستجو در مقالات…" },
    a_all: { en: "All", fa: "همه" },
    a_none: {
      en: "No articles match your search.",
      fa: "مقاله‌ای مطابق جستجوی شما پیدا نشد.",
    },
    a_clear: { en: "Clear filters", fa: "پاک کردن فیلترها" },
    a_showing: {
      en: "Showing {a}–{b} of {n} · newest first",
      fa: "نمایش {a} تا {b} از {n} · جدیدترین ابتدا",
    },
    a_prev: { en: "Previous page", fa: "صفحه قبل" },
    a_next: { en: "Next page", fa: "صفحه بعد" },
    a_page: { en: "Page", fa: "صفحه" },
    a_tags: { en: "Filter by tag", fa: "فیلتر بر اساس برچسب" },
    minRead: { en: "{n} min read", fa: "{n} دقیقه مطالعه" },
    c_title: {
      en: "Let's build something useful together.",
      fa: "بیایید با هم چیز مفیدی بسازیم.",
    },
    c_find: { en: "Find me online", fa: "مرا آنلاین پیدا کنید" },
    c_compose: { en: "Write a message", fa: "پیام بنویسید" },
    f_err: {
      en: "Please write a message first.",
      fa: "لطفاً ابتدا پیام را بنویسید.",
    },
    f_hint: {
      en: "This opens your email app with the message ready to send.",
      fa: "با این کار برنامه ایمیل شما با پیام آماده باز می‌شود.",
    },
    f_ph: { en: "What are you working on?", fa: "روی چه چیزی کار می‌کنید؟" },
    cvLabel: { en: "Résumé · PDF", fa: "رزومه · PDF" },
    emailLabel: { en: "Email", fa: "ایمیل" },
    n_art: { en: "Articles", fa: "مقالات" },
    n_test: { en: "Testimonials", fa: "توصیه‌نامه‌ها" },
    n_edu: { en: "Education", fa: "تحصیلات" },
    readMore: { en: "Read more", fa: "بیشتر بخوانید" },
    hi: { en: "Hello, I'm", fa: "سلام، من" },
    theme: { en: "Dark mode", fa: "حالت تیره" },

    title: {
      en: "Ehsan Saberi — Software Engineer | Backend & AI-Integrated Systems",
      fa: "احسان صابری — مهندس نرم‌افزار | بک‌اند و سیستم‌های یکپارچه با هوش مصنوعی",
    },

    desc: {
      en: "Ehsan Saberi is a software engineer focused on Python backend development, API architecture, PostgreSQL, and practical AI integration.",
      fa: "احسان صابری، مهندس نرم‌افزار با تمرکز بر توسعه‌ی بک‌اند با پایتون، طراحی API، PostgreSQL و یکپارچه‌سازی کاربردی هوش مصنوعی است.",
    },

    skip: { en: "Skip to content", fa: "رفتن به محتوای اصلی" },
    menu: { en: "Menu", fa: "منو" },
    langSwitch: {
      en: "Switch to Persian",
      fa: "تغییر زبان به انگلیسی",
    },
    n_about: { en: "About", fa: "درباره من" },
    n_exp: { en: "Experience", fa: "تجربه کاری" },
    n_proj: { en: "Projects", fa: "پروژه‌ها" },
    n_skills: { en: "Skills", fa: "مهارت‌ها" },
    n_contact: { en: "Contact", fa: "ارتباط با من" },
    name: { en: "Ehsan Saberi", fa: "احسان صابری" },

    title2: {
      en: "Software Engineer | Backend & AI-Integrated Systems",
      fa: "مهندس نرم‌افزار | بک‌اند و سیستم‌های یکپارچه با هوش مصنوعی",
    },

    intro: {
      en: "I build Python backend systems, from well-designed APIs and data layers to integrations that connect products and services. I bring AI into the workflow where it adds real value, with a focus on making the result useful and maintainable.",
      fa: "سیستم‌های بک‌اند را با پایتون توسعه می‌دهم؛ از طراحی API و لایه‌ی داده تا یکپارچه‌سازی سرویس‌ها. هر جا هوش مصنوعی ارزش واقعی ایجاد کند، آن را به شکلی کاربردی و قابل نگهداری وارد جریان کار می‌کنم.",
    },

    cta_proj: { en: "View projects", fa: "مشاهده پروژه‌ها" },
    cta_contact: { en: "Get in touch", fa: "ارتباط با من" },

    about_p1: {
      en: "I'm a software engineer focused on backend development with Python, FastAPI, and PostgreSQL. I value clear API contracts, practical architecture, data integrity, and code that remains testable and easy to evolve.",
      fa: "مهندس نرم‌افزار هستم و روی توسعه‌ی بک‌اند با Python، FastAPI و PostgreSQL تمرکز دارم. برای قراردادهای شفاف API، معماری کاربردی، صحت داده و کدی که آزمون‌پذیر و قابل توسعه بماند اهمیت قائلم.",
    },

    about_p2: {
      en: "I'm especially interested in the intersection of backend engineering and AI: processing pipelines that extract, analyse, and summarise information, and integrations that turn model outputs into useful product features.",
      fa: "به نقطه‌ی تلاقی مهندسی بک‌اند و هوش مصنوعی علاقه‌مندم؛ به‌ویژه جریان‌های پردازشی که اطلاعات را استخراج، تحلیل و خلاصه می‌کنند و یکپارچه‌سازی‌هایی که خروجی مدل‌ها را به قابلیت‌های کاربردی محصول تبدیل می‌کنند.",
    },

    filter: { en: "Filter projects", fa: "فیلتر پروژه‌ها" },
    details: { en: "Details", fa: "جزئیات" },
    close: { en: "Close", fa: "بستن" },
    highlights: {
      en: "What I worked on",
      fa: "بخش‌هایی که روی آن‌ها کار کردم",
    },
    code: { en: "Code", fa: "کد پروژه" },
    demo: { en: "Live demo", fa: "نسخه آنلاین" },

    contact_p: {
      en: "Have a project in mind, want to collaborate, or simply have a question? Email is the best way to reach me.",
      fa: "پروژه‌ای در ذهن دارید، به همکاری فکر می‌کنید یا سؤالی دارید؟ ایمیل بهترین راه ارتباط با من است.",
    },

    copy: { en: "Copy email", fa: "کپی ایمیل" },
    copied: { en: "Email copied", fa: "ایمیل کپی شد" },
    copyFail: {
      en: "Copy failed — select the address manually",
      fa: "کپی نشد؛ آدرس را به‌صورت دستی انتخاب کنید",
    },
    send: { en: "Send email", fa: "ارسال ایمیل" },
    cvBtn: { en: "Download résumé", fa: "دانلود رزومه" },
    f_name: { en: "Your name", fa: "نام شما" },
    f_msg: { en: "Message", fa: "پیام" },
    f_btn: { en: "Open in email app", fa: "باز کردن در برنامه ایمیل" },
    mailSubject: { en: "Portfolio inquiry", fa: "پیام از طریق وب‌سایت" },
    back: { en: "Back to top", fa: "بازگشت به بالا" },
  },
};
