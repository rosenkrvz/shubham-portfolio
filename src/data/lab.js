export const labExperiments = [
  {
    id: "dither-engine",
    title: "1-Bit Spatial Dither & Halftone Engine",
    status: "Interactive Compute",
    category: "Computer Vision & Graphics",
    badge: "Live Canvas",
    summary: "Simulate 1-bit monochrome spatial error diffusion and Bayer ordered matrix quantization directly in browser memory.",
    details: "Transforms continuous-tone 8-bit luminance into binary states (0 or 1) while preserving human perceptual edge gradients through Floyd-Steinberg convolution.",
    parameters: ["Error Diffusion Weight", "Threshold Bias", "Matrix Granularity (2x2 to 8x8)"]
  },
  {
    id: "neural-latency-bench",
    title: "Edge Silicon Inference Latency Matrix",
    status: "Silicon Simulator",
    category: "Hardware Acceleration",
    badge: "Interactive Matrix",
    summary: "Compare FP32 unquantized weights against INT8 and FP4 TensorRT execution pipelines across variable batch sizes.",
    details: "Examines memory bandwidth saturation points, cache hit ratios, and estimated P99 latency across synthetic batch passes.",
    parameters: ["Batch Size (1 to 64)", "Quantization Mode", "Thermal Throttling"]
  },
  {
    id: "vector-similarity-radar",
    title: "Cosine Vector Space Projection & Recall",
    status: "Geometric Visualizer",
    category: "Information Retrieval",
    badge: "Vector Lab",
    summary: "Interactive 2D topological mapping of high-dimensional embedding vectors with real-time Euclidean and Cosine distance calculations.",
    details: "Visualizes cluster cohesion, nearest-neighbor partitions, and boundary hyperplane separation for semantic vector retrieval.",
    parameters: ["Dimensionality Projection", "Neighbor Count (k=5)", "Distance Metric"]
  }
];
