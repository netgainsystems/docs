---
title: Installation
weight: -9
---
## Installation steps for emedge-agent
  - Linux
    - one liner installation

          bash -c "$(curl -skL https://download.{{% domain %}}/emedge-agent/install-agent.sh)"

  - Windows
    - Download and unzip <a href="https://download.{{% domain %}}/emedge-agent/emedge-agent-v11-win.zip" target="_blank">latest emedge-agent software package for Windows</a>
    - cd into **emedge-agent** folder and run **emedge-agent.exe setup**

  - Apple OSX
    - Download and unzip <a href="https://download.{{% domain %}}/emedge-agent/emedge-agent-v11-osx.zip" target="_blank">latest emedge-agent software package for OSX</a>
    - cd into **emedge-agent** folder and run **emedge-agent-osx setup**

## Installation as system service or Windows service
  - Linux/Windows/OSX:
    - run **emedge-agent service install**
    - Note: for Windows, ensure the service is logged on with an user account with **Administrator** privileges

## Further details
  - all logs will be saved into **emedge-agent.log** in the installation directory
  - to stop emedge, simply run **emedge-agent stop**
  Note: run **emedge-agent -h** for help on more commands

## Supported environments
**emedge-agent** is now supported on most common flavors Linux, Windows and Apple OS.
