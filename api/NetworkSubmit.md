
# Network Payment Submission API

## Purpose

The Network Payment Submission API should be used to create a single payment. The system will create a new payment based on the supplied information in the BillHeroPaymentRequest object.

## Endpoint

`https://<api>/billhero/payments`

[See Environment Info](http://alliedpayment.github.io/docs/api/environments)

## Method

HTTP POST

## Headers

* Accept: application/json
* Content-Type: application/json
* Authorization: [See Allied authorization documentation](http://alliedpayment.github.io/docs/api/Authorization)

## Source Code

``` c#
namespace Allied.Services.ForBillHero.Web.Requests
{
    public class BillHeroPaymentRequest : BasePaymentRequest 
    {
        public string PayToName { get; set; }
        public Address PayToAddress { get; set; }
        public string PayToAccountNumber { get; set; }
        public string PayToPhoneNumber { get; set; }
        public string PayToEmailAddress { get; set; }

        // Customer in this context is the person who's name is on the bill at the biller.
        public string CustomerName { get; set; }
        public Address CustomerAddress { get; set; }
        public string CustomerEmailAddress { get; set; }
    }
}
```

``` c#
namespace Allied.Services.ForBillHero.Web.Requests {

    [PutDtoInBody]
    public abstract class BasePaymentRequest : IReturn<Models.BillHeroPayment>
    {
        
        public decimal Amount { get; set; }
        public string AchReferenceNumber { get; set; }
        public string ETag { get; set; }

        public DateTime? ScheduleOn { get; set; }
        public Guid? DeliveryOptionId { get; set; }

        public abstract HttpResult GetAccountInfo(UserService svc, out UserService.AccountInfo info);

        public Dictionary<string, string> Tags { get; set; }
        public string Note { get; set; }
        protected BasePaymentRequest()
        {
            Tags = new Dictionary<string, string>();
        }
    }
}
```

## Possible Responses

* HTTP 200 (OK)
  * Payment was created successfully
* HTTP 409 (Conflict)
  * Could not get lock on idempotency key
* HTTP 400 (Bad Request)
  * Could not find account information.
* HTTP 406 (Not Acceptable)
  * Allied is unable to route the payment electronically, and therefore will not accept the reject.
* HTTP 500 (Internal Server Error)
  * An unexpected error occurred while handling the request.
    * Contact [Development Support](mailto:developmentsupport@alliedpayment.com) if you continue to get this response.
