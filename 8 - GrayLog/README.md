#GrayLog

GrayLog is a third-party logger used for several operational purposes.

GrayLog can be accessed by visiting: http://logging.service.consul/

##MVC UI
The MVC UI is dumping error logs to GrayLog and is being tagged with `MVCUI`.

To monitor the MVC UI errors, use this in the search: `facility:MVCUI` 