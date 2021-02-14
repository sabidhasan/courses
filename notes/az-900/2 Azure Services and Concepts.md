# Azure Services and Concepts 2 (Platform Solutions) 

## Windows Virtual Desktop

**Windows Virtual Desktop** offers desktop virtualization and works across many devices. Features:

- **Speed**: The physical location can be close to the end user to minimize load times. WVD has technology to improve login times, and dynamically attaches storage.
- **Security**: Can enforce MFA, role-based access controls. Hardware and data/apps are separated.
- **Management**: offers tools known to sys admins (Azure AD, for example), load balancing across multiple virtual desktops. WVD supports multiple users on one physical virtual desktop.



## Artificial Intelligence

There are three AI offerings:

1. Machine Learning
2. Cognitive Services
3. Azure Bot Service



### Machine Learning

Machine learning in Azure is done in **Machine Learning Studio**, separate from the Azure portal. There are three ways to interface with ML in Azure:

1. **Notebooks** - the traditional way using Jupyter notebooks
2. **Automated ML** - uses machine learning to do machine learning
3. **Designer** - a UI for discarding data, performing regression, training models and evaluating it



### Cognitive Services

**Cognitive Services** are *general purpose* pre-built machine learning models that are ready to use via SDK. Cognitive services can be grouped together where one feeds into the next. They come in five areas:

1. **Computer Vision** - image recognition, categorization, OCR, Face API, and a video indexer for parsing videos
2. **Speech** - speech to text, speaker recognition
3. **Language** - LUIS (understands and ``infers meaning from text), sentiment analysis, translation
4. **Decision** - Anomaly API for detecting time-stamped data, content moderation, personalization



### Azure Bot Service

**Azure Bot Service** is built on cognitive services to provide a virtual assistant that uses natural language. Built bots can be deployed to Azure App Service or a Function App



## DevOps Solutions in Azure

### Azure DevOps

**Azure DevOps** evolved from on-premises enterprise tools and now is a SaaS that contains a code repository (Git-based) and other project management tools like Kanban board, reporting, tests, and builds, in addition to CI/CD.

It is a very feature-rich and complete enterprise solution. 



### GitHub + Actions

GitHub actions enables workflow automation based on triggers (CI/CD) and allows creating a **toolchain** (a step-based CI/CD workflow).

Azure DevOps and **GitHub** are available both on premises and in the cloud. Both tools can work together, so code can be managed on GitHub and PM on Azure DevOps.



### Azure DevTest Labs

**Azure DevTest Labs** allows creating a "lab" where developers provision their own VMs for dev/sandbox/testing, while only using pre-selected base images, limiting number of VMs, etc. Auto-start and auto-shutdown can be configured.



## Insight and Monitoring

Azure has three tools for monitoring:

1. **Azure Advisor** - a personalized consultant for Azure, that looks at your usage. It gives specific actions to take or that it can take for you. It acts in five areas:
   Reliability - reducing potential downtime
   Cost - reducing spend
   Security - detecting potential threats
   Performance - improving speed
   Operational Excellence - everything else

2. **Azure Monitor** - this is for monitoring *metrics* and *logging data* from across YOUR APPS, including their OS, apps, databases, VMs, containers, Kubernetes, Azure resources and subscriptions. It can also ingest metrics from apps on Azure sent via code.

   Azure Monitor is also used internally by **Azure Application Insights**. 

   It then visualizes, analyzes and sends alerts to you.

3. **Azure Service Health** - this gives advisories/notifications for Azure services' health tailored to the services the user is using. It has service issues, planned maintenance, health advisories and incident reports.



## Internet of Things (IoT)

Refers to devices and sensors connected to the internet, which send data to backend, which can generate insights/alerts. Azure offers three tools:

1. **Azure IoT Central** 
2. **Azure IoT Hub**
3. **Azure Sphere**



### Azure IoT Hub

- Managed service that is more of a lower-level solution for IoT
- Central platform service for managing IoT devices and ingesting data. It automatically pulls in devices as they connect. Devices can upload files/data. 
- IoT Hub reacts to events from devices - e.g. a device sends temperature reading, and Hub turns on fan.
- Supports *bi directional* communication - updating devices, ingesting data



### Azure IoT Central

- Managed app platform (PaaS) that allows quick prototyping with IoT. Built on top of IoT Hub, by adding an easy to use dashboard.
- Comes with pre-built templates for industries' common problems and scenarios, as well as support for common IoT devices called *Device Templates*



### Azure Sphere

- Focus is on **security**
- Consists of both *hardware and software* - device hardware, operating system, method for sending data back to cloud
- Hardware: Azure Sphere Micro-Controller Unit (MCU) is the hardware
- Software: includes a Linux operating system for the MCU for sending data back, as well as Azure Sphere Security Service (AS3; this ensures device security is not compromised and authenticates the device)
- Can interface with IoT Central or IoT Hub



## Big Data in Azure

Gathering, organizing and getting insights from lots of data has uses: sales/marketing, design strategy, and planning. Three Vs of Big Data:

1. **Volume**: scale of information
2. **Velocity**: speed at which information moves through the system. Need to process in real time
3. **Variety**: data sources can come from relational DBs, streaming sources, data lakes, and types of data can differ.

Massive parallel processing is key. There are four steps to processing:

1. **Ingest** - ETL (extract, transform and load) that modifies, validates, categorizes and persists data, while ingesting from numerous sources like IoT, social media, etc. 
2. **Persist** - persisting is done in Azure Blob Storage or **Azure Synapse**, designed for storing Big Data
3. **Analyze** - both batch and real time processing (**MapReduce** or **Apache Spark**). **Azure Stream Analytics** is an Azure service for helping with this 
4. **Visualize** - getting insight from data in reports (**PowerBI**)

Azure has fourkey offerings for processing big data:

1. **Azure HDInsight** - Microsoft's older and most flexible managed platform for running pipelines using Hadoop, Spark and Kafka. Provides compute nodes that can auto-scale 
2. **Azure DataBricks** - DataBricks is a company outside of MS. Based on **Apache Spark**, as it is made by founders of Spark. Azure DataBricks creates Spark clusters and monitors them
3. **Azure Synapse Analytics** - formally called Azure SQL Data Warehouse; this is an ordered place for processed data - this is the newest big data service. Synapse has storage and analytics components (marries SQL and Spark technologies and pipelines for orchestration). Integrates with PowerBI. Runs both as managed or as provisioned
4. **Azure Data Lake Analytics** - runs complex queries using SQL and C#. This is a different kind of data storage and processing paradigm.


