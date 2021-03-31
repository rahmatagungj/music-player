import os
import build

print("\n== COPYING FILES TO PRODUCTION")
print(
    "Copying all files : build/ -> ../production-rahmatagungjulians.tech/app/music-player/"
)
os.system("cp -r build/* ../production-rahmatagungjulians.tech/app/music-player")
print("\n== REMOVING BUILD FOLDER")
os.system("sudo rm -rf build")
print("\n==== DEPLOY DONE ====")