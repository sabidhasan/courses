# Pricing and Cost Management

## Subscriptions and Management Groups

All subscriptions are tied to an Azure Account, and that account is responsible for paying the bill. Each subscription must trust one **Azure Active Directory** but one AAD can be trusted by multiple subscriptions. There are a few types of subscriptions:

1. **Free** - $200 Azure credit that must be used in 30 days. 25 services free forever and popular services free for 12 months
2. **Pay as you go** - monthly bill. This also offers discounts for organizations that buy in volume
3. **Student** - no credit card with $100 of credit for use in 12 months
4. **Enterprise Agreement** - for companies



Management groups are scoped at one level above subscriptions - they are there for applying governance (policies/initiatives). All accounts start with the **Root Management Group**.



## Azure Costs

For buying Azure services, there are a few methods:

1. **Enterprise agreement** - custom priced for large organizations, for a minimum of 3 years
2. **Direct** from Microsoft - Microsoft provides support and bill
3. Indirect **Cloud Solution Provider** - bill and support from CSP who help with provisioning. 



Cost can be affected by a couple factors:

1. **Location** - which region the service is deployed in
2. **Resource Type** - each resource type has different costs
3. **Service** - or your specific agreement (CSP vs Microsoft direct vs enterprise)
4. **Traffic** - **ingress** (inbound) traffic is free, but pulling data out (**egress**/outbound) incurs a cost.



A **zone** is a geographical grouping of Azure regions for billing, for traffic travelling between data centers in different zones. Three zones:

1. Zone 1 - US, Europe
2. Zone 2 - Asia
3. Zone 3 - Africa and South America



Some ways to minimize costs:

- **Azure Reservations** - Azure will give cheaper price if you promise to use a certain amount by prepaying.
- **Azure Cost Management** and **Azure Advisor**- ACM is a portal for forecasting and cost analysis. Azure Advisor has advice on general Azure usage but it also shows cost
- **Quotas** and **Spending Limits** - hard limits on resources. Quotas are for Microsoft to plan data center capacity and spending limits are for users.
- **Azure Hybrid Benefit** - Azure gives a discount if you come with your own Windows license.
- **Tags** - track where costs are being incurred



Two pricing calculators (before you have migrated to the cloud) are available:

1. **Azure Pricing Calculator** - estimate the monthly/annual cost of Azure products before moving to the cloud after adding what resources you need. It also has *reference architectures* for common scenarios.
2. **Total Cost of Ownership** (**TCO**) calculator - compares how CapEx and OpEx change over time vs. a current on-premises solution. *Doesn't require an Azure subscription to use*. TCO costs are verified by Nucleus Research, a third party company.



# Azure  Support Options

There are five support plans:

1. **Basic Support** - free 24x7 access to billing support, online self-help, Microsoft white papers and support forums
2. **Developer** - non production, provides general architectural guidance in business hours
3. **Standard** - meant for production, and is 24x7 available; provides some architectural guidance and seminars
4. **Professional** - for business critical needs
5. **Direct** - provides custom-designed architecture, dedicated *technical account manager*, on demand training

Opening a new support request can be done from the Portal,

The **Azure Knowledge Center** contains some common questions and answers about Azure products.



# Azure Services

## Calculating SLAs

A **Service Level Agreement** (SLA) is a legal *commitment between a service provider and a customer*. The SLA outlines what the service provider will be providing for the customer. For Azure, there are two separate commitments:

- Uptime (how much time a service is functional)
- Latency (how fast a service responds)

Each service in Azure has a different SLA. Free services don't have SLAs.

A **composite SLA** involves more than one service's SLAs - this is common as an application has more than one service. To increase an SLA, different architecture decisions can be taken (for example, using backup storage).

To calculate the SLA, *multiply* the individual SLAs (if there are multiple of one resource, like 2 VMs, multiply both individually).



## Service Lifecycle

Services are constantly changing. **Azure Previews** are feature previews for evaluation of new features. There are two kinds:

- **Public Preview** - any Azure customer can use the preview. These are for evaluation so no support and *no SLAs*.
- **Private Preview** - invited beta from Microsoft. 

**General Availability (GA)** is the stage a feature goes to when it is past the preview stage. These have SLAs, technical support and is intended for prod.

**Azure Updates** provides latest announcements on Azure.