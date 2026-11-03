(() => {
  'use strict';

  const PHONE_LINK = 'tel:+74957897191';
  const PHONE_LABEL = '+7 (495) 789-71-91';
  const TELEGRAM_LINK = 'https://t.me/camgrifon_bot?start=kagrifon_site';
  const MAX_LINK = 'https://max.ru/id7707492286_bot';

  if (!document.body?.dataset.lightNative && !document.querySelector('link[data-design="recovery-light-v1"]')) {
    const lightTheme = document.createElement('link');
    lightTheme.rel = 'stylesheet';
    lightTheme.href = '/css/recovery-light.css?v=20261103';
    lightTheme.dataset.design = 'recovery-light-v1';
    document.head.appendChild(lightTheme);
  }

  const style = document.createElement('style');
  style.textContent = `
    .kag-recovery-contact {
      display: grid;
      gap: 12px;
      padding: 18px;
      border: 1px solid rgba(212, 175, 74, .45);
      border-radius: 8px;
      background: #fff;
      color: #172d3a;
      box-shadow: 0 12px 38px rgba(24, 59, 75, .07);
    }
    .kag-recovery-contact__title { font-weight: 700; font-size: 1.05rem; }
    .kag-recovery-contact__text { margin: 0; color: #52616b; line-height: 1.55; }
    .kag-recovery-contact__actions { display: flex; flex-wrap: wrap; gap: 10px; }
    .kag-recovery-contact__actions a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 10px 16px;
      border: 1px solid #d7b46a;
      border-radius: 6px;
      color: #183b4b;
      text-decoration: none;
      font-weight: 700;
    }
    .kag-recovery-contact__actions a:first-child {
      background: #183b4b;
      color: #fff;
    }
    .kag-recovery-float {
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 10000;
      display: flex;
      gap: 8px;
      padding: 8px;
      border: 1px solid rgba(212, 175, 74, .55);
      border-radius: 999px;
      background: rgba(255, 255, 255, .96);
      box-shadow: 0 12px 38px rgba(24, 59, 75, .18);
    }
    .kag-recovery-float a {
      padding: 10px 13px;
      border-radius: 999px;
      color: #183b4b;
      text-decoration: none;
      font: 700 14px/1.2 Arial, sans-serif;
      white-space: nowrap;
    }
    .kag-recovery-float a:first-child { background: #183b4b; color: #fff; }
    .kag-contact-btn--quiz { display: none !important; }
    @media (max-width: 560px) {
      .kag-recovery-float { left: 10px; right: 10px; justify-content: center; }
      .kag-recovery-float a { flex: 1; text-align: center; }
    }
  `;
  document.head.appendChild(style);

  const safeContactMarkup = `
    <div class="kag-recovery-contact" role="group" aria-label="Связаться с адвокатом">
      <div class="kag-recovery-contact__title">Свяжитесь с дежурным адвокатом напрямую</div>
      <p class="kag-recovery-contact__text">Онлайн-форма временно заменена прямой связью. Позвоните или напишите в Telegram — так обращение точно будет получено.</p>
      <div class="kag-recovery-contact__actions">
        <a href="${PHONE_LINK}">Позвонить ${PHONE_LABEL}</a>
        <a href="${TELEGRAM_LINK}" target="_blank" rel="noopener">Написать в Telegram</a>
        <a href="${MAX_LINK}" target="_blank" rel="noopener">Написать в MAX</a>
      </div>
    </div>
  `;

  const replaceLeadForms = () => {
    document.querySelectorAll([
      'form[data-crm="lead"]',
      'form.home-lead-form',
      'form.bfp-global-lead-form',
      'form[data-endpoint*="site-lead"]',
      'form[data-crm-form]',
      'form#joinForm',
      'form#kagQuizForm'
    ].join(',')).forEach((form) => {
      if (form.dataset.recoveryReplaced === '1') return;
      form.dataset.recoveryReplaced = '1';
      form.addEventListener('submit', (event) => event.preventDefault());
      form.removeAttribute('action');
      form.removeAttribute('onsubmit');
      form.setAttribute('novalidate', '');
      form.innerHTML = safeContactMarkup;
    });
  };

  replaceLeadForms();
  document.addEventListener('DOMContentLoaded', replaceLeadForms);

  document.addEventListener('error', (event) => {
    const target = event.target;
    if (target instanceof HTMLImageElement) {
      target.style.display = 'none';
      target.setAttribute('aria-hidden', 'true');
    }
  }, true);

  const hasBuiltInNavigation = Boolean(document.querySelector('script[src*="/js/nav.js"], script[src*="../js/nav.js"]'));
  if (!hasBuiltInNavigation && !document.querySelector('.kag-recovery-float')) {
    const floating = document.createElement('div');
    floating.className = 'kag-recovery-float';
    floating.setAttribute('aria-label', 'Быстрая связь');
    floating.innerHTML = `
      <a href="${PHONE_LINK}">Позвонить</a>
      <a href="${TELEGRAM_LINK}" target="_blank" rel="noopener">Telegram</a>
      <a href="${MAX_LINK}" target="_blank" rel="noopener">MAX</a>
    `;
    document.body.appendChild(floating);
  }
})();
