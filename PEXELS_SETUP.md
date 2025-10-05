# Pexels Background Setup Guide

This guide explains how to set up the random Pexels background images for your hero section.

## Features

- ✅ Random landscape images from Pexels API
- ✅ Automatic fallback to gradient background if API fails
- ✅ Preserves all existing GSAP animations
- ✅ Smooth transitions and overlays for text readability
- ✅ Secure API key handling

## Setup Instructions

### 1. Get Your Pexels API Key

1. Go to [Pexels API](https://www.pexels.com/api/)
2. Sign up for a free account
3. Generate an API key
4. Copy your API key

### 2. Configure API Key (Choose One Method)

#### Method A: Environment Variable (Recommended for Development)

Add to your shell profile (`.bashrc`, `.zshrc`, etc.):
```bash
export PEXELS_API_KEY="your_api_key_here"
```

#### Method B: Hugo Config (For Production)

Add to your `config.toml`:
```toml
[params]
  pexels_api_key = "your_api_key_here"
```

### 3. Production Deployment

#### For Netlify:
1. Go to Site Settings → Environment Variables
2. Add: `PEXELS_API_KEY` = `your_api_key_here`

#### For Vercel:
1. Go to Project Settings → Environment Variables
2. Add: `PEXELS_API_KEY` = `your_api_key_here`

#### For GitHub Pages:
Since GitHub Pages doesn't support environment variables, use Method B (Hugo config) but be careful not to commit your API key to public repositories.

### 4. Security Best Practices

⚠️ **IMPORTANT**: Never commit your API key to version control!

1. Add to `.gitignore`:
```
.env
config.local.toml
```

2. Use a separate config file for local development:
```toml
# config.local.toml (not committed to git)
[params]
  pexels_api_key = "your_api_key_here"
```

3. Load local config in development:
```bash
hugo server --config config.toml,config.local.toml
```

## How It Works

1. **Image Selection**: Randomly selects from queries: ocean, nature, landscape, mountains, forest, sunset, beach, sky
2. **API Parameters**: 
   - `orientation=landscape`
   - `size=small` (4MP)
   - `per_page=1`
3. **Fallback**: If API fails, uses the original gradient background
4. **Overlay**: Adds a dark overlay to ensure text readability
5. **Animations**: All GSAP animations remain visible on top of the background

## Customization

### Change Image Queries

Edit `/themes/careercanvas/assets/js/pexels-background.js`:
```javascript
this.queries = ['your', 'custom', 'queries', 'here'];
```

### Adjust Overlay Opacity

Edit the overlay styles in the same file:
```javascript
background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,  // Adjust these values
    rgba(0, 0, 0, 0.2) 25%,
    // ...
);
```

### Refresh Background

You can programmatically refresh the background:
```javascript
// In browser console
window.pexelsBackground.refreshBackground();
```

## Troubleshooting

### Images Not Loading
1. Check API key is correctly set
2. Verify network connectivity
3. Check browser console for errors
4. Ensure Pexels API quota not exceeded

### Animations Not Visible
1. Check z-index values in CSS
2. Verify GSAP is loading before Pexels script
3. Check for CSS conflicts

### Performance Issues
1. Images are cached by browser
2. Only one image loads per page visit
3. Consider reducing image size if needed

## API Limits

- Free Pexels API: 200 requests per hour
- Each page load = 1 request
- Consider caching for high-traffic sites

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify API key configuration
3. Test with a simple curl request:
```bash
curl -H "Authorization: YOUR_API_KEY" \
  "https://api.pexels.com/v1/search?query=nature&per_page=1"
```
