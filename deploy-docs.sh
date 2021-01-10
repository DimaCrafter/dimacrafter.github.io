git add .
git commit -m "$2"
cd $1
yarn && yarn build
cd ..
git add .
git stash
git checkout gh-pages
git stash pop
mv $1/.vuepress/dist/* $1/
git add .
git commit -m "$2"
git checkout master
git push --all origin
