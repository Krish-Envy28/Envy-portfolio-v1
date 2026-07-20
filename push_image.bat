@echo off
set GIT="C:\Program Files\Git\cmd\git.exe"
%GIT% add .
%GIT% commit -m "Update profile image"
%GIT% push
