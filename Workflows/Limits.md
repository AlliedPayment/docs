# Limits

## Get User Limits

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

## Verify User Limits

Ensure that the payment's amount is within the cached limits.

- Transaction Limit
  - No single payment created by a user can be greater than this limit.
  - If the payment amount is over this limit. Prompt the user for a smaller amount.
- Daily Limit
  - A user cannot create payment/s whose amount/s in summation are greater than this limit.
- Verify Limit
  - If the user enters an amount greater than the verify limit, but below the transaction limit the user must verify the payment through Allied's Multi-Factor authentication system.
  - See [Multi-Factor Authentication documentation][WorkflowMultiFactorAuth]
  
  [WorkflowMultiFactorAuth]: https://github.com/AlliedPayment/Documentation/blob/master/03%20-%20Workflows/Multi-Factor%20Authentication.md "Multi-Factor Authentication"
