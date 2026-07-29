// ============================================================
// CHINTELSMUN'26 — MAIN JS
// Intro Splash, Navbar, Countdown, Particles, Committees,
// Secretariat, Schedule Tabs, Scroll Reveal, Modal
// ============================================================

// ── INTRO SEQUENCE (WORDS → LOGO FLASH → SITE) ─────────────────
(function () {
  // Lock scroll for intro duration
  document.body.style.overflow = "hidden";

  var splash = document.getElementById("intro-splash");
  var wordsPhase = document.getElementById("intro-words-phase");
  var logoPhase = document.getElementById("intro-logo-phase");
  var welcomeWrap = document.getElementById("intro-welcome-wrap");

  // Single shared particles canvas
  var pt = initParticles("intro-particles-canvas");

  function initParticles(canvasId) {
    var ic = document.getElementById(canvasId);
    if (!ic) return { stop: function(){} };
    var ictx = ic.getContext("2d");
    var pts = [];
    var aid;
    function resize() { ic.width = window.innerWidth; ic.height = window.innerHeight; }
    resize();
    window.addEventListener("resize", resize);
    for (var i = 0; i < 70; i++) {
      pts.push({
        x: Math.random()*window.innerWidth, y: Math.random()*window.innerHeight,
        r: Math.random()*1.8+0.4, vx:(Math.random()-0.5)*0.4, vy:(Math.random()-0.5)*0.4,
        alpha:Math.random()*0.5+0.15, color:Math.random()>0.5?"230,184,0":"139,114,190"
      });
    }
    function draw() {
      ictx.clearRect(0,0,ic.width,ic.height);
      for (var a=0;a<pts.length;a++) for (var b=a+1;b<pts.length;b++) {
        var dx=pts[a].x-pts[b].x, dy=pts[a].y-pts[b].y, d=Math.sqrt(dx*dx+dy*dy);
        if (d<120) { ictx.beginPath(); ictx.strokeStyle="rgba(139,114,190,"+(0.08*(1-d/120))+")";
          ictx.lineWidth=0.5; ictx.moveTo(pts[a].x,pts[a].y); ictx.lineTo(pts[b].x,pts[b].y); ictx.stroke(); }
      }
      for (var j=0;j<pts.length;j++) {
        var p=pts[j]; p.x+=p.vx; p.y+=p.vy;
        if(p.x<0)p.x=ic.width; if(p.x>ic.width)p.x=0;
        if(p.y<0)p.y=ic.height; if(p.y>ic.height)p.y=0;
        ictx.beginPath(); ictx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ictx.fillStyle="rgba("+p.color+","+p.alpha+")"; ictx.fill();
      }
      aid = requestAnimationFrame(draw);
    }
    draw();
    return { stop: function(){ cancelAnimationFrame(aid); } };
  }

  // ── Scramble decode ───────────────────────────────────────
  var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@!%&*";
  function scrambleDecode(el, target, onComplete) {
    el.classList.add("visible");
    var frame = 0, total = target.length + 6;
    var iv = setInterval(function(){
      var out = "";
      for (var i=0;i<target.length;i++) {
        out += (i < frame-2) ? target[i] : CHARS[Math.floor(Math.random()*CHARS.length)];
      }
      el.textContent = out;
      frame++;
      if (frame > total) { clearInterval(iv); el.textContent = target; if(onComplete) onComplete(); }
    }, 44);
  }

  // ── Gold line helpers ─────────────────────────────────────
  function drawGoldLine(gl, cb) {
    gl.classList.add("drawn");
    setTimeout(function(){ if(cb) cb(); }, 440);
  }
  function eraseGoldLine(gl, cb) {
    gl.classList.remove("drawn");
    setTimeout(function(){ if(cb) cb(); }, 440);
  }

  var introAllDone = false;

  // ── PHASE 1: Words Reveal ("ए-KTA", "अ-KHANDTA", "वि-VIDHTA") ────────
  var wordEl   = document.getElementById("intro-word");
  var goldLine = document.getElementById("intro-gold-line");

  var words = ["ए-KTA", "अ-KHANDTA", "वि-VIDHTA"];
  var idx = 0;

  function nextWord() {
    if (introAllDone) return;
    if (idx >= words.length) {
      // All words completed → smoothly transition to Logo Flash INSIDE single overlay
      if (wordEl) wordEl.classList.remove("visible");
      if (goldLine) goldLine.classList.remove("drawn");
      setTimeout(function(){
        startLogoFlashPhase();
      }, 300);
      return;
    }

    var w = words[idx++];
    if (goldLine) goldLine.classList.remove("drawn");
    if (wordEl) {
      wordEl.classList.remove("visible");
      wordEl.textContent = "";
    }

    setTimeout(function(){
      if (wordEl) {
        wordEl.textContent = w;
        wordEl.classList.add("visible");
      }
      setTimeout(function(){
        if (wordEl) {
          scrambleDecode(wordEl, w, function(){
            setTimeout(function(){
              if (goldLine) {
                drawGoldLine(goldLine, function(){
                  setTimeout(function(){
                    eraseGoldLine(goldLine, function(){
                      setTimeout(nextWord, 140);
                    });
                  }, 220);
                });
              } else {
                setTimeout(nextWord, 140);
              }
            }, 600);
          });
        }
      }, 60);
    }, idx === 1 ? 0 : 160);
  }

  setTimeout(nextWord, 200);

  // ── PHASE 2: Original Initial Logo Flash Phase ─────────────
  function startLogoFlashPhase() {
    if (introAllDone) return;

    if (wordsPhase) wordsPhase.classList.remove("active");
    if (logoPhase) logoPhase.classList.add("active");

    // Hold logo flash screen for 2.8s, then smoothly reveal website
    setTimeout(function(){
      finishAll();
    }, 2800);
  }

  // ── Finish & reveal site ──────────────────────────────────
  function finishAll() {
    if (introAllDone) return;
    introAllDone = true;
    if (splash) {
      splash.classList.add("splash-exit");
      setTimeout(function(){
        splash.style.display = "none";
        document.body.style.overflow = "";
        pt.stop();
      }, 950);
    } else {
      document.body.style.overflow = "";
    }
  }

  // ── Skip handler ──────────────────────────────────────────
  window.skipIntroAll = function() {
    finishAll();
  };

  window.skipIntro = window.skipIntroAll;
})();

