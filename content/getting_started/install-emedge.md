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
  - Download and unzip <a href="https://download.netgain-systems.com/emedge/emedge-latest.zip"
          target="_blank">latest EM Edge software package</a>

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
