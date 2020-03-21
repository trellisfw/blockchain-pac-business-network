# Create Blockchain Network with IBM Hyperledger Fabric

## upgrading account



## Kubernetes Cluster
```
  curl -sL https://ibm.biz/idt-installer | bash         07.03.20    15:29:53 
[main] --==[ IBM Cloud Developer Tools for Linux/MacOS - Installer, v1.2.3 ]==--
[install] Starting Installation...
[install] Note: You may be prompted for your 'sudo' password during install.
[install_darwin_deps] Checking for external dependency: brew
[install_darwin_deps] Installing/updating external dependency: git
[install_darwin_deps] Installing/updating external dependency: docker
[install_darwin_deps] Installing/updating external dependency: kubectl
[install_darwin_deps] Installing/updating external dependency: helm
[install_ibmcloud] Updating existing IBM Cloud 'ibmcloud' CLI...
Checking for updates...
New version 0.22.0 is available.
Release notes: https://github.com/IBM-Cloud/ibm-cloud-cli-release/releases/tag/v0.22.0

Do you want to update now? [Y/n] >
FAILED
Could not read from input: EOF

[install_ibmcloud] Running 'ibmcloud --version'...
ibmcloud version 0.19.0+569dd56-2019-09-23T08:20:26+00:00
[install_plugins] Installing/updating IBM Cloud CLI plugins...
[install_plugins] Checking status of plugin: cloud-functions
[install_plugins] Installing plugin 'cloud-functions'
Looking up 'cloud-functions' from repository 'IBM Cloud'...
Plug-in 'cloud-functions/wsk/functions/fn 1.0.38' found in repository 'IBM Cloud'
Attempting to download the binary file...
 2.38 MiB / 13.00 MiB [======================>------------------------------------------------------------------------------- 2.45 MiB / 13.00 MiB [=======================>------------------------------------------------------------------------------ 2.48 MiB / 13.00 MiB [=======================>------------------------------------------------------------------------------ 2.55 MiB / 13.00 MiB [========================>----------------------------------------------------------------------------- 2.59 MiB / 13.00 MiB [========================>----------------------------------------------------------------------------- 2.66 MiB / 13.00 MiB [=========================>---------------------------------------------------------------------------- 2.71 MiB / 13.00 MiB [==========================>--------------------------------------------------------------------------- 2.79 MiB / 13.00 MiB [==========================>--------------------------------------------------------------------------- 2.84 MiB / 13.00 MiB [===========================>-------------------------------------------------------------------------- 2.89 MiB / 13.00 MiB [===========================>-------------------------------------------------------------------------- 2.94 MiB / 13.00 MiB [============================>------------------------------------------------------------------------- 13.00 MiB / 13.00 MiB [=======================================================================================] 100.00% 1m4s
13634160 bytes downloaded
Installing binary...
OK
Plug-in 'cloud-functions 1.0.38' was successfully installed into /Users/username/.bluemix/plugins/cloud-functions. Use 'ibmcloud plugin show cloud-functions' to show its details.
[install_plugins] Checking status of plugin: cloud-object-storage
[install_plugins] Updating plugin 'cloud-object-storage' from version '1.1.0     Update Available'
Plug-in 'cloud-object-storage 1.1.0' was installed.
Checking upgrades for plug-in 'cloud-object-storage' from repository 'IBM Cloud'...
Update 'cloud-object-storage 1.1.0' to 'cloud-object-storage 1.1.2'
Attempting to download the binary file...
 14.94 MiB / 14.94 MiB [=======================================================================================] 100.00% 1m9s
15663536 bytes downloaded
Updating binary...
OK
The plug-in was successfully upgraded.
[install_plugins] Checking status of plugin: container-registry
[install_plugins] Updating plugin 'container-registry' from version '0.1.437   Update Available'
Plug-in 'container-registry 0.1.437' was installed.
Checking upgrades for plug-in 'container-registry' from repository 'IBM Cloud'...
Update 'container-registry 0.1.437' to 'container-registry 0.1.454'
Attempting to download the binary file...
 30.82 MiB / 30.82 MiB [======================================================================================] 100.00% 1m59s
32314904 bytes downloaded
Updating binary...
OK
The plug-in was successfully upgraded.
[install_plugins] Checking status of plugin: container-service
[install_plugins] Installing plugin 'container-service'
Looking up 'container-service' from repository 'IBM Cloud'...
Plug-in 'container-service/kubernetes-service 0.4.102' found in repository 'IBM Cloud'
Attempting to download the binary file...
 23.41 MiB / 23.41 MiB [=======================================================================================] 100.00% 1m5s
24548296 bytes downloaded
Installing binary...
OK
Plug-in 'container-service 0.4.102' was successfully installed into /Users/username/.bluemix/plugins/container-service. Use 'ibmcloud plugin show container-service' to show its details.
[install_plugins] Checking status of plugin: dev
[install_plugins] Updating plugin 'dev' from version '2.4.0     Update Available'
Plug-in 'dev 2.4.0' was installed.
Checking upgrades for plug-in 'dev' from repository 'IBM Cloud'...
Update 'dev 2.4.0' to 'dev 2.4.6'
Attempting to download the binary file...
 27.35 MiB / 27.35 MiB [=======================================================================================] 100.00% 1m9s
28676416 bytes downloaded
Updating binary...
OK
The plug-in was successfully upgraded.
[install_plugins] Running 'ibmcloud plugin list'...
Listing installed plug-ins...

Plugin Name                            Version   Status
cloud-object-storage                   1.1.2
container-registry                     0.1.454
container-service/kubernetes-service   0.4.102
dev                                    2.4.6
cloud-functions/wsk/functions/fn       1.0.38

[install_plugins] Finished installing/updating plugins
[env_setup] WARN: Please restart your shell to enable 'ic' alias for ibmcloud!
[install] Install finished.
[main] --==[ Total time: 420 seconds ]==--

  ~/repos/trellisfw/trellisfw-blockchain-pac-business-network     master   
   pwd                                                                                          07.03.20    15:42:00 
```

