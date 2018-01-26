# Checks Knowledge Base (CKB)

## Table Of Contents
* [CKB-1 - How to remove payment and ACH files from final](#ckb-1)

## CKB-1

### How to print a single check

* Fill in the following values in the provided URL
  * API (api.alliedpayment.com)
  * Username (user must be in the ALLIED DOMAIN)
  * Payment ID (Id of the payment you want to print)
  
`https://<API>/checks.pdf?auth=inline&auth-domain=ALLIED&auth-user=<USERNAME>&expires=1517005936&id=<PAYMENTID>&publicKey=WSIlIrP6W2XY70eqkppk&reportName=CHECK&signature=BACKDOOR`
