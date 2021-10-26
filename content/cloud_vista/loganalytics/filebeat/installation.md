---
title: Installation of Filebeat
geekdocHidden: true
slug: installation
---

## Overview

This page consist of 3 section, installation, configure and start **Filebeat**

## Supported environments
**Filebeat** is now supported on most common flavors Linux, Unix and Windows.

## Installation
  - Windows
    - Download Filebeat Windows zip file<a href="https://netgainsys.sharepoint.com/:u:/g/ERN0-IUU--5GjH5m0gi3_pEBNV9k_M5MzjFdl8rB__fnmA?e=Br9pQ4" target="_blank">Windows zipped file</a>
    - Extract the contents of the zip file into C:\Program Files.
    - Rename the *filebeat-<version>-windows* directory to *Filebeat*.
    - Open a PowerShell prompt as an Administrator (right-click the PowerShell icon and select **Run As Administrator**).
    - From the PowerShell prompt, run the following commands to install Filebeat as a Windows service:

	      PS > cd 'C:\Program Files\Filebeat'
		  PS C:\Program Files\Filebeat> .\install-service-filebeat.ps1		   
      - If script execution is disabled on your system, you need to set the execution policy for the current session to allow the script to run. For example:   
	  `PowerShell.exe -ExecutionPolicy UnRestricted -File .\install-service-filebeat.ps1.`

  - Linux
    - Download and install

         `curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-7.13.2-x86_64.rpm`  
		 `yum localinstall filebeat-7.13.2-x86_64.rpm`
  

## Configure
  - Change the configuration file:
    - change to the Filebeat directory, look for the file named **filbeat.yml**
	    * Windows directory: C:\Program Files\Filebeat\filbeat.yml
	    * Linux and MacOS directory: /etc/filbeat/filebeat.yml
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
    - Enable the modules for Filebeat to collect data from: 
	  * Windows: `PS > .\filebeat.exe modules enable cisco`  
	  * Linux: `filebeat modules enable system cisco`
	- Configure each of the modules
	  * Detail guide for configuration of each modules can be found <a href="https://www.elastic.co/guide/en/beats/filebeat/7.13/filebeat-modules.html" target="_blank">here</a>.

## Start
  - Windows: `PS C:\Program Files\filebeat> Start-Service filebeat`
	* You may start the service from Services as well
  - Linux: `service filebeat start`
  

