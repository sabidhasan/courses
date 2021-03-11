# Implementing IaaS Solutions

## Azure Virtual Machines

### Introduction

When building a VM, you must choose some parameters:

- Location: Called a **region**, where the VM is located
- CPU: Called the **size** which can be modified later
- Networking: The **network** connectivity for the VM (security, remote access, etc.)
- Operating System: An **image** that dictates the OS
- Storage: Called the **virtual disk** 

To create the VM, there are several ways:

1. Azure Portal
2. Azure CLI
3. Azure PowerShell
4. ARM Templates



**Administrator account** credentials must be provided. For Windows, this is username and password for Linux it can be SSH key also.

Provisioning VM from Portal:

- When enabling RDP (3389) access, by default all IPs are allowed
- Validation ensures the config is valid



### Deploying via Code

VMs can be deployed through code. This adds consistency, source control, automation, dev/test environment consistency. There are three ways:

1. Azure CLI
2. Azure PowerShell (Az module)
3. ARM templates



### Deploying via Azure CLI

Basic Azure CLI commands:

```bash
az login  # log into azure

# set subscription for this session
az account set --subscription "Azure Subscription"

az group list --output table  # show resource groups

az group delete --name "MyResourceGroup"
```



There are a few steps to creating a virtual machine from CLI:

- Create a resource group

  ```bash
  az group create --name "demo" --location "centralus"
  ```

- Create Virtual Machine. These are the minimum parameters

  ```bash
  az vm create \
  	--name "myvm" \
  	--resource-group "demo" \
  	--image "win2016" \
  	--admin-username "admin"
  	--admin-password "1234"
  	# or give --authentication-type "ssh"
  ```

- Ensure the remote access port (422 or 3389) is open, if this is needed

  ```bash
  az vm open-port \
  	--resource-group "demo" \
  	--name "myvm" \
  	--port "3389" # which port to open
  ```

- Retrieve public IP to connect to the VM

  ```bash
  az vm list-ip-addresses --resource-group "demo" --name "myvm"
  ```



### Deploying via Azure PowerShell

For PowerShell, the username and password are kept as variables and passed into the `New-AzVM` commandlet as a `PSCredential` object:

```powershell
New-AzResourceGroup -Name 'name' -Location 'CentralUS'

New-AzVM `
	-ResourceGroupName 'demo'
	-Name 'myvm'
	-Image 'Win2016'
	-Credential $Credentials
	-OpenPorts 3389

Get-AzPublicIpAddresses `
	-Name 'myvm'
	-ResourceGroupName 'rg' | Select-Object IpAddress
```



### Deploying via ARM Template

ARM templates are **JSON** that define a deployment. Can be exported from Azure Portal or written from scratch. The **ARM service** consumes ARM templates to provision. ARM templates have a structure, but some sections are optional:

- **Parameters** are values passed in when this template is run. The JSON defines the schema/types for the parameters. For example: location, NSG rules.

- **Variables** enable reuse throughout the template; they can be built off of parameters or just defined here and reused:

  ```json
  "nsgId": "[resourceId(resourceGroup().name, parameters('networkSecurityGroupName'))]"
  // Variable using built in function and parameter
  ```

- **Functions** can calculate on demand (e.g. generate a custom resource name based off environment)

- **Resources** are WHAT to deploy. Resources have a `dependsOn` key that a resource depends on being deployed

- **Outputs** are return values from resources that are being deployed

```json
{
    "$schema": "URL FOR SCHEMA",
    "contentVersion": "version string for version control",
    "apiProfile": "",
    "parameters": { },
    "variables": { },
    "functions": [ ],
    "resources": [ ],
    "outputs": { }
}
```

Built in functions:

- `variables('something')` gets a variable
- `parameters('some')` gets a parameter
- `concat('a', 'b')` concatenates strings



## Azure Container Registry

### Introduction to Containers

**Azure Container Registry** is a container registry based on the Docker registry. **Azure Container Instances** is a serverless way to run containers in Azure. Azure Container Instances handles the OS for you - you just deploy containers.

Container terminology:

- **Container Image** - us a binary application package
- **Container** - running instance of a container image
- **Container Registry** - share container images



### Docker and Dockerfiles

- Dockerfile starts with **FROM**, indicating the basis on which the application is installed
- Next **RUN** executes commands inside container images
- **WORKDIR** sets the working directory for instructions (it will auto `cd` to that for subsequent commands)
- **COPY** will copy from the local host directory into the container image
- **EXPOSE** exposes ports in the container to host
- **ENTRYPOINT** defines a command to run a binary when the container is started



Common Docker commands:

