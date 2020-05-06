# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

# 04. Orchestrating Collections of Services with Kubernetes

**I recommend to use "react-scripts": "3.4.0". With "react-scripts": "3.4.1" there were errors with starting "client" container in minikube.**

<br/>

![Application](/img/pic-04-01.png?raw=true)

<br/>

![Application](/img/pic-04-02.png?raw=true)

<br/>

![Application](/img/pic-04-03.png?raw=true)

<br/>

![Application](/img/pic-04-04.png?raw=true)

<br/>

![Application](/img/pic-04-05.png?raw=true)

<br/>

![Application](/img/pic-04-06.png?raw=true)

<br/>

![Application](/img/pic-04-07.png?raw=true)

<br/>

### Skaffold installation

    $ curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64

    $ chmod +x skaffold
    $ sudo mv skaffold /usr/local/bin

<br/>

### Start minikube

```
$ {
minikube --profile my-profile config set memory 8192
minikube --profile my-profile config set cpus 4

// minikube --profile my-profile config set vm-driver virtualbox
minikube --profile my-profile config set vm-driver docker

minikube --profile my-profile config set kubernetes-version v1.18.2
minikube start --profile my-profile
}
```

<br/>

    // Enable ingress
    $ minikube addons --profile my-profile enable ingress

<br/>

    // Delete
    // $ minikube --profile my-profile stop && minikube --profile my-profile delete

<br/>

    $ minikube --profile my-profile ip
    172.17.0.2

<br/>

    $ sudo vi /etc/hosts

```
#---------------------------------------------------------------------
# Minikube
#---------------------------------------------------------------------
172.17.0.2 posts.com
```

<br/>

    $ cd skaffold

    $ docker login
    $ docker info | sed '/Username:/!d;s/.* //'

    $ skaffold dev

<br/>

browser --> posts.com

<!--
    $ kubectl rollout restart deployment [depl_name]
    $ kubectl get events --sort-by=.metadata.creationTimestamp
--->

<br/>

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/
