DevOps course from [Udemy](https://www.udemy.com/course/devops-fundamentals-for-beginners/)

## Introduction

Traditionally, developers and database devs are on one side, and build engineers, DBAs etc are on the other. In **devops**, this is barrier is broken.

DevOps is a cultural midset and has a few principles:

1. **Incremental**: divide tasks into small pieces and deliver one task at a time
2. **Iterative**: Agile-like mindset for the SDLC in design, code, build, test, deploy, monitor
3. **Automated**: automate as much as possible to avoid manual tasks
4. **Continuous**: deploy continuously, automate as much as possible
5. **Collaborative**: bring together devs and ops
6. **Self-Service**: increase autonomy for everyone by reducing dependencies

Serverless and microservices architectures are inspired from DevOps way of thinking.



Terminology:

- **Continuous Build**: build the code as soon as code is pushed
- **Continuous Testing**: run tests and generate reports automatically
- **Continuous Integration**: the combination of building and testing continuously, along with other tools like code quality, linting, code coverage, etc.
- **Continuous Delivery/Deployment**: code is deployed automatically - this is the goal
- **Monitoring**: gathering data on how the app is performing

**DevOps Pipeline** - the devops pipeline refers to the process by which CI/CD is accomplished. The automated building, testing, provisioning and deployment of software is the pipeline.

## CI/CD Tools

A CI/CD tool integrates with source code control, DB integration, testing, deployment, etc. **Jenkins** is an open source CI/CD tool for making a Devops pipeline.

**Chef** is a deployment tool for insfrastructure management (or infrastructure management). There is a Chef master and numerous Chef client nodes; each node has a role and environment (e.g. DB/web/app-server and staging/prod). You interact with Chef by passing it **Cookbooks**, which consist of **Recipes** (basically scripts for what Chef should do). Chef manages the nodes.