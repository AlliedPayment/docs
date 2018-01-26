# Customer

## Table Of Contents

* [About](#about)

* [Diagram](#diagram)

## About

A customer is an aggregate root.

Payment Template (entiy)
Bank Account (entity): was a value object but needed an ID for microtransactions and therefore is now an entity.

In general cannot modify the payment after we've "touched" it (collected, settled, network sent).

If a payment has only been collected the customer can still cancel, because we can send the money back.

## Diagram

![CustomerAggregateRoot](https://raw.githubusercontent.com/AlliedPayment/Documentation/master/KBs/assets/customer_agg_root.png?token=AGnIbVWnMMxkeN1Oe495WO3pPKxu3WbGks5aal1zwA%3D%3D)