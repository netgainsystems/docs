---
title: Installation
weight: -9
---
## Supported environments
**emedge-agent** is now supported on most common flavors Linux, Unix, Windows and Apple OSX.

## Installation steps for emedge-agent
  - Windows
    - Download <a href="https://download.{{% domain %}}/emedge-agent/emedge-agent-v11.msi" target="_blank">Windows MSI Installer file</a>
    - Double click on the msi file and follow the installation steps
    - Note: emedge-agent will also be configured automatically as windows service named 'emedge-agent'

  - Linux
    - one liner installation

          EMEDGE=x.x.x.x SERVICE=1 sh -c "$(curl -skL https://download.{{% domain %}}/emedge-agent/install-agent.sh)"
      * **EMEDGE=x.x.x.x** specifies the IP of emedge that this agent should forward data to
      * **SERVICE=1** specifies to automatically install emedge-agent as a system service
        * if you do not wish to install as a system service, set to **SERVICE=0**

    - manual installation
      - RPM package <a href="https://download.{{% domain %}}/emedge-agent/emedge-agent-v11-stable.x86_64.rpm" target="_blank">emedge-agent-v11-stable.x86_64.rpm</a>
      - Debian package <a href="https://download.{{% domain %}}/emedge-agent/emedge-agent-v11-stable.x86_64.deb" target="_blank">emedge-agent-v11-stable.x86_64.deb</a>
      - Zip package <a href="https://download.{{% domain %}}/emedge-agent/emedge-agent-v11-linux.zip" target="_blank">emedge-agent-v11-linux.zip</a>

  - Apple OSX
    - Download and unzip <a href="https://download.{{% domain %}}/emedge-agent/emedge-agent-v11-osx.zip" target="_blank">latest emedge-agent software package for OSX</a>
    - cd into **emedge-agent** folder and run **emedge-agent config**

  - FreeBSD
    - Download and unzip <a href="https://download.{{% domain %}}/emedge-agent/emedge-agent-v11-freebsd.zip" target="_blank">latest emedge-agent software package for FreeBSD</a>
    - cd into **emedge-agent** folder and run **emedge-agent config**

## Installation as system service on unix/linux
  - Linux/Unix/OSX:
    - run **/opt/emedge-agent/emedge-agent service install**

## Further details
  - all logs will be saved into **emedge-agent.log** in the installation directory
  - to stop emedge, simply run **emedge-agent stop**
  -wNote: run **emedge-agent -h** for more help on other commands

