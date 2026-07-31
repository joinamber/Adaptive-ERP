import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Rate limiting - simple in-memory store (for production, use Redis/DB)
const rateLimitStore = new Map<string, number[]>();
const RATE_LIMIT = 10; // requests per minute
const RATE_WINDOW = 60000; // 1 minute

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const clientIP = (req.headers['x-forwarded-for'] as string) || (req.headers['x-real-ip'] as string) || 'unknown';
  const now = Date.now();
  const userRequests = rateLimitStore.get(clientIP) || [];
  const recentRequests = userRequests.filter((time) => now - time < RATE_WINDOW);

  if (recentRequests.length >= RATE_LIMIT) {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }

  recentRequests.push(now);
  rateLimitStore.set(clientIP, recentRequests);

  // Request size limit (1MB)
  const contentLength = parseInt((req.headers['content-length'] as string) || '0', 10);
  if (contentLength > 1024 * 1024) {
    return res.status(413).json({ error: 'Request too large' });
  }

  try {
    const { messages, model, temperature, max_tokens, top_p } = req.body || {};

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request format' });
    }

    if (messages.length > 50) {
      return res.status(400).json({ error: 'Too many messages' });
    }

    const completion = await groq.chat.completions.create({
      messages,
      model: model || 'llama3-8b-8192',
      temperature: temperature || 0.7,
      max_tokens: max_tokens || 2500,
      top_p: top_p || 0.9,
    });

    return res.status(200).json({
      content: completion.choices[0]?.message?.content || '',
      usage: completion.usage,
    });
  } catch (error) {
    console.error('Groq API Error:', error);
    const isProduction = process.env.NODE_ENV === 'production';
    return res.status(500).json({
      error: 'Service temporarily unavailable',
      ...(isProduction ? {} : { details: (error as Error).message }),
    });
  }
}
