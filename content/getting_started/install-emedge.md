---
title: Setting up EM Edge
weight: -10
---
EM Edge is the remote software agent that runs at your local site that collects and forwards monitoring data to your Cloud Vista instance.
This page tells you how to get started with setting up EM Edge agent to run at the local site.

<!-- spellchecker-disable -->

{{< toc >}}

<!-- spellchecker-enable -->

## Install requirements
EM Edge can run on Linux, Windows or Mac OS.
  - For Linux, recommended OS is Centos 7/8
  - Recommended minimum specs:  Intel i5 1.6MHz CPU, 8GB RAM, 50GB disk space

## Installation steps
  - Install Java runtime from <a href="https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html" target="_blank">Java SE Development Kit 8 Downloads page</a>
  - Download and unzip the latest <a href="https://filedrop.netgain-systems.com/index.php/s/pTUd5x4ReO32Nsm" target="_blank">EM Edge software package</a>

## Starting EM Edge
- Running EM Edge (OS dependent)
  - Windows: netgain/emedge.exe xx.xx.xx.xx
  - Linux: netgain/emedge_linux xx.xx.xx.xx
  - Mac: netgain/emedge_darwin xx.xx.xx.xx
- Notes:
  - xx.xx.xx.xx points to Cloud Vista IP address/Domain name provided to you
  - all logs will be saved in netagin/emedge.log file
  - to enable auto start of EM Edge upon Linux reboot, add the following contents to /etc/rc.local
      ```Shell
      path/to/netgain/emedge_linux xx.xx.xx.xx
      ```
  - to stop EM Edge, simply run same command with 'stop' argument e.g. emedge_linux stop
