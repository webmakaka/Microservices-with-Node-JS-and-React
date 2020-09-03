# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

# 13. Create-Read-Update-Destroy Server Setup

<br/>

### 01. Ticketing Service Overview

<br/>

### 02. Project Setup

    $ cd app
    $ mkdir tickets

copy some files from auth project

    $ npm install

<br/>

### 03. Running the Ticket Service

    $ skaffold dev

<br/>

### 04. Mongo Connection URI

<br/>

### 05. Quick Auth Update

<br/>

### 06. Test-First Approach

    $ cd tickets
    $ npm run test

<br/>

### 07. Creating the Router

<br/>

### 08. Adding Auth Protection

<br/>

### 09. Faking Authentication During Tests

<br/>

### 09. Faking Authentication During Tests

<br/>

### 10. Building a Session

<br/>

### 11. Testing Request Validation

<br/>

### 12. Validating Title and Price

<br/>

### 13. Reminder on Mongoose with TypeScript

<br/>

![Application](/img/pic-13-01.png?raw=true)

<br/>

### 14. Defining the Ticket Model

<br/>

### 15. Creation via Route Handler

<br/>

### 16. Testing Show Routes

<br/>

### 17. Unexpected Failure!

<br/>

### 18. What's that Error!

<br/>

### 19. Better Error Logging

    $ cd common
    $ npm run publish

<br/>

    $ cd tickets
    $ npm update @grider-ms-tickets/common

<br/>

### 19. Better Error Logging

<br/>

### 20. Complete Index Route Implementation

<br/>

### 21. Ticket Updating

<br/>

### 22. Handling Updates

<br/>

### 23. Permission Checking

<br/>

### 23. Permission Checking

<br/>

### 24. Final Update Changes

<br/>

### 25. Manual Testing

<br/>

```
// SIGN UP
$ curl \
--insecure \
--cookie-jar /tmp/cookies.txt \
--data '{"email":"marley@example.com", "password":"123456789"}' \
--header "Content-Type: application/json" \
--request POST https://ticketing.dev/api/users/signup \
| python -m json.tool
```

<br/>

```
// SIGN IN
$ curl \
--data '{"email":"marley@example.com", "password":"123456789"}' \
--header "Content-Type: application/json" \
--request POST http://ticketing.dev/api/users/signin \
| python -m json.tool
```

<br/>

```
// GET CURRENT USER
$ curl \
--insecure \
--cookie /tmp/cookies.txt \
--header "Content-Type: application/json" \
--request GET https://ticketing.dev/api/users/currentuser \
| python -m json.tool
```

<br/>

```
// CREATE TICKET
$ curl \
--insecure \
--cookie /tmp/cookies.txt \
--data '{"title":"concert", "price":10}' \
--header "Content-Type: application/json" \
--request POST https://ticketing.dev/api/tickets \
| python -m json.tool
```

<br/>

**response:**

```
{
    "__v": 0,
    "id": "5ebaa8a74cea0900186b7ec8",
    "price": 10,
    "title": "concert",
    "userId": "5ebaa6a3fc342b0023ded8a4"
}
```

<br/>

```
// GET TICKET
$ curl \
--insecure \
--header "Content-Type: application/json" \
--request GET https://ticketing.dev/api/tickets/5ebaa8a74cea0900186b7ec8 \
| python -m json.tool
```

<br/>

**response:**

```
{
    "__v": 0,
    "id": "5ebaa8a74cea0900186b7ec8",
    "price": 10,
    "title": "concert",
    "userId": "5ebaa6a3fc342b0023ded8a4"
}
```

<br/>

```
// GET ALL TICKET
$ curl \
--insecure \
--header "Content-Type: application/json" \
--request GET https://ticketing.dev/api/tickets/ \
| python -m json.tool
```

<br/>

```
// UPDATE TICKET
$ curl \
--insecure \
--cookie /tmp/cookies.txt \
--data '{"title":"new concert", "price":100}' \
--header "Content-Type: application/json" \
--request PUT https://ticketing.dev/api/tickets/5ebaa8a74cea0900186b7ec8 \
| python -m json.tool
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
