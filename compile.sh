#!/usr/bin/env bash
rm index.html || true && rm asset-manifest.json || true && rm -r ./static || true
npm run build
cd ./build
mv * ../