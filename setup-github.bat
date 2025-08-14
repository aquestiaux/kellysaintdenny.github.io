@echo off
echo Setting up GitHub repository for kellysaintdenny.com...
echo.

echo 1. Initialize git repository...
git init

echo.
echo 2. Add all files...
git add .

echo.
echo 3. Make initial commit...
git commit -m "Initial commit: Dr. Kelly Saint Denny personal website"

echo.
echo 4. Add remote origin (replace YOUR_USERNAME with your actual GitHub username)...
echo git remote add origin https://github.com/YOUR_USERNAME/kellysaintdenny.github.io.git

echo.
echo 5. Push to GitHub...
echo git push -u origin main

echo.
echo ========================================
echo SETUP COMPLETE!
echo ========================================
echo.
echo Next steps:
echo 1. Create a new repository on GitHub named 'kellysaintdenny.github.io'
echo 2. Replace YOUR_USERNAME in the commands above with your actual GitHub username
echo 3. Run the git remote add and git push commands
echo 4. Enable GitHub Pages in your repository settings
echo 5. Add 'kellysaintdenny.com' as your custom domain
echo.
echo For detailed instructions, see README.md
pause
