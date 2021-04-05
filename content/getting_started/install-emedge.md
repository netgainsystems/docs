---
title: Setting up emedge
weight: -10
---
**emedge** a software that runs on your local sites. It collects metrics and logics from hosts and sends them to CloudVista, where you can analyze and visualize your monitoring and performance data.

## Installation steps
  - Linux
    - one liner installation

          bash -c "$(curl -skL https://download.netgain-systems.com/emedge/install.sh)"

  - Windows
    - Download and unzip <a href="https://download.netgain-systems.com/emedge/emedge-latest.zip" target="_blank">latest emedge software package</a>
    - cd into **emdge** folder and run **emedge.exe setup**

  - Apple OS X:
    - Download and unzip <a href="https://download.netgain-systems.com/emedge/emedge-latest.zip" target="_blank">latest emedge software package</a>
    - cd into **emdge** folder and run **./emedge setup**

## Installation as system service
  - Linux/OSX:
    - execute **/opt/emedge/emedge service install**
  - Windows:
    - execute **emedge.exe service install**
    - Note: ensure the service is logged on with an user account with **Administrator** privileges
  - execute **emedge service -h** for more service commands

## Further details
  - all logs will be saved into **emedge.log** in the installation directory
  - to stop emedge, simply run **emedge stop**
  - to install emedge as a service
    - run '**emedge.exe service install**'
    - Note for windows: ensure the service is logged on with an user account with **Administrator** privileges
  - you may execute **emedge -h** to see more options

## Supported environments
**emedge** can run on Linux, Windows or Mac OS.
  - For Linux, recommended OS distribution is **Centos** or **Ubuntu**
  - Recommended specs:
    * **Minimum**: CPU: **Intel i3-equivalent** or above, **1GB** RAM, **5GB** disk space
    * **Ideal**:   CPU: **Intel i5-equivalent** or above, minimum **4GB** RAM, **50GB** disk space

