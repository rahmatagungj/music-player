import os
import build

print("\n== COPYING FILES TO PRODUCTION")
print(
    "Copying all files : build/ -> ../production-rahmatagungjulians.tech/app/music-player/"
)
os.system("cp -r build/* ../production-rahmatagungjulians.tech/app/music-player")
print("\n==== DEPLOY DONE ====")