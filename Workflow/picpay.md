# Picture Pay Workflow

- Get Delivery Options for FI
  ```
      GET https://api.demo.alliedpayment.com/fis/RemoteCapture/deliveryInfo HTTP/1.1
        Host: api.demo.alliedpayment.com
        Connection: keep-alive
        Cache-Control: no-cache
        Pragma: no-cache
        Accept: application/json
        User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) IPAYTestUI/0.0.3 Chrome/47.0.2526.110 Electron/0.36.12 Safari/537.36
        If-Modified-Since: Mon, 26 Jul 1997 05:00:00 GMT
        Authorization: TIMESTAMP username=555222888;domain=RemoteCapture;timestamp=2017-02-14T16:48:44.401Z;signature=oT0s8Fg4qoXxcXO1ONJkOqkGPpY=;publickey=t4soRY4wDjUu34qnSNgW;
        Accept-Encoding: gzip, deflate
        Accept-Language: en-US
        ```

We will use the EarliestStandardScheduleForDate property of the response
