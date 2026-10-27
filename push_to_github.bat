@echo off
set "PATH=%LOCALAPPDATA%\Microsoft\WinGet\Packages\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\cmd;%PATH%"
echo Pushing to GitHub repository moumen27/reclamation_client-...
git push -u origin main
pause
