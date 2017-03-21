# Picture Pay Workflow

### 1. Retrieve delivery info and store response for later use 

```
------------------------------------- REQUEST --------------------------------------------------------------------------------------

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

------------------------------------- RESPONSE --------------------------------------------------------------------------------------

HTTP/1.1 200 OK
Access-Control-Allow-Headers: Content-Type, Accept, Authorization
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, PATCH
Access-Control-Allow-Origin: *
Cache-Control: private
Content-Type: application/json
Date: Tue, 14 Feb 2017 16:48:45 GMT
Set-Cookie: SERVERID=; Expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/
X-Performance: 78.1284 ms
X-RequestId: 8449e159-aee9-4e8c-a413-2e0ead25a58d
X-Robots-Tag: none
Content-Length: 2600
Connection: keep-alive

{
  "$id": "1",
  "EarliestProcessingDate": "2/14/2017",
  "EarliestStandardDeliveryDate": "2/22/2017",
  "EarliestStandardScheduleForDate": "2/22/2017",
  "EarliestExpeditedDate": "2/15/2017",
  "DefaultExpeditedOptionName": "Overnight Mail",
  "DefaultExpeditedOptionId": "0ea1519d-1cae-49a4-a2f2-3318812ae056",
  "DefaultExpeditedOptionFee": 19.95,
  "DefaultStandardOptionFee": 0.0,
  "CutOffTime": "2/14/2017 11:00:00 PM -05:00",
  "StandardOptions": {
    "$id": "2",
    "$values": [
      {
        "$id": "3",
        "Id": "87023e0b-02ab-44f8-af91-f1a9f21d075a",
        "AllowedNetworks": {
          "$id": "4",
          "$values": []
        },
        "Description": "Standard",
        "ShippingMethod": "Standard",
        "Floats": {
          "$id": "5",
          "ScheduledForOffset": 0,
          "CollectionDateOffset": 0,
          "SettlementDateOffset": 0,
          "NetworkSendDateOffset": 1
        },
        "MinimiumDeliveryTime": 0,
        "MaximiumDeliveryTime": null,
        "CutOff": null,
        "Fee": 0.0,
        "IsElectronic": true,
        "IsRealTime": false,
        "IsEnabled": true,
        "IsDefault": true,
        "CalculateMinimiumScheduleForDate": null,
        "DateCalculation": "DeliveryDate",
        "MaximiumValidFor": "365.00:00:00",
        "ValidFor": {
          "$id": "6",
          "$values": [
            "BILLER"
          ]
        },
        "Priority": 0,
        "MaxDaysReturned": null
      },
      {
        "$id": "7",
        "Id": "236886e4-a185-4db5-b794-80c911f6e8e3",
        "AllowedNetworks": {
          "$id": "8",
          "$values": []
        },
        "Description": "Standard US Mail",
        "ShippingMethod": "Standard",
        "Floats": {
          "$id": "9",
          "ScheduledForOffset": 0,
          "CollectionDateOffset": 0,
          "SettlementDateOffset": 0,
          "NetworkSendDateOffset": 0
        },
        "MinimiumDeliveryTime": 0,
        "MaximiumDeliveryTime": null,
        "CutOff": null,
        "Fee": 0.0,
        "IsElectronic": false,
        "IsRealTime": false,
        "IsEnabled": true,
        "IsDefault": true,
        "CalculateMinimiumScheduleForDate": null,
        "DateCalculation": "DeliveryDate",
        "MaximiumValidFor": "365.00:00:00",
        "ValidFor": {
          "$id": "10",
          "$values": [
            "BILLER"
          ]
        },
        "Priority": 1,
        "MaxDaysReturned": null
      }
    ]
  },
  "DefaultScheduledForDates": null
}
     
```

### 2. Retrieve customer and store response for later use

```
------------------------------------- REQUEST --------------------------------------------------------------------------------------

GET https://api.demo.alliedpayment.com/customers/B2DE5BC7-06BD-4331-8A9F-9BAD83B94A20 HTTP/1.1
Host: api.demo.alliedpayment.com
Connection: keep-alive
Cache-Control: no-cache
Pragma: no-cache
Accept: application/json
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) IPAYTestUI/0.0.3 Chrome/47.0.2526.110 Electron/0.36.12 Safari/537.36
If-Modified-Since: Mon, 26 Jul 1997 05:00:00 GMT
Authorization: TIMESTAMP username=555222888;domain=RemoteCapture;timestamp=2017-02-14T16:48:44.404Z;signature=jnp4areiomfW0Gdmr4WTpX4uR4s=;publickey=t4soRY4wDjUu34qnSNgW;
Accept-Encoding: gzip, deflate
Accept-Language: en-US

------------------------------------- RESPONSE --------------------------------------------------------------------------------------
HTTP/1.1 200 OK
Access-Control-Allow-Headers: Content-Type, Accept, Authorization
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, PATCH
Access-Control-Allow-Origin: *
Cache-Control: private
Content-Type: application/json
Date: Tue, 14 Feb 2017 16:48:45 GMT
Set-Cookie: SERVERID=; Expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/
x-etag: customer:58
X-Performance: 93.7499 ms
X-RequestId: 641efaa7-fb91-42b8-9074-c2f5f583cf17
X-Robots-Tag: none
Content-Length: 2643
Connection: keep-alive

{
  "$id": "1",
  "Id": "b2de5bc7-06bd-4331-8a9f-9bad83b94a20",
  "Address": {
    "$id": "2",
    "Address1": "1234 Fake Street",
    "Address2": "",
    "City": "Faketown",
    "Country": "",
    "PostalCode": "68510",
    "State": "NE",
    "Result": null
  },
  "BankUserId": "",
  "CreateBy": null,
  "CreateOn": null,
  "DailyLimit": null,
  "Email": "Fake@fake.com",
  "FirstName": null,
  "FullName": "",
  "IsActive": null,
  "LastName": null,
  "LastPasswordChange": null,
  "ModifyBy": null,
  "ModifyOn": null,
  "TransactionLimit": null,
  "Phone": null,
  "ShardKey": "remotecapture",
  "Accounts": {
    "$id": "3",
    "$values": [
      {
        "$id": "4",
        "Id": "718de5f0-3364-493c-9b39-456050f27372",
        "Name": "Rock Free Checking",
        "AccountNumber": "4402255",
        "RoutingNumber": "073906445",
        "AccountType": "Checking",
        "AvailableBalance": 1445.55,
        "IsDefault": false,
        "AccountOwnerType": "Personal",
        "BalanceLastModified": "2017-01-11T18:47:41",
        "IsConfirmed": false
      }
    ]
  },
  "NextPaperCheckNumber": "5005",
  "CompanyName": "Jack E. Customer",
  "Version": 58,
  "VerifyLimit": null,
  "ShowPreferencesOnLogin": false,
  "Links": {
    "$id": "5",
    "$values": [
      {
        "$id": "6",
        "href": "https://api.demo.alliedpayment.com/customers/b2de5bc7-06bd-4331-8a9f-9bad83b94a20",
        "rel": "self"
      },
      {
        "$id": "7",
        "href": "https://api.demo.alliedpayment.com/customers/b2de5bc7-06bd-4331-8a9f-9bad83b94a20/templates",
        "rel": "templates"
      },
      {
        "$id": "8",
        "href": "https://api.demo.alliedpayment.com/customers/b2de5bc7-06bd-4331-8a9f-9bad83b94a20/payments",
        "rel": "payments"
      },
      {
        "$id": "9",
        "href": "https://api.demo.alliedpayment.com/customers/b2de5bc7-06bd-4331-8a9f-9bad83b94a20/pendingPayments",
        "rel": "pendingPayments"
      }
    ]
  },
  "FinancialInstitutionId": "bb641f17-1b11-4bde-a3b7-72b7ffc588ec",
  "LimitId": "00000000-0000-0000-0000-000000000000",
  "CustomerLogoId": "00000000-0000-0000-0000-000000000000",
  "TenantKey": "remotecapture",
  "PicPayStartingDate": null,
  "PicPayLatestDate": null,
  "EffectiveAddress": {
    "$ref": "2"
  },
  "WaiveFees": false,
  "NotifyWhenPayeeCreated": true,
  "CurrentTheme": null,
  "NotifyWhenPaymentOverAmount": false,
  "NotifyWhenPaymentOverAmountValue": 0.0,
  "NotifyOfPaymentsSent": true,
  "FeeScheduleId": "00000000-0000-0000-0000-000000000000"
}
```

### 3.  Upload photo and store response for later use

```
------------------------------------- REQUEST --------------------------------------------------------------------------------------

POST https://api.demo.alliedpayment.com/photos HTTP/1.1
Host: api.demo.alliedpayment.com
Authorization: TIMESTAMP username={USERNAME};domain={DOMAIN};timestamp={TIMESTAMP};signature={SIGNATURE};publickey={PUBLICKEY}
Content-Length: 96
Accept: application/json
MD5: 302aa89e56a13cc8eb8826f7cf9ab09b
Content-Type: image/png

iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==

------------------------------------- RESPONSE --------------------------------------------------------------------------------------
HTTP/1.1 200 OK
Access-Control-Allow-Headers: Content-Type, Accept, Authorization
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, PATCH
Access-Control-Allow-Origin: *
Cache-Control: private
Content-Type: application/json
Date: Tue, 14 Feb 2017 16:49:23 GMT
Location: https://api.demo.alliedpayment.com/photos/bbe980ca-98a2-4bf7-822d-31ae15ad74ab/status
Set-Cookie: SERVERID=; Expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/
X-Performance: 499.9824 ms
X-RequestId: 92dee9a4-0490-410d-b710-f5bf9015c897
X-Robots-Tag: none
Content-Length: 3200
Connection: keep-alive

{
  "$id": "1",
  "PictureId": "bbe980ca-98a2-4bf7-822d-31ae15ad74ab",
  "Status": "PENDING",
  "Message": "Ticket queued for processing, please wait...",
  "ScanStatus": null,
  "Coupon": {
    "$id": "2",
    "Address": {
      "$id": "3",
      "Address1": null,
      "Address2": null,
      "City": null,
      "Country": null,
      "PostalCode": null,
      "State": null,
      "Result": null
    },
    "AccountNumber": null,
    "PayeeName": null,
    "DueDate": null,
    "AmountDue": null
  },
  "PictureSize": 156560,
  "CreatedOn": "2017-02-14T16:49:22",
  "ProcessingFinished": null,
  "DeliveryOptions": {
    "$id": "4",
    "$values": []
  },
  "GreyScaleImageUri": "https://api.demo.alliedpayment.com//photos/bbe980ca-98a2-4bf7-822d-31ae15ad74ab.jpg?type=greyscale",
  "OriginalImageUri": "https://api.demo.alliedpayment.com//photos/bbe980ca-98a2-4bf7-822d-31ae15ad74ab.jpg?type=original",
  "UserName": "555222888",
  "Domain": "RemoteCapture",
  "ProcessedOn": null,
  "ProcessingTime": "00:00:00",
  "RawResponse": {
    "$id": "5",
    "IQAFields": {
      "$id": "6",
      "$values": []
    },
    "ExtractedFields": {
      "$id": "7",
      "$values": []
    },
    "GreyscaleImageLink": null,
    "OriginalImageLink": null,
    "PictureId": "00000000-0000-0000-0000-000000000000",
    "Processor": "Allied",
    "Message": null,
    "ScanResponse": null,
    "Data": {
      "$id": "8",
      "PayeeName": null,
      "CouponName": null,
      "PayeeAddress1": null,
      "PayeeAddress2": null,
      "PayeeCity": null,
      "PayeeState": null,
      "PayeeZip": null,
      "AccountNumber": null,
      "DueDate": null,
      "AmountDue": null,
      "PayeeRecipient": null,
      "HighestConfidencePayeeName": null
    },
    "ProcessingTime": "00:00:00",
    "Accepted": false
  },
  "AlliedResponse": {
    "$id": "9",
    "IntelligentVote": false,
    "PostnetVote": false,
    "TextVote": false,
    "IntelligentResult": {
      "$id": "10",
      "$values": []
    },
    "PostnetResult": {
      "$id": "11",
      "$values": []
    },
    "TextResult": null,
    "IntelligentProcessingTime": "00:00:00",
    "PostnetProcessingTime": "00:00:00",
    "TextProcessingTime": "00:00:00",
    "AlliedProcessingTime": "00:00:00",
    "PictureId": "00000000-0000-0000-0000-000000000000",
    "Processor": "Allied",
    "Message": null,
    "ScanResponse": null,
    "Data": {
      "$id": "12",
      "PayeeName": null,
      "CouponName": null,
      "PayeeAddress1": null,
      "PayeeAddress2": null,
      "PayeeCity": null,
      "PayeeState": null,
      "PayeeZip": null,
      "AccountNumber": null,
      "DueDate": null,
      "AmountDue": null,
      "PayeeRecipient": null,
      "HighestConfidencePayeeName": null
    },
    "ProcessingTime": "00:00:00",
    "Accepted": false
  },
  "Responses": {
    "$id": "13",
    "$values": []
  },
  "ResultedInPayment": false,
  "PaymentId": null,
  "Id": "2bb12daa-0249-4bcb-b1e1-0f426d5f077f",
  "EventSourceId": "2bb12daa-0249-4bcb-b1e1-0f426d5f077f",
  "Version": 0,
  "InitialVersion": 0
}

```

