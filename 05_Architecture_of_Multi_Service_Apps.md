# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

# 05. Architecture of Multi-Service Apps

<br/>

![Application](/img/pic-05-01.png?raw=true)

<br/>

![Application](/img/pic-05-02.png?raw=true)

<br/>

![Application](/img/pic-05-03.png?raw=true)

<br/>

![Application](/img/pic-05-04.png?raw=true)

<br/>

![Application](/img/pic-05-05.png?raw=true)

<br/>

    $ npm install -g typescript

<br/>

    $ cd app
    $ mkdir auth
    $ npm init -y
    $ npm install --save typescript  express @types/express
    $ npm install --save-dev ts-node-dev

    $ tsc --init
    $ npm start

<br/>

    $ cd skaffold
    $ skaffold dev

<br/>

<br/>

    $ minikube --profile my-profile ip
    172.17.0.2

<br/>

    $ sudo vi /etc/hosts

```
#---------------------------------------------------------------------
# Minikube
#---------------------------------------------------------------------
172.17.0.2 ticketing.dev
```

<br/>

https://ticketing.dev/api/users/currentuser

<br/>

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/
