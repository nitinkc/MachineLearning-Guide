#!/bin/bash

# ML/DL Guide Quick Start Script
# Run this from the mlDLGuide directory to setup and serve the documentation

set -e

echo "🚀 ML/DL Guide Setup & Serve"
echo "=============================="
echo ""

# Check if we're in the right directory
if [ ! -f "mkdocs.yml" ]; then
    echo "❌ Error: mkdocs.yml not found."
    echo "   Make sure you're in the /Users/sgovinda/Learn/mlDLGuide directory"
    exit 1
fi

# Create virtual environment if it doesn't exist
if [ ! -d ".venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv .venv
fi

# Activate virtual environment
echo "✅ Activating virtual environment..."
source .venv/bin/activate

# Install dependencies
echo "📚 Installing dependencies..."
pip install -q -r requirements.txt

echo ""
echo "✅ Setup complete!"
echo ""
echo "🌐 Starting documentation server..."
echo "   → Open http://127.0.0.1:8000 in your browser"
echo ""
echo "   To stop the server, press Ctrl+C"
echo ""

# Start the server
python3 -m mkdocs serve

