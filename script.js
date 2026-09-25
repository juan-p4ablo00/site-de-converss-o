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
  let ticking = false;

  const update = () => {
    ticking = false;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
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
   PROJETOS · vitrine com estado
   Um palco fixo mostra a prova visual do projeto ativo enquanto o
   índice rola ao lado. Quem manda é sempre o índice: a lista vem do
   HTML, então basta acrescentar um <li> para o projeto entrar na
   experiência — contador, cortina e navegação se ajustam sozinhos.

   Fontes de troca: rolagem, mouse e teclado. Nenhuma delas é a única.
   ========================================================= */
function initShowcase() {
  const showcase = document.getElementById('showcase');
  const index = document.getElementById('workIndex');
  if (!showcase || !index) return;

  const rows = [...index.querySelectorAll('.work-row')];
  const triggers = rows.map(row => row.querySelector('.work-trigger'));
  if (!rows.length || triggers.some(t => !t)) return;

  const stage = showcase.querySelector('.showcase-stage');
  const foot = showcase.querySelector('.showcase-foot');
  const layers = [...showcase.querySelectorAll('.showcase-layer')];
  const elNow = showcase.querySelector('.showcase-now');
  const elAll = showcase.querySelector('.showcase-all');
  const elDesc = showcase.querySelector('.showcase-desc');

  const pad = (n) => String(n).padStart(2, '0');
  const srcOf = (i) => triggers[i].dataset.stage || '';
  const descOf = (i) => {
    const node = rows[i].querySelector('.work-desc');
    return node ? node.textContent.trim() : '';
  };
  // o palco só existe em tela larga; no celular a prova está na própria linha
  const palcoNoAr = () => !!stage && stage.offsetParent !== null && layers.length === 2;

  showcase.classList.add('is-live');
  if (elAll) elAll.textContent = pad(rows.length);

  let atual = -1;
  let vez = 0;
  let pintado = false;

  const frente = () => layers.find(l => l.classList.contains('is-front')) || layers[0];
  const fundo = () => layers.find(l => l !== frente());
  const limpar = (l) => l.classList.remove('is-in-next', 'is-in-prev', 'is-out-next', 'is-out-prev');

  layers.forEach(l => l.addEventListener('animationend', () => limpar(l)));

  const vizinhas = (i) => [i - 1, i + 1].forEach(k => {
    if (k >= 0 && k < rows.length && srcOf(k)) new Image().src = srcOf(k);
  });

  const escrever = (i) => {
    if (elNow) elNow.textContent = pad(i + 1);
    if (elDesc) elDesc.textContent = descOf(i);
  };

  async function trocarImagem(i, sentido, animar) {
    const src = srcOf(i);
    if (!src || !palcoNoAr()) return;

    const minhaVez = ++vez;
    const entra = animar ? fundo() : frente();

    if (entra.getAttribute('src') !== src) {
      entra.src = src;
      // sem decodificar antes, a cortina abre sobre um quadro em branco
      try { await entra.decode(); } catch (erro) { return; }
    }
    if (minhaVez !== vez) return;

    if (!animar) {
      limpar(entra);
      pintado = true;
      return;
    }

    const sai = frente();
    limpar(entra);
    limpar(sai);
    entra.classList.add('is-front');
    sai.classList.remove('is-front');
    void entra.offsetWidth;                       // reinicia a animação
    entra.classList.add('is-in-' + sentido);
    sai.classList.add('is-out-' + sentido);
    pintado = true;
  }

  function mostrar(i, animar) {
    if (i < 0 || i >= rows.length || i === atual) return;
    const sentido = i > atual ? 'next' : 'prev';
    const primeiro = atual === -1;
    atual = i;

    rows.forEach((row, k) => {
      row.classList.toggle('is-active', k === i);
      if (k === i) triggers[k].setAttribute('aria-current', 'true');
      else triggers[k].removeAttribute('aria-current');
    });

    if (!animar || primeiro || reduceMotion.matches) {
      escrever(i);
    } else if (foot) {
      const minhaVez = vez + 1;
      foot.classList.add('is-changing');
      setTimeout(() => {
        if (vez > minhaVez) return;               // outra troca assumiu
        escrever(i);
        foot.classList.remove('is-changing');
      }, 300);
    } else {
      escrever(i);
    }

    trocarImagem(i, sentido, animar && !primeiro);
    vizinhas(i);
  }

  /* --- rolagem: ativa a linha mais próxima da altura de leitura ---
     Medir o retângulo direto é mais confiável que observar interseção:
     funciona mesmo quando o navegador atrasa a entrega dos observadores. */
  let agendado = false;

  const perto = () => {
    const r = showcase.getBoundingClientRect();
    return r.bottom > -window.innerHeight * 0.3 && r.top < window.innerHeight * 1.3;
  };

  const porRolagem = () => {
    agendado = false;
    if (!perto()) return;

    // primeira chegada: pinta sem cortina, e só agora baixa a imagem grande
    const primeiraVez = atual === -1;
    if (!primeiraVez) {
      if (index.matches(':hover')) return;                 // o mouse tem prioridade
      if (index.contains(document.activeElement)) return;  // o teclado também
    }

    const linha = window.innerHeight * 0.45;
    let melhor = primeiraVez ? 0 : atual;
    let menor = Infinity;
    rows.forEach((row, k) => {
      const r = row.getBoundingClientRect();
      const d = Math.abs(r.top + r.height / 2 - linha);
      if (d < menor) { menor = d; melhor = k; }
    });
    mostrar(melhor, !primeiraVez);
  };

  const agendar = () => {
    if (!agendado) {
      agendado = true;
      requestAnimationFrame(porRolagem);
    }
  };

  window.addEventListener('scroll', agendar, { passive: true });

  /* --- mouse e teclado --- */
  triggers.forEach((trigger, k) => {
    trigger.addEventListener('pointerenter', (evento) => {
      if (evento.pointerType === 'mouse' && finePointer.matches) mostrar(k, true);
    });
    trigger.addEventListener('focus', () => mostrar(k, true));
  });

  /* --- ao passar para tela larga, o palco pode estar vazio --- */
  const larga = window.matchMedia('(min-width: 960px)');
  const conferir = () => {
    if (atual === -1) return;
    if (palcoNoAr() && !pintado) trocarImagem(atual, 'next', false);
  };
  if (typeof larga.addEventListener === 'function') larga.addEventListener('change', conferir);

  window.addEventListener('resize', () => { conferir(); agendar(); }, { passive: true });

  porRolagem();
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
initShowcase();
initCases();
initEmailForm();
initSteps();
initMobileCta();
