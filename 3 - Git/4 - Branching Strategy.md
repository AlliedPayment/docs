#Branching Strategy

Our branching strategy includes both infinite and short-lived branches.

##Infinite Branches
Infinite branches never end their life. 

##Short-lived
Short-lived branches typically die when they are merged into `Dev` (or wherever it is targeted to go). After merging, we can prune GitHub to remove these branches. You can choose to keep a local branch if you'd like.

##Branching
- `Master` (Infinite) - This branch represents what is in production at all times. Only `Hotfixes` should be branched directly from Master.
- `Dev` (Infinite) - This branch represents changes queued to go into production. This is akin to the `Trunk` branch from SVN. In theory `Master` will never be ahead of `Dev` except in the case of a hotfix (see Hotfix below).
- `Final` (Infinite) - This branch represents a snapshot of `Dev` before it goes into `Master`. Think of this a release candidate. `Final` is a snapshot of `Dev` but work continues on `Dev` without disrupting the release.
- `Feature/*branchname*` (Short-lived) - Features that are not yet ready for inclusion in the next release should live on a feature branch. When complete they are merged into the `Dev` branch.

A quick review of the merge command:
- First change to the branch you want to merge into (the target) i.e. `git checkout dev`
- Run a simple merge i.e. `git merge master`

>Reminder that merging between branches is directonal. If you merge from `Dev` into `Final`, you're moving commits that `Final` has into `Dev`. `Final` remains unchanged. If you'd like to merge `Final` into `Dev`, that becomes another action you must complete.

>Pull before you push by running something like `git pull origin master` which means update my local `Dev` from GitHub. Conversely, you can push by running `git push origin dev` (push my local dev to GitHub).

##Hotfix
Simply put, a hotfix is one or more commits made to `Master` (or `Final`) either via directly committing or via a `Pull-Request`. If a hotfix is pushed to `Master` on Github, then `Master` needs to be merged into `Dev` and/or `Final`.

>It is a very important step to merge any hotfixes into `Dev` and/or `Final` to ensure we keep them up-to-date.

##Releasing to Final
To release to final, merge from `Dev` to `Final` if the tip of `Dev` (aka `HEAD`) is where you'd like to release from. If you'd like to release from a different point in Dev's history, ask for help as we can make this happen.

##When in Doubt
When in doubt, your changes should go to `Dev`.

##Pull-Requests (PR)
Pull-requests offer a nice way to stage a larger feature outside of `Dev` by using a `feature` branch. To begin a feature, complete the following:

- Create a new issue via Waffle or GitHub directly (note the issue number)
- Create a new local branch based off of `Dev` (`git checkout -b feature/foo#123`) <== issue 123
- Make a trivial commit on your new branch such as `Init Hello World`. You need at least one commit to create a PR.
- Push your new branch to `GitHub` (`git push origin feature/foo#123`)
- Go to the PR tab of the repo you're working with.
- Create a new PR. Choose `Dev` as your base and your new branch as the other branch.
- Give it a name and add a description in the conversation area.

What you'll end oup with is a way for other to code review the changes and see the full scope of what will be affected. When you merge the branch into `Dev`, the pull request will be closed automatically. If you named your PR properly, Waffle will have moved the ticket statuses for you.

##Cherry-picking

Git doesn't use integers as revisions, rather it uses a SHA1 hash. If you'd like to get a single commit from another branch and drop it onto another branch, you can perform a `cherry-pick`. You will need to run the following command:

`git cherry-pick <the SHA1 hash of the commit>`

If a commit cannot be found, try running this to refresh your list of references: `git fetch --all`.

##Team City (TC) Integration
We have TC set to auto build pull requests, `Master`, `Dev` and `Final`. If we need to create an ad-hoc branch to build not otherwise automatically built, we just need to adjust TC to look at a different branch temporarily.

##Waffle/GitHub Issues
GitHub issues is a lightweight unit of work tracker.
