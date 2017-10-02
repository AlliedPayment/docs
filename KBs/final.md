# Final Knowledge Base (FKB)

## Table Of Contents
- [FKB-1 - Users cannot log into SmallbizMVC](#fkb-1)

## FKB-1

### Users cannot log into SmallbizMVC

- Are the instances up and running?
  - API
    - Check [https://api.final.alliedpaymentnetwork.com/version.json](https://api.final.alliedpaymentnetwork.com/version.json)
  - UI
    - Check [https://billpay.final.alliedpaymentnetwork.com](https://billpay.final.alliedpaymentnetwork.com)
- If the instances are not available use mmbot to wake the stack or deploy a new stack into final.
  - Refer to `mmbot help` command in Slack for syntax regarding deployments
- If the instances are available, and users cannot log in ***flush dns*** and ***reset IIS*** on the API/UI box/es
  - Get IPs of API/UI instances
    - Via Slack chatbot Or via [AWS Console](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#Instances:sort=instanceState)
      - `mmbot instance list`
    - Locate the desired instances via their tag `final-v####`
      - Copy IP Address
  - RDC into the API/UI instace/s
    - Open a cmd window as ***Administrator***
    - Flush DNS
      - `ipconfig /flushdns`
    - Reset IIS
      - `iisreset`
