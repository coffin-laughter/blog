#!/usr/bin/env sh
# 现已通过GitHub Actions自动部署，提交只需 'git push' 即可

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist/

# 如果是发布到自定义域名
echo 'blog.wbloc.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git remote add origin git@github.com:coffin-laughter/coffin-laughter.github.io.git


# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:coffin-laughter/coffin-laughter.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
