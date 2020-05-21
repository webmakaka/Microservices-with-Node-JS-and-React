# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

# 21. Handling Payments

<br/>

### 01. The Payments Service

<br/>

![Application](/img/pic-21-01.png?raw=true)

<br/>

### 02. Initial Setup

<br/>

### 03. Replicated Fields

<br/>

![Application](/img/pic-21-02.png?raw=true)

<br/>

![Application](/img/pic-21-03.png?raw=true)

<br/>

### 04. Another Order Model!

<br/>

### 05. Update-If-Current

    $ cd payments
    $ npm install --save mongoose-update-if-current

<br/>

### 06. Replicating Orders

<br/>

### 07. Testing Order Creation

    $ cd payments
    $ npm run test

<br/>

### 08. Marking an Order as Cancelled

<br/>

### 09. Cancelled Testing

<br/>

### 10. Starting the Listeners

```
CREATE TICKET
CREATE ORDER
```

<br/>

![Application](/img/pic-21-04.png?raw=true)

<br/>

![Application](/img/pic-21-05.png?raw=true)

<br/>

### 11. Payments Flow with Stripe

<br/>

![Application](/img/pic-21-06.png?raw=true)

<br/>

![Application](/img/pic-21-07.png?raw=true)

<br/>

### 12. Implementing the Create Charge Handler

<br/>

![Application](/img/pic-21-08.png?raw=true)

<br/>

### 13. Validating Order Payment

<br/>

### 14. Testing Order Validation Before Payment

<br/>

### 15. Testing Same-User Validation

<br/>

### 16. Stripe Setup

<br/>

![Application](/img/pic-21-09.png?raw=true)

<br/>

    $ npm install --save stripe

<br/>

stripe.com

Developers --> API keys

<br/>

### 17. Creating a Stripe Secret

    $ kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=<STRIPE_SECRET_KEY>

<br/>

### 18. Creating a Charge with Stripe

https://stripe.com/docs/api/charges/create

<br/>

### 19. Manual Testing of Payments

    $ cd payments
    $ npm update @grider-ms-tickets/common

<br/>

**restart skaffold dev**

<br/>

```
CREATE TICKET
CREATE ORDER
```

```
// CREATE PAYMENT
$ curl \
--insecure \
--cookie /tmp/cookies.txt \
--data '{"orderId":"5ec6c93f6c627e0023725faf", "token": "tok_visa"}' \
--header "Content-Type: application/json" \
--request POST https://ticketing.dev/api/payments/ \
| python -m json.tool
```

<br/>

![Application](/img/pic-21-10.png?raw=true)

<br/>

### 20. Automated Payment Testing

<br/>

### 21. Mocked Stripe Client

<br/>

### 22. A More Realistic Test Setup

<br/>

### 23. Realistic Test Implementation

<br/>

### 24. Tying an Order and Charge Together

<br/>

### 25. Testing Payment Creation

<br/>

### 26. Publishing a Payment Created Event

<br/>

![Application](/img/pic-21-11.png?raw=true)

<br/>

    $ cd payments
    $ npm update @grider-ms-tickets/common

<br/>

    $ cd orders
    $ npm update @grider-ms-tickets/common

<br/>

    $ cd tickets
    $ npm update @grider-ms-tickets/common

<br/>

### 27. More on Publishing

<br/>

### 28. Marking an Order as Complete

<br/>

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/
