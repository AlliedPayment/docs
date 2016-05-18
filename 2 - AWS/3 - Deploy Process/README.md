The deploy process begins with a issuing a command via the [mmbox](https://github.com/mmbot/mmbot) via [Slack](https://slack.com/).

```
deploy destroy <version>
deploy list
deploy put <environment> <slot> <deployment_name>
deploy version <version> to <environment>
go to sleep <stackName>
mess with <user>
mmbot add package alias (alias name)=(actual package name) - adds an alias to a package name for convenience
mmbot add package source (package source url) - adds a package source to use when downloading packages
mmbot bonusly bonuses - lists recent micro-bonuses
mmbot bonusly give <amount> to <name|email> for <reason> #deleted-channel - gives a micro-bonus to the specified user
mmbot bonusly leaderboard <giver|receiver> -  show leaderboard for giving or receiving
mmbot die - End mmbot process
mmbot download script (name) - downloads a script by (name) from the mmbot Scripts repository.
mmbot dump roles - dumps all user role assignments
mmbot echo (text) - Reply back with <text>
mmbot give (user) the (role) role - assigns user to role
mmbot help - Displays all of the help commands that mmbot knows about.
mmbot help (query) - Displays all help commands that match (query).
mmbot list admins - lists the admin users
mmbot list installed packages - lists the currently installed packages
mmbot list package aliases - lists the currently in-use package aliases
mmbot list package sources - lists the currently in-use package sources
mmbot list roles for (user) - lists roles that the user has
mmbot list schedule- Lists all scheduled jobs.
mmbot list scripts - Displays a list of all the loaded script files
mmbot man (query) - Displays the details for the script that matches (query).
mmbot ping - Reply with pong
mmbot question (question) - Queries wolfram alpha for the answer to the question
mmbot question detailed (question) - Queries wolfram alpha for the answer to the question and provides a verbose answer
mmbot remove (user) from the (role) - removes user from role
mmbot remove package alias (alias name) - removes an alias
mmbot remove package source (package source url) - removes a package source
mmbot repeat every (time) (command)- Repeat an mmbot command on a schedule (e.g. 4m, 1s, 24h).
mmbot schedule for (time) (command) - Schedule an mmbot command.
mmbot scripts (query) [detailed] - lists scripts in the mmbot Scripts repository filtered by (query).
mmbot stop job (job|all)- kills a scheduled job, all for all jobs.
mmbot time - Reply with current time
mmbot update (package name or alias) [restart] - updates the specified package and optionally restarts the robot to load updated packages
pick on <user>
PING -- PONG
quit messing with <user>
run migrations for <environment>
stack list
swap <environment>
version list
wake up <stackName>
```

##Packer
TODO: Explain packer

##Cloud Formation
TODO: Explain CloudFormation

Once complete, the deployment should be finished building and reside in the 'smoke' slot. Using 'Consul' we determine which IP's based on revision need to be pointed to by the HAProxy configurations. 
