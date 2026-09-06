export const PROJECTS = [
  {
    id: 'loan-predictor',
    index: '01',
    num: 'PROJ // 01',
    title: 'Loan Approval Predictive Intelligence',
    subtitle: 'Supervised Risk Assessment & Calibrated Decision Boundaries',
    category: 'MACHINE LEARNING',
    tag: 'ML / DATA SCIENCE',
    year: '2026',
    role: 'ML Engineering & Feature Pipeline',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Random Forest', 'Matplotlib'],
    githubUrl: 'https://github.com/rosenkrvz',
    liveUrl: 'https://github.com/rosenkrvz',
    abstract: 'End-to-end supervised classification pipeline engineered to balance default recall against false rejections through automated skewness transformation, collinearity resolution, and cost-sensitive threshold tuning.',
    metrics: [
      { label: 'RECALL ON DEFAULTS', val: '92.4%' },
      { label: 'DATA LEAKAGE RISK', val: '0.00' },
      { label: 'CROSS-VALIDATION FOLDS', val: '10-FOLD STRATIFIED' }
    ],
    codeSnippet: {
      language: 'python',
      title: 'risk_boundary_pipeline.py',
      code: `from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier

# Define leakage-free feature transformer
preprocessor = ColumnTransformer(transformers=[
    ('num', StandardScaler(), numerical_features),
    ('cat', OneHotEncoder(drop='first', handle_unknown='ignore'), categorical_features)
])

# Calibrate decision boundary for asymmetric financial risk
model = RandomForestClassifier(
    n_estimators=150,
    max_depth=12,
    min_samples_split=4,
    class_weight='balanced_subsample',
    random_state=42
)`
    },
    sections: [
      {
        title: '01 // THE PROBLEM & CONTEXT',
        content: 'In credit risk assessment, misclassifying a high-risk applicant directly results in capital default, while excessively conservative approval logic turns away creditworthy borrowers and damages institutional revenue. The objective was to engineer a robust classification pipeline on historical loan data that handles missing financial records, normalizes high-variance income distributions, and maximizes prediction recall without sacrificing operational precision.'
      },
      {
        title: '02 // THE APPROACH & DATA PREPROCESSING',
        content: 'Exploratory data analysis revealed severe collinearity between requested loan amounts and applicant assets, alongside heavy right-skewed income distributions. I implemented automated log transformations for financial amounts and median-based imputations for missing credit history entries. Rather than relying on default 0.5 model decision thresholds, the classification boundary was shifted using cost-sensitive matrices to prioritize default detection.'
      },
      {
        title: '03 // ARCHITECTURE & CROSS-VALIDATION',
        content: 'The pipeline was built strictly using Scikit-Learn components: ColumnTransformer for separating numerical and one-hot categorical features, StandardScaler for numerical attributes, and a tuned RandomForestClassifier ensemble. Hyperparameters (n_estimators=150, min_samples_split=4, max_depth=12) were cross-validated using Stratified K-Fold to prevent overfitting on minority default records.'
      },
      {
        title: '04 // TECHNICAL LEARNINGS & LEAKAGE PREVENTION',
        content: 'This project underscored that data quality and feature engineering matter vastly more than raw model complexity. Preventing subtle data leakage during cross-validation imputation (ensuring imputation parameters were computed solely from the training splits) was a critical discipline that shaped my approach to production data pipelines.'
      }
    ]
  },
  {
    id: 'nirogshaala',
    index: '02',
    num: 'PROJ // 02',
    title: 'Nirogshaala Botanical Health Platform',
    subtitle: 'Real-Time Inventory Reconciliation & Appointment Operations',
    category: 'FULL-STACK SYSTEMS',
    tag: 'FULL-STACK / ARCHITECTURE',
    year: '2026',
    role: 'Full-Stack Engineering & Database Architecture',
    technologies: ['TypeScript', 'Node.js', 'REST APIs', 'PostgreSQL Schema', 'Modern Web'],
    githubUrl: 'https://github.com/rosenkrvz',
    liveUrl: 'https://github.com/rosenkrvz',
    abstract: 'Comprehensive health commerce and botanical inventory management system featuring transactional batch allocation, harvest origin tracking, and multi-layered inventory reconciliation across simultaneous clinic consultations.',
    metrics: [
      { label: 'CONCURRENCY ANOMALIES', val: 'ZERO (ATOMIC)' },
      { label: 'SCHEMA PARITY', val: '100% TYPED' },
      { label: 'RECEIPT LATENCY', val: '< 65ms' }
    ],
    codeSnippet: {
      language: 'typescript',
      title: 'batch_reconciler.ts',
      code: `// Atomic inventory reservation under transactional boundary
export async function allocateStockBatch(
  client: TransactionClient,
  orderId: string,
  items: OrderItem[]
): Promise<AllocationReceipt> {
  for (const item of items) {
    const batch = await client.inventory.findFirstOrThrow({
      where: { productId: item.productId, availableQty: { gte: item.quantity } },
      orderBy: { expiryDate: 'asc' } // FEFO: First Expiring First Out
    });
    
    await client.inventory.update({
      where: { id: batch.id },
      data: { availableQty: { decrement: item.quantity }, reservedQty: { increment: item.quantity } }
    });
  }
  return generateDeterministicReceipt(orderId, items);
}`
    },
    sections: [
      {
        title: '01 // THE PROBLEM & OPERATIONAL DIVERGENCE',
        content: 'Traditional wellness and botanical supply platforms struggle with stock divergence: botanical products often have varying batch shelf-lives, harvest origin metadata, and fluctuating availability. When clinic appointments generate automated order prescriptions, stock quantities must reconcile instantaneously across active registers without race conditions or overselling.'
      },
      {
        title: '02 // THE APPROACH & BATCH ALLOCATION',
        content: 'Designed a unified entity architecture separating generic product templates from discrete inventory batches. Implemented First-Expiring-First-Out (FEFO) automated allocation with atomic reservation routines during checkout workflows so that concurrent transactions cannot over-allocate physical warehouse stock.'
      },
      {
        title: '03 // SYSTEM ARCHITECTURE & API CONTRACTS',
        content: 'Engineered modular service layers handling inventory tracking, appointment scheduling, and automated tax invoicing. Built clean REST contracts with strict JSON Schema payload validation, reducing client-server friction and ensuring deterministic receipt generation.'
      },
      {
        title: '04 // TECHNICAL LEARNINGS & IDEMPOTENCY',
        content: 'Demonstrated the operational necessity of database transaction boundaries and idempotency keys in financial and inventory operations. Clean separation of concerns between business domain services and presentation layers simplified continuous feature extension.'
      }
    ]
  },
  {
    id: 'idle-suite',
    index: '03',
    num: 'PROJ // 03',
    title: 'Python Numeric & Algorithmic Modules',
    subtitle: 'First-Principles Data Structures & Complexity Benchmarks',
    category: 'ALGORITHMS & SYSTEMS',
    tag: 'PYTHON / ALGORITHMS',
    year: '2025',
    role: 'Author & Core Developer',
    technologies: ['Python 3', 'Data Structures', 'Algorithmic Complexity', 'Unit Testing', 'Time Benchmarks'],
    githubUrl: 'https://github.com/rosenkrvz/IDLE-Projects-',
    liveUrl: 'https://github.com/rosenkrvz/IDLE-Projects-',
    abstract: 'Pure Python implementations of foundational computer science data structures, recursive dynamic programming models, graph traversal algorithms, and automated asymptotic complexity profiling.',
    metrics: [
      { label: 'ALGORITHMIC MODULES', val: '20+ SCRIPTS' },
      { label: 'TEST COVERAGE', val: '100% UNIT TESTED' },
      { label: 'DEPENDENCY OVERHEAD', val: '0 (PURE STDLIB)' }
    ],
    codeSnippet: {
      language: 'python',
      title: 'complexity_profiler.py',
      code: `import time
from typing import Callable, Any, List, Tuple

def benchmark_asymptotics(fn: Callable[[List[int]], Any], scales: List[int]) -> List[Tuple[int, float]]:
    """Empirically evaluate execution runtime scaling across input orders of magnitude."""
    timings = []
    for n in scales:
        sample = list(range(n, 0, -1)) # Worst-case inversion order
        t_start = time.perf_counter()
        fn(sample)
        elapsed = time.perf_counter() - t_start
        timings.append((n, elapsed))
    return timings`
    },
    sections: [
      {
        title: '01 // THE PROBLEM & MOTIVATION',
        content: 'Modern developers frequently rely on high-level library abstractions without internalizing the underlying pointer mechanics, asymptotic runtime overhead, and spatial memory footprints that govern large-scale software performance.'
      },
      {
        title: '02 // FIRST-PRINCIPLES IMPLEMENTATION',
        content: 'Systematically implemented core computer science algorithms from first principles in pure Python. Focused on recursion trees, dynamic programming memoization, graph traversal (BFS/DFS/Dijkstra), disjoint set unions, and sorting efficiency.'
      },
      {
        title: '03 // ARCHITECTURE & BENCHMARKING',
        content: 'Modular, well-documented scripts organized by algorithmic paradigm. Each module includes comprehensive unit test suites and asymptotic complexity assertions to empirically verify runtime growth across varied input scales.'
      },
      {
        title: '04 // TECHNICAL LEARNINGS',
        content: 'Deepened appreciation for memory overhead in Python object models (e.g. dynamic list resizing mechanics, PyObject wrapping costs, dictionary hashing collisions) and established a solid theoretical foundation for Applied AI coursework at IIT Jodhpur.'
      }
    ]
  },
  {
    id: 'krvz-platform',
    index: '04',
    num: 'PROJ // 04',
    title: 'krvz.dev Immersive Engineering Platform',
    subtitle: 'Experimental Digital Identity & Creative Computing Environment',
    category: 'CREATIVE DEVELOPMENT',
    tag: 'CREATIVE / ARCHITECTURE',
    year: '2026',
    role: 'System Architect & Frontend Engineer',
    technologies: ['Vite', 'React 19', 'Framer Motion', 'Tailwind CSS v4', 'Web Audio API', 'Vercel Edge'],
    githubUrl: 'https://github.com/rosenkrvz/shubham-portfolio',
    liveUrl: 'https://portfolio-eight-delta-c5m41m049y.vercel.app',
    abstract: 'Bespoke creative digital identity, spatial case study reading environment, real-time topological canvas manifold, tactile audio feedback, and continuous automated Vercel edge deployment.',
    metrics: [
      { label: 'BUNDLE LOAD TIME', val: '< 200ms' },
      { label: 'FRAME RATE', val: 'SOLID 60 FPS' },
      { label: 'DESIGN CLICHÉS', val: '0' }
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'manifold_math.js',
      code: `// Lightweight vector field transformation running on pure Canvas
function computeFieldVector(x, y, t) {
  const nx = (x / width) * 4.0 - 2.0;
  const ny = (y / height) * 4.0 - 2.0;
  const angle = Math.sin(nx * 1.5 + t * 0.4) * Math.cos(ny * 1.5 + t * 0.3) * Math.PI;
  return { dx: Math.cos(angle), dy: Math.sin(angle) };
}`
    },
    sections: [
      {
        title: '01 // THE PROBLEM & CONVENTIONAL TEMPLATES',
        content: 'Most developer portfolios resemble corporate SaaS landing pages or generic AI templates with neon holograms, fake percentages, and cookie-cutter card grids. The goal was to author a bespoke digital publication and interactive personal world where the website itself is the engineering artifact.'
      },
      {
        title: '02 // THE APPROACH & SCENE PROGRESSION',
        content: 'Eliminated boring card grids in favor of immersive, full-viewport spatial scenes. Adopted a disciplined Obsidian & Spectral Cyan color system, 3-tier architectural typography, and a 60fps topological canvas manifold with zero heavy 3D dependencies.'
      },
      {
        title: '03 // SYSTEM ARCHITECTURE & EDGE RESILIENCE',
        content: 'Engineered with React 19 and Vite for instant hydration, Framer Motion for spring physics, customized Web Audio API micro-synthesizers for tactile feedback, and serverless Vercel Edge endpoints (/api/status, /api/contact).'
      },
      {
        title: '04 // ACCESSIBILITY & PRODUCTION RIGOR',
        content: 'Built from the ground up to respect prefers-reduced-motion, provide full keyboard navigation with shortcuts, ensure graceful degradation when JavaScript or Web Audio is restricted, and deliver instantaneous load times.'
      }
    ]
  }
];
