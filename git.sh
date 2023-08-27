#!/bin/sh
echo "enter your commit comment"
read comment # ここで読み込み待ち
echo ${comment}

git init
git status
git add -A
git commit -m '$comment'
git push -u origin main
