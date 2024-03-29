---
title: Installation
geekdocHidden: true
slug: installation
---
## Supported environments
**emedge-agent** is now supported on most common flavors Linux, Unix, Windows and Apple OSX.

## Installation steps for Windows
  - Download <a href="https://download.{{% domain %}}/emedge-agent/emedge-agent-v12-latest.msi" target="_blank">Windows MSI Installer for emedge-agent</a>
- Install via command line
  - search for Command Prompt and right click "Run as administrator".
  - run following command
    ```
    msiexec.exe /qn /i emedge-agent-v12-latest.msi EMIP=x.x.x.x
    ```
    * **EMIP=x.x.x.x** specifies the IP address of EM or Emedge server

  - Notes:
    * emedge-agent will also be configured automatically as windows service named 'emedge-agent'
    * You may also use Windows Group Policy to remotely install software in bulk

## Installation steps for Linux
  - One liner installation

        EMIP=x.x.x.x SERVICE=1 sh -c "$(curl -skL https://download.{{% domain %}}/emedge-agent/install-agent.sh)"
    * **EMIP=x.x.x.x** specifies the IP of emedge that this agent should forward data to
    * **SERVICE=1** specifies to automatically install emedge-agent as a system service
      * If you do not wish to install as a system service, set to **SERVICE=0**

  - Manual installation
    - RPM package <a href="https://download.{{% domain %}}/emedge-agent/emedge-agent-v12-latest.x86_64.rpm" target="_blank">emedge-agent-v12-latest.x86_64.rpm</a>
    - Zip package <a href="https://download.{{% domain %}}/emedge-agent/emedge-agent-v12-latest-linux.zip" target="_blank">emedge-agent-v12-latest-linux.zip</a>

## Installation steps for other operation systems
  - Apple OSX
    - Download and unzip <a href="https://download.{{% domain %}}/emedge-agent/emedge-agent-v12-latest-osx.zip" target="_blank">latest emedge-agent software package for OSX</a>
    - cd into **emedge-agent** folder and run **emedge-agent config**

  - FreeBSD
    - Download and unzip <a href="https://download.{{% domain %}}/emedge-agent/emedge-agent-v12-latest-freebsd.zip" target="_blank">latest emedge-agent software package for FreeBSD</a>
    - cd into **emedge-agent** folder and run **emedge-agent config**

## Installation as system service on unix/linux
  - Linux/Unix/OSX:
    - Run **/opt/emedge-agent/emedge-agent service install**

## Further details
  - All logs will be saved into **emedge-agent.log** in the installation directory
  - To stop emedge, simply run **emedge-agent stop**
  - Note: run **emedge-agent -h** for more help on other commands
  <!--
  - <a href="https://download.{{% domain %}}/emedge-agent/change_logs.txt" target="_blank">Change logs</a>
  -->

