# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

# 19. Listening for Events and Handling Concurrency Issues

<br/>

### 01. Time for Listeners!

<br/>

### 02. Reminder on Listeners

<br/>

### 03. Blueprint for Listeners

<br/>

### 04. A Few More Reminders

<br/>

### 05. Simple onMessage Implementation

<br/>

### 06. ID Adjustment

<br/>

### 07. Ticket Updated Listener Implementation

<br/>

### 08. Initializing the Listeners

<br/>

### 09. A Quick Manual Test

<br/>

    $ cd nats-test
    $ npm update @grider-ms-tickets/common

<br/>

```
CREATE TICKET
UPDATE TICKET
```

<br/>

![Application](/img/pic-19-01.png?raw=true)

<br/>

### 10. Clear Concurrency Issues

<br/>

### 11. Reminder on Versioning Records

<br/>

### 12. Optimistic Concurrency Control

<br/>

![Application](/img/pic-19-02.png?raw=true)

<br/>

![Application](/img/pic-19-03.png?raw=true)

<br/>

### 13. Mongoose Update-If-Current

    $ cd tickets
    $ npm install --save mongoose-update-if-current

<br/>

### 14. Implementing OCC with Mongoose

    $ cd tickets
    $ npm run test

<br/>

### 15. Testing OCC

<br/>

### 16. One More Test

<br/>

### 17. Who Updates Versions

<br/>

### 18. Including Versions in Events

    $ cd common
    $ npm run pub

<br/>

    $ cd orders
    $ npm update @grider-ms-tickets/common

<br/>

    $ cd tickets
    $ npm update @grider-ms-tickets/common

<br/>

### 19. Updating Tickets Event Definitions

<br/>

### 20. Applying a Version Query

    $ cd orders
    $ npm install --save mongoose-update-if-current

<br/>

```
CREATE TICKET
UPDATE TICKET
```

Everything works after updates

<br/>

### 21. Did it Work

<br/>

### 22. Abstracted Query Method

```
CREATE TICKET
UPDATE TICKET
```

<br/>

### 23. [Optional] Versioning Without Update-If-Current

<br/>

### 24. Testing Listeners

<br/>

### 25. A Complete Listener Test

<br/>

### 26. Testing the Ack Call

<br/>

### 27. Testing the Ticket Updated Listener

<br/>

### 28. Success Case Testing

<br/>

### 29. Out-Of-Order Events

<br/>

### 30. The Next Few Videos

<br/>

### 31. Fixing a Few Tests

<br/>

### 32. Listeners in the Tickets Service

<br/>

### 33. Building the Listener

<br/>

### 34. Strategies for Locking a Ticket

<br/>

![Application](/img/pic-19-04.png?raw=true)

<br/>

### 35. Reserving a Ticket

<br/>

### 36. Setup for Testing Reservation

<br/>

### 37. Test Implementation

    $ cd tickets
    $ npm run test

<br/>

### 38. Missing Update Event

<br/>

### 39. Private vs Protected Properties

<br/>

### 40. Publishing While Listening

<br/>

    $ cd tickets
    $ npm update @grider-ms-tickets/common

<br/>

    $ cd orders
    $ npm update @grider-ms-tickets/common

<br/>

### 41. Mock Function Arguments

    $ cd tickets
    $ npm run test

Sometime tests works sometime not. I did not find the reason. When run only one can works.

<br/>

### 42. Order Cancelled Listener

<br/>

### 43. A Lightning-Quick Test

<br/>

### 43. A Lightning-Quick Test

<br/>

### 44. Don't Forget to Listen!

<br/>

### 45. Rejecting Edits of Reserved Tickets

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/
