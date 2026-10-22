(function () {
  "use strict";
  var CV = window.CV;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) document.documentElement.classList.add("no-motion");

  function $(id) { return document.getElementById(id); }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  /* ---------- hero waveform ---------- */
  function initWave() {
    var canvas = $("wave");
    var ctx = canvas.getContext("2d");
    var w, h, dpr, t = 0, raf = null;
    var layers = [
      { amp: 1.0, freq: 0.9, speed: 0.9, alpha: 0.85, width: 2.2 },
      { amp: 0.7, freq: 1.5, speed: -0.6, alpha: 0.5, width: 1.5 },
      { amp: 0.45, freq: 2.4, speed: 0.4, alpha: 0.3, width: 1.2 },
      { amp: 0.3, freq: 3.6, speed: -0.3, alpha: 0.2, width: 1 }
    ];
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      var mid = h * 0.62, base = Math.min(h * 0.16, 120);
      layers.forEach(function (L) {
        ctx.beginPath();
        for (var x = 0; x <= w; x += 4) {
          var u = x / w;
          // envelope: a voice-like swell that tapers at both edges
          var env = Math.pow(Math.sin(Math.PI * u), 1.4) * (0.55 + 0.45 * Math.sin(u * 7 + t * 0.7));
          var y = mid + Math.sin(u * Math.PI * 2 * L.freq * 3 + t * L.speed * 2) * base * L.amp * env
                      + Math.sin(u * 23 + t * 1.7) * base * 0.08 * L.amp * env;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "rgba(224,165,58," + L.alpha + ")";
        ctx.lineWidth = L.width;
        ctx.stroke();
      });
    }
    function loop() { t += 0.012; draw(); raf = requestAnimationFrame(loop); }
    resize(); draw();
    window.addEventListener("resize", function () { resize(); draw(); });
    if (reduceMotion) return;
    var visible = true;
    new IntersectionObserver(function (es) {
      visible = es[0].isIntersecting;
      if (visible && !raf) loop();
      else if (!visible && raf) { cancelAnimationFrame(raf); raf = null; }
    }).observe(canvas);
  }

  /* ---------- simple lists ---------- */
  function renderLists() {
    $("languages").innerHTML = CV.languages.map(function (l) {
      return "<li><b>" + esc(l[0]) + "</b> <span>" + esc(l[1]) + "</span></li>";
    }).join("");

    $("pubArticles").innerHTML = CV.publications.articles.map(function (p) {
      return "<li><b>" + p.year + "</b><span>" + p.text + "</span></li>";
    }).join("");
    $("pubMedia").innerHTML = CV.publications.media.map(function (p) {
      return "<li><b>" + p.year + "</b><span>" + p.text + "</span></li>";
    }).join("");
    $("pubProgress").innerHTML = CV.publications.inProgress.map(function (p) {
      return "<li><span>" + p.text + "</span></li>";
    }).join("");

    $("honors").innerHTML = CV.honors.map(function (h) {
      return "<li><b>" + h[0] + "</b><span>" + esc(h[1]) + "<span class=\"sub2\">" + esc(h[2]) + "</span></span></li>";
    }).join("");
    $("grants").innerHTML = CV.grants.map(function (g) {
      return "<li><b>" + esc(g[0]) + "</b><span>" + esc(g[1]) + "</span></li>";
    }).join("");
    $("ensembles").innerHTML = CV.ensembles.map(function (e) {
      return "<li><b>" + esc(e[3].split(/[,–]/)[0]) + "</b><span>" + esc(e[0]) + "<span class=\"sub2\">" + esc(e[1]) + ", " + esc(e[2]) + " (" + esc(e[3]) + ")</span></span></li>";
    }).join("");
    $("memberships").innerHTML = CV.memberships.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("");
    $("service").innerHTML =
      CV.service.university.concat(CV.service.discipline).map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("");

    $("teachingList").innerHTML = CV.teaching.map(function (t) {
      var adv = t.advising ? "<h4>Advising</h4><ul>" + t.advising.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ul>" : "";
      return "<details" + (t.open ? " open" : "") + "><summary><strong>" + esc(t.school) + "</strong><span>" + esc(t.role) + " · " + esc(t.place) + "</span></summary>" +
        "<h4>Courses</h4><ul>" + t.courses.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul>" + adv + "</details>";
    }).join("");
  }

  /* ---------- timeline ---------- */
  function renderTimeline() {
    var ol = $("timeline");
    ol.innerHTML = CV.timeline.map(function (e) {
      return "<li data-type=\"" + e.type + "\"><span class=\"yr\">" + esc(e.year) + "</span><div class=\"tx\">" + esc(e.text) + "</div>" +
        (e.note ? "<span class=\"nt\">" + esc(e.note) + "</span>" : "") + "</li>";
    }).join("");
    var items = ol.querySelectorAll("li");
    if (reduceMotion || !("IntersectionObserver" in window)) { items.forEach(function (i) { i.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.2 });
    items.forEach(function (i) { io.observe(i); });
  }

  /* ---------- talks: list + map ---------- */
  function talkHTML(t, withPlace) {
    var place = t.place ? CV.places[t.place].name : "Online / location not listed on CV";
    return "<div class=\"talk__meta\">" + t.year + " · " + esc(t.kind) + (withPlace ? " · " + esc(place) : "") + "</div>" +
      "<div class=\"talk__title\">" + esc(t.title) + "</div><div class=\"talk__venue\">" + esc(t.venue) + "</div>";
  }

  function renderTalkList() {
    var byYear = {};
    CV.talks.forEach(function (t) { (byYear[t.year] = byYear[t.year] || []).push(t); });
    var years = Object.keys(byYear).sort(function (a, b) { return b - a; });
    $("talkList").innerHTML = years.map(function (y) {
      return "<h4>" + y + "</h4><ul>" + byYear[y].map(function (t) { return "<li>" + talkHTML(t, true) + "</li>"; }).join("") + "</ul>";
    }).join("");
  }

  var selected = null;
  var pinEls = {};

  function visibleTalks(placeKey) {
    var from = +$("yearRange").value;
    return CV.talks.filter(function (t) { return t.place === placeKey && t.year >= from; });
  }

  function updatePanel() {
    var title = $("panelTitle"), list = $("panelList");
    if (!selected) {
      var n = CV.talks.filter(function (t) { return t.year >= +$("yearRange").value; }).length;
      title.textContent = "Choose a pin";
      list.innerHTML = "<li>" + n + " talks since " + $("yearRange").value + ". Each pin is a place where I presented; the full list is below the map.</li>";
      return;
    }
    var ts = visibleTalks(selected);
    title.textContent = CV.places[selected].name;
    list.innerHTML = ts.length
      ? ts.map(function (t) { return "<li>" + talkHTML(t, false) + "</li>"; }).join("")
      : "<li>No talks here in this year range.</li>";
  }

  function updatePins() {
    Object.keys(pinEls).forEach(function (k) {
      var n = visibleTalks(k).length;
      var p = pinEls[k];
      var home = CV.places[k].home;
      p.classList.toggle("is-hidden", n === 0 && !home);
      p.setAttribute("aria-label", CV.places[k].name + (home ? " (home base)" : "") + ", " + n + (n === 1 ? " talk" : " talks"));
    });
    if (selected && !visibleTalks(selected).length) selected = null;
    Object.keys(pinEls).forEach(function (k) {
      pinEls[k].classList.toggle("is-selected", k === selected);
      pinEls[k].querySelector("text").setAttribute("visibility", k === selected ? "visible" : "hidden");
    });
    updatePanel();
  }

  function select(k) {
    selected = selected === k ? null : k;
    updatePins();
  }

  function initMap() {
    var svg = $("worldMap");
    var ns = "http://www.w3.org/2000/svg";
    var range = $("yearRange");
    range.addEventListener("input", function () { $("yearOut").textContent = range.value; updatePins(); });
    updatePanel();

    if (!window.d3 || !window.topojson) { mapFail(); return; }
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json")
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (world) {
        var proj = d3.geoNaturalEarth1().fitExtent([[8, 8], [952, 472]], { type: "Sphere" });
        var path = d3.geoPath(proj);
        var land = document.createElementNS(ns, "path");
        land.setAttribute("class", "land");
        land.setAttribute("d", path(topojson.feature(world, world.objects.countries)));
        svg.appendChild(land);

        Object.keys(CV.places).forEach(function (k) {
          var pl = CV.places[k], xy = proj([pl.lng, pl.lat]);
          var g = document.createElementNS(ns, "g");
          g.setAttribute("class", "pin" + (pl.home ? " is-home" : ""));
          g.setAttribute("tabindex", "0");
          g.setAttribute("role", "button");
          g.setAttribute("transform", "translate(" + xy[0].toFixed(1) + " " + xy[1].toFixed(1) + ")");
          g.innerHTML = "<circle class=\"pulse\" r=\"6\"/><circle class=\"dot\" r=\"6\"/><text x=\"10\" y=\"4\" visibility=\"hidden\">" + esc(pl.name.split(",")[0]) + "</text>";
          var label = g.querySelector("text");
          g.addEventListener("click", function () { select(k); });
          g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(k); } });
          g.addEventListener("mouseenter", function () { label.setAttribute("visibility", "visible"); });
          g.addEventListener("mouseleave", function () { if (k !== selected) label.setAttribute("visibility", "hidden"); });
          g.addEventListener("focus", function () { label.setAttribute("visibility", "visible"); });
          g.addEventListener("blur", function () { if (k !== selected) label.setAttribute("visibility", "hidden"); });
          svg.appendChild(g);
          pinEls[k] = g;
        });
        updatePins();
      })
      .catch(mapFail);

    function mapFail() {
      $("mapFigure").hidden = true;
      var note = el("p", "sub", "The interactive map couldn’t load. Every talk is listed below instead.");
      $("mapPanel").parentNode.replaceChild(note, $("mapPanel"));
      document.querySelector(".map-controls").hidden = true;
      var d = document.querySelector(".allTalks"); if (d) d.open = true;
    }
  }

  /* ---------- nav highlighting ---------- */
  function initNav() {
    var links = {};
    document.querySelectorAll(".nav ul a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && links[e.target.id]) {
          Object.keys(links).forEach(function (k) { links[k].classList.toggle("is-active", k === e.target.id); });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(links).forEach(function (id) { var s = $(id); if (s) io.observe(s); });
  }

  function init() {
    initWave(); renderLists(); renderTimeline(); renderTalkList(); initNav();
  }
  init();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initMap); else initMap();
})();
