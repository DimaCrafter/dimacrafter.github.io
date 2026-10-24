#!/bin/sh
set -e
cd "$(dirname "$0")"

if [ ! -d ../.deploy ]; then
	git worktree add ../.deploy gh-pages
fi

yarn && yarn build
