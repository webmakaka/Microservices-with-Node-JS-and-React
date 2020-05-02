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


    $ curl \
    --request POST http://localhost:4000/posts/ \
    --header "Content-Type: application/json" \
    | python -m json.tool

<br/>

    $ curl \
    --request GET http://localhost:4000/posts/ \
    --header "Content-Type: application/json" \
    | python -m json.tool

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/