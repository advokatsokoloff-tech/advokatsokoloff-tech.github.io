document.addEventListener("DOMContentLoaded", function () {

  // === KAGRIFON GENERATED ARTICLE CLASS 2026-05-11 START ===
  if (location.pathname.indexOf('/articles/') !== -1) {
    document.body.classList.add('kag-generated-article');
  }
  // === KAGRIFON GENERATED ARTICLE CLASS 2026-05-11 END ===
  if (!document.getElementById('kagrifon-critical-style')) {
    var st = document.createElement('style');
    st.id = 'kagrifon-critical-style';
    st.textContent = `
      html,body{width:100%!important;max-width:100%!important;overflow-x:hidden!important;background-color:#050a14!important}
      body{margin:0!important;color:#f8f4ee!important;background-image:linear-gradient(180deg,rgba(5,10,20,.06) 0%,rgba(5,10,20,.18) 48%,rgba(5,10,20,.44) 100%),linear-gradient(90deg,rgba(5,10,20,.20) 0%,rgba(5,10,20,.03) 50%,rgba(5,10,20,.18) 100%),url('/assets/img/moscow-hero-20260510.png')!important;background-position:center bottom!important;background-size:cover!important;background-repeat:no-repeat!important;background-attachment:fixed!important}
      body:before,body:after,.hero:before,.hero:after,.page-hero:before,.page-hero:after,.hero-bg{display:none!important;content:none!important;background:transparent!important}
      #nav.site-nav,#nav{box-sizing:border-box!important;position:fixed!important;top:0!important;left:0!important;right:0!important;width:100vw!important;max-width:100vw!important;height:84px!important;padding:0 clamp(20px,3.2vw,64px)!important;display:flex!important;align-items:center!important;gap:clamp(18px,2vw,36px)!important;background:rgba(5,10,20,.985)!important;border-bottom:1px solid rgba(201,168,76,.34)!important;z-index:10000!important}
      #nav a{text-decoration:none!important}
      #nav .nav-brand{display:flex!important;align-items:center!important;gap:14px!important;min-width:300px!important;max-width:430px!important;color:#f8f4ee!important;text-decoration:none!important}
      #nav .nav-logo-img{display:block!important;width:auto!important;height:58px!important;max-width:92px!important;object-fit:contain!important;object-position:center!important;flex:0 0 auto!important}
      #nav .nav-brand-text{display:flex!important;flex-direction:column!important;gap:5px!important;min-width:0!important}
      #nav .nav-brand-title{font-family:Georgia,'Times New Roman',serif!important;font-size:1.34rem!important;font-weight:800!important;line-height:1.02!important;letter-spacing:.035em!important;color:#fff7e8!important;white-space:nowrap!important}
      #nav .nav-brand-sub{font:800 .62rem/1.1 Inter,Arial,sans-serif!important;letter-spacing:.16em!important;text-transform:uppercase!important;color:#c9a84c!important;white-space:nowrap!important}
      #nav .nav-menu{flex:1 1 auto!important;min-width:0!important;display:flex!important;align-items:center!important;justify-content:flex-end!important;gap:0!important;margin:0!important;padding:0!important;list-style:none!important}
      #nav .nav-link{display:flex!important;align-items:center!important;height:84px!important;color:rgba(255,255,255,.88)!important;font:800 clamp(.62rem,.56vw,.74rem)/1 Inter,Arial,sans-serif!important;letter-spacing:.07em!important;text-transform:uppercase!important;padding:0 clamp(.40rem,.52vw,.70rem)!important;white-space:nowrap!important}
      #nav .nav-link:hover,#nav .nav-link-spb{color:#c9a84c!important}

      /* KAGRIFON NAV DROPDOWN FIX 2026-05-11 */
      #nav .nav-item{position:relative!important;display:flex!important;align-items:center!important;height:84px!important;flex:0 0 auto!important}
      #nav .nav-drop{display:none!important;position:absolute!important;top:84px!important;left:0!important;min-width:286px!important;max-width:340px!important;padding:10px 0!important;background:rgba(5,10,20,.992)!important;border:1px solid rgba(201,168,76,.34)!important;box-shadow:0 22px 60px rgba(0,0,0,.52)!important;z-index:10020!important;white-space:normal!important;overflow:hidden!important}
      #nav .nav-item:hover>.nav-drop,#nav .nav-item:focus-within>.nav-drop{display:block!important}
      #nav .nav-drop a{display:block!important;width:100%!important;box-sizing:border-box!important;padding:11px 18px!important;color:rgba(248,244,238,.90)!important;font:700 13px/1.25 Inter,Arial,sans-serif!important;letter-spacing:.02em!important;text-transform:none!important;white-space:normal!important;text-decoration:none!important;background:transparent!important}
      #nav .nav-drop a:hover{color:#c9a84c!important;background:rgba(201,168,76,.08)!important}
      #nav .nav-drop-sep{display:block!important;height:1px!important;margin:8px 0!important;background:rgba(201,168,76,.22)!important}
      #nav .nav-right{display:flex!important;align-items:center!important;margin-left:8px!important;flex:0 0 auto!important}
      #nav .nav-phone{color:#fff7e8!important;font:800 .84rem/1 Inter,Arial,sans-serif!important;letter-spacing:.05em!important;white-space:nowrap!important}
      #nav .nav-cta{display:none!important}
      #nav .hamburger{display:none!important;width:48px!important;height:44px!important;margin-left:auto!important;border:1px solid rgba(201,168,76,.45)!important;border-radius:8px!important;background:linear-gradient(145deg,rgba(14,22,37,.86),rgba(5,10,20,.72))!important;box-shadow:0 14px 32px rgba(0,0,0,.28),inset 0 1px 0 rgba(255,255,255,.08)!important;align-items:center!important;justify-content:center!important;flex-direction:column!important;gap:5px!important;padding:0!important;transition:border-color .18s ease,background .18s ease!important}
      #nav .hamburger span{display:block!important;width:22px!important;height:2px!important;border-radius:2px!important;background:#fff7e8!important;transition:transform .18s ease,opacity .18s ease,width .18s ease!important}
      #nav .hamburger.open{border-color:rgba(232,208,132,.82)!important;background:linear-gradient(145deg,rgba(24,35,55,.94),rgba(7,13,24,.88))!important}
      #nav .hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)!important}
      #nav .hamburger.open span:nth-child(2){opacity:0!important;width:12px!important}
      #nav .hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)!important}
      .mobile-nav{position:fixed!important;top:84px!important;left:50%!important;right:auto!important;width:min(100vw,460px)!important;height:calc(100dvh - 84px)!important;max-height:calc(100vh - 84px)!important;box-sizing:border-box!important;overflow:auto!important;overscroll-behavior:contain!important;background:radial-gradient(circle at 50% 0,rgba(44,59,86,.38),rgba(5,10,20,.98) 46%),linear-gradient(180deg,rgba(8,15,28,.985),rgba(3,7,15,.992))!important;border:1px solid rgba(201,168,76,.24)!important;border-top:0!important;box-shadow:0 30px 80px rgba(0,0,0,.52)!important;z-index:9999!important;transform:translate(-50%,-112%)!important;transition:transform .24s ease!important;padding:16px!important;-webkit-overflow-scrolling:touch!important}
      .mobile-nav.open{transform:translate(-50%,0)!important}
      .mobile-nav__urgent{display:block!important;margin-bottom:12px!important;padding:12px!important;border:1px solid rgba(201,168,76,.24)!important;border-radius:10px!important;background:linear-gradient(145deg,rgba(20,33,54,.78),rgba(6,12,23,.72))!important}
      .mobile-nav__urgent b{display:block!important;color:#fff7e8!important;font:900 13px/1.2 Inter,Arial,sans-serif!important;letter-spacing:.03em!important}
      .mobile-nav__urgent span{display:block!important;margin-top:4px!important;color:rgba(216,226,238,.66)!important;font:600 11px/1.35 Inter,Arial,sans-serif!important}
      .mobile-nav__top{display:grid!important;grid-template-columns:1fr 1fr!important;gap:8px!important;margin-bottom:14px!important}
      .mobile-nav__call,.mobile-nav__quiz,.mobile-nav__messenger{display:flex!important;align-items:center!important;justify-content:center!important;min-height:46px!important;border-radius:8px!important;border:1px solid rgba(201,168,76,.34)!important;text-align:center!important;text-decoration:none!important;font:900 11px/1.15 Inter,Arial,sans-serif!important;letter-spacing:.08em!important;text-transform:uppercase!important}
      .mobile-nav__call{color:#07101d!important;background:linear-gradient(135deg,#f0d98a,#c9a84c 56%,#a0734a)!important}
      .mobile-nav__quiz{color:#fff7e8!important;background:rgba(255,255,255,.055)!important;cursor:pointer!important}
      .mobile-nav__messenger--tg{color:#fff!important;background:linear-gradient(145deg,rgba(38,153,219,.98),rgba(7,34,62,.92))!important;border-color:rgba(124,201,246,.48)!important}
      .mobile-nav__messenger--max{color:#fff!important;background:linear-gradient(145deg,rgba(111,99,238,.98),rgba(36,104,226,.90))!important;border-color:rgba(151,165,255,.48)!important}
      .mobile-nav__section{padding:13px 0 15px!important;border-top:1px solid rgba(201,168,76,.20)!important}
      .mobile-nav__section:first-of-type{border-top-color:rgba(201,168,76,.34)!important}
      .mobile-nav__title{display:block!important;margin:0 0 9px!important;color:#c9a84c!important;font:900 10px/1.1 Inter,Arial,sans-serif!important;letter-spacing:.15em!important;text-transform:uppercase!important}
      .mobile-nav__grid{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px!important}
      .mobile-nav__grid a,.mobile-nav__single{display:flex!important;align-items:center!important;min-height:42px!important;box-sizing:border-box!important;padding:10px 11px!important;border:1px solid rgba(255,255,255,.075)!important;border-radius:8px!important;background:rgba(255,255,255,.035)!important;color:#f8f4ee!important;text-decoration:none!important;font:800 13px/1.18 Inter,Arial,sans-serif!important;letter-spacing:0!important;overflow-wrap:anywhere!important}
      .mobile-nav__grid a:hover,.mobile-nav__grid a:focus-visible,.mobile-nav__single:hover,.mobile-nav__single:focus-visible{border-color:rgba(201,168,76,.42)!important;background:rgba(201,168,76,.09)!important;outline:none!important}
      .mobile-nav__single{width:100%!important;margin-top:8px!important;justify-content:center!important;text-align:center!important;color:#d9c078!important}
      body.mobile-menu-open .kag-contact-stack{display:none!important}
      .container,.hero .container,.page-hero .container,.breadcrumb.container,.content.container{width:min(100% - 48px,1220px)!important;max-width:1220px!important;margin-left:auto!important;margin-right:auto!important;padding-left:0!important;padding-right:0!important;overflow:visible!important}
      .hero,.page-hero,body.legacy-article>.hero{width:100vw!important;max-width:100vw!important;min-height:min(760px,88vh)!important;display:flex!important;align-items:center!important;justify-content:center!important;overflow:hidden!important;padding-top:132px!important;padding-bottom:76px!important;background:rgba(5,10,20,.18)!important;background-image:none!important}
      .page-hero,body.legacy-article>.hero{min-height:min(650px,78vh)!important}
      .hero-content,.page-hero-content,.page-hero .container>*,body.legacy-article>.hero .container>*{width:min(100%,880px)!important;max-width:880px!important;margin-left:auto!important;margin-right:auto!important;text-align:center!important;transform:none!important;position:relative!important;z-index:2!important}
      .hero-label,.page-hero-label,.section-tag,.page-hero .section-tag{display:flex!important;justify-content:center!important;align-items:center!important;gap:10px!important;width:100%!important;max-width:100%!important;text-align:center!important;white-space:normal!important;overflow-wrap:anywhere!important;line-height:1.45!important}
      .hero-title,.page-hero h1,body.legacy-article>.hero h1,.section-title{width:100%!important;max-width:980px!important;margin-left:auto!important;margin-right:auto!important;text-align:center!important;white-space:normal!important;overflow-wrap:break-word!important;word-break:normal!important;hyphens:auto!important;text-wrap:balance!important}
      .hero-title{font-size:clamp(3.2rem,6.2vw,6.9rem)!important;line-height:.95!important}
      .page-hero h1,body.legacy-article>.hero h1{font-size:clamp(3rem,5.4vw,6.2rem)!important;line-height:1.02!important}
      .hero-title strong,.page-hero h1 strong,.page-hero h1 em,.section-title em{display:block!important;font-size:.78em!important;line-height:1.05!important}
      .hero-desc,.page-hero-desc,.page-hero p,body.legacy-article>.hero p,.section-lead{width:min(100%,760px)!important;max-width:760px!important;margin-left:auto!important;margin-right:auto!important;text-align:center!important;overflow-wrap:break-word!important;word-break:normal!important;hyphens:auto!important}
      .hero-ctas,.cta-actions{justify-content:center!important}
      .hero-office{width:min(100%,760px)!important;max-width:760px!important;margin-left:auto!important;margin-right:auto!important;white-space:normal!important;text-align:center!important;overflow-wrap:anywhere!important;line-height:1.55!important}
      .hero-stats{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;width:min(100%,760px)!important;max-width:760px!important;margin-left:auto!important;margin-right:auto!important;overflow:hidden!important}
      section,.page-section,.content-section{position:relative!important;background:rgba(5,10,20,.40)!important}
      section[style*="background:var(--bg2)"],section[style*="background: var(--bg2)"]{background:rgba(8,15,28,.50)!important}
      .practice-card,.case-card,.article-item,.team-card,.lawyer-card,.service-card,.why-item,.faq-item,.contact-card,.cta-banner{background-color:rgba(5,10,20,.70)!important;border-color:rgba(201,168,76,.25)!important}
      .sticky-tg,.w-trigger,.w-modal,.w-btn,.floating-button,.float-button,[style*="bottom:90px"],[style*="bottom: 90px"]{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important}
      @media(max-width:1280px){#nav .nav-menu,#nav .nav-right{display:none!important}#nav .hamburger{display:flex!important}#nav .nav-brand{min-width:0!important;max-width:calc(100% - 68px)!important}}
      @media(max-width:1200px){.container,.hero .container,.page-hero .container,.breadcrumb.container,.content.container{width:100%!important;max-width:100%!important;padding-left:20px!important;padding-right:20px!important;overflow:hidden!important}.hero,.page-hero,body.legacy-article>.hero{width:100vw!important;max-width:100vw!important;min-height:auto!important;padding-top:142px!important;padding-bottom:66px!important}.hero-content,.page-hero-content,.page-hero .container>*,body.legacy-article>.hero .container>*{width:100%!important;max-width:100%!important;text-align:center!important}.hero-title{font-size:clamp(2.4rem,8vw,4.2rem)!important;line-height:1.06!important}.page-hero h1,body.legacy-article>.hero h1{font-size:clamp(2.2rem,7.2vw,3.8rem)!important;line-height:1.10!important}.section-title{font-size:clamp(2rem,6.8vw,3.5rem)!important;line-height:1.12!important}.hero-stats{grid-template-columns:1fr 1fr!important}}
      @media(max-width:600px){#nav.site-nav,#nav{height:72px!important;padding:0 12px!important}#nav .nav-brand{width:100%!important;min-width:0!important;max-width:100%!important;justify-content:center!important;gap:10px!important;padding-right:50px!important}#nav .nav-logo-img{width:auto!important;height:44px!important;max-width:76px!important;object-fit:contain!important}#nav .nav-brand-text{display:block!important;text-align:left!important}#nav .nav-brand-title{font-size:13px!important;line-height:1.05!important;white-space:normal!important}#nav .nav-brand-sub{font-size:7px!important;line-height:1.1!important;letter-spacing:.12em!important;white-space:normal!important}#nav .hamburger{position:absolute!important;right:10px!important;width:40px!important;height:40px!important}.mobile-nav{top:72px!important;height:calc(100dvh - 72px)!important;max-height:calc(100vh - 72px)!important;width:100vw!important;padding:14px 12px 24px!important}.mobile-nav__grid{gap:7px!important}.mobile-nav__grid a,.mobile-nav__single{min-height:40px!important;padding:9px 10px!important;font-size:12.5px!important}.container,.hero .container,.page-hero .container,.breadcrumb.container,.content.container{padding-left:16px!important;padding-right:16px!important}.hero,.page-hero,body.legacy-article>.hero{padding-top:126px!important;padding-bottom:54px!important;min-height:auto!important}.hero-label,.page-hero-label,.section-tag{font-size:6.5px!important;letter-spacing:.10em!important;padding:0 10px!important}.hero-title,.page-hero h1,body.legacy-article>.hero h1{font-size:23px!important;line-height:1.16!important;max-width:330px!important;width:100%!important}.hero-title strong,.page-hero h1 strong,.page-hero h1 em,.section-title em{font-size:.78em!important;line-height:1.16!important;max-width:330px!important;width:100%!important}.hero-desc,.page-hero-desc,.page-hero p,body.legacy-article>.hero p{font-size:13px!important;line-height:1.62!important;max-width:330px!important}.hero-office{font-size:11px!important;line-height:1.45!important;max-width:330px!important;width:100%!important;padding:12px 10px!important}.hero-stats{grid-template-columns:1fr!important;max-width:330px!important;width:100%!important}.section-title{font-size:22px!important;line-height:1.18!important;max-width:330px!important;overflow-wrap:anywhere!important}.section-lead{font-size:13px!important;line-height:1.6!important;max-width:330px!important}}
`;
    document.head.appendChild(st);
  }

  // KAGRIFON duplicate nav guard
  if (document.getElementById('nav')) return;

  var navHTML =
    '<nav id="nav" class="site-nav">' +
      '<a href="/" class="nav-brand" aria-label="МКА Грифон">' +
        '<img src="/assets/img/kagrifon-brand-griffon-premium-20260523.png" alt="МКА Грифон" class="nav-logo-img">' +
        '<div class="nav-brand-text">' +
          '<span class="nav-brand-title">МКА «Грифон»</span>' +
          '<span class="nav-brand-sub">Москва · 65+ адвокатов · 24/7</span>' +
        '</div>' +
      '</a>' +
      '<ul class="nav-menu">' +
        '<li class="nav-item"><a href="/ugolovnye.html" class="nav-link has-drop">Уголовные</a><div class="nav-drop">' +
          '<a href="/narkotiki-228.html">Ст. 228 — Наркотики</a><a href="/moshennichestvo-159.html">Ст. 159 — Мошенничество</a><a href="/krazha-158.html">Ст. 158-162 — Хищения</a><a href="/vzyatki-290.html">Ст. 290-291 — Взятки</a><a href="/dtp-264.html">Ст. 264 — ДТП</a><a href="/dolzhnostnye-285.html">Должностные</a><a href="/ekonomicheskie.html">Экономические</a><div class="nav-drop-sep"></div><a href="/ugolovnye.html">Все уголовные дела →</a>' +
        '</div></li>' +
        '<li class="nav-item"><a href="/grazhdanskie.html" class="nav-link has-drop">Гражданские</a><div class="nav-drop">' +
          '<a href="/semejnye.html">Семейные споры</a><a href="/advokat-po-nasledstvennym-sporam-moskva.html">Наследство</a><a href="/zhilishchnye.html">Жилищные споры</a><a href="/trudovye.html">Трудовые споры</a><a href="/zashchita-prav.html">Защита прав потребителей</a><div class="nav-drop-sep"></div><a href="/grazhdanskie.html">Все гражданские дела →</a>' +
        '</div></li>' +
        '<li class="nav-item"><a href="/arbitrazh.html" class="nav-link">Арбитраж</a></li>' +
        '<li class="nav-item"><a href="/bankrotstvo.html" class="nav-link">Банкротство</a></li>' +
        '<li class="nav-item"><a href="/autsorsing.html" class="nav-link">Аутсорсинг</a></li>' +
        '<li class="nav-item"><a href="/nalogovye.html" class="nav-link">Налоги</a></li>' +
        '<li class="nav-item"><a href="/komanda.html" class="nav-link has-drop">Команда</a><div class="nav-drop"><a href="/komanda.html">Наши адвокаты</a><a href="/o-kollegii.html">О коллегии</a><a href="/otzyvy-o-kollegii-advokatov-grifon.html">Отзывы и репутация</a><a href="/vakansii.html">Вступить в коллегию</a></div></li>' +
        '<li class="nav-item"><a href="/stati.html" class="nav-link">Статьи</a></li>' +
        '<li class="nav-item"><a href="/kontakty.html" class="nav-link">Контакты</a></li>' +
        '<li class="nav-item"><a href="/kontakty.html" class="nav-link has-drop nav-link-spb">Филиалы</a><div class="nav-drop"><a href="https://kasokolov.ru/" target="_blank">Санкт-Петербург</a><a href="https://griffin-saratov.ru/" target="_blank">Саратов</a></div></li>' +
      '</ul>' +
      '<div class="nav-right"><a href="tel:+74957897191" class="nav-phone">+7 (495) 789-71-91</a></div>' +
      '<button class="hamburger" id="hamburger" aria-label="Открыть меню"><span></span><span></span><span></span></button>' +
    '</nav>';

  var mobileHTML =
    '<div class="mobile-nav" id="mobileNav" aria-hidden="true">' +
      '<div class="mobile-nav__urgent"><b>Срочная связь с адвокатом</b><span>Задержание, обыск, допрос, арест — обращения разбираются в приоритетном порядке.</span></div>' +
      '<div class="mobile-nav__top"><a href="https://t.me/camgrifon_bot?start=kagrifon_site" target="_blank" rel="noopener" class="mobile-nav__messenger mobile-nav__messenger--tg">Telegram</a><a href="https://max.ru/id7707492286_bot" target="_blank" rel="noopener" class="mobile-nav__messenger mobile-nav__messenger--max">MAX</a><a href="tel:+74957897191" class="mobile-nav__call">Позвонить</a><button type="button" class="mobile-nav__quiz">Обращение</button></div>' +
      '<div class="mobile-nav__section"><span class="mobile-nav__title">Главное</span><div class="mobile-nav__grid"><a href="/">Главная</a><a href="/komanda.html">Команда</a><a href="/otzyvy-o-kollegii-advokatov-grifon.html">Отзывы</a><a href="/kontakty.html">Контакты</a></div></div>' +
      '<div class="mobile-nav__section"><span class="mobile-nav__title">Уголовная защита</span><div class="mobile-nav__grid"><a href="/ugolovnye.html">Все уголовные дела</a><a href="/st105.html">Ст. 105 УК РФ</a><a href="/narkotiki-228.html">Ст. 228</a><a href="/moshennichestvo-159.html">Ст. 159</a><a href="/vzyatki-290.html">Ст. 290-291</a><a href="/krazha-158.html">Кража и разбой</a><a href="/dtp-264.html">ДТП</a><a href="/ekonomicheskie.html">Экономические</a></div></div>' +
      '<div class="mobile-nav__section"><span class="mobile-nav__title">Гражданские и бизнес</span><div class="mobile-nav__grid"><a href="/grazhdanskie.html">Гражданские дела</a><a href="/semejnye.html">Семейные споры</a><a href="/advokat-po-nasledstvennym-sporam-moskva.html">Наследство</a><a href="/biznes.html">Бизнесу</a><a href="/arbitrazh.html">Арбитраж</a><a href="/bankrotstvo.html">Банкротство</a><a href="/autsorsing.html">Аутсорсинг</a><a href="/nalogovye.html">Налоги</a></div></div>' +
      '<div class="mobile-nav__section"><span class="mobile-nav__title">Филиалы</span><div class="mobile-nav__grid"><a href="https://kasokolov.ru/" target="_blank">Санкт-Петербург</a><a href="https://griffin-saratov.ru/" target="_blank">Саратов</a></div></div>' +
      '<div class="mobile-nav__section"><span class="mobile-nav__title">Материалы</span><div class="mobile-nav__grid"><a href="/stati.html">Статьи</a><a href="/vakansii.html">Вакансии</a></div></div>' +
    '</div>';

  var footerHTML =
    '<footer>' +
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div><a href="/" class="footer-logo"><img src="/img/logo.png" alt="МКА Грифон"></a><p class="footer-about">Московская коллегия адвокатов «Грифон» — юридическая помощь по уголовным, гражданским, семейным, арбитражным делам, банкротству и защите бизнеса.</p><div class="footer-contacts"><a href="tel:+74957897191">+7 (495) 789-71-91</a><a href="mailto:info@kagrifon.ru">info@kagrifon.ru</a><span>г. Москва, Дмитровский проезд, д. 4, к. 3<br>Пн–Пт 09:00–18:00 · срочно — 24/7</span></div></div>' +
          '<div><span class="footer-col-title">Уголовные дела</span><ul class="footer-links"><li><a href="/narkotiki-228.html">Наркотики (ст. 228)</a></li><li><a href="/moshennichestvo-159.html">Мошенничество</a></li><li><a href="/vzyatki-290.html">Взятки</a></li><li><a href="/krazha-158.html">Кража и грабёж</a></li><li><a href="/dtp-264.html">ДТП</a></li><li><a href="/ugolovnye.html">Все направления →</a></li></ul></div>' +
          '<div><span class="footer-col-title">Гражданские и бизнес</span><ul class="footer-links"><li><a href="/semejnye.html">Семейные дела</a></li><li><a href="/advokat-po-nasledstvennym-sporam-moskva.html">Наследство</a></li><li><a href="/zhilishchnye.html">Жилищные споры</a></li><li><a href="/arbitrazh.html">Арбитраж</a></li><li><a href="/bankrotstvo.html">Банкротство</a></li><li><a href="/autsorsing.html">Аутсорсинг</a></li><li><a href="/nalogovye.html">Налоги</a></li></ul></div>' +
          '<div><span class="footer-col-title">Коллегия и филиалы</span><ul class="footer-links"><li><a href="/komanda.html">Команда адвокатов</a></li><li><a href="/otzyvy-o-kollegii-advokatov-grifon.html">Отзывы и репутация</a></li><li><a href="/kontakty.html">Контакты</a></li><li><a href="/stoimost.html">Стоимость услуг</a></li><li><a href="/vakansii.html">Вакансии</a></li><li><a href="https://kasokolov.ru/" target="_blank">Филиал Санкт-Петербург ↗</a></li><li><a href="https://griffin-saratov.ru/" target="_blank">Филиал Саратов ↗</a></li></ul></div>' +
        '</div>' +
        '<div class="footer-bottom"><p class="footer-copy">kagrifon.ru © 2014–2026 · Московская коллегия адвокатов «Грифон»</p><p class="footer-legal">Информация на сайте носит ознакомительный характер и не является публичной офертой. Адвокатская тайна гарантируется законом.</p></div>' +
      '</div>' +
    '</footer>';

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', mobileHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  if (!document.body.classList.contains('home-page')) {
    var heroSelector = '.hero,.page-hero,.kag-money-hero,.kag-proof-hero,.vak-hero,.article-hero,.service-hero,.practice-hero,.team-hero,.contact-hero';
    if (!document.querySelector(heroSelector)) {
      var matrixTarget = document.querySelector('main > section:first-of-type, body > section:first-of-type, article, main, .content.container, .container');
      if (matrixTarget && matrixTarget.id !== 'nav' && !matrixTarget.classList.contains('mobile-nav')) {
        matrixTarget.classList.add('kag-matrix-hero-target');
      }
    }
  }

  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open');
      var isOpen = mobileNav.classList.contains('open');
      mobileNav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.classList.toggle('mobile-menu-open', isOpen);
    });
    mobileNav.querySelectorAll('a').forEach(function (l) {
      l.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        mobileNav.setAttribute('aria-hidden', 'true');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('mobile-menu-open');
      });
    });
    var mobileQuiz = mobileNav.querySelector('.mobile-nav__quiz');
    if (mobileQuiz) {
      mobileQuiz.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        mobileNav.setAttribute('aria-hidden', 'true');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('mobile-menu-open');
        var quizButton = document.getElementById('kagQuizOpen');
        if (quizButton) quizButton.click();
        else if (location.hash !== '#lead') location.hash = 'lead';
      });
    }
  }
  window.addEventListener('scroll', function () {
    var nav = document.getElementById('nav');
    if (nav) nav.style.background = window.scrollY > 80 ? 'rgba(5,10,20,.99)' : 'rgba(5,10,20,.96)';
  });
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () { this.parentElement.classList.toggle('open'); });
  });
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          setTimeout(function () { e.target.classList.add('visible'); }, i * 60);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade').forEach(function (el) { obs.observe(el); });
  } else {
    document.querySelectorAll('.fade').forEach(function (el) { el.classList.add('visible'); });
  }
  // === KAGRIFON FINAL STYLE AND CONTACTS 2026-05-11 START ===
  if (!document.getElementById('kagrifon-final-site-style')) {
    var finalStyle = document.createElement('style');
    finalStyle.id = 'kagrifon-final-site-style';
    finalStyle.textContent = `
/* === KAGRIFON FINAL SITE-WIDE VISUAL RULES + CONTACTS 2026-05-11 === */
html {
  background: #050a14 !important;
  width: 100% !important;
  max-width: 100% !important;
  overflow-x: hidden !important;
}
body {
  position: relative !important;
  z-index: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  min-height: 100vh !important;
  overflow-x: hidden !important;
  background: transparent !important;
  color: #f8f4ee !important;
}
body::before {
  content: "" !important;
  display: block !important;
  position: fixed !important;
  inset: 0 !important;
  z-index: -2 !important;
  pointer-events: none !important;
  background-image: linear-gradient(180deg, rgba(5,10,20,.10) 0%, rgba(5,10,20,.20) 50%, rgba(5,10,20,.48) 100%), url('/assets/img/moscow-hero-20260510.png') !important;
  background-size: cover !important;
  background-position: center bottom !important;
  background-repeat: no-repeat !important;
  transform: translateZ(0) !important;
}
body::after {
  content: "" !important;
  display: block !important;
  position: fixed !important;
  inset: 0 !important;
  z-index: -1 !important;
  pointer-events: none !important;
  background: radial-gradient(ellipse at 50% 18%, rgba(22,33,62,.20), rgba(5,10,20,.38) 62%, rgba(5,10,20,.74) 100%) !important;
}
body > *:not(#nav):not(.mobile-nav):not(.kag-contact-stack):not(.kag-quiz-modal) {
  position: relative !important;
  z-index: 1 !important;
}
.hero-bg,
.hero::before,
.hero::after,
.page-hero::before,
.page-hero::after,
.vak-hero::before,
.vak-hero::after {
  display: none !important;
  content: none !important;
  background: transparent !important;
}
.hero,
.page-hero,
.vak-hero,
.article-hero,
.service-hero,
.practice-hero,
.team-hero,
.contact-hero,
body.legacy-article > .hero {
  width: 100vw !important;
  max-width: 100vw !important;
  min-height: min(720px, 84vh) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  overflow: hidden !important;
  padding: 132px 0 76px !important;
  margin: 0 !important;
  background: rgba(5,10,20,.34) !important;
  background-image: none !important;
  border-bottom: 1px solid rgba(201,168,76,.25) !important;
}
.vak-hero,
.team-hero,
.contact-hero,
.article-hero {
  min-height: min(650px, 78vh) !important;
}
.container,
.hero .container,
.page-hero .container,
.vak-hero .container,
.breadcrumb.container,
.content.container {
  width: min(100% - 48px, 1220px) !important;
  max-width: 1220px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  box-sizing: border-box !important;
}
.hero .container,
.page-hero .container,
.vak-hero .container,
body.legacy-article > .hero .container {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
}
.hero-content,
.page-hero-content,
.vak-hero .container > *,
.hero .container > *,
.page-hero .container > *,
body.legacy-article > .hero .container > * {
  max-width: 900px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  text-align: center !important;
  transform: none !important;
}
.hero-label,
.page-hero-label,
.section-tag,
.page-hero .section-tag,
.vak-hero .section-tag {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 12px !important;
  width: 100% !important;
  max-width: 100% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  text-align: center !important;
  white-space: normal !important;
  overflow-wrap: anywhere !important;
  line-height: 1.45 !important;
}
.hero-title,
.page-hero h1,
.vak-hero h1,
body.legacy-article > .hero h1 {
  width: min(100%, 980px) !important;
  max-width: 980px !important;
  margin: 0 auto 1.2rem !important;
  text-align: center !important;
  white-space: normal !important;
  overflow-wrap: break-word !important;
  word-break: normal !important;
  hyphens: auto !important;
  text-wrap: balance !important;
  font-family: var(--serif), Georgia, 'Times New Roman', serif !important;
  font-size: clamp(3rem, 5.4vw, 6rem) !important;
  line-height: 1.02 !important;
  font-weight: 300 !important;
  color: #f8f4ee !important;
}
.hero-title strong,
.page-hero h1 strong,
.page-hero h1 em,
.vak-hero h1 em,
.section-title em {
  display: block !important;
  color: #c9a84c !important;
  font-style: italic !important;
  font-size: .78em !important;
  line-height: 1.08 !important;
}
.hero-desc,
.page-hero-desc,
.page-hero p,
.vak-hero p,
body.legacy-article > .hero p,
.section-lead {
  width: min(100%, 760px) !important;
  max-width: 760px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  text-align: center !important;
  overflow-wrap: break-word !important;
  word-break: normal !important;
  hyphens: auto !important;
  color: rgba(216,226,238,.78) !important;
}
.hero-ctas,
.cta-actions,
.vak-hero [style*="display:flex"] {
  justify-content: center !important;
  align-items: center !important;
}
.hero-stats,
.vak-hero [style*="margin-top:2rem;display:flex"] {
  justify-content: center !important;
}
section,
.page-section,
.content-section,
main > div:not(.hero):not(.page-hero):not(.vak-hero) {
  background: rgba(5,10,20,.42) !important;
  background-image: none !important;
}
section[style*="background:var(--bg2)"],
section[style*="background: var(--bg2)"] {
  background: rgba(8,15,28,.56) !important;
}
.practice-card,
.case-card,
.article-item,
.team-card,
.lawyer-card,
.service-card,
.why-item,
.faq-item,
.contact-card,
.cta-banner,
.condition-card,
.step,
.req-item,
.qr-join {
  background-color: rgba(5,10,20,.74) !important;
  border-color: rgba(201,168,76,.28) !important;
  backdrop-filter: blur(6px) !important;
}
.sticky-tg,
.w-trigger,
.w-modal,
.w-btn,
.floating-button,
.float-button,
.floating-buttons,
[style*="bottom:90px"],
[style*="bottom: 90px"] {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}
.kag-contact-stack a[href*="t.me"],
.kag-contact-stack a[href*="max.ru"] {
  display: flex !important;
  visibility: visible !important;
  opacity: 1 !important;
  pointer-events: auto !important;
}
.kag-contact-stack {
  position: fixed !important;
  right: 22px !important;
  bottom: 24px !important;
  z-index: 10050 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 10px !important;
  align-items: flex-end !important;
  pointer-events: none !important;
}
.kag-contact-btn {
  pointer-events: auto !important;
  width: 52px !important;
  height: 52px !important;
  border-radius: 18px !important;
  border: 1px solid rgba(201,168,76,.52) !important;
  background: rgba(5,10,20,.88) !important;
  color: #fff7e8 !important;
  box-shadow: 0 16px 38px rgba(0,0,0,.34), inset 0 1px 0 rgba(255,255,255,.08) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-decoration: none !important;
  font: 900 12px/1 Inter, Arial, sans-serif !important;
  letter-spacing: .05em !important;
  cursor: pointer !important;
  transition: transform .18s ease, border-color .18s ease, background .18s ease !important;
  -webkit-tap-highlight-color: transparent !important;
}
.kag-contact-btn:hover,
.kag-contact-btn:focus-visible {
  transform: translateY(-2px) !important;
  border-color: rgba(201,168,76,.95) !important;
  background: rgba(12,22,42,.96) !important;
  outline: none !important;
}
.kag-contact-btn svg {
  display: block !important;
  width: 23px !important;
  height: 23px !important;
}
.kag-contact-btn--quiz {
  width: auto !important;
  min-width: 132px !important;
  height: 48px !important;
  padding: 0 17px !important;
  gap: 9px !important;
  border-radius: 999px !important;
  color: #07101d !important;
  background: linear-gradient(135deg, #f0d98a, #c9a84c 56%, #a0734a) !important;
  border-color: rgba(255,226,148,.72) !important;
}
.kag-contact-btn--tg { background: linear-gradient(145deg, rgba(28,122,189,.96), rgba(5,10,20,.92)) !important; }
.kag-contact-btn--max { background: linear-gradient(145deg, rgba(98,85,198,.96), rgba(5,10,20,.92)) !important; }
.kag-contact-label { white-space: nowrap !important; }
.kag-quiz-modal {
  position: fixed !important;
  inset: 0 !important;
  z-index: 10060 !important;
  display: none !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 18px !important;
  background: rgba(2,6,14,.72) !important;
  backdrop-filter: blur(10px) !important;
}
.kag-quiz-modal.open { display: flex !important; }
.kag-quiz-panel {
  width: min(100%, 500px) !important;
  border: 1px solid rgba(201,168,76,.42) !important;
  border-radius: 18px !important;
  background: linear-gradient(180deg, rgba(9,17,32,.98), rgba(5,10,20,.98)) !important;
  box-shadow: 0 30px 80px rgba(0,0,0,.55) !important;
  padding: 26px !important;
  color: #f8f4ee !important;
}
.kag-quiz-head { display: flex !important; align-items: flex-start !important; justify-content: space-between !important; gap: 16px !important; margin-bottom: 18px !important; }
.kag-quiz-title { margin: 0 0 6px !important; font: 600 30px/1.05 var(--serif), Georgia, serif !important; color: #fff7e8 !important; }
.kag-quiz-sub { margin: 0 !important; color: rgba(216,226,238,.70) !important; font: 400 14px/1.55 Inter, Arial, sans-serif !important; }
.kag-quiz-close { flex: 0 0 auto !important; width: 38px !important; height: 38px !important; border: 1px solid rgba(201,168,76,.32) !important; border-radius: 12px !important; color: #fff7e8 !important; background: rgba(255,255,255,.04) !important; cursor: pointer !important; font-size: 22px !important; line-height: 1 !important; }
.kag-quiz-form { display: grid !important; gap: 12px !important; }
.kag-quiz-form input,
.kag-quiz-form select,
.kag-quiz-form textarea {
  width: 100% !important;
  box-sizing: border-box !important;
  border: 1px solid rgba(201,168,76,.26) !important;
  border-radius: 12px !important;
  background: rgba(255,255,255,.055) !important;
  color: #f8f4ee !important;
  padding: 13px 14px !important;
  font: 500 14px/1.3 Inter, Arial, sans-serif !important;
  outline: none !important;
}
.kag-quiz-form textarea { min-height: 96px !important; resize: vertical !important; }
.kag-quiz-form input::placeholder,
.kag-quiz-form textarea::placeholder { color: rgba(216,226,238,.44) !important; }
.kag-quiz-form select option { color: #07101d !important; }
.kag-quiz-consent { display: flex !important; gap: 10px !important; align-items: flex-start !important; color: rgba(216,226,238,.64) !important; font: 400 12px/1.45 Inter, Arial, sans-serif !important; }
.kag-quiz-consent input { width: 16px !important; margin-top: 2px !important; accent-color: #c9a84c !important; }
.kag-quiz-submit { height: 48px !important; border: 0 !important; border-radius: 999px !important; color: #07101d !important; background: linear-gradient(135deg, #f0d98a, #c9a84c 58%, #a0734a) !important; font: 900 13px/1 Inter, Arial, sans-serif !important; letter-spacing: .09em !important; text-transform: uppercase !important; cursor: pointer !important; }
.kag-quiz-note { min-height: 18px !important; margin: 0 !important; color: #c9a84c !important; font: 600 12px/1.45 Inter, Arial, sans-serif !important; }
.kag-honeypot { position: absolute !important; left: -9999px !important; opacity: 0 !important; }
@media (max-width: 1200px) {
  .container,
  .hero .container,
  .page-hero .container,
  .vak-hero .container,
  .breadcrumb.container,
  .content.container {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
  .hero,
  .page-hero,
  .vak-hero,
  .article-hero,
  .service-hero,
  .practice-hero,
  .team-hero,
  .contact-hero,
  body.legacy-article > .hero {
    min-height: auto !important;
    padding-top: 132px !important;
    padding-bottom: 66px !important;
  }
  .hero-title,
  .page-hero h1,
  .vak-hero h1,
  body.legacy-article > .hero h1 {
    font-size: clamp(2.35rem, 7.2vw, 4.2rem) !important;
    line-height: 1.08 !important;
  }
}
@media (max-width: 600px) {
  body::before {
    background-position: center bottom !important;
    background-size: auto 100vh !important;
  }
  .hero,
  .page-hero,
  .vak-hero,
  .article-hero,
  .service-hero,
  .practice-hero,
  .team-hero,
  .contact-hero,
  body.legacy-article > .hero {
    padding-top: 118px !important;
    padding-bottom: 54px !important;
    min-height: auto !important;
  }
  .hero-label,
  .page-hero-label,
  .section-tag,
  .page-hero .section-tag,
  .vak-hero .section-tag {
    font-size: 7px !important;
    letter-spacing: .12em !important;
    padding: 0 8px !important;
    gap: 8px !important;
  }
  .hero-title,
  .page-hero h1,
  .vak-hero h1,
  body.legacy-article > .hero h1 {
    font-size: clamp(27px, 8.8vw, 38px) !important;
    line-height: 1.14 !important;
    max-width: 342px !important;
  }
  .hero-title strong,
  .page-hero h1 strong,
  .page-hero h1 em,
  .vak-hero h1 em,
  .section-title em {
    font-size: .82em !important;
    line-height: 1.16 !important;
  }
  .hero-desc,
  .page-hero-desc,
  .page-hero p,
  .vak-hero p,
  body.legacy-article > .hero p,
  .section-lead {
    font-size: 14px !important;
    line-height: 1.58 !important;
    max-width: 342px !important;
  }
  .kag-contact-stack {
    right: 12px !important;
    bottom: 14px !important;
    gap: 8px !important;
  }
  .kag-contact-btn {
    width: 46px !important;
    height: 46px !important;
    border-radius: 15px !important;
  }
  .kag-contact-btn--quiz {
    min-width: 46px !important;
    width: 46px !important;
    padding: 0 !important;
  }
  .kag-contact-btn--quiz .kag-contact-label { display: none !important; }
  .kag-quiz-panel { padding: 20px !important; border-radius: 16px !important; }
  .kag-quiz-title { font-size: 25px !important; }
}
/* === /KAGRIFON FINAL SITE-WIDE VISUAL RULES + CONTACTS 2026-05-11 === */
`;
    document.head.appendChild(finalStyle);
  }

  if (!document.querySelector('.kag-contact-stack')) {
    var contactHTML = '' +
      '<div class="kag-contact-stack" aria-label="Быстрая связь с МКА Грифон">' +
        '<button type="button" class="kag-contact-btn kag-contact-btn--quiz" id="kagQuizOpen" aria-label="Открыть форму обращения"><span class="kag-quiz-mark" aria-hidden="true"><span class="kag-quiz-mark__core"><img src="/assets/img/kagrifon-floating-griffon-bright-20260523.png" alt=""></span></span></button>' +
        '<a class="kag-contact-btn kag-contact-btn--tg" id="kagTelegramBtn" href="https://t.me/camgrifon_bot?start=kagrifon_site" target="_blank" rel="noopener" aria-label="Написать в Telegram"><svg class="kag-contact-icon kag-contact-icon--tg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.8 3.3 2.9 10.2c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 1.8 5.5c.2.6.1.9.8.9.5 0 .8-.2 1.1-.5l2.6-2.5 5.3 3.9c1 .5 1.6.3 1.9-.9l3.4-16c.4-1.4-.5-2-1.4-1.6ZM8 12.8l10.6-6.7c.5-.3.9-.1.5.2l-8.6 7.8-.3 3.3L8 12.8Z"/></svg></a>' +
        '<a class="kag-contact-btn kag-contact-btn--max" id="kagMaxBtn" href="https://max.ru/id7707492286_bot" target="_blank" rel="noopener" aria-label="Открыть MAX"><img class="kag-contact-icon kag-contact-icon--max" src="/assets/img/max-messenger-logo-20260523.svg" alt=""></a>' +
        '<a class="kag-contact-btn kag-contact-btn--call" href="tel:+74957897191" aria-label="Позвонить в МКА Грифон"><svg class="kag-contact-icon kag-contact-icon--call" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.6c0 .7-.5 1.2-1.2 1.2C10.4 21.5 2.5 13.6 2.5 3.4c0-.7.5-1.2 1.2-1.2h3.6c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.8.6 4 .1.4 0 .9-.3 1.2l-2.2 2.2Z"/></svg></a>' +
      '</div>' +
      '<div class="kag-quiz-modal" id="kagQuizModal" aria-hidden="true">' +
        '<div class="kag-quiz-panel" role="dialog" aria-modal="true" aria-labelledby="kagQuizTitle">' +
          '<div class="kag-quiz-head"><div><h2 class="kag-quiz-title" id="kagQuizTitle">Короткий разбор ситуации</h2><p class="kag-quiz-sub">Оставьте контакт и опишите вопрос. Заявка уйдёт в CRM МКА «Грифон».</p></div><button type="button" class="kag-quiz-close" id="kagQuizClose" aria-label="Закрыть">×</button></div>' +
          '<form class="kag-quiz-form" id="kagQuizForm">' +
            '<input class="kag-honeypot" name="website" tabindex="-1" autocomplete="off">' +
            '<input name="name" type="text" placeholder="Ваше имя" autocomplete="name">' +
            '<input name="phone" type="tel" placeholder="Телефон для связи" autocomplete="tel" required>' +
            '<select name="service" aria-label="Тема обращения"><option value="Срочная помощь адвоката">Срочная помощь адвоката</option><option value="Уголовное дело">Уголовное дело</option><option value="Семейный или гражданский спор">Семейный или гражданский спор</option><option value="Банкротство">Банкротство</option><option value="Вступление в коллегию">Вступление в коллегию</option><option value="Другой вопрос">Другой вопрос</option></select>' +
            '<textarea name="message" placeholder="Коротко опишите ситуацию"></textarea>' +
            '<label class="kag-quiz-consent"><input type="checkbox" name="consent" required><span>Согласен на обработку персональных данных и получение ответа по указанным контактам.</span></label>' +
            '<p class="kag-quiz-disclaimer">Отправка заявки не является заключением соглашения об оказании юридической помощи. Первичный разбор носит информационный характер и не гарантирует исход дела.</p>' +
            '<button type="submit" class="kag-quiz-submit">Отправить в CRM</button>' +
            '<p class="kag-quiz-note" id="kagQuizNote"></p>' +
          '</form>' +
        '</div>' +
      '</div>';
    document.body.insertAdjacentHTML('beforeend', contactHTML);

    var quizModal = document.getElementById('kagQuizModal');
    var quizOpen = document.getElementById('kagQuizOpen');
    var quizClose = document.getElementById('kagQuizClose');
    var quizForm = document.getElementById('kagQuizForm');
    var quizNote = document.getElementById('kagQuizNote');

    function kagUtm() {
      var p = new URLSearchParams(window.location.search);
      var obj = {};
      ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(function(k) { obj[k] = p.get(k) || ''; });
      return obj;
    }
    function kagOpenQuiz() {
      if (!quizModal) return;
      quizModal.classList.add('open');
      quizModal.setAttribute('aria-hidden', 'false');
      setTimeout(function() { var phone = quizModal.querySelector('input[name="phone"]'); if (phone) phone.focus(); }, 60);
    }
    function kagCloseQuiz() {
      if (!quizModal) return;
      quizModal.classList.remove('open');
      quizModal.setAttribute('aria-hidden', 'true');
    }
    // Telegram/MAX identity is received inside the messenger bot after /start, not from anonymous site clicks.
    if (quizOpen) quizOpen.addEventListener('click', kagOpenQuiz);
    if (quizClose) quizClose.addEventListener('click', kagCloseQuiz);
    if (quizModal) quizModal.addEventListener('click', function(e) { if (e.target === quizModal) kagCloseQuiz(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') kagCloseQuiz(); });
    if (quizForm) quizForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (quizForm.website && quizForm.website.value) return;
      if (quizNote) quizNote.textContent = 'Отправляем обращение...';
      var fd = new FormData(quizForm);
      var payload = Object.assign(kagUtm(), {
        source: 'kagrifon',
        org: 'МКА ГРИФОН',
        city: 'msk',
        name: String(fd.get('name') || '').trim() || 'Заявка с квиза',
        phone: String(fd.get('phone') || '').trim(),
        service: String(fd.get('service') || '').trim(),
        messenger: 'quiz',
        message: String(fd.get('message') || '').trim(),
        page_url: location.href,
        referrer: document.referrer || '',
        form_id: 'floating_quiz'
      });
      if (!payload.phone) { if (quizNote) quizNote.textContent = 'Укажите телефон для связи.'; return; }
      fetch('/telephony/site-lead/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        .then(function(r) { return r.json().catch(function() { return { ok: r.ok }; }); })
        .then(function(data) {
          if (data && data.ok !== false) {
            quizForm.reset();
            if (quizNote) quizNote.textContent = 'Обращение принято. Мы свяжемся с вами по указанному способу связи.';
            setTimeout(kagCloseQuiz, 1800);
          } else {
            if (quizNote) quizNote.textContent = 'Не удалось отправить. Позвоните: +7 (495) 789-71-91.';
          }
        })
        .catch(function() { if (quizNote) quizNote.textContent = 'Не удалось отправить. Позвоните: +7 (495) 789-71-91.'; });
    });
  }
  // === KAGRIFON FINAL STYLE AND CONTACTS 2026-05-11 END ===

  // === KAGRIFON EQUAL FLOATING BUTTONS 2026-05-11 START ===
  if (!document.getElementById('kagrifon-equal-floating-buttons-style')) {
    var equalBtnStyle = document.createElement('style');
    equalBtnStyle.id = 'kagrifon-equal-floating-buttons-style';
    equalBtnStyle.textContent = `
/* === KAGRIFON equal floating buttons 2026-05-11 === */
.kag-contact-stack {
  right: 22px !important;
  bottom: 24px !important;
  gap: 10px !important;
}
.kag-contact-btn,
.kag-contact-btn--quiz {
  width: 52px !important;
  min-width: 52px !important;
  max-width: 52px !important;
  height: 52px !important;
  padding: 0 !important;
  border-radius: 18px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.kag-contact-btn--quiz .kag-contact-label { display: none !important; }
.kag-contact-btn--quiz {
  color: #edf3fb !important;
  overflow: visible !important;
  perspective: 760px !important;
  background: radial-gradient(circle at 36% 18%, rgba(255,255,255,.18), rgba(126,144,164,.13) 38%, rgba(5,10,20,.92) 76%) !important;
  border-color: rgba(210,224,240,.46) !important;
  box-shadow: 0 16px 38px rgba(0,0,0,.34), 0 0 26px rgba(176,202,230,.14), inset 0 1px 0 rgba(255,255,255,.13) !important;
  isolation: isolate !important;
}
.kag-contact-btn--quiz:hover,
.kag-contact-btn--quiz:focus-visible {
  background: radial-gradient(circle at 36% 18%, rgba(255,255,255,.26), rgba(126,144,164,.18) 40%, rgba(7,14,26,.96) 78%) !important;
  border-color: rgba(232,241,252,.72) !important;
  box-shadow: 0 18px 42px rgba(0,0,0,.38), 0 0 34px rgba(176,202,230,.24), inset 0 1px 0 rgba(255,255,255,.18) !important;
}
.kag-quiz-mark {
  position: relative !important;
  display: block !important;
  width: 39px !important;
  height: 39px !important;
  transform-style: preserve-3d !important;
  filter: drop-shadow(0 8px 13px rgba(0,0,0,.42)) !important;
}
.kag-quiz-mark__core {
  position: absolute !important;
  inset: 0 !important;
  display: grid !important;
  place-items: center !important;
  transform-style: flat !important;
  transform-origin: 50% 50% !important;
}
.kag-quiz-mark__core::before {
  content: "" !important;
  position: absolute !important;
  inset: 3px !important;
  border-radius: 50% !important;
  background: radial-gradient(circle at 50% 50%, rgba(218,232,247,.18), transparent 62%) !important;
  transform: translateZ(-8px) !important;
}
.kag-quiz-mark__core::after {
  content: none !important;
  display: none !important;
}
.kag-quiz-mark img {
  position: relative !important;
  z-index: 2 !important;
  display: block !important;
  width: 39px !important;
  height: 39px !important;
  object-fit: contain !important;
  filter: drop-shadow(0 1px 1px rgba(255,255,255,.18)) drop-shadow(0 2px 2px rgba(0,0,0,.28)) !important;
}
@keyframes kagQuizLogoTurn {
  0%, 100% { transform: rotateY(-18deg) rotateX(4deg) translateY(0); }
  45% { transform: rotateY(18deg) rotateX(-3deg) translateY(-1px); }
  55% { transform: rotateY(18deg) rotateX(-3deg) translateY(-1px); }
}
@keyframes kagQuizLogoGlint {
  0%, 38% { opacity: 0; transform: translateX(-72%) rotate(8deg); }
  52% { opacity: .86; }
  68%, 100% { opacity: 0; transform: translateX(72%) rotate(8deg); }
}
.kag-contact-btn--tg svg { width: 24px !important; height: 24px !important; }
.kag-contact-btn--max {
  overflow: hidden !important;
  color: #fff !important;
  background: linear-gradient(145deg, rgba(116,100,235,.98), rgba(41,128,236,.92)) !important;
}
.kag-contact-btn--call {
  color: #07101d !important;
  background: linear-gradient(145deg, #f0d98a, #c9a84c 58%, #a0734a) !important;
  border-color: rgba(255,226,148,.70) !important;
}
.kag-max-wordmark {
  display: block !important;
  font: 900 12px/1 Inter, Arial, sans-serif !important;
  letter-spacing: -.03em !important;
  color: #fff !important;
  text-shadow: 0 1px 7px rgba(0,0,0,.28) !important;
}
.kag-call-wordmark {
  display: block !important;
  font: 950 11px/1 Inter, Arial, sans-serif !important;
  letter-spacing: .02em !important;
}
.kag-contact-btn--tg .kag-contact-label,
.kag-contact-btn--max .kag-contact-label,
.kag-contact-btn--call .kag-contact-label {
  display: none !important;
}
@media (max-width: 600px) {
  body { padding-bottom: 104px !important; }
  .kag-contact-stack {
    left: 0 !important;
    right: 0 !important;
    bottom: 10px !important;
    width: calc(100vw - 20px) !important;
    max-width: 390px !important;
    box-sizing: border-box !important;
    margin: 0 auto !important;
    transform: none !important;
    padding: 8px !important;
    gap: 7px !important;
    display: flex !important;
    flex-direction: row !important;
    align-items: stretch !important;
    justify-content: center !important;
    border: 1px solid rgba(201,168,76,.28) !important;
    border-radius: 20px !important;
    background: linear-gradient(180deg, rgba(9,17,32,.88), rgba(4,9,18,.96)) !important;
    box-shadow: 0 20px 60px rgba(0,0,0,.46), inset 0 1px 0 rgba(255,255,255,.08) !important;
    backdrop-filter: blur(18px) !important;
    pointer-events: auto !important;
  }
  .kag-contact-stack::before {
    content: "Срочная связь с адвокатом" !important;
    position: absolute !important;
    left: 14px !important;
    bottom: calc(100% + 7px) !important;
    padding: 5px 9px !important;
    border: 1px solid rgba(201,168,76,.28) !important;
    border-radius: 999px !important;
    color: #f6e7b7 !important;
    background: rgba(5,10,20,.82) !important;
    box-shadow: 0 10px 24px rgba(0,0,0,.25) !important;
    font: 900 10px/1 Inter, Arial, sans-serif !important;
    letter-spacing: .08em !important;
    text-transform: uppercase !important;
  }
  .kag-contact-btn,
  .kag-contact-btn--quiz {
    flex: 1 1 0 !important;
    width: auto !important;
    min-width: 0 !important;
    max-width: none !important;
    height: 56px !important;
    border-radius: 15px !important;
    flex-direction: column !important;
    gap: 4px !important;
    box-shadow: 0 12px 28px rgba(0,0,0,.30), inset 0 1px 0 rgba(255,255,255,.10) !important;
  }
  .kag-contact-btn--tg,
  .kag-contact-btn--max { flex-grow: 1.18 !important; }
  .kag-contact-btn--quiz { flex-grow: .86 !important; }
  .kag-max-wordmark { font-size: 11px !important; }
  .kag-call-wordmark { font-size: 11px !important; }
  .kag-contact-btn--tg .kag-contact-label,
  .kag-contact-btn--max .kag-contact-label,
  .kag-contact-btn--call .kag-contact-label,
  .kag-contact-btn--quiz .kag-contact-label {
    display: block !important;
    color: inherit !important;
    font: 900 9px/1 Inter, Arial, sans-serif !important;
    letter-spacing: .02em !important;
    text-transform: none !important;
  }
  .kag-contact-btn svg { width: 19px !important; height: 19px !important; }
  .kag-quiz-mark,
  .kag-quiz-mark img {
    width: 22px !important;
    height: 22px !important;
  }
}
@media (prefers-reduced-motion: reduce) {
  .kag-quiz-mark__core,
  .kag-quiz-mark__core::after {
    animation: none !important;
  }
}
/* === /KAGRIFON equal floating buttons 2026-05-11 === */
`;
    document.head.appendChild(equalBtnStyle);
  }
  // === KAGRIFON EQUAL FLOATING BUTTONS 2026-05-11 END ===

  // === KAGRIFON MOBILE APP + HOME HERO 2026-05-23 START ===
  if (!document.getElementById('kagrifon-mobile-app-style')) {
    var mobileAppStyle = document.createElement('style');
    mobileAppStyle.id = 'kagrifon-mobile-app-style';
    mobileAppStyle.textContent = `
body.kag-home-page .hero {
  min-height: min(760px, calc(100vh - 84px)) !important;
  padding: 116px 0 52px !important;
  overflow-x: hidden !important;
}
body.kag-home-page .hero .container {
  display: block !important;
  width: min(100% - 96px, 1360px) !important;
  max-width: 1360px !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.kag-home-hero-app {
  display: grid !important;
  grid-template-columns: minmax(540px, .98fr) minmax(360px, .72fr) !important;
  gap: clamp(2rem, 4vw, 5rem) !important;
  align-items: center !important;
  width: 100% !important;
}
body.kag-home-page .hero-content {
  width: 100% !important;
  max-width: 820px !important;
  margin: 0 !important;
  text-align: left !important;
}
body.kag-home-page .hero-label {
  justify-content: flex-start !important;
  padding: 0 !important;
  text-align: left !important;
}
body.kag-home-page .hero-title,
body.kag-home-page .hero-desc {
  text-align: left !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
body.kag-home-page .hero-title {
  max-width: 820px !important;
  font-size: clamp(3rem, 3.28vw, 4.35rem) !important;
  line-height: .98 !important;
  margin-bottom: 1.05rem !important;
  text-wrap: balance !important;
  hyphens: none !important;
  overflow-wrap: normal !important;
  word-break: normal !important;
}
body.kag-home-page .hero-title strong {
  font-size: .78em !important;
  line-height: 1.03 !important;
}
body.kag-home-page .hero-title .kag-mobile-break {
  display: none !important;
}
body.kag-home-page .hero-desc {
  max-width: 780px !important;
  font-size: clamp(1rem, 1.08vw, 1.18rem) !important;
  line-height: 1.72 !important;
}
.kag-home-messenger-actions {
  display: grid !important;
  grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  gap: .75rem !important;
  margin: 1.55rem 0 1.35rem !important;
  max-width: 720px !important;
}
body.kag-home-page .hero-stats {
  display: grid !important;
  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  width: min(100%, 820px) !important;
  max-width: 820px !important;
  margin: 0 !important;
}
body.kag-home-page .hero-stat {
  min-height: 102px !important;
}
.kag-home-msg {
  min-height: 64px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  gap: 4px !important;
  padding: 12px 14px !important;
  border-radius: 8px !important;
  border: 1px solid rgba(255,255,255,.10) !important;
  text-decoration: none !important;
  color: #fff !important;
  box-shadow: 0 16px 38px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.09) !important;
}
.kag-home-msg span { font: 950 13px/1 Inter, Arial, sans-serif !important; letter-spacing: .08em !important; text-transform: uppercase !important; }
.kag-home-msg small { color: rgba(255,255,255,.70) !important; font: 700 11px/1.15 Inter, Arial, sans-serif !important; }
.kag-home-msg--tg { background: linear-gradient(145deg, rgba(38,153,219,.98), rgba(6,39,76,.94)) !important; border-color: rgba(127,205,250,.42) !important; }
.kag-home-msg--max { background: linear-gradient(145deg, rgba(112,100,238,.98), rgba(38,113,232,.92)) !important; border-color: rgba(156,168,255,.42) !important; }
.kag-home-msg--call { color: #07101d !important; background: linear-gradient(135deg, #f0d98a, #c9a84c 58%, #a0734a) !important; border-color: rgba(255,226,148,.70) !important; }
.kag-home-msg--call small { color: rgba(7,16,29,.72) !important; }
.kag-home-hero-visual {
  position: relative !important;
  min-height: 500px !important;
  display: grid !important;
  place-items: center !important;
  isolation: isolate !important;
  align-self: center !important;
  transform: translateY(4px) !important;
}
.kag-home-hero-visual::before {
  content: "" !important;
  position: absolute !important;
  inset: 6% 0 0 0 !important;
  border-radius: 50% !important;
  background: radial-gradient(circle at 50% 45%, rgba(139,178,218,.13), rgba(20,34,56,.08) 34%, transparent 64%) !important;
  filter: blur(18px) !important;
  z-index: -1 !important;
}
.kag-home-hero-visual img {
  width: min(34vw, 470px) !important;
  max-width: 100% !important;
  height: auto !important;
  display: block !important;
  filter: saturate(.96) contrast(1.06) brightness(1.03) drop-shadow(0 26px 46px rgba(0,0,0,.38)) drop-shadow(0 0 18px rgba(150,196,255,.12)) !important;
  animation: kagHomeGriffonBreathe 18s ease-in-out infinite !important;
}
.kag-home-hero-visual span {
  display: none !important;
}
@keyframes kagHomeGriffonBreathe {
  0%, 100% { transform: translateY(0) rotateY(-3deg); }
  50% { transform: translateY(-7px) rotateY(4deg); }
}
@media (max-width: 760px) {
  body.kag-home-page {
    overflow-x: hidden !important;
  }
  body.kag-home-page .hero {
    min-height: auto !important;
    padding: 86px 0 96px !important;
  }
  body.kag-home-page .hero .container {
    width: 100% !important;
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
  .kag-home-hero-app {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    grid-template-columns: none !important;
    gap: .75rem !important;
    width: 100% !important;
    max-width: 100% !important;
    margin-left: auto !important;
    margin-right: auto !important;
    overflow: visible !important;
    box-sizing: border-box !important;
  }
  body.kag-home-page .hero-content,
  body.kag-home-page .hero-title,
  body.kag-home-page .hero-desc,
  body.kag-home-page .hero-label {
    width: 100% !important;
    max-width: 312px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    text-align: center !important;
    justify-content: center !important;
    box-sizing: border-box !important;
  }
  body.kag-home-page .hero-label {
    font-size: 7px !important;
    letter-spacing: .12em !important;
    margin-bottom: .78rem !important;
  }
  body.kag-home-page .hero-title {
    font-size: clamp(27px, 7vw, 31px) !important;
    line-height: 1.08 !important;
    margin-bottom: .68rem !important;
    hyphens: none !important;
    overflow-wrap: normal !important;
    word-break: normal !important;
  }
  body.kag-home-page .hero-title strong {
    font-size: .84em !important;
    line-height: 1.08 !important;
    max-width: 312px !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  body.kag-home-page .hero-title .kag-mobile-break {
    display: block !important;
  }
  body.kag-home-page .hero-desc {
    font-size: 12.8px !important;
    line-height: 1.48 !important;
    margin-bottom: 0 !important;
    overflow-wrap: break-word !important;
  }
  .kag-home-messenger-actions {
    grid-template-columns: 1fr 1fr !important;
    gap: 7px !important;
    width: 100% !important;
    max-width: 312px !important;
    box-sizing: border-box !important;
    margin: .92rem auto .78rem !important;
  }
  .kag-home-msg {
    min-height: 52px !important;
    padding: 9px 9px !important;
    border-radius: 7px !important;
  }
  .kag-home-msg span {
    font-size: 11px !important;
    letter-spacing: .07em !important;
  }
  .kag-home-msg small {
    font-size: 10px !important;
  }
  .kag-home-msg--call {
    grid-column: 1 / -1 !important;
  }
  .kag-home-hero-visual {
    order: -1 !important;
    min-height: 108px !important;
    margin-top: -2px !important;
  }
  .kag-home-hero-visual img {
    width: min(34vw, 136px) !important;
  }
  .kag-home-hero-visual span,
  .kag-home-hero-visual::before {
    display: none !important;
  }
  body.kag-home-page .hero-stats {
    display: none !important;
  }
}
@media (prefers-reduced-motion: reduce) {
  .kag-home-hero-visual img { animation: none !important; }
}
`;
    document.head.appendChild(mobileAppStyle);
  }
  // === KAGRIFON MOBILE APP + HOME HERO 2026-05-23 END ===

  // === KAGRIFON ULTRA PREMIUM DEPTH LAYER 2026-05-23 START ===
  if (!document.getElementById('kagrifon-ultra-premium-depth-style')) {
    var premiumDepthStyle = document.createElement('style');
    premiumDepthStyle.id = 'kagrifon-ultra-premium-depth-style';
    premiumDepthStyle.textContent = `
/* === KAGRIFON ultra premium depth layer 2026-05-23 === */
:root {
  --kag-premium-line: rgba(212,175,74,.34);
  --kag-premium-glass: rgba(6,13,25,.74);
  --kag-premium-glass-strong: rgba(6,13,25,.88);
}
.kag-scroll-progress {
  position: fixed !important;
  top: 84px !important;
  left: 0 !important;
  height: 2px !important;
  width: 0 !important;
  z-index: 10030 !important;
  pointer-events: none !important;
  background: linear-gradient(90deg, transparent 0%, #d4af4a 18%, #f0d98a 50%, #b8962e 82%, transparent 100%) !important;
  box-shadow: 0 0 18px rgba(212,175,74,.28) !important;
}
.kag-premium-ribbon {
  padding: 0 !important;
  background: linear-gradient(90deg, rgba(5,10,20,.78), rgba(8,15,28,.88), rgba(5,10,20,.78)) !important;
  border-top: 1px solid rgba(212,175,74,.22) !important;
  border-bottom: 1px solid rgba(212,175,74,.22) !important;
}
.kag-premium-ribbon__inner {
  width: min(100% - 48px, 1220px) !important;
  margin: 0 auto !important;
  display: grid !important;
  grid-template-columns: minmax(170px,.75fr) repeat(4,minmax(0,1fr)) minmax(170px,.75fr) !important;
  gap: 1px !important;
  background: rgba(212,175,74,.18) !important;
  border-left: 1px solid rgba(212,175,74,.18) !important;
  border-right: 1px solid rgba(212,175,74,.18) !important;
}
.kag-premium-ribbon__brand,
.kag-premium-ribbon__item,
.kag-premium-ribbon__link {
  min-height: 74px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  padding: .9rem 1rem !important;
  background: rgba(5,10,20,.86) !important;
  text-decoration: none !important;
}
.kag-premium-ribbon__brand b,
.kag-premium-ribbon__item b,
.kag-premium-ribbon__link b {
  color: #f8f4ee !important;
  font: 800 .82rem/1.15 Inter,Arial,sans-serif !important;
  letter-spacing: .045em !important;
}
.kag-premium-ribbon__brand span,
.kag-premium-ribbon__item span,
.kag-premium-ribbon__link span {
  margin-top: .28rem !important;
  color: rgba(232,226,213,.66) !important;
  font: 700 .58rem/1.35 Inter,Arial,sans-serif !important;
  letter-spacing: .12em !important;
  text-transform: uppercase !important;
}
.kag-premium-ribbon__link b { color: #d4af4a !important; }
.kag-premium-ribbon__link:hover { background: rgba(16,29,48,.92) !important; }
.kag-premium-ribbon__brand {
  background: linear-gradient(135deg, rgba(184,150,46,.18), rgba(5,10,20,.9)) !important;
}
.hero-content,
.page-hero-content,
.vak-hero .container,
body.legacy-article > .hero .container {
  filter: drop-shadow(0 30px 55px rgba(0,0,0,.34)) !important;
}
.btn,
.practice-card,
.case-card,
.article-item,
.service-card,
.lawyer-card,
.team-card,
.why-item,
.contact-card,
.kag-quality-card,
.kag-premium-card,
.bfp-global-lead-card,
.home-lead-card,
.cta-banner {
  transform-style: preserve-3d !important;
  backface-visibility: hidden !important;
}
.practice-card,
.case-card,
.article-item,
.service-card,
.lawyer-card,
.team-card,
.why-item,
.contact-card,
.kag-quality-card,
.kag-premium-card {
  box-shadow: 0 20px 55px rgba(0,0,0,.22) !important;
  transition: transform .22s ease, border-color .22s ease, background-color .22s ease, box-shadow .22s ease !important;
}
.practice-card:hover,
.case-card:hover,
.article-item:hover,
.service-card:hover,
.lawyer-card:hover,
.team-card:hover,
.why-item:hover,
.contact-card:hover,
.kag-quality-card:hover,
.kag-premium-card:hover {
  transform: translateY(-5px) perspective(1000px) rotateX(1.6deg) !important;
  border-color: rgba(212,175,74,.5) !important;
  box-shadow: 0 30px 72px rgba(0,0,0,.34), inset 0 1px 0 rgba(255,255,255,.045) !important;
}
.btn {
  border-radius: 2px !important;
  box-shadow: 0 14px 32px rgba(0,0,0,.18) !important;
}
.btn-primary,
.btn-gold,
.kag-quiz-submit {
  background: linear-gradient(135deg, #f0d98a 0%, #c9a84c 48%, #9b6b32 100%) !important;
  color: #07101d !important;
  border: 1px solid rgba(255,255,255,.18) !important;
}
.btn-primary:hover,
.btn-gold:hover,
.kag-quiz-submit:hover {
  filter: brightness(1.06) saturate(1.05) !important;
  transform: translateY(-2px) !important;
}
input,
textarea,
select {
  box-shadow: inset 0 1px 0 rgba(255,255,255,.035), 0 16px 32px rgba(0,0,0,.14) !important;
}
input:focus,
textarea:focus,
select:focus {
  border-color: rgba(212,175,74,.72) !important;
  box-shadow: 0 0 0 3px rgba(212,175,74,.10), inset 0 1px 0 rgba(255,255,255,.04) !important;
}
.kag-contact-stack {
  filter: drop-shadow(0 18px 34px rgba(0,0,0,.34)) !important;
}
.kag-contact-btn {
  border: 1px solid rgba(255,255,255,.16) !important;
}
.kag-contact-btn:hover {
  transform: translateY(-3px) scale(1.03) !important;
}
.section-title,
.hero-title,
.page-hero h1 {
  text-shadow: 0 18px 46px rgba(0,0,0,.32) !important;
}
.kag-ultra-visible {
  opacity: 1 !important;
  transform: none !important;
}
@media (pointer:fine) and (prefers-reduced-motion:no-preference) {
  .kag-tilt-ready { will-change: transform !important; }
}
@media (max-width: 1100px) {
  .kag-premium-ribbon__inner {
    grid-template-columns: repeat(2,minmax(0,1fr)) !important;
    width: 100% !important;
    border-left: 0 !important;
    border-right: 0 !important;
  }
  .kag-premium-ribbon__brand,
  .kag-premium-ribbon__link { grid-column: span 2 !important; }
}
@media (max-width: 600px) {
  .kag-scroll-progress { top: 72px !important; }
  .kag-premium-ribbon__inner { grid-template-columns: 1fr !important; }
  .kag-premium-ribbon__brand,
  .kag-premium-ribbon__link { grid-column: auto !important; }
  .kag-premium-ribbon__brand,
  .kag-premium-ribbon__item,
  .kag-premium-ribbon__link {
    min-height: 62px !important;
    padding: .78rem 16px !important;
    text-align: center !important;
    align-items: center !important;
  }
}
@media (prefers-reduced-motion: reduce) {
  .practice-card,
  .case-card,
  .article-item,
  .service-card,
  .lawyer-card,
  .team-card,
  .why-item,
  .contact-card,
  .kag-quality-card,
  .kag-premium-card,
  .btn,
  .kag-contact-btn {
    transition: none !important;
    transform: none !important;
  }
}
/* === /KAGRIFON ultra premium depth layer 2026-05-23 === */
`;
    document.head.appendChild(premiumDepthStyle);
  }

  if (!document.querySelector('.kag-scroll-progress')) {
    document.body.insertAdjacentHTML('afterbegin', '<div class="kag-scroll-progress" aria-hidden="true"></div>');
    var progressEl = document.querySelector('.kag-scroll-progress');
    var progressTicking = false;
    function updatePremiumProgress() {
      if (!progressEl) return;
      var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      var pct = Math.max(0, Math.min(100, (window.scrollY / max) * 100));
      progressEl.style.width = pct + '%';
      progressTicking = false;
    }
    window.addEventListener('scroll', function() {
      if (!progressTicking) {
        progressTicking = true;
        window.requestAnimationFrame(updatePremiumProgress);
      }
    }, { passive: true });
    updatePremiumProgress();
  }

  if (!document.querySelector('.kag-premium-ribbon')) {
    var heroNode = document.querySelector('.hero, .page-hero, .kag-money-hero, .kag-proof-hero, .vak-hero, .article-hero, .service-hero, .practice-hero, .team-hero, .contact-hero');
    if (!heroNode) {
      var firstH1 = document.querySelector('h1');
      heroNode = firstH1 ? (firstH1.closest('section') || firstH1.parentElement) : null;
    }
    if (heroNode) {
      var ribbonHTML = '' +
        '<section class="kag-premium-ribbon" aria-label="Проверяемые факты МКА Грифон">' +
          '<div class="kag-premium-ribbon__inner">' +
            '<div class="kag-premium-ribbon__brand"><b>МКА «Грифон»</b><span>Москва · юридическая защита</span></div>' +
            '<div class="kag-premium-ribbon__item"><b>с 2014 года</b><span>практика коллегии</span></div>' +
            '<div class="kag-premium-ribbon__item"><b>65+ адвокатов</b><span>команда по направлениям</span></div>' +
            '<div class="kag-premium-ribbon__item"><b>адвокатская тайна</b><span>защищена законом</span></div>' +
            '<div class="kag-premium-ribbon__item"><b>Дмитровский проезд</b><span>офис в Москве</span></div>' +
            '<a class="kag-premium-ribbon__link" href="/otzyvy-o-kollegii-advokatov-grifon.html"><b>Отзывы и репутация</b><span>реальные отзывы без фейков</span></a>' +
          '</div>' +
        '</section>';
      heroNode.insertAdjacentHTML('afterend', ribbonHTML);
    }
  }

  if (window.matchMedia && window.matchMedia('(pointer:fine) and (prefers-reduced-motion:no-preference)').matches) {
    var tiltCards = Array.prototype.slice.call(document.querySelectorAll('.practice-card,.case-card,.article-item,.service-card,.lawyer-card,.team-card,.kag-quality-card,.kag-premium-card')).slice(0, 90);
    tiltCards.forEach(function(card) {
      if (card.dataset.kagTilt === '1') return;
      card.dataset.kagTilt = '1';
      card.classList.add('kag-tilt-ready');
      card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / Math.max(1, rect.width) - .5) * 5;
        var y = ((e.clientY - rect.top) / Math.max(1, rect.height) - .5) * -4;
        card.style.transform = 'translateY(-5px) perspective(1000px) rotateX(' + y.toFixed(2) + 'deg) rotateY(' + x.toFixed(2) + 'deg)';
      });
      card.addEventListener('mouseleave', function() {
        card.style.transform = '';
      });
    });
  }
  // === KAGRIFON ULTRA PREMIUM DEPTH LAYER 2026-05-23 END ===

  // === KAGRIFON MOBILE COMPACT RHYTHM 2026-05-23 START ===
  if (!document.getElementById('kagrifon-mobile-compact-rhythm-style')) {
    var compactRhythmStyle = document.createElement('style');
    compactRhythmStyle.id = 'kagrifon-mobile-compact-rhythm-style';
    compactRhythmStyle.textContent = `
a.kag-home-msg[href*="t.me"],
a.kag-home-msg[href*="max.ru"],
.mobile-nav a[href*="t.me"],
.mobile-nav a[href*="max.ru"],
.kag-contact-stack a[href*="t.me"],
.kag-contact-stack a[href*="max.ru"],
a.btn[href*="t.me"],
.service-lead-actions a[href*="t.me"],
.bfp-global-lead-actions a[href*="t.me"],
.cta-actions a[href*="t.me"] {
  display: flex !important;
  visibility: visible !important;
  opacity: 1 !important;
  pointer-events: auto !important;
}
.kag-contact-btn--quiz {
  background: transparent !important;
  border-color: rgba(210,224,240,.16) !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  overflow: visible !important;
}
.kag-contact-btn--quiz:hover,
.kag-contact-btn--quiz:focus-visible {
  background: transparent !important;
  border-color: rgba(232,241,252,.34) !important;
  box-shadow: none !important;
}
.kag-quiz-mark {
  width: 46px !important;
  height: 46px !important;
  filter: drop-shadow(0 7px 12px rgba(0,0,0,.52)) drop-shadow(0 0 11px rgba(185,220,255,.30)) !important;
}
.kag-quiz-mark__core::before,
.kag-quiz-mark__core::after {
  content: none !important;
  display: none !important;
}
.kag-quiz-mark img {
  width: 46px !important;
  height: 46px !important;
  object-fit: contain !important;
  filter: brightness(1.12) contrast(1.12) drop-shadow(0 0 7px rgba(212,234,255,.20)) !important;
}
.kag-contact-label,
.kag-max-wordmark,
.kag-call-wordmark {
  display: none !important;
}
.kag-contact-icon,
.kag-contact-btn svg {
  display: block !important;
  flex: 0 0 auto !important;
}
.kag-contact-icon--tg {
  width: 30px !important;
  height: 30px !important;
  color: #fff !important;
  filter: drop-shadow(0 3px 8px rgba(0,0,0,.24)) !important;
}
.kag-contact-btn--max img.kag-contact-icon--max,
.kag-contact-icon--max {
  width: 40px !important;
  height: 40px !important;
  border-radius: 12px !important;
  object-fit: cover !important;
  box-shadow: 0 7px 18px rgba(37,95,230,.28) !important;
}
.kag-contact-icon--call {
  width: 31px !important;
  height: 31px !important;
  color: #07101d !important;
  filter: drop-shadow(0 3px 8px rgba(80,55,14,.22)) !important;
}
.kag-contact-btn--max {
  background: radial-gradient(circle at 32% 18%, rgba(255,255,255,.16), rgba(50,119,238,.30) 42%, rgba(6,13,25,.92) 100%) !important;
}
@media (max-width: 900px) {
  body { padding-bottom: 92px !important; }
  .kag-contact-stack {
    display: grid !important;
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 6px !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 9px !important;
    width: calc(100vw - 20px) !important;
    max-width: 304px !important;
    box-sizing: border-box !important;
    margin: 0 auto !important;
    transform: none !important;
    padding: 7px !important;
    border-radius: 18px !important;
  }
  .kag-contact-stack::before {
    left: 10px !important;
    bottom: calc(100% + 5px) !important;
    padding: 4px 8px !important;
    font-size: 9px !important;
    letter-spacing: .075em !important;
  }
  .kag-contact-btn,
  .kag-contact-btn--quiz,
  .kag-contact-btn--tg,
  .kag-contact-btn--max,
  .kag-contact-btn--call {
    width: 100% !important;
    min-width: 0 !important;
    max-width: none !important;
    height: auto !important;
    aspect-ratio: 1 / 1 !important;
    flex: initial !important;
    flex-grow: 0 !important;
    padding: 0 !important;
    gap: 0 !important;
    border-radius: 15px !important;
    flex-direction: row !important;
  }
  .kag-contact-label,
  .kag-max-wordmark,
  .kag-call-wordmark,
  .kag-contact-btn--tg .kag-contact-label,
  .kag-contact-btn--max .kag-contact-label,
  .kag-contact-btn--call .kag-contact-label,
  .kag-contact-btn--quiz .kag-contact-label {
    display: none !important;
  }
  .kag-contact-btn svg.kag-contact-icon,
  .kag-contact-icon {
    width: 58% !important;
    height: 58% !important;
    max-width: 58% !important;
    max-height: 58% !important;
  }
  .kag-contact-btn--max img.kag-contact-icon--max,
  .kag-contact-icon--max {
    width: 72% !important;
    height: 72% !important;
    max-width: 72% !important;
    max-height: 72% !important;
    border-radius: 18% !important;
  }
  .kag-contact-icon--call {
    width: 54% !important;
    height: 54% !important;
    max-width: 54% !important;
    max-height: 54% !important;
  }
  .kag-contact-btn--quiz {
    background: transparent !important;
    border-color: rgba(210,224,240,.10) !important;
    box-shadow: none !important;
  }
  .kag-quiz-mark {
    width: 62% !important;
    height: 62% !important;
    max-width: 62% !important;
    max-height: 62% !important;
  }
  .kag-quiz-mark img {
    width: 100% !important;
    height: 100% !important;
    max-width: 100% !important;
    max-height: 100% !important;
  }
}
@media (max-width: 600px) {
  body { padding-bottom: 92px !important; }
  .seo-breadcrumbs { display: none !important; }
  .kag-contact-stack {
    display: grid !important;
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 6px !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 9px !important;
    width: calc(100vw - 20px) !important;
    max-width: 304px !important;
    box-sizing: border-box !important;
    margin: 0 auto !important;
    transform: none !important;
    padding: 7px !important;
    border-radius: 18px !important;
  }
  .kag-contact-stack::before {
    left: 10px !important;
    bottom: calc(100% + 5px) !important;
    padding: 4px 8px !important;
    font-size: 9px !important;
    letter-spacing: .075em !important;
  }
  .kag-contact-btn,
  .kag-contact-btn--quiz,
  .kag-contact-btn--tg,
  .kag-contact-btn--max,
  .kag-contact-btn--call {
    width: 100% !important;
    min-width: 0 !important;
    max-width: none !important;
    height: auto !important;
    aspect-ratio: 1 / 1 !important;
    flex: initial !important;
    flex-grow: 0 !important;
    padding: 0 !important;
    gap: 0 !important;
    border-radius: 15px !important;
    flex-direction: row !important;
  }
  .kag-contact-label,
  .kag-max-wordmark,
  .kag-call-wordmark {
    display: none !important;
  }
  .kag-contact-btn--tg .kag-contact-label,
  .kag-contact-btn--max .kag-contact-label,
  .kag-contact-btn--call .kag-contact-label,
  .kag-contact-btn--quiz .kag-contact-label {
    display: none !important;
  }
  .kag-contact-btn svg.kag-contact-icon,
  .kag-contact-icon {
    width: 58% !important;
    height: 58% !important;
    max-width: 58% !important;
    max-height: 58% !important;
  }
  .kag-contact-btn--max img.kag-contact-icon--max,
  .kag-contact-icon--max {
    width: 72% !important;
    height: 72% !important;
    max-width: 72% !important;
    max-height: 72% !important;
    border-radius: 18% !important;
  }
  .kag-contact-icon--call {
    width: 54% !important;
    height: 54% !important;
    max-width: 54% !important;
    max-height: 54% !important;
  }
  .kag-contact-btn--quiz {
    background: transparent !important;
    border-color: rgba(210,224,240,.10) !important;
    box-shadow: none !important;
  }
  .kag-quiz-mark,
  .kag-quiz-mark img {
    width: 62% !important;
    height: 62% !important;
    max-width: 62% !important;
    max-height: 62% !important;
  }
  .kag-quiz-mark img {
    width: 100% !important;
    height: 100% !important;
    max-width: 100% !important;
    max-height: 100% !important;
  }
  .breadcrumb.container,
  .kag-breadcrumbs {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    margin: 86px auto 0 !important;
    padding: 0 16px !important;
    min-height: 0 !important;
    font-size: 12px !important;
    line-height: 1.35 !important;
    text-align: left !important;
    color: rgba(216,226,238,.58) !important;
    overflow: hidden !important;
  }
  .breadcrumb.container::before,
  .kag-breadcrumbs::before {
    width: 24px !important;
    margin-right: 10px !important;
  }
  .breadcrumb.container a,
  .kag-breadcrumbs a {
    color: rgba(216,226,238,.58) !important;
  }
  .breadcrumb.container span,
  .kag-breadcrumbs span {
    color: #d4af4a !important;
  }
  .breadcrumb.container + .page-hero,
  .kag-breadcrumbs + .page-hero,
  .kag-breadcrumbs + .kag-money-hero {
    margin-top: 0 !important;
  }
  .page-hero,
  .service-hero,
  .practice-hero,
  .team-hero,
  .contact-hero,
  .article-hero,
  .vak-hero,
  body.legacy-article > .hero {
    padding-top: 18px !important;
    padding-bottom: 34px !important;
    min-height: auto !important;
    align-items: flex-start !important;
  }
  .page-hero .container,
  .page-hero-content,
  .page-hero .container > *,
  .service-hero .container,
  .practice-hero .container,
  .team-hero .container,
  .contact-hero .container,
  .article-hero .container,
  .vak-hero .container {
    padding-top: 0 !important;
    margin-top: 0 !important;
  }
  .page-hero-label,
  .page-hero .section-tag,
  .service-hero .section-tag,
  .practice-hero .section-tag,
  .team-hero .section-tag,
  .contact-hero .section-tag,
  .article-hero .section-tag,
  .vak-hero .section-tag {
    margin-top: 0 !important;
    margin-bottom: .62rem !important;
  }
  .page-hero h1,
  .service-hero h1,
  .practice-hero h1,
  .team-hero h1,
  .contact-hero h1,
  .article-hero h1,
  .vak-hero h1,
  body.legacy-article > .hero h1 {
    font-size: clamp(31px, 9vw, 39px) !important;
    line-height: 1.06 !important;
    margin-top: 0 !important;
    margin-bottom: .65rem !important;
  }
  .page-hero-desc,
  .page-hero p,
  .service-hero p,
  .practice-hero p,
  .team-hero p,
  .contact-hero p,
  .article-hero p,
  .vak-hero p,
  body.legacy-article > .hero p {
    margin-top: 0 !important;
    margin-bottom: .8rem !important;
  }
}
`;
    document.head.appendChild(compactRhythmStyle);
  }
  // === KAGRIFON MOBILE COMPACT RHYTHM 2026-05-23 END ===

  // === KAGRIFON AUDIT MOBILE HARDENING 2026-05-24 START ===
  if (!document.getElementById('kagrifon-audit-mobile-hardening-style')) {
    var auditMobileStyle = document.createElement('style');
    auditMobileStyle.id = 'kagrifon-audit-mobile-hardening-style';
    auditMobileStyle.textContent = `
html,
body {
  max-width: 100% !important;
  overflow-x: hidden !important;
}
@media (max-width: 600px) {
  .page-hero,
  .service-hero,
  .practice-hero,
  .team-hero,
  .contact-hero,
  .article-hero,
  .vak-hero,
  body.legacy-article > .hero {
    padding-top: 92px !important;
    padding-bottom: 32px !important;
  }
  body.home-page .home-hero {
    overflow-x: hidden !important;
  }
  body.home-page .home-hero__shell {
    width: min(calc(100% - 32px), 390px) !important;
    max-width: min(calc(100% - 32px), 390px) !important;
    margin-left: auto !important;
    margin-right: auto !important;
    overflow: visible !important;
  }
  body.home-page .home-hero__copy,
  body.home-page .home-hero__actions,
  body.home-page .home-hero__facts {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
  }
  body.home-page .home-hero__eyebrow,
  body.home-page .home-hero__lead {
    max-width: 100% !important;
    overflow-wrap: break-word !important;
  }
  body.home-page .home-hero__title {
    max-width: 100% !important;
    font-size: clamp(27px, 7.15vw, 30px) !important;
    line-height: 1.05 !important;
    overflow-wrap: break-word !important;
  }
  body.home-page .home-hero__title span {
    font-size: .88em !important;
    line-height: 1.08 !important;
  }
  body.home-page .home-hero__cta-grid {
    width: 100% !important;
    max-width: 100% !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    overflow: visible !important;
  }
  body.home-page .home-cta {
    min-width: 0 !important;
    max-width: 100% !important;
    overflow: visible !important;
  }
  .kag-contact-stack {
    left: 50% !important;
    right: auto !important;
    bottom: calc(9px + env(safe-area-inset-bottom)) !important;
    width: min(calc(100vw - 28px), 304px) !important;
    max-width: min(calc(100vw - 28px), 304px) !important;
    transform: translateX(-50%) !important;
  }
  .kag-contact-stack::before {
    left: 10px !important;
    max-width: calc(100vw - 48px) !important;
    white-space: nowrap !important;
  }
}
@media (max-width: 374px) {
  body.home-page .home-hero__title {
    font-size: 26px !important;
  }
  body.home-page .home-cta {
    font-size: 12.5px !important;
    padding-inline: 6px !important;
  }
  body.home-page .home-cta span {
    font-size: 10px !important;
  }
}
`;
    document.head.appendChild(auditMobileStyle);
  }
  // === KAGRIFON AUDIT MOBILE HARDENING 2026-05-24 END ===

  // === KAGRIFON MATRIX SHELL 2026-05-24 START ===
  if (!document.getElementById('kagrifon-matrix-shell-style')) {
    var matrixShellStyle = document.createElement('style');
    matrixShellStyle.id = 'kagrifon-matrix-shell-style';
    matrixShellStyle.textContent = `
#nav.site-nav,
#nav {
  height: 84px !important;
  min-height: 84px !important;
  contain: layout paint !important;
  transform: translateZ(0) !important;
}
#nav .nav-brand {
  flex: 0 0 clamp(286px, 21vw, 390px) !important;
  width: clamp(286px, 21vw, 390px) !important;
  min-width: clamp(286px, 21vw, 390px) !important;
}
#nav .nav-menu {
  height: 84px !important;
  min-height: 84px !important;
}
#nav .nav-link {
  padding-inline: clamp(.34rem, .44vw, .62rem) !important;
}
@media (min-width: 1281px) {
  #nav .nav-phone {
    font-size: clamp(.72rem, .74vw, .84rem) !important;
  }
}
body:not(.home-page) .hero,
body:not(.home-page) .page-hero,
body:not(.home-page) .kag-money-hero,
body:not(.home-page) .kag-proof-hero,
body:not(.home-page) .vak-hero,
body:not(.home-page) .article-hero,
body:not(.home-page) .service-hero,
body:not(.home-page) .practice-hero,
body:not(.home-page) .team-hero,
body:not(.home-page) .contact-hero,
body:not(.home-page) .kag-matrix-hero-target {
  position: relative !important;
  isolation: isolate !important;
  overflow: hidden !important;
}
body:not(.home-page) .kag-matrix-hero-target {
  min-height: clamp(280px, 27vw, 420px) !important;
  padding-top: clamp(72px, 8vw, 112px) !important;
  padding-bottom: clamp(48px, 6vw, 86px) !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
}
body:not(.home-page) .hero::after,
body:not(.home-page) .page-hero::after,
body:not(.home-page) .kag-money-hero::after,
body:not(.home-page) .kag-proof-hero::after,
body:not(.home-page) .vak-hero::after,
body:not(.home-page) .article-hero::after,
body:not(.home-page) .service-hero::after,
body:not(.home-page) .practice-hero::after,
body:not(.home-page) .team-hero::after,
body:not(.home-page) .contact-hero::after,
body:not(.home-page) .kag-matrix-hero-target::after {
  content: "" !important;
  display: block !important;
  position: absolute !important;
  z-index: 0 !important;
  pointer-events: none !important;
  right: clamp(16px, 7vw, 108px) !important;
  top: 50% !important;
  width: clamp(230px, 28vw, 470px) !important;
  height: clamp(280px, 34vw, 560px) !important;
  transform: translateY(-48%) !important;
  background: url('/assets/img/kagrifon-home-griffon-premium-20260523.png') center / contain no-repeat !important;
  opacity: .22 !important;
  filter: saturate(1.02) contrast(1.08) brightness(1.08) drop-shadow(0 28px 42px rgba(0,0,0,.36)) !important;
}
body:not(.home-page) .kag-money-hero::after {
  opacity: .14 !important;
  right: clamp(10px, 4vw, 56px) !important;
}
body:not(.home-page) .hero > *,
body:not(.home-page) .page-hero > *,
body:not(.home-page) .kag-money-hero > *,
body:not(.home-page) .kag-proof-hero > *,
body:not(.home-page) .vak-hero > *,
body:not(.home-page) .article-hero > *,
body:not(.home-page) .service-hero > *,
body:not(.home-page) .practice-hero > *,
body:not(.home-page) .team-hero > *,
body:not(.home-page) .contact-hero > *,
body:not(.home-page) .kag-matrix-hero-target > * {
  position: relative !important;
  z-index: 2 !important;
}
@media (max-width: 900px) {
  body:not(.home-page) .hero::after,
  body:not(.home-page) .page-hero::after,
  body:not(.home-page) .kag-money-hero::after,
  body:not(.home-page) .kag-proof-hero::after,
  body:not(.home-page) .vak-hero::after,
  body:not(.home-page) .article-hero::after,
  body:not(.home-page) .service-hero::after,
  body:not(.home-page) .practice-hero::after,
  body:not(.home-page) .team-hero::after,
  body:not(.home-page) .contact-hero::after,
  body:not(.home-page) .kag-matrix-hero-target::after {
    width: 170px !important;
    height: 210px !important;
    right: 50% !important;
    top: 106px !important;
    transform: translateX(50%) !important;
    opacity: .16 !important;
  }
  body:not(.home-page) .kag-matrix-hero-target {
    min-height: 240px !important;
    padding-top: 86px !important;
    padding-bottom: 42px !important;
  }
}
@media (max-width: 600px) {
  #nav.site-nav,
  #nav {
    height: 72px !important;
    min-height: 72px !important;
  }
  #nav .nav-brand {
    flex-basis: auto !important;
    width: 100% !important;
    min-width: 0 !important;
  }
  body:not(.home-page) .hero::after,
  body:not(.home-page) .page-hero::after,
  body:not(.home-page) .kag-money-hero::after,
  body:not(.home-page) .kag-proof-hero::after,
  body:not(.home-page) .vak-hero::after,
  body:not(.home-page) .article-hero::after,
  body:not(.home-page) .service-hero::after,
  body:not(.home-page) .practice-hero::after,
  body:not(.home-page) .team-hero::after,
  body:not(.home-page) .contact-hero::after,
  body:not(.home-page) .kag-matrix-hero-target::after {
    width: 112px !important;
    height: 136px !important;
    top: 84px !important;
    opacity: .12 !important;
  }
  body:not(.home-page) .kag-matrix-hero-target {
    min-height: 218px !important;
    padding-top: 78px !important;
    padding-bottom: 34px !important;
  }
}
`;
    document.head.appendChild(matrixShellStyle);
  }
  // === KAGRIFON MATRIX SHELL 2026-05-24 END ===

  // === KAGRIFON RECOVERY LIGHT RUNTIME CASCADE GUARD v1 START ===
  function keepRecoveryLightLast() {
    if (!document.body || document.body.dataset.lightNative === 'true') return;
    var recoveryLight = document.querySelector('link[data-design="recovery-light-v1"]');
    if (!recoveryLight) {
      recoveryLight = document.createElement('link');
      recoveryLight.rel = 'stylesheet';
      recoveryLight.href = '/css/recovery-light.css?v=20261103';
      recoveryLight.dataset.design = 'recovery-light-v1';
    }
    var styleNodes = document.head.querySelectorAll('style,link[rel~="stylesheet"]');
    if (styleNodes[styleNodes.length - 1] !== recoveryLight) {
      document.head.appendChild(recoveryLight);
    }
    recoveryLight.dataset.runtimeCascade = 'last';
  }

  keepRecoveryLightLast();
  Promise.resolve().then(keepRecoveryLightLast);
  if (window.requestAnimationFrame) window.requestAnimationFrame(keepRecoveryLightLast);
  if ('MutationObserver' in window && document.body.dataset.lightNative !== 'true') {
    new MutationObserver(keepRecoveryLightLast).observe(document.head, {childList: true});
  }
  // === KAGRIFON RECOVERY LIGHT RUNTIME CASCADE GUARD v1 END ===

});
