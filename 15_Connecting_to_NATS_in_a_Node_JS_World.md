# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

# 15. Connecting to NATS in a Node JS World

<br/>

### 01. Reusable NATS Listeners

<br/>

### 02. The Listener Abstract Class

<br/>

### 03. Extending the Listener

<br/>

### 04. Quick Refactor

<br/>

### 05. Leveraging TypeScript for Listener Validation

<br/>

### 06. Subjects Enum

<br/>

### 07. Custom Event Interface

<br/>

### 08. Enforcing Listener Subjects

<br/>

### 09. Enforcing Data Types

<br/>

### 10. Where Does this Get Used

<br/>

### 11. Custom Publisher

<br/>

### 12. Using the Custom Publisher

<br/>

### 13. Awaiting Event Publication

<br/>

### 14. Common Event Definitions Summary

<br/>

![Application](/img/pic-15-01.png?raw=true)

<br/>

![Application](/img/pic-15-02.png?raw=true)

<br/>

### 14. Common Event Definitions Summary

<br/>

### 15. Updating the Common Module

    $ cd common
    $ npm install --save node-nats-streaming

<br/>

    $ cd tickets/
    $ npm update @grider-ms-tickets/common

    $ cd nats-test/
    $ npm install --save @grider-ms-tickets/common

<br/>

### 16. Restarting NATS

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