/* -------- MAIN INIT (after DOM ready) -------- */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCountdown();
  initParticles();
  renderCommittees('all');
  renderSecretariat();
  initCommitteeFilters();
  initScheduleTabs();
  initScrollReveal();
  initModal();
  initMobileMenu();
});

// ========== NAVBAR ==========
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active section highlighting
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ========== COUNTDOWN ==========
function initCountdown() {
  const target = new Date('2026-08-16T08:00:00+05:30').getTime();

  function update() {
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      document.getElementById('cd-days').textContent  = '00';
      document.getElementById('cd-hours').textContent = '00';
      document.getElementById('cd-mins').textContent  = '00';
      document.getElementById('cd-secs').textContent  = '00';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    const fmt = n => String(n).padStart(2, '0');
    animateNum('cd-days',  fmt(d));
    animateNum('cd-hours', fmt(h));
    animateNum('cd-mins',  fmt(m));
    animateNum('cd-secs',  fmt(s));
  }

  function animateNum(id, newVal) {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.textContent !== newVal) {
      el.style.transform = 'translateY(-8px)';
      el.style.opacity = '0';
      setTimeout(() => {
        el.textContent = newVal;
        el.style.transition = 'none';
        el.style.transform = 'translateY(8px)';
        el.style.opacity = '0';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.style.transition = 'all 0.3s ease';
            el.style.transform = 'translateY(0)';
            el.style.opacity = '1';
          });
        });
      }, 150);
    }
  }

  update();
  setInterval(update, 1000);
}

// ========== PARTICLES ==========
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const colors = [
    'rgba(201, 187, 234, 0.5)',
    'rgba(230, 184, 0, 0.4)',
    'rgba(255, 215, 0, 0.3)',
    'rgba(139, 114, 190, 0.5)',
    'rgba(201, 187, 234, 0.3)',
  ];

  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = Math.random() * 15 + 10;

    Object.assign(p.style, {
      width: `${size}px`,
      height: `${size}px`,
      left: `${left}%`,
      background: color,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      boxShadow: `0 0 ${size * 2}px ${color}`,
    });
    container.appendChild(p);
  }
}

