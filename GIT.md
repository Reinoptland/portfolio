## What do we know

### Cloning a project

- git clone

### Make a repo

- git init (making a local repo)
- Github (making a remote repo)

### Make a commit (locally)

- git add
- git status
- git commit

### Communicating with remotes

- git remote add ...
- git push (to master)

### Ignoring files

- .gitignore -> node_modules, .DS_STORE

### What we can do at this point

- Work individually while tracking our work
- Push our work to share it

### What we want to change

- Are you allowed to push to master (no, NO) -> bad ...
- We want to learn how to create a branch
- Pushing a branch
- Merge / Make a pull request (a.k.a. merge request)
- How & why to pull

### Why are we not allowed to push to master

- We don't want overwrite each others work
- We want feedback / testing
- Why would I rather have find the bug: my user, or myself / my colleague
- The master branch contains our `production` version

### We will use branches

- How should we us branches
- Master: Contains the current working version (bug free & tested)
- Development branch: Where we combine our work (can be broken sometimes)
- Feature branch: contains isolated new features
