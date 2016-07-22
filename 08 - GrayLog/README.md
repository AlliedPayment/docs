#GrayLog

GrayLog is a third-party logger used for several operational purposes.

GrayLog can be accessed by visiting: http://logging.service.consul/ or http://logging.service.beta/

##Basic Error Searching
`SourceContext:webrequest AND response-statuscode:>=500`

##Basic SQL Searching
`SourceContext:sql`

##MVC UI
The MVC UI is dumping error logs to GrayLog and is being tagged with `MVCUI`.

To monitor the MVC UI errors, use this in the search: `facility:MVCUI` 
