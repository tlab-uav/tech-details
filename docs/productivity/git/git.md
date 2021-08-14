---
hide_title: true
sidebar_label: Work with Submodules
---
# Git Practices


## Git Submodule

### To make the git push work
- `git config --global push.default matching`

### Modify the .gitmodules file correctly
`git config -f .gitmodules submodule.edt.branch linear_dt`


### To convert the existing submodule to the correct branch

- if the local branch does no exist yet:
   > `git checkout -b linear_dt --track origin/linear_dt`
- else, the local branch with the same name already exist, do
   > `git branch -u origin/linear_dt`

### To update submodules after checkingout to a different branch (with different versions of submodules)

```bash
git checkout <branch>
git reset --hard
git submodule foreach --recursive 'git checkout -- . || :'
git submodule update --init --recursive
git clean -d -f -f -x
git submodule foreach --recursive git clean -d -f -f -x
```

### Alias

- add the following file content to `/.git/config`
- add `git sm-trackbranch`

   ```bash
   [alias]
   #git sm-trackbranch : places all submodules on their respective branch specified in .gitmodules
   #This works if submodules are configured to track a branch, i.e if .gitmodules looks like :
   #[submodule "my-submodule"]
   #   path = my-submodule
   #   url = git@wherever.you.like/my-submodule.git
   #   branch = my-branch
   sm-trackbranch = "! git submodule foreach --recursive 'branch=\"$(git config -f $toplevel/.gitmodules submodule.$name.branch)\"; git checkout $branch'"

   #sm-pullrebase :
   # - pull --rebase on the master repo
   # - sm-trackbranch on every submodule
   # - pull --rebase on each submodule
   #
   # Important note :
   #- have a clean master repo and subrepos before doing this !
   #- this is *not* equivalent to getting the last committed 
   #  master repo + its submodules: if some submodules are tracking branches 
   #  that have evolved since the last commit in the master repo,
   #  they will be using those more recent commits !
   #
   #  (Note : On the contrary, git submodule update will stick 
   #to the last committed SHA1 in the master repo)
   #
   sm-pullrebase = "! git pull --rebase; git submodule update; git sm-trackbranch ; git submodule foreach 'git pull --rebase' "

   # git sm-diff will diff the master repo *and* its submodules
   sm-diff = "! git diff && git submodule foreach 'git diff' "

   #git sm-push will ask to push also submodules
   sm-push = push --recurse-submodules=on-demand

   #git alias : list all aliases
   alias = "!git config -l | grep alias | cut -c 7-"
   ```
