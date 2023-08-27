#!/bin/sh
echo "enter your commit comment"
read comment # ここで読み込み待ち
echo ${comment}

commit_message="$comment"

git init
git status
git add -A
git commit -m "$commit_message"
git push -u origin main
