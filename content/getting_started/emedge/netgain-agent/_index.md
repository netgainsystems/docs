---
title: NetGain Agent
weight: 3
---

# About NetGain Agent
**netgain-agent** is a agent software that runs on managed server. It collects metrics and logics from the server and forwards the data to EM or Emedge

---
## To get started, select your platform
<a href="#installation-steps-for-netgain-agent-on-windows">
  <img src="/images/platform_windows.png" />
</a>
<a href="#installation-steps-for-netgain-agent-on-linux">
  <img src="/images/platform_linux.png" style="width:108px;height:104px;" />
</a>

## Installation steps for NetGain Agent on Windows
- Download <a href="https://download.{{% domain %}}/netgain-agent/netgain-agent-v12.msi" target="_blank">Windows MSI Installer for NetGain Agent</a>
- Install via command line
  - search for Command Prompt and right click "Run as administrator".
  - run following command
    ```
    msiexec.exe /qn /i netgain-agent-v12.msi EMIP=x.x.x.x
    ```
    * **EMIP=x.x.x.x** specifies the IP address of EM or Emedge server

  - Note:
    * netgain-agent will also be configured automatically as windows service named 'netgain-agent'
    * Installation log files at %TEMP%\MSI*.LOG.

## Installation steps for netgain-agent on Linux
Linux - one liner installation
  ```
   EMIP=x.x.x.x SERVICE=1 sh -c "$(curl -skL https://download.{{% domain %}}/netgain-agent/install.sh)"
  ```
  * **EMIP=x.x.x.x** specifies the IP address of EM or Emedge server
  * **SERVICE=1** specifies to automatically install netgain-agent as a system service
  * If you do not wish to install as a system service, set to **SERVICE=0**

## Additional notes
- All logs will be saved into **agent.log** in the installation directory
- To stop netgain-agent, simply run **netgain-agent stop**
- Run **netgain-agent -h** for help on more commands

