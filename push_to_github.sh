#!/bin/bash

# Script to help push the StageWise Quiz Platform to GitHub
echo "=== StageWise Quiz Platform GitHub Push Helper ==="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "Error: Please run this script from the stagewise-quiz directory"
    exit 1
fi

# Check Git status
echo "Current Git status:"
git status

echo ""
echo "To push to GitHub, please follow these steps:"
echo "1. Make sure you have a Personal Access Token (classic) from GitHub"
echo "2. Your token needs 'repo' scope permissions"
echo "3. When prompted for password, use your PAT instead of your GitHub password"
echo ""
echo "Trying to push now..."
echo ""

# Try to push
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "Repository should be available at: https://github.com/drooschunkai/stagewise-quiz-platform"
else
    echo ""
    echo "❌ Push failed. Please check:"
    echo "   - Your GitHub PAT is valid and has repo permissions"
    echo "   - You have write access to the repository"
    echo "   - Your Git credentials are properly configured"
    echo ""
    echo "You can also try:"
    echo "   git push https://<your-username>:<your-PAT>@github.com/drooschunkai/stagewise-quiz-platform.git main"
fi
