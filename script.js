/* =========================================================
   CONFIGURAÇÕES — edite apenas esta área
   ========================================================= */
const CONFIG = {
  whatsapp: "5594999731943",                        // DDI + DDD + número, apenas dígitos
  whatsappMessage: "Olá! Vim pelo seu site e gostaria de conversar sobre um projeto.",
  instagram: "https://www.instagram.com/jpitech.00/",
  github: "https://github.com/juan-p4ablo00",
  linkedin: "https://www.linkedin.com/in/juan-pablo-nascimento/",
  email: "juanpablon277@gmail.com"
};

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

function whatsappLink(message = CONFIG.whatsappMessage) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

function emailLink() {
  const subject = 'Quero conversar sobre um projeto';
  const body = 'Olá, Juan! Vim pelo seu site e gostaria de conversar sobre um projeto.';
  return `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* =========================================================
   APLICAR CONFIGURAÇÕES NO DOM
   cada link de WhatsApp pode ter a própria mensagem em data-msg
   ========================================================= */
function applyConfig() {
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    el.href = whatsappLink(el.dataset.msg);
  });

  document.querySelectorAll('[data-config-link]').forEach(el => {
    const key = el.dataset.configLink;
    if (key === 'email') {
      el.href = `mailto:${CONFIG.email}`;
      el.textContent = CONFIG.email;
    } else if (key === 'mailto') {
      // botão de e-mail: troca só o destino, mantém ícone e rótulo
      el.href = emailLink();
    } else if (CONFIG[key]) {
      el.href = CONFIG[key];
    }
  });

  const year = document.getElementById('footerYear');
  if (year) year.textContent = new Date().getFullYear();
}

/* =========================================================
   HEADER: vidro ao rolar + movimento sutil do retrato
   ========================================================= */
function initHeader() {
  const header = document.getElementById('siteHeader');
  const hero = document.querySelector('.hero');
  const portrait = document.querySelector('.hero-portrait');
  let ticking = false;

  const update = () => {
    ticking = false;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
    if (portrait && hero && !reduceMotion.matches) {
      const progress = Math.min(Math.max(window.scrollY / (hero.offsetHeight || 1), 0), 1);
      portrait.style.setProperty('--shift', progress.toFixed(3));
    }
  };

  update();
  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
}

/* =========================================================
   LINK ATIVO NO MENU
   ========================================================= */
function initActiveNav() {
  const links = [...document.querySelectorAll('.nav-link')];
  const byId = new Map(links.map(link => [link.getAttribute('href').slice(1), link]));
  // observa todas as seções: nas que não estão no menu (Como trabalho), nenhum item fica marcado
  const sections = [...document.querySelectorAll('main > section[id]')];

  const setActive = (id) => {
    links.forEach(link => {
      if (link === byId.get(id)) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

/* =========================================================
   MENU MOBILE (tela cheia)
   ========================================================= */
function initMenu() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  const outside = [
    document.querySelector('main'),
    document.querySelector('.site-footer'),
    document.getElementById('mobileCta')
  ].filter(Boolean);

  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('menu-open', open);
    // o <html> é quem rola a página (overflow-x:clip no root), então a trava vai nele
    document.documentElement.style.overflow = open ? 'hidden' : '';
    // com o menu aberto, o resto da página sai do Tab e do leitor de tela
    outside.forEach(el => { el.inert = open; });
  };
  const closeMenu = () => setMenu(false);

  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));

  nav.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // clicar fora do painel (no fundo escurecido ou em qualquer outro ponto) fecha o menu
  document.addEventListener('click', (event) => {
    if (nav.classList.contains('is-open') && !nav.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  // se a tela crescer com o menu aberto (girar o celular, redimensionar), fecha e destrava a rolagem
  window.matchMedia('(min-width: 960px)').addEventListener('change', (event) => {
    if (event.matches) closeMenu();
  });
}

/* =========================================================
   REVELAÇÃO AO ROLAR
   ========================================================= */
function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || reduceMotion.matches) {
    items.forEach(el => el.classList.add('is-in'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  items.forEach(el => observer.observe(el));
}

/* =========================================================
   PROJETOS: prévia que segue o cursor (mouse) ou o foco (teclado)
   ========================================================= */
function initWorkPreview() {
  const preview = document.getElementById('workPreview');
  const index = document.getElementById('workIndex');
  if (!preview || !index) return;

  const img = preview.querySelector('img');
  const triggers = [...index.querySelectorAll('.work-trigger')];
  let x = 0, y = 0, targetX = 0, targetY = 0;
  let frame = null;
  let visible = false;

  if (finePointer.matches) {
    triggers.forEach(trigger => { new Image().src = trigger.dataset.preview; });
  }

  const loop = () => {
    const ease = reduceMotion.matches ? 1 : 0.16;
    x += (targetX - x) * ease;
    y += (targetY - y) * ease;
    preview.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    const moving = Math.abs(targetX - x) > 0.4 || Math.abs(targetY - y) > 0.4;
    frame = visible || moving ? requestAnimationFrame(loop) : null;
  };

  const place = (clientX, clientY, jump) => {
    const w = preview.offsetWidth;
    const h = preview.offsetHeight;
    // à direita e um pouco acima do cursor, sem sair da tela
    targetX = Math.min(Math.max(clientX + 32, 16), window.innerWidth - w - 16);
    targetY = Math.min(Math.max(clientY - h * 0.55, 16), window.innerHeight - h - 16);
    if (jump) { x = targetX; y = targetY; }
    if (!frame) frame = requestAnimationFrame(loop);
  };

  const show = (trigger) => {
    if (img.getAttribute('src') !== trigger.dataset.preview) img.src = trigger.dataset.preview;
    preview.classList.add('is-visible');
    visible = true;
  };

  const hide = () => {
    preview.classList.remove('is-visible');
    visible = false;
  };

  triggers.forEach(trigger => {
    trigger.addEventListener('pointerenter', (event) => {
      if (!finePointer.matches || event.pointerType !== 'mouse') return;
      place(event.clientX, event.clientY, !visible);
      show(trigger);
    });
    trigger.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'mouse' && visible) place(event.clientX, event.clientY);
    });
    trigger.addEventListener('focus', () => {
      if (!finePointer.matches || !trigger.matches(':focus-visible')) return;
      const rect = trigger.getBoundingClientRect();
      place(rect.left + rect.width * 0.5, rect.top + rect.height * 0.5, true);
      show(trigger);
    });
    trigger.addEventListener('blur', hide);
  });

  index.addEventListener('pointerleave', hide);
  window.addEventListener('scroll', () => {
    if (visible && !index.matches(':hover') && !index.contains(document.activeElement)) hide();
  }, { passive: true });
}

/* =========================================================
   CASES: folha lateral com problema, direção, solução e resultado
   sem suporte a <dialog>, o link abre o esboço no ar
   ========================================================= */
function initCases() {
  const dialog = document.getElementById('caseDialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const bodies = [...dialog.querySelectorAll('.case-body')];
  const closeBtn = document.getElementById('caseClose');
  let lastTrigger = null;

  const open = (id, trigger) => {
    bodies.forEach(body => {
      const match = body.dataset.case === id;
      const title = body.querySelector('.case-title');
      body.hidden = !match;
      if (match) {
        title.id = 'caseTitle';
      } else if (title.id === 'caseTitle') {
        title.removeAttribute('id');
      }
    });

    lastTrigger = trigger;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('case-open');
    document.documentElement.style.overflow = 'hidden';
    closeBtn.focus();
  };

  // a limpeza não depende do evento "close" do <dialog>, que alguns navegadores
  // só disparam quando a página está sendo desenhada
  const cleanup = () => {
    if (!document.body.classList.contains('case-open')) return;
    document.body.classList.remove('case-open');
    document.documentElement.style.overflow = '';
    if (lastTrigger) lastTrigger.focus({ preventScroll: true });
    lastTrigger = null;
  };

  const finish = () => {
    dialog.classList.remove('is-closing');
    if (dialog.open) dialog.close();
    cleanup();
  };

  const close = () => {
    if (!dialog.open || dialog.classList.contains('is-closing')) return;
    if (reduceMotion.matches) {
      finish();
      return;
    }
    dialog.classList.add('is-closing');
    dialog.addEventListener('animationend', finish, { once: true });
    setTimeout(finish, 450);
  };

  dialog.addEventListener('close', cleanup);

  // Esc fecha com a mesma animação do botão
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
    }
  });
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    close();
  });

  closeBtn.addEventListener('click', close);

  // clique fora da folha (no fundo escurecido) fecha
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const inside = event.clientX >= rect.left && event.clientX <= rect.right &&
      event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!inside) close();
  });

  document.querySelectorAll('.work-trigger[data-case]').forEach(trigger => {
    trigger.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
      event.preventDefault();
      open(trigger.dataset.case, trigger);
    });
  });
}

/* =========================================================
   FORMULÁRIO DE E-MAIL
   abre uma mensagem pronta no cliente de e-mail do visitante
   ========================================================= */
function initEmailForm() {
  const dialog = document.getElementById('emailDialog');
  const trigger = document.querySelector('[data-email-trigger]');
  const closeBtn = document.getElementById('emailClose');
  const form = document.getElementById('emailForm');
  if (!dialog || !trigger || !closeBtn || !form || typeof dialog.showModal !== 'function') return;

  const nameInput = form.elements.namedItem('name');

  const close = () => {
    if (dialog.open) dialog.close();
    document.body.classList.remove('case-open');
    document.documentElement.style.overflow = '';
    trigger.focus({ preventScroll: true });
  };

  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.showModal();
    document.body.classList.add('case-open');
    document.documentElement.style.overflow = 'hidden';
    nameInput.focus();
  });

  closeBtn.addEventListener('click', close);
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    close();
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('case-open');
    document.documentElement.style.overflow = '';
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = `Novo contato pelo site: ${data.get('name')}`;
    const body = [
      `Nome: ${data.get('name')}`,
      `E-mail: ${data.get('email')}`,
      `Telefone: ${data.get('phone')}`,
      '',
      'Mensagem:',
      data.get('message')
    ].join('\n');
    window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    close();
  });
}

/* =========================================================
   COMO TRABALHO: o trilho acompanha a rolagem
   ========================================================= */
function initSteps() {
  const steps = document.getElementById('steps');
  if (!steps) return;
  const items = [...steps.querySelectorAll('.step')];

  const paint = (progress) => {
    steps.style.setProperty('--progress', progress.toFixed(3));
    items.forEach((item, i) => item.classList.toggle('is-active', progress > i / items.length));
  };

  if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    paint(1);
    return;
  }

  let ticking = false;
  let inView = false;

  const update = () => {
    ticking = false;
    const rect = steps.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = vh * 0.85;   // começa quando o topo da lista chega a 85% da tela
    const end = vh * 0.4;      // completa quando o fim da lista passa de 40%
    const progress = (start - rect.top) / (rect.height + start - end);
    paint(Math.min(Math.max(progress, 0), 1));
  };

  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (inView) update();
  }, { rootMargin: '10% 0px 10% 0px' }).observe(steps);

  window.addEventListener('scroll', () => {
    if (inView && !ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });

  update();
}

/* =========================================================
   CTA FIXO NO CELULAR
   aparece quando os botões do topo saem da tela e some na seção de contato
   ========================================================= */
function initMobileCta() {
  const cta = document.getElementById('mobileCta');
  const heroActions = document.querySelector('.hero-actions');
  const contact = document.getElementById('contato');
  if (!cta || !heroActions || !contact) return;

  const state = { hero: true, contact: false };
  const update = () => cta.classList.toggle('is-visible', !state.hero && !state.contact);

  new IntersectionObserver(([entry]) => {
    state.hero = entry.isIntersecting;
    update();
  }).observe(heroActions);

  new IntersectionObserver(([entry]) => {
    state.contact = entry.isIntersecting;
    update();
  }, { rootMargin: '0px 0px -25% 0px' }).observe(contact);
}

/* =========================================================
   INIT
   ========================================================= */
applyConfig();
initHeader();
initActiveNav();
initMenu();
initReveal();
initWorkPreview();
initCases();
initEmailForm();
initSteps();
initMobileCta();
