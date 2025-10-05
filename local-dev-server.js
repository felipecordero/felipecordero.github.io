#!/usr/bin/env node

// Local development server to mock the Vercel serverless function
// Run this alongside Hugo server for local development

const http = require('http');
const fs = require('fs');
const path = require('path');

// Read config from config.local.toml
const configPath = path.join(__dirname, 'config.local.toml');
let config = {
  pexelsApiKey: null,
  formspreeEndpoint: null
};

try {
  const configContent = fs.readFileSync(configPath, 'utf8');
  
  // Simple TOML parsing for our specific config
  const pexelsMatch = configContent.match(/pexels_api_key\s*=\s*"([^"]+)"/);
  const formspreeMatch = configContent.match(/formspree_endpoint\s*=\s*"([^"]+)"/);
  
  if (pexelsMatch) config.pexelsApiKey = pexelsMatch[1];
  if (formspreeMatch) config.formspreeEndpoint = formspreeMatch[1];
  
  console.log('✅ Loaded config from config.local.toml');
} catch (error) {
  console.warn('⚠️ Could not read config.local.toml:', error.message);
}

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.url === '/api/config' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(config));
    console.log('📡 Served config to client');
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`🚀 Local dev server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/config`);
  console.log('💡 Update your pexels-config.html to use this endpoint for local development');
});
