# [Stephen Grider] Microservices with Node JS and React [ENG, 2020]

# CI/CD

<br/>

### 01. Development Workflow

<br/>

![Application](/img/pic-23-01.png?raw=true)

<br/>

### 02. Git Repository Approaches

<br/>

![Application](/img/pic-23-02.png?raw=true)

<br/>

### 03. Creating a GitHub Action

<br/>

### 04. Adding a CI Test Script

<br/>

### 05. Running Tests on PR Creation

<br/>

### 06. Output of Failing Tests

<br/>

### 07. Running Tests in Parallel

<br/>

### 08. Verifying a Test Run

<br/>

### 09. Selective Test Execution

<br/>

### 10. Deployment Options

<br/>

![Application](/img/pic-23-03.png?raw=true)

<br/>

### 11. Creating a Hosted Cluster

<br/>

### 12. Reminder on Kubernetes Context

<br/>

### 13. Reminder on Swapping Contexts

    $ doctl kubernetes cluster kubeconfig save ticketing

    $ kubectl config view

    // local
    $ kubectl config use-context my-profile

    // digital ocean
    $ kubectl config use-context <do_context>

<br/>

### 14. The Deployment Plan

<br/>

![Application](/img/pic-23-04.png?raw=true)

<br/>

### 15. Building an Image in an Action

Github --> Settings --> Secretes --> Add

First secret:

Name: DOCKER_USERNAME

Second secret:

Name: DOCKER_PASSWORD

<br/>

### 16. Testing the Image Build

<br/>

### 17. Restarting the Deployment

<br/>

DO -> API -> Generate Token

Name: Github-Acceess_Token

<br/>

Github --> Settings --> Secretes --> Add

Third secret:

Name: DIGITAL_OCEAN_ACCESS_TOKEN

<br/>

### 18. Applying Kubernetes Manifests

<br/>

### 19. Prod vs Dev Manifest Files

<br/>

### 20. Manual Secret Creation

    $ kubectl create secret generic jwt-secret --from-literal=JWT_KEY=<any_random_string>
    $ kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=<stripe_secret_key>

<br/>

### 21. Don't Forget Ingress-Nginx!

<br/>

https://kubernetes.github.io/ingress-nginx/deploy/#digital-ocean

<br/>

    $ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-0.32.0/deploy/static/provider/do/deploy.yaml

<br/>

### 22. Testing Automated Deployment

<br/>

### 23. Additional Deploy Files

<br/>

### 24. A Successful Deploy!

<br/>

### 25. Buying a Domain Name

<br/>

![Application](/img/pic-23-05.png?raw=true)

<br/>

### 26. Configuring the Domain Name

<br/>

Digital Ocean --> Networking --> create --> Load Balancer

Digital Ocean --> Networking --> Add a domain

<br/>

### 27. I Really Hope This Works

<br/>

### 28. Next Steps

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
