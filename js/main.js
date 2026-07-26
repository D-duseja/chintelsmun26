// ============================================================
// CHINTELSMUN'26 — MAIN JS
// Intro Splash, Navbar, Countdown, Particles, Committees,
// Secretariat, Schedule Tabs, Scroll Reveal, Modal
// ============================================================

/* -------- INTRO SPLASH -------- */
(function initIntroSplash() {
  const splash = document.getElementById('intro-splash');
  if (!splash) return;

  // Lock scroll while intro plays
  document.body.classList.add('intro-active');

  // Spawn glittering particles inside the splash
  const pCont = document.getElementById('intro-particles');
  if (pCont) {
    const colors = [
      'rgba(230,184,0,0.55)', 'rgba(255,215,0,0.4)',
      'rgba(201,187,234,0.5)', 'rgba(139,114,190,0.5)',
    ];
    for (let i = 0; i < 50; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const sz  = Math.random() * 3.5 + 1;
      const col = colors[Math.floor(Math.random() * colors.length)];
      Object.assign(p.style, {
        width:             `${sz}px`,
        height:            `${sz}px`,
        left:              `${Math.random() * 100}%`,
        background:        col,
        boxShadow:         `0 0 ${sz * 2}px ${col}`,
        animationDelay:    `${Math.random() * 12}s`,
        animationDuration: `${Math.random() * 10 + 8}s`,
      });
      pCont.appendChild(p);
    }
  }

  // Exit after 3.2s
  setTimeout(() => {
    splash.classList.add('splash-exit');
    setTimeout(() => {
      document.body.classList.remove('intro-active');
      splash.style.display = 'none';
    }, 850);
  }, 3200);
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

// ========== GLOBAL CANVAS PARTICLES ANIMATION ==========
function initGlobalCanvasAnimation() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor((width * height) / 16000), 85);
  const particles = [];

  const colors = [
    'rgba(230, 184, 0, ',    // Gold bright
    'rgba(255, 215, 0, ',    // Gold shine
    'rgba(201, 187, 234, ',  // Lavender light
    'rgba(139, 114, 190, ',  // Lavender soft
    'rgba(170, 140, 230, '   // Bright Lavender
  ];

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(init = false) {
      this.x = Math.random() * width;
      this.y = init ? Math.random() * height : height + 15;
      this.radius = Math.random() * 2.4 + 0.8;
      this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
      this.baseAlpha = Math.random() * 0.5 + 0.25;
      this.alpha = this.baseAlpha;
      this.vy = -(Math.random() * 0.45 + 0.2);
      this.vx = (Math.random() - 0.5) * 0.35;
      this.swingSpeed = Math.random() * 0.02 + 0.005;
      this.swingAngle = Math.random() * Math.PI * 2;
    }

    update(mouse) {
      this.swingAngle += this.swingSpeed;
      this.x += this.vx + Math.sin(this.swingAngle) * 0.28;
      this.y += this.vy;

      // Mouse repulsion / reactivity
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 140;
        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 1.5;
          this.x += (dx / (dist || 1)) * force;
          this.y += (dy / (dist || 1)) * force;
        }
      }

      if (this.y < -20 || this.x < -20 || this.x > width + 20) {
        this.reset(false);
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.colorPrefix + this.alpha + ')';
      ctx.shadowBlur = this.radius * 3.5;
      ctx.shadowColor = this.colorPrefix + '0.85)';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  const mouse = { x: null, y: null };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function drawConnections() {
    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(201, 187, 234, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    drawConnections();

    particles.forEach(p => {
      p.update(mouse);
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ========== HERO PARTICLES ==========
function initHeroParticles() {
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
    : COMMITTEES.filter(c => c.type === filter);

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

    card.innerHTML = `
      <span class="cc-badge ${c.type}">${c.typeLabel}</span>
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
  const boardHtml = c.board.map(b =>
    `<div class="board-member" style="padding: 8px 14px; margin: 4px; font-size: 0.82rem; display: inline-flex; gap: 8px;">
      <span style="color: var(--text-muted);">${b.role}:</span>
      <strong style="color: var(--white);">${b.name}</strong>
    </div>`
  ).join('');

  content.innerHTML = `
    <div style="margin-bottom: 8px;">
      <span class="cc-badge ${c.type}" style="margin-bottom: 16px; display: inline-block;">${c.typeLabel}</span>
    </div>
    <div style="font-family: var(--font-display); font-size: 2rem; font-weight: 900; background: linear-gradient(135deg, #FFD700, #E6B800); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 6px;">${c.abbr}</div>
    <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px; line-height: 1.5;">${c.name}</div>
    
    <div style="margin-bottom: 20px;">
      <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--gold-bright); margin-bottom: 10px; font-weight: 700;">📋 Agenda</div>
      <div style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; padding: 16px; background: rgba(0,0,0,0.25); border-radius: 12px; border-left: 3px solid var(--gold-bright);">${c.agenda}</div>
    </div>
    
    <div>
      <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--gold-bright); margin-bottom: 12px; font-weight: 700;">👥 Executive Board</div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">${boardHtml}</div>
    </div>
  `;

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
