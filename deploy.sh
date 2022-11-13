#!/usr/bin/env sh

ser -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:yevhen0905/iris.git developer:gh-pages

cd -