<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/00_01_kubernetes_service.png">
</p>

<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/00_02_kubernetes_cluster.png">
</p>

<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/00_03_cli_tools.png">
</p>

<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/00_03_cli_tools_installed.png">
</p>

```
  ibmcloud login -a cloud.ibm.com -r us-south -g Default                                       07.03.20    15:54:46 
API endpoint: https://cloud.ibm.com

Email> email

Password>
Authenticating...
OK

Targeted account Username Account () <-> ###### 

Targeted resource group Default

Targeted region us-south


API endpoint:      https://cloud.ibm.com
Region:            us-south
User:              username
Account:           Username Account () <-> ######
Resource group:    Default
CF API endpoint:
Org:
Space:

Tip: If you are managing Cloud Foundry applications and services
- Use 'ibmcloud target --cf' to target Cloud Foundry org/space interactively, or use 'ibmcloud target --cf-api ENDPOINT -o ORG -s SPACE' to target the org/space.
- Use 'ibmcloud cf' if you want to run the Cloud Foundry CLI with current IBM Cloud CLI context.


New version 0.22.0 is available.
Release notes: https://github.com/IBM-Cloud/ibm-cloud-cli-release/releases/tag/v0.22.0
TIP: use 'ibmcloud config --check-version=false' to disable update check.

Do you want to update? [y/N] > y

Installing version '0.22.0'...
Downloading...
 18.25 MiB / 18.25 MiB [======================================================================================] 100.00% 2m24s
19134648 bytes downloaded
Saved in /Users/username/.bluemix/tmp/bx_484184040/IBM_Cloud_CLI_0.22.0.pkg
```

<p align="center">
  <img height="400" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/01_kubernetes_cluster.png">
</p>

### Blockchain Platform

<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/02_blockchain_platform.png">
</p>

<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/03_blockchain_platform.png">
</p>

<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/04_blockchain_platform.png">
</p>

<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/05_blockchain_platform.png">
</p>

<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/06_blockchain_platform.png">
</p>


## IBM Blockchain Platform
<p align="center">
  <img height="400" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/07_blockchain_platform_first.png">
</p>

## Setting up Fabric CA

<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/08_setting_up_fabric_CA.png">
</p>

<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/09_setting_up_fabric_CA.png">
</p>

<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/10_setting_up_fabric_CA_summary.png">
</p>

## Associate Identity

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/11_associate_identity.png">
</p>

## Register User

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/12_register_user.png">
</p>

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/13_register_user_peer.png">
</p>

## Organizations

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/14_organizations.png">
</p>

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/15_create_MSP_definition.png">
</p>

<p align="center">
  <img height="100" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/17_identity_generated_warning.png">
</p>


## add peer

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/18_add_peer.png">
</p>

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/19_add_peer.png">
</p>

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/20_add_peer.png">
</p>

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/21_add_peer.png">
</p>

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/22_add_peer.png">
</p>

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/23_add_user_summary.png">
</p>

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/trellisfw/trellisfw-blockchain-pac-business-network/master/assets/images/blockchain_tutorial/50_fabric_architecture.png">
</p>
