# Core Azure Concepts

## Introduction to Cloud Computing

> Cloud computing is the delivery of computing services over the internet, using a pay as you go model

Azure is used by 85% of F500 companies. AZ-900 covers the basics of what the cloud is, why it's useful and where MS offerings fit in. Azure has **100 services**, and relies on **virtualization** (using **hypervisor**). A **fabric controller** and **orchestrator** are tools that run on Azure servers and guide requests to a specific server's hypervisor.

About 10-15 years ago, each company had a bunch of servers, with each having customized hardware. Each server was highly under-utilized. Next, Docker came into being and allowed **virtualization**, reducing challenges and cost. Challenges:

- High upfront cost for servers
- Space needed to host on premises
- Electricity and utility costs
- Hardware maintenance needed

The cloud is built on **virtualization**. Today, **cloud computing** enables companies to consume a compute resource - virtual machine, storage or app - like a utility. The provider owns a data center and deals with upkeep, networking, and hardware. Cloud service benefits:

- **high availability** and **reliability** (hardware failure)
- **scalability** both vertical and horizontal
- **Geo-distribution**
- **disaster recovery** (flood, etc.) 
- **Elasticity** (auto-scale to the needed resources)

**Cost**: services are billed on demand - allowing easy scaling for organizations and ability to handle varying demand. Upfront cost is reduced.

- **Operating Expenditures** (ongoing costs which can be written off every year, such as for services)
- **Capital Expenses** (these expenses last the company a long time and depreciate - example includes server infrastructure, and need to be deducted over  time).

Example: an Azure virtual machine can be configured with the cost given. An **App Service Plan**, for example, allows auto-scaling services.



## Types of Cloud Computing Services

There are three main types of cloud services. What differentiates these is how much you manage vs. how much cloud provider manages:

1. Software as a Service (**SaaS**) - provider handles everything - hardware, OS, and apps. You provide the data. These all run via the web browser.
2. Platform as a Service (**PaaS**) - provider handles hardware and OS, but you handle data and apps
3. Infrastructure as a Service (**IaaS**) - provider handles hardware, but you handle OS, data and applications

SaaS - example Office365, Sharepoint, MS Teams, Power Platform
PaaS - example Azure Logic Apps or Azure Functions or Azure Web Jobs or Azure Automation
IaaS - example Azure Compute (VMs)

IaaS uses:	 testing and development, storage and backups, big data analysis
PaaS uses:	analytics or BI, development of apps 
SaaS uses:	sophisticated applications, mobilizing workforce

A related concept is **serverless computing**; here, the cloud provider runs a function on a managed way only when an event or trigger occurs.



## Cloud Computing Deployment Models

There are a few deployment models:

- **Public Cloud** - clients share the same physical hardware, securely in the backend. Services are offered over the public internet.
- **Private Cloud** - hardware is limited to one company (like the traditional data center). Can be located onsite or in a data center.
- **Hybrid Cloud** - combination of the above two, with orchestration between the two so that data can be shared.
- **Community Cloud** - infrastructure is shared between many organizations with shared common concerns (security or compliance, for example)

Most Azure customers are in the public cloud mode, but Azure allows on-premises as well. Azure offers a government-specific Azure Community Cloud for government-specific data privacy.



## Understanding Azure Architecture and Management

### Azure Data Centers

Azure runs in data centers, which contain servers and networking components. Microsoft uses **ITPACs** -  IT Preassembled Components - are servers grouped together that allow easy plug-and-play for Microsoft.



### Azure Regions and Availability

Terms: **Azure Geography**, **Region Pair**, **Azure Region**, **Azure Availability Zone**

When creating a service, need to **choose a region**. Factors guiding a region choice:

- **Performance** - sending data around the world is slow
- **Availability** of services (not all available in all regions), or within a service the levels available (like which types of VMs in Azure VM)
- Regulatory and **compliance**

**Geographies** are typically a country or group of countries; each geography has one or more regions. Data can move between regions in a geography for redundancy purposes.



Within a specific region, we may have **Availability Zones**. Some regions don't have this, but if they exist, there are **three**. These are distinct physical locations for improved data redundancy.



**Region pairs** are groups of regions within a geography (US, or Europe). Region pairs allow replication and failover and offer high availability. 



So the breakdown is:
![](assets/region-pairs.png)



## Azure Hierarchy

Azure has a hierarchical structure consisting of: **Management Groups**, **Subscriptions**, **Resource Groups** and **Resources**.

- A **resource** is a manageable item in Azure: Web Apps, databases, VMs, etc.
- A **resource group** is a grouping of resources (at a team level), controlling the deployment and security and tracking cost for the underlying resources. A resource group is itself also a resource! Group resources logically or geographically
- A **subscription** groups together user accounts into teams, allowing organizations to apply quotas and manage cost (department-level).
- A **Management Group** allows managing access, policy and compliance across multiple subscriptions (company-level). There may be a management group WITHIN a management group for more flexibility in organization.



- An account can have multiple subscriptions. A subscription can have boundaries (**billing boundary** and **access control boundary** for controlling cost and control access, respectively). Subscriptions can also be created to separate environments, org structures, teams. Billing is highly configurable and can work with subscriptions.

- **Management groups** provide a grouping for subscriptions. A management group can have multiple children, but only one parent (which is another management group), and 6 levels of depth.

  

## Azure Resources

- One resource can only exist in **ONE resource group at once**, and can move. Resources can talk across resource groups.
- Resource groups can be in a different region than their underlying resources.
- Deleting a resource group deletes all resources within it. This is useful for experimentation.
- IAM (Identity and Access Management) offers lot of control who can do what with a resource group.
- RBAC (**Role based access control**) can be applied to a resource group.



### Azure Resource Manager (ARM)  and Azure CLI

**Azure resource manager** (ARM) is central to CRUD for resources. The Azure portal is a frontend for interfacing with the ARM. Authentication is done using **Azure Active Directory**. ARM then talks to resource services (database, VM, etc.). You can interact with ARM in four ways:

1. **Azure Portal** (the web view), but this has an online Azure CLI built in
2. **Azure PowerShell** - a set of PowerShell cmdlets
3. **Azure CLI** - from the command prompt
4. **SDKs** (Python, Go, Ruby, Java, etc.)
5. **Azure Resource Manager REST API** - the ARM is a REST API



### Azure Resource Manager Templates

Rather than deploying manually using CLI/portal/PowerShell, Azure supports infrastructure-as-code practices for repeatable deployments.

**Azure Resource Manager Templates** are JSON files defining config in a declarative syntax. The template is deployed using Azure CLI, Azure PowerShell commands, Azure Portal, Azure Pipelines, or Github. This also enforces an order, so dependencies are resolved.



## Other

### Telemetry

**Azure Service Health**: This resource shows a global view of Azure's status, as well your services, and Azure's planned maintenance. Alerts can be set up, and they get sent to an **action group**. Action groups are people who get notified of service alerts. 

**Azure Monitor** collects and analyzes metrics from Azure resources, as well as adding alerts.

**Insights** are a way to group a bunch of metrics in one place. They are more generalized than the Azure Monitor data, which is by resource. Insights exist for Applications, VMs, Storage, Networks, etc. 



### Azure Advisor

**Azure Advisor** is a tool for optimizing Azure resources, looking at your telemetry and usage. Suggestions are across 5 categories:

- Cost (reducing cost)
- Security
- Reliability
- Operational excellence
- Performance

