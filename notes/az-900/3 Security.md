# Azure Identity Services

## Authentication

### Introduction

**Authentication** is about proving who/what something is (their identity), and **authorization** grants them some level of access to a resource.

> Authentication is about identity and authorization is about actions. Authentication occurs first, then authorization.

For example, when travelling, passport is authentication and a visa is authorization. In Azure, authentication is provided by **Azure Active Directory (AD)**, and authorization is by **Role Based Access Control**.



There are three products by Microsoft for authentication:

1. **Azure Active Directory** - new cloud-based single sign-on
2. **Active Directory (Domain Services)** - old on-premises authentication 
3. **Azure Active Directory Connect** - marries the above two, connecting IDs in the cloud AD to the on premises AD, and syncs changes between them.



### Azure Active Directory

**Azure Active Directory** is the core of user authentication for Azure (and O365, Dynamics365). It has these features: authentication, single sign on, application management and device management. Both internal (within the org) and external (M365 or third party apps) are supported using **Single Sign On** (uses one secure login across apps).

An **Azure Active Directory Tenant** is listing of authenticate-able users, and it is unique and private to an org. Azure AD comprises:

- Does not have policies
- Does not provide trust relationships
- Registers computers and users



**Multi Factor Authentication** prompts users for something they know, something they are and something they have. Azure AD MFA has three tiers:

1. Azure AD Free for normal users - gives mobile app as a second factor
2. Azure AD Free for Admin Users - gives phone call or SMS as a second factor, as well
3. Azure AD Premium (P1 and P2) allows more granular configuration of MFA through **conditional access policies**, gives reports, fraud alerts, and adds support for trusted IPs.

**Conditional Access** is a tool for conditionally denying or allowing access to resources, based on *identity signals*: who the user is, where they are, what device they're using or what they are trying to access. It requires Azure AD P1 or P2



# Azure Governance and Policy

## Intro

**Governance Tools** are needed to ensure that requirements for rules and policies are enforced in an Azure setting - industry and corporate standards.

Microsoft's **Cloud Adoption Framework** sets forth guidance to help enforce standards when going to the cloud. The **Cloud Adoption Framework** involves:

1. Defining a strategy
2. Making plans
3. Ready the organization 
4. Adopting the cloud - consisting of migrating and innovating
5. Governing and managing - 



## Role Based Access Control (RBAC)

Azure provides shared access in the **Access Control (IAM)** part of the Azure Portal - different users have different needs for accessing things (admin vs. read-only). **Role Based Access Control** has several components:

- **Roles** are a collection of permissions
- Then, these roles can be applied to individual users or groups. Members of a group inherit all roles' permissions in that group, added together

There are three key roles used in Azure, but there are dozens of built in roles available:

1. **Owner** - can read/write everything and change others' roles
2. **Contributor** - can read/write everything, but can't give or revoke access
3. **Reader** - can read only but can't make any changes

These roles can be applied to a resource, resource-group, or subscription level for Azure resources. For example, within resource groups, a role assignment can be added for a given set. 



## Locks

**Locks** prevent deletion or editing of a resource, resource group or subscription. Locks can be applied to just prevent deletion of resources from a resource group, or you can make the resource group completely read only. Two types of locks:

- CanNotDelete
- ReadOnly

To make changes to a locked resource, the lock must first be removed. If a resource group is locked, all children resources are locked as well.



## Tags

Tags add metadata for resources for cost management, operations management (separate SLAs), security (public vs private), compliance (which security policy in place), etc.

Tags consist of name (*case insensitive*) and value (*case sensitive*), and one or more tags can be applied to any resource. Tags *are not inherited by children*!



## Azure Policy

An **Azure Policy** is a collection of rules, and each policy is assigned to a scope (like Azure subscription or a resource group). The purpose of policies is to ensure governance is being adhered to.

Policies definitions (rules) can control which locations can/should/must be used, which resource types, VM types, tags, etc. Azure has a bunch of policies built in and custom policies can be based off of these.

A *policy assignment* is attaching a policy to a resource/subscription. Policies can be mandated so that resources cannot be created without adhering to the policy. Like locks, policies are inherited by children.

Policies can be collected together into **initiatives**. Initiatives can be applied to resources, so that their underlying policies all apply.



## Azure Blueprints

**Azure blueprints** are a concept that is parent to ARM templates, for orchestrating deployment of resources. Blueprints can include policies/initiatives/roles and ARM templates.

Unlike ARM Templates which simply deploy resources, blueprints are living - changing the blueprint after it is deployed will change the deployed resources' properties; the deployed resources are associated with the blueprint that made them. Blueprints are **versioned** - each change requires a version.

Each component in a blueprint is an **artifact** (e.g. a policy).



# Securing Azure Networks

## Intro to Security

There are a few security tools for networks: Azure Firewall, Azure Web Application Firewall, Azure Network Security Groups (and Application Security Groups), Azure DDoS Protection, and User Defined Routes.

**Defense in Depth** refers to protecting data in a layered fashion:

<img src="assets/2-defense-depth.png" style="zoom: 67%;" />

Perimeter -  protect against large scale attacks like DDoS, and apply perimeter firewalls - tools like Azure Firewall and Azure DDoS Protection
Network - limit communication between machines in internal network, restricting access unless needed. Segment the network into many subnets



**Security Posture** refers to an org's ability to respond to security threats; three pillars (CIA): *confidentiality*, *integrity* and *availability*.
*Confidentiality*: follow principle of least privilege
*Integrity*: Make sure data cannot be changed without proper controls
*Availability*: System should be functioning and accessible by authorized users



## Azure Firewall

Firewalls block incoming/outgoing traffic based on rules. **Azure Firewall** is a managed network security device to protect Azure Virtual Networks. Firewall is the central and first line of defense in security (higher level than Network Security Groups).

