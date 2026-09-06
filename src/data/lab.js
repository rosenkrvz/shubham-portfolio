export const LAB_STUDIES = [
  {
    id: 'lab-01',
    number: '01',
    title: 'Asymptotic Memory Scaling in Python',
    category: 'Computer Science',
    date: '2025',
    summary: 'An empirical investigation into pointer dereferencing overhead and memory fragmentation in dynamic Python lists compared against contiguous memory buffers in NumPy.',
    notes: 'Python list resizing follows an over-allocation pattern (0, 4, 8, 16, 24, 32...). Measuring heap residency with tracemalloc demonstrates that PyObject pointer wrapping accounts for up to 70% of total memory overhead on small primitive collections.',
    repoUrl: 'https://github.com/rosenkrvz/IDLE-Projects-'
  },
  {
    id: 'lab-02',
    number: '02',
    title: 'Loss Surface Optimization Trajectories',
    category: 'Machine Learning',
    date: '2026',
    summary: 'A mathematical study evaluating learning rate scheduling and momentum damping when navigating ill-conditioned curvature and saddle points on non-convex loss surfaces.',
    notes: 'Standard stochastic gradient descent oscillates severely along high-curvature ravines. Incorporating exponential moving averages of past gradients (momentum) dampens transverse oscillations and accelerates progress along the principal descent vector.',
    repoUrl: 'https://github.com/rosenkrvz'
  },
  {
    id: 'lab-03',
    number: '03',
    title: 'Deterministic Token Stream Lexer',
    category: 'Compilers & NLP',
    date: '2026',
    summary: 'A lightweight finite state machine tokenizer analyzing lexical entropy, keyword frequencies, and token distributions in code files.',
    notes: 'Token parsing implemented via direct character stream scanning with zero third-party parser generator dependencies. Benchmarks demonstrate linear O(N) throughput with zero dynamic memory allocations beyond the output token buffer.',
    repoUrl: 'https://github.com/rosenkrvz'
  },
  {
    id: 'lab-04',
    number: '04',
    title: 'Topological Vector Field Study',
    category: 'Visual Computing',
    date: '2026',
    summary: 'A quiet mathematical visualization rendering continuous trigonometric field vectors on a minimalist 2D canvas.',
    notes: 'Parametric coordinates mapped through dx/dt = sin(1.8x + t) · cos(1.8y). Bypasses heavy WebGL pipelines in favor of a 60fps Canvas 2D render loop that responds gently to pointer proximity.',
    interactive: true
  }
];
