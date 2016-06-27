#Maintenance
The idea is to have a way to have a controlled procedure to take all services offline for maintenance.

##Goal
The goal is to have the customer have a friendly message for requests to the UI and the admin during the maintenance window. The API needs to return a 503 to signal Malauzai and/or other direct integration partners that the API is down. Coordination with the partners is needed.

##General Approach
The general approach proposed is to perform maintenance on Final, then Mock. Those can be coordinated internally. 

If database maintenance is required, the time it takes to upgrade Mock will need to be doubled in order to accomodate SQL-A and SQL-B during the production maintenance window. The maintenance window should take a max of one hour. If the time on Mock takes more than 30 minutes, we may need to reduce the number of updates and push them to a following maintenance window.

Wednesday's are the most likely times for maintenance windows.

##Service Take Down/Restore Procedure
1. Coordinate with any partners that are directly integrating.
2. Take down services by performing the following at the beginning of the window:
    1. Set a Consul key value for maintenance (TODO: get from Brian), this will signal HAProxy to redirect outside traffic to our friendly messaging.
    2. Verify that traffic is being redirected for the UI's.
    3. Place both API/UI boxes into Consul maint mode by running `consul maint --enable` on each box locally.
    4. Disable all worker services on each worker box (right now there are two worker boxes).
    5. Disable all jobs on the Scheduled Task box.
3. Perform needed maintenance.
4. Restore services by performing the following:
    1. Enable all jobs on the Scheduled Task box.
    2. Enable all worker services on each worker box.
    3. Take both API/UI boxes out of Consul maint mode by running `consul maint --disable` on each box locally.
    4. Smoke test the services via the UI from one of the API/UI boxes.
    5. Set a Consul key value for maintenance (TODO: get from Brian), this will signal HAProxy to restore outside traffic to normal services.
    
> Note: At some point we may want to automate this via a script.

##TODO's

Things we need to do in order to execute the maintenance successfully:

- [ ] https://github.com/AlliedPayment/BillPay/issues/117
