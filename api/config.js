// Vercel serverless function to securely provide API configuration
// This function runs on Vercel's edge and has access to environment variables

export default function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Set CORS headers to allow requests from your domain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Return the configuration with environment variables
  // These are only accessible server-side, never exposed to the client
  const config = {
    pexelsApiKey: process.env.PEXELS_API_KEY || null,
    formspreeEndpoint: process.env.FORMSPREE_ENDPOINT || null,
    // Add any other sensitive configuration here
  };

  // Return the configuration
  res.status(200).json(config);
}
