import { Resend } from 'resend';

// Basic in-memory rate limiting map for Vercel Serverless
const rateLimitMap = new Map();

// Spam keyword detection
const SPAM_KEYWORDS = ['crypto', 'seo ranking', 'bitcoin', 'buy followers', 'invest'];

function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 2; // 2 requests per minute

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, [{ timestamp: now }]);
    return true;
  }

  const requests = rateLimitMap.get(ip);
  const recentRequests = requests.filter(req => now - req.timestamp < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    rateLimitMap.set(ip, recentRequests);
    return false; // Rate limited
  }

  recentRequests.push({ timestamp: now });
  rateLimitMap.set(ip, recentRequests);
  return true;
}

function isSpam(text) {
  if (!text) return false;
  const lower = text.toLowerCase();
  
  // Keyword check
  if (SPAM_KEYWORDS.some(kw => lower.includes(kw))) return true;
  
  // Link heavy check
  const urlCount = (lower.match(/http/g) || []).length;
  if (urlCount >= 3) return true;

  return false;
}

// Vercel Serverless Function to handle contact form submissions
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Ensure API Key exists
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set in environment variables.');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  
  try {
    const { name, email, project, details, _honey } = req.body;

    // 1. Honeypot Check (Silently drop if filled)
    if (_honey) {
      console.log('Honeypot triggered');
      return res.status(200).json({ success: true, note: 'Bot ignored' });
    }

    // 2. Rate Limiting Check
    const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
    if (!checkRateLimit(ip)) {
      console.log(`Rate limit exceeded for IP: ${ip}`);
      return res.status(429).json({ error: 'Too many requests' });
    }

    // 3. Spam Detection Check
    if (isSpam(details) || isSpam(name)) {
      console.log('Spam detected');
      return res.status(400).json({ error: 'Message flagged as spam' });
    }

    // Validate inputs
    if (!name || !email || !details) {
      return res.status(400).json({ error: 'Name, email, and details are required' });
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'krishshreesurya@gmail.com',
      reply_to: email,
      subject: `New Project Inquiry: ${project || 'General'} - from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${project || 'Not specified'}</p>
        <br/>
        <h3>Project Details:</h3>
        <p style="white-space: pre-wrap;">${details}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Resend API Error:', error);
    return res.status(500).json({ error: 'Failed to send message', details: error.message });
  }
}
