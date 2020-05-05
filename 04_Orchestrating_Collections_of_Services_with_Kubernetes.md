# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

# 04. Orchestrating Collections of Services with Kubernetes

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

![Application](/img/pic-04-06.png?raw=true)

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

minikube --profile my-profile config set vm-driver virtualbox
// minikube --profile my-profile config set vm-driver docker

minikube --profile my-profile config set kubernetes-version v1.16.9
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
    192.168.99.136

<br/>

    $ sudo vi /etc/hosts

```
#---------------------------------------------------------------------
# Minikube
#---------------------------------------------------------------------
192.168.99.136 posts.com
```

<br/>

    $ cd skaffold

    $ docker login
    $ docker info | sed '/Username:/!d;s/.* //'

    $ skaffold dev

<br/>

    $ kubectl get pods
    NAME                               READY   STATUS      RESTARTS   AGE
    client-depl-85df57d697-hrvr8       0/1     Completed   2          34s
    comments-depl-547864dc5d-r8wm7     1/1     Running     0          15m
    event-bus-depl-75b5644d4d-lntxg    1/1     Running     0          101s
    moderation-depl-749d7f798f-95x2n   1/1     Running     0          15m
    posts-depl-d69765958-t7rhc         1/1     Running     0          15m
    query-depl-b98c98c55-snrjz         1/1     Running     0          15m

<br/>

Some issue with **client-depl**. I do not know the reason. Possible, on start nodemon server, the container finishes the work.

<br/>

posts.com

<!--
    $ kubectl rollout restart deployment [depl_name]
    $ kubectl get events --sort-by=.metadata.creationTimestamp
--->

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/
Любые вопросы на русском: https://jsdev.ru/chat/