- `docker build --progress plain -t myimage:v1 .` will build a binary container locally. The `-t` applies a tag to image. The `--progress plain` makes it output in-container commands' output to the console when building
- `docker run --name myname -p 8080:80 --detach myimage:v1` defines ports and a name for container. The `--detach` makes image run in background
- `docker image ls`



### Azure Container Registry Overview

Builds, stores and manages container images, as part of CI/CD. There are several tiers for security, speed, etc.

**Authentication** for operations is critical - all operations require auth and headless authentication is used for automated operations. **ACR Admin** is a special account for administrative use, by default disabled. RBAC defines what can be done.

To log in use the following:

```bash
az acr login
```

| **Role**       | Intended For  |
| -------------- | ------------- |
| Owner          | Humans        |
| Contributer    | Humans        |
| Reader         | Humans        |
| AcrPush        | Headless Auth |
| AcrPull        | Headless Auth |
| AcrDelete      | Headless Auth |
| AcrImageSigner | Headless Auth |



The **ACR_NAME** is the name of your container registry and must be globally unique. To create a container registry:

```bash
az acr create \
	--resource-group myrg
	--name $ACR_NAME
    --sku Standard

az acr login --name $ACR_NAME
```



### Azure Container Registry - Pushing with Docker

To push an image into ACR, we first get the login server FQDN by calling `az acr show`, and the push is done using docker itself:

```bash
ACR_NAME = 'psdemoacr'
ACR_LOGINSERVER = $(az acr show --name $ACR_NAME --query loginServer --output tsv)

# Push into ACR
docker tag webappimage:v1 $ACR_LOGINSERVER/webappimage:v1
docker push $ACR_LOGIN_SERVER/webappimage:v1
```



To show Azure ACR listing:

```bash
az acr repository list --name $ACR_NAME --output table
# or to show tags
az acr repository show-tags --name $ACR_NAME --repository "name"
```



### Azure Container Registry - Pushing with  ACR Tasks

With ACR Tasks, no need to build Docker image locally, it sends the Dockerfile up and builds in Azure:

```bash
# Build image in Azure
az acr build \
	--image "webappimage:v1-acr-task" \
	--registry $ACR_NAME .
```



## Azure Container Instances

### Intro to Container Instances

ACI is a serverless container platform, capable of Windows and Linux containers. Can set CPU and memory requirements and use Azure Files for persistent storage. A restart policy describes what to do if the app stops.

ACI can consume containers from many container registries: e.g. Azure Container Registry or Docker Hub.



### Deploying Container Instance in Portal

The portal asks for a few types of information:

- **Basics**: subscription, resource group, a container name (anything to identify it), an image source (pre-built, DockerHub or Azure Container Registry).
- **Networking**: ports, networking type

In the portal, you need to enable *Admin User* before being able to create a container instance.



### Deploying Container Instance in Azure CLI

To create a container from a public image we use `az container create`:

```bash
az container create \
	--resource-group 'a-group' \
	--name 'psdemo-cli-hello-world'
	--dns-name-label 'psdemo-cli-hello-world'
	--image mcr.microsoft.com/azuredocs/aci-helloworld
	--ports 80
```



The DNS image name can come from Azure Container Registry but in that case need a **service principal** and auth:

- ACR Registry ID (from `az acr show`)
- A password for a ACR-compatible RBAC role obtained using `az ad sp create-for-rbac`
- SP_APPID (obtained using `az ad sp show`)

```bash
# Get ACR registry ID and login information
ACR_REG_ID=$(az acr show --name $NAME --query id --output tsv)
ACR_LOGIN_SERVER= $(az acr show --name $NAME --query loginServer --output tsv)

# Create service principal (temp username/password)
SP_NAME=acr-service-principal
SP_PW=$(az ad sp create-for-rbac \
	--name http://$NAME-pull --scopes $ACR_REG_ID \
    --role acrpull --query password --output tsv
)
# Get service principal App ID
SP_APPID=$(az ad sp show --id http://$NAME-pull \
	--query appId --output tsv
)

# Create container image in ACI
az container create \
	# Basics
	--resource-group psdemo-rg \
	--name psdemo-webapp-cli \
	# Parameters for deployment
	--ports 80 \
	--dns-name-label psdemo-webapp-cli \
	# Where to pull from
	--image $ACR_LOGIN_SERVER \
	# Credentials
	--registry-login-server $ACR_LOGIN_SERVER \
	--registry-username $SP_APPID \
	--registry-password $SP_PW
```



Once deployed, we can show using `az container show --resource-group 'a-group' --name 'psdemo-cli-hello-world'` 

If the FQDN is needed, pass query parameters: `az container show --resource-group 'a-group' --name 'psdemo-cli-hello-world' --query ipAddress.fqdn`

