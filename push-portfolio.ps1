# Script to push Portfolio to GitHub
Set-Location -Path $PSScriptRoot
Write-Host "Pushing Module4-P1 Portfolio to https://github.com/Arjun-E-Naik/portfolio.git..." -ForegroundColor Cyan
git push -u origin main
if ($LASTEXITCODE -eq 0) {
    Write-Host "`nSUCCESS! Portfolio uploaded to GitHub successfully!" -ForegroundColor Green
    Write-Host "View your repository at: https://github.com/Arjun-E-Naik/portfolio" -ForegroundColor Cyan
} else {
    Write-Host "`nPush failed. Please ensure the repository 'portfolio' has been created at https://github.com/new" -ForegroundColor Yellow
}
