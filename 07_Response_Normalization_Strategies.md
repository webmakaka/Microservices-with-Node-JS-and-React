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

### 06. Surprising Complexity Around Errors

<br/>

### 07. Other Sources of Errors

<br/>

### 08. Solution for Error Handling

<br/>

### 09. Building an Error Handling Middleware

<br/>

### 10. Communicating More Info to the Error Handler

<br/>

### 11. Encoding More Information In an Error

<br/>

### 12. Subclassing for Custom Errors

<br/>

### 13. Determining Error Type

<br/>

### 14. Converting Errors to Responses

<br/>

### 15. Moving Logic Into Errors

<br/>

### 16. Verifying Our Custom Errors

<br/>

### 17. Final Error Related Code

<br/>

### 18. How to Define New Custom Errors

<br/>

### 19. Uh Oh... Async Error Handling

    $ cd app/auth
    $ npm install --save express-async-errors

<br/>

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/
Любые вопросы на русском: https://jsdev.ru/chat/
