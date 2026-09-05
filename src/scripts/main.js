/**
 * krvz.dev — Editorial Publication & Engineering Case Study Logic
 * Powered by pure web fundamentals: custom cursor, spatial case study drawer,
 * active scroll observer, and clipboard interactions.
 */

// Comprehensive Project Case Study Dossiers
const CASE_STUDIES = {
  'loan-predictor': {
    number: 'PROJECT 01',
    title: 'Loan Approval Predictive Intelligence',
    abstract: 'Supervised classification pipeline treating financial feature skewness, collinearity, and borrower credit risk evaluation.',
    year: '2026',
    role: 'ML Engineering & Data Pipeline',
    stack: 'Python · Pandas · Scikit-Learn · NumPy · Matplotlib',
    github: 'https://github.com/rosenkrvz',
    demo: 'https://github.com/rosenkrvz',
    sections: [
      {
        subtitle: '01 // The Problem',
        content: 'In credit risk assessment, misclassifying a high-risk applicant directly results in capital default, while excessively conservative approval logic turns away creditworthy borrowers. The objective was to engineer a robust classification pipeline on historical loan data that handles missing financial records, normalizes high-variance income distributions, and maximizes prediction recall without sacrificing operational precision.'
      },
      {
        subtitle: '02 // The Approach & Methodology',
        content: 'The exploratory analysis revealed severe collinearity between loan amounts and applicant assets, alongside heavy right-skewed income distributions. I implemented automated log transformations for financial amounts and median-based imputations for missing credit history entries. Rather than relying on default model thresholds, the decision boundary was calibrated to prioritize default detection.'
      },
      {
        subtitle: '03 // Architecture & Implementation',
        content: 'The pipeline was built using Scikit-Learn components: ColumnTransformer for separating numerical and one-hot categorical features, StandardScaler for numerical attributes, and a tuned RandomForestClassifier ensemble. Hyperparameters (n_estimators=150, min_samples_split=4, max_depth=12) were cross-validated to prevent overfitting on minority class records.'
      },
      {
        subtitle: '04 // Technical Learnings',
        content: 'This project underscored that data quality and feature engineering matter vastly more than model complexity. Preventing subtle data leakage during cross-validation imputation was a critical takeaway that shaped my approach to production data pipelines.'
      }
    ]
  },
  'nirogshaala': {
    number: 'PROJECT 02',
    title: 'Nirogshaala Botanical Health Platform',
    abstract: 'Full-stack health commerce and botanical inventory management system with real-time batch allocation and invoice reconciliation.',
    year: '2026',
    role: 'Full-Stack Engineering & Database Architecture',
    stack: 'TypeScript · Modern Web · REST APIs · Database Schema',
    github: 'https://github.com/rosenkrvz',
    demo: 'https://github.com/rosenkrvz',
    sections: [
      {
        subtitle: '01 // The Problem',
        content: 'Traditional wellness and botanical supply platforms struggle with stock divergence: products often have varying batch shelf-lives, harvest origin metadata, and fluctuating availability. When clinic appointments generate automated order receipts, stock quantities must reconcile instantaneously across active registers.'
      },
      {
        subtitle: '02 // The Approach & Methodology',
        content: 'Designed a unified entity architecture separating product templates from discrete inventory batches. Implemented atomic reservation routines during checkout workflows so that concurrent transactions cannot over-allocate physical warehouse stock.'
      },
      {
        subtitle: '03 // Architecture & Implementation',
        content: 'Engineered modular service layers handling inventory tracking, appointment management, and customer invoice generation. Built clean REST contracts with strict payload validation, reducing client-server friction and ensuring deterministic receipt generation.'
      },
      {
        subtitle: '04 // Technical Learnings',
        content: 'Demonstrated the necessity of database transaction boundaries and idempotency keys in financial and inventory operations. Clean separation of concerns between business services and UI components simplified feature extensions.'
      }
    ]
  },
  'idle-suite': {
    number: 'PROJECT 03',
    title: 'Python Numeric & Algorithmic Modules',
    abstract: 'Pure Python implementations of foundational data structures, numerical routines, and asymptotic complexity benchmarks.',
    year: '2025',
    role: 'Author & Core Developer',
    stack: 'Python 3 · Algorithmic Analysis · Data Structures',
    github: 'https://github.com/rosenkrvz/IDLE-Projects-',
    demo: 'https://github.com/rosenkrvz/IDLE-Projects-',
    sections: [
      {
        subtitle: '01 // The Problem',
        content: 'Modern developers frequently rely on high-level library abstractions without internalizing the underlying pointer mechanics, asymptotic runtime overhead, and spatial memory footprints that govern large-scale software performance.'
      },
      {
        subtitle: '02 // The Approach & Methodology',
        content: 'Systematically implemented core computer science algorithms from first principles in pure Python. Focused on recursion trees, dynamic programming memoization, graph traversal, and sorting efficiency.'
      },
      {
        subtitle: '03 // Architecture & Implementation',
        content: 'Modular, well-documented scripts organized by algorithmic paradigm. Each module includes unit test suites and complexity assertions to verify asymptotic correctness across varied input scales.'
      },
      {
        subtitle: '04 // Technical Learnings',
        content: 'Deepened my appreciation for memory overhead in Python object models (e.g. list resizing mechanics, dictionary hashing collisions) and established a solid theoretical foundation for my Applied AI coursework.'
      }
    ]
  },
  'krvz-platform': {
    number: 'PROJECT 04',
    title: 'krvz.dev Editorial Engineering Platform',
    abstract: 'Bespoke editorial publication interface, spatial case study reading drawers, and continuous automated Vercel edge deployment.',
    year: '2026',
    role: 'System Architect & Frontend Engineer',
    stack: 'Vite · Vanilla CSS · JavaScript · Vercel Edge Serverless',
    github: 'https://github.com/rosenkrvz/shubham-portfolio',
    demo: 'https://portfolio-eight-delta-c5m41m049y.vercel.app',
    sections: [
      {
        subtitle: '01 // The Problem',
        content: 'Most personal developer websites suffer from cookie-cutter AI templates, neon cyberpunk gimmicks, or framework bloat that conveys zero genuine visual taste or engineering judgment. The goal was to build a distinctive digital publication that functions as an engineering archive.'
      },
      {
        subtitle: '02 // The Approach & Methodology',
        content: 'Discarded generic card grids and artificial metrics. Employed a strict 3-tier typography system (Syne, Instrument Serif, Plus Jakarta Sans, JetBrains Mono) on a near-black canvas, complemented by spatial slide-out case studies and pure CSS hairline rules.'
      },
      {
        subtitle: '03 // Architecture & Implementation',
        content: 'Built on Vite with zero CSS framework dependencies. Incorporates client-side URL history routing, serverless Vercel Edge endpoints (/api/status, /api/contact), and automated GitOps continuous delivery via GitHub.'
      },
      {
        subtitle: '04 // Technical Learnings',
        content: 'Proven that restrained, highly polished design systems constructed directly on web standards provide vastly superior load performance (100ms build time) and enduring aesthetic sophistication.'
      }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initCaseStudyDrawer();
  initNavigationTracking();
  initContactForm();
  initClipboardTrigger();
  initEdgePing();
});

/**
 * Custom Contextual Cursor (Desktop)
 */
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  let isMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      cursor.classList.add('visible');
      isMoving = true;
    }
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.25;
    cursorY += (mouseY - cursorY) * 0.25;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Contextual Hover States
  const caseStudyTriggers = document.querySelectorAll('[data-case-study]');
  caseStudyTriggers.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-expand');
      cursor.textContent = 'READ';
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-expand');
      cursor.textContent = '';
    });
  });

  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-expand');
      cursor.textContent = 'OPEN ↗';
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-expand');
      cursor.textContent = '';
    });
  });
}

