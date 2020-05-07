# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

# 08. Database Management and Modeling

<br/>

### 01. Creating Databases in Kubernetes

    $ cd app/auth
    $ npm install --save mongoose

<br/>

    $ kubectl get pods
    NAME                                     READY   STATUS    RESTARTS   AGE
    auth-deployment-5985769fb8-j5k79         1/1     Running   0          57s
    auth-mongo-deployment-55d6d9cc49-jrzsc   1/1     Running   0          57s

<br/>

### 02. Connecting to MongoDB

    $ cd app/auth
    $ npm install --save @types/mongoose

<br/>

### 03. Understanding the Signup Flow

<br/>

![Application](/img/pic-08-01.png?raw=true)

<br/>

### 04. Getting TypeScript and Mongoose to Cooperate

<br/>

### 05. Creating the User Model

<br/>

### 06. Type Checking User Properties

<br/>

### 07. Adding Static Properties to a Model

<br/>

### 08. Defining Extra Document Properties

<br/>

### 09. What's That Angle Bracket For

<br/>

### 10. User Creation

<br/>

```
$ curl \
--data '{"email":"marley@example.com", "password":"123456789"}' \
--header "Content-Type: application/json" \
--request POST http://ticketing.dev/api/users/signup \
| python -m json.tool
```

<br/>

**response:**

```
{
    "__v": 0,
    "_id": "5eb40ea00b8b66048cc1564e",
    "email": "marley@example.com",
    "password": "123456789"
}
```

<br/>

### 11. Proper Error Handling

<br/>

### 14. Adding Password Hashing

<br/>

### 13. Reminder on Password Hashing

<br/>

### 15. Comparing Hashed Password

<br/>

### 16. Mongoose Pre-Save Hooks

```
$ curl \
--data '{"email":"marley1@example.com", "password":"123456789"}' \
--header "Content-Type: application/json" \
--request POST http://ticketing.dev/api/users/signup \
| python -m json.tool
```

<br/>

**response:**

```
{
    "__v": 0,
    "_id": "5eb4248c1650af0359d5170f",
    "email": "marley1@example.com",
    "password": "8229ab93d0751b4cbd0f396fd8e701e36089fff0d0c848d5617e65cee9eb830fc7619135058815873d24a4adcbd1779cff1c8efec79a38647810e5b14f15ae33.ef63680bfb5151ed"
}

```

<br/>

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/
Любые вопросы на русском: https://jsdev.ru/chat/
