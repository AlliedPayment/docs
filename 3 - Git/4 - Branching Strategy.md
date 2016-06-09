#Branching Strategry

Our branching strategy includes both infinite and short-lived branches.

##Infinite Branches
Infinite branches never end their life. 

##Short-lived
Short-lived branches typically die when they are merged into `Dev` (or wherever it is targeted to go). After merging, we can prune GitHub to remove these branches. You can choose to keep a local branch if you'd like.

##Branching
- `Master` (Infinite) - This branch represents what is in production at all times. Only `Hotfixes` should be branched directly from Master.
- `Dev` (Infinite) - This branch represents changes queued to go into production. This is akin to the `Trunk` branch from SVN. In theory `Master` will never be ahead of `Dev` except in the case of a hotfix (see Hotfix below).
- `Final` - (Infinite) - This branch represents a snapshot of `Dev` before it goes into `Master`. Think of this a release candidate. `Final` is a snapshot of `Dev` but work continues on `Dev` without disrupting the release.
- `Feature/*branchname*` (Short-lived) - Features that are not yet ready for inclusion in the next release should live on a feature branch. When complete they are merged into the `Dev` branch.



 

##Hotfix
Simply put, a hotfix is one or more commits made to `Master` either via directly committing or via a `Pull-Request`. If a hotfix is pushed to `Master` on Github, then `Master` needs to be merged into `Dev` and/or `Final`.
