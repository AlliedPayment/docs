#Setup

To get the API running locally, please do the following:

* Build the project. You may need to run the `build.bat` file.
* Create a local web server with IIS.
* Navigate to `http://{domain}/version.js`. You should get a response like the following:

```
{
  "$id": "1",
  "Major": 0,
  "Minor": 0,
  "Revision": 0,
  "Build": 0,
  "MachineName": "foo",
  "LocalUri": "http://rest.local/",
  "RemoteUri": "https://api.demo.alliedpayment.com/"
}
```