// ========== RENDER COMMITTEES ==========
function renderCommittees(filter) {
  const grid = document.getElementById('committees-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? COMMITTEES
    : COMMITTEES.filter(c => Array.isArray(c.type) ? c.type.includes(filter) : c.type === filter);

  grid.innerHTML = '';

  filtered.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'committee-card glass-card reveal';
    if (i % 3 === 1) card.classList.add('reveal-delay-1');
    if (i % 3 === 2) card.classList.add('reveal-delay-2');
    card.dataset.id = c.id;

    const boardHtml = c.board.map(b =>
      `<span class="board-member"><span class="role">${b.role}:</span> <strong>${b.name}</strong></span>`
    ).join('');

    const primaryType = Array.isArray(c.type) ? c.type[0] : c.type;

    card.innerHTML = `
      <span class="cc-badge ${primaryType}">${c.typeLabel}</span>
      <div class="cc-abbr">${c.abbr}</div>
      <div class="cc-name">${c.name}</div>
      <div class="cc-agenda">${c.agenda.length > 180 ? c.agenda.substring(0, 180) + '…' : c.agenda}</div>
      <div style="font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--gold-bright); font-weight: 700; margin-bottom: 6px;">Executive Board</div>
      <div class="cc-board">${boardHtml}</div>
      <div class="cc-footer">
        <button class="btn btn-ghost" style="padding: 8px 18px; font-size: 0.78rem;" data-modal-id="${c.id}">
          View Details →
        </button>
      </div>
    `;

    card.addEventListener('click', () => openModal(c.id));
    grid.appendChild(card);
  });

  // Re-trigger scroll reveal for newly rendered cards
  setTimeout(() => {
    const reveals = grid.querySelectorAll('.reveal');
    reveals.forEach(el => el.classList.add('visible'));
  }, 50);
}

// ========== COMMITTEE FILTERS ==========
function initCommitteeFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      renderCommittees(filter);
    });
  });
}

// ========== RENDER SECRETARIAT ==========
function renderSecretariat() {
  const grid = document.getElementById('secretariat-grid');
  if (!grid) return;

  SECRETARIAT.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'sec-card glass-card reveal';
    if (i % 4 === 1) card.classList.add('reveal-delay-1');
    if (i % 4 === 2) card.classList.add('reveal-delay-2');
    if (i % 4 === 3) card.classList.add('reveal-delay-3');

    card.innerHTML = `
      <div class="sec-avatar">${m.initials}</div>
      <div class="sec-name">${m.name}</div>
      <div class="sec-role">${m.role}</div>
    `;
    grid.appendChild(card);
  });
}

// ========== SCHEDULE TABS ==========
function initScheduleTabs() {
  const tabs = document.querySelectorAll('.day-tab');
  const panels = document.querySelectorAll('.day-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const day = tab.dataset.day;

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const panel = document.getElementById(`day-panel-${day}`);
      if (panel) panel.classList.add('active');
    });
  });
}

