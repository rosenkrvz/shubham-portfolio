export default function handler(req, res) {
  res.status(200).json({
    status: "healthy",
    message: "Shubham Sharma Portfolio API is running seamlessly on Vercel.",
    environment: process.env.NODE_ENV || "production",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: "1.0.0"
  });
}
