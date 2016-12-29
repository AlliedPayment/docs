# Release Candidates AKA Final
Work completed in the current sprint is merged incrementally (on a daily basis) into the [final] branch.       
This work is built by [TeamCity] and new [AWS] images are [baked](http://www.capitalone.io/blog/baked-vs-fried-whos-hungry-on-the-cloud/) on a nightly basis.      
The new build is then manually deployed via Allied's chatbot [mmbot] to the final environment in [AWS].

---

## Merging work into [Final](https://github.com/AlliedPayment/BillPay/tree/final)
### *Complete this at the __end of the day__ on a  __daily__  basis*
Tools Required:
- Web Browser        
- Source Control  (Git via [Github])

How To:       
- Navigate to Allied's [BillPay] project on Github
- [Start a new pull request (PR) with final as the base and dev as the compare](https://github.com/AlliedPayment/BillPay/compare/final...dev?expand=1)
- Name the PR: `RC Sprint {CURRENT-SPRINT-NUMBER}`
- Click button ->  `Create pull request`
- From the PR's page 
    - click -> `Merge pull request`      
    - click -> `Confirm merge`      

---

## Trigger Build On a Nightly basis

### *__Note__: You will need access to Allied's internal network to reach the build server*
Tools Required:
- Web Browser
- [TeamCity]

How To:
- Navigate to Allied's [build server]
- Find `Final Branch Builder` project on the [overview page](http://buildserver/overview.html)
    - hover -> over the drop down menu button (little grey triangle) for the final builder project
    - click -> `Edit Settings`
        - this navigates you to the [final builder settings] page
- click -> `Triggers` (link on the top left side of page)
- From here you can see the current triggers for this branch.
    - The trigger we are concerned with is a Scheduled Trigger.
        - At the time this document was created, it's currently configured to run everyday @ 3am regardless of pending changes.
        - TeamCity will perform a "clean checkout" of the final branch and build billpay.        

---

## Release Checklist

### *Complete this at the __end of each sprint__*

- TODO: describe down merging process (master & admin)

- TODO: describe changing **SprintNumber** build configuration parameters (TeamCity:Projects: *dev, final* builders )

- TODO: describe merging work into final from dev (anything different than a nightly merge?)

- TODO: describe ticket validation process (what tickets are in the sprint vs what tickets have code associated with it in the release candidate?)

    - TODO: describe ticket reconciliation process (i.e. expected tickets do not match actual work done, now what?)

- TODO: describe final testing and final issue management

    - TODO: describe down merging final issues to dev
    - TODO: describe ticket validation after final issues have been completed (tickets are all in Final and everything looks good now what?)

- TODO: describe release process

    - TODO: describe changing **SprintNumber** build configuration parameter (TeamCity:Projects: *master* builder )

    - TODO: Merge release candidate to master

    - TODO: Describe build flow (what happens where, and what to do if something fails e.g. *build, deploy to chef, packers*)

    - TODO: describe deployment process (e.g. interacting with mmbot & what to do if it fails i.e. *too many instances causing, etc*)
    
    - TODO: describe SMOKE testing (what to do, how to do it, what are the bookmarklets required to get to smoke?)

    - TODO: describe swapping smoke into production, and reverting back.
    
---



[final]: https://github.com/AlliedPayment/BillPay/tree/final "Final Branch"
[BillPay]: https://github.com/AlliedPayment/BillPay "Allied's BillPay Project"
[Github]: https://github.com
[TeamCity]: https://www.jetbrains.com/teamcity/ "Allied's Build Server"
[AWS]: https://aws.amazon.com/ 
[mmbot]: https://github.com/AlliedPayment/mmbot "Allied's Slack Chatbot"
[build server]: http://buildserver/overview.html
[final builder settings]:http://buildserver/admin/editBuild.html?id=buildType:BillPay_Development_FinalBranchBuilder
