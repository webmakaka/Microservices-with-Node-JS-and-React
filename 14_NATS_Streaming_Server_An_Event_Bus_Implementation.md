# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

# 14. NATS Streaming Server - An Event Bus Implementation

<br/>

### 01. What Now

<br/>

### 02. Three Important Items

<br/>

![Application](/img/pic-14-01.png?raw=true)

<br/>

### 03. Creating a NATS Streaming Deployment

<br/>

### 04. Big Notes on NATS Streaming

<br/>

![Application](/img/pic-14-02.png?raw=true)

<br/>

![Application](/img/pic-14-03.png?raw=true)

<br/>

### 05. Building a NATS Test Project

<br/>

![Application](/img/pic-14-04.png?raw=true)

<br/>

    $ cd app
    $ mkdir nats-test
    $ cd nats-test
    $ npm init -y
    $ npm install --save node-nats-streaming ts-node-dev typescript @types/node

<br/>

    $ tsc --init

<br/>

### 06. Port-Forwarding with Kubectl

```
$ kubectl get pods
NAME                                        READY   STATUS    RESTARTS   AGE
auth-deployment-59d887f775-h9nxq            1/1     Running   0          109m
auth-mongo-deployment-d79ff8f7c-lj92m       1/1     Running   0          109m
client-deployment-65576ffc88-vxvv4          1/1     Running   0          109m
nats-deployment-6bf654c867-cvc2q            1/1     Running   0          109m
tickets-deployment-5c57b69d6c-kbb6c         1/1     Running   0          109m
tickets-mongo-deployment-869f7b4c75-9q48f   1/1     Running   0          109m
```

<br/>

    $ kubectl port-forward nats-deployment-6bf654c867-cvc2q 4222:4222
    $ kubectl port-forward nats-deployment-6bf654c867-cvc2q 8222:8222

<br/>

    $ cd nats-test
    $ npm run publish

<br/>

### 07. Publishing Events

<br/>

![Application](/img/pic-14-05.png?raw=true)

<br/>

### 08. Listening For Data

<br/>

    $ npm run listen

<br/>
    
    console with publisher: rs + [Enter]

<br/>

### 09. Accessing Event Data

<br/>

![Application](/img/pic-14-06.png?raw=true)

<br/>

### 10. Client ID Generation

<br/>

### 11. Queue Groups

<br/>

![Application](/img/pic-14-07.png?raw=true)

<br/>

### 12. Manual Ack Mode

<br/>

### 13. Client Health Checks

browser

    http://localhost:8222/streaming
    http://localhost:8222/streaming/channelsz?subs=1

<br/>

### 14. Graceful Client Shutdown

<br/>

### 15. Core Concurrency Issues

<br/>

### 16. Common Questions

<br/>

### 17. [Optional] More Possible Concurrency Solutions

<br/>

### 18. Solving Concurrency Issues

<br/>

![Application](/img/pic-14-08.png?raw=true)

<br/>

![Application](/img/pic-14-09.png?raw=true)

<br/>

### 19. Concurrency Control with the Tickets App

<br/>

![Application](/img/pic-14-10.png?raw=true)

<br/>

![Application](/img/pic-14-11.png?raw=true)

<br/>

### 20. Event Redelivery

<br/>

### 21. Durable Subscriptions

<br/>

![Application](/img/pic-14-12.png?raw=true)

<br/>

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/
