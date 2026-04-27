document.addEventListener('DOMContentLoaded', () => {
    // Nav Menu JS
    const iconmenu = document.getElementById('iconmenu');
    const navMenu = document.getElementById('navMenu');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('.nav-link, .cta-button');

    // Toggle menu
    iconmenu.addEventListener('click', () => {
        iconmenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');

        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Fechar menu ao clicar no overlay
    overlay.addEventListener('click', () => {
        closeMenu();
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    function closeMenu() {
        iconmenu.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Efeito de scroll na navbar
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Cards JS
    const cards = [
        {
            title: 'Plano Alimentar Estratégico',
            desc: 'Nada de dietas malucas. Você precisa de um plano funcional.',
            icon: `<svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2m-6 9 2 2 4-4"/></svg>`
        },
        {
            title: 'Treinos Direcionados',
            desc: 'Treinos claros, eficientes e possíveis de seguir mesmo com pouco tempo.',
            icon: `<svg viewBox="0 0 24 24"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`
        },
        {
            title: 'Acompanhamento Profissional',
            desc: 'Especialistas para te orientar e tirar dúvidas com segurança.',
            icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`
        },
        {
            title: 'Lista de Compras Inteligente',
            desc: 'Você sabe exatamente o que comprar e evita erros.',
            icon: `<svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18m-5-4v4M8 2v4m0 6a4 4 0 0 0 8 0"/></svg>`
        },
    ];

    function makeCard(c) {
        return `
        <div class="card">
          <div class="card-icon">${c.icon}</div>
          <p class="card-num">${c.num || ''}</p>
          <h3 class="card-title">${c.title}</h3>
          <p class="card-desc">${c.desc}</p>
        </div>
      `;
    }

    const track = document.getElementById('sponsors-track');
    if (track) {
        // Duplica 4x para garantir loop suave em qualquer largura de tela
        const repeated = [...cards, ...cards, ...cards, ...cards];
        track.innerHTML = repeated.map(makeCard).join('');
    }

    // Sponsors Track
    const sponsorsTrack = document.getElementById('logos-track');
    if (sponsorsTrack) {
        const original = sponsorsTrack.innerHTML;
        sponsorsTrack.innerHTML = original.repeat(4);
    }

    // FAQ JS
    const faqList = document.getElementById('faqList');
    if (faqList) {
        faqList.addEventListener('click', e => {
            const btn = e.target.closest('.faq-question');
            if (!btn) return;
            const item = btn.closest('.faq-item');
            if (!item) return;
            const isOpen = item.classList.contains('open');

            // Close all
            document.querySelectorAll('.faq-item.open').forEach(el => {
                el.classList.remove('open');
                const questionBtn = el.querySelector('.faq-question');
                if (questionBtn) questionBtn.setAttribute('aria-expanded', 'false');
            });

            // Open clicked (unless it was already open)
            if (!isOpen) {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    }

    // lotes com valores
    const lotes = [
    {
        id: 'lote-1',
        nome: '1º Lote',
        preco: 'FINALIZADO',
        inicio: '2026-04-06T00:00:00-03:00', /*ano - mes - data - h - m - s (-03 é o fuso)*/
        fim: '2026-04-14T23:59:59-03:00',
        link: 'https://kiwify.com.br'
    },
    {
        id: 'lote-2',
        nome: '2º Lote',
        preco: 'FINALIZADO',
        inicio: '2026-04-15T00:00:00-03:00',
        fim: '2026-04-21T23:59:59-03:00',
        link: 'https://kiwify.com.br'
    },
    {
        id: 'lote-3',
        nome: '3º Lote',
        preco: 'R$ 99,90',
        inicio: '2026-04-21T10:00:00-03:00',
        fim: '2026-05-05T23:59:59-03:00',
        link: 'https://pay.kiwify.com.br/AQC1Ig1'
    },
    ];

    const hoje = new Date();

    function getStatus(inicio, fim) {
    if (hoje < new Date(inicio)) return 'futuro';
    if (hoje > new Date(fim)) return 'passado';
    return 'ativo';
    }

    function renderLote(lote) {
    const status = getStatus(lote.inicio, lote.fim);

    if (status === 'passado') {
        return `
        <div class="lot lot--closed" style="margin-top: 18px;">
            <span class="lot__badge lot__badge--closed">Vagas encerradas</span>
            <p class="lot__name lot__text--muted">${lote.nome}</p>
            <p class="lot__price lot__text--soft lot__price--struck"><span>${lote.preco}</span></p>
            <hr class="lot__divider">
            <ul class="lot__features" style="margin-bottom: 12px;">
            ${featuresClosed()}
            </ul>
            <p class="lot__note lot__text--soft" style="margin-top: 40px;">Esse lote foi exclusivo para as primeiras inscritas.</p>
            <div class="lot__btn lot__btn--disabled">Encerrado</div>
        </div>`;
    }

    if (status === 'ativo') {
        return `
        <div class="lot-shimmer-border"  style="margin-top: 18px;">
            <div class="lot lot--active">
            <span class="badge">Vagas abertas</span>
            <p class="lot__name lot__text--light">${lote.nome}</p>
            <p class="lot__price lot__text--light"><span>${lote.preco}</span></p>
            <hr class="lot__divider" style="border-color: rgba(242, 230, 223, 0.2);">
            <ul class="lot__features" style="margin-bottom: 16px;">
                ${featuresActive()}
            </ul>
            <p class="lot__callout lot__text--light" style="margin-top: 40px;">Você pode continuar adiando…<br>Ou pode começar sua transformação hoje.</p>
            <a href="${lote.link}"><button class="lot__btn lot__btn--active">Garantir minha vaga agora</button></a>
            </div>
        </div>`;
    }

    if (status === 'futuro') {
        return `
        <div class="lot lot--soon" style="margin-top: 18px;">
            <p class="lot__name lot__text--muted">${lote.nome}</p>
            <p class="lot__price lot__text--brand"><span>${lote.preco}</span></p>
            <p class="lot__note lot__text--soft" style="margin-bottom: 4px; font-size: 11px; font-weight: 500; letter-spacing: 0.04em;">LIBERA EM BREVE</p>
            <hr class="lot__divider">
            <ul class="lot__features" style="margin-bottom: 12px;">
            ${featuresClosed()}
            </ul>
            
            <div class="lot__btn lot__btn--soon">Libera em breve</div>
        </div>`;
    }
    }

    // SVGs dos checks
    function featuresClosed() {
    const items = ['Grupo Oficial exclusivo', 'Acompanhamento profissional', 'Treinos direcionados'];
    return items.map(item => `
        <li class="lot__feature">
        <span class="lot__check">
        
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F2E6DF"           viewBox="0 0 16 16"><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/></svg>

        </span>
        <span class="lot__text--soft">${item}</span>
        </li>`).join('');
    }

    function featuresActive() {
    const items = ['Grupo Oficial exclusivo', 'Acompanhamento profissional', 'Treinos direcionados'];
    return items.map(item => `
        <li class="lot__feature">
        <span class="lot__check">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F2E6DF"           viewBox="0 0 16 16"><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/></svg>
        </span>
        <span class="lot__text--light">${item}</span>
        </li>`).join('');
    }

    // Render lots into the DOM
    const lotsList = document.querySelector('.lots__list');
    if (lotsList) {
        lotsList.innerHTML = lotes.map(renderLote).join('');
    }

    // wpp
    const wppBtn = document.querySelector('.wpp-btn-wrapper');
    const home = document.getElementById('home');

    if (wppBtn && home) {
    window.addEventListener('scroll', () => {
        const homeBottom = home.getBoundingClientRect().bottom;
        if (homeBottom < 0) {
        wppBtn.style.opacity = '1';
        wppBtn.style.pointerEvents = 'all';
        } else {
        wppBtn.style.opacity = '0';
        wppBtn.style.pointerEvents = 'none';
        }
    }, { passive: true });
    }
});