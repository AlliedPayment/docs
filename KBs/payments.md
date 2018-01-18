# The Life Of ~~Brian~~ Payments

## Table Of Contents

* [About](#about)
* [Payment Status](#payment-status)
* [Payment Workflow](#payment-workflow)
  * [Auth](#auth)
  * [Today or Future Dated](#today-or-future-dated)
  * [Account Balance check](#account-balance-check)
  * [Payment Routing](#payment-routing)
  * [Limit Check](#limit-check)
  * [Filter by network](#filter-by-network)
  * [Collect if Realtime & Today](#collect-if-realtime-today)
  * [Commit](#commit)
  * [Write to the read model](#write-to-the-read-model)

## About

A payment is an aggregate root, and is (unfortunately IMHO) mutable.

## Payment Status

* Pending / Scheduled
* Processing (collected, settled, network sent)
  * Customer can no longer modify the payment (in general)
  * Once in processing the payment CANNOT go on hold.
* Done
* Cancelled (user initiated only)
* Rejected (such as pic pays with non bill photos)
* Hold (System Hold)
  * System can put things on hold and take things off hold
* Bank Hold
  * Requires the FI to interviene
    * Allowed: payment would go to either Pending or Processing
    * Not Allowed: payment would go to Rejected
* Allied Hold
  * Requires an Allied admin to interviene
* Rescheduled
  * Recurring schedule was modified and the original payment is transitioned to rescheduled and a new pending payment is made in it's place
* Reversing
  * A payment that has been collected is cancelled. It will be reversing until an admin sends the money back and transitions the payment to reversed.
* Reversed
  * A payment was collected and the funds were returned.
* ReIssued
  * Allow the check to be printed again

## Payment Workflow

### Auth

* Verify crypto signature on request
* Verify that user / customer is allowed to interact with the requested resources

### Today or Future Dated

* Future dated payments are not validated to the extent that a payment scheduled to go out today would.

### Account Balance check

* Some fis do not do a balance check
* Future dated payments do not get balanced check on creation

### Payment Routing

Note: **Complicated & Computationally Expensive**

_Based on name, address, account number, date, fees, etc._

* Collect
* Settle
* Network Send
* Biller
* Paper / Electronic
* Fee
* Ach Pattern
* Promise Date
* Payment Date (Send On / Delivery By based on Fi preference)

### Limit Check

#### Types

* Transaction
* Daily
* Verification (require 2FA to create large payment)

#### Limit Hierarchy

* FI
  * Customer
    * User

Example:

* Fi Limit: $100.00
* Customer Limit: $50.00
* User Limit: $10.00

An end user with the limit hierachy above would be able to make a payment up to $10.00

### Filter by network

* Verify that the route that came back is valid for the amount & date

### Collect if Realtime & Today

Note: **Complicated**

We try to collect these immediately

What happens if

* Collect fails
  * The payment will not be created, and user will be notified immediately that the payment failed (in the ui)
* Collect success
* Payment is created
* Ambiguous response
* Place payment on hold

By definition this step crosses the network boundry.

### Commit

Write the payment to the commits table (adding it to the event stream)

### Write to the read model

Once added to the event stream a denormalizer writes the new payment to the payments table.
