# Network Reject API

## Purpose

The Network Rejection API should be used to inform the system that a payment network rejected a payment. The payment network must provide the payment’s ID and a reason why the payment was rejected. The system will reject the payment corresponding with the provided ID, and add the reason to the payment’s notes in the following format: network name, payment id, original payment's creation date (dd.mm.yy).  The system will create a new payment based on the rejected payment’s data and add a note in the following format: network name, payment id, new payment's creation date (dd,mm,yy).  The new payment will be configured to not use the same network that rejected the original payment.

Additional notes:
No work being done to add or manipulate the status of the original payment. 
FI Admin and Allied Admin functionality will remain as if both payments were entered from the front end of the system by a user.

## Endpoint

`https://<api>/payments/<id>/networkreject`

## Method

HTTP POST

## Headers

* Accept: application/json
* Content-Type: application/json
* Authorization: [See Allied authorization documentation](http://alliedpayment.github.io/Documentation/API/Authorization)

## Source Code

``` c#
namespace Allied.Domain.DTOs{

    class NetworkReject{
        public Id:Guid {get;set;} // from URI
        public Reason:string {get;set;}
    }

}
```

## Possible Responses

* HTTP 200 (OK)
  * Payment was rejected successfully
* HTTP 404 (Not Found)
  * A payment with the given ID was not found.
* HTTP 406 (Not Acceptable)
  * Allied is unable to route the payment electronically, and therefore will not accept the reject.

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