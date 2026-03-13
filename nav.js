(function () {
  // ─── GOOGLE ANALYTICS 4 ───
  // Ersätt G-XXXXXXXXXX med ditt riktiga Measurement ID från Google Analytics
  const GA_ID = 'G-LV74LVZXJP';
  if (GA_ID !== 'G-XXXXXXXXXX') {
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s1);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  // Detect depth from root to set correct relative paths
  const path = window.location.pathname;
  const depth = (path.match(/\//g) || []).length - 1;
  const root = depth === 0 ? '/' : '../'.repeat(depth);

  const html = `
    <nav id="main-nav">
      <div class="nav-inner">
        <a href="${root}" class="nav-logo">
          <img src="${root}img/logo.png" alt="FlowForge AI">
        </a>
        <ul class="nav-links">
          <li><a href="${root}forgesocial/">ForgeSocial</a></li>
          <li><a href="${root}about/">About</a></li>
          <li><a href="mailto:robban@flowforgeai.app">Contact</a></li>
          <li><a href="${root}forgesocial/" class="nav-cta">Get Started</a></li>
        </ul>
        <div class="hamburger" onclick="toggleMobileNav()" aria-label="Menu">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div class="mobile-nav" id="mobileNav">
        <a href="${root}forgesocial/">ForgeSocial</a>
        <a href="${root}about/">About</a>
        <a href="mailto:robban@flowforgeai.app">Contact</a>
        <a href="${root}forgesocial/">Get Started →</a>
      </div>
    </nav>

    <style>
      #main-nav {
        position: fixed;
        top: 0; left: 0; right: 0;
        z-index: 100;
        background: rgba(13,17,23,0.9);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(99,102,241,0.2);
      }
      #main-nav .nav-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 32px;
        height: 68px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      #main-nav .nav-logo img {
        height: 44px;
        width: auto;
        display: block;
      }
      #main-nav .nav-links {
        display: flex;
        align-items: center;
        gap: 36px;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      #main-nav .nav-links a {
        color: #9ca3af;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        font-family: 'DM Sans', sans-serif;
        transition: color 0.2s;
      }
      #main-nav .nav-links a:hover { color: #ffffff; }
      #main-nav .nav-cta {
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: #fff !important;
        padding: 10px 22px;
        border-radius: 50px;
        font-weight: 600 !important;
        transition: opacity 0.2s, transform 0.2s !important;
      }
      #main-nav .nav-cta:hover { opacity: 0.9; transform: translateY(-1px); }
      #main-nav .hamburger {
        display: none;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        padding: 4px;
        background: none;
        border: none;
      }
      #main-nav .hamburger span {
        display: block;
        width: 24px;
        height: 2px;
        background: #ffffff;
        border-radius: 2px;
        transition: 0.3s;
      }
      #main-nav .mobile-nav {
        display: none;
        flex-direction: column;
        background: rgba(13,17,23,0.98);
        padding: 20px 32px 28px;
        border-bottom: 1px solid rgba(99,102,241,0.2);
      }
      #main-nav .mobile-nav.open { display: flex; }
      #main-nav .mobile-nav a {
        color: #9ca3af;
        text-decoration: none;
        font-size: 1rem;
        font-family: 'DM Sans', sans-serif;
        padding: 10px 0;
        border-bottom: 1px solid rgba(99,102,241,0.2);
        transition: color 0.2s;
      }
      #main-nav .mobile-nav a:last-child { border-bottom: none; }
      #main-nav .mobile-nav a:hover { color: #ffffff; }

      @media (max-width: 768px) {
        #main-nav .nav-links { display: none; }
        #main-nav .hamburger { display: flex; }
      }
    </style>
  `;

  // Inject navbar
  const container = document.getElementById('navbar');
  if (container) {
    container.innerHTML = html;
  } else {
    document.body.insertAdjacentHTML('afterbegin', html);
  }

  // Mobile toggle – global function
  window.toggleMobileNav = function () {
    document.getElementById('mobileNav').classList.toggle('open');
  };
})();
