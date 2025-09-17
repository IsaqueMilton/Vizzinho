# Script PowerShell para criar e subir o projeto Vizzinho no GitHub

# Verifica autenticação no GitHub CLI
if (!(gh auth status 2>$null)) { 
    Write-Host "❌ Você não está autenticado no GitHub CLI. Rode 'gh auth login' primeiro." 
    exit
}

# Checa se o repositório já existe
$repo = gh repo view IsaqueMilton/Vizzinho 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "🗂️ Criando repositório no GitHub..."
    gh repo create IsaqueMilton/Vizzinho --public --source=. --remote=origin --push
} else {
    Write-Host "✅ Repositório já existe, usando remoto existente..."
    git remote remove origin 2>$null
    git remote add origin https://github.com/IsaqueMilton/Vizzinho.git
}

# Adiciona todos os arquivos
git add .
git commit -m "first commit - base project Vizzinho" 2>$null
git push -u origin main

Write-Host "🎉 Projeto Vizzinho enviado! Verifique: https://github.com/IsaqueMilton/Vizzinho"