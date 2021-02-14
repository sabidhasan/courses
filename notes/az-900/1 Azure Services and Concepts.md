# Microsoft Azure Services & Concepts (Core Azure Services)

There are four classes of services: **compute, network, storage/databases** and **platform solutions**.



## Azure Marketplace

A key offering is **Azure Marketplace**. This has a solution catalog of 8,000 listings that can be quickly leveraged for building a solution. This includes things like SAP, WordPress and others, all of which are certified for Azure.



## Azure  Compute

Azure Compute is a set of services for on-demand, pay-per-use computations. Generally, these are pay per use, easy to provision and highly available.

- **Virtual Machines** - software emulations of physical computers
- **Containers** - running Docker containers
- **Azure App Service** (PaaS offering) - hosting for web apps, API apps and mobile apps or hosting containers
- **Serverless Computing** - no underlying infrastructure



### Virtual Machines

**Azure Virtual Machines** is an IaaS providing full control over the operating system, but requires updating OS, installing software. VMs are pay-as-you-go and are familiar to administrate for admins. When creating you must provide:

- Image (the OS - Windows or Linux)
- Size of VM (RAM and storage)
- Availability (whether to use an **availability zone**)

Microsoft Marketplace offers a bunch of images that come with software preinstalled (things like SQL, Visual Studio, ArcGIS, etc.).

A **Virtual Machine Scale Set** will create a bunch of identical VMs that can auto-scale and provide redundancy.

**Azure Batch** is another VM management tool designed for big data jobs. It provisions, installs and runs compute VMs, and then scales down the pool.



### Containers

Unlike VMs which have a host OS with a **HyperV** (hypervisor) and a guest OS, containers virtualize the OS (such as Docker) thus making them lightweight. So, multiple operating systems can be emulated on a single computer.

> VMs virtualize the hardware and containers virtualize the OS.

**Azure Container Registry** is a listing of container images (these images tell you how to create a container from an image), akin to DockerHub.

**Azure Container Instances** is a PaaS offering for easy deployment for simple containers, with limited control over orchestration, security, insight, etc.

**Azure Kubernetes Service** is a container management system (**orchestration**) that can allow scaling for bigger applications, which is managed. **Pods** are a group of containers sharing resources. **Nodes** are virtual machines (host) for the pods. Azure Kubernetes Service can work with **VM Scale Sets** to auto scale the underlying VMs, as well.



### Azure App Service

**Azure App Service** is a PaaS for hosting (like traditional web hosting). Azure handles the OS and security. You can host:

- Web Apps
- Mobile Apps
- API backend apps

Originally called **Azure Websites**, hence the default URL. Requires an **App Service Plan**, which defines the pricing tier of underlying VMs (CPU, RAM, OS, region) - there is auto-scaling available, also.

App Service adds features for websites, such as ENV_VARs, authentication, state management, default document and deployment slots (for dev and prod types). AppService also has a Zip Uploader for files, Container hosting and Console access for underlying VM. 



### Serverless

There are three main types of serverless apps:

- **Azure Functions** - trigger-activated and fully managed, these run code on demand. They auto-scale and are best for short compute tasks. Functions can be stateless or **Durable Functions** which remember previous state
- **Azure Logic Apps** - design workflows. Logic Apps can call functions and other connectors. Logic Apps are stateful for the life of a request.

Triggers include: time of day, HTTP webhook, events, queues



## Azure Networking

Networking products allow creating secure networks for internal Azure resources, as well as hybrid cloud setups.

**Azure Virtual Network** (**VNET**) is the core unit for networking and links various Azure services together. Resources can be VMs, Redis Cache, app service, etc. and each has its own IP address.

- **Isolation** - VNETs are isolated from the outside world and have **subnets** with an IP range
- **Inter-Resource Communication** - Azure resources in a VNET can communicate securely with each other.
- **On-Premises Communication** or **Hybrid Cloud**- there are three ways to link on premises network using a **virtual private network** (VPN):
  1) **Point to Site VPNs** - client computer connects to Azure securely
  2) **Site to Site VPNs** - a device connects to Azure from the on premises network
  3) **Azure ExpressRoute** (also site to site) - routes traffic thru third party providers (e.g. AT&T/Verizon) and validates traffic between Azure and on-premises network. The key is that it is *completely private* but also unencrypted. Offers redundant connectivity
- **Route Network Traffic** - Route Tables define routing rules for traffic. A Border Gateway Protocol (BGP) propagates traffic rules from on-premises to Azure  
- **Filter Network Traffic** - Network Security Groups can be defined to control the security in a network

