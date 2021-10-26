---
title: Installation of Metricbeat
geekdocHidden: true
slug: installation
---

## Overview

This page consist of 3 section, installation, configure and start **Metricbeat**

## Supported environments
**Metricbeat** is now supported on most common flavors Linux, Unix, Windows and Apple OSX.

## Installation
  - Windows
    - Download Metricbeat Windows zip file<a href="https://artifacts.elastic.co/downloads/beats/metricbeat/metricbeat-7.14.0-windows-x86_64.zip" target="_blank">Windows zipped file</a>
    - Extract the contents of the zip file into C:\Program Files.
    - Rename the *metricbeat-<version>-windows* directory to *Metricbeat*.
    - Open a PowerShell prompt as an Administrator (right-click the PowerShell icon and select **Run As Administrator**).
    - From the PowerShell prompt, run the following commands to install Metricbeat as a Windows service:

	      PS > cd 'C:\Program Files\Metricbeat'
		  PS C:\Program Files\Metricbeat> .\install-service-metricbeat.ps1

  - Linux
    - Download and install

         `curl -L -O https://artifacts.elastic.co/downloads/beats/metricbeat/metricbeat-7.14.0-x86_64.rpm`  
		 `yum localinstall metricbeat-7.14.0-x86_64.rpm`


  - Apple OSX
    - Download and unzip  
	`curl -L -O https://artifacts.elastic.co/downloads/beats/metricbeat/metricbeat-7.14.0-darwin-x86_64.tar.gz`  
	`tar xzvf metricbeat-7.14.0-darwin-x86_64.tar.gz`

  - Others
    - Download and unzip <a href="https://www.elastic.co/downloads/beats/metricbeat" target="_blank">Other OS</a>
  

## Configure
  - Change the configuration file:
    - change to the Metricbeat directory, look for the file named **metricbeat.yml**
	    * Windows directory: C:\Program Files\Metricbeat\metricbeat.yml
	    * Linux and MacOS directory: /etc/metricbeat/metricbeat.yml
	- edit and change the output as below
      ```
      #output.elasticsearch:
        #hosts: ["myEShost:9200"]
      output.logstash:
        hosts: [emedge_ip:5044]
        ssl.enable: true
        ssl.verification_mode: "none"
      ```
      **emedge_ip** is the IP address of emedge

  - Enable the modules:
    - Enable the modules for Metricbeat to collect data from: 
	  * Windows: `PS > .\metricbeat.exe modules enable elasticsearch`  
	  * Linux: 'metricbeat modules enable system radius'
	- Configure each of the modules
	  * Detail guide for configuration of each modules can be found <a href="https://www.elastic.co/guide/en/beats/metricbeat/7.14/metricbeat-modules.html" target="_blank">here</a>.

## Start
  - Windows: PS C:\Program Files\metricbeat> Start-Service metricbeat
	* You may start the service from Services as well
  - Linux: service metricbeat start
  

