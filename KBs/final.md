# Final Knowledge Base (FKB)

## Table Of Contents
- [FKB-1 - How to remove payment and ACH files from final](#fkb-1)
- [FKB-2 - How to reset payments for ACH testing in final](#fkb-2)
- [FKB-3 - Users cannot log into SmallbizMVC](#fkb-3)

## FKB-1

### How to remove payment and ACH files from final

1. Connect to `final` DB via using [SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)
1. Open a `New Query Window`         
![New Query Location Image](https://raw.githubusercontent.com/AlliedPayment/Documentation/master/assets/new-query.PNG?token=AGnIbW9oVZA9Vpjd5YBcbADfYvY1nh0aks5Z8KD4wA%3D%3D)         
1. Copy, paste, & execute the SQL script below 

``` sql
-- scope scipt to final only
use Final

-- Count before truncate
select Count(*) from ACHFiles

-- Delete all rows from table
truncate table ACHFiles

-- Count after truncate (should be 0)
select Count(*) from ACHFiles

```

## FKB-2

### How to reset payments for ACH testing in final

1. Connect to `final` DB via using [SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)
1. Open a `New Query Window`         
![New Query Location Image](https://raw.githubusercontent.com/AlliedPayment/Documentation/master/assets/new-query.PNG?token=AGnIbW9oVZA9Vpjd5YBcbADfYvY1nh0aks5Z8KD4wA%3D%3D)         
1. Copy, paste the script below into the query window
1. Update the `@date` variable to the target date
1. Execute the query

``` sql
-- scope scipt to final only
Use Final

-- target date variable
declare @date as nvarchar(50)
set @date = 'TODO_ENTER_DATE_STRING_HERE' -- use format like 7/11/2017

-- clear collection batch ids 
Update Payments Set Status = 'processing', CollectionBatch_Id = '00000000-0000-0000-0000-000000000000' , IsFeeCollected = 0 Where CollectionDate = @date and achpattern in ('billpay-biller','single','ach','loan')

-- clear settlement batch ids
Update Payments Set Status = 'processing', SettlementBatch_Id  = '00000000-0000-0000-0000-000000000000' , IsFeeCollected = 0 Where SettlementDate = @date and achpattern in ('billpay-biller','single','ach','loan')

-- clear settlement batch ids
Update Payments Set Status = 'processing', NetworkSendBatch_Id = '00000000-0000-0000-0000-000000000000' , IsFeeCollected = 0 Where NetworkSendDate = @date and achpattern in ('billpay-biller','single','ach','loan')
```

## FKB-3

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
