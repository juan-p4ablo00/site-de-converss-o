/* =========================================================
   CONFIGURAÇÕES — edite apenas esta área
   ========================================================= */
const CONFIG = {
  name: "Juan Pablo",                                   // aparece no header, rodapé e monograma
  whatsapp: "94999731943",                          // DDI + DDD + número, apenas dígitos
  whatsappMessage: "Olá! Vim pelo seu site e gostaria de conversar sobre um projeto.",
  instagram: "https://www.instagram.com/jpitech.00/",
  github: "https://github.com/juan-p4ablo00",
  linkedin: "https://www.linkedin.com/in/juan-pablo-nascimento/",
  email: "juanpablon277@gmail.com"
};

/* =========================================================
   ÍCONES (SVG inline, sem dependências externas)
   ========================================================= */
const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.17v3.22c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.75 8.98h8.46V23H.75V8.98ZM14.98 8.98h-8.1V23h8.1v-7.36c0-1.94.37-3.82 2.78-3.82 2.37 0 2.4 2.22 2.4 3.95V23H23V14.9c0-5.16-1.1-9.13-7.14-9.13-2.9 0-4.84 1.6-5.64 3.11h-.08V8.98H14.98Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.08L2 22l5.08-1.33A9.96 9.96 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2Zm5.86 14.3c-.25.7-1.44 1.34-1.99 1.42-.51.08-1.15.11-1.86-.12-.43-.13-.98-.32-1.7-.62-2.98-1.29-4.92-4.3-5.07-4.5-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.25.6.85 2.06.92 2.21.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.32.4-.45.53-.15.15-.3.32-.13.62.17.3.77 1.27 1.65 2.06 1.14 1.02 2.1 1.34 2.4 1.49.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.13.08.72-.17 1.42Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16v16H4V4Z"/><path d="M4 6l8 7 8-7"/></svg>'
};

function whatsappLink() {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
}

function initials(name) {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase() || '').join('') || 'JS';
}

/* =========================================================
   APLICAR CONFIGURAÇÕES NO DOM
   ========================================================= */
function applyConfig() {
  document.querySelectorAll('[data-config="name"]').forEach(el => el.textContent = CONFIG.name);

  const monogram = document.getElementById('heroMonogram');
  if (monogram) monogram.textContent = initials(CONFIG.name);

  // links sociais (hero + rodapé)
  const socials = [
    { icon: ICONS.github, url: CONFIG.github, label: 'GitHub' },
    { icon: ICONS.linkedin, url: CONFIG.linkedin, label: 'LinkedIn' },
    { icon: ICONS.instagram, url: CONFIG.instagram, label: 'Instagram' },
    { icon: ICONS.whatsapp, url: whatsappLink(), label: 'WhatsApp' }
  ];

  ['heroSocial', 'footerSocial'].forEach(id => {
    const list = document.getElementById(id);
    if (!list) return;
    list.innerHTML = socials.map(s =>
      `<li><a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}">${s.icon}</a></li>`
    ).join('');
  });

  // seção de contato
  const contactEmail = document.getElementById('contactEmail');
  if (contactEmail) { contactEmail.textContent = CONFIG.email; contactEmail.href = `mailto:${CONFIG.email}`; }

  const contactWhatsapp = document.getElementById('contactWhatsapp');
  if (contactWhatsapp) { contactWhatsapp.href = whatsappLink(); }

  const contactInstagram = document.getElementById('contactInstagram');
  if (contactInstagram) {
    contactInstagram.href = CONFIG.instagram;
    const handle = CONFIG.instagram.replace(/\/$/, '').split('/').pop();
    contactInstagram.textContent = '@' + handle;
  }

  const contactMainBtn = document.getElementById('contactMainBtn');
  if (contactMainBtn) { contactMainBtn.href = whatsappLink(); }
}

/* =========================================================
   HEADER: fundo ao rolar + link ativo
   ========================================================= */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initActiveNav() {
  const links = document.querySelectorAll('.nav-link');
  const sections = Array.from(links).map(l => document.querySelector(l.getAttribute('href')));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => s && observer.observe(s));
}

/* =========================================================
   MENU MOBILE
   ========================================================= */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* =========================================================
   REVEAL AO ROLAR
   ========================================================= */
function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => observer.observe(el));
}

/* =========================================================
   SLIDER DE FEEDBACKS
   ========================================================= */
function initTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const dotsWrap = document.getElementById('testimonialDots');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');
  if (!track) return;

  const slides = Array.from(track.children);
  let index = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Ir para depoimento ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle('active', di === index));
  }

  prevBtn.addEventListener('click', () => goTo(index - 1));
  nextBtn.addEventListener('click', () => goTo(index + 1));

  let autoplay = setInterval(() => goTo(index + 1), 6000);
  track.closest('.testimonial-slider').addEventListener('mouseenter', () => clearInterval(autoplay));
  track.closest('.testimonial-slider').addEventListener('mouseleave', () => {
    autoplay = setInterval(() => goTo(index + 1), 6000);
  });
}

/* =========================================================
   LIGHTBOX DA SEÇÃO "VEJA NA PRÁTICA"
   ========================================================= */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const frame = document.getElementById('lightboxFrame');
  const closeBtn = document.getElementById('lightboxClose');
  const items = document.querySelectorAll('[data-lightbox-index]');

  const labels = ['Amostra 01', 'Amostra 02', 'Amostra 03', 'Amostra 04'];

  function open(i) {
    frame.textContent = labels[i] || 'Amostra';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  items.forEach(item => {
    item.addEventListener('click', () => open(Number(item.dataset.lightboxIndex)));
  });
  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* =========================================================
   ANO NO RODAPÉ
   ========================================================= */
function initFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  initHeaderScroll();
  initActiveNav();
  initMobileNav();
  initReveal();
  initTestimonials();
  initLightbox();
  initFooterYear();
});
