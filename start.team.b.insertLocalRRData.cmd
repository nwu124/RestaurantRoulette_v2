@echo off
echo.
echo Setting up DB with Admin User
mongo --port 3000 --authenticationDatabase admin ./createDB/createAdminUser.js
echo.
echo Setting up DB with Restaurant Roulette data
echo --------------------------------------
echo.
echo Add USERS
mongo --port 3000 --authenticationDatabase admin ./createDB/rrData/UserData.js
echo.
echo Add RESTAURANTS
mongo --port 3000 --authenticationDatabase admin ./createDB/rrData/RestaurantData.js
echo.
echo Add SAVED LISTS
mongo --port 3000 --authenticationDatabase admin ./createDB/rrData/SavedListsData.js
echo.
