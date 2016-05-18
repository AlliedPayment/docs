#Build Process

Team City detects the command and begins the build process by pulling in the source from the repo(s). Tests are run to ensure integration and unit testing before deploying to Amazon.

The build process copies serveral Amazon Machine Image's (AMI) during each deployment and places them on individual Elastic Cloud Compute (EC2) instances.

`(TODO: which stack does the build process copy to?)`

Note: The SQL server instance does not get rebuilt on each deployment. (TODO: find out if anything else is persistent, i.e. ELB, HAProxies, etc.)

`(TODO: explain the 'swap' process in detail.)`