### 4. Retrieve delivery options for payment by using the photo/status 

```
------------------------------------- REQUEST --------------------------------------------------------------------------------------

GET https://api.demo.alliedpayment.com/photos/bbe980ca-98a2-4bf7-822d-31ae15ad74ab/status HTTP/1.1
Host: api.demo.alliedpayment.com
Connection: keep-alive
Cache-Control: no-cache
Pragma: no-cache
Accept: application/json
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) IPAYTestUI/0.0.3 Chrome/47.0.2526.110 Electron/0.36.12 Safari/537.36
If-Modified-Since: Mon, 26 Jul 1997 05:00:00 GMT
Authorization: TIMESTAMP username=555222888;domain=RemoteCapture;timestamp=2017-02-14T18:27:33.742Z;signature=c6djxMd9qMGlj6EEPB9Asjbzznw=;publickey=t4soRY4wDjUu34qnSNgW;
Accept-Encoding: gzip, deflate
Accept-Language: en-US

------------------------------------- RESPONSE --------------------------------------------------------------------------------------
HTTP/1.1 200 OK
Access-Control-Allow-Headers: Content-Type, Accept, Authorization
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, PATCH
Access-Control-Allow-Origin: *
Cache-Control: private
Content-Type: application/json
Date: Tue, 14 Feb 2017 18:27:49 GMT
Set-Cookie: SERVERID=; Expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/
X-Performance: 78.1219 ms
X-RequestId: 8b20f62b-1ebd-44ec-af86-bb678d32cc1d
X-Robots-Tag: none
Content-Length: 114738
Connection: keep-alive

{
  "$id": "1",
  "PictureId": "bbe980ca-98a2-4bf7-822d-31ae15ad74ab",
  "Status": "Done",
  "Message": "Document processed successfully",
  "ScanStatus": "OK",
  "Coupon": {
    "$id": "2",
    "Address": {
      "$id": "3",
      "Address1": null,
      "Address2": null,
      "City": null,
      "Country": null,
      "PostalCode": null,
      "State": null,
      "Result": null
    },
    "AccountNumber": null,
    "PayeeName": "Picture Payment",
    "DueDate": null,
    "AmountDue": null
  },
  "PictureSize": 156560,
  "CreatedOn": "2017-02-14T16:49:22",
  "ProcessingFinished": "2017-02-14T16:49:54",
  "DeliveryOptions": {
    "$id": "4",
    "$values": [
      {
        "$id": "5",
        "Fee": 19.95,
        "IsElectronic": false,
        "IsDefault": false,
        "Name": "Overnight Mail",
        "DeliveryTimeOffset": 1,
        "DaysFromScheduleForDate": 0,
        "OptionId": "0ea1519d-1cae-49a4-a2f2-3318812ae056",
        "DeliveryOption": {
          "$id": "6",
          "Id": "0ea1519d-1cae-49a4-a2f2-3318812ae056",
          "AllowedNetworks": {
            "$id": "7",
            "$values": []
          },
          "Description": "Overnight Mail",
          "ShippingMethod": "Standard",
          "Floats": {
            "$id": "8",
            "ScheduledForOffset": 0,
            "CollectionDateOffset": 0,
            "SettlementDateOffset": 0,
            "NetworkSendDateOffset": 0
          },
          "MinimiumDeliveryTime": 0,
          "MaximiumDeliveryTime": 1,
          "CutOff": null,
          "Fee": 19.95,
          "IsElectronic": false,
          "IsRealTime": false,
          "IsEnabled": true,
          "IsDefault": false,
          "CalculateMinimiumScheduleForDate": null,
          "DateCalculation": "DeliveryDate",
          "MaximiumValidFor": "1.00:00:00",
          "ValidFor": {
            "$id": "9",
            "$values": [
              "BILLER"
            ]
          },
          "Priority": 2,
          "MaxDaysReturned": null
        },
        "NetworkId": "6784c56a-d192-49d0-9035-4275909edaa4",
        "RouteId": "496749a0-158b-489e-a414-d4db5971af0b",
        "DateTimeCalculationAlgorithm": "BusinessDays",
        "Priority": 2,
        "EarliestDeliveryDate": "2017-02-15T00:00:00",
        "MinimiumScheduledForDate": "2017-02-15T00:00:00",
        "MaximiumScheduledForDate": "2017-02-16T00:00:00",
        "DeliveryDates": {
          "$id": "10",
          "$values": [
            {
              "$id": "11",
              "ScheduleForDate": "2017-02-15T00:00:00",
              "DeliveryDate": "2017-02-15T00:00:00",
              "DayZero": "2017-02-14T00:00:00",
              "CollectionDate": "2017-02-14T00:00:00",
              "Description1": "Overnight Mail",
              "Description2": "Delivered by 2/15/2017\r\nFor a fee of $19.95"
            },
            {
              "$id": "12",
              "ScheduleForDate": "2017-02-16T00:00:00",
              "DeliveryDate": "2017-02-16T00:00:00",
              "DayZero": "2017-02-15T00:00:00",
              "CollectionDate": "2017-02-15T00:00:00",
              "Description1": "Overnight Mail",
              "Description2": "Delivered by 2/16/2017\r\nFor a fee of $19.95"
            }
          ]
        },
        "NetworkBillerId": "",
        "MatchedAccountNumber": "",
        "CutOff": null,
        "RouteName": "Picture Payment",
        "Cost": 5.0,
        "Overrides": {
          "$id": "13",
          "AchPattern": null,
          "DoNotCollect": null,
          "DoNotSettle": null,
          "DoNotNetworkSend": null,
          "Hold": null
        },
        "ViableRoutes": {
          "$id": "14",
          "$values": [
            {
              "$id": "15",
              "DeliveryOption": {
                "$id": "16",
                "$type": "Allied.Domain.Entities.PaperNetworkDeliveryOption, Allied.Domain, Version=0.99.12232.10, Culture=neutral, PublicKeyToken=null",
                "Name": "Overnight Mail",
                "DeliveryDateOffset": 1,
                "Cost": 5.0,
                "DeliveryTimeAlgorithm": "PAPER",
                "RouteId": "496749a0-158b-489e-a414-d4db5971af0b",
                "DateTimeCalculationAlgorithm": "BusinessDays",
                "CutOff": null
              },
              "Cost": 5.0,
              "IsElectronic": false,
              "NetworkId": "6784c56a-d192-49d0-9035-4275909edaa4",
              "RouteId": "496749a0-158b-489e-a414-d4db5971af0b",
              "DeliveryTime": 1,
              "DateTimeCalculation": "BusinessDays",
              "NetworkBillerId": "",
              "AccountNumber": "",
              "CanReverse": false,
              "CutOff": null,
              "RouteName": "Picture Payment",
              "BillerClass": null,
              "IsSameDay": false,
              "CorrectedAddress": null,
              "MinimiumScheduleForDate": null,
              "MinimiumDeliverByDate": null,
              "Overrides": {
                "$id": "17",
                "AchPattern": null,
                "DoNotCollect": null,
                "DoNotSettle": null,
                "DoNotNetworkSend": null,
                "Hold": null
              },
              "NetworkGroupId": null
            }
          ]
        },
        "DeliveryTime": 1,
        "BillerClass": null,
        "CorrectedAddress": null,
        "DateCalculation": "DeliveryDate"
      },
      {
        "$id": "18",
        "Fee": 0.0,
        "IsElectronic": false,
        "IsDefault": true,
        "Name": "Standard US Mail",
        "DeliveryTimeOffset": 5,
        "DaysFromScheduleForDate": 0,
        "OptionId": "236886e4-a185-4db5-b794-80c911f6e8e3",
        "DeliveryOption": {
          "$id": "19",
          "Id": "236886e4-a185-4db5-b794-80c911f6e8e3",
          "AllowedNetworks": {
            "$id": "20",
            "$values": []
          },
          "Description": "Standard US Mail",
          "ShippingMethod": "Standard",
          "Floats": {
            "$id": "21",
            "ScheduledForOffset": 0,
            "CollectionDateOffset": 0,
            "SettlementDateOffset": 0,
            "NetworkSendDateOffset": 0
          },
          "MinimiumDeliveryTime": 0,
          "MaximiumDeliveryTime": null,
          "CutOff": null,
          "Fee": 0.0,
          "IsElectronic": false,
          "IsRealTime": false,
          "IsEnabled": true,
          "IsDefault": true,
          "CalculateMinimiumScheduleForDate": null,
          "DateCalculation": "DeliveryDate",
          "MaximiumValidFor": "365.00:00:00",
          "ValidFor": {
            "$id": "22",
            "$values": [
              "BILLER"
            ]
          },
          "Priority": 1,
          "MaxDaysReturned": null
        },
        "NetworkId": "6784c56a-d192-49d0-9035-4275909edaa4",
        "RouteId": "e667eea6-014d-4805-9846-e6a9153ab5c9",
        "DateTimeCalculationAlgorithm": "BusinessDays",
        "Priority": 1,
        "EarliestDeliveryDate": "2017-02-22T00:00:00",
        "MinimiumScheduledForDate": "2017-02-22T00:00:00",
        "MaximiumScheduledForDate": "2018-02-22T00:00:00",
        "DeliveryDates": {
          "$id": "23",
          "$values": [
            {
              "$id": "24",
              "ScheduleForDate": "2017-02-22T00:00:00",
              "DeliveryDate": "2017-02-22T00:00:00",
              "DayZero": "2017-02-14T00:00:00",
              "CollectionDate": "2017-02-14T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/22/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "25",
              "ScheduleForDate": "2017-02-23T00:00:00",
              "DeliveryDate": "2017-02-23T00:00:00",
              "DayZero": "2017-02-15T00:00:00",
              "CollectionDate": "2017-02-15T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/23/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "26",
              "ScheduleForDate": "2017-02-24T00:00:00",
              "DeliveryDate": "2017-02-24T00:00:00",
              "DayZero": "2017-02-16T00:00:00",
              "CollectionDate": "2017-02-16T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/24/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "27",
              "ScheduleForDate": "2017-02-27T00:00:00",
              "DeliveryDate": "2017-02-27T00:00:00",
              "DayZero": "2017-02-17T00:00:00",
              "CollectionDate": "2017-02-17T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/27/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "28",
              "ScheduleForDate": "2017-02-28T00:00:00",
              "DeliveryDate": "2017-02-28T00:00:00",
              "DayZero": "2017-02-21T00:00:00",
              "CollectionDate": "2017-02-21T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/28/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "29",
              "ScheduleForDate": "2017-03-01T00:00:00",
              "DeliveryDate": "2017-03-01T00:00:00",
              "DayZero": "2017-02-22T00:00:00",
              "CollectionDate": "2017-02-22T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/1/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "30",
              "ScheduleForDate": "2017-03-02T00:00:00",
              "DeliveryDate": "2017-03-02T00:00:00",
              "DayZero": "2017-02-23T00:00:00",
              "CollectionDate": "2017-02-23T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/2/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "31",
              "ScheduleForDate": "2017-03-03T00:00:00",
              "DeliveryDate": "2017-03-03T00:00:00",
              "DayZero": "2017-02-24T00:00:00",
              "CollectionDate": "2017-02-24T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/3/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "32",
              "ScheduleForDate": "2017-03-06T00:00:00",
              "DeliveryDate": "2017-03-06T00:00:00",
              "DayZero": "2017-02-27T00:00:00",
              "CollectionDate": "2017-02-27T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/6/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "33",
              "ScheduleForDate": "2017-03-07T00:00:00",
              "DeliveryDate": "2017-03-07T00:00:00",
              "DayZero": "2017-02-28T00:00:00",
              "CollectionDate": "2017-02-28T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/7/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "34",
              "ScheduleForDate": "2017-03-08T00:00:00",
              "DeliveryDate": "2017-03-08T00:00:00",
              "DayZero": "2017-03-01T00:00:00",
              "CollectionDate": "2017-03-01T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/8/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "35",
              "ScheduleForDate": "2017-03-09T00:00:00",
              "DeliveryDate": "2017-03-09T00:00:00",
              "DayZero": "2017-03-02T00:00:00",
              "CollectionDate": "2017-03-02T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/9/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "36",
              "ScheduleForDate": "2017-03-10T00:00:00",
              "DeliveryDate": "2017-03-10T00:00:00",
              "DayZero": "2017-03-03T00:00:00",
              "CollectionDate": "2017-03-03T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/10/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "37",
              "ScheduleForDate": "2017-03-13T00:00:00",
              "DeliveryDate": "2017-03-13T00:00:00",
              "DayZero": "2017-03-06T00:00:00",
              "CollectionDate": "2017-03-06T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/13/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "38",
              "ScheduleForDate": "2017-03-14T00:00:00",
              "DeliveryDate": "2017-03-14T00:00:00",
              "DayZero": "2017-03-07T00:00:00",
              "CollectionDate": "2017-03-07T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/14/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "39",
              "ScheduleForDate": "2017-03-15T00:00:00",
              "DeliveryDate": "2017-03-15T00:00:00",
              "DayZero": "2017-03-08T00:00:00",
              "CollectionDate": "2017-03-08T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/15/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "40",
              "ScheduleForDate": "2017-03-16T00:00:00",
              "DeliveryDate": "2017-03-16T00:00:00",
              "DayZero": "2017-03-09T00:00:00",
              "CollectionDate": "2017-03-09T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/16/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "41",
              "ScheduleForDate": "2017-03-17T00:00:00",
              "DeliveryDate": "2017-03-17T00:00:00",
              "DayZero": "2017-03-10T00:00:00",
              "CollectionDate": "2017-03-10T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/17/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "42",
              "ScheduleForDate": "2017-03-20T00:00:00",
              "DeliveryDate": "2017-03-20T00:00:00",
              "DayZero": "2017-03-13T00:00:00",
              "CollectionDate": "2017-03-13T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/20/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "43",
              "ScheduleForDate": "2017-03-21T00:00:00",
              "DeliveryDate": "2017-03-21T00:00:00",
              "DayZero": "2017-03-14T00:00:00",
              "CollectionDate": "2017-03-14T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/21/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "44",
              "ScheduleForDate": "2017-03-22T00:00:00",
              "DeliveryDate": "2017-03-22T00:00:00",
              "DayZero": "2017-03-15T00:00:00",
              "CollectionDate": "2017-03-15T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/22/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "45",
              "ScheduleForDate": "2017-03-23T00:00:00",
              "DeliveryDate": "2017-03-23T00:00:00",
              "DayZero": "2017-03-16T00:00:00",
              "CollectionDate": "2017-03-16T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/23/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "46",
              "ScheduleForDate": "2017-03-24T00:00:00",
              "DeliveryDate": "2017-03-24T00:00:00",
              "DayZero": "2017-03-17T00:00:00",
              "CollectionDate": "2017-03-17T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/24/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "47",
              "ScheduleForDate": "2017-03-27T00:00:00",
              "DeliveryDate": "2017-03-27T00:00:00",
              "DayZero": "2017-03-20T00:00:00",
              "CollectionDate": "2017-03-20T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/27/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "48",
              "ScheduleForDate": "2017-03-28T00:00:00",
              "DeliveryDate": "2017-03-28T00:00:00",
              "DayZero": "2017-03-21T00:00:00",
              "CollectionDate": "2017-03-21T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/28/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "49",
              "ScheduleForDate": "2017-03-29T00:00:00",
              "DeliveryDate": "2017-03-29T00:00:00",
              "DayZero": "2017-03-22T00:00:00",
              "CollectionDate": "2017-03-22T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/29/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "50",
              "ScheduleForDate": "2017-03-30T00:00:00",
              "DeliveryDate": "2017-03-30T00:00:00",
              "DayZero": "2017-03-23T00:00:00",
              "CollectionDate": "2017-03-23T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/30/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "51",
              "ScheduleForDate": "2017-03-31T00:00:00",
              "DeliveryDate": "2017-03-31T00:00:00",
              "DayZero": "2017-03-24T00:00:00",
              "CollectionDate": "2017-03-24T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 3/31/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "52",
              "ScheduleForDate": "2017-04-03T00:00:00",
              "DeliveryDate": "2017-04-03T00:00:00",
              "DayZero": "2017-03-27T00:00:00",
              "CollectionDate": "2017-03-27T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/3/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "53",
              "ScheduleForDate": "2017-04-04T00:00:00",
              "DeliveryDate": "2017-04-04T00:00:00",
              "DayZero": "2017-03-28T00:00:00",
              "CollectionDate": "2017-03-28T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/4/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "54",
              "ScheduleForDate": "2017-04-05T00:00:00",
              "DeliveryDate": "2017-04-05T00:00:00",
              "DayZero": "2017-03-29T00:00:00",
              "CollectionDate": "2017-03-29T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/5/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "55",
              "ScheduleForDate": "2017-04-06T00:00:00",
              "DeliveryDate": "2017-04-06T00:00:00",
              "DayZero": "2017-03-30T00:00:00",
              "CollectionDate": "2017-03-30T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/6/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "56",
              "ScheduleForDate": "2017-04-07T00:00:00",
              "DeliveryDate": "2017-04-07T00:00:00",
              "DayZero": "2017-03-31T00:00:00",
              "CollectionDate": "2017-03-31T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/7/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "57",
              "ScheduleForDate": "2017-04-10T00:00:00",
              "DeliveryDate": "2017-04-10T00:00:00",
              "DayZero": "2017-04-03T00:00:00",
              "CollectionDate": "2017-04-03T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/10/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "58",
              "ScheduleForDate": "2017-04-11T00:00:00",
              "DeliveryDate": "2017-04-11T00:00:00",
              "DayZero": "2017-04-04T00:00:00",
              "CollectionDate": "2017-04-04T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/11/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "59",
              "ScheduleForDate": "2017-04-12T00:00:00",
              "DeliveryDate": "2017-04-12T00:00:00",
              "DayZero": "2017-04-05T00:00:00",
              "CollectionDate": "2017-04-05T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/12/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "60",
              "ScheduleForDate": "2017-04-13T00:00:00",
              "DeliveryDate": "2017-04-13T00:00:00",
              "DayZero": "2017-04-06T00:00:00",
              "CollectionDate": "2017-04-06T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/13/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "61",
              "ScheduleForDate": "2017-04-14T00:00:00",
              "DeliveryDate": "2017-04-14T00:00:00",
              "DayZero": "2017-04-07T00:00:00",
              "CollectionDate": "2017-04-07T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/14/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "62",
              "ScheduleForDate": "2017-04-17T00:00:00",
              "DeliveryDate": "2017-04-17T00:00:00",
              "DayZero": "2017-04-10T00:00:00",
              "CollectionDate": "2017-04-10T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/17/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "63",
              "ScheduleForDate": "2017-04-18T00:00:00",
              "DeliveryDate": "2017-04-18T00:00:00",
              "DayZero": "2017-04-11T00:00:00",
              "CollectionDate": "2017-04-11T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/18/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "64",
              "ScheduleForDate": "2017-04-19T00:00:00",
              "DeliveryDate": "2017-04-19T00:00:00",
              "DayZero": "2017-04-12T00:00:00",
              "CollectionDate": "2017-04-12T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/19/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "65",
              "ScheduleForDate": "2017-04-20T00:00:00",
              "DeliveryDate": "2017-04-20T00:00:00",
              "DayZero": "2017-04-13T00:00:00",
              "CollectionDate": "2017-04-13T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/20/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "66",
              "ScheduleForDate": "2017-04-21T00:00:00",
              "DeliveryDate": "2017-04-21T00:00:00",
              "DayZero": "2017-04-14T00:00:00",
              "CollectionDate": "2017-04-14T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/21/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "67",
              "ScheduleForDate": "2017-04-24T00:00:00",
              "DeliveryDate": "2017-04-24T00:00:00",
              "DayZero": "2017-04-17T00:00:00",
              "CollectionDate": "2017-04-17T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/24/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "68",
              "ScheduleForDate": "2017-04-25T00:00:00",
              "DeliveryDate": "2017-04-25T00:00:00",
              "DayZero": "2017-04-18T00:00:00",
              "CollectionDate": "2017-04-18T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/25/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "69",
              "ScheduleForDate": "2017-04-26T00:00:00",
              "DeliveryDate": "2017-04-26T00:00:00",
              "DayZero": "2017-04-19T00:00:00",
              "CollectionDate": "2017-04-19T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/26/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "70",
              "ScheduleForDate": "2017-04-27T00:00:00",
              "DeliveryDate": "2017-04-27T00:00:00",
              "DayZero": "2017-04-20T00:00:00",
              "CollectionDate": "2017-04-20T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/27/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "71",
              "ScheduleForDate": "2017-04-28T00:00:00",
              "DeliveryDate": "2017-04-28T00:00:00",
              "DayZero": "2017-04-21T00:00:00",
              "CollectionDate": "2017-04-21T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 4/28/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "72",
              "ScheduleForDate": "2017-05-01T00:00:00",
              "DeliveryDate": "2017-05-01T00:00:00",
              "DayZero": "2017-04-24T00:00:00",
              "CollectionDate": "2017-04-24T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/1/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "73",
              "ScheduleForDate": "2017-05-02T00:00:00",
              "DeliveryDate": "2017-05-02T00:00:00",
              "DayZero": "2017-04-25T00:00:00",
              "CollectionDate": "2017-04-25T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/2/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "74",
              "ScheduleForDate": "2017-05-03T00:00:00",
              "DeliveryDate": "2017-05-03T00:00:00",
              "DayZero": "2017-04-26T00:00:00",
              "CollectionDate": "2017-04-26T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/3/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "75",
              "ScheduleForDate": "2017-05-04T00:00:00",
              "DeliveryDate": "2017-05-04T00:00:00",
              "DayZero": "2017-04-27T00:00:00",
              "CollectionDate": "2017-04-27T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/4/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "76",
              "ScheduleForDate": "2017-05-05T00:00:00",
              "DeliveryDate": "2017-05-05T00:00:00",
              "DayZero": "2017-04-28T00:00:00",
              "CollectionDate": "2017-04-28T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/5/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "77",
              "ScheduleForDate": "2017-05-08T00:00:00",
              "DeliveryDate": "2017-05-08T00:00:00",
              "DayZero": "2017-05-01T00:00:00",
              "CollectionDate": "2017-05-01T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/8/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "78",
              "ScheduleForDate": "2017-05-09T00:00:00",
              "DeliveryDate": "2017-05-09T00:00:00",
              "DayZero": "2017-05-02T00:00:00",
              "CollectionDate": "2017-05-02T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/9/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "79",
              "ScheduleForDate": "2017-05-10T00:00:00",
              "DeliveryDate": "2017-05-10T00:00:00",
              "DayZero": "2017-05-03T00:00:00",
              "CollectionDate": "2017-05-03T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/10/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "80",
              "ScheduleForDate": "2017-05-11T00:00:00",
              "DeliveryDate": "2017-05-11T00:00:00",
              "DayZero": "2017-05-04T00:00:00",
              "CollectionDate": "2017-05-04T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/11/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "81",
              "ScheduleForDate": "2017-05-12T00:00:00",
              "DeliveryDate": "2017-05-12T00:00:00",
              "DayZero": "2017-05-05T00:00:00",
              "CollectionDate": "2017-05-05T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/12/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "82",
              "ScheduleForDate": "2017-05-15T00:00:00",
              "DeliveryDate": "2017-05-15T00:00:00",
              "DayZero": "2017-05-08T00:00:00",
              "CollectionDate": "2017-05-08T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/15/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "83",
              "ScheduleForDate": "2017-05-16T00:00:00",
              "DeliveryDate": "2017-05-16T00:00:00",
              "DayZero": "2017-05-09T00:00:00",
              "CollectionDate": "2017-05-09T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/16/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "84",
              "ScheduleForDate": "2017-05-17T00:00:00",
              "DeliveryDate": "2017-05-17T00:00:00",
              "DayZero": "2017-05-10T00:00:00",
              "CollectionDate": "2017-05-10T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/17/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "85",
              "ScheduleForDate": "2017-05-18T00:00:00",
              "DeliveryDate": "2017-05-18T00:00:00",
              "DayZero": "2017-05-11T00:00:00",
              "CollectionDate": "2017-05-11T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/18/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "86",
              "ScheduleForDate": "2017-05-19T00:00:00",
              "DeliveryDate": "2017-05-19T00:00:00",
              "DayZero": "2017-05-12T00:00:00",
              "CollectionDate": "2017-05-12T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/19/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "87",
              "ScheduleForDate": "2017-05-22T00:00:00",
              "DeliveryDate": "2017-05-22T00:00:00",
              "DayZero": "2017-05-15T00:00:00",
              "CollectionDate": "2017-05-15T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/22/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "88",
              "ScheduleForDate": "2017-05-23T00:00:00",
              "DeliveryDate": "2017-05-23T00:00:00",
              "DayZero": "2017-05-16T00:00:00",
              "CollectionDate": "2017-05-16T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/23/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "89",
              "ScheduleForDate": "2017-05-24T00:00:00",
              "DeliveryDate": "2017-05-24T00:00:00",
              "DayZero": "2017-05-17T00:00:00",
              "CollectionDate": "2017-05-17T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/24/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "90",
              "ScheduleForDate": "2017-05-25T00:00:00",
              "DeliveryDate": "2017-05-25T00:00:00",
              "DayZero": "2017-05-18T00:00:00",
              "CollectionDate": "2017-05-18T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/25/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "91",
              "ScheduleForDate": "2017-05-26T00:00:00",
              "DeliveryDate": "2017-05-26T00:00:00",
              "DayZero": "2017-05-19T00:00:00",
              "CollectionDate": "2017-05-19T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/26/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "92",
              "ScheduleForDate": "2017-05-30T00:00:00",
              "DeliveryDate": "2017-05-30T00:00:00",
              "DayZero": "2017-05-22T00:00:00",
              "CollectionDate": "2017-05-22T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/30/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "93",
              "ScheduleForDate": "2017-05-31T00:00:00",
              "DeliveryDate": "2017-05-31T00:00:00",
              "DayZero": "2017-05-23T00:00:00",
              "CollectionDate": "2017-05-23T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 5/31/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "94",
              "ScheduleForDate": "2017-06-01T00:00:00",
              "DeliveryDate": "2017-06-01T00:00:00",
              "DayZero": "2017-05-24T00:00:00",
              "CollectionDate": "2017-05-24T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/1/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "95",
              "ScheduleForDate": "2017-06-02T00:00:00",
              "DeliveryDate": "2017-06-02T00:00:00",
              "DayZero": "2017-05-25T00:00:00",
              "CollectionDate": "2017-05-25T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/2/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "96",
              "ScheduleForDate": "2017-06-05T00:00:00",
              "DeliveryDate": "2017-06-05T00:00:00",
              "DayZero": "2017-05-26T00:00:00",
              "CollectionDate": "2017-05-26T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/5/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "97",
              "ScheduleForDate": "2017-06-06T00:00:00",
              "DeliveryDate": "2017-06-06T00:00:00",
              "DayZero": "2017-05-30T00:00:00",
              "CollectionDate": "2017-05-30T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/6/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "98",
              "ScheduleForDate": "2017-06-07T00:00:00",
              "DeliveryDate": "2017-06-07T00:00:00",
              "DayZero": "2017-05-31T00:00:00",
              "CollectionDate": "2017-05-31T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/7/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "99",
              "ScheduleForDate": "2017-06-08T00:00:00",
              "DeliveryDate": "2017-06-08T00:00:00",
              "DayZero": "2017-06-01T00:00:00",
              "CollectionDate": "2017-06-01T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/8/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "100",
              "ScheduleForDate": "2017-06-09T00:00:00",
              "DeliveryDate": "2017-06-09T00:00:00",
              "DayZero": "2017-06-02T00:00:00",
              "CollectionDate": "2017-06-02T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/9/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "101",
              "ScheduleForDate": "2017-06-12T00:00:00",
              "DeliveryDate": "2017-06-12T00:00:00",
              "DayZero": "2017-06-05T00:00:00",
              "CollectionDate": "2017-06-05T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/12/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "102",
              "ScheduleForDate": "2017-06-13T00:00:00",
              "DeliveryDate": "2017-06-13T00:00:00",
              "DayZero": "2017-06-06T00:00:00",
              "CollectionDate": "2017-06-06T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/13/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "103",
              "ScheduleForDate": "2017-06-14T00:00:00",
              "DeliveryDate": "2017-06-14T00:00:00",
              "DayZero": "2017-06-07T00:00:00",
              "CollectionDate": "2017-06-07T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/14/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "104",
              "ScheduleForDate": "2017-06-15T00:00:00",
              "DeliveryDate": "2017-06-15T00:00:00",
              "DayZero": "2017-06-08T00:00:00",
              "CollectionDate": "2017-06-08T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/15/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "105",
              "ScheduleForDate": "2017-06-16T00:00:00",
              "DeliveryDate": "2017-06-16T00:00:00",
              "DayZero": "2017-06-09T00:00:00",
              "CollectionDate": "2017-06-09T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/16/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "106",
              "ScheduleForDate": "2017-06-19T00:00:00",
              "DeliveryDate": "2017-06-19T00:00:00",
              "DayZero": "2017-06-12T00:00:00",
              "CollectionDate": "2017-06-12T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/19/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "107",
              "ScheduleForDate": "2017-06-20T00:00:00",
              "DeliveryDate": "2017-06-20T00:00:00",
              "DayZero": "2017-06-13T00:00:00",
              "CollectionDate": "2017-06-13T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/20/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "108",
              "ScheduleForDate": "2017-06-21T00:00:00",
              "DeliveryDate": "2017-06-21T00:00:00",
              "DayZero": "2017-06-14T00:00:00",
              "CollectionDate": "2017-06-14T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/21/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "109",
              "ScheduleForDate": "2017-06-22T00:00:00",
              "DeliveryDate": "2017-06-22T00:00:00",
              "DayZero": "2017-06-15T00:00:00",
              "CollectionDate": "2017-06-15T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/22/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "110",
              "ScheduleForDate": "2017-06-23T00:00:00",
              "DeliveryDate": "2017-06-23T00:00:00",
              "DayZero": "2017-06-16T00:00:00",
              "CollectionDate": "2017-06-16T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/23/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "111",
              "ScheduleForDate": "2017-06-26T00:00:00",
              "DeliveryDate": "2017-06-26T00:00:00",
              "DayZero": "2017-06-19T00:00:00",
              "CollectionDate": "2017-06-19T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/26/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "112",
              "ScheduleForDate": "2017-06-27T00:00:00",
              "DeliveryDate": "2017-06-27T00:00:00",
              "DayZero": "2017-06-20T00:00:00",
              "CollectionDate": "2017-06-20T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/27/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "113",
              "ScheduleForDate": "2017-06-28T00:00:00",
              "DeliveryDate": "2017-06-28T00:00:00",
              "DayZero": "2017-06-21T00:00:00",
              "CollectionDate": "2017-06-21T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/28/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "114",
              "ScheduleForDate": "2017-06-29T00:00:00",
              "DeliveryDate": "2017-06-29T00:00:00",
              "DayZero": "2017-06-22T00:00:00",
              "CollectionDate": "2017-06-22T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/29/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "115",
              "ScheduleForDate": "2017-06-30T00:00:00",
              "DeliveryDate": "2017-06-30T00:00:00",
              "DayZero": "2017-06-23T00:00:00",
              "CollectionDate": "2017-06-23T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 6/30/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "116",
              "ScheduleForDate": "2017-07-03T00:00:00",
              "DeliveryDate": "2017-07-03T00:00:00",
              "DayZero": "2017-06-26T00:00:00",
              "CollectionDate": "2017-06-26T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/3/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "117",
              "ScheduleForDate": "2017-07-05T00:00:00",
              "DeliveryDate": "2017-07-05T00:00:00",
              "DayZero": "2017-06-27T00:00:00",
              "CollectionDate": "2017-06-27T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/5/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "118",
              "ScheduleForDate": "2017-07-06T00:00:00",
              "DeliveryDate": "2017-07-06T00:00:00",
              "DayZero": "2017-06-28T00:00:00",
              "CollectionDate": "2017-06-28T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/6/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "119",
              "ScheduleForDate": "2017-07-07T00:00:00",
              "DeliveryDate": "2017-07-07T00:00:00",
              "DayZero": "2017-06-29T00:00:00",
              "CollectionDate": "2017-06-29T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/7/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "120",
              "ScheduleForDate": "2017-07-10T00:00:00",
              "DeliveryDate": "2017-07-10T00:00:00",
              "DayZero": "2017-06-30T00:00:00",
              "CollectionDate": "2017-06-30T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/10/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "121",
              "ScheduleForDate": "2017-07-11T00:00:00",
              "DeliveryDate": "2017-07-11T00:00:00",
              "DayZero": "2017-07-03T00:00:00",
              "CollectionDate": "2017-07-03T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/11/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "122",
              "ScheduleForDate": "2017-07-12T00:00:00",
              "DeliveryDate": "2017-07-12T00:00:00",
              "DayZero": "2017-07-05T00:00:00",
              "CollectionDate": "2017-07-05T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/12/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "123",
              "ScheduleForDate": "2017-07-13T00:00:00",
              "DeliveryDate": "2017-07-13T00:00:00",
              "DayZero": "2017-07-06T00:00:00",
              "CollectionDate": "2017-07-06T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/13/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "124",
              "ScheduleForDate": "2017-07-14T00:00:00",
              "DeliveryDate": "2017-07-14T00:00:00",
              "DayZero": "2017-07-07T00:00:00",
              "CollectionDate": "2017-07-07T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/14/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "125",
              "ScheduleForDate": "2017-07-17T00:00:00",
              "DeliveryDate": "2017-07-17T00:00:00",
              "DayZero": "2017-07-10T00:00:00",
              "CollectionDate": "2017-07-10T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/17/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "126",
              "ScheduleForDate": "2017-07-18T00:00:00",
              "DeliveryDate": "2017-07-18T00:00:00",
              "DayZero": "2017-07-11T00:00:00",
              "CollectionDate": "2017-07-11T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/18/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "127",
              "ScheduleForDate": "2017-07-19T00:00:00",
              "DeliveryDate": "2017-07-19T00:00:00",
              "DayZero": "2017-07-12T00:00:00",
              "CollectionDate": "2017-07-12T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/19/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "128",
              "ScheduleForDate": "2017-07-20T00:00:00",
              "DeliveryDate": "2017-07-20T00:00:00",
              "DayZero": "2017-07-13T00:00:00",
              "CollectionDate": "2017-07-13T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/20/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "129",
              "ScheduleForDate": "2017-07-21T00:00:00",
              "DeliveryDate": "2017-07-21T00:00:00",
              "DayZero": "2017-07-14T00:00:00",
              "CollectionDate": "2017-07-14T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/21/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "130",
              "ScheduleForDate": "2017-07-24T00:00:00",
              "DeliveryDate": "2017-07-24T00:00:00",
              "DayZero": "2017-07-17T00:00:00",
              "CollectionDate": "2017-07-17T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/24/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "131",
              "ScheduleForDate": "2017-07-25T00:00:00",
              "DeliveryDate": "2017-07-25T00:00:00",
              "DayZero": "2017-07-18T00:00:00",
              "CollectionDate": "2017-07-18T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/25/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "132",
              "ScheduleForDate": "2017-07-26T00:00:00",
              "DeliveryDate": "2017-07-26T00:00:00",
              "DayZero": "2017-07-19T00:00:00",
              "CollectionDate": "2017-07-19T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/26/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "133",
              "ScheduleForDate": "2017-07-27T00:00:00",
              "DeliveryDate": "2017-07-27T00:00:00",
              "DayZero": "2017-07-20T00:00:00",
              "CollectionDate": "2017-07-20T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/27/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "134",
              "ScheduleForDate": "2017-07-28T00:00:00",
              "DeliveryDate": "2017-07-28T00:00:00",
              "DayZero": "2017-07-21T00:00:00",
              "CollectionDate": "2017-07-21T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/28/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "135",
              "ScheduleForDate": "2017-07-31T00:00:00",
              "DeliveryDate": "2017-07-31T00:00:00",
              "DayZero": "2017-07-24T00:00:00",
              "CollectionDate": "2017-07-24T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 7/31/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "136",
              "ScheduleForDate": "2017-08-01T00:00:00",
              "DeliveryDate": "2017-08-01T00:00:00",
              "DayZero": "2017-07-25T00:00:00",
              "CollectionDate": "2017-07-25T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/1/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "137",
              "ScheduleForDate": "2017-08-02T00:00:00",
              "DeliveryDate": "2017-08-02T00:00:00",
              "DayZero": "2017-07-26T00:00:00",
              "CollectionDate": "2017-07-26T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/2/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "138",
              "ScheduleForDate": "2017-08-03T00:00:00",
              "DeliveryDate": "2017-08-03T00:00:00",
              "DayZero": "2017-07-27T00:00:00",
              "CollectionDate": "2017-07-27T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/3/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "139",
              "ScheduleForDate": "2017-08-04T00:00:00",
              "DeliveryDate": "2017-08-04T00:00:00",
              "DayZero": "2017-07-28T00:00:00",
              "CollectionDate": "2017-07-28T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/4/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "140",
              "ScheduleForDate": "2017-08-07T00:00:00",
              "DeliveryDate": "2017-08-07T00:00:00",
              "DayZero": "2017-07-31T00:00:00",
              "CollectionDate": "2017-07-31T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/7/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "141",
              "ScheduleForDate": "2017-08-08T00:00:00",
              "DeliveryDate": "2017-08-08T00:00:00",
              "DayZero": "2017-08-01T00:00:00",
              "CollectionDate": "2017-08-01T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/8/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "142",
              "ScheduleForDate": "2017-08-09T00:00:00",
              "DeliveryDate": "2017-08-09T00:00:00",
              "DayZero": "2017-08-02T00:00:00",
              "CollectionDate": "2017-08-02T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/9/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "143",
              "ScheduleForDate": "2017-08-10T00:00:00",
              "DeliveryDate": "2017-08-10T00:00:00",
              "DayZero": "2017-08-03T00:00:00",
              "CollectionDate": "2017-08-03T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/10/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "144",
              "ScheduleForDate": "2017-08-11T00:00:00",
              "DeliveryDate": "2017-08-11T00:00:00",
              "DayZero": "2017-08-04T00:00:00",
              "CollectionDate": "2017-08-04T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/11/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "145",
              "ScheduleForDate": "2017-08-14T00:00:00",
              "DeliveryDate": "2017-08-14T00:00:00",
              "DayZero": "2017-08-07T00:00:00",
              "CollectionDate": "2017-08-07T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/14/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "146",
              "ScheduleForDate": "2017-08-15T00:00:00",
              "DeliveryDate": "2017-08-15T00:00:00",
              "DayZero": "2017-08-08T00:00:00",
              "CollectionDate": "2017-08-08T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/15/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "147",
              "ScheduleForDate": "2017-08-16T00:00:00",
              "DeliveryDate": "2017-08-16T00:00:00",
              "DayZero": "2017-08-09T00:00:00",
              "CollectionDate": "2017-08-09T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/16/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "148",
              "ScheduleForDate": "2017-08-17T00:00:00",
              "DeliveryDate": "2017-08-17T00:00:00",
              "DayZero": "2017-08-10T00:00:00",
              "CollectionDate": "2017-08-10T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/17/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "149",
              "ScheduleForDate": "2017-08-18T00:00:00",
              "DeliveryDate": "2017-08-18T00:00:00",
              "DayZero": "2017-08-11T00:00:00",
              "CollectionDate": "2017-08-11T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/18/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "150",
              "ScheduleForDate": "2017-08-21T00:00:00",
              "DeliveryDate": "2017-08-21T00:00:00",
              "DayZero": "2017-08-14T00:00:00",
              "CollectionDate": "2017-08-14T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/21/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "151",
              "ScheduleForDate": "2017-08-22T00:00:00",
              "DeliveryDate": "2017-08-22T00:00:00",
              "DayZero": "2017-08-15T00:00:00",
              "CollectionDate": "2017-08-15T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/22/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "152",
              "ScheduleForDate": "2017-08-23T00:00:00",
              "DeliveryDate": "2017-08-23T00:00:00",
              "DayZero": "2017-08-16T00:00:00",
              "CollectionDate": "2017-08-16T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/23/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "153",
              "ScheduleForDate": "2017-08-24T00:00:00",
              "DeliveryDate": "2017-08-24T00:00:00",
              "DayZero": "2017-08-17T00:00:00",
              "CollectionDate": "2017-08-17T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/24/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "154",
              "ScheduleForDate": "2017-08-25T00:00:00",
              "DeliveryDate": "2017-08-25T00:00:00",
              "DayZero": "2017-08-18T00:00:00",
              "CollectionDate": "2017-08-18T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/25/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "155",
              "ScheduleForDate": "2017-08-28T00:00:00",
              "DeliveryDate": "2017-08-28T00:00:00",
              "DayZero": "2017-08-21T00:00:00",
              "CollectionDate": "2017-08-21T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/28/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "156",
              "ScheduleForDate": "2017-08-29T00:00:00",
              "DeliveryDate": "2017-08-29T00:00:00",
              "DayZero": "2017-08-22T00:00:00",
              "CollectionDate": "2017-08-22T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/29/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "157",
              "ScheduleForDate": "2017-08-30T00:00:00",
              "DeliveryDate": "2017-08-30T00:00:00",
              "DayZero": "2017-08-23T00:00:00",
              "CollectionDate": "2017-08-23T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/30/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "158",
              "ScheduleForDate": "2017-08-31T00:00:00",
              "DeliveryDate": "2017-08-31T00:00:00",
              "DayZero": "2017-08-24T00:00:00",
              "CollectionDate": "2017-08-24T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 8/31/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "159",
              "ScheduleForDate": "2017-09-01T00:00:00",
              "DeliveryDate": "2017-09-01T00:00:00",
              "DayZero": "2017-08-25T00:00:00",
              "CollectionDate": "2017-08-25T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/1/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "160",
              "ScheduleForDate": "2017-09-05T00:00:00",
              "DeliveryDate": "2017-09-05T00:00:00",
              "DayZero": "2017-08-28T00:00:00",
              "CollectionDate": "2017-08-28T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/5/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "161",
              "ScheduleForDate": "2017-09-06T00:00:00",
              "DeliveryDate": "2017-09-06T00:00:00",
              "DayZero": "2017-08-29T00:00:00",
              "CollectionDate": "2017-08-29T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/6/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "162",
              "ScheduleForDate": "2017-09-07T00:00:00",
              "DeliveryDate": "2017-09-07T00:00:00",
              "DayZero": "2017-08-30T00:00:00",
              "CollectionDate": "2017-08-30T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/7/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "163",
              "ScheduleForDate": "2017-09-08T00:00:00",
              "DeliveryDate": "2017-09-08T00:00:00",
              "DayZero": "2017-08-31T00:00:00",
              "CollectionDate": "2017-08-31T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/8/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "164",
              "ScheduleForDate": "2017-09-11T00:00:00",
              "DeliveryDate": "2017-09-11T00:00:00",
              "DayZero": "2017-09-01T00:00:00",
              "CollectionDate": "2017-09-01T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/11/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "165",
              "ScheduleForDate": "2017-09-12T00:00:00",
              "DeliveryDate": "2017-09-12T00:00:00",
              "DayZero": "2017-09-05T00:00:00",
              "CollectionDate": "2017-09-05T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/12/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "166",
              "ScheduleForDate": "2017-09-13T00:00:00",
              "DeliveryDate": "2017-09-13T00:00:00",
              "DayZero": "2017-09-06T00:00:00",
              "CollectionDate": "2017-09-06T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/13/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "167",
              "ScheduleForDate": "2017-09-14T00:00:00",
              "DeliveryDate": "2017-09-14T00:00:00",
              "DayZero": "2017-09-07T00:00:00",
              "CollectionDate": "2017-09-07T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/14/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "168",
              "ScheduleForDate": "2017-09-15T00:00:00",
              "DeliveryDate": "2017-09-15T00:00:00",
              "DayZero": "2017-09-08T00:00:00",
              "CollectionDate": "2017-09-08T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/15/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "169",
              "ScheduleForDate": "2017-09-18T00:00:00",
              "DeliveryDate": "2017-09-18T00:00:00",
              "DayZero": "2017-09-11T00:00:00",
              "CollectionDate": "2017-09-11T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/18/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "170",
              "ScheduleForDate": "2017-09-19T00:00:00",
              "DeliveryDate": "2017-09-19T00:00:00",
              "DayZero": "2017-09-12T00:00:00",
              "CollectionDate": "2017-09-12T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/19/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "171",
              "ScheduleForDate": "2017-09-20T00:00:00",
              "DeliveryDate": "2017-09-20T00:00:00",
              "DayZero": "2017-09-13T00:00:00",
              "CollectionDate": "2017-09-13T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/20/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "172",
              "ScheduleForDate": "2017-09-21T00:00:00",
              "DeliveryDate": "2017-09-21T00:00:00",
              "DayZero": "2017-09-14T00:00:00",
              "CollectionDate": "2017-09-14T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/21/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "173",
              "ScheduleForDate": "2017-09-22T00:00:00",
              "DeliveryDate": "2017-09-22T00:00:00",
              "DayZero": "2017-09-15T00:00:00",
              "CollectionDate": "2017-09-15T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/22/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "174",
              "ScheduleForDate": "2017-09-25T00:00:00",
              "DeliveryDate": "2017-09-25T00:00:00",
              "DayZero": "2017-09-18T00:00:00",
              "CollectionDate": "2017-09-18T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/25/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "175",
              "ScheduleForDate": "2017-09-26T00:00:00",
              "DeliveryDate": "2017-09-26T00:00:00",
              "DayZero": "2017-09-19T00:00:00",
              "CollectionDate": "2017-09-19T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/26/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "176",
              "ScheduleForDate": "2017-09-27T00:00:00",
              "DeliveryDate": "2017-09-27T00:00:00",
              "DayZero": "2017-09-20T00:00:00",
              "CollectionDate": "2017-09-20T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/27/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "177",
              "ScheduleForDate": "2017-09-28T00:00:00",
              "DeliveryDate": "2017-09-28T00:00:00",
              "DayZero": "2017-09-21T00:00:00",
              "CollectionDate": "2017-09-21T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/28/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "178",
              "ScheduleForDate": "2017-09-29T00:00:00",
              "DeliveryDate": "2017-09-29T00:00:00",
              "DayZero": "2017-09-22T00:00:00",
              "CollectionDate": "2017-09-22T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 9/29/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "179",
              "ScheduleForDate": "2017-10-02T00:00:00",
              "DeliveryDate": "2017-10-02T00:00:00",
              "DayZero": "2017-09-25T00:00:00",
              "CollectionDate": "2017-09-25T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/2/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "180",
              "ScheduleForDate": "2017-10-03T00:00:00",
              "DeliveryDate": "2017-10-03T00:00:00",
              "DayZero": "2017-09-26T00:00:00",
              "CollectionDate": "2017-09-26T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/3/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "181",
              "ScheduleForDate": "2017-10-04T00:00:00",
              "DeliveryDate": "2017-10-04T00:00:00",
              "DayZero": "2017-09-27T00:00:00",
              "CollectionDate": "2017-09-27T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/4/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "182",
              "ScheduleForDate": "2017-10-05T00:00:00",
              "DeliveryDate": "2017-10-05T00:00:00",
              "DayZero": "2017-09-28T00:00:00",
              "CollectionDate": "2017-09-28T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/5/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "183",
              "ScheduleForDate": "2017-10-06T00:00:00",
              "DeliveryDate": "2017-10-06T00:00:00",
              "DayZero": "2017-09-29T00:00:00",
              "CollectionDate": "2017-09-29T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/6/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "184",
              "ScheduleForDate": "2017-10-10T00:00:00",
              "DeliveryDate": "2017-10-10T00:00:00",
              "DayZero": "2017-10-02T00:00:00",
              "CollectionDate": "2017-10-02T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/10/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "185",
              "ScheduleForDate": "2017-10-11T00:00:00",
              "DeliveryDate": "2017-10-11T00:00:00",
              "DayZero": "2017-10-03T00:00:00",
              "CollectionDate": "2017-10-03T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/11/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "186",
              "ScheduleForDate": "2017-10-12T00:00:00",
              "DeliveryDate": "2017-10-12T00:00:00",
              "DayZero": "2017-10-04T00:00:00",
              "CollectionDate": "2017-10-04T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/12/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "187",
              "ScheduleForDate": "2017-10-13T00:00:00",
              "DeliveryDate": "2017-10-13T00:00:00",
              "DayZero": "2017-10-05T00:00:00",
              "CollectionDate": "2017-10-05T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/13/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "188",
              "ScheduleForDate": "2017-10-16T00:00:00",
              "DeliveryDate": "2017-10-16T00:00:00",
              "DayZero": "2017-10-06T00:00:00",
              "CollectionDate": "2017-10-06T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/16/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "189",
              "ScheduleForDate": "2017-10-17T00:00:00",
              "DeliveryDate": "2017-10-17T00:00:00",
              "DayZero": "2017-10-10T00:00:00",
              "CollectionDate": "2017-10-10T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/17/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "190",
              "ScheduleForDate": "2017-10-18T00:00:00",
              "DeliveryDate": "2017-10-18T00:00:00",
              "DayZero": "2017-10-11T00:00:00",
              "CollectionDate": "2017-10-11T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/18/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "191",
              "ScheduleForDate": "2017-10-19T00:00:00",
              "DeliveryDate": "2017-10-19T00:00:00",
              "DayZero": "2017-10-12T00:00:00",
              "CollectionDate": "2017-10-12T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/19/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "192",
              "ScheduleForDate": "2017-10-20T00:00:00",
              "DeliveryDate": "2017-10-20T00:00:00",
              "DayZero": "2017-10-13T00:00:00",
              "CollectionDate": "2017-10-13T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/20/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "193",
              "ScheduleForDate": "2017-10-23T00:00:00",
              "DeliveryDate": "2017-10-23T00:00:00",
              "DayZero": "2017-10-16T00:00:00",
              "CollectionDate": "2017-10-16T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/23/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "194",
              "ScheduleForDate": "2017-10-24T00:00:00",
              "DeliveryDate": "2017-10-24T00:00:00",
              "DayZero": "2017-10-17T00:00:00",
              "CollectionDate": "2017-10-17T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/24/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "195",
              "ScheduleForDate": "2017-10-25T00:00:00",
              "DeliveryDate": "2017-10-25T00:00:00",
              "DayZero": "2017-10-18T00:00:00",
              "CollectionDate": "2017-10-18T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/25/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "196",
              "ScheduleForDate": "2017-10-26T00:00:00",
              "DeliveryDate": "2017-10-26T00:00:00",
              "DayZero": "2017-10-19T00:00:00",
              "CollectionDate": "2017-10-19T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/26/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "197",
              "ScheduleForDate": "2017-10-27T00:00:00",
              "DeliveryDate": "2017-10-27T00:00:00",
              "DayZero": "2017-10-20T00:00:00",
              "CollectionDate": "2017-10-20T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/27/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "198",
              "ScheduleForDate": "2017-10-30T00:00:00",
              "DeliveryDate": "2017-10-30T00:00:00",
              "DayZero": "2017-10-23T00:00:00",
              "CollectionDate": "2017-10-23T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/30/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "199",
              "ScheduleForDate": "2017-10-31T00:00:00",
              "DeliveryDate": "2017-10-31T00:00:00",
              "DayZero": "2017-10-24T00:00:00",
              "CollectionDate": "2017-10-24T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 10/31/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "200",
              "ScheduleForDate": "2017-11-01T00:00:00",
              "DeliveryDate": "2017-11-01T00:00:00",
              "DayZero": "2017-10-25T00:00:00",
              "CollectionDate": "2017-10-25T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/1/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "201",
              "ScheduleForDate": "2017-11-02T00:00:00",
              "DeliveryDate": "2017-11-02T00:00:00",
              "DayZero": "2017-10-26T00:00:00",
              "CollectionDate": "2017-10-26T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/2/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "202",
              "ScheduleForDate": "2017-11-03T00:00:00",
              "DeliveryDate": "2017-11-03T00:00:00",
              "DayZero": "2017-10-27T00:00:00",
              "CollectionDate": "2017-10-27T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/3/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "203",
              "ScheduleForDate": "2017-11-06T00:00:00",
              "DeliveryDate": "2017-11-06T00:00:00",
              "DayZero": "2017-10-30T00:00:00",
              "CollectionDate": "2017-10-30T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/6/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "204",
              "ScheduleForDate": "2017-11-07T00:00:00",
              "DeliveryDate": "2017-11-07T00:00:00",
              "DayZero": "2017-10-31T00:00:00",
              "CollectionDate": "2017-10-31T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/7/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "205",
              "ScheduleForDate": "2017-11-08T00:00:00",
              "DeliveryDate": "2017-11-08T00:00:00",
              "DayZero": "2017-11-01T00:00:00",
              "CollectionDate": "2017-11-01T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/8/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "206",
              "ScheduleForDate": "2017-11-09T00:00:00",
              "DeliveryDate": "2017-11-09T00:00:00",
              "DayZero": "2017-11-02T00:00:00",
              "CollectionDate": "2017-11-02T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/9/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "207",
              "ScheduleForDate": "2017-11-10T00:00:00",
              "DeliveryDate": "2017-11-10T00:00:00",
              "DayZero": "2017-11-03T00:00:00",
              "CollectionDate": "2017-11-03T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/10/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "208",
              "ScheduleForDate": "2017-11-13T00:00:00",
              "DeliveryDate": "2017-11-13T00:00:00",
              "DayZero": "2017-11-06T00:00:00",
              "CollectionDate": "2017-11-06T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/13/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "209",
              "ScheduleForDate": "2017-11-14T00:00:00",
              "DeliveryDate": "2017-11-14T00:00:00",
              "DayZero": "2017-11-07T00:00:00",
              "CollectionDate": "2017-11-07T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/14/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "210",
              "ScheduleForDate": "2017-11-15T00:00:00",
              "DeliveryDate": "2017-11-15T00:00:00",
              "DayZero": "2017-11-08T00:00:00",
              "CollectionDate": "2017-11-08T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/15/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "211",
              "ScheduleForDate": "2017-11-16T00:00:00",
              "DeliveryDate": "2017-11-16T00:00:00",
              "DayZero": "2017-11-09T00:00:00",
              "CollectionDate": "2017-11-09T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/16/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "212",
              "ScheduleForDate": "2017-11-17T00:00:00",
              "DeliveryDate": "2017-11-17T00:00:00",
              "DayZero": "2017-11-10T00:00:00",
              "CollectionDate": "2017-11-10T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/17/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "213",
              "ScheduleForDate": "2017-11-20T00:00:00",
              "DeliveryDate": "2017-11-20T00:00:00",
              "DayZero": "2017-11-13T00:00:00",
              "CollectionDate": "2017-11-13T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/20/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "214",
              "ScheduleForDate": "2017-11-21T00:00:00",
              "DeliveryDate": "2017-11-21T00:00:00",
              "DayZero": "2017-11-14T00:00:00",
              "CollectionDate": "2017-11-14T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/21/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "215",
              "ScheduleForDate": "2017-11-22T00:00:00",
              "DeliveryDate": "2017-11-22T00:00:00",
              "DayZero": "2017-11-15T00:00:00",
              "CollectionDate": "2017-11-15T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/22/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "216",
              "ScheduleForDate": "2017-11-24T00:00:00",
              "DeliveryDate": "2017-11-24T00:00:00",
              "DayZero": "2017-11-16T00:00:00",
              "CollectionDate": "2017-11-16T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/24/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "217",
              "ScheduleForDate": "2017-11-27T00:00:00",
              "DeliveryDate": "2017-11-27T00:00:00",
              "DayZero": "2017-11-17T00:00:00",
              "CollectionDate": "2017-11-17T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/27/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "218",
              "ScheduleForDate": "2017-11-28T00:00:00",
              "DeliveryDate": "2017-11-28T00:00:00",
              "DayZero": "2017-11-20T00:00:00",
              "CollectionDate": "2017-11-20T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/28/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "219",
              "ScheduleForDate": "2017-11-29T00:00:00",
              "DeliveryDate": "2017-11-29T00:00:00",
              "DayZero": "2017-11-21T00:00:00",
              "CollectionDate": "2017-11-21T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/29/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "220",
              "ScheduleForDate": "2017-11-30T00:00:00",
              "DeliveryDate": "2017-11-30T00:00:00",
              "DayZero": "2017-11-22T00:00:00",
              "CollectionDate": "2017-11-22T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 11/30/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "221",
              "ScheduleForDate": "2017-12-01T00:00:00",
              "DeliveryDate": "2017-12-01T00:00:00",
              "DayZero": "2017-11-24T00:00:00",
              "CollectionDate": "2017-11-24T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/1/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "222",
              "ScheduleForDate": "2017-12-04T00:00:00",
              "DeliveryDate": "2017-12-04T00:00:00",
              "DayZero": "2017-11-27T00:00:00",
              "CollectionDate": "2017-11-27T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/4/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "223",
              "ScheduleForDate": "2017-12-05T00:00:00",
              "DeliveryDate": "2017-12-05T00:00:00",
              "DayZero": "2017-11-28T00:00:00",
              "CollectionDate": "2017-11-28T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/5/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "224",
              "ScheduleForDate": "2017-12-06T00:00:00",
              "DeliveryDate": "2017-12-06T00:00:00",
              "DayZero": "2017-11-29T00:00:00",
              "CollectionDate": "2017-11-29T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/6/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "225",
              "ScheduleForDate": "2017-12-07T00:00:00",
              "DeliveryDate": "2017-12-07T00:00:00",
              "DayZero": "2017-11-30T00:00:00",
              "CollectionDate": "2017-11-30T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/7/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "226",
              "ScheduleForDate": "2017-12-08T00:00:00",
              "DeliveryDate": "2017-12-08T00:00:00",
              "DayZero": "2017-12-01T00:00:00",
              "CollectionDate": "2017-12-01T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/8/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "227",
              "ScheduleForDate": "2017-12-11T00:00:00",
              "DeliveryDate": "2017-12-11T00:00:00",
              "DayZero": "2017-12-04T00:00:00",
              "CollectionDate": "2017-12-04T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/11/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "228",
              "ScheduleForDate": "2017-12-12T00:00:00",
              "DeliveryDate": "2017-12-12T00:00:00",
              "DayZero": "2017-12-05T00:00:00",
              "CollectionDate": "2017-12-05T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/12/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "229",
              "ScheduleForDate": "2017-12-13T00:00:00",
              "DeliveryDate": "2017-12-13T00:00:00",
              "DayZero": "2017-12-06T00:00:00",
              "CollectionDate": "2017-12-06T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/13/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "230",
              "ScheduleForDate": "2017-12-14T00:00:00",
              "DeliveryDate": "2017-12-14T00:00:00",
              "DayZero": "2017-12-07T00:00:00",
              "CollectionDate": "2017-12-07T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/14/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "231",
              "ScheduleForDate": "2017-12-15T00:00:00",
              "DeliveryDate": "2017-12-15T00:00:00",
              "DayZero": "2017-12-08T00:00:00",
              "CollectionDate": "2017-12-08T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/15/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "232",
              "ScheduleForDate": "2017-12-18T00:00:00",
              "DeliveryDate": "2017-12-18T00:00:00",
              "DayZero": "2017-12-11T00:00:00",
              "CollectionDate": "2017-12-11T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/18/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "233",
              "ScheduleForDate": "2017-12-19T00:00:00",
              "DeliveryDate": "2017-12-19T00:00:00",
              "DayZero": "2017-12-12T00:00:00",
              "CollectionDate": "2017-12-12T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/19/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "234",
              "ScheduleForDate": "2017-12-20T00:00:00",
              "DeliveryDate": "2017-12-20T00:00:00",
              "DayZero": "2017-12-13T00:00:00",
              "CollectionDate": "2017-12-13T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/20/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "235",
              "ScheduleForDate": "2017-12-21T00:00:00",
              "DeliveryDate": "2017-12-21T00:00:00",
              "DayZero": "2017-12-14T00:00:00",
              "CollectionDate": "2017-12-14T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/21/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "236",
              "ScheduleForDate": "2017-12-22T00:00:00",
              "DeliveryDate": "2017-12-22T00:00:00",
              "DayZero": "2017-12-15T00:00:00",
              "CollectionDate": "2017-12-15T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/22/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "237",
              "ScheduleForDate": "2017-12-26T00:00:00",
              "DeliveryDate": "2017-12-26T00:00:00",
              "DayZero": "2017-12-18T00:00:00",
              "CollectionDate": "2017-12-18T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/26/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "238",
              "ScheduleForDate": "2017-12-27T00:00:00",
              "DeliveryDate": "2017-12-27T00:00:00",
              "DayZero": "2017-12-19T00:00:00",
              "CollectionDate": "2017-12-19T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/27/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "239",
              "ScheduleForDate": "2017-12-28T00:00:00",
              "DeliveryDate": "2017-12-28T00:00:00",
              "DayZero": "2017-12-20T00:00:00",
              "CollectionDate": "2017-12-20T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/28/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "240",
              "ScheduleForDate": "2017-12-29T00:00:00",
              "DeliveryDate": "2017-12-29T00:00:00",
              "DayZero": "2017-12-21T00:00:00",
              "CollectionDate": "2017-12-21T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 12/29/2017\r\nFor a fee of $0.00"
            },
            {
              "$id": "241",
              "ScheduleForDate": "2018-01-02T00:00:00",
              "DeliveryDate": "2018-01-02T00:00:00",
              "DayZero": "2017-12-22T00:00:00",
              "CollectionDate": "2017-12-22T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/2/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "242",
              "ScheduleForDate": "2018-01-03T00:00:00",
              "DeliveryDate": "2018-01-03T00:00:00",
              "DayZero": "2017-12-26T00:00:00",
              "CollectionDate": "2017-12-26T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/3/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "243",
              "ScheduleForDate": "2018-01-04T00:00:00",
              "DeliveryDate": "2018-01-04T00:00:00",
              "DayZero": "2017-12-27T00:00:00",
              "CollectionDate": "2017-12-27T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/4/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "244",
              "ScheduleForDate": "2018-01-05T00:00:00",
              "DeliveryDate": "2018-01-05T00:00:00",
              "DayZero": "2017-12-28T00:00:00",
              "CollectionDate": "2017-12-28T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/5/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "245",
              "ScheduleForDate": "2018-01-08T00:00:00",
              "DeliveryDate": "2018-01-08T00:00:00",
              "DayZero": "2017-12-29T00:00:00",
              "CollectionDate": "2017-12-29T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/8/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "246",
              "ScheduleForDate": "2018-01-09T00:00:00",
              "DeliveryDate": "2018-01-09T00:00:00",
              "DayZero": "2018-01-02T00:00:00",
              "CollectionDate": "2018-01-02T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/9/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "247",
              "ScheduleForDate": "2018-01-10T00:00:00",
              "DeliveryDate": "2018-01-10T00:00:00",
              "DayZero": "2018-01-03T00:00:00",
              "CollectionDate": "2018-01-03T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/10/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "248",
              "ScheduleForDate": "2018-01-11T00:00:00",
              "DeliveryDate": "2018-01-11T00:00:00",
              "DayZero": "2018-01-04T00:00:00",
              "CollectionDate": "2018-01-04T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/11/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "249",
              "ScheduleForDate": "2018-01-12T00:00:00",
              "DeliveryDate": "2018-01-12T00:00:00",
              "DayZero": "2018-01-05T00:00:00",
              "CollectionDate": "2018-01-05T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/12/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "250",
              "ScheduleForDate": "2018-01-16T00:00:00",
              "DeliveryDate": "2018-01-16T00:00:00",
              "DayZero": "2018-01-08T00:00:00",
              "CollectionDate": "2018-01-08T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/16/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "251",
              "ScheduleForDate": "2018-01-17T00:00:00",
              "DeliveryDate": "2018-01-17T00:00:00",
              "DayZero": "2018-01-09T00:00:00",
              "CollectionDate": "2018-01-09T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/17/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "252",
              "ScheduleForDate": "2018-01-18T00:00:00",
              "DeliveryDate": "2018-01-18T00:00:00",
              "DayZero": "2018-01-10T00:00:00",
              "CollectionDate": "2018-01-10T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/18/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "253",
              "ScheduleForDate": "2018-01-19T00:00:00",
              "DeliveryDate": "2018-01-19T00:00:00",
              "DayZero": "2018-01-11T00:00:00",
              "CollectionDate": "2018-01-11T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/19/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "254",
              "ScheduleForDate": "2018-01-22T00:00:00",
              "DeliveryDate": "2018-01-22T00:00:00",
              "DayZero": "2018-01-12T00:00:00",
              "CollectionDate": "2018-01-12T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/22/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "255",
              "ScheduleForDate": "2018-01-23T00:00:00",
              "DeliveryDate": "2018-01-23T00:00:00",
              "DayZero": "2018-01-16T00:00:00",
              "CollectionDate": "2018-01-16T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/23/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "256",
              "ScheduleForDate": "2018-01-24T00:00:00",
              "DeliveryDate": "2018-01-24T00:00:00",
              "DayZero": "2018-01-17T00:00:00",
              "CollectionDate": "2018-01-17T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/24/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "257",
              "ScheduleForDate": "2018-01-25T00:00:00",
              "DeliveryDate": "2018-01-25T00:00:00",
              "DayZero": "2018-01-18T00:00:00",
              "CollectionDate": "2018-01-18T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/25/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "258",
              "ScheduleForDate": "2018-01-26T00:00:00",
              "DeliveryDate": "2018-01-26T00:00:00",
              "DayZero": "2018-01-19T00:00:00",
              "CollectionDate": "2018-01-19T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/26/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "259",
              "ScheduleForDate": "2018-01-29T00:00:00",
              "DeliveryDate": "2018-01-29T00:00:00",
              "DayZero": "2018-01-22T00:00:00",
              "CollectionDate": "2018-01-22T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/29/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "260",
              "ScheduleForDate": "2018-01-30T00:00:00",
              "DeliveryDate": "2018-01-30T00:00:00",
              "DayZero": "2018-01-23T00:00:00",
              "CollectionDate": "2018-01-23T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/30/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "261",
              "ScheduleForDate": "2018-01-31T00:00:00",
              "DeliveryDate": "2018-01-31T00:00:00",
              "DayZero": "2018-01-24T00:00:00",
              "CollectionDate": "2018-01-24T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 1/31/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "262",
              "ScheduleForDate": "2018-02-01T00:00:00",
              "DeliveryDate": "2018-02-01T00:00:00",
              "DayZero": "2018-01-25T00:00:00",
              "CollectionDate": "2018-01-25T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/1/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "263",
              "ScheduleForDate": "2018-02-02T00:00:00",
              "DeliveryDate": "2018-02-02T00:00:00",
              "DayZero": "2018-01-26T00:00:00",
              "CollectionDate": "2018-01-26T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/2/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "264",
              "ScheduleForDate": "2018-02-05T00:00:00",
              "DeliveryDate": "2018-02-05T00:00:00",
              "DayZero": "2018-01-29T00:00:00",
              "CollectionDate": "2018-01-29T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/5/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "265",
              "ScheduleForDate": "2018-02-06T00:00:00",
              "DeliveryDate": "2018-02-06T00:00:00",
              "DayZero": "2018-01-30T00:00:00",
              "CollectionDate": "2018-01-30T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/6/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "266",
              "ScheduleForDate": "2018-02-07T00:00:00",
              "DeliveryDate": "2018-02-07T00:00:00",
              "DayZero": "2018-01-31T00:00:00",
              "CollectionDate": "2018-01-31T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/7/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "267",
              "ScheduleForDate": "2018-02-08T00:00:00",
              "DeliveryDate": "2018-02-08T00:00:00",
              "DayZero": "2018-02-01T00:00:00",
              "CollectionDate": "2018-02-01T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/8/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "268",
              "ScheduleForDate": "2018-02-09T00:00:00",
              "DeliveryDate": "2018-02-09T00:00:00",
              "DayZero": "2018-02-02T00:00:00",
              "CollectionDate": "2018-02-02T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/9/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "269",
              "ScheduleForDate": "2018-02-12T00:00:00",
              "DeliveryDate": "2018-02-12T00:00:00",
              "DayZero": "2018-02-05T00:00:00",
              "CollectionDate": "2018-02-05T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/12/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "270",
              "ScheduleForDate": "2018-02-13T00:00:00",
              "DeliveryDate": "2018-02-13T00:00:00",
              "DayZero": "2018-02-06T00:00:00",
              "CollectionDate": "2018-02-06T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/13/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "271",
              "ScheduleForDate": "2018-02-14T00:00:00",
              "DeliveryDate": "2018-02-14T00:00:00",
              "DayZero": "2018-02-07T00:00:00",
              "CollectionDate": "2018-02-07T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/14/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "272",
              "ScheduleForDate": "2018-02-15T00:00:00",
              "DeliveryDate": "2018-02-15T00:00:00",
              "DayZero": "2018-02-08T00:00:00",
              "CollectionDate": "2018-02-08T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/15/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "273",
              "ScheduleForDate": "2018-02-16T00:00:00",
              "DeliveryDate": "2018-02-16T00:00:00",
              "DayZero": "2018-02-09T00:00:00",
              "CollectionDate": "2018-02-09T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/16/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "274",
              "ScheduleForDate": "2018-02-20T00:00:00",
              "DeliveryDate": "2018-02-20T00:00:00",
              "DayZero": "2018-02-12T00:00:00",
              "CollectionDate": "2018-02-12T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/20/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "275",
              "ScheduleForDate": "2018-02-21T00:00:00",
              "DeliveryDate": "2018-02-21T00:00:00",
              "DayZero": "2018-02-13T00:00:00",
              "CollectionDate": "2018-02-13T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/21/2018\r\nFor a fee of $0.00"
            },
            {
              "$id": "276",
              "ScheduleForDate": "2018-02-22T00:00:00",
              "DeliveryDate": "2018-02-22T00:00:00",
              "DayZero": "2018-02-14T00:00:00",
              "CollectionDate": "2018-02-14T00:00:00",
              "Description1": "Standard US Mail",
              "Description2": "Delivered by 2/22/2018\r\nFor a fee of $0.00"
            }
          ]
        },
        "NetworkBillerId": "",
        "MatchedAccountNumber": "",
        "CutOff": null,
        "RouteName": "Picture Payment",
        "Cost": 0.0,
        "Overrides": {
          "$id": "277",
          "AchPattern": null,
          "DoNotCollect": null,
          "DoNotSettle": null,
          "DoNotNetworkSend": null,
          "Hold": null
        },
        "ViableRoutes": {
          "$id": "278",
          "$values": [
            {
              "$id": "279",
              "DeliveryOption": {
                "$id": "280",
                "$type": "Allied.Domain.Entities.PaperNetworkDeliveryOption, Allied.Domain, Version=0.99.12232.10, Culture=neutral, PublicKeyToken=null",
                "Name": "Standard US Mail",
                "DeliveryDateOffset": 5,
                "Cost": 0.0,
                "DeliveryTimeAlgorithm": "PAPER",
                "RouteId": "e667eea6-014d-4805-9846-e6a9153ab5c9",
                "DateTimeCalculationAlgorithm": "BusinessDays",
                "CutOff": null
              },
              "Cost": 0.0,
              "IsElectronic": false,
              "NetworkId": "6784c56a-d192-49d0-9035-4275909edaa4",
              "RouteId": "e667eea6-014d-4805-9846-e6a9153ab5c9",
              "DeliveryTime": 5,
              "DateTimeCalculation": "BusinessDays",
              "NetworkBillerId": "",
              "AccountNumber": "",
              "CanReverse": false,
              "CutOff": null,
              "RouteName": "Picture Payment",
              "BillerClass": null,
              "IsSameDay": false,
              "CorrectedAddress": null,
              "MinimiumScheduleForDate": null,
              "MinimiumDeliverByDate": null,
              "Overrides": {
                "$id": "281",
                "AchPattern": null,
                "DoNotCollect": null,
                "DoNotSettle": null,
                "DoNotNetworkSend": null,
                "Hold": null
              },
              "NetworkGroupId": null
            },
            {
              "$ref": "15"
            }
          ]
        },
        "DeliveryTime": 5,
        "BillerClass": null,
        "CorrectedAddress": null,
        "DateCalculation": "DeliveryDate"
      }
    ]
  },
  "GreyScaleImageUri": "https://api.demo.alliedpayment.com//photos/bbe980ca-98a2-4bf7-822d-31ae15ad74ab.jpg?type=greyscale",
  "OriginalImageUri": "https://api.demo.alliedpayment.com//photos/bbe980ca-98a2-4bf7-822d-31ae15ad74ab.jpg?type=original",
  "UserName": "555222888",
  "Domain": "RemoteCapture",
  "ProcessedOn": null,
  "ProcessingTime": "00:00:00",
  "RawResponse": {
    "$id": "282",
    "IQAFields": {
      "$id": "283",
      "$values": []
    },
    "ExtractedFields": {
      "$id": "284",
      "$values": []
    },
    "GreyscaleImageLink": null,
    "OriginalImageLink": null,
    "PictureId": "00000000-0000-0000-0000-000000000000",
    "Processor": "Allied",
    "Message": null,
    "ScanResponse": null,
    "Data": {
      "$id": "285",
      "PayeeName": null,
      "CouponName": null,
      "PayeeAddress1": null,
      "PayeeAddress2": null,
      "PayeeCity": null,
      "PayeeState": null,
      "PayeeZip": null,
      "AccountNumber": null,
      "DueDate": null,
      "AmountDue": null,
      "PayeeRecipient": null,
      "HighestConfidencePayeeName": null
    },
    "ProcessingTime": "00:00:00",
    "Accepted": false
  },
  "AlliedResponse": {
    "$id": "286",
    "IntelligentVote": false,
    "PostnetVote": false,
    "TextVote": false,
    "IntelligentResult": {
      "$id": "287",
      "$values": []
    },
    "PostnetResult": {
      "$id": "288",
      "$values": []
    },
    "TextResult": null,
    "IntelligentProcessingTime": "00:00:00",
    "PostnetProcessingTime": "00:00:00",
    "TextProcessingTime": "00:00:00",
    "AlliedProcessingTime": "00:00:00",
    "PictureId": "00000000-0000-0000-0000-000000000000",
    "Processor": "Allied",
    "Message": null,
    "ScanResponse": null,
    "Data": {
      "$id": "289",
      "PayeeName": null,
      "CouponName": null,
      "PayeeAddress1": null,
      "PayeeAddress2": null,
      "PayeeCity": null,
      "PayeeState": null,
      "PayeeZip": null,
      "AccountNumber": null,
      "DueDate": null,
      "AmountDue": null,
      "PayeeRecipient": null,
      "HighestConfidencePayeeName": null
    },
    "ProcessingTime": "00:00:00",
    "Accepted": false
  },
  "Responses": {
    "$id": "290",
    "$values": []
  },
  "ResultedInPayment": true,
  "PaymentId": "cd359bc5-c3d1-4745-99ad-0f426e2e790c",
  "Id": "9424f88c-e1cc-4e04-831c-0f429100a8c5",
  "EventSourceId": "9424f88c-e1cc-4e04-831c-0f429100a8c5",
  "Version": 0,
  "InitialVersion": 0
}
```

### 5. Submit a payment request using the collected data

```
POST https://api.demo.alliedpayment.com/customers/b2de5bc7-06bd-4331-8a9f-9bad83b94a20/submitpayment HTTP/1.1
Host: api.demo.alliedpayment.com
Connection: keep-alive
Content-Length: 147
Accept: application/json
MD5: 19ae1d70584e9d034d9733d520df6fac
Authorization: TIMESTAMP username={USERNAME};domain={DOMAIN};timestamp={TIMESTAMP};signature={SIGNATURE};publickey={PUBLICKEY}
Content-Type: application/json;charset=UTF-8

{
    "PictureId": "{PICTUREID_FROM_PHOTO_RESPONSE}",
    "Amount": "{AMOUNT ENTERED BY CUSTOMER}",
    "ScheduleForDate": "{VALID PAYMENT DATE}",
    "DeliveryOptionId": "{OPTIONAL OPTION ID FROM PHOTO STATUS DELIVERY OPTIONS}",
    "AccountNumber": "{ACCOUNT NUMBER OF THE CUSTOMERS DESIRED PAY FROM ACCOUNT}",
    "RoutingNumber": "{ROUTING NUMBER OF THE CUSTOMERS DESIRED PAY FROM ACCOUNT}"
}
```
