#Command Line#

There are hundreds of Git command resources on the internet and you should probably google them to learn more.  However below are several common commands you should be aware of despite being able to do all of these in Git Extensions.  In the end many developers prefer using CLI commands as they can be done pretty fast and requires very little mouse interaction. These commands should be run from your repo directory as they are contextual:

```
git clone https://github.com/kgiszewski/LearnUmbraco7.git

//current directory is c:/dev
//this will clone the project listed to c:/dev/LearnUmbraco7
```

```
git fetch --all

//this grabs commits and branches from the GitHub not yet on your machine. It does not merge them.
```

```
git add .

//this stages all changes, however you should probably use Git Extensions for this
```

```
git commit -m "my message"

//this commits any files staged with the message entered
```

```
git pull origin master

//this pulls changes from GitHub for branch master
```

```
git push origin master

//this pushes local changes to GitHub
```

```
git cherry-pick deb725b91364345e8df941e8ba3ea6656be2ec77

//this merges a single commit to the current branch
```

```
git checkout develop

//this switches to the develop branch
```

```
git checkout -b mynewbranch

//this creates a new branch based on the current branch and switches to it
```

```
git merge master

//this merges master into the current branch (assuming we're not on master)
```

```
git init

//this creates a repo locally but it won't be connected to GitHub, we will connect it using commands given to us by GitHub
//this assumes you are running this command from the root of your new repo
```

```
git branch -D branch_name
//deletes a local branch, use with caution!
```

```
git push origin --delete branch_name
//deletes a remote branch EXTREME CAUTION, make sure you type it right :)
//best just to do it on the GitHub website :)
```

##Creating a Local Repo and Connecting it to GitHub##
Getting your local repo connected to GitHub is easy, please follow these steps:

1. To create a repo locally, run `git init`.  This creates the required Git files.
2. Manually create or copy/paste an existing `.gitignore` to exclude stuff we shouldn't track.
3. Create a `README.md`.  This file will greet users on GitHub.
4. Go to GitHub and create a new public or private repo.
5. Run the commands that GitHub displays.

You should now be able to push/pull to GitHub with your new repo.

##Credentials
If you are using HTTPS for you communications, you may be getting prompted to enter your user/password during each remote request. You can have Git remember them by entering in the CLI:
`git config --global credential.helper wincred`

Find out more(here)[https://help.github.com/articles/caching-your-github-password-in-git/].
