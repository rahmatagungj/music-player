import os
import build

print("\n== COPYING FILES TO PRODUCTION")
print("Copying all files : build/ -> ../app-rahmatagungjulians.tech/music-player/")
os.system("cp -r build/* ../app-rahmatagungjulians.tech/music-player")
print("\n== REMOVING BUILD FOLDER")
os.system("sudo rm -rf build")
print("\n==== DEPLOY DONE ====")