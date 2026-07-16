import { Resend } from 'resend';

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
    const { name, email, project, details } = req.body;

    // Validate inputs
    if (!name || !email || !details) {
      return res.status(400).json({ error: 'Name, email, and details are required' });
    }

    // Send email via Resend
    // Note: 'from' must be onboarding@resend.dev unless you have a verified domain on Resend.
    // 'reply_to' ensures you can just hit 'Reply' in your email client to reply to the user.
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
