Recommended to be used with VSCode and the following extensions:
- ESLint
- Prettier
- Gitlens

After cloning rename the directory, remove the .git directory, modify package.json, and re initialize the repo
```
rm -rf ./.git
git init 
git add .
git commit -m "Initial"
git remote add origin <Repo URL>
git push --set-upstream origin master
```