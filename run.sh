#!/bin/sh
cd `dirname $0`
git clone https://github.com/netgainsystems/docs.git
cd docs
hugo --enableGitInfo=false server -D&
while true
do
  sleep 30
  echo git checkout -f master
done
