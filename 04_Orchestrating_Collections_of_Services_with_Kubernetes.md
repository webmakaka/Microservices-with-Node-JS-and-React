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

posts.com

Some issue with **CORS** when i try to create a comment. Cant' find solution.

<br/>

```
Access to XMLHttpRequest at 'http://post.com/posts/3394784f/comments' from origin 'http://posts.com' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

<br/>

    $ kubectl get pods
    NAME                               READY   STATUS    RESTARTS   AGE
    client-depl-5454895c86-s2dqn       1/1     Running   0          3m41s
    comments-depl-547864dc5d-r8wm7     1/1     Running   0          36m
    event-bus-depl-75b5644d4d-lntxg    1/1     Running   0          22m
    moderation-depl-749d7f798f-95x2n   1/1     Running   0          36m
    posts-depl-d69765958-t7rhc         1/1     Running   0          36m
    query-depl-b98c98c55-snrjz         1/1     Running   0          36m

<!--
    $ kubectl rollout restart deployment [depl_name]
    $ kubectl get events --sort-by=.metadata.creationTimestamp
--->

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/
Любые вопросы на русском: https://jsdev.ru/chat/
