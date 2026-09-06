export const labExperiments = [
  {
    id: "dither-engine",
    title: "1-Bit Spatial Dither & Halftone Engine",
    status: "INTERACTIVE COMPUTE",
    category: "Computer Vision & Graphics",
    badge: "LIVE DEMO",
    summary: "Simulate 1-bit monochrome spatial error diffusion and Bayer ordered matrix quantization in real time.",
    details: "Explores how continuous-tone 8-bit luminance can be transformed into binary binary states (0 or 1) while preserving human perceptual edge gradients.",
    parameters: ["Error Diffusion Weight", "Threshold Bias", "Matrix Granularity (2x2 to 8x8)"]
  },
  {
    id: "neural-latency-bench",
    title: "Edge Silicon Inference Latency Matrix",
    status: "TELEMETRY SIMULATOR",
    category: "Hardware Acceleration",
    badge: "BENCHMARK",
    summary: "Compare FP32 unquantized weights against INT8 and FP4 TensorRT compiled execution pipelines on synthetic neural inputs.",
    details: "Demonstrates memory bandwidth saturation points, cache hit ratios, and latency distribution across 10,000 synthetic batch passes.",
    parameters: ["Batch Size (1 to 64)", "Quantization Mode", "Thermal Throttling"]
  },
  {
    id: "vector-similarity-radar",
    title: "Cosine Vector Space Projection & Recall",
    status: "ALGORITHMIC VISUALIZER",
    category: "Information Retrieval",
    badge: "MATH LAB",
    summary: "Interactive 2D topological mapping of high-dimensional embedding vectors with real-time Euclidean and Cosine distance calculations.",
    details: "Visualizes cluster cohesion, nearest-neighbor partitions, and boundary hyperplane separation for semantic search queries.",
    parameters: ["Dimensionality Projection", "Neighbor Count (k=5)", "Distance Metric"]
  }
];
