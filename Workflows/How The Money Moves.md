# How The Money Moves

## Daily Jobs

### 12:00 AM

* DB Backup
* Recurring payments created for future dated payments

### 9:00 AM

* (SAGA) Realtime collect
* Attempt to collect $$ from partner real time APIs (retry by policy if failed)
  * Errors logged to RealTimeErrorLog
  * Success logged to TransactionHistory
* Moves $$ from the customer account to the Fi's settlement account

### 11:00 AM

* Print Checks
  * Outputs PDF containing all check images for the payments that exist in the check xml file
  * Centralized checks are drafted from the fi's centralized account. This account is typically controlled by the fi, but we do offer (for smaller fis) handle the reconciliation of the centralized account. In these cases the centralized account is owned and operated by Allied.

### 12:00 PM

* Ariza cutoff
  * Network send checks to ariza

### 1:00 PM

* Electronic Network Send
  * Admins typically select ORCC & RPPS only for this run

### 1:30 - 6:30 Fi Cut Offs

(In General) Payments go through the following processes:

* Collect
  * Move $ from customer accnt into the fi's settlement account
* Settle
  * Move $ from fi settlement account to allied's operating account
* Network Fund
  * How we take $ from our operation $ to send to the biller
    * This differs per network.
      * RPPS requires the $ up front.
      * ORCC requires the $ after we sent them the file (floating the $ to us for a day)
      * Fuse pay is the next day like ORCC
* Network Send
  * Each network recieves a report that provides the details for each transaction
    * Network reports can / are different. Some look like ACH files, and others are spreadsheets.

### 6:45 (whenever the 6:30 run is finished)

* Electronic Network Send Again

### 7:00

* Reports
  * Regional Billers

## Funding Models

Funding models belong to the delivery option NOT the fi.
An fi may have an multiple options that are of each funding model type (risk vs good funds)

### Risk

Days Offset

```
 Collect 0
 Settle 0
 Network Send 0
```

### Good Funds

Days Offset

```
Collect 0
Settle 0
Network Send 1
```

## Picture Payments

Initially assume the worst route (paper with a 4 day delivery time).
Upon the picture being reviewed the routing engine will recalculate the route and try to improve the selected delivery option. So if it can go electronic it will.

## Templates

big bags of data (not state)

A template usually goes out a certain way, but at the end of the day its the routing engines job to route the payment. So just because a template goes to route A today doesn't mean it HAS to go there tomorrow.

## Regional Billers

* Network funding

## ACH

### Balanced File

* Debits and credits line up AND the totals DO MATCH

### Unbalanced File

* Debits and credits line up BUT the totals DO NOT MATCH

### No Settle Banks

* We process these at lake city

Debit the customers, credit (during collection) allied's operating account

### Direct ACH

```
Collect 0
Settle 0
Network Send X
```

* Go direclty to the Fis clearing account
  * never touches Allied's accounts

### Lake City Files

These files are the output of payment processing.

* Files are not broken out by FI
* Files are broken out by run (1:30, 2:00, etc)
* Unable to trace back a payment in an ACH file to a batch because the settlement aggregates the payment.

## P2P

```
Collect 0
Settle 0
Network Send 0
```

Network send is sent to the P2P network (Aculync). The P2P network hits a callback via our REST API that informs Allied if the payment was accepted, recjected, or timed out.

## Fees

Fees are handled out side of the payment.
They can be 1 per payment at the time of the payment.
They can be summed up for the month and 1 single fee is changed to the user.

## Rejected Payments

![PaymentRejectionImage](https://raw.githubusercontent.com/AlliedPayment/Documentation/master/Workflows/payment_rejections.jpeg?token=AGnIbV4mJPiA0eh8H2dRzdK7m7YOh_fyks5aZ4ivwA%3D%3D)
