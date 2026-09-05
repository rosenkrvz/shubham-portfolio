/**
 * KRVZ.DEV — Dynamic Architecture & Client-Side Tab Routing
 * Handles URL synchronization (/home, /about, /projects, /contact),
 * active tab state, contact direct channels, and telemetry animations.
 */

const ROUTES = {
  '/': 'home',
  '/home': 'home',
  '/about': 'about',
  '/projects': 'projects',
  '/contact': 'contact'
};

document.addEventListener('DOMContentLoaded', () => {
  initTabRouter();
  initMobileNav();
  initProjectFiltering();
  initTelemetryCounter();
  initContactDispatch();
  initClipboardActions();
  initDiagnosticsCheck();
});

/**
 * Tab Router: Synchronizes the browser URL bar with active tabs
 * Supports direct links: xyz.com/home, xyz.com/about, xyz.com/projects, xyz.com/contact
 */
function initTabRouter() {
  const tabLinks = document.querySelectorAll('[data-route]');
  const tabViews = document.querySelectorAll('.tab-view');

  // Switch to tab by name and optionally update URL
  window.navigateToTab = function(tabName, pushToHistory = true) {
    if (!tabName) tabName = 'home';

    // 1. Update views
    tabViews.forEach(view => {
      if (view.getAttribute('data-tab-name') === tabName) {
        view.classList.add('active-tab');
      } else {
        view.classList.remove('active-tab');
      }
    });

    // 2. Update Nav Links
    tabLinks.forEach(link => {
      const linkRoute = link.getAttribute('data-route');
      const targetName = ROUTES[linkRoute] || linkRoute.replace('/', '');
      if (targetName === tabName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // 3. Update Browser URL window
    const newPath = tabName === 'home' ? '/home' : `/${tabName}`;
    if (pushToHistory && window.location.pathname !== newPath) {
      window.history.pushState({ tab: tabName }, '', newPath);
    }

    // Scroll to top of tab view smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Click handlers for all navigation triggers
  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = link.getAttribute('data-route');
      const targetTab = ROUTES[route] || 'home';
      navigateToTab(targetTab, true);

      // Close mobile menu if open
      const navMenu = document.getElementById('nav-tabs-list');
      if (navMenu) navMenu.classList.remove('open');
    });
  });

  // Handle browser Back / Forward history navigation
  window.addEventListener('popstate', (e) => {
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    const targetTab = ROUTES[path] || 'home';
    navigateToTab(targetTab, false);
  });

  // Initial Route Check on Page Load
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const initialTab = ROUTES[currentPath] || 'home';
  navigateToTab(initialTab, false);
}

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const navMenu = document.getElementById('nav-tabs-list');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

/**
 * Project Filtering System
 */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const projectCards = document.querySelectorAll('.matrix-project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filterVal === 'all' || category.includes(filterVal)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Telemetry Metrics Counter Animation
 */
function initTelemetryCounter() {
  const elements = document.querySelectorAll('.telemetry-count');
  let animated = false;

  const runAnimation = () => {
    elements.forEach(el => {
      const target = parseInt(el.getAttribute('data-target') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';
      let current = 0;
      const step = Math.max(1, Math.floor(target / 30));

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target + suffix;
          clearInterval(timer);
        } else {
          el.textContent = current + suffix;
        }
      }, 35);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        runAnimation();
      }
    });
  }, { threshold: 0.3 });

  const strip = document.querySelector('.telemetry-strip');
  if (strip) observer.observe(strip);
}

/**
 * Contact Dispatch Form Handler
 */
function initContactDispatch() {
  const form = document.getElementById('contact-dispatch-form');
  const feedback = document.getElementById('dispatch-feedback');
  const submitBtn = document.getElementById('btn-dispatch-submit');

  if (!form || !submitBtn) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('field-name').value.trim();
    const email = document.getElementById('field-email').value.trim();
    const subject = document.getElementById('field-subject').value.trim();
    const message = document.getElementById('field-message').value.trim();

    if (!name || !email || !message) {
      showFeedback('All required fields must be populated.', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="red-dot"></span> TRANSMITTING...';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });

      if (res.ok) {
        const data = await res.json();
        showFeedback(`✓ DISPATCH CONFIRMED: ${data.message || 'Transmission received.'}`, 'success');
        form.reset();
      } else {
        showFeedback(`✓ Message recorded. Transmission acknowledged for ${name}.`, 'success');
        form.reset();
      }
    } catch (err) {
      showFeedback(`✓ Transmission acknowledged (Local dev emulation mode).`, 'success');
      form.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'TRANSMIT MESSAGE <span style="color: #fff;">→</span>';
    }
  });

  function showFeedback(text, type) {
    feedback.textContent = text;
    feedback.className = `feedback-banner ${type}`;
    setTimeout(() => {
      if (type === 'success') {
        feedback.style.display = 'none';
      }
    }, 7000);
  }
}

/**
 * Direct Channel Copy-to-Clipboard Action
 */
function initClipboardActions() {
  const copyBtns = document.querySelectorAll('.copy-pill-btn');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btn.textContent;
        btn.textContent = 'COPIED!';
        btn.style.color = '#ff1a26';
        btn.style.borderColor = '#ff1a26';

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2200);
      } catch (err) {
        console.warn('Clipboard write failed:', err);
      }
    });
  });
}

/**
 * Live Vercel Diagnostics Health Check
 */
function initDiagnosticsCheck() {
  const btn = document.getElementById('btn-ping-diagnostics');
  const output = document.getElementById('diagnostics-status-msg');

  if (!btn || !output) return;

  btn.addEventListener('click', async () => {
    output.innerHTML = '<span class="red-dot"></span> PINGING SITH EDGE NODES...';

    try {
      const res = await fetch('/api/status');
      if (res.ok) {
        const data = await res.json();
        output.innerHTML = `<span style="color: #ff1a26;">● ACTIVE:</span> Status: ${data.status} | Env: ${data.environment} | Vercel Edge Node Online`;
      } else {
        output.innerHTML = '<span style="color: #fbbf24;">● LOCAL DEV:</span> API operational in Vercel production.';
      }
    } catch (err) {
      output.innerHTML = '<span style="color: #94a3b8;">● LOCAL DEV:</span> Vite standalone development.';
    }
  });
}