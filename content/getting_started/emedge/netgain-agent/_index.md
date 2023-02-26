---
title: NetGain Agent
weight: 3
---

**netgain-agent** is a agent software that runs on managed server. It collects metrics and logics from the server and forwards the data to EM or Emedge

---
## To get started, select your platform
<a href="#installation-steps-on-windows">
  <img src="/images/platform_windows.png" />
</a>
<a href="#installation-steps-on-linux">
  <img src="/images/platform_linux.png" style="width:108px;height:104px;" />
</a>
<br>
<a href="#installation-steps-on-other-operating-systems">
  Other Operating Systems
</a>

## Installation steps on Windows
- Download <a href="https://download.{{% domain %}}/netgain-agent/netgain-agent-v12-latest.msi" target="_blank">Windows MSI Installer for NetGain Agent</a>
- Install via command line
  - search for Command Prompt and right click "Run as administrator".
  - run following command
    ```
    msiexec.exe /qn /i netgain-agent-v12-latest.msi EMIP=x.x.x.x
    ```
    * **EMIP=x.x.x.x** specifies the IP address of EM or Emedge server

  - Notes:
    * netgain-agent will also be configured automatically as windows service named 'netgain-agent'
    * You may also use Windows Group Policy to remotely install software in bulk

## Installation steps on Linux
- One liner installation
  ```
   EMIP=x.x.x.x SERVICE=1 sh -c "$(curl -skL https://download.{{% domain %}}/netgain-agent/install.sh)"
  ```
- Manual installation
  - RPM-based package (e.g. RedHat, CentOS, Rocky Linux, etc...)
    * **Download** <a href="https://download.{{% domain %}}/netgain-agent/netgain-agent-v12-latest.x86_64.rpm" target="_blank">netgain-agent-v12-latest.x86_64.rpm</a>
    * **Install** package
      * yum --nogpgcheck -y install netgain-agent-v12-latest.x86_64.rpm
    * **Configures** the EM destination IP
      * EMIP=x.x.x.x SERVICE=1 /opt/netgain-agent/netgain-agent config
    * **Start** the agent
      * systemctl start netgain-agent.service
    
  - Debian-based package (e.g. Ubuntu)
    * **Download** <a href="https://download.{{% domain %}}/netgain-agent/netgain-agent-v12-latest.amd64.deb" target="_blank">netgain-agent-v12-latest.amd64.deb</a>
    * **Install** package
      * apt update -qq -y
      * apt install -qq -y openjdk-8-jre-headless
      * dpkg -i netgain-agent-v12-latest.amd64.deb
    * **Configures** the EM destination IP
      * EMIP=x.x.x.x SERVICE=1 /opt/netgain-agent/netgain-agent config
    * **Start** the agent
      * systemctl start netgain-agent.service

  - Notes
    * **EMIP=x.x.x.x** specifies the IP address of EM or Emedge server
    * **SERVICE=1** specifies to automatically install netgain-agent as a system service
      * If you do not wish to install as a system service, set to **SERVICE=0**

## Installation steps on other Operating Systems
  - **Download** <a href="https://download.{{% domain %}}/netgain-agent/netgain-agent-v12-latest.tar.gz" target="_blank">netgain-agent-v12-latest.tar.gz</a>
  - **Extract** the package
    * cd /opt
    * tar zxf netgain-agent-v12-latest.tar.gz
    * cd netgain
  - **Configures** the EM destination IP
    * edit agent.properties to add "serverHost=x.x.x.x"
  - **Start** the agent
    * cd /opt/netgain/bin && ./agent_start.sh


## Additional notes
- All logs will be saved into **agent.log** in the installation directory
- To stop netgain-agent, simply run **netgain-agent stop**
- Run **netgain-agent -h** for help on more commands

