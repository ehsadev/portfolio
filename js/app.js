/* Portfolio app (deferred). Content lives in js/data.js. */
(function () {
  "use strict";
  var S = window.SITE, U = S.ui, doc = document, root = doc.documentElement;
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  var store = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lang = store.get("lang") === "fa" ? "fa" : "en", filter = "all", openId = null, openA = null, io = null, so = null, rt = null, ri = 0, aMin = 0, qt = null;
  var A = { tag: "all", q: "", page: 1 }, PER = S.articlesPerPage || 4;
  var ART = (S.articles || []).slice().sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); });

  var L = function (o) { return o == null ? "" : typeof o === "string" ? o : (o[lang] || o.en || ""); };
  var T = function (k) { return L(U[k]); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var url = function (u) { return /^\s*javascript:/i.test(u || "") ? "#" : esc(u); };
  var has = function (a) { return a && a.length; };
  var nf = function (n) { return new Intl.NumberFormat(lang === "fa" ? "fa-IR" : "en", { useGrouping: false }).format(n); };
  var find = function (id) { return S.projects.filter(function (p) { return p.id === id; })[0]; };
  var dl = function (i) { return ' style="--d:' + Math.min(i, 6) * 0.07 + 's"'; };

  var ICON = "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/";
  var si = function (d, c) { return '<svg class="si ' + (c || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + d + "</svg>"; };
  var I = {
    copy: si('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/>'),
    arrow: si('<path d="M5 12h14M13 6l6 6-6 6"/>', "nx"), prev: si('<path d="M5 12h14M13 6l6 6-6 6"/>', "pv"),
    dl: si('<path d="M12 4v12M6 11l6 6 6-6M5 20h14"/>'), send: si('<path d="M4 12l16-8-6 16-3-7z"/>'),
    search: si('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'), mail: si('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>')
  };
  function ic(s) { return s ? '<img class="ic" src="' + ICON + esc(s) + '.svg" alt="" width="16" height="16" loading="lazy" decoding="async" onerror="this.outerHTML=\'<i class=dot></i>\'">' : '<i class="dot"></i>'; }
  function tags(a, icons) { return has(a) ? '<ul class="tags">' + a.map(function (t) { var o = t && t.name !== undefined; return "<li>" + (icons && o && t.icon ? ic(t.icon) : "") + esc(L(o ? t.name : t)) + "</li>"; }).join("") + "</ul>" : ""; }
  function img(p, lazy) { return '<div class="shot"><img src="' + url(p.image) + '" alt="' + esc(L(p.alt) || L(p.title)) + '" width="800" height="500"' + (lazy ? ' loading="lazy" decoding="async"' : "") + ' onerror="this.remove()"></div>'; }
  function handle(u) { return String(u || "").replace(/\/+$/, "").split("/").pop(); }
  function fmtDate(d) { try { return new Intl.DateTimeFormat(lang === "fa" ? "fa-IR-u-ca-persian" : "en-GB", { year: "numeric", month: "short", day: "numeric" }).format(d); } catch (e) { return d.toISOString().slice(0, 10); } }
  function catLabel(p) { var id = (p.categories || [])[0], c = S.categories.filter(function (x) { return x.id === id; })[0]; return c ? L(c.label) : ""; }

  /* ---------- hero decoration ---------- */
  function neural() {
    var svg = $("#net"); if (!svg || svg.firstChild) return;
    var W = 400, H = 400, ls = [3, 5, 5, 3], h = "", k = 0;
    var pts = ls.map(function (n, i) { var a = []; for (var j = 0; j < n; j++) a.push([30 + i * (W - 60) / (ls.length - 1), H * (j + 1) / (n + 1)]); return a; });
    for (var i = 0; i < ls.length - 1; i++) pts[i].forEach(function (p) { pts[i + 1].forEach(function (q) {
      var c = 'x1="' + p[0] + '" y1="' + p[1] + '" x2="' + q[0] + '" y2="' + q[1] + '"';
      h += "<line " + c + "/>"; if (k++ % 6 === 0) h += '<line class="sig" style="animation-delay:-' + (k % 5) * 0.6 + 's" ' + c + "/>"; }); });
    pts.forEach(function (l) { l.forEach(function (p) { h += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="5"/>'; }); });
    svg.setAttribute("viewBox", "0 0 " + W + " " + H); svg.innerHTML = h;
  }
  var ct = null;
  function chips(el) {
    clearInterval(ct); var list = (S.heroChips || []).slice(), n = Math.min(4, list.length); if (!n) { el.innerHTML = ""; return; }
    el.innerHTML = list.slice(0, n).map(function (t, i) { return '<span class="fchip c' + (i + 1) + '"><b class="fc mono in" style="animation-delay:' + (0.35 + i * 0.2) + 's">' + esc(t) + "</b></span>"; }).join("");
    if (reduce || list.length <= n) return;
    var cs = $$(".fc", el), nxt = n, slot = 0;
    ct = setInterval(function () {
      var c = cs[slot]; slot = (slot + 1) % n; c.classList.remove("in"); c.classList.add("out");
      setTimeout(function () { c.textContent = list[nxt++ % list.length]; c.classList.remove("out"); c.style.animationDelay = "0s"; void c.offsetWidth; c.classList.add("in"); }, 470);
    }, 2300);
  }
  function hero() {
    $$("[data-i18n]").forEach(function (el) { el.textContent = T(el.getAttribute("data-i18n")); });
    var cv = $("#cv-btn"); if (cv) { if (S.cv) { cv.href = S.cv; cv.hidden = false; } else cv.hidden = true; }
    var so2 = $("#soc"), ch2 = $("#chips"); if (!so2 || !ch2) return;
    so2.innerHTML = (S.links || []).map(function (l) { return '<a href="' + url(l.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(l.label) + '" title="' + esc(l.label) + '">' + ic(l.icon) + "</a>"; }).join("");
    chips(ch2);
    var ph = $("#photo"); if (ph) { if (S.photo && ph.getAttribute("src") !== S.photo) ph.src = S.photo; ph.alt = T("name"); }
    var r = S.roles || [], ro = $("#role"); if (ro) ro.textContent = L(r[0]);
  }

  /* ---------- sections ---------- */
  function render() {
    var secs = [], h = "", n = 0, c = S.email;
    function sec(id, k, body) { n++; secs.push([id, T(k)]); h += '<section class="sec" id="' + id + '"><div class="sh rv"><span class="idx mono">' + (n < 10 ? nf(0) : "") + nf(n) + "</span><h2>" + esc(T(k)) + '</h2><span class="rule"></span></div>' + body + "</section>"; }
    var term = '<div class="term card rv" dir="ltr"><div class="tbar mono"><i></i><i></i><i></i><span>pipeline.py</span></div><pre class="mono"><code>' +
      '<span class="l" style="--i:0"><b class="p">$</b> python pipeline.py</span>' +
      '<span class="l" style="--i:1"><b class="ok">✓</b> transcribe  <em>speech → text</em></span>' +
      '<span class="l" style="--i:2"><b class="ok">✓</b> summarise   <em>LLM · structured output</em></span>' +
      '<span class="l" style="--i:3"><b class="ok">✓</b> extract     <em>keywords &amp; entities</em></span>' +
      '<span class="l" style="--i:4"><b class="ok">✓</b> serve       <em>FastAPI · PostgreSQL</em></span>' +
      '<span class="l" style="--i:5"><b class="p">$</b> <i class="cur"></i></span></code></pre></div>';
    sec("about", "n_about", '<div class="about"><div class="rv"><p class="big">' + esc(T("about_p1")) + '</p><p class="big">' + esc(T("about_p2")) + "</p></div>" + term + "</div>" +
      '<ol class="pipe" style="--n:' + Math.min(S.flow.length, 6) + '">' + S.flow.map(function (f, i) { return '<li class="rv" style="--d:' + Math.min(i, 6) * 0.07 + "s;--i:" + i + '"><span class="n mono">0' + (i + 1) + "</span><b><bdi>" + esc(f.k) + "</bdi></b><span>" + esc(L(f.d)) + "</span></li>"; }).join("") + "</ol>");
    if (has(S.experience)) sec("experience", "n_exp", '<div class="tl">' + S.experience.map(function (e, i) {
      return '<article class="job card rv"' + dl(i) + '><h3>' + esc(L(e.role)) + '</h3><p class="org mono">' + esc(L(e.org)) + (e.period ? " · " + esc(L(e.period)) : "") + '</p><ul class="pts">' + e.points.map(function (p) { return "<li>" + esc(L(p)) + "</li>"; }).join("") + "</ul></article>"; }).join("") + "</div>");
    if (has(S.projects)) sec("projects", "n_proj", '<div class="filters rv" role="group" aria-label="' + esc(T("filter")) + '">' + S.categories.map(function (k) {
      var cnt = S.projects.filter(function (p) { return k.id === "all" || (p.categories || []).indexOf(k.id) > -1; }).length;
      return '<button type="button" class="chip" data-f="' + esc(k.id) + '" aria-pressed="' + (filter === k.id) + '">' + esc(L(k.label)) + " <span>" + nf(cnt) + "</span></button>"; }).join("") +
      '</div><div class="pgrid">' + S.projects.map(function (p, i) {
        var show = filter === "all" || (p.categories || []).indexOf(filter) > -1, tg = p.tags || [], extra = tg.length - 4;
        return '<article class="card proj rv"' + dl(i) + ' data-cats="' + esc((p.categories || []).join(" ")) + '"' + (show ? "" : " hidden") + ">" + img(p, 1) + '<div class="pb"><span class="cat mono">' + esc(catLabel(p)) + '</span><h3><button type="button" class="open" data-id="' + esc(p.id) + '" aria-haspopup="dialog">' + esc(L(p.title)) + "</button></h3><p>" + esc(L(p.summary)) + "</p>" +
          tags(tg.slice(0, 4)).replace("</ul>", extra > 0 ? "<li>+" + nf(extra) + "</li></ul>" : "</ul>") + '<span class="more" aria-hidden="true">' + esc(T("details")) + " " + I.arrow + "</span></div></article>"; }).join("") + "</div>");
    if (has(S.skills)) sec("skills", "n_skills", '<div class="sgrid">' + S.skills.map(function (g, i) {
      var feat = /^AI/i.test(L(g.title)) || (g.title && g.title.en && /^AI/i.test(g.title.en));
      return '<div class="sk card rv' + (feat ? " feat" : "") + '"' + dl(i) + '><h3>' + esc(L(g.title)) + ' <span class="mono">' + nf(g.items.length) + "</span></h3>" + tags(g.items, 1) + "</div>"; }).join("") + "</div>");
    if (has(ART)) {
      var cnt = {}; ART.forEach(function (a) { (a.tags || []).forEach(function (t) { cnt[t] = (cnt[t] || 0) + 1; }); });
      var ids = Object.keys(cnt).sort(function (x, y) { return cnt[y] - cnt[x] || x.localeCompare(y); });
      sec("articles", "n_art", '<div class="atools rv"><label class="search">' + I.search + '<span class="sr">' + esc(T("a_search")) + '</span><input type="search" id="a-q" autocomplete="off" placeholder="' + esc(T("a_search")) + '" value="' + esc(A.q) + '"></label><div class="chips" role="group" id="a-tags" aria-label="' + esc(T("a_tags")) + '">' +
        '<button type="button" class="chip" data-tag="all" aria-pressed="true">' + esc(T("a_all")) + " <span>" + nf(ART.length) + "</span></button>" + ids.map(function (t) { return '<button type="button" class="chip" data-tag="' + esc(t) + '" aria-pressed="false">' + esc(L(atag(t))) + " <span>" + nf(cnt[t]) + "</span></button>"; }).join("") +
        '</div></div><div class="agrid" id="a-list"></div><nav class="pager" id="a-pager" aria-label="' + esc(T("n_art")) + '"></nav><p class="astat mono" id="a-status" role="status" aria-live="polite"></p>');
    }
    if (has(S.testimonials)) sec("testimonials", "n_test", '<div class="quotes">' + S.testimonials.map(function (t, i) { return '<blockquote class="q card rv"' + dl(i) + "><p>" + esc(L(t.text)) + '</p><cite><i class="av" aria-hidden="true">' + esc(String(L(t.author)).charAt(0)) + "</i><span>" + esc(L(t.author)) + "</span></cite></blockquote>"; }).join("") + "</div>");
    if (has(S.education)) sec("education", "n_edu", '<div class="edus">' + S.education.map(function (e, i) { return '<div class="edu card rv"' + dl(i) + "><h3>" + esc(L(e.title)) + "</h3><span>" + esc(L(e.place)) + "</span></div>"; }).join("") + "</div>");

    var ch = (S.links || []).map(function (l) { return '<a class="ch" href="' + url(l.url) + '" target="_blank" rel="noopener noreferrer"><span class="chi">' + ic(l.icon) + '</span><span class="cht"><b>' + esc(l.label) + '</b><small class="mono" dir="ltr">' + esc(handle(l.url)) + "</small></span>" + I.arrow + "</a>"; }).join("") +
      (S.cv ? '<a class="ch" href="' + url(S.cv) + '" download><span class="chi">' + I.dl + '</span><span class="cht"><b>' + esc(T("cvBtn")) + '</b><small class="mono">' + esc(T("cvLabel")) + "</small></span>" + I.arrow + "</a>" : "");
    sec("contact", "n_contact", '<div class="cbox rv"><div class="cleft"><h3>' + esc(T("c_title")) + "</h3><p>" + esc(T("contact_p")) + "</p>" +
      (c ? '<p class="lbl mono">' + esc(T("emailLabel")) + '</p><div class="mailrow"><a class="mailbig mono" dir="ltr" href="mailto:' + url(c) + '">' + esc(c) + '</a><button type="button" class="ibtn" data-copy aria-label="' + esc(T("copy")) + '" title="' + esc(T("copy")) + '">' + I.copy + "</button></div>" : "") +
      '<p class="lbl mono">' + esc(T("c_find")) + '</p><div class="chs">' + ch + "</div></div>" +
      (c ? '<form class="composer" id="msg-form" autocomplete="off" novalidate><div class="tbar mono"><i></i><i></i><i></i><span>new_message.txt</span></div><div class="fbody"><label>' + esc(T("f_name")) + '<input name="sender" type="text" autocomplete="name"></label><label>' + esc(T("f_msg")) + '<textarea name="message" rows="5" placeholder="' + esc(T("f_ph")) + '" aria-describedby="f-err"></textarea></label><p class="err" id="f-err" role="alert" hidden>' + esc(T("f_err")) + '</p><button class="btn main" type="submit">' + I.send + " " + esc(T("f_btn")) + '</button><p class="hint">' + esc(T("f_hint")) + "</p></div></form>" : "") + "</div>");

    $("#sections").innerHTML = h;
    $("#menu").innerHTML = secs.map(function (s) { return '<li><a href="#' + s[0] + '">' + esc(s[1]) + "</a></li>"; }).join("");
    $("#foot").innerHTML = '<div class="wrap fwrap"><span>© ' + nf(new Date().getFullYear()) + " " + esc(T("name")) + '</span><ul class="flinks">' + (S.links || []).map(function (l) { return '<li><a href="' + url(l.url) + '" target="_blank" rel="noopener noreferrer">' + ic(l.icon) + esc(l.label) + "</a></li>"; }).join("") + '</ul><a href="#top">' + esc(T("back")) + "</a></div>";
    var f = $("#msg-form"); if (f) f.addEventListener("submit", function (e) {
      e.preventDefault(); var n2 = f.elements.sender.value.trim(), m = f.elements.message.value.trim(), er = $("#f-err");
      if (!m) { er.hidden = false; f.elements.message.setAttribute("aria-invalid", "true"); f.elements.message.focus(); return; }
      er.hidden = true; f.elements.message.removeAttribute("aria-invalid");
      window.location.href = "mailto:" + S.email + "?subject=" + encodeURIComponent(T("mailSubject")) + "&body=" + encodeURIComponent(m + (n2 ? "\n\n— " + n2 : ""));
    });
    $$(".card").forEach(function (cd) { cd.addEventListener("pointermove", function (e) { var r = cd.getBoundingClientRect(); cd.style.setProperty("--mx", e.clientX - r.left + "px"); cd.style.setProperty("--my", e.clientY - r.top + "px"); }); });
    aMin = 0; updateArticles(); observeNav(); reveal(); startRoles();
    if (openId) { var p = find(openId); if (p) dialog(p); } else if (openA !== null && ART[openA]) adialog(ART[openA]);
  }

  /* ---------- articles: tags + search + pagination (sorted newest first) ---------- */
  function atag(id) { return (S.articleTags && S.articleTags[id]) || id; }
  function norm(s) { return String(s || "").toLowerCase().replace(/ي/g, "ی").replace(/ك/g, "ک"); }
  function filtered() {
    var q = norm(A.q.trim());
    return ART.filter(function (a) {
      if (A.tag !== "all" && (a.tags || []).indexOf(A.tag) < 0) return false;
      if (!q) return true;
      return norm([L(a.title), L(a.desc)].concat((a.tags || []).map(function (t) { return L(atag(t)); })).join(" ")).indexOf(q) > -1;
    });
  }
  function dateHtml(a) {
    var s = String(a.date || ""); if (/^\d{4}$/.test(s)) return '<time datetime="' + esc(s) + '">' + nf(+s) + "</time>";
    var d = new Date(s); return isNaN(d) ? esc(s) : '<time datetime="' + esc(s) + '">' + esc(fmtDate(d)) + "</time>";
  }
  function metaHtml(a) { var r = a.read, t = !r ? "" : typeof r === "number" ? T("minRead").replace("{n}", nf(r)) : L(r); return dateHtml(a) + (t ? " · " + esc(t) : ""); }
  function acard(a) {
    var meta = metaHtml(a);
    var tg = (a.tags || []).map(function (t) { return "<li>" + esc(L(atag(t))) + "</li>"; }).join("");
    return '<article class="art card fi"><div class="am mono">' + meta + '</div><h3><button type="button" class="aopen" data-aid="' + ART.indexOf(a) + '" aria-haspopup="dialog">' + esc(L(a.title)) + "</button></h3>" + (a.desc ? "<p>" + esc(L(a.desc)) + "</p>" : "") + (tg ? '<ul class="tags">' + tg + "</ul>" : "") + '<span class="more" aria-hidden="true">' + esc(T("readMore")) + " " + I.arrow + "</span></article>";
  }
  function md(p) {
    p = String(p);
    if (/^## /.test(p)) return "<h3>" + esc(p.slice(3)) + "</h3>";
    if (p.split("\n").every(function (x) { return /^- /.test(x); })) return '<ul class="pts">' + p.split("\n").map(function (x) { return "<li>" + esc(x.slice(2)) + "</li>"; }).join("") + "</ul>";
    return "<p>" + esc(p).replace(/\n/g, "<br>") + "</p>";
  }
  function adialog(a) {
    var meta = metaHtml(a);
    var bd = L(a.body), paras = Array.isArray(bd) ? bd : String(bd || L(a.desc)).split(/\n{2,}/);
    var refs = a.refs || (a.link ? [{ label: U.a_source, url: a.link }] : []);
    $("#dlg-body").innerHTML = (a.image ? img(a, 0) : "") + '<div class="dpad abody"><p class="am mono">' + meta + '</p><h2 id="dlg-title">' + esc(L(a.title)) + "</h2>" + tags((a.tags || []).map(atag)) + paras.map(md).join("") +
      (refs.length ? "<h3>" + esc(T("a_refs")) + '</h3><ul class="refs">' + refs.map(function (r) { return '<li><a href="' + url(r.url) + '" target="_blank" rel="noopener noreferrer">' + esc(L(r.label) || r.url) + " " + I.arrow + "</a></li>"; }).join("") + "</ul>" : "") + "</div>";
  }
  function pageList(n, c) { var a = [], i; for (i = 1; i <= n; i++) { if (i === 1 || i === n || Math.abs(i - c) <= 1) a.push(i); else if (a[a.length - 1] !== "…") a.push("…"); } return a; }
  function updateArticles() {
    var box = $("#a-list"); if (!box) return;
    var list = filtered(), total = list.length, pages = Math.max(1, Math.ceil(total / PER));
    if (A.page > pages) A.page = pages;
    $$("#a-tags .chip").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-tag") === A.tag)); });
    var st = (A.page - 1) * PER, part = list.slice(st, st + PER);
    aMin = Math.max(aMin, box.offsetHeight);
    box.innerHTML = part.length ? part.map(acard).join("") : '<div class="empty card"><p>' + esc(T("a_none")) + '</p><button class="btn" type="button" data-clear>' + esc(T("a_clear")) + "</button></div>";
    box.style.minHeight = aMin ? aMin + "px" : "";
    var pg = "";
    if (pages > 1) {
      pg = '<button type="button" class="pg" data-p="' + (A.page - 1) + '" aria-label="' + esc(T("a_prev")) + '"' + (A.page <= 1 ? " disabled" : "") + ">" + I.prev + "</button>" +
        pageList(pages, A.page).map(function (p) { return p === "…" ? '<span class="gap" aria-hidden="true">…</span>' : '<button type="button" class="pg" data-p="' + p + '" aria-label="' + esc(T("a_page") + " " + nf(p)) + '"' + (p === A.page ? ' aria-current="page"' : "") + ">" + nf(p) + "</button>"; }).join("") +
        '<button type="button" class="pg" data-p="' + (A.page + 1) + '" aria-label="' + esc(T("a_next")) + '"' + (A.page >= pages ? " disabled" : "") + ">" + I.arrow + "</button>";
    }
    $("#a-pager").innerHTML = pg;
    $("#a-status").textContent = total ? T("a_showing").replace("{a}", nf(st + 1)).replace("{b}", nf(st + part.length)).replace("{n}", nf(total)) : "";
  }
  function resetArticles() { aMin = 0; var b = $("#a-list"); if (b) b.style.minHeight = ""; }

  /* ---------- dialog, language, theme, helpers ---------- */
  function dialog(p) {
    var lk = (p.github ? '<a class="btn" target="_blank" rel="noopener noreferrer" href="' + url(p.github) + '">' + esc(T("code")) + "</a> " : "") + (p.demo ? '<a class="btn main" target="_blank" rel="noopener noreferrer" href="' + url(p.demo) + '">' + esc(T("demo")) + "</a>" : "");
    $("#dlg-body").innerHTML = img(p, 0) + '<div class="dpad"><h2 id="dlg-title">' + esc(L(p.title)) + "</h2><p>" + esc(L(p.desc)) + "</p>" + (has(p.points) ? "<h3>" + esc(T("highlights")) + '</h3><ul class="pts">' + p.points.map(function (x) { return "<li>" + esc(L(x)) + "</li>"; }).join("") + "</ul>" : "") + tags(p.tags) + (lk ? '<p style="margin-top:20px">' + lk + "</p>" : "") + "</div>";
  }
  function faFont() { if (!$("#fa-font")) { var l = doc.createElement("link"); l.id = "fa-font"; l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap"; doc.head.appendChild(l); } }
  function applyLang() {
    root.lang = lang; root.dir = lang === "fa" ? "rtl" : "ltr"; store.set("lang", lang); if (lang === "fa") faFont();
    doc.title = T("title"); var m = $("meta[name=description]"); if (m) m.setAttribute("content", T("desc"));
    var lb = $("#lang-lbl"); lb.textContent = lang === "fa" ? "EN" : "فا"; lb.lang = lang === "fa" ? "en" : "fa";
    var lbtn = $("#lang-btn"); lbtn.setAttribute("aria-label", T("langSwitch")); lbtn.title = T("langSwitch");
    $("#theme-btn").setAttribute("aria-label", T("theme")); $("#menu-btn").setAttribute("aria-label", T("menu")); setMenu(false); $(".dclose").setAttribute("aria-label", T("close"));
    $("#skip").textContent = T("skip"); $("#top-btn").setAttribute("aria-label", T("back"));
    /* each part isolated: a failure in one can never block the language switch of the others */
    try { hero(); } catch (e) { if (window.console) console.error("hero", e); }
    try { render(); } catch (e) { if (window.console) console.error("render", e); }
  }
  var curTheme = function () { return root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); };
  function syncTheme() { var d = curTheme() === "dark"; $("#theme-btn").setAttribute("aria-pressed", String(d)); var m = $("meta[name=theme-color]"); if (m) m.setAttribute("content", d ? "#070b14" : "#f5f7fa"); }
  function reveal() {
    var els = $$(".rv:not(.in)");
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    if (!io) io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.08 });
    els.forEach(function (e) { io.observe(e); });
  }
  function startRoles() {
    clearInterval(rt); var r = S.roles || [], el = $("#role"); ri = 0; if (!el) return; el.textContent = L(r[0]);
    if (reduce || r.length < 2) return;
    rt = setInterval(function () { el.classList.add("out"); setTimeout(function () { ri = (ri + 1) % r.length; el.textContent = L(r[ri]); el.classList.remove("out"); }, 350); }, 2800);
  }
  function observeNav() {
    if (!("IntersectionObserver" in window)) return; if (so) so.disconnect();
    var links = $$("#menu a"); so = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) links.forEach(function (a) { if (a.getAttribute("href") === "#" + e.target.id) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); }); }); }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { so.observe(s); });
  }
  function setMenu(o) { var n = $("#site-nav"), b = $("#menu-btn"); n.classList.toggle("open", o); b.setAttribute("aria-expanded", String(o)); }
  doc.addEventListener("keydown", function (e) { if (e.key === "Escape" && $("#site-nav").classList.contains("open")) { setMenu(false); $("#menu-btn").focus(); } });
  addEventListener("resize", function () { if (innerWidth > 900) setMenu(false); });
  function toast(m) { var t = $("#toast"); t.textContent = m; t.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove("show"); }, 2200); }
  function copy(x) { if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(x); return new Promise(function (ok, no) { var a = doc.createElement("textarea"); a.value = x; a.style.cssText = "position:fixed;opacity:0"; doc.body.appendChild(a); a.select(); try { doc.execCommand("copy") ? ok() : no(); } catch (e) { no(e); } a.remove(); }); }

  /* ---------- events: delegated; nothing here ever moves the scroll position ---------- */
  var dlg = $("#dlg");
  doc.addEventListener("click", function (e) {
    if (!e.target.closest("#site-nav,#menu-btn")) setMenu(false); else if (e.target.closest("#site-nav a")) setMenu(false);
    var t = e.target.closest ? e.target.closest("button") : null; if (!t) return;
    if (t.id === "menu-btn") { setMenu(!$("#site-nav").classList.contains("open")); return; }
    if (t.id === "lang-btn") { lang = lang === "fa" ? "en" : "fa"; applyLang(); }
    else if (t.id === "theme-btn") { var n = curTheme() === "dark" ? "light" : "dark"; root.dataset.theme = n; store.set("theme", n); syncTheme(); }
    else if (t.hasAttribute("data-copy")) copy(S.email).then(function () { toast(T("copied")); }, function () { toast(T("copyFail")); });
    else if (t.hasAttribute("data-f")) { filter = t.getAttribute("data-f"); $$("[data-f]").forEach(function (c) { c.setAttribute("aria-pressed", String(c === t)); }); $$(".pgrid .card").forEach(function (c) { c.hidden = !(filter === "all" || c.getAttribute("data-cats").split(" ").indexOf(filter) > -1); }); }
    else if (t.hasAttribute("data-tag")) { A.tag = t.getAttribute("data-tag"); A.page = 1; resetArticles(); updateArticles(); }
    else if (t.hasAttribute("data-p")) { A.page = +t.getAttribute("data-p"); updateArticles(); var cur = $("#a-pager [aria-current]"); if (cur) cur.focus({ preventScroll: true }); }
    else if (t.hasAttribute("data-clear")) { A.tag = "all"; A.q = ""; A.page = 1; var qi = $("#a-q"); if (qi) qi.value = ""; resetArticles(); updateArticles(); }
    else if (t.classList.contains("open")) { var p = find(t.getAttribute("data-id")); if (!p) return; openId = p.id; dialog(p); root.classList.add("lock"); dlg.showModal ? dlg.showModal() : dlg.setAttribute("open", ""); }
    else if (t.hasAttribute("data-aid")) { var ar = ART[+t.getAttribute("data-aid")]; if (!ar) return; openA = +t.getAttribute("data-aid"); adialog(ar); root.classList.add("lock"); dlg.showModal ? dlg.showModal() : dlg.setAttribute("open", ""); }
    else if (t.hasAttribute("data-close")) dlg.close ? dlg.close() : dlg.removeAttribute("open");
  });
  doc.addEventListener("input", function (e) { if (e.target.id === "a-q") { var v = e.target.value; clearTimeout(qt); qt = setTimeout(function () { A.q = v; A.page = 1; resetArticles(); updateArticles(); }, 140); } });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", function () { root.classList.remove("lock"); openId = null; openA = null; });
  var bar = $("#bar"), tb = $("#top-btn"), tick = false;
  addEventListener("scroll", function () { if (tick) return; tick = true; requestAnimationFrame(function () { var h = root.scrollHeight - root.clientHeight; bar.style.transform = "scaleX(" + (h > 0 ? root.scrollTop / h : 0) + ")"; tb.classList.toggle("show", root.scrollTop > 700); tick = false; }); }, { passive: true });
  neural(); syncTheme(); applyLang();
})();
