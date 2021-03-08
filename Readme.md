# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

## Build, deploy, and scale an E-Commerce app using Microservices built with Node, React, Docker and Kubernetes

<br/>

### [My Updatable Version of the final project from this course](https://github.com/webmakaka/Microservices-with-Node-JS-and-React-Improved)

<hr/>

<br/>

## How to run apps

I am working in ubuntu linux 18.04.

Minikube, Kubectl, Docker, Skaffold should be installed.

<br/>

### Skaffold installation

    $ curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64

    $ chmod +x skaffold
    $ sudo mv skaffold /usr/local/bin

<br/>

### Run minikube

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

    $ minikube --profile my-profile ip
    172.17.0.2

<br/>

    $ sudo vi /etc/hosts

```
#---------------------------------------------------------------------
# Minikube
#---------------------------------------------------------------------
172.17.0.2 posts.com
172.17.0.2 ticketing.dev
```

<br/>

## How to run the final app1

<br/>

    $ 04_Orchestrating_Collections_of_Services_with_Kubernetes
    $ cd skaffold

    $ docker login

Need to update my docker image name webmakaka/grider-ms-app1\*\*\* to your in scripts from skaffold and k8s folders.

    $ skaffold dev

<br/>

    $ kubectl get pods
    NAME                              READY   STATUS    RESTARTS   AGE
    client-depl-99b7fcdcb-jhttp       1/1     Running   0          3m22s
    comments-depl-69578db79c-jzdnh    1/1     Running   0          3m22s
    event-bus-depl-7c5b75b7f4-m5qw6   1/1     Running   0          3m22s
    moderation-depl-d7b49bfbc-cgl2l   1/1     Running   0          3m22s
    posts-depl-78647cffd4-7gtzx       1/1     Running   0          3m22s
    query-depl-656f9b6b58-bv7g7       1/1     Running   0          3m22s

<br/>

browser --> posts.com

<br/>

## How to run the final app2

<br/>

    $ kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

    // <STRIPE_SECRET_KEY> from stripe.com
    $ kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=<STRIPE_SECRET_KEY>

<br/>

    $ cd 22_Back_to_the_Client
    $ cd skaffold

    $ docker login

Need to update my docker image name webmakaka/grider-ms-app2\*\*\* to your in scripts from skaffold and k8s folders.

    $ skaffold dev

<br/>

    $ kubectl get pods
    NAME                                           READY   STATUS    RESTARTS   AGE
    auth-deployment-57d779fd9-48s9v                1/1     Running   0          24s
    auth-mongo-deployment-579c6dbd8f-69jbv         1/1     Running   0          23s
    client-deployment-f5cfc5b8d-k2lxp              1/1     Running   0          23s
    expiration-deployment-6bb67856b4-jkkbl         1/1     Running   0          23s
    expiration-redis-deployment-5b58b869fd-hmq5f   1/1     Running   0          23s
    nats-deployment-76479997ff-lpss8               1/1     Running   0          23s
    orders-deployment-5c68dff5c9-dq6hl             1/1     Running   0          23s
    orders-mongo-deployment-6896c8b9-42vpd         1/1     Running   0          23s
    payments-deployment-68d4c7f4ff-nfsxb           1/1     Running   0          23s
    payments-mongo-deployment-c89cb4fc7-4ggn7      1/1     Running   0          23s
    tickets-deployment-7b746fff9-tvhzw             1/1     Running   0          23s
    tickets-mongo-deployment-54f456bd95-hv9fb      1/1     Running   0          22s

<br/>

chrome browser --> https://ticketing.dev/

<br/>

type: **thisisunsafe** in the browser window with security warning.

<br/>

Expected result:

![Application](/img/pic-final-01.png?raw=true)

<br/>

### Delete minikube with project

    $ minikube --profile my-profile stop && minikube --profile my-profile delete

<hr/>

<br/>

## Development step by step

<br/>

## App1

### [02. A Mini-Microservices App](./02_A_Mini_Microservices_App.md)

### 03. Running Services with Docker (Docker Basics. Nothing Interesting)

### [04. Orchestrating Collections of Services with Kubernetes](./04_Orchestrating_Collections_of_Services_with_Kubernetes.md)

<br/>

## App2

### [05. Architecture of Multi-Service Apps](./05_Architecture_of_Multi_Service_Apps.md)

### 06. Leveraging a Cloud Environment for Development (Optional Section, Skipped)

### [07. Response Normalization Strategies](./07_Response_Normalization_Strategies.md)

### [08. Database Management and Modeling](./08_Database_Management_and_Modeling.md)

### [09. Authentication Strategies and Options](./09_Authentication_Strategies_and_Options.md)

### [10. Testing Isolated Microservices](./10_Testing_Isolated_Microservices.md)

### [11. Integrating a Server-Side-Rendered React App](./11_Integrating_a_Server_Side_Rendered_React_App.md)

### [12. Code Sharing and Reuse Between Services](./12_Code_Sharing_and_Reuse_Between_Services.md)

### [13. Create-Read-Update-Destroy Server Setup](./13_Create_Read_Update_Destroy_Server_Setup.md)

### [14. NATS Streaming Server - An Event Bus Implementation](./14_NATS_Streaming_Server_An_Event_Bus_Implementation.md)

### [15. Connecting to NATS in a Node JS World](./15_Connecting_to_NATS_in_a_Node_JS_World.md)

### [16. Managing a NATS Client](./16_Managing_a_NATS_Client.md)

### [17. Cross-Service Data Replication In Action](./17_Cross_Service_Data_Replication_In_Action.md)

### [18. Understanding Event Flow](./18_Understanding_Event_Flow.md)

### [19. Listening for Events and Handling Concurrency Issues](./19_Listening_for_Events_and_Handling_Concurrency_Issues.md)

### [20. Worker Services](./20_Worker_Services.md)

### [21. Handling Payments](./21_Handling_Payments.md)

### [22. Back to the Client](./22_Back_to_the_Client.md)

### [23. CI/CD (I will not deploy app to clouds)](./23_CI_CD.md)

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
