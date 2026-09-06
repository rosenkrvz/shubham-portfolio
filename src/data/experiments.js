export const EXPERIMENTS = [
  {
    id: 'exp-001',
    code: 'EXP // 001',
    title: 'Topological Vector Field Manifold',
    category: 'MATHEMATICAL COMPUTING',
    date: '2026',
    status: 'ACTIVE RUNTIME',
    description: 'Real-time 60fps parametric coordinate transformation rendering continuous non-linear vector flows on an HTML5 2D Canvas. Dynamically deforms around cursor proximity without heavy WebGL overhead.',
    tech: ['Canvas 2D', 'Trigonometric Fields', 'Interactive Dynamics'],
    parameters: 'dx/dt = sin(1.5x + 0.4t) · cos(1.5y)'
  },
  {
    id: 'exp-002',
    code: 'EXP // 002',
    title: 'Asymptotic Memory & Runtime Profiler',
    category: 'ALGORITHMIC BENCHMARKING',
    date: '2025',
    status: 'VERIFIED ARCHIVE',
    description: 'Empirical runtime scaling harness measuring cache locality and garbage collection overhead across custom pointer structures vs vectorized contiguous NumPy arrays.',
    tech: ['Python 3', 'Tracemalloc', 'Asymptotic Big-O'],
    parameters: 'O(N log N) empirical confirmation'
  },
  {
    id: 'exp-003',
    code: 'EXP // 003',
    title: 'Loss Surface Convergence Simulator',
    category: 'MACHINE LEARNING THEORY',
    date: '2026',
    status: 'EXPERIMENTAL',
    description: 'Interactive parameter optimization trajectory simulation exploring saddle point escapes, momentum damping, and Adam optimizer adaptive learning rate decay on non-convex surfaces.',
    tech: ['Numerical Optimization', 'Gradient Calculus'],
    parameters: 'Adaptive lr decay η_t = η_0 / √(v_t + ε)'
  },
  {
    id: 'exp-004',
    code: 'EXP // 004',
    title: 'Token Stream Lexer & Attention Weights',
    category: 'NLP & COMPILER DESIGN',
    date: '2026',
    status: 'PROTOTYPE',
    description: 'Deterministic tokenizer and sliding-window attention matrix visualizer evaluating token entropy and positional encoding vectors across code syntax sequences.',
    tech: ['Lexical Analysis', 'Self-Attention Geometry'],
    parameters: 'Softmax(Q · K^T / √d_k) · V'
  }
];
