---
title: Installation
weight: -9
---
## Installation steps for emedge
  - Windows
    - Download <a href="https://download.{{% domain %}}/emedge/emedge-v11.msi" target="_blank">Windows MSI Installer for emedge</a>
    - Double click on the msi file and follow the installation steps
    - Note: emedge will also be configured automatically as windows service named 'emedge'
  - Linux - one liner installation

        CV=mycv.{{% cvdomain %}} SERVICE=1 sh -c "$(curl -skL https://download.{{% domain %}}/emedge/install.sh)"
    * **CV=mycv.{{% cvdomain %}}** specifies the domain hostname of CloudVista instance that this emedge should forward data to
    * **SERVICE=1** specifies to automatically install emedge as a system service
      * if you do not wish to install as a system service, set to **SERVICE=0**

  - Manual installation (Linux or Apple OSX)
    - Download and unzip <a href="https://download.{{% domain %}}/emedge/emedge-latest.zip" target="_blank">latest emedge software package</a>
    - cd into **emedge** folder and run **emedge config**

## Installation as system service or Windows service
  - Linux/Unix/OSX:
    - run **/opt/emedge/emedge service install**

## Additional notes
  - all logs will be saved into **emedge.log** in the installation directory
  - to stop emedge, simply run **emedge stop**
  Note: run **emedge -h** for help on more commands

## Supported environments
**emedge** can run on Linux, Windows or Mac OS.
  - For Linux, recommended OS distribution is **Centos** or **Ubuntu**
  - Recommended specs:
    * **Minimum**: CPU: **Intel i3-equivalent** or above, **1GB** RAM, **5GB** disk space
    * **Ideal**:   CPU: **Intel i5-equivalent** or above, minimum **4GB** RAM, **50GB** disk space

## DockerHub
  Also, emedge can be run as a docker container.
	For more info, please visit: <a href="https://hub.docker.com/r/netgain/emedge">https://hub.docker.com/r/netgain/emedge</a>

  to start the container, simply run command:

	docker run -e cv=myinstance.cloud-vista.co -v localvardir:/emedge/var netgain/emedge

