# Multi-Factor Authentication

## Get User

- This API function returns a User object that contains all of the valid methods and target values that can be used for the multifactor process.
  - HTTP GET `https://{api}/users/{userId}`
    - Values in the response that are key for the multifactor workflow are EmailAddress and the PhoneNumbers array.
    - Eample response

```json

    {
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
    }

```

## Request Code

This API function allows the developer to request a code be sent via the specified channel to a given target.

- Method: Valid method parameters include (SMS, VOICE, EMAIL)
- Target: Valid target parameter values include a valid phone number for SMS & VOICE methods or a valid email address when using the EMAIL method.  
- HTTP GET `https://{api}/multifactor/requestCode?method={METHOD}&target={TARGET}`
  - Response
    - A HTTP status code of 204 (No Content) indicates the request was successful.
    - Example Raw Http Response

```txt

    HTTP/1.1 204 No Content
    Access-Control-Allow-Headers: Content-Type, Accept, Authorization Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS,PATCH Access-Control-Allow-Origin: *
    Cache-Control: private Date: Tue, 13 Dec 2016 15:54:29 GMT
    Set-Cookie: SERVERID=; Expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/ X-Performance: 1000.0004 ms
    X-RequestId: d577bf72-81d1-476d-9df8-a3d7756e72da
    X-Robots-Tag: none
    Connection: keep-alive

```

## Verify Code

This API function allows the developer to verify a code that was previously requested.

- GET `https://{api}/multifactor/verifyCode?code={CODE}&wasSentTo={TARGET}`