# Left Over

## Understanding Azure Architecture and Management

## Azure Resources

### Azure Resource Manager Templates

Rather than deploying manually using CLI/portal/PowerShell, Azure supports infrastructure-as-code practices for repeatable deployments.

**Azure Resource Manager Templates** are JSON files defining config in a declarative syntax. The template is deployed using Azure CLI, Azure PowerShell commands, Azure Portal, Azure Pipelines, or Github. This also enforces an order, so dependencies are resolved.



## Other

### Telemetry

**Azure Service Health**: This resource shows a global view of Azure's status, as well your services, and Azure's planned maintenance. Alerts can be set up, and they get sent to an **action group**. Action groups are people who get notified of service alerts. 

**Insights** are a way to group a bunch of metrics in one place. They are more generalized than the Azure Monitor data, which is by resource. Insights exist for Applications, VMs, Storage, Networks, etc. 



### Azure Advisor

**Azure Advisor** is a tool for optimizing Azure resources, looking at your telemetry and usage. Suggestions are across 5 categories:

- Cost (reducing cost)

- Security

- Reliability

- Operational excellence

- Performance




# Azure Srvices and Concepts 2 (Platform Solutions) 

## Windows Virtual Desktop

**Windows Virtual Desktop** offers desktop virtualization and works across many devices. Features:

- **Speed**: The physical location can be close to the end user to minimize load times. WVD has technology to improve login times, and dynamically attaches storage.
- **Security**: Can enforce MFA, role-based access controls. Hardware and data/apps are separated.
- **Management**: offers tools known to sys admins (Azure AD, for example), load balancing across multiple virtual desktops. WVD supports multiple users on one physical virtual desktop.



## DevOps Solutions in Azure

### GitHub + Actions

GitHub actions enables workflow automation based on triggers (CI/CD) and allows creating a **toolchain** (a step-based CI/CD workflow).

Azure DevOps and **GitHub** are available both on premises and in the cloud. Both tools can work together, so code can be managed on GitHub and PM on Azure DevOps.



## Azure Dedicated Host

**Azure Dedicated Host** provides dedicated hardware for hosting, for compliance reasons, running all your VMs on a single machine. A *host group* is a collection of dedicated hosts.
This allows setting maintenance schedules.
 Cost is per-host, irrespective of how many VMs are deployed to the host. 



## Security Posture

**Security Posture** refers to an org's ability to respond to security threats; three pillars (CIA): *confidentiality*, *integrity* and *availability*.
*Confidentiality*: follow principle of least privilege
*Integrity*: Make sure data cannot be changed without proper controls
*Availability*: System should be functioning and accessible by authorized users