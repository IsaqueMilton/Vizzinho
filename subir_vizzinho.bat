@echo off
echo ============================================
echo   🚀 Subindo projeto Vizzinho para GitHub
echo ============================================

:: Verifica se o GitHub CLI está instalado
where gh >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ GitHub CLI não encontrado.
    echo Baixe em: https://cli.github.com/
    pause
    exit /b
)

:: Verifica autenticação
echo.
echo 🔐 Verificando autenticação no GitHub...
gh auth status >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Você não está autenticado no GitHub CLI.
    echo Execute o comando: gh auth login
    pause
    exit /b
)

:: Cria o repositório
echo.
echo 🗂️  Criando repositório no GitHub: IsaqueMilton/Vizzinho ...
gh repo create IsaqueMilton/Vizzinho --public --source=. --remote=origin --push

echo.
echo ✅ Projeto Vizzinho enviado com sucesso!
echo 🌐 Link: https://github.com/IsaqueMilton/Vizzinho
pause
