@echo off
REM Quick Start Script for Email Booking System
REM This script starts both frontend and backend servers

echo.
echo ====================================
echo Email Booking System - Quick Start
echo ====================================
echo.
echo 1. Checking if .env file is configured...
if not exist ".env" (
    echo ERROR: .env file not found!
    echo Please create it from .env.example
    pause
    exit /b 1
)

echo ✓ .env file found
echo.
echo 2. Starting both servers...
echo Frontend will run on: http://localhost:8080
echo Backend will run on: http://localhost:5000
echo.
echo Press Ctrl+C to stop both servers
echo.

npm run dev:all

pause
