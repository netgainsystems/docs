---
title: Installation
geekdocHidden: true
slug: installation
---
## To get started, select your platform
<!-- <a href="#installation-steps-for-emedge-on-windows">
  <img src="/images/platform_windows.png" />
</a> -->
<a href="#installation-steps-for-emedge-on-linux">
  <img src="/images/platform_centos.png" />
</a>
<a href="#installation-steps-for-emedge-on-mac-os-x">
  <img src="/images/platform_macosx.png" />
</a>
<a href="#installation-steps-for-emedge-as-a-docker-container">
  <img src="/images/platform_docker.png" />
</a>

<!-- ## Installation steps for emedge on Windows
- Download <a href="https://download.{{% domain %}}/emedge/emedge-v11.msi" target="_blank">Windows MSI Installer for emedge</a>
- Double click on the msi file and follow the installation steps
- Note: emedge will also be configured automatically as windows service named 'emedge' -->

## Installation steps for emedge on Linux
Linux - one liner installation
  ```
  CV=mycv.{{% cvdomain %}} SERVICE=1 sh -c "$(curl -skL https://download.{{% domain %}}/emedge/install.sh)"
  ```
  * **CV=mycv.{{% cvdomain %}}** specifies the domain hostname of CloudVista instance that this emedge should forward data to
  * **SERVICE=1** specifies to automatically install emedge as a system service
  * If you do not wish to install as a system service, set to **SERVICE=0**

## Installation steps for emedge on Mac OS X
Manual installation (Linux or Apple OSX)
- Download and unzip <a href="https://download.{{% domain %}}/emedge/emedge-latest.zip" target="_blank">latest emedge software package</a>
- cd into **emedge** folder and run **emedge config**

## Installation steps for emedge as a Docker container
Containerized version of the emedge. The official <a href="https://hub.docker.com/r/netgain/emedge">Docker image</a> and setup instructions is available on Docker Hub.

<!-- ## Installation as system service or Windows service
- Turn to emedge folder: **cd \<dir>**
- Run **.\emedge service install** -->

## Supported environments
**emedge** can run on Linux<!-- , Windows -->or Mac OS.
- For Linux, recommended OS distribution is **Centos** or **Ubuntu**
- Recommended specs:
	* **Minimum**: CPU: **Intel i3-equivalent** or above, **1GB** RAM, **5GB** disk space
	* **Ideal**:   CPU: **Intel i5-equivalent** or above, minimum **4GB** RAM, **50GB** disk space

## Additional notes
- All logs will be saved into **emedge.log** in the installation directory
- To stop emedge, simply run **emedge stop**
- To set the JVM maximum heap memory, use **emedge setmem** command e.g. emedge setmem 2g (need to restart service)
- Run **emedge -h** for help on more commands

