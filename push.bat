@echo off
set GIT="C:\Program Files\Git\cmd\git.exe"
%GIT% init
%GIT% config user.name "Envy"
%GIT% config user.email "krishshreesurya@gmail.com"
%GIT% add .
%GIT% commit -m "Initial commit of portfolio"
%GIT% branch -M main
%GIT% remote add origin https://github.com/Krish-Envy28/Envy-portfolio-v1.git
%GIT% push -u origin main