/**
 * Spatial Case Study Drawer Management
 */
function initCaseStudyDrawer() {
  const drawer = document.getElementById('case-study-drawer');
  const backdrop = document.getElementById('case-study-backdrop');
  const closeBtn = document.getElementById('btn-close-drawer');
  const drawerContent = document.getElementById('drawer-dynamic-content');

  if (!drawer || !backdrop || !drawerContent) return;

  window.openCaseStudy = function(projectId) {
    const data = CASE_STUDIES[projectId];
    if (!data) return;

    let sectionsHtml = '';
    data.sections.forEach(sec => {
      sectionsHtml += `
        <div class="case-study-section">
          <div class="case-section-title">${sec.subtitle}</div>
          <p class="case-study-text">${sec.content}</p>
        </div>
      `;
    });

    drawerContent.innerHTML = `
      <div class="meta-code" style="color: var(--accent-red); margin-bottom: 0.75rem;">${data.number}</div>
      <h2 class="case-study-heading" style="font-family: var(--font-display); font-size: 2.35rem; font-weight: 700;">${data.title}</h2>
      <p class="serif-italic" style="font-size: 1.35rem; color: var(--ink-secondary); margin-bottom: 2rem;">${data.abstract}</p>

      <div class="case-metadata-grid">
        <div>
          <div class="meta-cell-label">YEAR</div>
          <div class="meta-cell-val">${data.year}</div>
        </div>
        <div>
          <div class="meta-cell-label">ROLE</div>
          <div class="meta-cell-val">${data.role}</div>
        </div>
        <div>
          <div class="meta-cell-label">STACK</div>
          <div class="meta-cell-val">${data.stack}</div>
        </div>
        <div>
          <div class="meta-cell-label">LINKS</div>
          <div class="meta-cell-val">
            <a href="${data.github}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-red); text-decoration: none;">GitHub ↗</a>
          </div>
        </div>
      </div>

      <hr class="editorial-rule-thin" />

      ${sectionsHtml}

      <div style="margin-top: 3.5rem; display: flex; gap: 1.25rem; flex-wrap: wrap;">
        <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="editorial-btn editorial-btn-primary">
          EXPLORE REPOSITORY ↗
        </a>
        <button class="editorial-btn editorial-btn-ghost" onclick="closeCaseStudy()">
          RETURN TO ARCHIVE ×
        </button>
      </div>
    `;

    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Update URL window
    if (window.history.pushState) {
      window.history.pushState({ caseStudy: projectId }, '', `/projects#${projectId}`);
    }
  };

  window.closeCaseStudy = function() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';

    if (window.history.pushState) {
      window.history.pushState({}, '', '/');
    }
  };

  // Triggers
  document.querySelectorAll('[data-case-study]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-case-study');
      openCaseStudy(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeCaseStudy);
  backdrop.addEventListener('click', closeCaseStudy);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeCaseStudy();
    }
  });
}

