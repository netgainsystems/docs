---
title: Installation
weight: -9
---
## Installation steps for emedge
  - Linux
    - one liner installation

          bash -c "$(curl -sL https://download.{{% domain %}}/emedge/install.sh)"

  - Windows
    - Download and unzip <a href="https://download.{{% domain %}}/emedge/emedge-latest.zip" target="_blank">latest emedge software package</a>
    - cd into **emdge** folder and run **emedge.exe setup**

## Installation as system service or Windows service
  - Linux/Windows/OSX:
    - run **emedge service install**
    - Note: for Windows, ensure the service is logged on with an user account with **Administrator** privileges

## Further details
  - all logs will be saved into **emedge.log** in the installation directory
  - to stop emedge, simply run **emedge stop**
  Note: run **emedge -h** for help on more commands

## Supported environments
**emedge** can run on Linux, Windows or Mac OS.
  - For Linux, recommended OS distribution is **Centos** or **Ubuntu**
  - Recommended specs:
    * **Minimum**: CPU: **Intel i3-equivalent** or above, **1GB** RAM, **5GB** disk space
    * **Ideal**:   CPU: **Intel i5-equivalent** or above, minimum **4GB** RAM, **50GB** disk space

