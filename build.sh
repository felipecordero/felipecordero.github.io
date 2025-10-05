#!/bin/bash
# Build script for Vercel deployment
# This script builds the Hugo site and ensures the API directory is included

echo "Building Hugo site..."
echo "PEXELS_API_KEY is set: ${PEXELS_API_KEY:+YES}"
echo "FORMSPREE_ENDPOINT is set: ${FORMSPREE_ENDPOINT:+YES}"

# Run Hugo build
hugo --minify

# Ensure API directory is copied to public (for serverless functions)
if [ -d "api" ]; then
    echo "Copying API directory to public..."
    cp -r api public/
fi

echo "Build completed!"
