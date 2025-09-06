@echo off
REM Claude Credit Cycle Automation - Windows Batch Wrapper
REM Usage: claude-credit-cycle.cmd [command]

if "%~1"=="" (
    powershell -ExecutionPolicy Bypass -File "%~dp0claude-credit-cycle.ps1"
) else (
    powershell -ExecutionPolicy Bypass -File "%~dp0claude-credit-cycle.ps1" %1
)