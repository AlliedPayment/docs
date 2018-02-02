# Network Reject API

## Purpose

The Network Rejection API should be used to inform the system that a payment network rejected a payment. The payment network must provide the payment’s ID and a reason why the payment was rejected. The system will locate the payment corresponding with the provided ID, and add the reason to the payment’s notes in the following format: recreated payment's network name, recreated payment's id, recreated payment's creation date `dd.mm.yy`.  The system will create a new payment based on the rejected payment’s data and add a note in the following format: rejected network name, rejected payment id, rejected payment's creation date `dd.mm.yy`.  The new payment will be configured to not use the same network that rejected the original payment.

### Additional notes

* No changes required for FI Admin and Allied Admin
* No work being done to manage the status of the original payment

## Endpoint

`https://`[\<api>](http://alliedpayment.github.io/docs/api/environments)`/payments/<paymentId>/networkreject`



## Method

HTTP POST

## Headers

* Accept: application/json
* Content-Type: application/json
* Authorization: [See Allied authorization documentation](http://alliedpayment.github.io/docs/api/Authorization)

## Source Code

``` c#
namespace Allied.Domain.DTOs{

    class NetworkReject{
        public Reason:string {get;set;}
    }

}
```

## Possible Responses

* HTTP 200 (OK)
  * Payment was rejected successfully
* HTTP 400 (Bad Request)
  * The request is invalid. Check the response body for the validation error, and example usage.
* HTTP 404 (Not Found)
  * A payment with the given ID was not found.
* HTTP 406 (Not Acceptable)
  * Allied is unable to route the payment electronically, and therefore will not accept the reject.
* HTTP 500 (Internal Server Error)
  * An unexpected error occurred while handling the request.
    * Contact [Development Support](mailto:developmentsupport@alliedpayment.com) if you continue to get this response.

## Example

Request Headers

``` http
POST https://api.demo.alliedpayment.com/payments/11111111-2222-3333-4444-555555555555/networkreject HTTP/1.1
Accept: application/json;
Content-Type: application/json;
Authorization: TIMESTAMP domain=<DOMAIN>;timestamp=<TIMESTAMP>;signature=<SIGNATURE>;publickey=<KEY>;
```

Request Body

``` json
{
    "reason":"Why the payment was rejected. This message will be attached to the payment's notes."
}
```