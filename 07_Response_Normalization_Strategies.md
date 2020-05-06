# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

# 07. Response Normalization Strategies

<br/>

### 01. Creating Route Handlers

<br/>

### 02. Scaffolding Routes

<br/>

### 03. Adding Validation

    $ cd app/auth
    $ npm install --save express-validator

<br/>

### 04. Handling Validation Errors

```
$ curl \
--data '{"email":"notValidEmail", "password":"1"}' \
--header "Content-Type: application/json" \
--request POST http://ticketing.dev/api/users/signup \
| python -m json.tool
```

**response:**

```
[
    {
        "location": "body",
        "msg": "Email must be valid",
        "param": "email",
        "value": "notValidEmail"
    },
    {
        "location": "body",
        "msg": "Password must be between 4 and 20 characters",
        "param": "password",
        "value": "1"
    }
]
```

<br/>


---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/
Любые вопросы на русском: https://jsdev.ru/chat/
```
