# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

# 20. Worker Services

<br/>

### 01. The Expiration Service

<br/>

![Application](/img/pic-20-01.png?raw=true)

<br/>

### 02. Expiration Options

<br/>

![Application](/img/pic-20-02.png?raw=true)

<br/>

### 03. Initial Setup

    $ cd expiration

copy some codes from tickets

    $ npm install --save bull @types/bull

<br/>

### 04. A Touch of Kubernetes Setup

<br/>

### 05. File Sync Setup

    $ cd skaffold
    $ skaffold dev

<br/>

### 06. Listener Creation

<br/>

### 07. What's Bull All About

<br/>

![Application](/img/pic-20-03.png?raw=true)

<br/>

### 08. Creating a Queue

<br/>

![Application](/img/pic-20-04.png?raw=true)

<br/>

### 09. Queueing a Job on Event Arrival

<br/>

### 10. Testing Job Processing

```
CREATE TICKET
```

<br/>

```
// CREATE ORDER
$ curl \
--insecure \
--cookie /tmp/cookies.txt \
--data '{"ticketId":"5ec43c86298c01001811bbb7"}' \
--header "Content-Type: application/json" \
--request POST https://ticketing.dev/api/orders \
| python -m json.tool
```

<br/>

**response:**

```
{
    "expiresAt": "2020-05-19T20:23:05.480Z",
    "id": "5ec43ca50880b600192cf43d",
    "status": "created",
    "ticket": {
        "id": "5ec43c86298c01001811bbb7",
        "price": 10,
        "title": "concert",
        "version": 0
    },
    "userId": "5ec43c7cb0fd040023683c8b",
    "version": 0
}
```

<br/>

![Application](/img/pic-20-05.png?raw=true)

<br/>

### 10. Testing Job Processing

<br/>

### 11. Delaying Job Processing

<br/>

### 12. Defining the Expiration Complete Event

    $ cd expiration
    $ npm update @grider-ms-tickets/common

<br/>

    $ cd orders
    $ npm update @grider-ms-tickets/common

<br/>

### 13. Publishing an Event on Job Processing

<br/>

### 14. Handling an Expiration Event

<br/>

### 15. Emitting the Order Cancelled Event

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/
