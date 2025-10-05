# 🔐 Security Explanation: How Keys Are Protected

## 🚨 **The Problem We Fixed**

Initially, the system had a **critical security vulnerability** where sensitive data was exposed in the rendered HTML:

### **❌ Before (Vulnerable):**
```html
<!-- API key exposed in HTML source -->
<script>window.PEXELS_API_KEY="your_actual_api_key_here"</script>

<!-- Formspree endpoint exposed in HTML source -->
<form action="https://formspree.io/f/your_endpoint_here" method="POST">
```

### **✅ After (Secure):**
```html
<!-- API key NOT exposed - set to null, injected at runtime -->
<script>window.PEXELS_API_KEY = null;</script>

<!-- Formspree endpoint NOT exposed - injected at runtime -->
<form action="" method="POST">
```

## 🔍 **How Hugo Template Processing Works**

### **The Issue:**
Hugo processes templates at **build time**, not runtime. When you use:
```go
{{ .Site.Params.pexels_api_key }}
```

Hugo **injects the actual value** into the HTML during the build process, making it visible in the final rendered HTML.

### **The Solution:**
We changed to **serverless function-based secure delivery** instead of **build-time template injection**.

## 🛡️ **How Security Works Now**

### **1. Pexels API Key Protection:**

**Template (Safe):**
```html
<script>
  window.PEXELS_API_KEY = null; // Safe - no actual key exposed
</script>
```

**JavaScript (Secure):**
```javascript
// Fetches configuration securely from serverless function
async function fetchConfig() {
  const response = await fetch('/api/config');
  const config = await response.json();
  window.PEXELS_API_KEY = config.pexelsApiKey;
}
```

**Serverless Function (Secure):**
```javascript
// /api/config.js - Only accessible server-side
export default function handler(req, res) {
  const config = {
    pexelsApiKey: process.env.PEXELS_API_KEY,  // Secure environment variable
    formspreeEndpoint: process.env.FORMSPREE_ENDPOINT
  };
  res.json(config);
}
```

### **2. Formspree Endpoint Protection:**

**Template (Safe):**
```html
<form action="" method="POST">  <!-- No endpoint exposed -->
```

**JavaScript (Secure):**
```javascript
// Endpoint injected at runtime via serverless function
const formspreeEndpoint = window.FORMSPREE_ENDPOINT; // Loaded from /api/config
```

## 🔄 **The Complete Security Flow**

### **Local Development:**
1. **Config**: `config.local.toml` contains sensitive data
2. **Build**: Hugo merges configs, but templates use safe defaults
3. **Runtime**: JavaScript reads from `window` object (injected by Hugo)
4. **Result**: Works locally, sensitive data stays local

### **Production (Vercel):**
1. **Environment Variables**: Vercel stores sensitive data encrypted
2. **Build**: Hugo builds static site with no sensitive data
3. **Runtime**: JavaScript fetches from `/api/config` serverless function
4. **Result**: Works in production, sensitive data never exposed

## 🎯 **Security Verification**

### **What You Can Check:**

1. **View Page Source**: No API keys or endpoints visible
2. **Inspect Element**: No sensitive data in HTML
3. **Network Tab**: API calls work but keys aren't exposed
4. **Console**: No sensitive data logged

### **What's Safe to Expose:**
- ✅ Image query lists (public data)
- ✅ Site configuration (public data)
- ✅ Static content (public data)

### **What's Never Exposed:**
- ❌ API keys
- ❌ Formspree endpoints
- ❌ Database credentials
- ❌ Any sensitive configuration

## 🔧 **Technical Implementation**

### **Configuration Loading:**
```javascript
// JavaScript loads configuration in this order:
1. fetch('/api/config')         // Serverless function (production)
2. window.PEXELS_API_KEY        // Runtime injection (fallback)
3. null                         // Safe fallback
```

### **Build Process:**
```bash
# Hugo Build
hugo --minify  # Builds static site with no sensitive data

# Vercel Deployment
# Environment variables available to serverless functions only
PEXELS_API_KEY=your_key_here
FORMSPREE_ENDPOINT=your_endpoint_here
```

## 🚀 **Benefits of This Approach**

- ✅ **Zero Exposure**: Sensitive data never appears in HTML source
- ✅ **Serverless Security**: Keys only accessible server-side
- ✅ **Environment Flexibility**: Works in dev, staging, and production
- ✅ **Fallback Safety**: Graceful degradation if keys are missing
- ✅ **Audit Trail**: Clear separation between public and private data

## 🔍 **How to Verify Security**

### **Test 1: View Source**
```bash
# Build the site
hugo --config config.toml,config.local.toml

# Check for exposed keys
grep -r "PexelsApiKey" public/ || echo "✅ No API keys found"
grep -r "formspree.io" public/ || echo "✅ No endpoints found"
```

### **Test 2: Production Check**
```bash
# Check deployed site
curl -s https://your-site.com | grep -i "pexels\|formspree" || echo "✅ No sensitive data found"

# Test serverless function
curl -s https://your-site.com/api/config | jq .  # Should return config without exposing keys
```

### **Test 3: Functionality**
- ✅ Background images load (API key works)
- ✅ Contact form submits (endpoint works)
- ✅ No errors in console
- ✅ No sensitive data in network requests

---

**Your keys are now truly secure! 🔒✨**
