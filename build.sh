#!/bin/bash
# Build script for Vercel (or local production build)

git submodule update --init --recursive
hugo --minify