- Azure Firewall is *stateful*. It looks at the context around traffic, not just packets.
- Works across subscriptions and virtual networks
- Creates static public IP for network resources
- Integrates with Azure Monitor for logging and analytics
- Inbound and outbound filtering

**Azure Web Application Firewall** is a related firewall, but that is not as complex as Azure Firewall and only exists for Azure Application Gateway.



## Azure DDoS Protection

**Azure DDoS Protection** comes in two levels - *basic and standard* - and is meant for protecting against DDoS attacks. It is an always-on service..

- **Basic**: always on monitoring DDoS threats and free.
- **Standard**: adds on real time metrics, improved reporting and connection to DDoS experts for supporting Azure Virtual Networks. Costs based on usage.

DDoS Protection provides prevention of these:

- *Volumetric Attacks* - flooding the network with a lot of traffic
- *Protocol Attacks* - uses layer 3 and layer 4 weaknesses
- *Application Layer*/*Resource Layer* - targets web app packets to disrupt transmission between hosts.



## Network Security Groups & Application Security Groups

Azure provides **Network Security Groups** for filtering traffic (based on inbound and outbound lists) within an Azure Virtual Network - like internal firewall:

- A network security group operates on a subnet level or even a Virtual Machine level.
- NSGs are stateful (if something is allowed inbound, its response will automatically be allowed back outbound)
- Each rule takes a priority (100 to 4096), and incoming traffic is evaluated based on this priority list

NSGs can get complex because of lots of rules and the need to individually/manually add new subnets to the NSG once new subnets are created.

**Application Security Groups** are an abstraction above NSGs (an ASG must be added to an NSG). They are designed to group things by type (eg. web server or application server, rather than naming individual VMs or databases). Then, auto-scaling resources will automatically be added to the security groups.

The key here is that individual resources can be added to ASGs upon creation or after creation, whereas to add a resource to an NSG, you must go to the NSG and add it there.



## Other (DDoS Protection / User Defined Routes)

Azure **User Defined Routes** allow defining CUSTOM routes within Azure (i.e. traffic should flow from which subnet to which). They are defined using Route Tables.

---

**Forced Tunneling** can be used to route all traffic back to on-premises (in case there is compliance or hardware based security on premises).



# Azure Security and Reporting Tools

**Azure Information Protection** is used to classify documents and emails with labels - things like secret, classified, etc.

- Labels stay with the document forever (either as a header or a watermark in the document)
- Permissions are applied based on the label to enforce what can be done with the document
- Labels can be manually or automatically applied



**Azure Advanced Threat Protection** is about *users*. Detects and investigates attacks and suspicious user-generated events: reconnaissance events, compromised credentials, etc.



**Azure Key Vault** is used for centralizing application secrets - keys, secrets and SSL/TLS certificates. Certificates can be added that are signed by a *certificate signing authority*. 

- Uses *hardware* for encrypting secrets (*hardware security modules*).
- Adds logging for tracking access of secrets
- Each app has its own separate key vault that is isolated
- Comes in two tiers: standard and premium



**Azure Security Center** is a central monitoring area for *security posture* for all services - both Azure and on-premises. It:

- Provides recommendations based on current configuration
- Applies security settings to new resources when they come online
- Assesses existing and new threat sources
- Reports on compliance - *security score*
- Comes in *two tiers* - free and standard (need to pay for this)
- Makes recommendations for security related to compute, data/storage, networking Azure services - low, medium and high severity. *Workflow Automation* allows fixing some problems automatically.

For PaaS services Azure Security Center automatically works. For Non-Azure services, a monitoring agent can be deployed.



**Azure Sentinel** is a Security Information and Event Management (SIEM) system - meant to be operated AT SCALE. It aggregates data from different sources and has threat detection and response. It:

- Collects cloud data *at scale*, from multiple clouds and both on-premises and on cloud.
- Detects and investigate threats using AI and user-set rules
- Fix common issues using built-in orchestration 
- Notify using **Azure Monitor Workbooks** - these are workflows that can send an email/notify admins
- Has connectors for plugging in many sources



**Azure Dedicated Host** provides dedicated hardware for hosting, for compliance reasons, running all your VMs on a single machine. A *host group* is a collection of dedicated hosts.
This allows setting maintenance schedules.
 Cost is per-host, irrespective of how many VMs are deployed to the host. 

# Compliance and Data Protection

Regulatory compliance is ensuring that standards/laws are followed - HIPAA, PCI, GDPR, FedRAMP (US government security standard), and ISO 27001. For privacy, there are:

1. **Microsoft Privacy Statement** which outlines how Microsoft uses customer data 
2. **Online Services Terms** which is an agreement between the MS and the customer.

The **Azure Security Center** keeps security information about Microsoft for legal people.

**Azure Service Trust Portal** is an informational portal that provides details on Microsoft's implementation of processes for being compliant. Tools like:

- Compliance Manager - risk assessment tool
- Trust Documents - security and compliance design
- Industry/Region specific compliance docs
- My Library - proof for compliance
- **Microsoft Trust Center** - Microsoft's compliance reports, audits, FAQ, compliance guide, etc.

Compliance is meant to be *implemented by Microsoft, as well as the customer* in tandem - Microsoft does a part and the customer has to do a part. For example, the Microsoft Trust Center requires the organization to self-assess to become fully compliant.



**Azure Special Regions** are different from regular regions. Normally, regions are picked for speed. Special regions exist for compliance or legal reasons. Three categories; you must apply to Microsoft to use these:

1. US Government (under **Azure Government**; addition compliance certifications offered)
2. China (managed in partnership with *21Vianet*)
3. Germany (managed by TSystems via a data trustee model, complying with data laws)