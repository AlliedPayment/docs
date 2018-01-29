# Network Reject API

## Purpose

The Network Rejection api should be used to inform the system that a payment network rejected a payment. The payment network must provide the payment's ID and a reason why the payment was rejected. The system should then reject the payment coresponding with the provided ID, and add the reason to the payment's notes. Then the system should create a new payment based on the rejected payment's data. The new payment should be configured to not use the same network that rejected the original payment. 

### Endpoint

`https://<api>/payments/<id>/networkreject`

### Method

HTTP POST

### Headers

* Accept: application/json
* Content-Type: application/json
* Authorization: [See Allied authorization documentation](http://alliedpayment.github.io/Documentation/API/Authorization)

### Request Body

``` c#
namespace Allied.Domain.DTOs{

    class NetworkReject{
        public Id:Guid {get;set;}
        public Reason:string {get;set;}
    }

}

```

#### Example

``` json
{
    "id":"00000000-0000-0000-0000-000000000000",
    "reason":"Why the payment was rejected. This message will be attached to the payment's notes."
}
```

### Sample

``` http
POST https://api.demo.alliedpayment.com/payments/11111111-2222-3333-4444-555555555555/networkreject HTTP/1.1
Accept: application/json;
Content-Type: application/json;
Authorization: TIMESTAMP domain=<DOMAIN>;timestamp=<TIMESTAMP>;signature=<SIGNATURE>;publickey=<KEY>;
```

``` json
{
    "id":"11111111-2222-3333-4444-555555555555",
    "reason":"Why the payment was rejected. This message will be attached to the payment's notes."
}
```