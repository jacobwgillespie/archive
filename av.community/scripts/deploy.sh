#!/usr/bin/env bash

rev=$(git rev-parse --short HEAD)

cd public

git init
git config user.name "Jacob Gillespie"
git config user.email "jacobwgillespie@gmail.com"

git remote add upstream "https://$GH_TOKEN@github.com/av-community/av.community.git"
git fetch upstream && git reset upstream/gh-pages

touch .

git add -A .
git commit -m "Deploy ${rev}"
git push -q upstream HEAD:gh-pages
