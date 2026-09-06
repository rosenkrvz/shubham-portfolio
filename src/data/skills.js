export const skillCategories = [
  {
    category: "Neural Architectures & Applied AI",
    icon: "Cpu",
    skills: [
      { name: "PyTorch & TorchScript", level: "Advanced", desc: "Custom layers, loss functions, distributed DDP training" },
      { name: "Computer Vision & Dithering", level: "Expert", desc: "Binarized CNNs, OpenCV, spatial halftoning, feature extractors" },
      { name: "Model Quantization & Pruning", level: "Advanced", desc: "INT8 quantization, ONNX Runtime, TensorRT edge compilation" },
      { name: "Scikit-Learn & XGBoost", level: "Mastery", desc: "Tabular ensembles, feature importance, cross-validation tuning" },
      { name: "NLP & Transformer Attention", level: "Advanced", desc: "Embeddings recall, prompt vector spaces, lightweight fine-tuning" }
    ]
  },
  {
    category: "High-Throughput Systems & Backend",
    icon: "Server",
    skills: [
      { name: "Python / AsyncIO", level: "Mastery", desc: "High-concurrency async servers, event loop tuning, GIL mitigation" },
      { name: "FastAPI & REST / gRPC", level: "Expert", desc: "Pydantic v2 schemas, streaming responses, protobuf contracts" },
      { name: "PostgreSQL & Vector Stores", level: "Advanced", desc: "pgvector, indexing (HNSW, IVFFlat), connection pooling" },
      { name: "Redis & Message Brokers", level: "Advanced", desc: "In-memory caching, pub/sub channels, Kafka partitioned queues" },
      { name: "C++ / Systems Programming", level: "Intermediate", desc: "Memory management, pointer arithmetic, SIMD operations" }
    ]
  },
  {
    category: "Frontend, Creative Computing & UI",
    icon: "Layout",
    skills: [
      { name: "React 19 & Modern Hooks", level: "Mastery", desc: "Concurrent rendering, custom hooks, atomic state management" },
      { name: "Framer Motion & Fluid Transitions", level: "Expert", desc: "LayoutId physics, spring animations, orchestrated stagger delays" },
      { name: "HTML5 Canvas & 2D Physics", level: "Advanced", desc: "Interactive fluid waves, particle grids, mouse-reactive shaders" },
      { name: "Tailwind CSS v4 & Tokens", level: "Mastery", desc: "Custom design systems, hair-thin brutalist borders, responsive grids" },
      { name: "TypeScript & Component Design", level: "Advanced", desc: "Strict typing, reusable UI primitives, accessible ARIA roles" }
    ]
  },
  {
    category: "Infrastructure, MLOps & Security",
    icon: "Shield",
    skills: [
      { name: "Docker & Containerization", level: "Advanced", desc: "Multi-stage minimal builds, CUDA runtime containerization" },
      { name: "AWS Cloud Infrastructure", level: "Advanced", desc: "EC2, S3, IAM role isolation, VPC network design" },
      { name: "Linux & Bash Tooling", level: "Expert", desc: "Kernel parameters, process monitoring, systemd daemon management" },
      { name: "Git & CI/CD Pipelines", level: "Mastery", desc: "Automated test suites, GitHub Actions, semantic versioning" },
      { name: "Zero-Trust & Data Hardening", level: "Advanced", desc: "Input sanitization, tamper-evident hash ledgers, honeypots" }
    ]
  }
];
