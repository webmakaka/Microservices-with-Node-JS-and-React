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

![Application](/img/pic-14-03.png?raw=true)

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

<br/>

    $ cd nats-test
    $ npm run publish

<br/>

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/
