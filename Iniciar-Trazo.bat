@echo off
title TRAZO IA — Motor de Busqueda Web de Imagenes en Vivo
cd /d "%~dp0"
echo Iniciando servidor de busqueda web en vivo en http://localhost:3000 ...
start "" "http://localhost:3000"
node server.js
pause
