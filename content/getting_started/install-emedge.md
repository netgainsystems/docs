---
title: Setting up EM Edge
weight: -20
---

This page tells you how to get started with installing EM Edge at your local site. For comprehensive EM Edge documentation, see https://netgainsystems.github.io/docs

<!-- spellchecker-disable -->

{{< toc >}}

<!-- spellchecker-enable -->

## Install requirements

EM Edge can run on Linux, Windows or Mac OS.
  - For Linux, recommended OS is Centos 7/8
  - Recommended minimum specs:  Intel i5 1.6MHz CPU, 8GB RAM, 50GB disk space

## Installation steps

### Installation Java
- Install Java 8 runtime from <a href="https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html" target="_blank">Java SE Development Kit 8 Downloads page</a>
### Dowload and unzip EM Edge package
- Download and unzip <a href="https://filedrop.netgain-systems.com/index.php/s/pTUd5x4ReO32Nsm" target="_blank">latest EM Edge software package</a>

### Start EM Edge
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

## Stopping EM Edge
  - To stop EM Edge, simply run same command with 'stop' argument e.g. emedge_linux stop
