#API Routing

BillPay uses [OpenRasta](http://openrasta.org/) for routing terminated with a handler like below:

```
ResourceSpace.Has.ResourcesNamed("CustomerSearch")
  .AtUri("/fis/{fiName}/customers?search={search}&style={style}")
  .HandledBy<CustomerSearchHandler>();
```