// ========== MODAL ==========
function initModal() {
  const overlay = document.getElementById('committee-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(id) {
  const c = COMMITTEES.find(x => x.id === id);
  if (!c) return;

  const content = document.getElementById('modal-content');
  const primaryType = Array.isArray(c.type) ? c.type[0] : c.type;

  // Board members html
  const boardHtml = c.board.map(b =>
    `<div style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 6px;">
      <span style="color: var(--text-muted); font-weight: 500;">${b.role}:</span>
      <strong style="color: var(--gold-shine); font-weight: 700;">${b.name}</strong>
    </div>`
  ).join('');

  // Agenda sub-pillars html
  const pillarsHtml = (c.agendaDetail || []).map((pillar) => `
    <div class="agenda-pillar-item">
      ${pillar}
    </div>
  `).join('');

  content.innerHTML = `
    <!-- Header Meta & Symmetrical Badges -->
    <div class="modal-header-meta">
      <span class="cc-badge ${primaryType}">${c.typeLabel}</span>
      <span class="modal-level-pill">🎯 ${c.level || 'All Experience Levels'}</span>
    </div>
    
    <div style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 900; background: linear-gradient(135deg, #FFD700, #E6B800); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 4px; line-height: 1.1;">
      ${c.abbr}
    </div>
    <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 6px; line-height: 1.4;">
      ${c.name}
    </div>

    <!-- Quick Jump Nav Bar -->
    <div class="modal-quick-nav">
      <a href="#mod-sec-overview" class="modal-quick-link">🏛️ Overview</a>
      <a href="#mod-sec-agenda" class="modal-quick-link">📋 Agenda</a>
      <a href="#mod-sec-rops" class="modal-quick-link">⚖️ Rules of Procedure</a>
      <a href="#mod-sec-board" class="modal-quick-link">👥 Executive Board</a>
    </div>

    <!-- Section 1: Overview & Mandate -->
    <div class="modal-section" id="mod-sec-overview">
      <div class="modal-section-heading">🏛️ Overview & Mandate</div>
      <div style="font-size: 0.94rem; color: var(--text-primary); line-height: 1.75; padding-left: 16px; border-left: 3px solid var(--gold-bright); margin-bottom: 16px;">
        ${c.about || c.name + ' is a key committee featured at ChintelsMUN\'26.'}
      </div>

      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-top: 14px;">
        <div>
          <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; display: block;">Format</span>
          <span style="font-size: 0.88rem; font-weight: 700; color: var(--white);">${c.typeLabel}</span>
        </div>
        <div>
          <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; display: block;">Target Experience</span>
          <span style="font-size: 0.88rem; font-weight: 700; color: var(--gold-bright);">${c.level || 'All Levels'}</span>
        </div>
      </div>
    </div>

    <!-- Section 2: Agenda & Focus Areas -->
    <div class="modal-section" id="mod-sec-agenda">
      <div class="modal-section-heading">📋 Primary Agenda</div>
      <div style="font-size: 0.94rem; color: var(--text-primary); line-height: 1.75; padding-left: 16px; border-left: 3px solid var(--gold-bright); margin-bottom: 20px;">
        ${c.agenda}
      </div>

      <div style="font-size: 0.74rem; text-transform: uppercase; letter-spacing: 0.14em; color: var(--gold-bright); margin-bottom: 12px; font-weight: 700;">
        Key Research Pillars & Focus Areas
      </div>
      <div class="agenda-pillars-list">
        ${pillarsHtml || '<p style="font-size: 0.88rem; color: var(--text-muted);">Detailed background guide will be made available to registered delegates.</p>'}
      </div>
    </div>

    <!-- Section 3: Rules of Procedure (ROPs) Bullet List -->
    <div class="modal-section" id="mod-sec-rops">
      <div class="modal-section-heading">⚖️ Rules of Procedure (ROPs)</div>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">
        Key guidelines, debate style, motion types, and voting rules for ${c.abbr}:
      </p>

      <ul class="rop-bullet-list">
        <li>
          <span class="rop-bullet-label">Debate Format:</span>
          <span class="rop-bullet-text">${c.rops ? c.rops.format : 'Standard MUN Rules of Procedure (General Speakers List, Moderated and Unmoderated Caucuses).'}</span>
        </li>
        <li>
          <span class="rop-bullet-label">Voting Rules & Thresholds:</span>
          <span class="rop-bullet-text">${c.rops ? c.rops.voting : 'Simple Majority (50% + 1) for procedural matters; 2/3 Majority for substantive draft resolutions.'}</span>
        </li>
        <li>
          <span class="rop-bullet-label">Primary Motions:</span>
          <span class="rop-bullet-text">${c.rops ? c.rops.motions : 'Motion to Open GSL, Motion for Moderated Caucus, Motion for Unmoderated Caucus, Motion to Introduce Resolution.'}</span>
        </li>
        <li>
          <span class="rop-bullet-label">Documentation & Outcomes:</span>
          <span class="rop-bullet-text">${c.rops ? c.rops.documentation : 'Working Papers, Draft Resolutions, Amendments, and Joint Communiqués.'}</span>
        </li>
      </ul>
    </div>

    <!-- Section 4: Executive Board -->
    <div class="modal-section" id="mod-sec-board">
      <div class="modal-section-heading">👥 Executive Board</div>
      <div style="margin-bottom: 16px;">
        ${boardHtml}
      </div>

      <p style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.65; padding-left: 14px; border-left: 2px solid var(--gold-bright);">
        <strong style="color: var(--gold-bright);">EB Advice:</strong> Delegates are encouraged to thoroughly research their assigned foreign policy / portfolio, prepare position statements, and come ready for active caucus negotiations.
      </p>
    </div>

    <!-- Modal Footer Actions -->
    <div class="modal-footer-actions">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQqLwWkjAQdmaqRqIgVZkNtDtDPHHWxP5byJvFpDgPiorR-g/viewform" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 10px 24px; font-size: 0.8rem;">
        Register for ${c.abbr} →
      </a>
      <button class="btn btn-ghost" style="padding: 10px 22px; font-size: 0.8rem;" onclick="closeModal()">
        Close View
      </button>
    </div>
  `;

  // Attach quick jump links smooth scroll behavior inside the modal-box
  const modalBox = document.querySelector('.modal-box');
  const quickLinks = content.querySelectorAll('.modal-quick-link');
  quickLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSec = content.querySelector(`#${targetId}`);
      if (targetSec && modalBox) {
        modalBox.scrollTo({
          top: targetSec.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  document.getElementById('committee-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('committee-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// ========== SCROLL REVEAL ==========
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  const links = menu.querySelectorAll('.mm-link, a.btn');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
