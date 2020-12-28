---
title: Setting up EM Edge
weight: -10
---
EM dkjfakEdge is the remote software agent that runs at your local site that collects and forwards monitoring data to your Cloud Vista instance.
This page tells you how to get started with setting up EM Edge agent to run at the local site(s).

<!-- spellchecker-disable -->

{{< toc >}}

<!-- spellchecker-enable -->

## Install requirements
EM Edge can run on Linux, Windows or Mac OS.
  - For Linux, recommended OS is Centos 7/8
  - Recommended minimum specs:  <b>Intel i3 CPU</b> or above, <b>2GB</b> RAM, <b>30GB</b> disk space
  - Recommended ideal specs (for monitoring more than 30 devices and forwarding data such as syslogs/NetFlow/APM...):  <b>Intel i5 CPU</b> or above, <b>8GB</b> RAM, <b>100GB</b> disk space

## Installation package
  - Download and unzip <a href="https://download.netgain-systems.com/emedge/emedge-latest.zip" target="_blank">latest EM Edge software package</a>
## Starting EM Edge
- Running EM Edge (x.x.x.x points to Cloud Vista Host address provided to you)
  - For Windows: <b>netgain/emedge.exe x.x.x.x</b>
  - For Linux: <b>netgain/emedge x.x.x.x</b>
  - For Mac: <b>netgain/emedge_mac x.x.x.x</b>
- Notes:
  - to install EM Edge as a Windows service, simply run '<b>emedge.exe installservice</b>'
    - (ensure the service is logged on with Administrator privileges)
  - to auto start EM Edge when Linux reboots, please add the following to /etc/rc.local
    ```Shell
    path/to/netgain/emedge x.x.x.x
    ```
  - all logs will be saved into <b>netgain/emedge.log</b> file
  - to stop EM Edge, simply run command with '<b>stop</b>' argument e.g. <b>emedge stop</b>
  - run command with <b>emedge help</b> to see more options
  - for more detailed instructions, please refer to <a href="https://docs.netgain-systems.com/getting_started/install-emedge" target="_blank">docs.netgain-systems.com</a>
