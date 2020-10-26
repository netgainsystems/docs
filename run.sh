#!/bin/sh
cd `dirname $0`
hugo --enableGitInfo=false server -D&
while true
do
  sleep 30
  echo git checkout -f master
done
