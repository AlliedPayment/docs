# Change Password

## Get Password Requirements

- HTTP GET `https://{api}/fis/{fiId}/passwordRequirements?userId={userId}`
  - Example Response

```json

    {
        "$id": "1",
        "PasswordComplexity": {
            "$id": "2",
            "Uppercase": "Required",
            "Lowercase": "Required",
            "Digits": "Required",
            "Symbols": "Required",
            "MinimumRequirementsToMeet": 3
        },
        "PasswordLengthMax": null,
        "PasswordLengthMin": 8,
        "PasswordResetPeriod": null,
        "PasswordHistoryCount": null,
        "PastPasswords": null
    }

```

## Update User's Password

- Retrieve a new password from the user that meets all of the requirements recieved from the passwordRequirements response.
- Using Bcrypt generate a new salt
- Using Bcrypt hash the new password with the salt
- Post the hased password with the salt to update the user's password.

```cs

// C# implementation
    var salt = BCrypt.GenerateSalt();
    var hash = BCrypt.HashPassword(newPassword, salt);
    var patch = new UserPatch { Hash = hash, Salt = salt };

```

- HTTP POST `https://{api}/fis/{fiId}/users/{userId}/updatepass`
  - Example request

```json

{
    "Salt": "$2a$10$XDvXle7pXjboNM/aIlQ/au",
    "Hash": "$2a$10$XDvXle7pXjboNM/aIlQ/aueXAuEU8qlDABarIr7vrvvY/VgMMSUly"
}

```

- Response
  - A HTTP status code of 200 (OK) indicates the request was successful.
  - Example Raw Http Response

```txt

    HTTP/1.1 200 OK
    Access-Control-Allow-Headers: Content-Type, Accept, Authorization
    Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, PATCH
    Access-Control-Allow-Origin: *
    Cache-Control: private
    Date: Fri, 17 Mar 2017 16:32:21 GMT
    Set-Cookie: SERVERID=; Expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/
    X-Performance: 1531.2427 ms
    X-RequestId: 38eab2b6-7bca-427d-bf67-7fc1fdcc1c69
    X-Robots-Tag: none
    Content-Length: 0
    Connection: keep-alive

```


- Response
  - A HTTP status code of 204 (No Content) indicates the request was successful.
  - Example Raw Http Response

```txt

    HTTP/1.1 204 No Content
    Access-Control-Allow-Headers: Content-Type, Accept, Authorization
    Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, PATCH
    Access-Control-Allow-Origin: *
    Cache-Control: private
    Date: Fri, 17 Mar 2017 19:47:18 GMT
    Set-Cookie: SERVERID=; Expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/
    X-Performance: 656.2581 ms
    X-RequestId: 5e70b508-f6b9-47b0-b004-eb1ebb665282
    X-Robots-Tag: none
    Connection: keep-alive

```