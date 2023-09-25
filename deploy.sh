#!/usr/bin/env sh

# abort on errors
set -e

# nuxt env vars
# BASE_URL=/

# github repo url
REPO_URL=git@github.com:tales-notebook/site.git

# set runing dir with script
cd `dirname $0`

# build
BASE_URL=$BASE_URL npm run generate

touch .output/public/.nojekyll

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git remote add origin $REPO_URL
git add .
git commit -m "deploy `date +%d-%m-%Y" "%H:%M:%S`"
git branch -M gh-pages

git push -f $REPO_URL gh-pages

cd -