By default, devices in a virtual network cannot communicate with devices in another virtual network, and they can't be reached from the internet. Can enable **Vutual Network Peering** to allow talking to another VNet. 

**Azure Application Gateway** is a load balancer for public apps. It handles encryption, web app firewall, auto scaling, session affinity (for routing requests to one server after initial session started).

**Network Security Groups** provide simple protection for a subnet - act as simple firewalls. **Azure Firewall** is a more robust firewall.

<img src="assets/image-20210209173509310.png" alt="image-20210209173509310" style="zoom: 75%;" />



## Azure CDN

Azure provides a CDN for minimizing latency, and offloading traffic from source servers (called **origin servers**). Typically this is for static data (JS, HTML, CSS, Word document, etc.). **Edge Servers** are CDN servers that serve up data.

**Azure CDN** can connect to App Service, Blob Storage and others to cache content, in addition to any public content. Each type of content can be configured to have different expiry policy, etc.

**Dynamic Acceleration (DSA)** is designed for optimizing dynamic data. DSA does this by:

- optimizing for the shortest path in the worldwide network
- Compressing images on demand for mobile devices
- Sending HTML and images at the same time



## Data Storage in Azure

There are shared benefits to using Azure storage: replication across the world, encryption and automated backup and recovery. There are three classes of data:

1. **Relational data** (structured data): Azure SQL Database / Azure Database for MySQL / Azure Database for PostgreSQL
2. **Unstructured Data** (blob data): Azure Blob Storage, Azure File Storage, Azure Disk Storage
3. **Semi-Structured Data** (NoSQL data, uses key/value pair): Cosmos DB 



### Relational Data

There are 3 models for relational database storage:

1. **Azure SQL Database** is the flagship PaaS offering where MS handles update, patch, backup, and infrastructure and runs Microsoft SQL Server. Pricing is based on either cores of CPU or **DTU** (**Database Transaction Units**). You have limited control of the underlying VM. Updates to SQL Server come to Azure SQL Database first.
3. **Azure SQL Managed Instance** is a service that brings the benefits of PaaS - fully managed by MS - while adding some more options for the underlying database engine: character encoding, manual backups, Common Language Runtime access, cross-database views, etc.
3. **Azure Database for MySQL or PostgreSQL** is a cheaper offering. This gives SQL community edition and pay-as-you-go pricing, with decent uptime, scalability and automatic backups.
   PostgreSQL is available as **single server** and **hyperscale (Citus)** for deployment. Single server is offered at three pricing tiers and allows vertical scaling. Hyperscale is a sharded option over multiple machines, and distributes work automatically.



### Unstructured Data

**Azure Storage Accounts** allow storing unstructured data:

- **Blob Storage** ("Binary Large Object" storage) - a basic storage for key value pairs or objects. **Block Blobs** store chunks for data like binary files. **Append Blocks** are good for logs and **Page Blobs** are good for frequent read/write operations.
  Use cases: images, audio/video, archiving, data needed for analysis
- **File Storage** - file shares that support *SMB*. This is good for applications that need file access from disk, as the file storage can be mounted. Supports concurrent mounting by many clients.
- **Disk Storage** - IaaS disk storage used by virtual machines

Data is stored three times in a data center for Azure Storage, and if available, you can copy across an availability zone, or across regions. Data is available using:

- HTTPS REST endpoints using Role Based Access Control
- SDKs for many languages
- PowerShell
- Azure CLI

For authentication, we have:

- **Storage Account Key** (see all data in a storage account)
- **Shared Access Signature** tokens (this is a time-limited key that can be very specifically scoped to a specific service/folder, or the type of access like reading)

For **blob storage**, there are three access tiers: **Hot Tier**, **Cool Tier** (30 days of storage) and **Archive Tier** (180 days of storage) that are differ in cost and access needs. Access tiers exist to make Azure data storage cheaper based on access patterns. Archive tier costs money to rehydrate when needed.



### Semi-Structured Data

**CosmosDB** is a globally distributed, millisecond-response time, multi-model database. CosmosDB has a loosely typed schema.

Scales throughput and storage across Azure regions elastically, and is backed by SSD storage. Data is stored in **ARS (Atom, Record, Sequence)** format.

For querying data, SQL, MongoDB, Azure Table Storage, Gremlin, etc. API models are all supported and must be given at table creation time.

**Consistency Models** range from strong to eventual with three other levels. The different models trade off latency and/or availability. 



### Migration Options

**Azure Database Migration Service** migrates from on-premises or cloud databases into Azure. Databases can be assessed using a tool from Microsoft - **Data Migration Assistant** to determine if it is compatible with the target.

