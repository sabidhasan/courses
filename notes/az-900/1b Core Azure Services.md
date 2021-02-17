# Solutions in Azure

## IoT Services

Refers to devices and sensors connected to the internet, which send data to backend, which can generate insights/alerts. Azure offers three tools:

1. **Azure IoT Central** 
2. **Azure IoT Hub**
3. **Azure Sphere**



**IoT Hub**:

- allows *bi-directional communication* between the device and cloud - data can come from device, and IoT Hub can respond back to the device.
- Managed service (*PaaS*) that is for developers ("Hub = Hackers") - many SDKs for devs and supports numerous protocols
- Integrates with Azure services for Insights and metrics



**IoT Central**:

- Connects, manages and monitors IoT devices

- Fully managed platform (*SaaS*)

- Comes with pre-built templates for industries' common scenarios and support for common IoT devices called *Device Templates*

- Uses IoT Hub under the hood, and adds an easy to use dashboard

  

**Azure Sphere**

- Focus is on **security**
- Consists of *hardware and software* - device hardware, operating system, method for sending data back to cloud
- *Hardware*: **Azure Sphere Micro-Controller Unit** (MCU) is the simple chips for building IoT hardware
- *Software*: includes OS for sending data and **Azure Sphere Security Service** (AS3; this ensures device security is not compromised, handles updates and authenticates devices)
- Can interface with IoT Central or IoT Hub



## Big Data

Gathering, organizing and getting insights from lots of data has uses. Three Vs of Big Data:

1. **Volume**: how big (GB, PB, etc.)
2. **Velocity**: speed at which information moves through the system - real time, batched, etc.
3. **Variety**: data sources can come from relational DBs, streaming sources, data lakes...

Massive parallel processing is key. There are four steps to processing:

1. **Ingest** - ETL (extract, transform and load) that modifies, validates, categorizes and persists data
2. **Transform** - persisting is done in Azure Blob Storage or **Azure Synapse**, designed for storing Big Data
3. **Store** - both batch and real time processing (**MapReduce** or **Apache Spark**). **Azure Stream Analytics** is an Azure service for helping with this 
4. **Serve** - getting insight from data in reports (**PowerBI**)



**Synapse Analytics**:

- Big data *PaaS* platform for data transformation.
- Has a few components:
  - **Apache Spark**
  - **Synapse SQL** (both dedicated and ad-hoc)
  - Pipelines (for ETL)
  - **Synapse Studio** for a unified UI for doing all this 



**Azure HD Insight**:

- *PaaS* big data service that is older but most flexible, for running pipelines
- Has support for a TON of open source technologies: HBase, Spark, Hadoop, Kafka, Hive, etc.



**Azure DataBricks**:

- Big data collaboration platform (*PaaS*)
- Created by the creator of **Apache Spark** (DataBricks is a company outside of Microsoft), so it supports Apache Spark only
- Azure DataBricks creates Spark clusters and monitors them



## Azure AI

There are three AI offerings:

1. Machine Learning
2. Cognitive Services
3. Azure Bot Service



**Azure Machine Learning** is a *PaaS* service in a separate portal for conducting machine learning and managing the ML lifecycle. It has:

- **Machine Learning Workspace** - manages all ML workflows, and contains the studio
- **Machine Learning Studio** which is a portal for ML development:
  - **Notebooks** for doing ML in the traditional way using Jupyter
  - **Automated ML** - uses pre-built machine learning models
  - **Designer** - a UI for building, evaluating and deploying models

---

**Cognitive Services** are *general purpose* pre-built ML models. Can be grouped, such that one feeds into the next.

---

**Azure Bot Service** is built on cognitive services to provide a virtual assistant that uses natural language. Built bots can be deployed to Azure App Service or a Function App



## Azure Serverless

Three services:

- **Azure Functions** - small, stateless app dev platform that runs as web service based on events. Supports auto-scaling.
- **Azure Logic Apps** - PaaS service for building workflows using a visual interface that ties together other services. Has lots of **connectors** for other services.
- **EventGrid** - Fully managed PubSub service for routing messages. Ingests events from other Azure services or from custom apps (*topics*), and then broadcasts events to all *subscribers*.  



## Azure DevOps

> **DevOps** is a set of practices combining development and operations. DevOps shortens SDLC while providing CI/CD and high qiuality.

Two DevOps solutions exist on Azure - **Azure DevOps** and **Azure DevTest Labs**.

**Azure DevOps** evolved from on-premises enterprise tools (Team Foundation Server and Visual Studio Team Services) and now is a SaaS that contains a bunch of tools as well as a marketplace with more solutions:

- Code Repository (git based)
- Boards (Kanban)
- Pipelines for CI/CD
- Artifacts (npm/pip/Maven/nuget replacement)
- Test Plans

---

**Azure DevTest Labs** allows creating a "lab" where developers or testers provision their own VMs for dev/testing. It allows selecting from preset images and tools (*artifacts*).

Admins can set *policies* to limit VM images, number of VMs, etc. Auto-start and auto-shutdown can be configured.



# Azure Management Tools

## Azure Tools

There are four main tools for interacting with Azure:

1. **Azure Portal** - easy to use visual web-based portal for self-service for simple tasks
2. **Azure PowerShell** - one of the ways for accessing Azure via CLI, designed for scripting and automation. Cross-platform support, but good for Windows professionals.
3. **Azure CLI** - other way for accessing Azure via Bash-based CLI. Designed for Linux people, though this is cross platform
4. **Azure Cloud Shell** - Runs PowerShell or Bash CLI in the cloud. Access using the app, shell.azure.com, from the portal, VS Code or the MS documentation.



## Azure Advisor, Monitor  and Service Health

**Azure Advisor** is a proactive, personalized consultant for Azure. It gives specific actions to take or that it can take for you. It acts in five areas:

- *Reliability* - reducing potential downtime
- *Cost* - reducing spend (e.g. VM size, reserved instances)
- *Security* - detecting potential threats (e.g. MFA)
- *Performance* - improving speed (SKU sizes )
- *Operational Excellence* - everything else (e.g. subscription limits, health)

---

**Azure Monitor** is for monitoring *metrics* and *logging data* from across YOUR APPS, including their OS, apps, databases, VMs, containers, Kubernetes, Azure resources and subscriptions.

It ingests custom metrics sent via code from apps as well as automated that is sent by VMs. etc.

Monitor can then visualize, analyze and send alerts to you.

---

**Azure Service Health** - this gives advisories/notifications for Azure services' health tailored to the services the user is using. It has service issues, planned maintenance, health advisories and incident reports as well as more details relating to those services.

---

There is also **Azure Status**, which is a more generic, public health status for Azure services.