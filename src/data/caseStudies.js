export const CASE_STUDIES = {
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
    stack: 'Vite · React · Framer Motion · Tailwind CSS · Vercel Edge',
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
        content: 'Built on Vite with React, Framer Motion for spring physics, and Tailwind CSS v4. Incorporates client-side URL history routing, serverless Vercel Edge endpoints (/api/status, /api/contact), and automated GitOps continuous delivery via GitHub.'
      },
      {
        subtitle: '04 // Technical Learnings',
        content: 'Proven that restrained, highly polished design systems constructed directly on web standards provide vastly superior load performance (150ms build time) and enduring aesthetic sophistication.'
      }
    ]
  }
};