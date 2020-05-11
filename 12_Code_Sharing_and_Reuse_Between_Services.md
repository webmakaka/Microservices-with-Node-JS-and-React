# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

# 12. Code Sharing and Reuse Between Services

<br/>

### 01. Shared Logic Between Services

<br/>

![Application](/img/pic-12-01.png?raw=true)

<br/>

### 02. Options for Code Sharing

<br/>

![Application](/img/pic-12-02.png?raw=true)

<br/>

![Application](/img/pic-12-03.png?raw=true)

<br/>

### 03. NPM Organizations

<br/>

![Application](/img/pic-12-04.png?raw=true)

<br/>

npmjs --> create organization

<br/>

![Application](/img/pic-12-05.png?raw=true)

<br/>

### 04. Publishing NPM Modules

    $ cd app
    $ mkdir common
    $ cd common/
    $ npm init -y

<br/>

    $ git init
    $ git add .
    $ git commit -m "initial commit"

<br/>

    $ npm login
    $ npm publish --acces public

<br/>

### 05. Project Setup

    $ tsc --init
    $ npm install --save-dev typescript del-cli

<br/>

**tsconfig.json**

    "declaration": true
    "outDir": "./build"

<br/>

    $ npm run build

<br/>

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/
