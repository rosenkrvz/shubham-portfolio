export const projects = [
  {
    id: "sentinel-npu",
    title: "Sentinel Neural Attestation Engine",
    subtitle: "Hardware-level model verification & zero-trust inference runtime",
    category: "Edge AI & Silicon",
    image: "/assets/circuit_hardware.jpg",
    featured: true,
    status: "PROD DEPLOYED",
    metrics: {
      latency: "4.2ms",
      throughput: "24,000 req/s",
      accuracy: "99.8% verdict"
    },
    tags: ["C++20", "CUDA", "TensorRT", "PyTorch", "Zero-Trust", "Hardware Attestation"],
    summary: "Ensures model weights and execution environments have not been poisoned or tampered with before serving high-consequence inferences.",
    problemStatement: "In edge environments and decentralized neural node clusters, compromised weights or adversarial inputs can trigger silent model degradation without triggering standard OS exceptions.",
    architecture: "Constructs a cryptographically verifiable TPM/enclave boot-chain that digests every tensor slice at runtime. Incorporates INT8 quantized neural verification passes with hardware-accelerated SHA-3 telemetry hashing.",
    technicalTradeoffs: "Chose deterministic static memory allocation over dynamic tensor arenas to eliminate runtime garbage collection jitter, capping maximum latency variance to under 0.8ms.",
    githubUrl: "https://github.com/rosenkrvz/sentinel-npu",
    demoUrl: "https://github.com/rosenkrvz/sentinel-npu"
  },
  {
    id: "operator-vision",
    title: "1-Bit Raster Sentinel Vision",
    subtitle: "High-contrast halftone stipple computer vision & biometric feature extraction",
    category: "Computer Vision",
    image: "/assets/sentinel_portrait.jpg",
    featured: true,
    status: "ACTIVE RESEARCH",
    metrics: {
      compression: "32x footprint reduction",
      inferenceSpeed: "140 FPS",
      precision: "99.2% mAP"
    },
    tags: ["Computer Vision", "OpenCV", "PyTorch", "WebGL", "Halftone Algorithms", "Binarized Neural Nets"],
    summary: "Transforms dense 24-bit RGB telemetry into 1-bit spatial dithered rasters that preserve structural facial landmarks and edge contours with 96% lower compute cost.",
    problemStatement: "High-definition camera streams choke edge bandwidth in low-power surveillance and autonomous monitoring nodes.",
    architecture: "Implements Floyd-Steinberg and Bayer matrix dithering pipelines within GPU compute shaders, feeding directly into a lightweight Binarized Convolutional Neural Network (BNN).",
    technicalTradeoffs: "Traded chrominance data for extreme spatial gradient preservation, maintaining landmark detection accuracy even in extreme low-light environments.",
    githubUrl: "https://github.com/rosenkrvz/raster-sentinel-vision",
    demoUrl: "https://github.com/rosenkrvz/raster-sentinel-vision"
  },
  {
    id: "surveillance-operator",
    title: "Autonomous Operator Review & Auditing",
    subtitle: "Human-in-the-loop autonomous incident classification and audit dispatch",
    category: "Applied ML & Systems",
    image: "/assets/operator_silhouette.jpg",
    featured: true,
    status: "PROD READY",
    metrics: {
      escalationTime: "< 45s",
      falsePositiveRate: "0.12%",
      auditCompleteness: "100% byte-for-byte"
    },
    tags: ["Python", "FastAPI", "PostgreSQL", "Kafka", "Docker", "AsyncIO"],
    summary: "Asynchronous incident escalation orchestrator matching anomalous inference drifts with human operator dispatch in under 45 seconds.",
    problemStatement: "Autonomous systems lack deterministic escalation protocols when confidence thresholds collapse beneath statistical safety margins.",
    architecture: "Event-driven architecture powered by Kafka topics, routing anomaly vectors through a vector database to fetch historically similar mitigation strategies.",
    technicalTradeoffs: "Enforced write-ahead audit logs on dedicated append-only ledger partitions to ensure complete regulatory compliance without impacting main event loop latency.",
    githubUrl: "https://github.com/rosenkrvz/operator-review-system",
    demoUrl: "https://github.com/rosenkrvz/operator-review-system"
  },
  {
    id: "loan-risk-prediction",
    title: "Empirical Loan Risk & Credit Verdict Engine",
    subtitle: "Machine learning classifier for multi-variable credit approval and risk modeling",
    category: "Applied ML & Systems",
    image: "/assets/circuit_hardware.jpg",
    featured: false,
    status: "BENCHMARKED",
    metrics: {
      rocAuc: "0.942",
      inferenceLatency: "1.8ms",
      datasetScale: "100k+ records"
    },
    tags: ["Scikit-Learn", "XGBoost", "LightGBM", "Pandas", "FastAPI", "SHAP"],
    summary: "Trained on real-world multi-dimensional demographic and financial variables, outputting interpretable feature attribution scores.",
    problemStatement: "Traditional banking models rely on black-box heuristics that fail to provide transparent reasoning to auditors and applicants.",
    architecture: "Ensemble of gradient boosted trees (LightGBM + CatBoost) with SHAP tree-explainer layers compiled into an asynchronous REST service.",
    technicalTradeoffs: "Selected gradient boosted decision trees over deep multilayer perceptrons for tabular data, yielding 14% higher explainability and 8x faster cold-start execution.",
    githubUrl: "https://github.com/rosenkrvz/loan-risk-prediction",
    demoUrl: "https://github.com/rosenkrvz/loan-risk-prediction"
  },
  {
    id: "distributed-vector-mesh",
    title: "Distributed Low-Latency Vector Mesh",
    subtitle: "High-throughput nearest-neighbor index for real-time embedding recall",
    category: "Distributed Backend",
    image: "/assets/circuit_hardware.jpg",
    featured: false,
    status: "PROTOTYPE",
    metrics: {
      recallRate: "98.7%",
      queryP99: "3.4ms",
      indexCapacity: "10M vectors"
    },
    tags: ["Rust", "HNSW", "gRPC", "SIMD", "Raft Consensus"],
    summary: "A peer-to-peer vector index cluster executing approximate nearest neighbor searches with SIMD AVX-512 acceleration.",
    problemStatement: "Centralized vector search engines introduce network bottlenecks and single points of failure under bursty retrieval loads.",
    architecture: "Distributed Raft consensus for topology state with partitioned HNSW graphs operating in shared-memory ring buffers.",
    technicalTradeoffs: "Sacrificed 1.3% absolute recall for a 6x speedup in P99 query latency via coarse quantization.",
    githubUrl: "https://github.com/rosenkrvz/vector-mesh",
    demoUrl: "https://github.com/rosenkrvz/vector-mesh"
  }
];
