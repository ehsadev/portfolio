(function () {
  var D = document,
    R = D.documentElement,
    $ = function (s) {
      return D.querySelector(s);
    },
    RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var store = {
    get: function (k) {
      try {
        return localStorage.getItem(k);
      } catch (e) {
        return null;
      }
    },
    set: function (k, v) {
      try {
        localStorage.setItem(k, v);
      } catch (e) {}
    },
  };
  var lang = store.get("lang") === "fa" ? "fa" : "en";
  var T = {
    en: {
      k: "ERROR 404 · PAGE_NOT_FOUND",
      h: "This page got lost in the latent space.",
      p: "The address you followed doesn't exist anymore, or never did. Here's the nearest thing that does.",
      dym: "Did you mean",
      home: "Back to home",
      back: "Go back",
      foot: "HTTP 404 · Ehsan Saberi",
      tm: "Logos are trademarks of their respective owners and are shown for illustration only.",
      sw: "Switch to Persian",
      th: "Dark mode",
      name: "Ehsan Saberi",
    },
    fa: {
      k: "خطای ۴۰۴ · صفحه پیدا نشد",
      h: "این صفحه در فضای نهفته گم شد.",
      p: "آدرسی که باز کردید دیگر وجود ندارد یا هیچ‌وقت وجود نداشته است. نزدیک‌ترین گزینه‌های موجود این‌هاست.",
      dym: "منظورتان این بود؟",
      home: "بازگشت به صفحه اصلی",
      back: "بازگشت به صفحه قبل",
      foot: "خطای ۴۰۴ · احسان صابری",
      tm: "لوگوها متعلق به صاحبان آن‌هاست و فقط برای تزئین نمایش داده می‌شوند.",
      sw: "تغییر زبان به انگلیسی",
      th: "حالت تیره",
      name: "احسان صابری",
    },
  };
  var PH = {
    en: [
      "404 — this page isn't here.",
      "I searched my whole context window. Page not found.",
      "Retrieval returned 0 results for this URL.",
      "Error 404: route not found in training data.",
      "Page not found. Want me to try rephrasing the URL?",
      "I checked twice. Same answer: not found.",
      "No such page — and I'm not hallucinating this time.",
      "Beam search finished: 0 candidates for this page.",
      "Even with a million tokens of context, I can't find it.",
      "Confidence that this page exists: 0.00.",
      "This page got lost in the latent space.",
      "I'd love to help, but this URL leads nowhere.",
      "Tool call failed: page_not_found.",
      "Temperature 0, same result: 404.",
      "Reasoning complete. Conclusion: it's missing.",
      "Checked the index, the cache and my memory. Nothing.",
    ],
    fa: [
      "۴۰۴ — این صفحه اینجا نیست.",
      "کل پنجره‌ی زمینه‌ام را گشتم. صفحه پیدا نشد.",
      "بازیابی برای این آدرس صفر نتیجه برگرداند.",
      "خطای ۴۰۴: این مسیر در داده‌های آموزشی وجود ندارد.",
      "صفحه پیدا نشد. بگذارید آدرس را بازنویسی کنم؟",
      "دو بار چک کردم. همان جواب: پیدا نشد.",
      "چنین صفحه‌ای نیست — و این بار توهم نمی‌زنم.",
      "جستجوی پرتویی تمام شد: صفر کاندیدا برای این صفحه.",
      "حتی با یک میلیون توکن زمینه هم پیدایش نکردم.",
      "اطمینان از وجود این صفحه: ۰٫۰۰.",
      "این صفحه در فضای نهفته گم شد.",
      "دوست داشتم کمک کنم، اما این آدرس به جایی نمی‌رسد.",
      "فراخوانی ابزار شکست خورد: page_not_found.",
      "دما صفر، نتیجه همان: ۴۰۴.",
      "استدلال کامل شد. نتیجه: این صفحه گم شده.",
      "ایندکس، کش و حافظه‌ام را گشتم. هیچ.",
    ],
  };
  var AI = [
    ["openai", "OpenAI"],
    ["claude", "Claude"],
    ["qwen", "Qwen"],
    ["grok", "Grok"],
    ["deepseek", "DeepSeek"],
    ["hermesagent", "Hermes Agent"],
    ["gemini", "Gemini"],
    ["meta", "Meta AI"],
    ["mistral", "Mistral"],
    ["perplexity", "Perplexity"],
    ["huggingface", "Hugging Face"],
    ["ollama", "Ollama"],
    ["kimi", "Kimi"],
    ["cohere", "Cohere"],
    ["minimax", "MiniMax"],
    ["nvidia", "NVIDIA"],
    ["groq", "Groq"],
    ["copilot", "Copilot"],
    ["zhipu", "Zhipu GLM"],
    ["openrouter", "OpenRouter"],
  ];
  var S = [
    ["", { en: "Home", fa: "صفحه اصلی" }],
    ["about", { en: "About", fa: "درباره من" }],
    ["experience", { en: "Experience", fa: "تجربه کاری" }],
    ["projects", { en: "Projects", fa: "پروژه‌ها" }],
    ["skills", { en: "Skills", fa: "مهارت‌ها" }],
    ["articles", { en: "Articles", fa: "مقالات" }],
    ["contact", { en: "Contact", fa: "ارتباط با من" }],
  ];
  var ALIAS = {
    blog: "articles",
    posts: "articles",
    article: "articles",
    work: "projects",
    portfolio: "projects",
    project: "projects",
    resume: "contact",
    cv: "contact",
    hire: "contact",
    stack: "skills",
    tech: "skills",
    bio: "about",
    me: "about",
    index: "",
    home: "",
  };
  var path = "/",
    slug = "";
  try {
    path = decodeURIComponent(location.pathname);
  } catch (e) {
    path = location.pathname;
  }
  slug = path
    .replace(/\/+$/, "")
    .split("/")
    .pop()
    .replace(/\.[a-z0-9]+$/i, "")
    .toLowerCase();
  function el(t, c, x) {
    var e = D.createElement(t);
    if (c) e.className = c;
    if (x != null) e.textContent = x;
    return e;
  }
  function lev(a, b) {
    var m = [],
      i,
      j;
    for (i = 0; i <= a.length; i++) m[i] = [i];
    for (j = 1; j <= b.length; j++) m[0][j] = j;
    for (i = 1; i <= a.length; i++)
      for (j = 1; j <= b.length; j++)
        m[i][j] = Math.min(
          m[i - 1][j] + 1,
          m[i][j - 1] + 1,
          m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
        );
    return m[a.length][b.length];
  }
  function score(id) {
    if (ALIAS.hasOwnProperty(slug)) return ALIAS[slug] === id ? 0.97 : 0;
    if (!slug) return id === "" ? 0.5 : 0;
    if (!id) return 0.15;
    if (id.indexOf(slug) === 0 || slug.indexOf(id) === 0)
      return Math.max(
        0.7,
        1 - lev(slug, id) / Math.max(slug.length, id.length),
      );
    return 1 - lev(slug, id) / Math.max(slug.length, id.length);
  }
  var ranked = S.map(function (s) {
    return {
      id: s[0],
      n: s[1],
      s: Math.max(0, Math.min(0.99, score(s[0]))),
    };
  }).sort(function (a, b) {
    return b.s - a.s;
  });
  var pick = function (id) {
    return ranked.filter(function (r) {
      return r.id === id;
    })[0];
  };
  var top = ranked.slice(0, 3);
  if (top[0].s < 0.2) top = [pick(""), pick("projects"), pick("contact")];
  var nf = function (n) {
    return new Intl.NumberFormat(lang === "fa" ? "fa-IR" : "en", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);
  };
  function suggestions() {
    var u = $("#sugg");
    u.textContent = "";
    top.forEach(function (r) {
      var li = el("li"),
        a = el("a");
      a.href = r.id ? "./#" + r.id : "./";
      a.appendChild(el("span", null, r.n[lang]));
      a.appendChild(el("b", null, nf(r.s)));
      li.appendChild(a);
      u.appendChild(li);
    });
  }
  function terminal() {
    var p = $("#term"),
      best = top[0],
      i = 0;
    p.textContent = "";
    function line(parts) {
      var s = el("span", "l");
      s.style.setProperty("--i", i++);
      parts.forEach(function (x) {
        s.appendChild(typeof x === "string" ? D.createTextNode(x) : x);
      });
      p.appendChild(s);
    }
    var tag = function (c, t) {
        return el("b", c, t);
      },
      cut = function (s, n) {
        return s.length > n ? s.slice(0, n - 1) + "…" : s;
      };
    line([tag("p", "$ "), "curl -I ", cut(path, 46)]);
    line([tag("er", "HTTP/1.1 404 Not Found")]);
    line([tag("p", "$ "), 'ehsan find "', slug ? cut(slug, 30) : "/", '"']);
    line([tag("er", "✗ "), "no route matches"]);
    line([
      tag("ok", "✓ "),
      "nearest: ",
      best.id ? "/#" + best.id : "/",
      " ",
      el("em", null, "(similarity " + best.s.toFixed(2) + ")"),
    ]);
    var c = el("span", "l");
    c.style.setProperty("--i", i);
    c.appendChild(tag("p", "$ "));
    c.appendChild(el("i", "cur"));
    p.appendChild(c);
  }
  function net() {
    var svg = $("#net"),
      W = 400,
      H = 300,
      ls = [3, 5, 5, 3],
      MI = 2,
      MJ = 2,
      h = "",
      k = 0,
      i;
    var pts = ls.map(function (n, i) {
      var a = [],
        j;
      for (j = 0; j < n; j++)
        a.push([
          40 + (i * (W - 80)) / (ls.length - 1),
          (H * (j + 1)) / (n + 1),
        ]);
      return a;
    });
    for (i = 0; i < ls.length - 1; i++)
      pts[i].forEach(function (p, j) {
        pts[i + 1].forEach(function (q, m) {
          var c =
              'x1="' +
              p[0] +
              '" y1="' +
              p[1] +
              '" x2="' +
              q[0] +
              '" y2="' +
              q[1] +
              '"',
            d = (i === MI && j === MJ) || (i + 1 === MI && m === MJ);
          h += "<line " + (d ? 'class="dead" ' : "") + c + "/>";
          if (!d && k++ % 5 === 0)
            h +=
              '<line class="sig" style="animation-delay:-' +
              (k % 6) * 0.55 +
              's" ' +
              c +
              "/>";
        });
      });
    pts.forEach(function (l, li) {
      l.forEach(function (p, j) {
        if (li === MI && j === MJ)
          h +=
            '<circle class="miss" cx="' +
            p[0] +
            '" cy="' +
            p[1] +
            '" r="11"/><text x="' +
            p[0] +
            '" y="' +
            (p[1] + 6) +
            '">?</text>';
        else h += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="6"/>';
      });
    });
    svg.innerHTML = h;
  }

  /* ---------- jellyfish + chat bubbles ---------- */
  var sea = $("#sea"),
    bub = $("#bub"),
    jfs = [],
    timers = [],
    last = -1,
    deck = [],
    di = 0,
    follow = 0,
    cur = -1,
    loopId = 0,
    t0 = performance.now();
  var rng = function (i) {
    var x = Math.sin(i * 12.9898 + 7.233) * 43758.5453;
    return x - Math.floor(x);
  };
  function swim() {
    cancelAnimationFrame(loopId);
    var box = $("#jfs"),
      w = innerWidth,
      N = w < 600 ? 9 : w < 1000 ? 13 : 18,
      base = w < 600 ? 44 : 58,
      i;
    box.textContent = "";
    jfs = [];
    var pw = $("#pts");
    pw.textContent = "";
    for (i = 0; i < (w < 600 ? 8 : 14); i++) {
      var bb = el("i", "pt");
      bb.style.cssText =
        "left:" +
        (rng(i + 70) * 100).toFixed(1) +
        "%;--s:" +
        (4 + rng(i + 3) * 8).toFixed(0) +
        "px;--d:" +
        (9 + rng(i + 8) * 8).toFixed(1) +
        "s;--dl:-" +
        (rng(i + 5) * 14).toFixed(1) +
        "s";
      pw.appendChild(bb);
    }
    for (i = 0; i < N; i++) {
      var slot = (i * 7) % N,
        sz = Math.round(base * [1, 0.82, 1.2, 0.92][i % 4]),
        tint = [
          "var(--a)",
          "var(--b)",
          "color-mix(in srgb,var(--a) 50%,var(--b))",
        ][i % 3],
        o = el("div", "orb");
      o.style.cssText = "--sz:" + sz + "px;--tint:" + tint;
      o.innerHTML =
        '<div class="disc" style="animation-delay:-' +
        (rng(i + 2) * 6).toFixed(1) +
        's"><svg class="lg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ai-' +
        AI[i][0] +
        '"/></svg></div>';
      (function (idx) {
        o.addEventListener("click", function () {
          speak(idx);
        });
      })(i);
      box.appendChild(o);
      jfs.push({
        el: o,
        name: AI[i][1],
        cx: 0.06 + (0.88 * (slot + 0.5)) / N,
        ax: 0.045 + rng(i + 11) * 0.05,
        cy: 0.22 + rng(i + 40) * 0.4,
        ay: 5 + rng(i + 17) * 6,
        w: 6.2832 / (80 + rng(i + 9) * 50),
        ph: rng(i + 3) * 6.2832,
        wy: 6.2832 / (9 + rng(i + 23) * 7),
        py: rng(i + 31) * 6.2832,
        f: 0,
        z: 0,
        talk: false,
        bl: -1,
      });
    }
    t0 = performance.now() - (RM ? 0 : rng(5) * 20000);
    frame(performance.now());
  }
  /* each logo orbits slowly on its own ellipse in 3D: far side = small, faint, blurred; near side = large, clear */
  function frame(now) {
    var t = (now - t0) / 1000,
      W = sea.clientWidth,
      H = sea.clientHeight;
    jfs.forEach(function (J) {
      var th = J.w * t + J.ph,
        z = Math.sin(th);
      J.z = z;
      J.f += ((J.talk ? 1 : 0) - J.f) * 0.07;
      var zz = z + (1.2 - z) * J.f,
        s = 1 + 0.36 * zz,
        op = Math.min(1, 0.26 + (0.74 * (zz + 1)) / 2),
        bl = Math.round(Math.max(0, (1 - zz) / 2) * 6) / 2;
      var x = J.cx * W + J.ax * W * Math.cos(th),
        y = J.cy * H + Math.sin(t * J.wy + J.py) * J.ay;
      J.el.style.transform =
        "translate3d(" +
        x.toFixed(1) +
        "px," +
        y.toFixed(1) +
        "px,0) translate(-50%,-50%) scale(" +
        s.toFixed(3) +
        ")";
      J.el.style.opacity = op.toFixed(2);
      J.el.style.zIndex = Math.round((zz + 1) * 10);
      if (bl !== J.bl) {
        J.bl = bl;
        J.el.style.filter = bl ? "blur(" + bl + "px)" : "none";
      }
    });
    if (!RM) loopId = requestAnimationFrame(frame);
  }
  function later(fn, ms) {
    timers.push(setTimeout(fn, ms));
  }
  function stop() {
    timers.forEach(clearTimeout);
    timers = [];
    cancelAnimationFrame(follow);
    bub.classList.remove("show");
    jfs.forEach(function (j) {
      j.talk = false;
      j.el.classList.remove("talk");
    });
  }
  function phrase() {
    if (di >= deck.length) {
      deck = PH[lang].slice().sort(function () {
        return Math.random() - 0.5;
      });
      di = 0;
    }
    return deck[di++];
  }
  function place(J, bw, bh) {
    var sr = sea.getBoundingClientRect(),
      br = J.el.getBoundingClientRect(),
      jr = br;
    var cx = br.left + br.width / 2 - sr.left,
      top = br.top - sr.top - bh - 14,
      pos = "above";
    if (top < 6) {
      top = jr.bottom - sr.top + 10;
      pos = "below";
      if (top + bh > sr.height - 6) top = Math.max(6, sr.height - bh - 6);
    }
    var left = Math.min(Math.max(cx - bw / 2, 8), sr.width - bw - 8);
    bub.style.left = left + "px";
    bub.style.top = top + "px";
    bub.style.setProperty(
      "--tx",
      Math.min(Math.max(cx - left, 18), bw - 18) + "px",
    );
    bub.dataset.pos = pos;
  }
  function speak(idx) {
    stop();
    var J = jfs[idx];
    if (!J) return;
    cur = idx;
    last = idx;
    J.talk = true;
    J.el.classList.add("talk");
    var text = phrase(),
      txt = $("#txt");
    $("#who").textContent = J.name;
    txt.textContent = text;
    bub.style.width = "";
    bub.style.height = "";
    var bw = bub.offsetWidth,
      bh = bub.offsetHeight;
    bub.style.width = bw + "px";
    bub.style.height = bh + "px";
    bub.classList.add("typing");
    txt.textContent = "";
    (function loop() {
      if (cur !== idx) return;
      place(J, bw, bh);
      follow = requestAnimationFrame(loop);
    })();
    bub.classList.add("show");
    later(
      function () {
        bub.classList.remove("typing");
        var n = 0;
        (function type() {
          if (RM || n >= text.length) {
            txt.textContent = text;
            later(done, 3400);
            return;
          }
          n++;
          txt.textContent = text.slice(0, n);
          later(type, lang === "fa" ? 30 : 24);
        })();
      },
      RM ? 200 : 750,
    );
    function done() {
      bub.classList.remove("show");
      J.talk = false;
      J.el.classList.remove("talk");
      cancelAnimationFrame(follow);
      later(next, 800);
    }
  }
  function next() {
    var n = jfs.length;
    if (!n) return;
    var c = [];
    jfs.forEach(function (J, i) {
      if (i !== last && J.z > -0.15) c.push(i);
    });
    if (!c.length)
      jfs.forEach(function (J, i) {
        if (i !== last) c.push(i);
      });
    speak(c[Math.floor(Math.random() * c.length)]);
  }
  D.addEventListener("visibilitychange", function () {
    if (D.hidden) stop();
    else later(next, 400);
  });
  var rt;
  addEventListener("resize", function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      stop();
      swim();
      later(next, 500);
    }, 250);
  });

  function apply() {
    R.lang = lang;
    R.dir = lang === "fa" ? "rtl" : "ltr";
    store.set("lang", lang);
    var t = T[lang];
    D.title =
      lang === "fa"
        ? "۴۰۴ — صفحه پیدا نشد | احسان صابری"
        : "404 — Page not found | Ehsan Saberi";
    $("#k").textContent = t.k;
    $("#h").textContent = t.h;
    $("#p").textContent = t.p;
    $("#dym").textContent = t.dym;
    $("#foot").textContent = t.foot;
    $("#tm").textContent = t.tm;
    $("#bn").textContent = t.name;
    $("#b-home").firstElementChild.textContent = t.home;
    $("#b-back").textContent = t.back;
    var lb = $("#lang-l");
    lb.textContent = lang === "fa" ? "EN" : "فا";
    lb.lang = lang === "fa" ? "en" : "fa";
    $("#lang").setAttribute("aria-label", t.sw);
    $("#theme").setAttribute("aria-label", t.th);
    suggestions();
    terminal();
    deck = [];
    di = 0;
  }
  var themeNow = function () {
    return (
      R.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
  };
  function sync() {
    var d = themeNow() === "dark";
    $("#theme").setAttribute("aria-pressed", String(d));
    var m = D.querySelector("meta[name=theme-color]");
    if (m) m.setAttribute("content", d ? "#070b14" : "#f5f7fa");
  }
  $("#lang").addEventListener("click", function () {
    lang = lang === "fa" ? "en" : "fa";
    apply();
    stop();
    later(next, 300);
  });
  $("#theme").addEventListener("click", function () {
    var n = themeNow() === "dark" ? "light" : "dark";
    R.dataset.theme = n;
    store.set("theme", n);
    sync();
  });
  var bb = $("#b-back");
  if (history.length > 1 && D.referrer) {
    bb.hidden = false;
    bb.addEventListener("click", function () {
      history.back();
    });
  }
  net();
  sync();
  apply();
  swim();
  later(next, 1000);
})();
