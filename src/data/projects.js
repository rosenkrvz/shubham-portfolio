export const PROJECTS = [
  {
    id: 'loan-predictor',
    index: '01',
    title: 'Loan Approval Predictive Intelligence',
    category: 'Machine Learning',
    year: '2026',
    description: 'A supervised classification pipeline for loan approval evaluation, focusing on feature skewness treatment, collinearity resolution, and calibrated decision boundaries.',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/rosenkrvz',
    previewVisual: 'classification',
    codeSnippet: {
      language: 'python',
      title: 'risk_pipeline.py',
      code: `from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier

# Preprocessing pipeline avoiding data leakage
preprocessor = ColumnTransformer(transformers=[
    ('num', StandardScaler(), numerical_cols),
    ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_cols)
])

# Classifier calibrated for credit risk sensitivity
clf = RandomForestClassifier(
    n_estimators=150,
    max_depth=12,
    min_samples_split=4,
    random_state=42
)`
    },
    sections: [
      {
        heading: '01 — Context & Problem',
        text: 'In credit risk assessment, misclassifying a high-risk applicant directly results in capital default, while excessively conservative approval logic turns away creditworthy borrowers. The goal was to build a clean supervised classification pipeline on historical loan records that handles missing entries, normalizes skewed financial distributions, and prioritizes default detection.'
      },
      {
        heading: '02 — Approach & Transformations',
        text: 'Exploratory analysis revealed collinearity between loan amounts and applicant assets, alongside heavy right-skewed income distributions. I implemented automated log transformations for financial amounts and median imputations computed strictly on training splits to prevent data leakage.'
      },
      {
        heading: '03 — Implementation & Learnings',
        text: 'The pipeline relies on Scikit-Learn ColumnTransformer and a tuned RandomForestClassifier ensemble. This project reinforced that data hygiene, careful feature engineering, and understanding decision thresholds matter vastly more than model complexity.'
      }
    ]
  },
  {
    id: 'nirogshaala',
    index: '02',
    title: 'Nirogshaala Botanical Health Platform',
    category: 'Full-Stack System',
    year: '2026',
    description: 'A botanical commerce and clinic platform featuring real-time inventory batch tracking, prescription reconciliation, and transactional checkout schemas.',
    technologies: ['TypeScript', 'Node.js', 'REST APIs', 'PostgreSQL'],
    githubUrl: 'https://github.com/rosenkrvz',
    previewVisual: 'database',
    codeSnippet: {
      language: 'typescript',
      title: 'inventory_allocator.ts',
      code: `// Atomic stock reservation across active consultations
export async function reserveStockBatch(
  client: TransactionClient,
  orderId: string,
  items: OrderItem[]
) {
  for (const item of items) {
    const batch = await client.inventory.findFirstOrThrow({
      where: { productId: item.productId, availableQty: { gte: item.quantity } },
      orderBy: { expiryDate: 'asc' } // FEFO rule
    });
    
    await client.inventory.update({
      where: { id: batch.id },
      data: { availableQty: { decrement: item.quantity } }
    });
  }
}`
    },
    sections: [
      {
        heading: '01 — Context & Problem',
        text: 'Botanical supply and clinic platforms often struggle with inventory divergence: products carry varying shelf-lives, batch origins, and stock levels. When consultations generate prescriptions, inventory counts must reconcile reliably across physical registers without race conditions.'
      },
      {
        heading: '02 — Architecture & Database Design',
        text: 'Designed a unified schema separating master product definitions from discrete inventory batches. Implemented transactional First-Expiring-First-Out (FEFO) allocation logic so concurrent checkout processes cannot over-commit warehouse inventory.'
      },
      {
        heading: '03 — Implementation & Learnings',
        text: 'Demonstrated the necessity of database transaction boundaries and idempotency keys in financial and inventory flows. Clear domain service separation made client-server contracts simple and predictable.'
      }
    ]
  },
  {
    id: 'idle-suite',
    index: '03',
    title: 'Python Numeric & Algorithmic Modules',
    category: 'Algorithms & Systems',
    year: '2025',
    description: 'Pure Python implementations of foundational data structures, graph traversals, and dynamic programming routines with empirical complexity benchmarks.',
    technologies: ['Python 3', 'Data Structures', 'Algorithmic Complexity'],
    githubUrl: 'https://github.com/rosenkrvz/IDLE-Projects-',
    previewVisual: 'algorithm',
    codeSnippet: {
      language: 'python',
      title: 'benchmarks.py',
      code: `import time

def evaluate_complexity(func, input_sizes):
    """Empirically evaluate execution runtime scaling."""
    results = []
    for n in input_sizes:
        data = list(range(n, 0, -1))
        t0 = time.perf_counter()
        func(data)
        elapsed = time.perf_counter() - t0
        results.append((n, elapsed))
    return results`
    },
    sections: [
      {
        heading: '01 — Motivation',
        text: 'Modern engineering often relies on high-level frameworks without internalizing the underlying pointer mechanics, asymptotic runtime overhead, and spatial memory footprints that govern system performance.'
      },
      {
        heading: '02 — Implementation',
        text: 'Systematically implemented core computer science algorithms from first principles in pure Python: recursion trees, dynamic programming memoization, graph traversal (BFS/DFS/Dijkstra), and sorting efficiency.'
      },
      {
        heading: '03 — Learnings',
        text: 'Deepened appreciation for memory overhead in Python object models (e.g. dynamic list resizing mechanics and dictionary hashing collisions) and established a solid theoretical foundation for Applied AI coursework at IIT Jodhpur.'
      }
    ]
  },
  {
    id: 'editorial-platform',
    index: '04',
    title: 'Minimal Editorial Personal Platform',
    category: 'Web Engineering',
    year: '2026',
    description: 'A bespoke personal portfolio built on minimalist architecture, multi-page tab routing, restrained typography, and warm tactile textures.',
    technologies: ['Vite', 'React 19', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rosenkrvz/shubham-portfolio',
    previewVisual: 'typography',
    codeSnippet: {
      language: 'javascript',
      title: 'routing.js',
      code: `// Lightweight hash and history tab synchronization
const navigateTab = (tabKey) => {
  setActiveTab(tabKey);
  if (window.history.pushState) {
    window.history.pushState(null, '', \`#\${tabKey}\`);
  }
};`
    },
    sections: [
      {
        heading: '01 — The Goal',
        text: 'Developer portfolios frequently suffer from excessive neon styling, fake dashboard widgets, and AI clichés. The intention here was to craft an authored, calm publication that prioritizes typography, whitespace, and real engineering clarity.'
      },
      {
        heading: '02 — Design System & Architecture',
        text: 'Built with React 19 and Vite using a 3-tier typography hierarchy (Grotesk Sans + Instrument Serif + JetBrains Mono) on a warm near-black canvas with restrained deep crimson accents and physical paper grain texture.'
      },
      {
        heading: '03 — Performance',
        text: 'Delivers instantaneous page transitions, sub-3-second production builds, complete reduced-motion accessibility, and clean responsive composition across desktop and mobile.'
      }
    ]
  }
];
