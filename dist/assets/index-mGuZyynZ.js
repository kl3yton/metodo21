(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`iconmenu`),t=document.getElementById(`navMenu`),n=document.getElementById(`overlay`),r=document.querySelectorAll(`.nav-link, .cta-button`);e.addEventListener(`click`,()=>{e.classList.toggle(`active`),t.classList.toggle(`active`),n.classList.toggle(`active`),document.body.style.overflow=t.classList.contains(`active`)?`hidden`:`auto`}),n.addEventListener(`click`,()=>{i()}),r.forEach(e=>{e.addEventListener(`click`,()=>{i()})});function i(){e.classList.remove(`active`),t.classList.remove(`active`),n.classList.remove(`active`),document.body.style.overflow=`auto`}let a=document.querySelector(`.navbar`);window.addEventListener(`scroll`,()=>{window.pageYOffset>60?a.classList.add(`scrolled`):a.classList.remove(`scrolled`)},{passive:!0}),document.querySelectorAll(`a[href^="#"]`).forEach(e=>{e.addEventListener(`click`,function(e){e.preventDefault();let t=this.getAttribute(`href`);if(t===`#`)return;let n=document.querySelector(t);n&&n.scrollIntoView({behavior:`smooth`,block:`start`})})});let o=[{title:`Plano Alimentar Estratégico`,desc:`Nada de dietas malucas. Você precisa de um plano funcional.`,icon:`<svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2m-6 9 2 2 4-4"/></svg>`},{title:`Treinos Direcionados`,desc:`Treinos claros, eficientes e possíveis de seguir mesmo com pouco tempo.`,icon:`<svg viewBox="0 0 24 24"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`},{title:`Acompanhamento Profissional`,desc:`Especialistas para te orientar e tirar dúvidas com segurança.`,icon:`<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`},{title:`Lista de Compras Inteligente`,desc:`Você sabe exatamente o que comprar e evita erros.`,icon:`<svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18m-5-4v4M8 2v4m0 6a4 4 0 0 0 8 0"/></svg>`}];function s(e){return`
        <div class="card">
          <div class="card-icon">${e.icon}</div>
          <p class="card-num">${e.num||``}</p>
          <h3 class="card-title">${e.title}</h3>
          <p class="card-desc">${e.desc}</p>
        </div>
      `}let c=document.getElementById(`sponsors-track`);c&&(c.innerHTML=[...o,...o,...o,...o].map(s).join(``));let l=document.getElementById(`logos-track`);l&&(l.innerHTML=l.innerHTML.repeat(4));let u=document.getElementById(`faqList`);u&&u.addEventListener(`click`,e=>{let t=e.target.closest(`.faq-question`);if(!t)return;let n=t.closest(`.faq-item`);if(!n)return;let r=n.classList.contains(`open`);document.querySelectorAll(`.faq-item.open`).forEach(e=>{e.classList.remove(`open`);let t=e.querySelector(`.faq-question`);t&&t.setAttribute(`aria-expanded`,`false`)}),r||(n.classList.add(`open`),t.setAttribute(`aria-expanded`,`true`))});let d=[{id:`lote-1`,nome:`1º Lote`,preco:`FINALIZADO`,inicio:`2026-04-06T00:00:00-03:00`,fim:`2026-04-14T23:59:59-03:00`,link:`https://kiwify.com.br`},{id:`lote-2`,nome:`2º Lote`,preco:`FINALIZADO`,inicio:`2026-04-15T00:00:00-03:00`,fim:`2026-04-21T23:59:59-03:00`,link:`https://kiwify.com.br`},{id:`lote-3`,nome:`3º Lote`,preco:`R$ 99,90`,inicio:`2026-04-21T10:00:00-03:00`,fim:`2026-05-05T23:59:59-03:00`,link:`https://pay.kiwify.com.br/AQC1Ig1`}],f=new Date;function p(e,t){return f<new Date(e)?`futuro`:f>new Date(t)?`passado`:`ativo`}function m(e){let t=p(e.inicio,e.fim);if(t===`passado`)return`
        <div class="lot lot--closed" style="margin-top: 18px;">
            <span class="lot__badge lot__badge--closed">Vagas encerradas</span>
            <p class="lot__name lot__text--muted">${e.nome}</p>
            <p class="lot__price lot__text--soft lot__price--struck"><span>${e.preco}</span></p>
            <hr class="lot__divider">
            <ul class="lot__features" style="margin-bottom: 12px;">
            ${h()}
            </ul>
            <p class="lot__note lot__text--soft" style="margin-top: 40px;">Esse lote foi exclusivo para as primeiras inscritas.</p>
            <div class="lot__btn lot__btn--disabled">Encerrado</div>
        </div>`;if(t===`ativo`)return`
        <div class="lot-shimmer-border"  style="margin-top: 18px;">
            <div class="lot lot--active">
            <span class="badge">Vagas abertas</span>
            <p class="lot__name lot__text--light">${e.nome}</p>
            <p class="lot__price lot__text--light"><span>${e.preco}</span></p>
            <hr class="lot__divider" style="border-color: rgba(242, 230, 223, 0.2);">
            <ul class="lot__features" style="margin-bottom: 16px;">
                ${g()}
            </ul>
            <p class="lot__callout lot__text--light" style="margin-top: 40px;">Você pode continuar adiando…<br>Ou pode começar sua transformação hoje.</p>
            <a href="${e.link}"><button class="lot__btn lot__btn--active">Garantir minha vaga agora</button></a>
            </div>
        </div>`;if(t===`futuro`)return`
        <div class="lot lot--soon" style="margin-top: 18px;">
            <p class="lot__name lot__text--muted">${e.nome}</p>
            <p class="lot__price lot__text--brand"><span>${e.preco}</span></p>
            <p class="lot__note lot__text--soft" style="margin-bottom: 4px; font-size: 11px; font-weight: 500; letter-spacing: 0.04em;">LIBERA EM BREVE</p>
            <hr class="lot__divider">
            <ul class="lot__features" style="margin-bottom: 12px;">
            ${h()}
            </ul>
            
            <div class="lot__btn lot__btn--soon">Libera em breve</div>
        </div>`}function h(){return[`Grupo Oficial exclusivo`,`Acompanhamento profissional`,`Treinos direcionados`].map(e=>`
        <li class="lot__feature">
        <span class="lot__check">
        
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F2E6DF"           viewBox="0 0 16 16"><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/></svg>

        </span>
        <span class="lot__text--soft">${e}</span>
        </li>`).join(``)}function g(){return[`Grupo Oficial exclusivo`,`Acompanhamento profissional`,`Treinos direcionados`].map(e=>`
        <li class="lot__feature">
        <span class="lot__check">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F2E6DF"           viewBox="0 0 16 16"><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/></svg>
        </span>
        <span class="lot__text--light">${e}</span>
        </li>`).join(``)}let _=document.querySelector(`.lots__list`);_&&(_.innerHTML=d.map(m).join(``));let v=document.querySelector(`.wpp-btn-wrapper`),y=document.getElementById(`home`);v&&y&&window.addEventListener(`scroll`,()=>{y.getBoundingClientRect().bottom<0?(v.style.opacity=`1`,v.style.pointerEvents=`all`):(v.style.opacity=`0`,v.style.pointerEvents=`none`)},{passive:!0})});