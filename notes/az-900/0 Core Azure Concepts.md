# Introduction to Cloud Computing

> Cloud computing is the delivery of computing services over the internet, using a pay as you go model

Azure is used by 85% of F500 companies. AZ-900 covers the basics of what the cloud is, why it's useful and where MS offerings fit in. Azure has **100 services**, and relies on **virtualization** (using **hypervisor**).

**Cloud computing** enables companies to consume a resource - virtual machine, storage or networking - like a utility. The provider owns a data center and deals with upkeep, networking, and hardware.



# Factors for Cloud Services

Cloud service factors:

- **Scalability** - ability of the system to scale up or down as needed
- **Elasticity** - ability to be scalable automatically based on use
- **Agility** - scaling changes are quick
- **Fault Tolerance** - ability for system to be available in spite of failures
- **Disaster Recovery** - services recover from NATURAL or HUMAN disasters by replicating app in different Azure Regions.
- **High Availability** - system has high uptime, without being down 



# Consumption Based Model and CapEx/OpEx

The cloud operates on a **consumption based model**. There is no upfront cost, no wasted resources and you pay for what you use. Each resource's cost is made up of its components (compute, storage, networking, etc. are all separate for a VM).

CapEx and OpEx are two models for buying infrastructure:

- **Operating Expenditures** - renting infrastructure - the costs can be written off every year in tax
- **Capital Expenses** - these expenses last the company a long time and depreciate. Initial investment is high, but maintenance cost is low, and tax needs to be written off over time.

|                   | CapEx     | OpEx              |
| ----------------- | --------- | ----------------- |
| Upfront cost      | High      | None              |
| Ongoing cost      | Low       | Depends           |
| Tax deduction     | Over time | Same year         |
| Early Termination | No        | Terminate anytime |
| Maintenance       | Required  | Not required      |
| Value over time   | Decreases | No change         |



# Types of Cloud Computing Services

There are three main types of cloud services. What differentiates these is how much you manage vs. how much cloud provider manages:

1. Software as a Service (**SaaS**) - provider handles everything - hardware, OS, and apps. You provide the data. These run via the web browser.
2. Platform as a Service (**PaaS**) - provider handles hardware and OS, but you handle data and build apps
3. Infrastructure as a Service (**IaaS**) - provider handles hardware, but you handle OS, data and build apps

SaaS - example Office365, MS Teams, OneDrive
PaaS - example Azure Logic Apps or Azure Functions
IaaS - example Azure VMs

SaaS uses:	sophisticated applications, mobilizing workforce
PaaS uses:	analytics or BI, development of apps 
IaaS uses:	 testing and development, storage and backups, big workload

A related concept is **serverless computing**; here, the cloud provider runs a function on a managed way only when an event or trigger occurs.



# Cloud Computing Deployment Models

There are a few deployment models for where data is held:

- **Public Cloud** - clients share the same physical hardware, securely in the backend on the cloud data center. Services are offered over the public internet.
- **Private Cloud** - hardware belongs to only one company, but requires big CapEx investment.
- **Hybrid Cloud** - combination of the above two, with orchestration between the two so that data can be shared.

Most Azure customers are in the public cloud mode, but Azure allows on-premises as well. Azure offers a government-specific Azure Community Cloud for government-specific data privacy.


