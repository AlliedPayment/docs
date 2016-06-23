#Personnel
- Kevin
- Brian
- Bob
   
#Time Frame
- 5-6am Wednesday for Prod SQL-A and SQL-B
- Prior to the Prod window for Final, Mock, Test

#Current Version
- Microsoft SQL Server 2012 - 11.0.5058.0 (X64) 
- May 14 2014 18:34:29 
- Enterprise Edition (64-bit) on Windows NT 6.3 <X64> (Build 9600: ) (Hypervisor)
- Appears to be SP2

#SP3
- Download: https://www.microsoft.com/en-us/download/details.aspx?id=49996
- Release notes: https://support.microsoft.com/en-us/kb/3072779
- `SELECT @@VERSION`
- Successful version = 11.0.6020.0
    
#SQL Instances
- Instance:  i-4d4a6bb4 (mock-sqldb)Private IP: 172.20.6.184
- Instance:  i-d95bc10c (final-sqldb)Private IP: 172.30.20.12
- Instance:  i-d6622404 (Prod-SQL-A)Private IP: 172.16.6.10
- Instance:  i-ecabca05 (Prod-SQL-B)Private IP: 172.16.70.10
    
#Table Maint
- Recover DB space; need to get table name and how to do it from Bob

#General Approach
The general approach proposed is to perform maintenance on Final, then Mock. Those can be coordinated internally. The time it takes to upgrade Mock will need to be doubled in order to accomodate SQL-A and SQL-B during the production maintenance window. The maintenance window should take a max of one hour. If the time on Mock takes more than 30 minutes, we may need to reduce the number of updates and push them to a following maintenance window.

The goal is to have the customer have a friendly message on the UI and the admin during the maintenance window. The API needs to return a 503 to signal Malauzai and/or other direct integration partners that the API is down. Coordination with the partners is needed.

