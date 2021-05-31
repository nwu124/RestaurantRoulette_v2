@echo off
echo Deleting old DB..
rmdir /s db
echo.
echo Recreate DB folder
mkdir db
echo.
echo Starting new Mongo instance..
mongod -port 3000 -dbpath ".\db"