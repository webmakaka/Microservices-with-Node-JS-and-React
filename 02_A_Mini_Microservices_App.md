# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

# 02. A Mini-Microservices App

<br/>

![Application](/img/pic-02-01.png?raw=true)

<br/>

![Application](/img/pic-02-02.png?raw=true)


<br/>

### 02. Project Setup

    $ npm install -g nodemon

    $ cd app

    $ npx create-react-app client

<br/>

    $ cd app

    $ mkdir posts
    $ cd posts
    $ npm init -y

    $ npm install --save express cors axios
    
<br/>

    $ cd app

    $ mkdir comments
    $ cd comments
    $ npm init -y

    $ npm install --save express cors axios


<br/>

### 03. Posts Service Creation

<br/>

![Application](/img/pic-02-03.png?raw=true)

<br/>

    $ cd posts
    $ npm run start

<br/>

### 04. Testing the Posts Service

<br/>

    $ curl \
    --request POST http://localhost:4000/posts/ \
    --header "Content-Type: application/json" \
    | python -m json.tool

<br/>

    $ curl \
    --request GET http://localhost:4000/posts/ \
    --header "Content-Type: application/json" \
    | python -m json.tool


<br/>

### 05. Implementing a Comments Service

<br/>

![Application](/img/pic-02-04.png?raw=true)


<br/>

    $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

<br/>

**to solve issue:**

```
[nodemon] Internal watch failed: ENOSPC: System limit for number of file watchers reached, watch ***
```

    $ cd comments
    $ npm run start

<br/>

### 06. Quick Comments Test

<br/>

    $ curl \
    --data '{"content":"I am a comment"}' \
    --header "Content-Type: application/json" \
    --request POST http://localhost:4001/posts/123/comments \
    | python -m json.tool

<br/>

    $ curl \
    --request GET http://localhost:4001/posts/123/comments \
    --header "Content-Type: application/json" \
    | python -m json.tool


<br/>

### 08. React Project Setup

<br/>

![Application](/img/pic-02-05.png?raw=true)

<br/>

![Application](/img/pic-02-06.png?raw=true)

<br/>

    $ cd client

    $ npm install --save axios
    $ npm start

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/