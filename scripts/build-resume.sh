#!/usr/bin/env bash
# Rebuilds the static site and re-exports public/resume.pdf from /resume.
# Run after editing src/data/timeline.ts or src/data/profile.ts.

set -euo pipefail
cd "$(dirname "$0")/.."

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=4322

if [ ! -x "$CHROME" ]; then
  echo "Chrome not found at $CHROME — install Google Chrome or update this script."
  exit 1
fi

npx astro build

npx astro preview --port "$PORT" >/tmp/astro-preview.log 2>&1 &
PREVIEW_PID=$!
trap 'kill "$PREVIEW_PID" 2>/dev/null || true' EXIT

# wait for preview server to accept connections
for _ in {1..30}; do
  if curl -sf "http://localhost:$PORT/resume" >/dev/null; then break; fi
  sleep 0.2
done

"$CHROME" \
  --headless \
  --disable-gpu \
  --no-sandbox \
  --no-pdf-header-footer \
  --virtual-time-budget=4000 \
  --print-to-pdf=public/resume.pdf \
  "http://localhost:$PORT/resume"

echo "✓ public/resume.pdf regenerated ($(du -h public/resume.pdf | cut -f1))"
