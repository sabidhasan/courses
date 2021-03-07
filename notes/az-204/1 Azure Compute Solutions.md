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



## Containers in Azure


