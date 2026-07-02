@echo off
echo ===================================================
echo     KHOI DONG MAY CHU TRINH CHIEU (LOCAL SERVER)
echo ===================================================
echo.
echo Vui long giu nguyen cua so nay de may chu hoat dong.
echo De tat may chu, ban co the bam dau X hoac bam Ctrl+C.
echo.
echo Ban co the xem slide tai duong link sau:
echo 👉 http://localhost:8080
echo.
start http://localhost:8080
caddy.exe file-server --listen :8080
pause
