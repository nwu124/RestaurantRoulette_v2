@echo off
@Echo Warning: This script exists you inside the rrAngular folder!
rmdir /s angularDist
mkdir angularDist
cd rrAngular
ng build

