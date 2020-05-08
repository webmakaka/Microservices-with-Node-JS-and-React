# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

# 09. Authentication Strategies and Options

<br/>

### 01. Fundamental Authentication Strategies

<br/>

![Application](/img/pic-09-01.png?raw=true)

<br/>

![Application](/img/pic-09-02.png?raw=true)

<br/>

![Application](/img/pic-09-03.png?raw=true)

<br/>

### 02. Huge Issues with Authentication Strategies

<br/>

![Application](/img/pic-09-04.png?raw=true)

<br/>

![Application](/img/pic-09-05.png?raw=true)

<br/>

![Application](/img/pic-09-06.png?raw=true)

<br/>

![Application](/img/pic-09-07.png?raw=true)

<br/>

### 03. So Which Option

<br/>

![Application](/img/pic-09-08.png?raw=true)

<br/>

### 04. Solving Issues with Option #2

<br/>

![Application](/img/pic-09-09.png?raw=true)

<br/>

![Application](/img/pic-09-10.png?raw=true)

<br/>

### 05. Reminder on Cookies vs JWT's

<br/>

![Application](/img/pic-09-11.png?raw=true)

<br/>

![Application](/img/pic-09-12.png?raw=true)

<br/>

![Application](/img/pic-09-13.png?raw=true)

<br/>

### 06. Microservices Auth Requirements

<br/>

### 07. Issues with JWT's and Server Side Rendering

<br/>

![Application](/img/pic-09-14.png?raw=true)

<br/>

![Application](/img/pic-09-15.png?raw=true)

<br/>

### 08. Cookies and Encryption

<br/>

### 09. Adding Session Support

    $ cd app/auth
    $ npm install --save cookie-session @types/cookie-session

<br/>

### 10. Generating a JWT

    $ cd app/auth
    $ npm install --save jsonwebtoken @types/jsonwebtoken

<br/>

```
$ curl \
--insecure \
--cookie-jar /tmp/cookies.txt \
--data '{"email":"marley6@example.com", "password":"123456789"}' \
--header "Content-Type: application/json" \
--request POST https://ticketing.dev/api/users/signup \
| python -m json.tool
```

<br/>

### 11. JWT Signing Keys

    $ cat /tmp/cookies.txt

```

#HttpOnly_ticketing.dev	FALSE	/	TRUE	0	express:sess	eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJalZsWWpVMk56RmpPV0kwTmpObU1ERmhPVGN5TWprME5TSXNJbVZ0WVdsc0lqb2liV0Z5YkdWNU5rQmxlR0Z0Y0d4bExtTnZiU0lzSW1saGRDSTZNVFU0T0RrME5qY3hObjAuS3ZzV2NLbVN6VmNlWEhrdFFNNnU3cGtxWlFETVU2NC0tMGlPWTlVcE5mQSJ9
```

https://www.base64decode.org/

decode

```
{"jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjU2NzFjOWI0NjNmMDFhOTcyMjk0NSIsImVtYWlsIjoibWFybGV5NkBleGFtcGxlLmNvbSIsImlhdCI6MTU4ODk0NjcxNn0.KvsWcKmSzVceXHktQM6u7pkqZQDMU64--0iOY9UpNfA"}
```

https://jwt.io/

<br/>

decode with key: 'asdf'

<br/>

**response:**

<br/>

```
{
  "id": "5eb5671c9b463f01a9722945",
  "email": "marley6@example.com",
  "iat": 1588946716
}
```

<br/>

![Application](/img/pic-09-16.png?raw=true)

<br/>

### 12. Securely Storing Secrets with Kubernetes

<br/>

![Application](/img/pic-09-17.png?raw=true)

<br/>

### 13. Creating and Accessing Secrets

    $ kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

<br/>

    $ kubectl get secrets
    NAME                  TYPE                                  DATA   AGE
    default-token-dmr6t   kubernetes.io/service-account-token   3      2d9h
    jwt-secret            Opaque                                1      7s

<br/>

### 14. Accessing Env Variables in a Pod

<br/>

### 15. Common Response Properties

<br/>

### 16. Formatting JSON Properties

```
$ curl \
--data '{"email":"marley7@example.com", "password":"123456789"}' \
--header "Content-Type: application/json" \
--request POST http://ticketing.dev/api/users/signup \
| python -m json.tool
```

<br/>

**response:**

```
{
    "email": "marley7@example.com",
    "id": "5eb5997b5fcfb902b17eefc6"
}
```

<br/>

### 17. The Signin Flow

<br/>

### 18. Common Request Validation Middleware

<br/>

### 19. Sign In Logic

<br/>

### 20. Quick Sign In Test

```
$ curl \
--data '{"email":"marley7@example.com", "password":"123456789"}' \
--header "Content-Type: application/json" \
--request POST http://ticketing.dev/api/users/signin \
| python -m json.tool
```

<br/>

**response:**

```
{
"email": "marley7@example.com",
"id": "5eb5997b5fcfb902b17eefc6"
}
```

<br/>

### 21. Current User Handler

<br/>

### 22. Returning the Current User

```
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
$ curl \
--data '{"email":"marley@example.com", "password":"123456789"}' \
--header "Content-Type: application/json" \
--request POST http://ticketing.dev/api/users/signin \
| python -m json.tool
```

<br/>

```
$ curl \
--insecure \
--cookie /tmp/cookies.txt \
--header "Content-Type: application/json" \
--request GET https://ticketing.dev/api/users/currentuser \
| python -m json.tool
```

**response:**

```
{
    "currentUser": {
        "email": "marley@example.com",
        "iat": 1588965708,
        "id": "5eb5b14c97bd760b4fc2c798"
    }
}
```

<br/>

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/
Любые вопросы на русском: https://jsdev.ru/chat/