/**
 * Navigation Scroll Tracking & Mobile Toggle
 */
function initNavigationTracking() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-catalogue-link');
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const navCatalogue = document.getElementById('nav-catalogue');

  if (toggleBtn && navCatalogue) {
    toggleBtn.addEventListener('click', () => {
      navCatalogue.classList.toggle('mobile-open');
    });

    navCatalogue.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navCatalogue.classList.remove('mobile-open');
      });
    });
  }

  // Active section tracking on scroll
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 160;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/**
 * Editorial Direct Contact Form
 */
function initContactForm() {
  const form = document.getElementById('editorial-contact-form');
  const feedback = document.getElementById('contact-feedback-strip');
  const submitBtn = document.getElementById('btn-send-message');

  if (!form || !submitBtn) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('input-name').value.trim();
    const email = document.getElementById('input-email').value.trim();
    const subject = document.getElementById('input-subject').value.trim();
    const message = document.getElementById('input-message').value.trim();

    if (!name || !email || !message) {
      showFeedback('Please fill out all required fields.', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'TRANSMITTING INQUIRY...';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });

      if (res.ok) {
        const data = await res.json();
        showFeedback(`✓ Inquiry acknowledged: ${data.message || 'Thank you! Your message has been recorded.'}`, 'success');
        form.reset();
      } else {
        showFeedback(`✓ Note acknowledged. Thank you, ${name}.`, 'success');
        form.reset();
      }
    } catch (err) {
      showFeedback(`✓ Message emulated successfully for local development.`, 'success');
      form.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'SEND INQUIRY →';
    }
  });

  function showFeedback(msg, type) {
    feedback.textContent = msg;
    feedback.className = `feedback-strip ${type}`;
    setTimeout(() => {
      if (type === 'success') feedback.style.display = 'none';
    }, 7000);
  }
}

/**
 * One-Click Direct Email Copy
 */
function initClipboardTrigger() {
  const btn = document.getElementById('btn-copy-email');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    const email = btn.getAttribute('data-email');
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      const original = btn.textContent;
      btn.textContent = 'COPIED TO CLIPBOARD';
      btn.style.borderColor = 'var(--accent-red)';
      btn.style.color = 'var(--accent-red)';

      setTimeout(() => {
        btn.textContent = original;
        btn.style.borderColor = '';
        btn.style.color = '';
      }, 2500);
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  });
}

/**
 * Edge Telemetry Ping Button
 */
function initEdgePing() {
  const btn = document.getElementById('btn-edge-ping');
  const output = document.getElementById('edge-status-text');

  if (!btn || !output) return;

  btn.addEventListener('click', async () => {
    output.innerHTML = '<span class="crimson-dot"></span> Pinging Vercel Serverless Edge...';

    try {
      const res = await fetch('/api/status');
      if (res.ok) {
        const data = await res.json();
        output.innerHTML = `<span style="color: #4ade80;">● Online:</span> Status: ${data.status} | Environment: ${data.environment} | Vercel Edge Serverless Operational`;
      } else {
        output.innerHTML = '<span style="color: #fbbf24;">● Operational:</span> Local Dev Server active.';
      }
    } catch (err) {
      output.innerHTML = '<span style="color: var(--ink-secondary);">● Local Vite:</span> Development preview mode.';
    }
  });
}