import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Rate limiting - simple in-memory store (for production, use Redis/DB)
const rateLimitStore = new Map();
const RATE_LIMIT = 10; // requests per minute
const RATE_WINDOW = 60000; // 1 minute

export const handler = async (event, context) => {
  // Add security headers
  const securityHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  };

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: securityHeaders,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: securityHeaders,
      body: '',
    };
  }

  // Rate limiting
  const clientIP = event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown';
  const now = Date.now();
  const userRequests = rateLimitStore.get(clientIP) || [];
  
  // Clean old requests
  const recentRequests = userRequests.filter(time => now - time < RATE_WINDOW);
  
  if (recentRequests.length >= RATE_LIMIT) {
    return {
      statusCode: 429,
      headers: securityHeaders,
      body: JSON.stringify({ error: 'Rate limit exceeded' }),
    };
  }
  
  // Add current request
  recentRequests.push(now);
  rateLimitStore.set(clientIP, recentRequests);

  // Request size limit (1MB)
  const contentLength = parseInt(event.headers['content-length'] || '0');
  if (contentLength > 1024 * 1024) {
    return {
      statusCode: 413,
      headers: securityHeaders,
      body: JSON.stringify({ error: 'Request too large' }),
    };
  }

  try {
    const { messages, model, temperature, max_tokens, top_p } = JSON.parse(event.body);

    // Validate required fields
    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        headers: { ...securityHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Invalid request format' }),
      };
    }

    // Additional input validation
    if (messages.length > 50) {
      return {
        statusCode: 400,
        headers: { ...securityHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Too many messages' }),
      };
    }

    // Call Groq API
    const completion = await groq.chat.completions.create({
      messages,
      model: model || 'llama3-8b-8192',
      temperature: temperature || 0.7,
      max_tokens: max_tokens || 2500,
      top_p: top_p || 0.9,
    });

    return {
      statusCode: 200,
      headers: { ...securityHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: completion.choices[0]?.message?.content || '',
        usage: completion.usage,
      }),
    };
  } catch (error) {
    console.error('Groq API Error:', error);
    
    // Don't expose detailed error information
    const isProduction = process.env.NODE_ENV === 'production';
    
    return {
      statusCode: 500,
      headers: { ...securityHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        error: 'Service temporarily unavailable',
        ...(isProduction ? {} : { details: error.message })
      }),
    };
  }
};