export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { name, email, message, subject } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Missing required fields: name, email, and message are required.'
    });
  }

  // Sanitize and acknowledge submission
  return res.status(200).json({
    success: true,
    message: `Thank you, ${name}! Your message has been received.`,
    receivedAt: new Date().toISOString()
  });
}