To view **logs from container** use `az container logs`

To delete the container `az container delete --resource-group <rg> --name <name>`

# Azure App Service WebApps

## Azure App Service Intro

- Managed, **HTTP-based service** for hosting apps. Microsoft handles the VMs behind the scenes
- Windows or Linux supported
- Numerous programming languages
- Load balancing and security focused
- Web app runs on top on an **app service plan**



## App Service Plans

Overall cost determined by **app service plan**. Two types: **isolated** and **non-isolated**. Both can connect to other resources (Storage, SQL Databases, etc.)

**Non-Isolated**:

- has no network isolation (meaning the web app runs directly in a resource group)
- Most common type of app service plan
- Five tiers:
  - free/shared (F1 and D1) - not for prod
  - Basic (B1, B2 and B3) - not for prod
  - Standard (S1, S2, S3) - prod ready
  - Premium v2 - prod ready
  - Premium v3 - prod ready

 **Isolated**:

- Fully isolated, dedicated and secure network access (can use Network Security Groups) called **app service environment**
- Within the virtual network the App Service Environment has a private IP address 
- Designed for larger scale and higher memory
- Can connect back to on-premises resources



## Create Web Apps

To create a web app, we first make an app service plan then a web app. In the portal, creating a web app auto creates the app service plan.

In the CLI:

```bash
az group create --name myrg --region westus2

az appservice plan create --name webapps-dev-plan \
	--resource-group myrg \
	--sku s1 \
	--is-linux

az webapp create --resource-group myrg \
	--plan webapps-dev-plan
	--name my-webapp
	--runtime "node|10.14"
```

In PowerShell:

```powershell
New-AzResourceGroup -Name "somename" -Location "westus2"

New-AzAppServicePlan -Name "webappplan" -Location "westus2" -ResourceGroupName "somename" -Tier S1

New-AzWebApp -Name "mywebapp" -ResourceGroupName "somename" -Location "westus2" -AppServicePlan "webappplan" 
```

ARM Templates can be deployed from the CLI.

```bash
az group deployment create --resource-group '<rg>' --template-uri '<uri>'
```

```powershell
New-AzResourceGroupDeployment -ResourceGroupName '<rg>' -TemplateUri '<uri>'
```



## Configuring Web Apps (SSL, Databases, Domains & Logging)

### SSL Certificates and Custom Domains

Normally, `<webappname>.azurewebsites.net` is exposed with both HTTP and HTTPS. Considerations of SSL:

- Need at least a basic plan - the free/shared doesn't work
- Can use **public or private** certs, but private certification may not be trusted by users' browsers
- Can enforce HTTPS only

An **App Service Domain** is a domain name service from Azure (but any domain supplier can be used). The App Service Domain provides a DNS Domain as well, which you can use to prove you own the domain.

In the WebApp, we can add any **custom domain**, so long as ownership is proven. Custom domains can be bound to **TLS/SSL Certificate** by importing a cert, creating a managed cert or a cert from 3rd party. Once imported, the cert **binding** is created (**SNI Based SSL**)

 

### Database Configuration

Set up a DB connection to auto-inject the connection string as env variable. For an Azure SQL Database, we can show connection strings in portal.

Under **Configuration** tab of the web app in portal, can set up connection strings, by copy-pasting from the connection string. 



### Logging

Logging can be enabled under **Monitoring** in portal for web app. Logs can be stored on file system or Azure Storage. Several types of logging:

- **Deployment Logging** (from code deployments)
- **Application Logging** (custom logs from the app)
- **WebServer Logging** (raw HTTP requests from server)
- **Detailed Error Messages** (Windows-only, shows details like stack trace upon demand)
- **Failed Request Tracing** (Windows-only, showing timing etc.)



### Continuous Deployment

- App Service supports CI via GitHub, BitBucket or Azure Repos.
- Azure App Service must be authorized. In Portal, this is **Deployment Center** in the App Service
- Next, a **build provider** must be provided (who builds the code) - **Azure App Service Build Service** is built in, but GitHub available.



## Scaling App Service

Scaling **vertically** and **horizontally** is possible.

For vertical scaling - can move underlying VM to higher SKU (for example S1 to S3)

Horizontal scaling involves adding additional instances of the app.

App Service has an implicit load balancer that runs behind-the-scenes. Auto-scaling can be done on **schedule** (time-based) or **consumption** (CPU, memory, etc. usage). Auto scaling only for standard, premium or isolated.

Scale out and Scale In are configured in portal. There is **limit** to the number of instances permitted based on the underlying VM SKU (basic, premium, standard, etc.).



# Azure Functions

