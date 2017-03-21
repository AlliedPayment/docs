# Teller Payments

## Overview

1. [Prerequisites](#prerequisites)
    - [API Keys](#api-keys)
    - [HTTP Authorization Header](#http-authorization-header)
      - [Signature Tool][SignatureTool]

1. [Login](#login)
    1. [Get Authentication Challenge](#authentication-challenge)
    1. [Hash The User Password](#hash-the-users-password)
    1. [Authenticate User](#authenticate-user)
    1. [Handle Authentication Response](#handle-authentication-response)
    1. [Get User Limits](#get-user-limits)

1. [Create Payment](#create-payment)
    1. [Collect Payment Information](#collect-payment-information-from-user)
    1. [Verify User Limits](#verify-user-limits)
    1. [Get Delivery Options](#get-delivery-options)
    1. [Submit Payment Request](#submit-payment-request)

1. Associated Workflows
    - [Change Password][WorkflowChangePassword]
    - [Multi-Factor Authentication][WorkflowMultiFactorAuth]


## Prerequisites

### API Keys

- Get API keys from Allied
  - Public key
  - Private key

### HTTP Authorization Header

- Implement HTTP Authorization header

```cs
// C# implementation

        private void SetAuthorizationHeader(string url, string domain = null, string username = null)
    {
        var header = GetAuthorizationHeader(url, domain, username);
        this.DefaultRequestHeaders.Remove("Authorization");
        this.DefaultRequestHeaders.Add("Authorization", header);
    }

    private string GetAuthorizationHeader(string url, string domain = null, string username = null)
    {
        var timestamp = DateTime.UtcNow.ToString("o");
        var signature = CreateSignature(url, timestamp);
        var publicKey = _config.Value.PublicKey;

        var header = new StringBuilder("TIMESTAMP ");
        if (!string.IsNullOrEmpty(username)) header.Append($"username={username};");
        if (!string.IsNullOrEmpty(domain)) header.Append($"domain={domain};");
        header.Append($"timestamp={timestamp};signature={signature};publickey={publicKey}");
        return header.ToString();
    }

    private string CreateSignature(string url, string timestamp)
    {
        var message = new StringBuilder();
        message.Append(url + "\r\n");
        if (!string.IsNullOrEmpty(timestamp)) message.Append(timestamp + "\r\n");
        var bytes = Encoding.UTF8.GetBytes(message.ToString());
        var key = Encoding.UTF8.GetBytes(_config.Value.PrivateKey);
        var hmac = new HMACSHA1(key);
        var hash = hmac.ComputeHash(bytes);
        return Convert.ToBase64String(hash);
    }

```

- Signature verification
  - [Signature Tool][SignatureTool]
    - Online tool can be used to verify that the signature that your signature is correct by comparing it with the results from our signature tool.


## Login

- Data Required
  - Domain
  - Username
  - Password
  - Branch (optional)

### Authentication Challenge

- Get authentication challenge
  - HTTP GET `https://{api}/auth/challenge`
    - Example Response

```json

    {
        "Salt": "SALT_VALUE",
        "Challege": "CHALLENGE_VALUE"
    }

```

### Hash The User's Password

```cs

    // psuedo code
    let x = BCrypt(password, salt)
    let hash = SHA256(x)
    result = HMACSHA1(hash,privateKey)
```

```cs

    // C# implementation
    // response = authentication challenge response

    var sha = System.Security.Cryptography.SHA256.Create();
    var hashedPassword = BCrypt.HashPassword(password, response.Salt);
    var hashedPasswordBytes = System.Text.Encoding.UTF8.GetBytes(hashedPassword);
    var input = sha.ComputeHash(hashedPasswordBytes);
    var hmacKey = Convert.FromBase64String(response.Challenge);
    var mac = new System.Security.Cryptography.HMACSHA1(hmacKey);
    var result = mac.ComputeHash(input);
    var encodedResult = Convert.ToBase64String(result);

```

### Authenticate User

- HTTP POST `https://{api}/auth`

```json
    {
        "Domain" : "DOMAIN",
        "HashedPassword" : "ENCODED_RESULT",
        "UserName" : "USER_NAME",
        "PublicAPIKey" : "PUBLIC_KEY",
    }
```

### Handle Authentication Response

```json
{
    "User":  {
        "$id": "1",
        "Id": "00000000-0000-0000-0000-000000000000",
        "UserName": "user.name",
        "Roles": {
            "$id": "2",
            "$values": ["Pay Bills", ]
        },
        "PhoneNumbers": {
            "$id": "3",
            "$values": [{
                "$id": "4",
                "Id": "00000000-0000-0000-0000-000000000000",
                "Name": "Mobile",
                "Number": "5558675309",
                "IsEnabled": false,
                "IsVerified": false,
                "IsDefault": false,
                "VerificationCode": "",
                "PhoneType": "None",
                "IsTextCapable": true
            }, {
                "$id": "4",
                "Id": "00000000-0000-0000-0000-000000000000",
                "Name": "Home",
                "Number": "5558675309",
                "IsEnabled": false,
                "IsVerified": false,
                "IsDefault": false,
                "VerificationCode": "",
                "PhoneType": "None",
                "IsTextCapable": false
            }]
        },
        "FinancialInstitutionId": "00000000-0000-0000-0000-000000000000",
        "Domain": "DOMAIN",
        "CustomerId": "00000000-0000-0000-0000-000000000000",
        "HasGoogleAuth": false,
        "IsEnrolled": false,
        "EmailAddress": "user.name@domain.com",
        "IsLockedOut": false,
        "Links": {
            "$id": "5",
            "$values": []
        },
        "FirstName": "FirstName",
        "LastName": "LastName",
        "FullName": "FirstName LastName",
        "Password": null,
        "DisplayUserName": "user.name",
        "ForeignKey": "foreign.key",
        "TimeZone": "Eastern Standard Time",
        "IsUserTeller": false,
        "IsDemo": false,
        "IsForcePasswordChange": false,
        "IsUserFIAdmin": false,
        "IsPasswordExpired": false,
        "GPinKeyMask": null,
        "PinEnabled": true,
        "IsSSO": false,
        "CurrentTheme": null,
        "LimitId": "00000000-0000-0000-0000-000000000000",
        "IsPictureTipsHidden": false,
        "HasAcceptedDisclaimer": null,
        "DefaultFlexPayView": "Standard"
    },
    "AuthenticationResult": "Authorized"
}
```

- User Object Notes
  - IsForcePasswordChange (true/false)
  - IsPasswordExpired (true/false)
    - If either property is true trigger the user to change their password
    - See [Change Password documentation][WorkflowChangePassword]

### Get User Limits

- Get the user's limits from the API
  - HTTP GET `https://{api}/fis/{fiId}/users/{userId}/enforcedLimits`
    - Limit Response Example
    - Cache the response for payment validation

```json

        {
           "$id": "1",
           "Id": "9bf35259-2504-4920-9e23-a2872559c049",
           "Limits": {
               "$id": "2",
               "$values": [{
                       "$id": "9",
                       "ModuleType": "BillPay",
                       "PaymentType": "Electronic",
                       "LimitType": "Verify",
                       "LimitAmount": 1000
                   },
                   {
                       "$id": "10",
                       "ModuleType": "BillPay",
                       "PaymentType": "Electronic",
                       "LimitType": "Transaction",
                       "LimitAmount": 5000
                   },
                   {
                       "$id": "11",
                       "ModuleType": "BillPay",
                       "PaymentType": "Electronic",
                       "LimitType": "Daily",
                       "LimitAmount": 5000
                   },
                   {
                       "$id": "12",
                       "ModuleType": "BillPay",
                       "PaymentType": "Paper",
                       "LimitType": "Verify",
                       "LimitAmount": 1000
                   },
                   {
                       "$id": "13",
                       "ModuleType": "BillPay",
                       "PaymentType": "Paper",
                       "LimitType": "Transaction",
                       "LimitAmount": 5000
                   },
                   {
                       "$id": "14",
                       "ModuleType": "BillPay",
                       "PaymentType": "Paper",
                       "LimitType": "Daily",
                       "LimitAmount": 5000
                   }
               ]
           }
       }
```

## Create Payment

### Collect Payment Information From User

- Retrieve the following values from the user
  - Amount
    - Must be greater than `0`
  - Pay to account number
  - Name of payee AKA biller name
  - Addresses (optional for electronic payees)
    - Payee Address
    - Customer Address

```json

{
    "Address1": "ADDRESS1_VALUE",
    "Address2": "ADDRESS2_VALUE",
    "City": "CITY_VALUE",
    "State": "STATE_VALUE",
    "Zip": "ZIP_VALUE",
    "Country": "COUNTRY_VALUE",
}

```

### Verify User Limits

Ensure that the payment's amount is within the cached limits.

- Transaction Limit
  - No single payment created by a user can be greater than this limit.
  - If the payment amount is over this limit. Prompt the user for a smaller amount.
- Daily Limit
  - A user cannot create payment/s whose amount/s in summation are greater than this limit.
- Verify Limit
  - If the user enters an amount greater than the verify limit, but below the transaction limit the user must verify the payment through Allied's Multi-Factor authentication system.
  - See [Multi-Factor Authentication documentation][WorkflowMultiFactorAuth]

### Get Delivery Options

- Get available delivery options
  - HTTP GET `https://{api}/tellerOptions?payToName={payToName}&accountNumber={accountNumber}`
  - Display options for user to select
  - Store Id of selected option
    - If the selected option isElectronic property = false
      - Prompt the user for valid addresses
        - Pay to address aka the address of the payee or biller
        - Pay from address aka the customer's address

```json
// Example Delivery Options Response
{
  "$id": "1",
  "$values": [{
      "$id": "15",
      "Fee": 0.0,
      "IsElectronic": false,
      "IsDefault": true,
      "Name": "Standard US Mail",
      "DeliveryTimeOffset": 5,
      "DaysFromScheduleForDate": 5,
      "OptionId": "00000000-0000-0000-0000-000000000000",
      "DeliveryOption": {
        "$id": "16",
        "Id": "00000000-0000-0000-0000-000000000000",
        "AllowedNetworks": {
          "$id": "17",
          "$values": [
            "00000000-0000-0000-0000-000000000000"
          ]
        },
        "Description": "Standard US Mail",
        "ShippingMethod": "Standard",
        "Floats": {
          "$id": "18",
          "ScheduledForOffset": null,
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
        "DateCalculation": "UseFI",
        "MaximiumValidFor": null,
        "ValidFor": {
          "$id": "19",
          "$values": [
            "BILLER"
          ]
        },
        "Priority": 1,
        "MaxDaysReturned": null
      },
      "NetworkId": "00000000-0000-0000-0000-000000000000",
      "RouteId": "00000000-0000-0000-0000-000000000000",
      "DateTimeCalculationAlgorithm": "BusinessDays",
      "Priority": 1,
      "EarliestDeliveryDate": "2017-03-28T00:00:00",
      "MinimiumScheduledForDate": "2017-03-21T00:00:00",
      "MaximiumScheduledForDate": "2018-03-21T00:00:00",
      "DeliveryDates": {
        "$id": "20",
        "$values": [{
            "$id": "21",
            "ScheduleForDate": "2017-03-21T00:00:00",
            "DeliveryDate": "2017-03-28T00:00:00",
            "DayZero": "2017-03-21T00:00:00",
            "CollectionDate": "2017-03-21T00:00:00",
            "Description1": "Standard US Mail",
            "Description2": "Delivered by 3/28/2017\r\nFor a fee of $0.00"
          }
          // array truncated for example but will contain values for 365 days
        ]
      },
      "NetworkBillerId": "",
      "MatchedAccountNumber": "1234567890",
      "CutOff": null,
      "RouteName": "RouteName",
      "Cost": 0.0,
      "Overrides": {
        "$id": "274",
        "AchPattern": null,
        "DoNotCollect": null,
        "DoNotSettle": null,
        "DoNotNetworkSend": null,
        "Hold": null
      },
      "ViableRoutes": {
        "$id": "275",
        "$values": [{
            "$id": "276",
            "DeliveryOption": {
              "$id": "277",
              "$type": "Allied.Domain.Entities.PaperNetworkDeliveryOption, Allied.Domain, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
              "Name": "Standard US Mail",
              "DeliveryDateOffset": 5,
              "Cost": 0.0,
              "DeliveryTimeAlgorithm": "PAPER",
              "RouteId": "00000000-0000-0000-0000-000000000000",
              "DateTimeCalculationAlgorithm": "BusinessDays",
              "CutOff": null
            },
            "Cost": 0.0,
            "IsElectronic": false,
            "NetworkId": "00000000-0000-0000-0000-000000000000",
            "RouteId": "00000000-0000-0000-0000-000000000000",
            "DeliveryTime": 5,
            "DateTimeCalculation": "BusinessDays",
            "NetworkBillerId": "",
            "AccountNumber": "2111111111",
            "CanReverse": false,
            "CutOff": null,
            "RouteName": "RouteName",
            "BillerClass": null,
            "IsSameDay": false,
            "CorrectedAddress": null,
            "MinimiumScheduleForDate": null,
            "MinimiumDeliverByDate": null,
            "Overrides": {
              "$id": "278",
              "AchPattern": null,
              "DoNotCollect": null,
              "DoNotSettle": null,
              "DoNotNetworkSend": null,
              "Hold": null
            },
            "NetworkGroupId": null
          },
          {
            "$ref": "12"
          }
        ]
      },
      "DeliveryTime": 5,
      "BillerClass": null,
      "CorrectedAddress": null,
      "DateCalculation": "SendOnDate"
    },
    {
      "$id": "295",
      "Fee": 0.0,
      "IsElectronic": true,
      "IsDefault": true,
      "Name": "Standard",
      "DeliveryTimeOffset": 1,
      "DaysFromScheduleForDate": 2,
      "OptionId": "00000000-0000-0000-0000-000000000000",
      "DeliveryOption": {
        "$id": "296",
        "Id": "00000000-0000-0000-0000-000000000000",
        "AllowedNetworks": {
          "$id": "297",
          "$values": [
            "00000000-0000-0000-0000-000000000000",
            "00000000-0000-0000-0000-000000000000",
            "00000000-0000-0000-0000-000000000000"
          ]
        },
        "Description": "Standard",
        "ShippingMethod": "Standard",
        "Floats": {
          "$id": "298",
          "ScheduledForOffset": null,
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
        "DateCalculation": "UseFI",
        "MaximiumValidFor": null,
        "ValidFor": {
          "$id": "299",
          "$values": [
            "BILLER"
          ]
        },
        "Priority": 0,
        "MaxDaysReturned": null
      },
      "NetworkId": "00000000-0000-0000-0000-000000000000",
      "RouteId": "00000000-0000-0000-0000-000000000000",
      "DateTimeCalculationAlgorithm": "BusinessDays",
      "Priority": 0,
      "EarliestDeliveryDate": "2017-03-23T00:00:00",
      "MinimiumScheduledForDate": "2017-03-21T00:00:00",
      "MaximiumScheduledForDate": "2018-03-21T00:00:00",
      "DeliveryDates": {
        "$id": "300",
        "$values": [{
            "$id": "301",
            "ScheduleForDate": "2017-03-21T00:00:00",
            "DeliveryDate": "2017-03-23T00:00:00",
            "DayZero": "2017-03-21T00:00:00",
            "CollectionDate": "2017-03-21T00:00:00",
            "Description1": "Standard",
            "Description2": "Delivered by 3/23/2017\r\nFor a fee of $0.00"
          }
          // array truncated for example but will contain values for 365 days
        ]
      },
      "NetworkBillerId": "0000000708",
      "MatchedAccountNumber": null,
      "CutOff": null,
      "RouteName": "RouteName",
      "Cost": 0.0,
      "Overrides": {
        "$id": "554",
        "AchPattern": null,
        "DoNotCollect": null,
        "DoNotSettle": null,
        "DoNotNetworkSend": null,
        "Hold": null
      },
      "ViableRoutes": {
        "$id": "555",
        "$values": [{
            "$ref": "289"
          },
          {
            "$ref": "292"
          }
        ]
      },
      "DeliveryTime": 2,
      "BillerClass": "Other",
      "CorrectedAddress": null,
      "DateCalculation": "SendOnDate"
    }
  ]
}
```

### Submit Payment Request

- HTTP POST `https://{api}/teller/payments`
  - Example create payment request

```json

{
  "PaymentDate": "03/19/2017",
  "PayToAccount": "ACCOUNT_NUMBER",
  "PayToName": "PAYEE_NAME",
  "BillerAddress": null,
  "CustomerName": "CUSTOMER_NAME",
  "CustomerAddress": null,
  "Amount": 1,
  "ShippingMethod": 0,
  "PostingMethod": 0,
  "ConfirmationNumber": null,
  "PaymentMethod": null,
  "Memo": null,
  "BillerId": "00000000-0000-0000-0000-000000000000",
  "CustomerId": "00000000-0000-0000-0000-000000000000",
  "CustomerEmail": null,
  "NetworkBillerId": null,
  "Teller": "USERNAME",
  "OverrideDuplicate": false,
  "DeliveryOptionId": "00000000-0000-0000-0000-000000000000"
}

```

- Response
  - HTTP 200 (OK) indicates the request was successful
  - Example response

```json
{
  "$id": "1",
  "Fee": 0.0,
  "EstimatedSettlementDate": "2017-03-23T00:00:00",
  "PaymentType": "Electronic",
  "Responses": {
    "$id": "4",
    "$values": []
  },
  "IsValid": true,
  "PaperReasons": "",
  "Result": "Query",
  "FoundDuplicatePayment": false,
    "Request": {
    "$id": "2",
    "CustomerId": "00000000-0000-0000-0000-000000000000",
    "CustomerName": "CUSTOMER_NAME",
    "CustomerEmail": null,
    "CustomerAddress": {
      "$id": "3",
      "Address1": null,
      "Address2": null,
      "City": null,
      "State": null,
      "PostalCode": null,
      "Country": null,
      "Id": "00000000-0000-0000-0000-000000000000"
    },
    "BillerId": "00000000-0000-0000-0000-000000000000",
    "BillerAddress": null,
    "Amount": 1.0,
    "Memo": null,
    "PaymentDate": "03/21/2017",
    "PaymentMethod": null,
    "PayToAccount": "1234567890",
    "PayToName": "PAYEE_NAME",
    "ShippingMethod": "Standard",
    "ConfirmationNumber": "7777786",
    "PostingMethod": "QueryOnly",
    "NetworkBillerId": "0000000708",
    "BranchId": "00000000-0000-0000-0000-000000000000",
    "Teller": "USERNAME",
    "OverrideDuplicate": false,
    "DeliveryOptionId": "00000000-0000-0000-0000-000000000000"
  }
}
```



[WorkflowChangePassword]: https://github.com/AlliedPayment/Documentation/blob/master/03%20-%20Workflows/Change%20Password.md "Change Password Workflow"
[WorkflowMultiFactorAuth]: https://github.com/AlliedPayment/Documentation/blob/master/03%20-%20Workflows/Multi-Factor%20Authentication.md "Multi-Factor Authentication"
[SignatureTool]: https://alliedpayment.github.io/SignatureCalculator/ "Signature Calculator"