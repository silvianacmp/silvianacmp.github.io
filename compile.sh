#!/usr/bin/env bash
rm index.html || true && rm asset-manifest.json || true && ./static/ || true
npm run build
cp -a ./build/ ./