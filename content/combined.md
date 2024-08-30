---
title: News
type: posts
weight: 10
geekdocHidden: true
---
---
title: Apache Log4j2 Vulnerability
weight: 7
geekdocHidden: true
---

## About Apache Log4j2 Remote Code Execution (RCE) Vulnerability CVE-2021-44228 & CVE-2021-45046
Apache Log4j2 <=2.14.1 JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers when message lookup substitution is enabled. From log4j 2.15.0, this behavior has been disabled by default. In previous releases (>2.10) this behavior can be mitigated by setting system property "log4j2.formatMsgNoLookups" to &#8220;true&#8221; or it can be mitigated in prior releases (<2.10) by removing the JndiLookup class from the classpath (example: zip -q -d log4j-core-*.jar org/apache/logging/log4j/core/lookup/JndiLookup.class).

It was found that the fix to address CVE-2021-44228 in Apache Log4j 2.15.0 was incomplete in certain non-default configurations. This could allows attackers with control over Thread Context Map (MDC) input data when the logging configuration uses a non-default Pattern Layout with either a Context Lookup (for example, $${ctx:loginId}) or a Thread Context Map pattern (%X, %mdc, or %MDC) to craft malicious input data using a JNDI Lookup pattern resulting in a denial of service (DOS) attack. Log4j 2.15.0 makes a best-effort attempt to restrict JNDI LDAP lookups to localhost by default. Log4j 2.16.0 fixes this issue by removing support for message lookup patterns and disabling JNDI functionality by default.

## Summary
NetGain has analysed the impact of the remote code execution vulnerability (CVE-2021-44228 & CVE-2021-45046) related to Apache Log4j (a logging tool used in many Java-based applications) disclosed on 9 Dec 2021 on its products, and has published the information below:  
  
- Affected products
- Mitigation guide

## Affected products

NetGain EM, CV and emedge versions lower than v11.2.126

## Mitigation guide
To help mitigate the risk of this vulnerability , NetGain provides one option:

- Long term fix :  To update NetGain EM, CV and emedge to version v11.2.126
  - package of log4j2 will be updated to version 2.16.0

## Ref
https://cve.mitre.org/cgi-bin/cvename.cgi?name=2021-44228

https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-45046


---
title: Report
weight: 7
geekdocHidden: false
---

## In construction
---
title: Security 
weight: 14
geekdocHidden: true
---
We care about security. If you have any questions, or encounter any issues, please contact us at security@{{% domain %}}.
If you believe you’ve discovered a bug in {{% company %}} product(s) security, please get in touch at security@{{% domain %}} and we will get back to you within 24 hours, and usually earlier. We request that you not publicly disclose the issue until we have had a chance to address it.

## Security Fixes
Below is a list of new vulnerabilities (include OSs and libraries) addressed in latest product release (v11.1.300)
- CVE-1999-0517- SNMP Agent Default Community Name (public)
- CVE-2008-5161 - SSH Server CBC Mode Ciphers Enabled
- CVE-2012-5081 - TLS ROBOT Vulnerability Detected (JAVA)
- CVE-2014-3566 - POODLE: SSLv3
- CVE-2015-4000 - SSL/TLS Diffie-Hellman Modulus <= 1024 Bits (Logjam)
- CVE-2016-2183 - Birthday attacks against TLS ciphers with 64bit block size vulnerability (Sweet32)
- CVE-2020-11022 -  JQuery 1.2 < 3.5.0 Multiple XSS
- CVE-2020-11023 - JQuery 1.2 < 3.5.0 Multiple XSS
- CVE-2020-13943 - Apache Tomcat HTTP/2 Request mix-up
- CVE-2020-14750 - Oracle WebLogic Server
- CVE-2020-17527 - Apache Tomcat HTTP/2 Request header mix-up
- CVE-2020-17530 - Apache Struts 2 allow an attacker to perform remote code execution on a vulnerable system
- CVE-2020-1971 - OpenSSL exploits to cause a Denial of Service condition
- CVE-2020-26217 - XStream Remote Code Execution Vulnerability
- CWE-16 OWASP-A6 - Cookie Without HTTPOnly Flag set
- CWE-200 CWE-213 OWASP-A6 - Web server & Framework Version Identification
- CWE-284 - Insecure Flash Cross Domain Policy
- CWE-308 OWASP-A2 - Use of Single-factor Authentication
- CWE-326 CWE-327 CWE-210 OWASP-A3 - Inadequate Transport Layer Protection
- CWE-326 CWE-327 CWE-310 OWASP-A3 - Use of Broken or Risky Cryptographic Algorithms
- CWE-384 - Mulitiple Login Sessions
- CWE-523 CWE-693 OWASP-A6 - HTTP String Transport Security Not Enforced
- CWE-525 OWASP-A6 - Lack of Client-Side Cache control
- CWE-525 - Sensitive Field Forms Autocomplete
- CWE-613 OWASP-A7 - Weak Idle Timeout
- CWE-645 OWASP-A2 - Overly Restrictive Lockout Mechanism
- CWE-693 CWE016 OWASP-A6 - X-XSS-Protection Header not implemented
- CWE-693 - Framable response
- Nessus Plugin ID 12085 - Apache Tomcat Default Files
- Nessus Plugin ID 51192 - SSL Certificate Cannot Be Trusted
- Nessus Plugin ID 57582 - SSL Self-Signed Certificate
- Nessus Plugin ID 76474 - SNMP 'GETBULK' Reflection DDoS
- OWASP-A3 - Client-initiated Renegotiation Supported
- OWASP-A9 - Outdated Components with known Vulnerabilities
---
title: Agent Management
geekdocHidden : True
---

# How to upgrade NetGain Agent for Linux

Stop NetGain Agent service.
*	systemctl stop netgain 
     OR
*	cd installation_directory/netgain/bin/
*	./agent_stop.sh

Backup netgain agent folder.
*	cd installation_directory (may vary depending on installation)
*	cp -r installation_directory/netgain ./netgain_v12.2.214_240627

Download netgain agent to preferred installation directory.

Unzip/Untar new agent.
*	cd installation_directory
*	tar -xzvf NetGain-Agent-Nix-v12.2.337.tar.gz

Configure agent.
*	cd installation_directory/netgain/bin
*	./agent_setup.sh.
*	Follow the instructions prompted
*	NOTES: Before agent_setup, use Java path command: which java to know your java directory

Start netgain agent.
*	cd installation_directory/netgain/bin
*	./agent_start.sh
*	check logs: tail -100f installation_directory/netgain/bin/nohup.out

Check GUI to confirm agent status.
---
# How to upgrade NetGain Agent in Windows

Stop NetGain Agent service.

<img src="/troubleshooting_guides/FAQ/images/netgain/FAQ25.png" alt="FAQ1" width="300"/>

*	Go to services.msc
*	Right-click on NetGain Agent
*	Stop the service

Backup netgain agent folder.
*	cd installation_directory (may vary depending on installation)

Create a backup folder and copy paste the old NetGain Agent to the backup folder.

Download netgain agent under Tools > Agent to preferred installation directory.

Install the new Agent and override the existing Agent. 

Configure agent.

<img src="/troubleshooting_guides/FAQ/images/netgain/FAQ.PNG" alt="FAQ2" width="300"/>

*	Enter the destination IP for NetGain server

Start NetGain Agent in services.msc.

Check GUI to confirm agent status.

# NetGain Agent not found
Check Agent log in server for issues.
For Windows:
* 	check log file at (NetGain Agent directory) \agent.log 
For Linux:
*	check log file at (NetGain Agent directory)/bin/nohup.out

Check firewall.
* Use Telnet to check connectivity on port 81 and 1808
---
---
title: Licensing
geekdocHidden : True
---

# How to update license 

Click on **Admin**, **System**, **License**.

<img src="/troubleshooting_guides/FAQ/images/netgain/FAQ32.PNG" alt="FAQ33"/>

Choose the license file and click on <img src="/troubleshooting_guides/FAQ/images/netgain/FAQ33ICON.PNG" alt="FAQ33ICON" width ="100"/>  to upload the license.

<img src="/troubleshooting_guides/FAQ/images/netgain/FAQ33.PNG" alt="FAQ33"/>---
title: Report
geekdocHidden : True
---

In Construction---
title: SNMP Installation & Configuration
geekdocHidden : True
---

## How to discover monitors through SNMPV3
Click on Metrics, Discover.
 
Select v3 Version under SNMP and Input the rest of the information.
 

Click on     to start discovering of devices.
 

After discovering, select the device you want to monitor.
 

Click     to add the selected device.


# Not able to discover devices via SNMP
Check firewall rules with UDP port 161.

Verify SNMP settings.
For Linux
Check if SNMP is configured to start on boot:
*	chkconfig --list | grep snmpd
Enable SNMP to start on boot:
*	chkconfig snmpd on
Verify SNMP is now enabled to start on boot:
*	chkconfig --list | grep snmpd
Start SNMP service:
*	service snmpd start
Verify SNMP is running:
*	ps -ef | grep snmpd
Verify SNMP Community String
*	vi /etc/snmp/snmpd.conf
*	rocommunity [community string]

For Windows
To view accepted the community string:
*	Search ‘Services’ in Windows
*	Double click on SNMP Service
*	Go to Security tab 

SSH to NetGain server and run SNMPwalk command.
*	snmpwalk -On -v 2c -c [community string] [IP address]

Re-Discover SNMP device in Device Discovery of NetGain.


# How to install SNMP for Windows 10 in PowerShell
Run PowerShell as administrator.
*	Search ‘Windows PowerShell’ in Windows
*	Right-click on Windows PowerShell and select Run as administrator

Check status of specific Windows capabilities.
*	Get-WindowsCapability -Online -Name “SNMP*”

Install specific Windows capability on the system. 
*	Add-WindowsCapability -Online -Name “SNMP.Client~~~~0.0.1.0”

Check the status of Windows capabilities again. 
*	Get-WindowsCapability -Online -Name “SNMP*”

Press the Windows key + R keyboard shortcut.

Input ‘services.msc’ in Run and click OK.
 

Users can check if the Services window includes the SNMP Service. If so, the above fix is successful. 

Double click SNMP Service to open the window directly below.
Check the service’s Startup type is configured to Automatic.
Click Start if the service is currently stopped.

 

Go to Security tab and add community string and accept from any host. 
Select Apply and Click OK.
How to install SNMP for Linux via SSH 
Connect to Linux machine via SSH.
*	ssh username@your-server-ip

Update Package Lists.
For Debian-based systems
*	sudo apt-get update
For Red Hat-based systems 
*	sudo yum update

Install SNMP and SNMP Utilities.
For Debian-based systems
*	sudo apt-get install snmp snmpd snmp-mibs-downloader
For Red-Hat based systems
*	sudo yum install net-snmp net-snmp-utils

Configure SNMP.
For both Debian-based and Red-Hat based systems
*	sudo nano /etc/snmp/snmpd.conf
Set read-only community string 
*	rocommunity public localhost  
Map the community name “public” into a “security name”
*	com2sec notConfigUser localhost public 

Start and enable the SNMP Service.
For Debian-based systems
*	sudo systemctl start snmpd
*	sudo systemctl enable snmpd
For Red-Hat based systems
*	sudo systemctl start snmpd
*	sudo systemctl enable snmpd

Allow SNMP Traffic through the Firewall (if applicable).
For Debian-based systems with “ufw”
*	sudo ufw allow from any to any port 161 proto udp
For Red-Hat based systems with “firewalld”
*	sudo firewall-cmd --permanent --add-port=161/udp
*	sudo firewall-cmd --reload

Verify SNMP Installation.
*	snmpwalk -On -v 2c -c [community string] [IP address]

# How to integrate new devices via SNMP to support in Metrics
Users must provide their SNMPwalk and SNMP MIB of their device. 

NetGain will handle the integration and send the patch to the user.



















 
---
title: User Management
geekdocHidden : True
---


How to unlock my user account if its locked
Admin account is needed in order to unlock user’s account.

Login to Admin account, click on **Admin**, **Accounts**, **Users**.

<img src="/troubleshooting_guides/FAQ/images/netgain/FAQ30.png" alt="FAQ30"/>

Click on  <img src="/troubleshooting_guides/FAQ/images/netgain/changeicon.png" alt="changeicon"/>  to edit the information of user’s account.

<img src="/troubleshooting_guides/FAQ/images/netgain/FAQ28.png" alt="FAQ28"/>

Admin will change the password of user and tick the Unlock box and save.
 <img src="/troubleshooting_guides/FAQ/images/netgain/FAQ101.png" alt="FAQ101"/>

Admin can also edit settings like ‘Login attempts strategy’ and ‘Change Password # of days’.
 
 <img src="/troubleshooting_guides/FAQ/images/netgain/FAQ29.png" alt="FAQ29"/>

# How does reset password on User Management work
Reset password only works when user has added their email address in the user profile. The newly generated password will be sent to the user email.

# What is the password policy for CV
Password has a minimum of 4 characters and is case sensitive. A strong password consists of Uppercase letters, lowercase letters, numbers and symbols.

# How to set the duration for password expiry
Login to Admin account, click on **Admin**, **Accounts**, **Users**.

<img src="/troubleshooting_guides/FAQ/images/netgain/FAQ30.png" alt="FAQ30"/>

Change the input to the desired days. 
<img src="/troubleshooting_guides/FAQ/images/netgain/FAQ31.png" alt="FAQ31"/>
---
title: Monitoring & Discovery 
geekdocHidden : True
---

In Constructions---
title: Frequently Asked Questions
weight: 1

---
Our FAQ section is designed to assist with common questions regarding NetGain Systems. If you encounter any issues that are not covered here, please feel free to contact our support team for further assistance.


- [Agent Management](/troubleshooting_guides/FAQ/agent_management)
- [User Management](/troubleshooting_guides/FAQ/user_management)
- [Monitor & Discovery](/troubleshooting_guides/FAQ/monitoringdiscovery)
- [Reports](/troubleshooting_guides/FAQ/reporting)
- [Licensing](/troubleshooting_guides/FAQ/licensing)
- [SNMP Installation and Configuration](/troubleshooting_guides/FAQ/snmpinstall)
- [Security](/troubleshooting_guides/FAQ/security)
---
title: Security
geekdocHidden : True
---
## How to request CSR generation

**Please change the following details according to customer requirements.**

### Create keystore:

1. **Create a new directory and generate a keystore:**
    ```bash
    cd /root
    mkdir ssl_28Jun2024
    /root/netgain/jre/bin/keytool -genkey -alias TBA_by_Customer_CA -keyalg RSA -keystore /root/ssl_28Jun2024/customer_name.jks -keysize 4096 -ext SAN=dns:netgain_server_hostname.example.com, ip:netgain_server_ip
    ```
    - Specify a password: `any_password_preferred`.

2. **Enter the following details when prompted:**
    - **Name:** TBA by Customer CA, and normally it is NetGain server hostname.
    - **Organization Unit:** TBA by Customer CA.
    - **Organization:** TBA by Customer CA.
    - **City:** TBA by Customer CA.
    - **State:** TBA by Customer CA.
    - **Country:** TBA by Customer CA.

### Generate CSR file to send to CA to sign:

```bash
/root/netgain/jre/bin/keytool -certreq -keyalg RSA -alias TBA_by_Customer_CA -file certreq.csr -keystore /root/ssl_28Jun2024/customer_name.jks
---
title: Troubleshooting Guide 
weight: 14
---

Troubleshooting Related will be available here.
---
title: Setting up
geekdocHidden: true
slug: setting-up
---

## Getting up and running
  1. Signup for at CVS account at https://portal.{{% domain %}}/signup
  2. Login to your portal at https://portal.{{% domain %}}/login to create your CVS instance
  3. Install and setup emedge at local site(s) by following steps in this <a href="{{< relref "installation/emedge/installation.md" >}}">page</a>
  4. Optionally install emedge-agent software on your server hosts that you would like to manage, with these <a href="{{< relref "installation/emedge/emedge-agent/installation.md" >}}">steps</a>
  4. Once done, monitoring metrics, logs and traffic data will now be automatically streamed to the assigned CVS instance

---
title: Cloud Vista
weight: 2
geekdocHidden: false
slug: cloud_vista_suite
---
**Cloud Vista Suite (CVS)** by {{% company %}} is a scalable monitoring service for hybrid cloud environments, providing monitoring of networks, servers, databases, applications, and services, through a SaaS-based monitoring analytics platform

# Key components of CVS
## Cloud Vista

  The cloud data platform for receiving, processing, storing and visualizing monitoring data

## EM Edge

  The data aggregator and forwarder of data towards Cloud Vista

## EM Edge-Agent

  The lightweight software agent to be installed on your server hosts



---
The diagram below depicts the relationship between Cloud Vista, EM Edge and EM Edge-Agent components


![Screenshot](/overview/images/cvsflow.png)

&nbsp;

* <a href="/overview/cloud_vista_suite/setting-up">Setting Up</a>
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
	    * Windows: `PS > .\metricbeat.exe modules enable <module-name>`
	    * Linux: `metricbeat modules enable system <module-name>`
      * e.g.
        * Linux: `metricbeat modules enable system elasticsearch radius`
	- Configure each of the modules
	  * Detail guide for configuration of each modules can be found <a href="https://www.elastic.co/guide/en/beats/metricbeat/7.14/metricbeat-modules.html" target="_blank">here</a>.

## Start
  - Windows: PS C:\Program Files\metricbeat> Start-Service metricbeat
	* You may start the service from Services as well
  - Linux: service metricbeat start
  

---
title: Metricbeat
weight: 5
geekdocHidden: true
---

# About Metricbeat
**Metricbeat** is a software that runs on your managed hosts. It collects monitoring and performance data from hosts and sends them to **emedge** for aggregation and forwarding to **{{% company %}}**, where you can analyze the data.
## Supported Metrics
Currently **{{% company %}}** supports Metricbeat for following:  
>AWS  
Azure  
Docker  
Elasticsearch  
Kubernetes     
Redis  
Systems  
**And More...** 
>  


Find steps here for installation of **Metricbeat**: <a href="/installation/emedge/Metricbeat/installation">Installation</a>

---
title: Filebeat
weight: 5
geekdocHidden: true
---

# About Filebeat
**filebeat** is a lightweight software that runs on your managed hosts. It is a lightweight, open-source log shipper that collects logs from various sources and forwards them to emedge. It monitors the log files or locations that you specify, collects log events, and then sends them to emedge for processing


# Receiving TLS-encrypted syslogs
- Download and install **syslog-ng** as the syslog forwarder

  e.g. yum install syslog-ng

- Edit config file **syslog-ng.conf**

  To configure syslog-ng to receive TLS traffic on a port and forward the syslog as plain text to filebeat, add the following content (e.g. receive on port 9003 and forwarsd to port 9004)
  ```
  @version: 4.1
  source s_tls {
      network(
          transport("tls")
          port(9003)
          tls(
              key-file("/mypath/key.pem")
              cert-file("/mypath/cert.pem")
              peer-verify("optional-untrusted")
          )
      );
  };

  destination d_logs {
      tcp("127.0.0.1" port(9004));
  };

  log {
      source(s_tls);
      destination(d_logs);
  };

  ```
- Start the syslog-ng server

  syslog-ng -e -d -v --no-caps --foreground -f syslog-ng.conf
---
title: Processes
geekdocHidden: true
slug: processes
weight: -9
---
Process checks are use to monitor OS processes.
<br>
These checks will be scheduled to run at a fixed interval (default 30 seconds intervals).
<br>
This page shows how to configure emedge-agent process check.

# Configuration Steps
- Ensure the emedge-agent is properly installed, as described <a href="{{< relref "installation/emedge/emedge-agent/installation.md" >}}">here</a>
- Navigate to emedge-agent installation directory (e.g. /opt/emedge-agent)
- Edit config.yml in checks/process to add the process monitor configuration
- Reload the emedge-agent configuration

## Example: to add a process monitor for process with name "proc1", do the following
  - Add one or more sections under 'checks' to **checks/process/config.yml**
    ```yaml
    checks:
      - name: check1
        enabled: false
        process_name: proc1
        interval_secs: 30
      - name: check2
        ...<snipped>...
    ```
  - Run **emedge-agent reload** to trigger emedge-agent to reload the config
  - The process will be monitored and metrics collected will now be forwarding to **emedge**
---
title: Windows services
geekdocHidden: true
slug: winsvc
weight: -9
---
Windows service checks are use to monitor status of Window services.
<br>
These checks will be scheduled to run at a fixed interval (default 30 seconds intervals).
<br>
This page shows how to configure emedge-agent process check.

# Configuration Steps
- Ensure the emedge-agent is properly installed, as described <a href="{{< relref "installation/emedge/emedge-agent/installation.md" >}}">here</a>
- Navigate to emedge-agent installation directory (e.g. /opt/emedge-agent)
- Edit config.yml in checks/winsvc to add the winsvc monitor configuration
- Reload the emedge-agent configuration

## Example: to add a winsvc monitor for windows service with name "fax", do the following
  - Add one or more sections under 'checks' to **checks/winsvc/config.yml**
    ```yaml
    checks:
      - name: check1
        enabled: false
        service_name: fax
        interval_secs: 30
        ensure_state: RUNNING # valid values are STOPPED, RUNNING, PAUSED
      - name: check2
        ...<snipped>...
    ```
  - Run **emedge-agent reload** to trigger emedge-agent to reload the config
  - The process will be monitored and metrics collected will now be forwarding to **emedge**
---
title: Scripts
geekdocHidden: true
slug: scripts
weight: -8
---
Custom script checks are well suited to collect metrics from custom applications or special systems.
<br>
These checks will be scheduled to run at a fixed interval (default 30 seconds intervals).
<br>
This page looks at how to configure custom emedge-agent script check.

# Configuration steps
- Ensure the emedge-agent is properly installed, as described <a href="{{< relref "installation/emedge/emedge-agent/installation.md" >}}">here</a>
- Navigate to emedge-agent installation directory (e.g. /opt/emedge-agent)
- Edit config.yml in checks/scripts to add the script configuration
- Reload the emedge-agent

# How to write a custom script
- emedge expects a JSON output from a custom script, in the form of a JSON array of monitor instances (and metrics)
- "name" property of each monitor instance is used as the name of that monitor instance
## Example: to add a custom script sample_check.sh, do the following
  - Sample content of **sample_check.sh**
    ```shell
    #!/bin/sh
    VAL1=111
    VAL2=222
    cat << EOF
    [
      {
        "name" : "monitor1",
        "sample_result1" : ${VAL1},
        "sample_result2" : ${VAL2}
      },
      {
        "name" : "monitor2",
        "sample_result1" : ${VAL1},
        "sample_result2" : ${VAL2}
      }
    ]
    EOF
    ```
  - Add the following content to **config.yml**
    ```yaml
    checks:
      - name: sample_check
        interval_secs: 30
        enabled: false
        script: sample_check.sh
        args:
          - myarg1
          - myarg2
    ```
  - Run **emedge-agent check script** to do a test run to check the configurations and validate the script output
  - Run **emedge-agent reload** to trigger emedge-agent to reload the config
  - The metrics collected by custom script check will now be forwarding to **emedge**




---
title: Files
geekdocHidden: true
slug: files
weight: -8

---
File checks are use to monitor new content in files and optionally forwards these new contents as logs
<br>
These checks will be scheduled to run at a fixed interval (default 30 seconds intervals).
<br>
This page shows how to configure emedge-agent file check.

# Configuration Steps
- Ensure the emedge-agent is properly installed, as described <a href="{{< relref "installation/emedge/emedge-agent/installation.md" >}}">here</a>
- Navigate to emedge-agent installation directory (e.g. /opt/emedge-agent)
- Edit config.yml in checks/file to add the file monitor configuration
- Reload the emedge-agent configuration

## Example: to add a file monitor for file with path "/tmp/my_sample.log", do the following
  - Add one or more sections under 'checks' to **checks/file/config.yml**
    ```yaml
    checks:
      - name: 'sample_file_check_1'
        enabled: false
        interval_secs: 30
        filepath: /tmp/my_sample.log
        forward_as_logs: false
        line_checks:
          - name: 'check1'
            contains: 'abc'
          - name: 'check2'
            regex: 'e.g. error2=.*'
      - name: 'sample_file_check_2'
        ...<snipped>...
    ```
  - Run **emedge-agent reload** to trigger emedge-agent to reload the config
  - The file will be monitored and metrics collected will now be forwarding to **emedge**
---
title: Directories
geekdocHidden: true
slug: directories
weight: -8

---
File checks are use to monitor files and subdirectories of a specific directory
<br>
These checks will be scheduled to run at a fixed interval (default 30 seconds intervals).
<br>
This page shows how to configure emedge-agent file check.

# Configuration Steps
- Ensure the emedge-agent is properly installed, as described <a href="{{< relref "installation/emedge/emedge-agent/installation.md" >}}">here</a>
- Navigate to emedge-agent installation directory (e.g. /opt/emedge-agent)
- Edit config.yml in checks/directory to add the directory monitor configuration
- Reload the emedge-agent configuration

## Example: to add a directory monitor for directory with path "/folder1", do the following
  - Add one or more sections under 'checks' to **checks/directory/config.yml**
    ```yaml
    checks:
      - name: 'sample_directory_check1'
        enabled: true
        interval_secs: 30
        path: '/folder1'
      - name: 'sample_directory_check2'
        ...<snipped>...
    ```
  - Run **emedge-agent reload** to trigger emedge-agent to reload the config
  - The directory will be monitored and metrics collected will now be forwarding to **emedge**
---
title: Configure checks
geekdocHidden: true
slug: config_checks
---

*  <a href="/installation/emedge/emedge-agent/config_checks/files">Files</a>
*  <a href="/installation/emedge/emedge-agent/config_checks/directories">Directories</a>
*  <a href="/installation/emedge/emedge-agent/config_checks/processes">Processes</a>
*  <a href="/installation/emedge/emedge-agent/config_checks/scripts">Scripts</a>
*  <a href="/installation/emedge/emedge-agent/config_checks/winsvc">Windows Services</a>
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

---
title: Emedge Agent
weight: 4
geekdocHidden: true
---

# About emedge-agent
**emedge-agent** is a software that runs on your managed hosts. It collects monitoring and performance data from hosts and sends them to **emedge** for aggregation and forwarding to **{{% company %}}**, where you can analyze the data.

* <a href="/installation/emedge/emedge-agent/installation">Installation</a>
* <a href="/installation/emedge/emedge-agent/config_checks">Configure Checks</a>
---
title: Installation
geekdocHidden: true
slug: installation
---
## To get started, select your platform
<a href="#installation-steps-for-emedge-on-windows">
  <img src="/images/platform_windows.png" />
</a>
<a href="#installation-steps-for-emedge-on-linux">
  <img src="/images/platform_centos.png" />
</a>
<a href="#installation-steps-for-emedge-on-mac-os-x">
  <img src="/images/platform_macosx.png" />
</a>
<a href="#installation-steps-for-emedge-as-a-docker-container">
  <img src="/images/platform_docker.png" />
</a>

## Installation steps for emedge on Windows
- Download <a href="https://download.{{% domain %}}/emedge/emedge-v12-latest.msi" target="_blank">Windows MSI Installer for emedge</a>
- Install via command line
  - search for Command Prompt and right click "Run as administrator".
  - run following command
    ```
    msiexec.exe /qn /i emedge-v12-latest.msi CV=mycv.{{% cvdomain %}} SITE=my-emedge-site1
    ```
    * **CV=mycv.{{% cvdomain %}}** specifies the domain hostname of CloudVista instance that this emedge should forward data to
    * **SITE=mysitename** specifies the name of this emedge site

  - Note:
    * emedge will also be configured automatically as windows service named 'emedge'
    * Installation log files at %TEMP%\MSI*.LOG.

## Installation steps for emedge on Linux
Linux - one liner installation
  ```
  CV=mycv.{{% cvdomain %}} SITE=mysitename SERVICE=1 sh -c "$(curl -skL https://download.{{% domain %}}/emedge/install.sh)"
  ```
  * **CV=mycv.{{% cvdomain %}}** specifies the domain hostname of CloudVista instance that this emedge should forward data to
  * **SITE=mysitename** specifies the name of this emedge site
  * **SERVICE=1** specifies to automatically install emedge as a system service
  * If you do not wish to install as a system service, set to **SERVICE=0**

## Installation steps for emedge on Mac OS X
Manual installation (Linux or Apple OSX)
- Download and unzip <a href="https://download.{{% domain %}}/emedge/emedge-v12-latest.zip" target="_blank">latest emedge software package</a>
- cd into **emedge** folder and run **emedge config**

## Installation steps for emedge as a Docker container
Containerized version of the emedge. The official <a href="https://hub.docker.com/r/netgain/emedge">Docker image</a> and setup instructions is available on Docker Hub.

## Installation as system service or Windows service
- Turn to emedge folder: **cd \<dir>**
- Run **.\emedge service install**

## Supported environments
**emedge** can run on Linux, Windows or Mac OS.
- For Linux, recommended OS distribution is **Centos** or **Ubuntu**
- Recommended specs:
	* **Minimum**: CPU: **Intel i3-equivalent** or above, **1GB** RAM, **5GB** disk space
	* **Ideal**:   CPU: **Intel i5-equivalent** or above, minimum **4GB** RAM, **50GB** disk space

## Additional notes
- All logs will be saved into **emedge.log** in the installation directory
- To stop emedge, simply run **emedge stop**
- To set the JVM maximum heap memory, use **emedge setmem** command e.g. emedge setmem 2g (need to restart service)
- Run **emedge -h** for help on more commands

---
title: Emedge
weight: 3
---

# About emedge
**emedge** is a software that runs on your local site. It collects metrics and logics from the IT network and hosts (with **emedge-agent** installed) and sends them to **central monitoring site**, where you can analyze and visualize your monitoring and performance data. You only need to deploy an instance of emedge per local site.

* <a href="/installation/emedge/installation">Install and configure</a>

# About emedge-agent
**emedge-agent** is a lightweight software that runs on your managed hosts. It collects monitoring and performance data from hosts and sends them to **emedge** for aggregation and forwarding to **central monitoring site**, where you can analyze the data.

* <a href="/installation/emedge/emedge-agent">Install and configure</a>

<!--
# About netgain-agent
**netgain-agent** is the older version of agent that runs on your managed hosts. It collects monitoring and performance data from hosts and sends them to **emedge** for aggregation and forwarding to **central monitoring site**, where you can analyze the data.

* <a href="/installation/emedge/netgain-agent">Install and configure</a>
-->

# About filebeat
**filebeat** is a lightweight software that runs on your managed hosts. It is a lightweight, open-source log shipper that collects logs from various sources and forwards them to emedge. It monitors the log files or locations that you specify, collects log events, and then sends them to emedge for processing

* <a href="/installation/emedge/Filebeat">Install and configure</a>

# About metricbeat
**metricbeat** is a lightweight software that runs on your managed hosts. It collects monitoring and performance data from hosts and sends them to **emedge** for aggregation and forwarding to **central monitoring site**, where you can analyze the data.

* <a href="/installation/emedge/Metricbeat">Install and configure</a>

---
title: NetGain Agent
weight: 3
geekdocHidden: true
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

---
title: Installation 
weight: 12
---

Installations related        will be available here.
---
title: MIB Browser
geekdocHidden: true
slug: mibbrowser
---

This tool helps user to load the devices’ MIBs file to {{% company %}} Infrastructure Monitoring server, to browse OID information and to allow user to know the particular OID of the device. 

Click on \<MIB Browser> and then click on <+Load new mib>.


![Screenshot](/administrative/images/{{% imagehome %}}/mib1.png)

&nbsp;

Then click on \<Choose File> to choose the devices MIB file.

![Screenshot](/administrative/images/{{% imagehome %}}/mib2.png)

&nbsp;

Then click on \<Upload> to upload MIB file to Infrastructure Monitoring server.

![Screenshot](/administrative/admin/images/{{% imagehome %}}/mib3.png)

&nbsp;

Screen will appear with the MIB file under \<Loaded mibs>.

![Screenshot](/administrative/images/{{% imagehome %}}/mib4.png)

&nbsp;

Then user can browse OID information.

![Screenshot](/administrative/images/{{% imagehome %}}/mib5.png)
---
title: Ping
geekdocHidden: true
slug: ping
---

This tool helps user to verify the connectivity between {{% company %}} Infrastructure Monitoring server and the destination devices. 

Click on \<Ping> then enter the IP address of destination devices. Then click on \<Execute> to start ping test.  The screen will appear with the ping result.


![Screenshot](/administrative/images/{{% imagehome %}}/ping1.png)
---
title: IP Calculator
geekdocHidden: true
slug: ipcalculator
---

This tool helps user to calculate IP address. 

Click on \<IP Calculator> then enter the IP Address and IP Mask bits you want to calculate. Then click on \<Calculate>, the screen will appear IP calculate result.


![Screenshot](/administrative/images/{{% imagehome %}}/ipcalculator1.png)
---
title: SNMPWALK
geekdocHidden: true
slug: snmpwalk
---

This tool helps user to test the SNMP connectivity between {{% company %}} EM server to the destination devices and get the SNMP. 

Click on \<SNMPWALK> then enter the IP address of destination devices, Community, Version, Port, and Timeout. 

Then click on \<Execute> to start SNMPWALK. The screen will appear with the SNMPWALK result. You can generate SNMPWALK to text file by click on \<Download>.


![Screenshot](/administrative/images/{{% imagehome %}}/snmpwalk1.png)
---
title: Diagnostic
geekdocHidden: true
slug: diagnostic
---


Tools for troubleshooting faults. Click on \<Diagnostic> at the top navigation bar.

![Screenshot](/administrative/images/{{% imagehome %}}/diagnostic1.png)

&nbsp;
* <a href="/administrative/tools/diagnostic/ping/">Ping</a>
* <a href="/administrative/tools/diagnostic/snmpwalk/">SNMPWALK</a>
* <a href="/administrative/tools/diagnostic/ipcalculator/">IP Calculator</a>
* <a href="/administrative/tools/diagnostic/mibbrowser/">MIB Browser</a>---
title: "Agent Download"
geekdocHidden: true
slug: "agentdownload"
---
Agent Download is used to guide users through the process of installing the NetGain Agent on different operating systems, providing instructions and necessary download links.

The ‘Download’ tab displays the installation instructions for downloading and installing the NetGain Agent on both Windows and Unix/Linux platforms.

![AD1](/administrative/admin/tools/images/netgain/AD1.png)

# Test

Test is used to run various diagnostic and setup scripts on target machines where the NetGain Agent is installed or needs to be installed.

The ‘Test’ tab displays the options for testing scripts related to the NetGain Agent.

![AD2](/administrative/admin/tools/images/netgain/AD2.png)
Information includes:
* IP: a dropdown menu to choose test script and a field to enter IP address
* Test: execute the selected script 
* Clear output: remove previous results from display
* Clear scripts cache: reset and clear the cache 

# Scripts

Scripts are used to execute various tasks on target machines related to system management and database operations.

The ‘Scripts’ tab displays options for running scripts related to the NetGain Agent.

![AD3](/administrative/admin/tools/images/netgain/AD3.png)
Information includes:
* IP: input IP address of the machine
* System: tasks like performance monitoring, resource allocation, or system health checks
* Information: tasks like database backups, performance tuning, or querying database statistics
---
title: Tools
geekdocHidden: false
slug: tools
---

{{% company %}} Infrastructure Monitoring provides diagnostic tools for troubleshooting and agents for installation on the servers that needs to be monitored. Click on \<Tools> at the left navigation bar.

![screenshots](/administrative/images/netgain/tools1.png)
&nbsp;

* <a href="/administrative/tools/diagnostic/">Diagnostic</a>
* <a href="/administrative/tools/agentdownload/">Agent Download</a>

---
title: License
geekdocHidden: true
slug: license
---

License shows the user the details of the {{% company %}} Infrastructure Monitoring license information on enabled modules, used license nodes, total license nodes.

Click on the \<License> in the Top Navigation Bar.


![Screenshot](/administrative/images/{{% imagehome %}}/license1.png)

&nbsp;

The page will show the info:
* Serial number
* Infrastructure Monitoring model 
* License Expiry date 
* Max licensed nodes XXXX (currently used: XX)
* Max NetFlow Flow Rate XXX flows per sec
* Add-ons modules eg. Unlimited Ping, Network Config Manager, IP Address Manager, Asset Manager
* Advance monitors 
---
title: Status
geekdocHidden: true
slug: status
---

This sub module provides the detail status of the {{% company %}} Infrastructure Monitoring.

![Screenshot](/administrative/images/{{% imagehome %}}/status1.png)

&nbsp;

Includes below details: 

![Screenshot](/administrative/images/{{% imagehome %}}/status2.png)

&nbsp;

* Status – consist of {{% company %}} Infrastructure Monitoring system status of Monitors, Alarms, Memory, CPU and Threads
* User session – provides a list active user session
* Monitor queue – provides overview of monitors status
* Threads – provides overview of Thread status
* Memory – provides overview of Memory usage
* Metrics – provides EM performance statistics
* Data checker – a simple diagnosis tool for monitor troubleshoot for admin user
---
title: Rest APIs
geekdocHidden: true
slug: restapis
---

This module describes the REST API and resources provided by {{% company %}} Infrastructure Monitoring.

Click on \<Rest APIs> in the navigation bar.

![Screenshot](/administrative/images/{{% imagehome %}}/restapi1.png)

&nbsp;

![Screenshot](/administrative/images/{{% imagehome %}}/restapi2.png)
---
title: System
geekdocHidden: true
slug: system
---


System page allows End-User to see the overview of logs on the {{% company %}} Infrastructure Monitoring systems, system diagnostics to check on the system for error and system uptime.


* <a href="/administrative/admin/system/status">Status</a>
* <a href="/administrative/admin/system/license">License</a>
* <a href="/administrative/admin/system/restapis">Rest APIs</a>---
title: Operation Logs
geekdocHidden: true
slug: operationlog
---

Click on \<Operation logs> in the navigation bar.

![Screenshot](/administrative/images/{{% imagehome %}}/operationlog1.png)

&nbsp;

It provides {{% company %}} Infrastructure Monitoring user login event, change of account or other Ops related events.

![Screenshot](/administrative/images/{{% imagehome %}}/operationlog2.png)
---
title: Debug Logs
geekdocHidden: true
slug: debuglog
---

Click on \<Debug logs> in the Top navigation bar.

![Screenshot](/administrative/images/{{% imagehome %}}/debuglog1.png)

&nbsp;

Turn on the debug log for debugging purpose only, choose the level of the logs to enable debugging.

![Screenshot](/administrative/images/{{% imagehome %}}/debuglog2.png)

&nbsp;

![Screenshot](/administrative/images/{{% imagehome %}}/debuglog3.png)
---
title: Scheduler Logs
geekdocHidden: true
slug: schedulerlog
---

Click on \<Scheduler logs> in the Top navigation bar.

![Screenshot](/administrative/images/{{% imagehome %}}/schedulerlog1.png)

&nbsp;

 It shows the scheduler running history logs:

![Screenshot](/administrative/images/{{% imagehome %}}/schedulerlog2.png)
---
title: Notification Logs
geekdocHidden: true
slug: notificationlog
---

Click on \<Notification logs> in the navigation bar.

![Screenshot](/administrative/images/{{% imagehome %}}/notificationlog1.png)

&nbsp;

It provides the history detailed records that how many notification messages been sent.

![Screenshot](/administrative/images/{{% imagehome %}}/notificationlog2.png)
---
title: Internal Logs
geekdocHidden: true
slug: internallog
---

Click on \<Internal logs> in the Top navigation bar.

![Screenshot](/administrative/images/{{% imagehome %}}/internallog1.png)

&nbsp;

It consists of internal logs of {{% company %}} Infrastructure Monitoring and it is used by {{% company %}} support team during troubleshooting.

To download the log file, just click on the file name:

![Screenshot](/administrative/images/{{% imagehome %}}/internallog2.png)

&nbsp;

It will be saved to a text file, please forward this file to {{% company %}} Support team for further investigations.	
---
title: System Logs
geekdocHidden: true
slug: systemlog
---

The End-User can quickly download Infrastructure Monitoring system related logs such as System Log, Operation Log, Vista logs, Notifications log, Scheduler log, Internal log, and Debug log as text files or Excel file for analysis.

Most frequently checked logs are: Notification and Internal logs.

Click on \<System logs> in the navigation bar.

![Screenshot](/administrative/images/{{% imagehome %}}/systemlog1.png)

&nbsp;

You may query the system log by specifying the time range.

![Screenshot](/administrative/images/{{% imagehome %}}/systemlog2.png)
---
title: Logs
geekdocHidden: true
slug: logs
---

Click on \<Logs> in the Top navigation bar.

![Screenshot](/administrative/images/{{% imagehome %}}/logs1.png)

&nbsp;

* <a href="/administrative/admin/logs/systemlog">System Logs</a>
* <a href="/administrative/admin/logs/operationlog">Operation Logs</a>
* <a href="/administrative/admin/logs/notificationlog">Notification Logs</a>
* <a href="/administrative/admin/logs/schedulerlog">Scheduler Logs</a>
* <a href="/administrative/admin/logs/internallog">Internal Logs</a>
* <a href="/administrative/admin/logs/debuglog">Debug Logs</a>


---
title: Roles
geekdocHidden: true
slug: roles
---

The Administrator can control the newly created user’s access right through Roles. To create new role for the End-User. Click on <+Create> in the page.

![Screenshot](/administrative/images/{{% imagehome %}}/role1.png)

&nbsp;

The Administrator will select what kind of role the new user will be.
* <strong>Role Users</strong> - selection of user account. Click the \<check box> to select
* <strong>Role management domains</strong> - selection of devices/business which the user can access.
* <strong>Role topology view</strong> - selection of topology which the user can view
* <strong>Role access rights</strong> - Features of the system which the user can access and use.

![Screenshot](/administrative/admin/images/{{% imagehome %}}/role2.png)

&nbsp;

![Screenshot](/administrative/images/{{% imagehome %}}/role3.png)

&nbsp;

Once done, click on \<Save>.

![Screenshot](/administrative/images/{{% imagehome %}}/role4.png)


---
title: Users
geekdocHidden: true
slug: users
---

You can specify different access rights for different roles, for example, specifying that business staff only receive system warnings but not able to perform operations. Different access rights will affect the administrative rights you have, and thus access to features in the Administrator interface.

Click on \<Account> - \<Users>

![Screenshot](/administrative/images/{{% imagehome %}}/user1.png)

&nbsp;

Click on <+Create>

![Screenshot](/administrative/images/{{% imagehome %}}/user2.png)

&nbsp;

Enter the information about the user. These are the basic information to be entered to create new user.

* Username
* Password
* Display Name

![Screenshot](/administrative/images/{{% imagehome %}}/user3.png)

&nbsp;

Click on \<Save> once information is filled in. 

![Screenshot](/administrative/images/{{% imagehome %}}/user4.png)
---
title: Access Control
geekdocHidden: true
slug: accesscontrol
---

This module defines the access control rules to only grant the access for the authorized users.

On the Top Navigation Bar, click on \<Accounts> - \<Access Control>

![Screenshot](/administrative/images/{{% imagehome %}}/access1.png)

&nbsp;

To create new rule, click on <+ Add rule>

![Screenshot](/administrative/images/{{% imagehome %}}/access2.png)

&nbsp;	

Enter the information
* Name - name of this rule
* Users filter – only specified users will be granted access
* Allowed hosts – only specified host will be granted access 

![Screenshot](/administrative/images/{{% imagehome %}}/access3.png)

Once finished, click on <Save> to save the rule.

&nbsp;

Rules will be displayed in the access control list as below: 

![Screenshot](/administrative/images/{{% imagehome %}}/access4.png)
---
title: My Profile
geekdocHidden: true
slug: myprofile
---

This module allows you to change your current login user profile.

Click on the \<My Profile> in the Top Navigation Bar

![Screenshot](/administrative/images/{{% imagehome %}}/profile1.png)

&nbsp;

You can specify or change some information including 
* Username
* Password
* Description
* Email
* Mobile
* LINE ID

![Screenshot](/administrative/images/{{% imagehome %}}/profile2.png)

&nbsp;

Once finished, click on \<Save> to save the changes.

&nbsp;

### Modify Photo
This sub module allows you to change the user profile photo.

Click on \<Modify Photo>

![Screenshot](/administrative/images/{{% imagehome %}}/profile3.png)

&nbsp;

Choose the photo by clicking on \<Choose file>, and then click on \<Upload photo> to upload and make changes.  Once finished, click on \<Save> to save the changes.

&nbsp;

### Enable or Disable 2FA
This sub module allows you to enable/disable 2FA when logging in to {{% company %}} Infrastructure Monitoring web GUI.

Click on \<Enable 2FA>

![Screenshot](/administrative/images/{{% imagehome %}}/2fa1.png)

&nbsp;

Click on \<OK> to confirm enable of 2FA

![Screenshot](/administrative/images/{{% imagehome %}}/2fa2.png)

&nbsp;

Follow the steps below to complete the 2FA setup

![Screenshot](/administrative/images/{{% imagehome %}}/2fa3.png)

&nbsp;

To disable the 2FA, click on < <img src="/administrative/images/{{% imagehome %}}/disableicon.PNG" width="150px"> >

![Screenshot](/administrative/images/{{% imagehome %}}/2fa4.png)

&nbsp;

Click on \<OK> to confirm disable of 2FA

![Screenshot](/administrative/images/{{% imagehome %}}/2fa2.png)

---
title: Accounts
geekdocHidden: true
slug: accounts
---


The administrator will create and manage accounts for the user.
  
The administrator can assign a client IP address (or IP address segment) for each user, enhancing security as an authorized user would require a client IP address as well as a username and password to successfully log in.

Accounts consists of four modules:

* <a href="/administrative/admin/accounts/roles/    ">Creation and management of Roles</a>
* <a href="/administrative/admin/accounts/users/">Creation and management of Users</a>
* <a href="/administrative/admin/accounts/accesscontrol/">Access Control rules</a>
* <a href="/administrative/admin/accounts/myprofile/">Change of My Profile</a>---
title: Create Auto Discovery Task
geekdocHidden: true
slug: autodiscovery
---

Select the Schedule task Type as \<Auto discovery> .

Enter a task name, choose start, end time, internal and count (how many times will this task run).  Specify the parameters for IP address, SNMP community string and SNMP port.


![Screenshot](/administrative/images/{{% imagehome %}}/job2.png)

&nbsp;

Once finished, click on \<Save> to save the changes.---
title: Create Device Shutdown Task
geekdocHidden: true
slug: deviceshutdown
---

Select the Schedule task Type as \<Device shutdown task>

![Screenshot](/administrative/images/{{% imagehome %}}/job3.png)

&nbsp;

Enter a task name, choose start, end time, internal and count (how many times will this task run).

Specify the IP address and operation value (either shutdown or reboot).

Once finished, click on \<Save> to save the changes.
---
title: Jobs
geekdocHidden: true
slug: jobs
---


This module enables auto admin job to run, namely Auto discovery and Device shutdown.

Click on \<Jobs> in the Top navigation bar

![Screenshot](/administrative/images/{{% imagehome %}}/job1.png)

&nbsp;

Click on <+ Create> to create new Task.

* <a href="/administrative/admin/jobs/autodiscovery">Create Auto Discovery Task</a>
* <a href="/administrative/admin/jobs/deviceshutdown">Create Device Shutdown Task</a>

---
title: Indices
geekdocHidden: true
slug: indices
---

All performance data and logs are stored in Elasticsearch on a daily basis as indices.
* ng_perf – stores all monitoring related data in daily basis
* ng_flow_flows – stores all NetFlow related data in daily basis
* ng_logs – stores all SIEM log related data in daily basis
* ng_v11_alarms_– stores all current alarms related data
* ng_v11_history_alarms– stores all history alarm related data

![Screenshot](/administrative/images/{{% imagehome %}}/indices1.png)

&nbsp;

### Delete Indices
To delete indices, click on < <img src="/administrative/images/{{% imagehome %}}/deleteicon.png" width="20px"> >

![Screenshot](/administrative/images/{{% imagehome %}}/indices2.png)

&nbsp;

Click on \<OK> to confirm deletion of indices.

![Screenshot](/administrative/images/{{% imagehome %}}/indices3.png)

---
title: Shards
geekdocHidden: true
slug: shards
---

Click on \<Shards> in the Top navigation bar.

![Screenshot](/administrative/images/{{% imagehome %}}/shards1.png)

&nbsp;


The shards page display how many shards are open in Elasticsearch. The maximum shards that one Elasticsearch can handle is 3000.

Once reached 3000, Elasticsearch service will stop, and {{% company %}} Infrastructure Monitoring will stop services. Please contact {{% company %}} support prior to the shards reaching 3000.

![Screenshot](/administrative/images/{{% imagehome %}}/shards2.png)

---
title: Cluster Nodes
geekdocHidden: true
slug: clusternodes
---

This module provides overview of the Elasticsearch nodes health condition. 

Click on \<Cluster nodes> in the Top navigation bar.

![Screenshot](/administrative/images/{{% imagehome %}}/clusternode1.png)

&nbsp;

Once disk utilization hits 95%, Elasticsearch services will stop and {{% company %}} Infrastructure Monitoring services will stop. Please contact NetGain prior to the disk % > 90.

![Screenshot](/administrative/images/{{% imagehome %}}/clusternode2.png)
---
title: Maintenance
geekdocHidden: true
slug: maintenance
---

Click on \<Maintenance> in the Top navigation bar.

![Screenshot](/administrative/images/{{% imagehome %}}/maintenance1.png)

&nbsp;

This page shows you two options:

* Data retention
* Snapshots
* Backup and restore.

### Data Retention

Data retention setting can be changed by clicking on <img src="/administrative/images/{{% imagehome %}}/changesettingsicon.png" width="100px">

Change the retention period for different data:

* **Configurations data**: specify how long the system keeps the backup of configuration.
* **Metrics historical data**: specify how long the system keeps the Metrics performance data.
* **Logs data**: specify how long the system keeps the SIEM related logs data.
* **NetFlow traffic flow data**: specify how long the system keeps the NetFlow data.
* **APM transactions data**: specify how long the system keeps the APM data.

![Screenshot](/administrative/images/{{% imagehome %}}/maintenance2.png)

&nbsp;

Once completed, click on <img src="/administrative/images/{{% imagehome %}}/savesettingsicon.png" width="90px">

![Screenshot](/administrative/images/{{% imagehome %}}/maintenance3.png)

&nbsp;

# Snapshots 

Snapshots are used for critical system management and data protection functions. They create point-in-time copies of the system’s state, enabling quick data recovery, system rollbacks, and historical analysis. 

The ‘Snapshots’ tab displays a list of system snapshots.

![Screenshot](/administrative/images/netgain/SSEAF1.png)

Information includes:

* **Snapshot name**: name and timestamp of snapshot.
* **Status**: outcome of the snapshot.
* **Duration**: time taken to create the snapshot.
* **Indices**: number of data indices included in the snapshot.

# Take a Snapshot 

Click on <img src="/administrative/images/{{% imagehome %}}/snapshot.png" width="150px"> to take a snapshot of the database.

![Screenshot](/administrative/images/netgain/SSEAF2.png)

# Delete a Snapshot

Hover over the snapshot and click on <img src="/administrative/images/{{% imagehome %}}/trash.PNG" width="35px"> to delete the selected snapshot.

![Screenshot](/administrative/images/{{% imagehome %}}/SSEAF3.png)

To bulk delete, tick the snapshots to be deleted and click on <img src="/administrative/images/{{% imagehome %}}/trash2.PNG" width="35px"> to delete them.

![Screenshot](/administrative/images/{{% imagehome %}}/SSEAF4.png)

# Restore Indices

Click on the snapshot.

![Screenshot](/administrative/images/{{% imagehome %}}/SSEAF5.png)

Once clicked, a panel will appear and display the detailed contents of the system snapshot.

![Screenshot](/administrative/images/{{% imagehome %}}/SSEAF6.png)

Tick the indices and click on <img src="/administrative/images/{{% imagehome %}}/restore.PNG" width="150px"> to restore specific parts of the system.

![Screenshot](/administrative/images/{{% imagehome %}}/SSEAF7.png)

# Space Estimation 

Space Estimation is used to estimate storage requirements for monitoring data.

The ‘Space Estimation’ tab displays the options for managing data storage and system settings.

![Screenshot](/administrative/images/{{% imagehome %}}/SSEAF8.png)

Information includes:

* **Monitor type**: a dropdown menu allowing users to select the type of monitor.
* **Monitor interval**: a dropdown menu to select the interval for monitoring.
* **Data Replication Count**: a field to specify the number of times the data is replicated.
* **Instance Count**: a field to specify the number of instances for the monitoring type.

# Archives 

Archives is used for managing archived data within the system. Users can view, search, and restore archived logs, metrics, APM data, and NetFlow data. Archiving is essential for optimizing storage, enhancing performance, ensuring compliance, and managing data growth.

![Screenshot](/administrative/images/{{% imagehome %}}/SSEAF9.png)

# Dashboards

Dashboards are used for organizing, managing, and collaborating on dashboards within the system.

The ‘Full List’ tab displays an overview of all available dashboards, their ownership, categorization, and sharing status, which facilitates better management and collaboration.

![Screenshot](/administrative/images/{{% imagehome %}}/SSEAF10.png)

Information includes:

* **User**: username of the individual who created the dashboard.
* **Group**: group under which the dashboard falls.
* **Name**: name of the dashboard.
* **Shared**: indicates whether the dashboard is shared with other users.

# Delete Dashboard

Click on <img src="/administrative/images/{{% imagehome %}}/trash.PNG" width="35px"> to delete the dashboard.

![Screenshot](/administrative/images/{{% imagehome %}}/SSEAF11.png)

# Backup and Restore

This tab is to do the backup and restore for {{% company %}} configuration.

![Screenshot](/administrative/images/{{% imagehome %}}/maintenance4.png)

&nbsp;

* **Upload local backup**: to upload a local backup copy to the system.
* **Backup now**: to do the configuration backup now.
* **Download to local**: to download the configuration as a zipped copy to the local drive.
* **Restore**: restore the configuration that you selected.
* **Delete**: delete the backup copy.
---
title: ElasticSearch
geekdocHidden: true
slug: elasticsearch
---

This module provides the information of Elasticsearch, and also provide the  functions to configure data retention, backup and restore, indices status.

Click on \<Elasticsearch> in the navigation bar. 

![Screenshot](/administrative/images/{{% imagehome %}}/elastic1.png)

&nbsp;

* <a href="/administrative/admin/elasticsearch/maintenance">Maintenance</a>
* <a href="/administrative/admin/elasticsearch/indices">Indices</a>
* <a href="/administrative/admin/elasticsearch/shards">Shards</a>
* <a href="/administrative/admin/elasticsearch/clusternodes">Cluster Nodes</a>
---
title: Admin
geekdocHidden: false
slug: admin
---

The Admin module provides the function to manage the {{% company %}} Infrastructure Monitoring system. This module is meant for managing {{% company %}} Infrastructure Monitoring, and it is only open for the users who are granted the admin role. This module includes five sub content: 

* Accounts: Creation of user, roles, change of user profile and configure access control
* Jobs: Task schedular
* Systems: Status of Infrastructure Monitoring, License info, Cloud Vista settings, Setting, Upgrade, Shutdown of Infrastructure Monitoring and defined REST APIs
* Elasticsearch: Indices, Shard, Nodes status and Backups
* Logs: Infrastructure Monitoring System logs

To navigate to the Admin module, choose the last icon from the Left navigation bar, as shown in below:

![Screenshot](/administrative/images/{{% imagehome %}}/admin1.png)

&nbsp;

* <a href="/administrative/admin/accounts/">Account</a>
* <a href="/administrative/admin/jobs/">Jobs</a>
* <a href="/administrative/admin/system/">System</a>
* <a href="/administrative/admin/elasticsearch/">ElasticSearch</a>
* <a href="/administrative/admin/logs/">Logs</a>
---
title: Sys Admin & Tools
geekdocHidden: true
weight: 12
---

This section documents the systems administration functions and the tools provided to help the administrator.

* <a href="/cloud_vista/sysadmin/admin">Admin</a>
* <a href="/cloud_vista/sysadmin/tools">Tools</a>
---
title: "Emedge Sites"

slug: "sites"
---

Sites are used for monitoring and managing distinct environments or deployments within the organization.

The ‘Current Sites’ tab displays sites that are being monitored by the system.
![screenshot](/administrative/emedge_sites/images/Sites1.png)
**Basic information includes:**
- Site Name
- Site ID
- State
- Site IP
- Site Version

# View details of Sites

Click on the site name to view the details of the site.

![Screenshot](/administrative/emedge_sites/images/Sites2.png)

Once clicked, the page will navigate to the dedicated page of the selected site.

![Screenshot](/administrative/emedge_sites/images/Sites3.png)

This page provides details of the site and options for:
- Site’s health
- Update patch
- Disconnect site
- Backup images and logs

Click on ![Screenshot](/administrative/emedge_sites/images/health.png) to view the health of the site.

![Screenshot](/administrative/emedge_sites/images/Sites4.png)

Once clicked, the page will display the health status of the site.

![Screenshot](/administrative/emedge_sites/images/Sites5.png)

**Information includes:**
- Used Memory: Amount of memory currently used
- Total Memory: Total amount of memory available
- Max Memory: Maximum amount of memory that can be allocated
- Process CPU: CPU usage of the current process
- System CPU: Overall CPU usage of the system

Click on ![Screenshot](/administrative/emedge_sites/images/update.png) to view update patches.

![Screenshot](/administrative/emedge_sites/images/Sites6.png)

Once clicked, the page will display the available update patches.

![Screenshot](/administrative/emedge_sites/images/Sites7.png)

Click on ![Screenshot](/administrative/emedge_sites/images/disconnect.png) to disconnect the remote site.

![Screenshot](/administrative/emedge_sites/images/Sites8.png)

Click on ![Screenshot](/administrative/emedge_sites/images/backup.png) to make backups, delete, or restore.

![Screenshot](/administrative/emedge_sites/images/Sites9.png)

Once clicked, the page will display sites with options to delete or restore and also backup now.

![Screenshot](/administrative/emedge_sites/images/Sites10.png)

Click on ![Screenshot](/administrative/emedge_sites/images/logs.png) to download or tail logs or debug statements.

![Screenshot](/administrative/emedge_sites/images/Sites11.png)

Once clicked, the page will display options to download the latest logs, tail logs, enable, or disable debug statements.

![Screenshot](/administrative/emedge_sites/images/Sites12.png)

# Enable Debug

To get the debug statement, click on <Admin>, <Logs>, then <Debug log>.

![Screenshot](/administrative/emedge_sites/images/Sites13.png)

Copy the Logger.

![Screenshot](/administrative/emedge_sites/images/Sites14.png)

Paste into the package name and click on ![Screenshot](/administrative/emedge_sites/images/enable.png).

![Screenshot](/administrative/emedge_sites/images/Sites15.png)

Successful enabling debug.

![Screenshot](/administrative/emedge_sites/images/Sites16.png)

# Accepting New Sites

Click on Site ID to view details of the site.

![Screenshot](/administrative/emedge_sites/images/Sites17.png)

Once clicked, the page will navigate to the dedicated page of the selected site.

![Screenshot](/administrative/emedge_sites/images/Sites18.png)

Click on ![Screenshot](/administrative/emedge_sites/images/accept.png) to accept the site.

![Screenshot](/administrative/emedge_sites/images/Sites19.png)

Successful site acceptance.

![Screenshot](/administrative/emedge_sites/images/Sites20.png)

The ‘Usage’ tab displays a view of the usage metrics for different aspects of the monitoring platform.

![Screenshot](/administrative/emedge_sites/images/Sites21.png)

**Information includes:**
- Infra Monitoring (Nodes): Bar chart showing the number of nodes being monitored over time
- Logs: Bar chart showing the daily volume of logs in megabytes
- NetFlow: Bar chart showing the daily volume of NetFlow data in megabytes
- Network Configuration Management: Bar chart showing the number of nodes involved in network configuration management
- Application Performance Monitoring: Bar chart showing the daily transaction spans
---
title: Adminstrative
weight: 14
---


---
title: Release notes
weight: 8
---

## NetGain EM Version Release Notes

Please find below for the past release notes: 

---------------------------------------------------------------------------------------------------------------- 
**NetGain EM Change Log v12.2.274 build 969 (release date: 8th Apr 2024)**  
  - Fixes:
    - Metrics naming of objects
    - Batch report - Time range
    - SNMP v3 discovery for Bluecoat devices
    - Aruba AP uptime monitor
    - SSH monitoring of devices
    - Adhoc report saving
    - NCM - show changes
    - Dashboard request headers too large
  - Enchancements:
    - License update to add in the logs
    - Oracle database monitors
    - PostgreSQL monitors
    - NetApp monitors
    - SSO for Azure
    - Oracle Database monitors
    - Traceroute monitor
    - Disk report
    - Grafana
	- additional supporting APIs
	- GeoMap plugin
	- CMDB - asset management plugin
    - OS Process monitor
    - Synthetic monitoring
  - New Implementation:
    - Rest API for Bizview
    - Built-in log parsing for Trendmicro Deep Security logs
    - Supports Elasticsearch v8.11.x
    - Dell Backup Jobs monitor
    - Trend Micro metrics via API
    - Trellix monitors
    - New supported OS: Alma Linux 9.3
    - Integration of MOXA dry contact monitoring
---------------------------------------------------------------------------------------------------------------- 
**NetGain EM Change Log v12.2.160 build 814 (release date: 5th Jul 2023)**  
  - Fixes:
    - Linux Process start time
    - SIEM built-in mappings button not shown
    - Alarm correlation view
    - Cipher issues for Tomcat 8
  - Enchancements:
    - Added SIEM threat detection rules
    - SNMP v3 discovery
    - Rest APIs
    - Metrics and Tags
    - Oracle Database monitors
    - Palo Alto, Huawei, Cisco, Mikrotik, VMware, Extreme, Fortigate monitors
    - System Uptime monitor
    - NetGain Agent for windows OS
    - NCM - Fortinet, Palo Alto
    - Password expiry message email to include more details
  - New Implementation:
    - Azure Single Sign-On (SSO) using OAuth2 and OpenID protocols
    - SNMPtrap to alarm mapping mechanism, based on mib files
    - Monitoring of QAX firewall under Security group
    - Zabbix smart and zbs cluster monitors
    - Monitor exception feature
    - Supports Elasticsearch v8.7.x
    - Supports Filebeat v8.7.x
    - Supports emedge in Raspbian OS 64bit
  - Obsolete:
    - Temporary ignore feature, replaced with monitor exception feature
---------------------------------------------------------------------------------------------------------------- 
**NetGain EM Change Log v11.2.394 build 553 (release date: 16th Nov 2022)**  
  - Fixes:
    - Fix Bug 4051 - 11.1.182|Alicloud Sms wrong info - add 
support to test sms message using json format based on the template format corresponding to the supplied templateCode
    - Fix Bug 4366 - v11-SaaS-SIEM log sources page is not able to display log source from filebeat
    - Fix Bug 4480 - cpu_memory_utilization_additional_info_not_show
    - Fix Bug 4646 - v11-EM-too many opened snmp session
    - Fix Bug 4664 - metric beat windows services adding
    - Fix Bug 4665 - siem_log_watcher_needs_severity_setting
    - Fix Bug 4666 - [change request] v11-SIEM-MAH windows event logs forwarding
    - Fix Bug 4668 - handle potential sms.java hanging issue
    - Fix Bug 4683 - v11.2.x | metricbeat monitors not updating when device is down
    - Fix Bug 4685 - v11-EM-missing MOs issues - add delay in shutdown hook until MOs move operation is completed, if there is an existing MO operation in progress
    - Fix Bug - SNMP custom monitors not able to capture data
    - Fix for critical monitor Action not triggered
    - Fix missing counter index issues for some monitors
    - Fix elastic data purging wrongly purging data using shorter days (meant for saas) for on prem
    - Fix default HOME_DIR for agent
    - Fix issue when old socket agent connection becomes invalid
    - Fix daily logs volume usage calculation error due to beats indices in gmt time format
    - Fix index name error in CVS cloud when ingesting sample logs   

  - Enchancements:
    - Synthetic - improve on stability
    - Synthetic - implement alarm generation
    - Synthetic - implement frontend logic, to display past transactions and steps
    - Synthetic - delete executions and screenshots too, when script is deleted
    - Synthetic monitoring - move to be under 'apm' module
    - Elastic retain snapshots for 1st and 15th of the month
    - Elastic improve query api to throw exception with query string has syntax errors
    - Elastic reset CvsManager configs cache when invoke ElasticBackupUtil.purgeNow method
    - NCM encodes support for encrypting NCM data with public key on emedge
    - Metricbeat enhance AWS monitors
    - Metricbeat enhance AWS - enhance S3 and NatGateway mappings
    - Metricbeat enhance AWS - enhance ELB monitors
    - Metricbeat enhance AWS - improve on MO tagging
    - Metricbeat enhance AWS mappings and add IIS mappings
    - Cloud copy modules.d folder from var (if exists) for beats sidecars in cloud 
    - Cloud enable apm-server sidecar on emedge running on Azure cloud
    - Allow monitor list page to remember the table search string different for different objects (i.e. fdns) - revert this change
    - Improve performance for AIOps pages
    - Improve to not run jobs on cloud yet
    - Enhance on ML metrics anomaly detection logic
    - Added support for more job types including logs, threats, apm, netflow    
    - Grafana add support to create and push plugin to download server
    - SMS add support of -Dsms_keepalive_mins=xxx (default 60) to reconnect sms modem periodically
    - Metrics add metric names
    - Perf support 'data copy' feature for missing data
    - Emedge supports -Dcloud_edge=1 when deploy emedge in azure cloud
    - Change -Delastic_snapshot_retain_days default from 30 to 90 
    - Improve on device info mapping to vendors and models    
    - Enhance to save elastic queries templates to backend DB instead of just browser cache
    - TOPOLOGY refactor L2 topology analyzer code and unit tests
    - Improve socket agent stability
    - Alarm autoaction - add support for powershell scripts (ps1 extension)
    - Alarm improve alarm elastic indexing to avoid out of memory    TSS-vmware monitoring - improve debugging logs
    - Support customized ng.conf for CVS cloud instances (e.g. /mnt/common/etc/cvs-livedemo/ng.conf)
    - Supports set runtime parameters e.g. via 'run.sh netgain.sac.SetParams logstash_record_filename xxx'   
    - Logmgmt pop error when log watcher rule expression specified is invalid, during save
    - Do not allow change of data rentention settings in CVS cloud environment. do it via CRM
    - SIEM update elastic detection rules    
    - Add SysmonSimulator  
    - Enhance NCM to avoid detect as config changes is only line changed is '! Last configuration change at...'
    - Implement NCM device testing - extend to support for emedge    
    - CV docker image to remove elasticsearch version embeddings for v7.9.3 and v7.16.3
    - Pingmon optimize memory  
    - Dashboards add page for user with admin role to delete other users dashboards    
    - Improve on license warning msgs    
    - Optimize memory usage by reducing max queue size MomAgent    
    - Optimize memory usage by reducing buffer size for  FlowBufferPool and NorthboundManager    
    - License warnings to MSTeam for SaaS
---------------------------------------------------------------------------------------------------------------- 
**NetGain EM Change Log v11.2.318 build 466 (release date: 13th Sep 2022)**  
  - Fixes:
    - Fix Bug_4540_oracle_tablespace_monitor_sql_query_time_out
    - Fix Bug 4614_uptime_monitor_improvement
    - Fix Bug 4617 disk_report_not_showing_all_disks
    - Fix Bug 4620 new request - Sharing of Custom reports - shows the 'shared' indication on web page
    - Fix Bug 4624 historical_graph_long_decimal_point
    - Fix Bug 4625 Security Audit Issues - Vulnerabilities 
    - Fix Bug 4630 EM-v11-dashboard display auto refresh stuck - fix full screen issue
    - Fix Bug 4645 v11.2.x | SIEM add mapping feature not able to load
    - Fix Bug 4646 v11-EM-too many opened snmp session
    - Fix Bug 4653 topology_l2_views_cant_edit
    - vmware fix slow monitoring when vmware sdk authentication fails for many monitors
  - Enchancements:
    - Dashboards add page for user with admin role to delete other users dashboards
    - Agent supports auto device discovery when socket agent connects via -Dautodiscover_agent_devices=1 parameter
    - NCM implement NCM device testing - extend to support for emedge
    - NCM add more ncm scripts to support arista and huawei devices
    - Disable config backups by default, unless -Dconfigs_backup=1 is set
    - Elastic enable auto snapshots if -Delastic_repo_path=xxx is defined
    - CVS add redis support (netgain.sac.CvRedis class)
    - CVS skip periodic check license for netgain saas
    - Improve on license warning msgs
---------------------------------------------------------------------------------------------------------------- 
**NetGain EM Change Log v11.2.276 build 416 (release date: 14th Jul 2022)**  
  - Fixes:
    - Fix security vulnerability - 2. H-01: Multiple Reflected Cross-Site-Scripting Issues
    - Fix singtel security vulnerability - C-01: Password Stored in Recoverable Format Rating: Critical (9.9)
    - Fix Bug 4589_display_user_in_dashboard
    - Fix Bug 4599 - fix interface history graph units display (e.g. Kbps to Mbps)
    - Fix Bug 4604 - v11.2.x | Threat Rules cannot create new rule
    - Fix Bug 4605 - v11.2.x | Netflow query error, but reports can show data
    - Fix Bug 4606 - v11.2.x | GROK expression hangs when adding 3 or more expressions
    - Arista monitors - fix errorneous discovery
    - Logger supports log report with multi-line query expressions - fix chart display
    - Monitors restore back MemoryStorage monitors for AS400
    - Logs improve on timeseries data query to use local timezone instead of GMT timezone
    - APM fix real user monitoring transaction display
    - Improve garbage collection of tomcat sessions (auto logout
  - Enchancements:
    - Anomaly detection - enhance job display
    - Elasticsearch - add support for latest v7.17.4 elasticsearch and filebeat
    - Synthetic monitoring - enhance
    - AI anomaly detection monitoring prototype via -Dml=1
    - vmware refactor vmware monitors code
    - Monitors enhance BgpPeer monitor
    - Supports 90/95/98 thpercentile methods in complex search expressions
    - NCM longer timeout to handle cisco configurations taking a long time to pull
    - NCM improves device mapping for cisco 9200 switches
    - NCM improve on NCM device table display to display last backup size
    - NCM update last backup time, even if config pulled did not change
---------------------------------------------------------------------------------------------------------------- 
**NetGain EM Change Log v11.2.236 build 368 (release date: 20th May 2022)**  
  - Fixes:
    - Fix Bug_4463_cv_ncm_bulk_modify_issue_gna
    - Fix Bug_4489_my_town_cisco_wireless_client_monitor_with_report_index_at_cv - set the index max results to 50000 (bigger)
    - Fix Bug 4569 - [change request]SIEM dashboard enable the table format
    - Fix Bug 4571 - [change request]v11-SIEM- enable to customize the SIEM and log watch alarm to
    - Fix Bug 4579 - v11.2.x Archimon | NCM Scheduler not working - fixed by using purely cron expressions
    - SNMP v3 rename the GUI input fields properly to auth protocol, auth password, priv protocol and priv password
    - metricbeat improve MO tagging for kubernetes
    - restapi fix helper message
    - Perf - Fix critical bug of sometimes perf counter index cannot be found
    - Perf - Fix data intervals for longer time periods when query history perf data
    - NCM - Fix devices table sorting
    - NCM - Fix schedule trigger issue (sleep interval too long, so might missed the actual second specified in cron expression
    - Notify - Add support for fixed smtp server via -Dsmtp_fixed_....=xx
    - Logs - Fix sometimes cannot find logs belonging to previous day log index, due to GMT timezone
  - Enchancements:
    - Add support for 'searchTagsInAncestors' - change to use boolean instead of string
    - snmpv3 enhance to support new authentication protocols HMAC128SHA224 HMAC192SHA256 HMAC256SHA384 HMAC384SHA512
    - emedge trim package to make it smaller in size for the install zip file
    - Add Objects to datasource support
    - Perf - Optimize perf history data query to query only needed counters, and not all counters everytime
    - Perf - Improve history data query for perf history data
    - NCM - Make the pull ncm config handler at MomAgent (emedge) side async to improve efficiency
    - NCM - Make default schedule backup as daily at 3am
    - NCM - Add schedule loggings shown on GUI and also skipped saving to DB if there are not changes detected
    - JWT - Add jwt expiry check and also api for refresh token
---------------------------------------------------------------------------------------------------------------- 
**NetGain EM Change Log v11.2.201 build 318 (release date: 31st March 2022)**  
  - Fixes:
    - Fix Bug_4423_Alarm_Annotation_Cannot_Be_Saved
    - Fix Bug_4423_Alarm_Annotation_Cannot_Be_Saved
    - Fix Bug 4498 - Alibaba Cloud Voice Call - fix to use user's mobile number when notifying alicloud
    - Fix Bug 4498 - Alibaba Cloud Voice Call - fix critical bug in sendSms
    - Fix Bug 4498 - Alibaba Cloud Voice Call - fix critical bug in sendTts
    - Fix Bug 4525 - v11-EM generic indice does not restore users' related info
    - Fix Bug_4541_Unable_To_Generate_Network_Bandwidth_Report
    - Fix Bug_4550 - CVS-emedge remote upgrade failed - change to use restart and run install script method for zip file (besides tar.gz file) too
    - Fix Bug_4552_Notify_Now_Function_Not_Able_To_Select_User
    - Fix Bug_4554_Temporarily_Ignore_VM_Groups_When_Powered_off
    - Netflow fix error in parsing flow destination geo attributes
    - Logs fix critical bug in log saving
    - Logmgmt fix log archiver directory missing issue
    - sms simplify netgain/notify/SmsSender and fix sms retries
    - sms add support for -Dsms_flush=0 and -Dsms_flowcontrol=0 for sms modem code
    - sms refactor SmsSender code to remove need for server and port parameter
    - agent fixed socket agent ObjectOutputStream memory leak
    - map hide all customized logical map right menu shortcuts and make available only via sys property
    - logs fix bug in checking daily log limits
  - Enchancements:
    - vmware improve on VmwareVmNic monitoring
    - Added synthetic monitoring
    - cvs enhance period samba mount for CVS instances
    - metricbeat enhance metricbeat recording
    - monitor enhance websphere monitors to NOT require keystore or truststore per host
    - bug_4532_poly_finance_inspur_storage_monitoring_gna
    - bug_4481_peplink_device_speedfusion_convert_units_gna
---------------------------------------------------------------------------------------------------------------- 
**NetGain EM Change Log v11.2.164 build 258 (release date: 27th Febuary 2022)**  
  - Fixes:
    - Fix Bug_4131_Standard_Report_Template_Issue_With_Adding_Objects
    - Fix Bug_4423_Alarm_Annotation_Cannot_Be_Saved
    - Fix Bug_4496_add_more_monitor_values_in_custom_script
    - Fix Bug_4503_after_creating_global_template_agent_monitor_missing
    - Fix Bug_4505_Service_Alarms_Enhancement
    - Fix Bug 4515 - NetGain Agent - SSLHandshakeException - TSS
    - Fix Bug_4516_Userdefined_Report_Date_Format
    - Fix Bug_4518_ram_total_value_not_tally
    - Fix Bug_4522_SIEM_ThreatRules_Datatables_Issue
    - Fix V11_Bug_Issue_With_Device_Excel_Import
    - cv fix samba mount issue
    - Fix emedge dependencies on elasticsearch jar files
    - reports fix report document template
  - Enchancements:
    - filebeat shows support filebeat versions for mappings
    - filebeat add support for filebeat v7.16.3 templates and ingest pipelines, and emedge filebeat sidecar to v7.16.3
    - saas improve to be able to download iossd.log (internal logs) even in cloud deploy mode 
    - SIEM update elastic detection rules 
    - monitor show refreshing when loading history data
    - react-dashboards enhance react dashboards integrations
---------------------------------------------------------------------------------------------------------------- 
**NetGain EM Change Log v11.2.142 build 227 (release date: 13th January 2022)**  
  - Fixes:
    - Fix network_ping_monitor_shows_script_error
    - Fix siem improve threat rules display
    - Fix bug_log4j_vulnerability_fix_2.17
    - emedge fix bug of netflow data not forwarded at emedge
    - Fix ncm_snmpv3_not_working_issue
    - Fix Bug 4329 trace route report
    - Fix ncm_backup_need_another_password
    - monitors refactor netgain/monitors/ipsvc/Url
  - Enhancements:
    - elasticsearch update code to support elasticsearch v7.16.2
    - update year 2021 to 2022 in all copyright strings
    - restapi improve on new gen apis
---------------------------------------------------------------------------------------------------------------- 
**NetGain EM Change Log v11.2.142 build 227 (release date: 13th January 2022)**  
  - Fixes:
    - Fix network_ping_monitor_shows_script_error
    - Fix siem improve threat rules display
    - Fix bug_log4j_vulnerability_fix_2.17
    - emedge fix bug of netflow data not forwarded at emedge
    - Fix ncm_snmpv3_not_working_issue
    - Fix Bug 4329 trace route report
    - Fix ncm_backup_need_another_password
    - monitors refactor netgain/monitors/ipsvc/Url
  - Enhancements:
    - elasticsearch update code to support elasticsearch v7.16.2
    - update year 2021 to 2022 in all copyright strings
    - restapi improve on new gen apis
---------------------------------------------------------------------------------------------------------------- 
**NetGain EM Change Log v11.2.121 build 213 (release date: 23rd December 2021)**  
  - Fixes:
    - Fix cannot_create_apache_monitor_after_discovery  
    - Fix Metrics_Types_Alignment_Issue  
    - Duplicate_Dashboard_Issue
    - Linux_agent_not_stopping
    - log4j - fix log4j zero-day vulnerability - CVE-2021-44228,CVE-2021-45046
    - Dell switches not able to pull config 
    - ncm Cisco_not_able_to_pull_in_full
    - Fix issue_With_Integrations_Alignment
    - Fix issue_With_Device_View_Object_Deletion
    - Various SaaS issues and enhancements
  - Enhancements:
    - NCM_to_add_support_palo_alto_device
    - Add NCM_huawei_device_6300
    - Add_symbol_host_description_in_notify_rules
----------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.2.67 build 121 (release date: 28th September 2021)**  
  - Fixes:
    - Biz_View_Issue_When_Mo_Not_Found
    - notify fix notification issues when alarm count changes before sending out the first notification requests
    - User_Data_Migration_Issue_With_Latest_Version
    - googlemap displays a clean map with POIs
    - monitors add back url monitor counters to avoid warning logs
    - monitors fixed Alcatel Fan monitor perf counter names
    - Issue_With_Add_Widget_Screen_Not_Scrollable
    - ncm_snmpv3_device_import_failed
    - Special_Character_In_Global_Rules_Exported_Excel
    - security improve display of API token for user in user view
    - Bug_4294_APM_Watcher_table_Cursor_Formatting
    - dashboard implement support to plot history graphs for multiple objects of the same type
    - dashboard feature to support add metrics view to dashboard
    - logs improve search result to use aggregate labels instead of field name, if available
    - monitor gui - update and improve the status text display for monitors in monitor list view
    - topo remove icons from network topo view, so that screencapture works
    - GUI remove some javascript warnings during initial page load
    - netflow flows analyzer blank graph issue
    - monitor reimplement perf forecast function in monitor history view
    - netflow add/remove filter buttons for IP columns in flows table
    - logs improve saving of queries to include filter settings too
  - Enhancements:
    - metricbeat enhance support for more metricbeat system metrics - refactor code
----------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log 11.1.299 build 33 (release date: 27th June 2021)**
  - Fixes:
    - Issue with loading pdf reports in cvs instances
    - Adhoc reports to show heading on charts with multiple counters
    - IPMI emedge_latest_version_cannot_discover_monitor
    - Monitor make device dashboard show positive value in ylabels for traffic graphs
    - User defined reports table to show only selected counters
    - Tomcat change shutdown port from 8005 to 8006
    - Fix 2FA login with google captcha enabled and also refactor
    - Table_Canvas_is_Not_Resizing_according_To_Widget_Height
    - Fix bug of MO corruption when moving/copying MOs tree
  - Enhancements:
    - APM slight GUI improvements
    - Logs improves logs display and search UX
    - Supports export/import MO tree via GUI - enhancements
    - Add DNS hostname when adding device, if hostname is not found from snmp
----------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.240 build 581 (release date: 27th April 2021)**
  - Fixes:
    - Issue with creating new dashboards for non admin users
    - Fix capacity prediction issues
    - Fix metric objects sorting issue
    - Fix netlow search and reports toggle fields
    - Fix device import issue
    - Time range select by default not showing any values
    - APM transaction span display issue when first span is too long
    - Role add topo view when no views
    - Modal close button shows double icons
    - Too many decimal points for value in adhoc report
    - Error saving global rules
    - Horizontal Privelege Escalation VAPT fix
    - Path Traversal VAPT fix 
  - Enhancements:
    - Added TalariaX notification integration
    - Enhance SaasMonitor
----------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.203 build 522 (release date: 27th February 2021)**

  - Fixes:
    - Fix monitor status list screen flickering issue
    - Fix mobile web view bug 
    - Use TLS1.2 and disable weak Ciphers to avoid TLS ROBOT Vulnerability
    - Fixed checkboxes in alarm page issue and alarms dropdown issue on page load
    - SIEM Dashboard display error when query string contains as 'xxx'
  - Enhancements:
    - Implement logs compliance reports
----------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.185 build 493 (release date: 29th January 2021)**
  - Fixes:
  Fix netflow recording
  Fix CVS empty site showing disabled status
  Fix netflow application deletion issue
  Fix orphan mos deletion
  - Enhancements:
    - Improves on logon screen css
    - Prototype changes in alicloud integration
----------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.175 build 420 (release date: 28th December 2020)**

  - Fixes:
    - Fix critical bug of MOManger.deleteMO only deleting immediate child MOs and not grandchild MOs
    - Fix metrics report batch delivery not able to schedule delivery
    - Fix adding business view in role management
    - Fix not able to create monitor after auto discover
    - Do not annotate problem when auto discharging
    - Fix critical issue of MO not delete at edge when delete MO at CV
  - Enhancements:
    - Add MacroSan new monitors
    - Add BizView SLA batch reports
    - Enhance batch reports customization
    - Enhance agent to support IPv6
    - Implemented Arista switch optical sensors 
    - Improve the monitor history view page
    - Improve on capacity planning estimation
---------------------------------------------------------------------------------------------------------------------
**NetGain EM Release Notes v11.1.160 build 408 (release date: 27th Nov 2020)**
  - Fixes:
    - Mobile view formatting
    - Fix Interface monitor Input Output Utilization Units
    - Fix APM transactions query wrong (not based on time range)
    - Fix APM transaction filter search
    - Fix agent make no rmi as default true. Make socket agent method as default.
    - Fix critical issue of socket agent connection not secure.
    - Fix issue with saving new assets
    - Fix critical snmpv3 trap receive
    - Fix SNMP trap varbind ingest issue
    - Fix 2fa screen formatting
    - Fix logical map display severity colour for normal status
    - Fix monitor graph display issue
    - SIEM alarms export
    - Logical map google map case sensitive comparision with new map
    - Monitor object jump links
    - Time range select problems for beats indexs (GMT-based indices)
    - Logs_summary dashboard click issue
    - Threat detections enable/disable feature
    - Fix opsgenie pager duty issues
  - Enhancements:
    - Improve logs and apm dashboard widgets
    - Add APM widgets
    - Allow auto APM drill down based on URL hash
    - Improve on dashboards for logs widgets
    - Add support for engine ID in SNMP USM Users edit
    - Add PDF support for log reports delivery
    - Support running emedge as a windows service
    - Add AliCloud Notification mechanism
    - Implement current alarms export to excel button
    - Add ServiceNow notification integration
---------------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.141 build 396 (release date: 27th October 2020)**
  - Fixes:
    - Fix ApmWatcher bug that it does not generate alarm
    - Fix input output utilization units
    - Fix primary menu expand bug
    - Fix issue with saving new assets
  - Enhancements:
    - Improve elastic query format to include sorting direction
    - Add default monitoring dashboard
    - Enhance alarm views
    - Update default SIEM security threat dashboard
    - Add APM response time dashboard widget
    - Improve log summary dashboard widget
    - Add APM transaction mapper
    - Add selectable colors for dashboard
    - Enhanced download option for monitor history graph
    - Improve on logs reports to indicate no data
    - Enhance logmgmt to show elasticsearch ingest time performance on web GUI
    - Add netflow histogram
---------------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.118 build 361 (release date: 28th September 2020)**
  - Fixes:
    - Fix bug of enable/disable mapping rules due to multiple transformers
    - NetGain alert box dark theme formatting
    - Fix history data issue with moving devices
    - Fix screen overflow when expandable primary menu is clicked
    - Fix bug of role users not saved when users added to role
    - Fix deleteMO issue when parent MO is not found
  - Enhancements:
    - Improve metric reports performance
    - Enhance multiple metrics for combined reports
    - Enhance metric reports to add in dashboard
    - Add top-n report prototypes
    - Prototype SIEM compliance reports
    - Enhance syslog collector to handle invalid/TCP format
---------------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.90 build 322 (release date: 27th August 2020)**
  - Fixes:
    - Removed obsoleted cisco process monitors
    - Fix LogStashProxy for beats logs collection
    - Do not prompt for CV IP, if 'cv' environment is already set
    - Forwards netflow traffic from edge to CV
    - Fixed EV multiple IP range discovery in CV
    - Dell switch not able to monitor
    - Fix issue with progress bar while deleting devices
    - Fix DNS resolve hostnames in netflow, and logs
    - Fix Netflow: Report download: When there is no data, downloafd report is throwing 404 exception
    - Fix bug for snmp v3 authNoPriv security level
    - Fix snmp v3 engine ID inconsistencies
    - Force need for JRE 1.8.0_162 and above, to support AES192/256 encryption
  - Enhancements:
    - Add support for remote selenium web testing
    - Make HTTP forwards to HTTPS by default
    - Add notify method for 'Wechat' messenging app
    - Add notify method for 'Telegram' messenging app
    - Enhance SIEM hunt manager to avoid reloading default rules all the time
    - Improve on monitors discovery
    - Add export feature for CiscoPSIRT
    - Add notify method: Microsoft Teams
    - Enhance apm transaction waterfall display
    - Auto CI build: v11.1.73b300 (created on Tue Aug  4 03:11:49 SGT 2020)
---------------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.62 build 289 (release date: 27th July 2020)**
  - Fixes:
    - Fixed bugs in forwarding trap from Edge to CV
    - SIEM netflow reports creating duplicates
    - Home wrong warning color
    - SIEM NetFlow reports saving empty
    - Log analytics doesn’t show the date when opted for one month
    - Update log4j to v2.13.3
    - Fix perf data display column unit label issue
    - Fix logo issue in dark mode
    - Fix table scroll issue
    - Fix SSL issues in CSV: Edge to CV connection
    - Fix for MOs loading
    - Fix status count not accurate 
    - Alarms click details link of any alarm pops up the details with Close button is hidden
    - Fix left hand side menu, when hover mouse over the icon, there is no menu item displayed
  - Enhancements:    
    - Implemented Snmp4JTrapListener to replace NgSnmpTrapListener (enabled using -Dsnmp4j_trap_listener=1)
    - Include windows event logs as part of sample logs in product
    - Add threat intelligence: talosintelligence
    - Enhance on log reports
    - Snmp4j library update
    - Improve on APM transaction display
    - Add optical power monitor for H3C switches
    - Add sangfo wac monitors
    - Make perf history chart types selectable

---------------------------------------------------------------------------------------------------------------------

---
title: News 
weight: 14
geekdocHidden: true
---

Product realted news will be available here.
---
title: Architecture
weight: 1
---

{{% company %}} is the cloud data and analytics platform for data normalization, processing, visualization and report generation. It integrates and sends alerts to trouble-ticketing systems, and collaboration and messaging systems.

When you sign up for an account, a unique and dedicated {{% company %}} instance is created for you.  

Emedge is deployed within the enterprise network either on-prem, public or private cloud, or in a hybrid infrastructure. Emedge is a thin software that collects IT infrastructure data. Such data includes device metrics, logs, and traces, from on-prem, cloud and hybrid infrastructure. Emedge forwards the data via an encrypted link to {{% company %}}.

Emedge uses open protocols to collect data from all IT systems. Common protocols include SNMP, JDBC, Elastic Beats and others.  

With {{% company %}} and emedge working together, the user has a full observability to their infrastructure, whether it is on-prem, in the cloud, or hybrid.

![Screenshot](/overview/images/{{% imagehome %}}/spog1.png)
---
title: Overview
weight: -10
---
---
title: Reports
geekdocHidden: true
slug: reports
---

You can create different NetFlow reports based on different search expressions.

To create a NetFlow report, click on \<NetFlow> at the Left Navigation Bar, then click on \<Reports> at the Top Navigation Bar. Click <+Add new report>.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/report1.png)

&nbsp;

Enter the relevant information including the desired search expression in the pop-up menu, then click \<Save>.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/report2.png)

&nbsp;

You can retrieve the saved report by clicking on the submenu icon on the left side of the Reports page as shown, and clicking it from the selection of reports shown.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/report3.png)

&nbsp;

You can perform the following actions to your report by clicking on their icon in the menu: 

\<Auto delivery>, \<Download> and \<Edit>

![Screenshot](/modules/netflow/images/{{% imagehome %}}/report4.png)

&nbsp;

Auto delivery: Schedule delivery of report (XLS/PDF) via Email 

![Screenshot](/modules/netflow/images/{{% imagehome %}}/report5.png)

&nbsp;

Click \<Save> after you specify when you would like to receive the report via email. You can specify:

Mail Subject - Email subject

Mail Body - Text for Email main body

Target Address(s)	- Email address to send to

Format - File format (XLS/PDF)

Date time range - Time range of report

Delivery schedule - Frequency of sending Email 

Day of month - Day of month to send Email

Weekday - Day of week to send Email

Hour of day - Hour of day to send Email

Download: Download report in XLS format 

![Screenshot](/modules/netflow/images/{{% imagehome %}}/report6.png)

Clicking \<Download> will download the report in Excel format.

&nbsp;

Edit Report

![Screenshot](/modules/netflow/images/{{% imagehome %}}/report7.png)

Click \<Edit> to change previous inputs, and click \<Save> when done. You can also choose to delete the report by clicking \<Delete report>. ---
title: Using Network Traffic Analytics
geekdocHidden: true
slug: usingnta
---

The 'Overview' tab displays the general summary of network traffic data.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/Netflow1.png)

&nbsp;

This overview can gain insights into the network usage patterns and detect any anomalies.

Click on <img src="/modules/netflow/images/netgain/bytes.PNG" width="80px"> to view network data by Bytes.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/Netflow2.png)

# Applications

The 'Applications' tab displays a detailed view of the network traffic categorized by different applications.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/NetFlow3.png)

* The pie chart displays the distribution of network traffic among the top applications.  
* The graph displays the traffic trend over time for the top applications. The x-axis represents the time, while the y-axis represents the volume of traffic.  
* The table displays the detailed information about the individual traffic flows.

# Network Sources

The 'Network Sources' tab displays a detailed analysis of the top source IP addresses generating network traffic.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/Netflow4.png)

* The pie chart displays the top source IP addresses contributing to network traffic.  
* The line graph displays the traffic trends over time for the top source IP addresses.  
* The table displays the detailed breakdown of network traffic for each source IP address.

# Network Destinations 

The 'Network Destinations' tab displays an analysis of the top IP addresses receiving network traffic.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/Netflow5.png)

* The pie chart displays the top destination IP addresses receiving the most network traffic.  
* The line graph displays the traffic trends over time for the top destination IP addresses.  
* The table displays a detailed breakdown of network traffic for each destination IP address.

# Network Conversations

The 'Network Conversations' tab displays a view of the top conversations between source and destination IP addresses in the network.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/Netflow6.png)

* The pie chart displays the top conversation between IP addresses.  
* The line graph displays the traffic trends over time for the top conversations.  
* The table displays a detailed breakdown of each network conversation.

# Map

Map is used for displaying and analyzing network traffic flows between geographic locations.

The 'Map' tab displays a global network traffic visualization.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/Netflow7.png)

Click on <img src="/modules/netflow/images/netgain/toggle.PNG" width="100px"> to view details.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/Netflow8.png)

# Search

To use the NetFlow feature, click on \<NetFlow> on the Left Navigation Bar, then \<NetFlow> at the Top Navigation Bar.  
Click on \<Search> to search and query different network flows. Click on \<?> for help in performing a search.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/nta1.png)

&nbsp;

![Screenshot](/modules/netflow/images/{{% imagehome %}}/Netflow_Help.PNG)

&nbsp;

You can see the most recent search query and specify the time range.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/nta3.png)

&nbsp;

You can find flow information quickly with Text Box Search. To search for any desired information, enter the information you want to search, such as Text, Numeric, Fields, Wildcards, or others in the Text Box Search.

Example of search: application : ORACLE OR destination.port : 25

![Screenshot](/modules/netflow/images/{{% imagehome %}}/nta4.png)

&nbsp;

You can change the time range of the data to be searched.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/nta5.png)

&nbsp;

When you enter search terms, smart suggestions show possible search fields.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/nta6.png)

&nbsp;

You can display “Recent searches” and “Save current query” for future searches.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/nta7.png)

&nbsp;
---
title: Watcher
geekdocHidden: true
slug: watcher
---

NetFlow Watcher is used to watch out for specified data within incoming data flows.  The system generates an alarm when the incoming flows contains the specified query string and hits a specified amount of flow. This is useful to quickly detect what is using a lot of bandwidth.

To use NetFlow Watcher, click on \<NetFlow> on the Left Navigation Bar, then click on \<Watcher> on the Top Navigation Bar. Click <+Add rule>.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/watcher1.png)

&nbsp;

Enter the data and rules to define what you want to watch out for and to receive an alarm when the conditions are met.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/watcher2.png)

&nbsp;

Name - Input name of rule.

Enable - Select Yes/No

Run interval - Input interval time to run the rule.

Search window - Input past “x” time for flow search.

Query string - Input query string for flow search.

Flow Hits - Input flow hits “expressions” and “numbers”.

Alarm message - Input the alarm message.

Alarm generation - Select condition for alarm generate.

Click \<Save> when done. Watcher will search the flow data according to the conditions set. Results are displayed on the main page of the Watcher menu.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/watcher3.png)
---
title: Maintenance
geekdocHidden: true
slug: maintenance
---

The 'Performance' tab displays various flow-related metrics and statistics for the network traffic being monitored and analyzed by the NetFlow system.

<img src="/modules/netflow/images/{{% imagehome %}}/performance1.png" alt="Screenshot" style="width: 1000px; height: auto;">

Information includes:
* Flows Rate Per Minute: this indicates the rate at which network flows are being received and processed per minute
* Flows Rate Per Sec: this shows the rate of network flows being handled per second
* Flows Count Last 1 Minute: the total number of network flows captured and analyzed in the last 1-minute window 
* Total Flows Ingested: the cumulative count of all network flows that have been ingested or taken in by the system 
* Total Flows Written: the total number of network flows that have been processed and written or stored by the system 

&nbsp;

Under Maintenance feature of the NetFlow Settings, user can simulate data for presentation purposes and can view logs of flows coming in to NetGain NetFlow feature.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/maintenance1.png)
---
title: Settings and Maintenance
geekdocHidden: true
slug: settings
---

To navigate to NetFlow settings, click \<NetFlow> on the Left navigation bar then \<Settings>. 
	
* <a href="/modules/netflow/settings_maintenance/applications">Applications</a>
* <a href="/modules/netflow/settings_maintenance/maintenance">Maintenance</a>

---
title: Applications
geekdocHidden: true
slug: applications
---

By default, {{% company %}} will generate all known applications. User can create new applications based on TCP/UDP protocol. Click <+Create>. 

![Screenshot](/modules/netflow/images/{{% imagehome %}}/settings1.png)

&nbsp;

A pop-up to create an Application will show. Enter relevant details.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/settings2.png)

&nbsp;

Label – Name of the Application

Protocol – ICMP / TCP / UDP

Port – Port number of the Application

IP addresses – Target IP address of the Application

Once done, click \<Save> and your Application will be ready under the search query of NetFlow.

![Screenshot](/modules/netflow/images/{{% imagehome %}}/settings3.png)
---
title: NetFlow
weight: 3
---
NetFlow are used to collect and monitor network traffic data.They monitor IP addresses,data volumes,time,ports and protocols.

* <a href="/modules/netflow/usingnta">Using Network Traffic Analytics</a>
* <a href="/modules/netflow/reports">Reports</a>
* <a href="/modules/netflow/watcher">Watcher</a>
* <a href="/modules/netflow/settings_maintenance">Settings and Maintenance</a>
---
title: SNMP V3 Users
geekdocHidden: true
slug: snmpv3users
---

The SNMP v3 user credentials can be set here.

Click \<Metrics> on the Left navigation bar then \<Policy>.  Under \<SNMP v3 Users> click \<Add new user>.


![Screenshot](/modules/metrics/images/{{% imagehome %}}/snmp.PNG)
---
title: Rules Audit
geekdocHidden: true
slug: rulesaudit
---

User will be able to determine the standardization of the threshold parameters. It lets the user merge the old settings to new settings to make it standard.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/audit1.png)

&nbsp;

If you want to make one rule similar to the others, click the link beside the monitor name and a pop-up screen will show. Select the rule number to merge from the previous selected then click \<modify>

![Screenshot](/modules/metrics/images/{{% imagehome %}}/audit2.png)

&nbsp;

![Screenshot](/modules/metrics/images/{{% imagehome %}}/audit3.png)

---
title: Blackout Schedule
geekdocHidden: true
slug: blackoutschedule
---

User will be able to create their own outage plan to reduce incoming false alerts due to scheduled downtime.

To create a blackout schedule, Click \<Metrics> on the Left navigation bar then \<Policy>. Under \<Blackout Schedules> click <+Create>.


![Screenshot](/modules/metrics/images/{{% imagehome %}}/blackout1.PNG)

&nbsp;

![Screenshot](/modules/metrics/images/{{% imagehome %}}/blackout2.png)

&nbsp;

Enter a relevant definition of the schedule in Description.

Fill in the Start Date, End, Time and the Interval Period.

Under Objects, click \<Select> and the object menu will pop up.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/blackout3.png)

&nbsp;

Click Device View to drill down into the object, then click the \<arrow> to select objects.

Finally, click Save and the Blackout schedule will be ready.



---
title: Global Rules
geekdocHidden: true
slug: globalrules
---

Monitoring templates can be created on the Global Rules. It is very convenient to users who are monitoring numerous devices since it can make setting up the thresholds easier.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/global1.PNG)

&nbsp;

To create a global rule, Click \<Metrics> on the Left navigation bar then \<Policy>. Under \<Global Rules>< click <+Create>.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/global2.png)

&nbsp;

Give your new template a name on the next screen and choose the Category of the device you want to manage.

Select the Device type. A list of preset templates will appear.

Click on the device model, you may also search the keyword of the monitor. 

Click the < <img src="/modules/metrics/images/{{% imagehome %}}/pencilicon.png" width="20px"> >, Threshold rules menu will appear.

Set the threshold accordingly.

Lastly, select an option in Action for non-selected monitor types. Click \<Save> and the new Monitor template will be ready.

Apply the created template from the settings in Status objects

![Screenshot](/modules/metrics/images/{{% imagehome %}}/global3.png)

&nbsp;

Click \<Edit> to enable the edit mode and Select the device group to apply the template using the \<Check box> and from the settings, select the desired global rule template and click \<Apply>---
title: Metrics Policy
geekdocHidden: true
slug: metrics
---

The module allows the user to configure or setup a policy for the devices and monitors. To access Policy module, click \<Metrics> on the Left Navigation Bar then \<Policy>.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/policy.PNG)

&nbsp;

* <a href="/modules/metrics/metrics/blackoutschedule">Blackout Schedule</a>
* <a href="/modules/metrics/metrics/snmpv3users">SNMP V3 Users</a>
* <a href="/modules/metrics/metrics/globalrules">Global Rules</a>
* <a href="/modules/metrics/metrics/rulesaudit">Rules Audit</a>---
title: Editing Monitoring Settings
geekdocHidden: true
slug: editsettings
---

Click on \<Metrics> in the Left Navigation Bar, then \<Metrics> in the Top Navigation Bar. Then click on \<Objects> in the top menu, and click on \<Device view>. 

![Screenshot](/modules/metrics/images/{{% imagehome %}}/editing1.png)

&nbsp;

Click on \<Edit> to edit the monitoring settings.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/editing2.png)

&nbsp;

\<Settings> – Lets you change browser refresh rate interval, Enable/Disable/Ignore/Delete devices and monitors.
 
<img src="/modules/metrics/images/{{% imagehome %}}/doneicon.png" width="60px"> – Exit the edit mode.
 
<img src="/modules/metrics/images/{{% imagehome %}}/devicegroupicon.png" width="100px"> – Adds new device group to categorize 
 devices to your requirements
 
<img src="/modules/metrics/images/{{% imagehome %}}/enableicon.png" width="20px"> – Enable / Disable the selected object device
 
<img src="/modules/metrics/images/{{% imagehome %}}/changeicon.png" width="20px"> – Change threshold settings
 
<img src="/modules/metrics/images/{{% imagehome %}}/deleteicon.png" width="20px"> – Delete selected devices/monitors
---
title: Threshold Settings
geekdocHidden: true
slug: thresholdsettings
---

Click on \<Metrics> in the Left Navigation Bar, then \<Metrics> in the Top Navigation Bar. Then click on \<Objects> in the top menu, and click on \<Device view>. 
To adjust the threshold settings, click on the device type / device on the right side of the table and drill down till you see the monitoring parameter you would like to change. Click \<Edit> to enable the edit mode and click the <img src="/modules/metrics/images/{{% imagehome %}}/changeicon.png" width="20px"> – Change threshold settings icon to edit the threshold settings.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/threshold1.png)

&nbsp;

**Note**: This lets you adjust the threshold settings of an individual monitor.

&nbsp;

![Screenshot](/modules/metrics/images/{{% imagehome %}}/threshold2.png)

&nbsp;

You can adjust the various settings according to your preferences. If you check the Alarm box, a notification will be sent when the threshold is breached, while if you check the Auto clear box, a notification will be sent when the issue is fixed.

<strong>Interval</strong> - Monitoring interval for data collection and saving history data

<strong>Temporarily Ignore</strong> - Temporarily disable the monitor and will go back to normal if the monitor will be up and running   

<strong>Critical Interval</strong> - New monitoring interval when the monitor object is in critical status    

<strong>Timeout</strong> - Specifies the timeout period when performing data collection for the monitor    

<strong>Retries</strong> - Number of retries if the monitor is not in normal status, before generating an alarm

<strong>Retry Interval</strong> - Specifies the time between retries

<strong>Max Concurrent</strong> - Maximum number of concurrent sessions    

<strong>Hostname/IP</strong> - IP address of the device

<strong>Method</strong> - Method used to discover the device

<strong>Monitor Value</strong> - Setting the value for the threshold    

<strong>Operator</strong> - Used for performing validation

<strong>Value</strong> - Used to check and validate the actual result of the monitored device by matching the monitor value against the operator.

<strong>Severity</strong> - Used to determine the severity of the threshold value set

<strong>Alarm Check box</strong> - Check the box to enable the Alarm function for the monitor

<strong>Auto Clear Check box</strong> - Check the box to enable the Auto Clear function for the monitor
---
title: Monitor by Business Types
geekdocHidden: true
slug: monitor-business
---
Business view is used to monitor the health and status of various business services within the system. 

The ‘Business view’ tab displays an overview of various business services and their status in a list format.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/MOBV1.png)

Information includes:
* Object: name of business service  
*	Status Indicators: the different colors and numbers used to represent the health and operational status of the business service
* 	Update time: displays the last time the status was updated
* 	Description: additional information of the business service

# View Components of Object

Click on Object to further view components of the business service. 
[Components can also be viewed in BizViews] 
![Screenshot](/modules/metrics/images/{{% imagehome %}}/MOBV2.png)

# Edit Object
[Adding of New Business, Services or Service Dependency can be found under Business Views of NetGain Docs]

Click on <img src="/modules/metrics/images/{{% imagehome %}}/edit.PNG" width="45px">      to configure and manage the business services.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/MOBV3.png)

Once clicked, the page will navigate to the dedicated page for editing. 

![Screenshot](/modules/metrics/images/{{% imagehome %}}/MOBV4.png)


Click on <img src="/modules/metrics/images/{{% imagehome %}}/button.PNG" width="50px">to enable or disable the business service. 

![Screenshot](/modules/metrics/images/{{% imagehome %}}/MOBV5.png)

Click on<img src="/modules/metrics/images/{{% imagehome %}}/edit2.PNG" width="50px">     to edit the threshold setting of the business service. 

![Screenshot](/modules/metrics/images/{{% imagehome %}}/MOBV6.png)

Once clicked, the page will navigate to the dedicated page of the selected service for editing of the threshold settings.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/MOBV7.png)

Click on <img src="/modules/metrics/images/{{% imagehome %}}/basicinfo.PNG" width="100px"> to edit basic information of the business service.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/MOBV8.png)

Once clicked, the page will navigate to the dedicated page for editing.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/MOBV9.png)
You are able to edit the Label, Description and SLA weightage.

Click on<img src="/modules/metrics/images/{{% imagehome %}}/trash.PNG" width="30px">to delete the business service.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/MOBV10.png)

# Bulk Selection Of Objects

Click on Action to apply the selected action to multiple business services at once.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/MOBV11.png)

Action includes:
*	Enable monitoring: activates monitoring, allowing it to track performance and status
*	Disabling monitoring: deactivates monitoring, stopping its tracking and status updates
*	Set as monitor exception: marks the selected business service as an exception, it will not be included in certain monitoring rules
*	Re-discover monitors: re-discover monitors from the selected business services
*	Delete: removes the selected business service from the monitoring list

Once selected, choose which business services to apply the action on. 

![Screenshot](/modules/metrics/images/{{% imagehome %}}/MOBV12.png)
---
title: Monitoring by Alert Types
geekdocHidden: true
slug: monitoralerts
---

You can select the severity of the alerts at the top of the table to see those see the status of the devices that have the selected alert type. You can also make changes to the alert threshold settings.

Click on \<Metrics> in the Left Navigation Bar, then \<Metrics> in the Top Navigation Bar. Then click on \<Types> in the top menu.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/alerttype1.png)

&nbsp;

<img src="/modules/metrics/images/{{% imagehome %}}/historicalicon.png" width="25px"> – Shows historical data of the monitor---
title: Monitor by Device Type
geekdocHidden: true
slug: monitor by device types
---

Click on \<Metrics> in the Left Navigation Bar, then \<Metrics> in the Top Navigation Bar. Then click on \<Objects> in the top menu, and click on \<Device view>.

You will be able to see an overview of the monitored devices by their device types. All monitored devices that are added during device discovery will be added by default under Metrics > ROOT > Device View, and are automatically categorized into their device types, eg, Server, Storage, Network. You can rename or create new device types based on your requirements.



![Screenshot](/modules/metrics/images/{{% imagehome %}}/devicetype1.png)
---
title: Discover Device
geekdocHidden: true
slug: discoverdevice
---

Click on \<Metrics> in the Left Navigation Bar, then \<Discover> in the Top Navigation Bar. Then click on \<Discover Device> in the top menu.

## Step 1
First select the discovery method to be used. 3 methods are provided:
* IP Range Method
* IP Subnet Method
* Specific IP Method

### IP Range Method
Select \<IP Range> in \<Method>, then enter the IP address range to be scanned. Start refers to the beginning while End refers to the end of the range. 

![Screenshot](/modules/metrics/images/{{% imagehome %}}/discoverdevice1.png)

&nbsp;

### IP Subnet Method
Select \<IP Subnet> in \<Method> to discover devices using your own subnet. You can enter multiple subnets separated by a comma.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/discoverdevice2.png)

&nbsp;

### Specific IP Method
Select \<Specific IP> in \<Method>. Just input the IP Address of the devices to be discovered separated by a comma. 

![Screenshot](/modules/metrics/images/{{% imagehome %}}/discoverdevice3.png)

&nbsp;

## Step 2

Enter the appropriate SNMP details. For the SNMP v1/v2, the default port number is “161” while the default SNMP community string for IT environments is “public”. 

![Screenshot](/modules/metrics/images/{{% imagehome %}}/discoverdevice4.png)

&nbsp;

For SNMP v3, the default port number is 161 followed by the subsequent required fields. 

![Screenshot](/modules/metrics/images/{{% imagehome %}}/discoverdevice5.png)

&nbsp;

## Step 3

After completing the discovery method and SNMP information, click on \<Start Discovery>. Once the scanning is completed, the list of devices discovered will be displayed with their relevant details.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/discoverdevice6.png)

&nbsp;

## Step 4

Ensure the devices to be added have a check mark, then click on <+Add selected devices>. 

![Screenshot](/modules/metrics/images/{{% imagehome %}}/discoverdevice6.png)

&nbsp;

The devices will be created and grouped automatically.


---
title: Discovering / Adding Devices to be Monitored
geekdocHidden: true
slug: discovering
---

* <a href="/modules/metrics/discovering/discoverdevice">Discover Device</a>

To discover or add devices to be monitored, click on \<Metrics> in the Left Navigation Bar, then \<Discover> in the Top Navigation Bar. 

![Screenshot](/modules/metrics/images/{{% imagehome %}}/discover1.png)

&nbsp;

The {{% company %}} Infrastructure Monitoring Discover feature has one available method to discover and add devices to be monitored.
* <a href="/modules/metrics/discovering/discoverdevice">Discover Device</a>:  Discovers devices and monitors each device using IP address range and specific IP addresses

![Screenshot](/modules/metrics/images/{{% imagehome %}}/discover2.png)
---
title: "Metrics Profile"
geekdocHidden: true
slug: metricsprofile
date: 2024-06-26T10:11:00Z
---

Profile is used to configure and manage the settings required to connect to a database.

Click on \<Create> to create a profile.

<img src="/modules/metrics/images/{{% imagehome %}}/profile1.png" alt="Screenshot" style="width: 1000px; height: auto;">

&nbsp;

Once clicked, the page will navigate to the dedicated page for creation of profile.

<img src="/modules/metrics/images/{{% imagehome %}}/profile2.png" alt="Screenshot" style="width: 1000px; height: auto;">

&nbsp;

Input the information.

<img src="/modules/metrics/images/{{% imagehome %}}/profile3.png" alt="Screenshot" style="width: 1000px; height: auto;">

Information includes:
* Profile name: name for the profile
* Description: description of the profile
* Type: specifies the database management system type 
* Username: username to access the database
* Password: password to access the database

&nbsp;

Successful creation of profile. 

<img src="/modules/metrics/images/{{% imagehome %}}/profile4.png" alt="Screenshot" style="width: 1000px; height: auto;">

&nbsp;

Click on <img src="/modules/metrics/images/{{% imagehome %}}/profileediticon.png" alt="Screenshot" style="width: 20px; height: auto;"> to edit information of profile.

<img src="/modules/metrics/images/{{% imagehome %}}/profile5.png" alt="Screenshot" style="width: 1000px; height: auto;">

&nbsp;

Click on <img src="/modules/metrics/images/{{% imagehome %}}/profiledeleteicon.png" alt="Screenshot" style="width: 20px; height: auto;"> to delete the profile.

<img src="/modules/metrics/images/{{% imagehome %}}/profile6.png" alt="Screenshot" style="width: 1000px; height: auto;">




---
title: Metrics
weight: 2
---

The infrastructure monitoring function provides you with an overview of the status of the monitored devices in your IT system, letting you proactively manage the devices in your IT system to nip issues in the bud before they become critical and adversely impact end-users. 

Infrastructure monitoring is done through the Metrics function. 
* <a href="/modules/metrics/discovering/">Discovering / Adding Devices to be Monitored</a>

* <a href="/modules/metrics/monitor-by-device-types/">Monitoring by Device Type</a>

* <a href="/modules/metrics/monitoralerts">Monitoring by Alert Type</a>

* <a href="/modules/metrics/monitor-business">Monitoring by Business Type</a>


* <a href="/modules/metrics/editsettings">Editing Monitoring Settings</a>
* <a href="/modules/metrics/thresholdsettings">Threshold Settings</a>
* <a href="/modules/metrics/metrics">Metrics Policy</a>
* <a href="/modules/metrics/customize">Customize SNMP, Scripts, Database and Dynamic Thresholds</a>
* <a href="/modules/metrics/metricsprofile">Metrics Profile</a> 
---
title: Customize Dynamic Threshold
geekdocHidden: true
slug: customizethreshold
---

This function is to set-up threshold dynamically to be in effect for certain period of time.
To create Dynamic Threshold, Click \<Metrics> on the Left navigation bar then \<Customize> then \<Dynamic Threshold>. Click <+Add>.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/dynamic1.png)

&nbsp;

Input the name and description (optional) and click \<Add new rule> button to configure the threshold.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/dynamic2.png)

&nbsp;

Enter the details below, click <+Add rule> then \<save>.

Day of week - Which day to execute this rule

Hour - From which hour this rule is to start (start hour)

Minute - From which minute this rule is to start (start minute)

Duration - How many hours or minutes this rule should be in effect

Select operator, value and severity.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/dynamic3.png)
---
title: Customize Powershell Script
geekdocHidden: true
slug: powershell-script
---

This function lets the user customize different scripting methods Powershell scritps.

To create Script monitor, Click \<Metrics> on the Left Navigation Bar then \<Customize> then \<Script>. Click <+Add>.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/script1.png)

&nbsp;

Enter the details below and click \<save>.

Label - Appropriate label for the monitor 

Argument Count – Number of arguments

Category – leave it as default

Script Type – select Powershell 

Add monitor Value – To add different parameters based from the script

![Screenshot](/modules/metrics/images/{{% imagehome %}}/script2.png)

Back to the \<Metrics> and click to the device which installed the agent, enter edit mode and click on \<+ monitor> to add the monitor in others.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/add_monitor.png)

Click on \<manual create> 

![Screenshot](/modules/metrics/images/{{% imagehome %}}/manual_create.png)
---
title: Customize SNMP
geekdocHidden: true
slug: customizesnmp
---

This feature is used to monitor a specific SNMP OID.

To create SNMP monitor, Click \<Metrics> on the Left navigation bar then \<Customize> then \<SNMP>. Click <+Add>.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/snmp1.png)

&nbsp;

Enter the details below and click \<save>.

Label - Appropriate label for the monitor 

Display name - Appropriate name of the counter 

OID - SNMP OID of required counter 

Unit - unit of the counter (OPTIONAL) 

Formula - formula to be applied to the value of the counter 

![Screenshot](/modules/metrics/images/{{% imagehome %}}/snmp2.png)
---
title: Customize Database
geekdocHidden: true
slug: customizedatabase
---

This function lets the user query different database methods like MSSQL, Oracle, DB2, Sybase.

To create Database monitor, Click \<Metrics> on the Left navigation bar then \<Customize > then \<Database>. Click <+Add>.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/database1.png)

&nbsp;

Enter the details below and click \<save>.

Label - Appropriate label for the monitor 

Argument Count – Number of arguments

Instance name column – Number of columns for the instance/s

Type – select between MSSQL, DB2, Oracle, Sybase. 

Add monitor Value – To add different parameters based from the script

![Screenshot](/modules/metrics/images/{{% imagehome %}}/database2.png)
---
title: Customize SNMP, Scripts, Database and Dynamic Thresholds
geekdocHidden: true
slug: customize
---

* <a href="/modules/metrics/customize/customizesnmp">Customize SNMP</a>
* <a href="/modules/metrics/customize/customizescript">Customize Script</a>
  * <a href="/modules/metrics/customize/powershell-script">Customize Powershell-Script</a>
* <a href="/modules/metrics/customize/customizedatabase">Customize Database</a>
* <a href="/modules/metrics/customize/customizethreshold">Customize Dynamic Threshold</a>
---
title: Customize Script
geekdocHidden: true
slug: customizescript
---

This function lets the user customize different scripting methods like Unix/Linux Shell, Visual Basic and Java Script.

To create Script monitor, Click \<Metrics> on the Left Navigation Bar then \<Customize> then \<Script>. Click <+Add>.

![Screenshot](/modules/metrics/images/{{% imagehome %}}/script1.png)

&nbsp;

Enter the details below and click \<save>.

Label - Appropriate label for the monitor 

Argument Count – Number of arguments

Category – Categorize different scripts and monitors

Script Type – select between Unix/Linux Shell, Visual Basic and Java Script. 

Add monitor Value – To add different parameters based from the script

![Screenshot](/modules/metrics/images/{{% imagehome %}}/script2.png)
---
title: Layer 2 and 3 Network Maps
geekdocHidden: true
slug: networkmap
---

This feature serves as a tool for network architecture visualization, focusing on both Layer 2 (Data Link Layer) and Layer 3 (Network Layer). It displays the interconnections within the network, highlighting the routes that data packets follow from source to destination across potentially intricate and multi-layered network paths.

A key technical aspect of this function is its incorporation of network discovery methods. It employs protocols such as the Link Layer Discovery Protocol (LLDP), Cisco Discovery Protocol (CDP), and Huawei Discovery Protocol (HDP). These protocols grant the function the ability to navigate and map the elaborate interconnections within the network, revealing both all links, including the hidden ones.

The function also features an automatic layout mechanism, which presents the complex network topology in a structured and digestible format. Beyond merely offering a static view, the function allows for user-driven customization of the layouts based on specific needs or preferences. These custom views can be preserved for later use, facilitating a more efficient understanding, management, and troubleshooting of network systems.

In summary, this function delivers a comprehensive and user-adaptable approach to network visualization, combining advanced discovery protocols with customizable views. It provides users with the necessary tools to navigate and comprehend the complexities of their network's architecture, thereby enhancing their ability to manage and troubleshoot their systems effectively.

Click on \<Home> in the Left Navigation Bar, then \<Maps> in the Top Navigation Bar. Click on \<Layer 2 Network> or \<Layer 3 Network> to view the Layer 2 and Layer 3 Network maps respectively.

![Screenshot](/modules/home/maps/images/{{% imagehome %}}/layer2map.png)

&nbsp;

![Screenshot](/modules/home/maps/images/{{% imagehome %}}/layer3map.png)
---
title: Logical Map
geekdocHidden: true
slug: logmap
---

Logical Map allows the user to set various types of backgrounds so that there is a useful representation of the enterprise network and systems.

To view the current logical maps, click on \<Home> in the Left Navigation Bar, then \<Maps> in the top navigation bar. Click on \<Logical Map>, and you can view the current information and status of devices in a specific location. 



![Screenshot](/modules/home/maps/images/{{% imagehome %}}/logicalmap2.png)

&nbsp;


To create a new logical map, click <img src="/modules/home/maps/images/{{% imagehome %}}/editicon.png" width="50px"> enter the map name, and click <+Add new view>.


![Screenshot](/modules/home/maps/images/{{% imagehome %}}/logicalcreate.png)

&nbsp;

Click on the new view name that you have just created, click <img src="/modules/home/maps/images/{{% imagehome %}}/editicon.png" width="50px">, click <+Add objects>, to bring up an edit menu.

![Screenshot](/modules/home/maps/images/{{% imagehome %}}/logicaladdobject.png)

&nbsp;

From the pop-up menu, you can set background pictures or upload your own pictures. Drag and drop the devices and symbols into the picture. When completed, close the pop-up menu and save.

![Screenshot](/modules/home/maps/images/{{% imagehome %}}/LogicalMap_3.PNG)
---
title: Geographical Map
geekdocHidden: true
slug: geomap
---

Google Map provides a geographical view of the devices in the IT infrastructure. 

Click on \<Home> in the Left Navigation Bar, then \<Maps> in the Top Navigation Bar. Click on \<Google>, and you can view, monitor and manage devices at Country Level, State Level, Town and down to Street Level. Device details can be further drilled down to the individual parameter level.



![Screenshot](/modules/home/maps/images/{{% imagehome %}}/GeographicalMap.PNG)

&nbsp;

To create a Geographical map view, click on \<Home> in the Left Navigation Bar, then \<Maps> in the top navigation bar. Click on \<Google>, then click on <img src="/modules/home/maps/images/{{% imagehome %}}/editicon.png" width="50px">.

![Screenshot](/modules/home/maps/images/{{% imagehome %}}/geomapcreate.png)

Enter your map name and click <+Add>.  

&nbsp;

Click <img src="/modules/home/maps/images/{{% imagehome %}}/editicon.png" width="50px"> to bring out the device menu, drag and drop the pin to your desired location, and click \<Update>.

![screenshot](/modules/home/maps/images/netgain/LogicalMap.PNG)

![Screenshot](/modules/home/maps/images/{{% imagehome %}}/GeographicalMap_2.PNG)

---
title: Maps
geekdocHidden: true
weight: 18
---


Maps provides a pictorial representation of the devices that are being monitored, showing their status and their location. This allows organizations to better understand and manage their devices in a specific location or network.

The Maps function can be accessed by clicking on \<Home> in the Left Navigation Bar, then \<Maps> in the Top Navigation Bar.

![screenshot](/modules/home/maps/images/netgain/LogicalMap.PNG)
&nbsp;

* <a href="/modules/home/maps/logmap">Logical Map</a>
* <a href="/modules/home/maps/geomap">Geographical Map</a>
* <a href="/modules/home/maps/networkmap">Layer 2 and 3 Network Maps</a>
---
title: Adding a New Service Dependency
geekdocHidden: true
slug: servicedependency
---

To add a service dependency under the service, select the service and click on \<Edit>. Then click on <img src="/modules/home/business_views//images/{{% imagehome %}}/dependencyicon.png" width="150px"> to add a service dependency


![Screenshot](/modules/home/business_views//images/{{% imagehome %}}/servicedependency.png)

&nbsp;


Select the monitor or monitor group from the device view, click on <img src="/modules/home/business_views//images/{{% imagehome %}}/arrowicon.png" width="20px"> to add it to the right hand side selected list. Click on \<Select> to add the service dependency.



![Screenshot](/modules/home/business_views//images/{{% imagehome %}}/object.png)

&nbsp;

You should see a screen showing the new service dependency if it was added successfully.

![Screenshot](/modules/home/business_views//images/{{% imagehome %}}/success.png)

---
title: Adding New BizViews
geekdocHidden: true
slug: addbizview
---

Click on \<Metrics> at the Left Navigation Bar, then click on \<Metrics> at the Top Navigation Bar. Click on \<Objects> in the left side of the top menu, then click on \<Business view>, and click on \<Edit>.


![Screenshot](/modules/home/business_views/images/{{% imagehome %}}/addbizview.png)

&nbsp;

Click on <img src="/modules/home/business_views/images/{{% imagehome %}}/businessicon.png" width="90px"> and input the Business name. Click \<Add>. to add a new BizView.

![Screenshot](/modules/home/business_views/images/{{% imagehome %}}/NewBizviews.PNG)
---
title: Adding Services to BizView
geekdocHidden: true
slug: addservice
---

To add a service under a business, select the business under \<Business view> and click on \<Edit>. Then click on <img src="/modules/home/business_views/images/{{% imagehome %}}/serviceicon.png" width="65px"> to add a service.


![Screenshot](/modules/home/business_views/images/{{% imagehome %}}/addservice.png)

&nbsp;


Input the name of the new service then click <img src="/modules/home/business_views/images/{{% imagehome %}}/addicon.png" width="30px">.


![Screenshot](/modules/home/business_views/images/{{% imagehome %}}/newservice.png)

---
title: Business Views
geekdocHidden: true
weight: 19
---


The {{% company %}} console supports Business View, which is an easy-to-use administrative function that integrates all IT components into one comprehensive framework, transforming the IT infrastructure into a business service.

Business View helps overcome problems in developing an effective Service Level Agreement (SLA), allowing service quality, monitoring methods and report generation parameters to be set. Services can include network interfaces, system performance, databases, web services and standard TCP/UDP ports.


![SCREENSHOTS](/modules/home/business_views/images/netgain/Bizviews.PNG)
&nbsp;


Business View sets the framework for using an XML-based, object-oriented model that defines:
* Client services
* Service dependencies
* Service monitoring
* SLA rules and threshold parameters for service monitoring

A typical business framework follows, where an organization can own many services and sub-services, with each relying on one or more monitors. Each monitor has a series of SLA standards and threshold parameters. 

![SCREENSHOTS](/modules/home/business_views/images/netgain/bizviews2.png)
&nbsp;
* <a href="/modules/home/business_views/addbizview/">Adding New BizViews</a>
* <a href="/modules/home/business_views/addservice/">Adding Services to BizView</a>
* <a href="/modules/home/business_views/servicedependency/">Adding a New Service Dependency</a>
---
title: Top Navigation Bar
geekdocHidden: true
slug: topnavbar
---


The Top Navigation Bar displays different functions, depending on the module selected from the Left Navigation Bar. The current selected function will be underlined. For the Home Page, the available functions are:

* Dashboards: for default dashboards as well customizable dashboards to display.
* BizViews: to view the services availability, status and performance from a business or services perspectives.
* Maps: to view devices status from a logical, physical or geographic view.


![Screenshot](/modules/home/images/{{% imagehome %}}/TopNavBar.png)

---
title: Left Navigation Bar
geekdocHidden: true
slug: leftnavbar
---


The Left Navigation Bar of the console let users access the different modules of {{% company %}} ITM&SM and is always available throughout the console.

There is a small arrow at the base of the menu to expand the icon names.


{{< bootstrap-table table_class="table table-dark table-bordered" >}}
| Button | Description |
|----------------|----------------|
| ![Screenshot](/modules/home/images/{{% imagehome %}}/HomeLeftBar.PNG) | Directs you to the home page of the spog.ai console, where you can access Dashboards, BizView and Maps.|
|![Screenshot](/modules/home/images/{{% imagehome %}}/MetricsLeftBar.PNG) | Lets users check the status or performance of devices or servers over a period of time. Also, where you can discover or add devices to be monitored.      |
|![Screenshot](/modules/home/images/{{% imagehome %}}/SIEMLeftBar.PNG) | Optional SIEM module which includes Log Analytics and Security Analytics.|
|![Screenshot](/modules/home/images/{{% imagehome %}}/NetFlowLeftBar.PNG) | Optional NetFlow module for network traffic details. |
|![Screenshot](/modules/home/images/{{% imagehome %}}/APMLeftBar.PNG) | Optional APM (Application Performance Management) module for application monitoring and management. |
|![Screenshot](/modules/home/images/{{% imagehome %}}/CMDBLeftBar.PNG) | Optional CMDB (Configuration management database) module for Asset Management, Network Configuration Management and IP Address Management. |
|![Screenshot](/modules/home/images/{{% imagehome %}}/AlertsLeftBar.PNG) | Lets you define alarms and how notification messages are to be sent to different IT team members. |
|![Screenshot](/modules/home/images/{{% imagehome %}}/ToolsLeftBar.PNG) | Built-in tools available on the spog.ai console, including sending pings and SNMP settings. |
|![Screenshot](/modules/home/images/{{% imagehome %}}/AdminLeftBar.PNG) | System administrator functions, including adding / changing end-user information/settings. |
{{< /bootstrap-table >}}---
title: Widget Details
geekdocHidden: true
slug: widgetdetails
---


{{< bootstrap-table table_class="table table-dark table-striped table-bordered" >}}
| Category          | Widget Name     | Description    |
|----------------|----------|----------|
| Logs           | Histogram     | Query string driven. Shows logs histogram by different aggregation methods in the form of bar, line and area graphs.<br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/histogram.png)  ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/histogram2.png)     |
| Logs | Summary | Query string driven. Shows logs summary by different aggregation methods in the form of bar, pie, gauge, horizontal bar and line graphs. <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/summary.png) ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/logsummary.png)|
| Logs | SIEM Events | Shows count of current security events generated |
| APM | Histogram | Query string driven. Shows APM histogram by different aggregation methods in the form of bar, line and area graphs <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/apmhistogram.png) |
| APM | Summary | Query string driven. Shows APM summary by different aggregation methods in the form of bar, pie, gauge, horizontal bar and line graphs. <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/apmsummary.png) |
| APM | Errors | Shows the current count of APM transaction errors <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/apmerrors.png) |
| APM | Response Time | Query string driven. Shows APM response time in the form of gauge, bar, pie, gauge, horizontal bar graphs. <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/apmresponse.png) ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/apmresponse2.png)|
| APM | Response Time History | Query string driven. Shows APM response time history trend in the form of bar, line and area graphs. <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/apmhistory.png) ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/apmhistory2.png)|
| NetFlow | TopN | Shows the Top N results in Pie chart for NetFlow related data: source.ip, destination.ip, application <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/topn.png) |
| NetFlow | Histogram | Query string driven. Shows NetFlow histogram in the form of bar, line and area graphs. <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/netflowhistogram.png)|
| Monitor (Metrics) | Report | Provides graphical representation of specified monitor metrics <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/monitorreport.png) |
| Monitor (Metrics) | Heatmap | Shows the alarm heatmap by device category <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/monitorheatmap.png) |
| Monitor (Metrics) | History | Shows the history data and trend for a single monitor value <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/monitorhistory.png) |
| Monitor (Metrics) | Single Value | Shows a single monitor value <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/monitorsv.png)|
| Monitor (Metrics) | Monitor Gauge | Shows a monitor value in the form of a gauge <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/monitorgauge.png)|
| Monitor (Metrics) | Unreachable Devices | Shows a list of monitored devices that cannot be reached <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/monitorud.png)|
| Monitor (Metrics) | Device Overview | Shows an overview of the monitored devices <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/monitordo.png)|
| Monitor (Metrics) | Monitor Status | Shows the monitor status <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/monitorstatus.png)|
| Monitor (Metrics) | Monitor Summary | Shows a summary of the monitor status. <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/monitorsummary.png) |
| Alarm (Alerts) | Alarm Summary | Shows a summary of the current alarms <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/alarmsummary.png)|
| Alarm (Alerts) | Latest Alarms | Shows the current alarms <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/latestalarms.png)|
| Bizviews | Tree View | Shows Bizview in tree view <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/bizviewtree.png)|
| Bizviews | Icon View | Shows Bizview in icon view <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/bizviewicon.png)|
| Maps | Geographical Map | Shows the device status in a geographical map <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/geomap.png)|
| Maps | Logical Map| Shows the device status in a logical map  <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/logmap.png)  |
| Tools | IFrame | Lets you integrate the Dashboard with a web supported iframe <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/iframe.png) |
| Tools | Clock | Displays the date and time <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/clock.png)|
| Tools | Banner | Lets you create a banner message <br> ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/banner.png) |
{{< /bootstrap-table >}}
---
title: Adding a New Dashboard
geekdocHidden: true
slug: adddashboard
---


You can add a new dashboard to the dashboard page and customize it to your requirements. 

Click on <+ Add dashboard> on the right hand side of the top menu


![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/dashboard.png)



Provide a name and group name for the new dashboard, and click on \<Create>:



![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/dashboard2.PNG)---
title: Saving Dashboard
geekdocHidden: true
slug: savedashboard
---

Click on the <img src="/modules/home/dashboards/Images/{{% imagehome %}}/saveicon.png" width="40px"> button at the corner to save the dashboard.


![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/Savedashboard.PNG)
---
title: Cloning a Dashboard
geekdocHidden: true
slug: clonedashboard
---

Click on the <img src="/modules/home/dashboards/Images/{{% imagehome %}}/cloneicon2.png" width="60px"> button at the corner to clone the current dashboard.


![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/clonedashboard1.png)

&nbsp;

 Give a name for the cloned dashboard


![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/clonename.PNG)

&nbsp;

Click on <img src="/modules/home/dashboards/Images/{{% imagehome %}}/cloneicon1.png" width="60px"> to clone the dashboard

![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/clonedashboard2.png)
---
title: Deleting Dashboard
geekdocHidden: true
slug: deletedashboard
---

Click on the <img src="/modules/home/dashboards/Images/{{% imagehome %}}/deleteicon.png" width="130px"> button at the corner to delete dashboard.



![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/DeleteDashboard.PNG)
---
title: Adding Widgets to the Dashboard
geekdocHidden: true
slug: addwidget
---

Click on the \<Add widget > button at the center of the screen to add widgets.


![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/addwidgets.PNG)


Add the widgets appropriate to the view and information you would like to have for the dashboard you are creating. Here is a summary of the widgets currently available by category:

* Logs:

![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/Logs.png)

* APM:

![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/APM.png)

* NetFlow:

![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/NetFlow.png)

* Monitor (Metrics):

![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/metrics.png)

* Alarm (Alerts):

![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/alerts.png)

* Bizviews:

![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/bizviews.png)

* Maps:

![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/maps.png)

* Tools:

![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/tools.png)


![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/allwidgets.PNG)





---
title: Editing Widgets
geekdocHidden: true
slug: editwidget
---

Click on the ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/pencilicon.png) button at the center to edit the widget.



![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/ping.png)


&nbsp;


Click on ![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/tickicon.png) to save changes



![Screenshot](/modules/home/dashboards/Images/{{% imagehome %}}/ping2.png)---
title: Dashboards
geekdocHidden: true
weight: 19
---

Dashboards are used to provide the status of the infrastructure at a view. Dashboards can be added and configured to what the user needs.

NetGain provides 2 flavors of dashboards
* Default built-in dashboards
* Grafana-based dashboards (namely Dashboard 2.0)

# Dashboards 2.0
For more info on this, refer to <a href="/modules/dashboards_2.0/dashboards2/">here</a>
# Default dashboards
The default dashboard provides an overview of the status of the managed devices, including:
* Total number of Business Services, Devices, and Monitors
* Number of critical SLAs, Business, Devices, and Monitors
* Monitor Status
* Current Alarms
* Device Group Status
* {{% company %}} Monitor Engine Status

&nbsp;

* <a href="/modules/home/dashboards/adddashboard">Adding a New Dashboard</a>
* <a href="/modules/home/dashboards/addwidget">Adding Widgets to the Dashboard</a>
* <a href="/modules/home/dashboards/widgetdetails">Widget Details</a>
* <a href="/modules/home/dashboards/editwidget">Editing Widgets</a>
* <a href="/modules/home/dashboards/savedashboard">Saving Dashboard</a>
* <a href="/modules/home/dashboards/deletedashboard">Deleting Dashboard</a>
* <a href="/modules/home/dashboards/clonedashboard">Cloning a Dashboard</a>




---
title: Home
weight: 1
---

 The cloud data platform for receiving, processing, storing and visualizing monitoring data

## Home Page
The Home page provides summary views of the IT system being monitored. When users login to the {{% company %}} console, the Dashboard of the Home page is the first thing that they will see. Besides the Dashboard, the Home page has Business Views (Bizviews) and Maps to graphically show different representations of the status of the IT system. 

The Home page supports multiple dashboards which can be customized to user requirements, including embedding external content within a dashboard. Users are also able to create new dashboard widgets for use in dashboards.


![Screenshot](/modules/home/images/{{% imagehome %}}/Home.png)

&nbsp;

* <a href="/modules/home/leftnavbar">Left Navigation</a>
* <a href="/modules/home/topnavbar">Top Navigation</a>
* <a href="/modules/home/dashboards">Dashboards</a>
* <a href="/modules/home/maps">Maps</a>
* <a href="/modules/home/business_views">Business Views</a>


---
title: Agent
geekdocHidden: true
slug: agent
---

Agents are software components used to collect data for monitoring and management purposes.

The ‘Agents’ tab displays an overview of the performance and transaction metrics for services monitored by the agents.

![Screenshot](/modules/apm/images/spog/APMA1.png)

Basic information includes:
- Service Name
- Transaction
- Transactions per minute (tpm)
- Transactions per day (tpd)
- Spans

Click on ![Refresh](/modules/apm/images/spog/refresh.PNG) to refresh the displayed data.

![Screenshot](/modules/apm/images/spog/APMA2.png)

Click on ![Simulate Transactions](/modules/apm/images/spog/stimulate.PNG) to simulate transactions for testing purposes.

![Screenshot](/modules/apm/images/spog/APMA3.png)

Once clicked, the page will navigate to the dedicated page for testing.

![Screenshot](/modules/apm/images/spog/APMA4.png)

Click on ![Load Sample Data](/modules/apm/images/spog/load.PNG) to load sample data for testing.

![Screenshot](/modules/apm/images/spog/APMA5.png)

Click on ![Delete Data](/modules/apm/images/spog/close.PNG) to delete all data in the system.

![Screenshot](/modules/apm/images/spog/APMA6.png)

# Deploy Agent
The ‘Deploy Agent’ tab provides an overview and instructions for deploying monitoring agents for different programming environments.

![Screenshot](/modules/apm/images/spog/APMA7.png)

Different environments include:
- Java
- .NET
- Real User Monitoring

# Java Agent
Click on ![Java Overview](/modules/apm/images/spog/java.PNG) to view Java’s overview and quick start guide.

![Screenshot](/modules/apm/images/spog/APMA8.png)

Information includes:
- Overview: purpose and functionality of Java Agent
- Quick start guide: instructions to download Java Agent

# .NET Agent
Click on ![.NET Overview](/modules/apm/images/spog/net.PNG) to view .NET’s overview and quick start guide.

![Screenshot](/modules/apm/images/spog/APMA9.png)

Information includes:
- Overview: purpose and functionality of .NET Agent
- Quick start guide: instructions to download .NET Agent

# Real User Monitoring Agent 

Click on ![RUM Overview](/modules/apm/images/spog/realuser.PNG) to view Real User Monitoring’s overview and quick start guide.



![Screenshot](/modules/apm/images/spog/APMA10.png)

Information includes:
- Overview: purpose and functionality of Real User Monitoring Agent
- Quick start guide: instructions to download Real User Monitoring Agent

# Add Transaction Mapping
To get the transaction details, click on `<APM>`, `<APM>` then `<Services>`.

![Screenshot](/modules/apm/images/spog/APMA11.png)

Click on the service name to further view the details of the service.

![Screenshot](/modules/apm/images/spog/APMA12.png)

Once clicked, the page will navigate to the dedicated page of the selected service.

![Screenshot](/modules/apm/images/spog/APMA13.png)


This page provides an in-depth look at the performance and health of the service.

Click on the transaction name to further view details of the transaction.

![Screenshot](/modules/apm/images/spog/APMA14.png)



Once clicked, the page will navigate to the dedicated page of the selected transaction.

![Screenshot](/modules/apm/images/spog/APMA15.png)

Copy the transaction details.

![Screenshot](/modules/apm/images/spog/APMA16.png)

Paste into Original Transaction Name and input Mapped label.

![Screenshot](/modules/apm/images/spog/APMA17.png)

Click ![Add Mapping](/modules/apm/images/spog/save.PNG).

![Screenshot](/modules/apm/images/spog/APMA18.png)

Successful Addition of Mapping.

![Screenshot](/modules/apm/images/spog/APMA19.png)
---
title: Reports
geekdocHidden: true
slug: reports
---

The report module is used to generate ad-hoc reports. This module supports:
* Query string based report generation
* Auto delivery 
* Download as excel

![Screenshot](/modules/apm/images/{{% imagehome %}}/report1.png)

&nbsp;

### Add new report
The software allows users to flexibly define what kind of report they want to generate. To start, click on <img src="/modules/apm/images/{{% imagehome %}}/addreporticon.png" width="100px">

![Screenshot](/modules/apm/images/{{% imagehome %}}/report2.png)

&nbsp;

Give the report template a name, category, short description and the query string, for example:

![Screenshot](/modules/apm/images/{{% imagehome %}}/report3.png)

Once done, click on ‘Save’

&nbsp;

### Report Generation
Click on the report name and select the required time range to generate the report.

![Screenshot](/modules/apm/images/{{% imagehome %}}/report4.png)

&nbsp;

### Report Download
Click on <img src="/modules/apm/images/{{% imagehome %}}/downloadicon.png" width="90px"> to download the report, there will be a separate pop up window appeared, click on the ‘Download’ to proceed downloading.

![Screenshot](/modules/apm/images/{{% imagehome %}}/report5.png)

&nbsp;

### Report template edit
To edit the report, click on <img src="/modules/apm/images/{{% imagehome %}}/editicon.png" width="60px">, once done click on ‘Save’

![Screenshot](/modules/apm/images/{{% imagehome %}}/report6.png)

&nbsp;

### Schedule delivery of report
You can set the schedule for the report to be generated and automatically delivered.

Click on <img src="/modules/apm/images/{{% imagehome %}}/autoicon.png" width="110px">, define the report that is going to send to whom, how frequent to generate and deliver this report.

![Screenshot](/modules/apm/images/{{% imagehome %}}/report7.png)

Once done, click on ‘Save’.
---
title: Dashboard
geekdocHidden: true
slug: dashboard
---

The dashboard shows the overall information includes below:
* Number of Apps or services have been monitored and managed.
* Total transactions
* Transactions per minute
* Total errors
* Average services response time


![Screenshot](/modules/apm/images/{{% imagehome %}}/dashboard1.png)

&nbsp;

By selecting the time range at the top , at the top timerange dropdown list, you will be able to get the results accordingly.

![Screenshot](/modules/apm/images/{{% imagehome %}}/dashboard2.png)

---
title: "Synthetic Monitoring"
geekdocHidden: true
slug: "syntheticmonitoring"
---

Synthetic Monitoring is used to test and monitor applications by simulating user interactions with the software. The user needs to make a recording of a typical transaction, and the system will run the transaction automatically throughout the day. The performance of each run is shown.

Basic information includes:
- Title
- Application URL
- Enabled status
- Last run
- Last run duration
- Last status

## Edit Application

Click on <img src="/modules/apm/apm/images/netgain/edit.PNG" width="35px"> to modify the information of the application.

![Edit Application](/modules/apm/apm/images/netgain/APM%20SM2.png)

Once clicked, the page will navigate to the configuration page.

![Configuration Page](/modules/apm/apm/images/netgain/APM%20SM3.png)

Click on <img src="/modules/apm/apm/images/netgain/edit.PNG" width="35px"> to edit the information of the application.

![Edit Information](/modules/apm/apm/images/netgain/APM%20SM4.png)

Once clicked, the page will navigate to the dedicated page of the selected application for editing.

![Edit Page](/modules/apm/apm/images/netgain/APM%20SM5.png)

Information includes:
- Title
- Enabled: a toggle to enable or disable the application
- Monitor interval: the frequency at which the application should be monitored
- Page timeout: the maximum time allowed for the page to load
- Location
- Condition: define the criteria for generating alerts

Click on <img src="/modules/apm/apm/images/netgain/duplicate.PNG" width="85px"> to create a copy of the application with similar setups.

![Copy Application](/modules/apm/apm/images/netgain/APM%20SM6.png)

Click on <img src="/modules/apm/apm/images/netgain/trash2.PNG" width="40px"> to delete the application.

![Delete Application](/modules/apm/apm/images/netgain/APM%20SM7.png)

## Recording the Simulated Transaction

In your web application, right-click and click on Inspect.

![Inspect](/modules/apm/apm/images/netgain/APM%20SM8.png)

Once clicked, a developer tools panel will appear.

![Developer Tools](/modules/apm/apm/images/netgain/APM%20SM9.png)

Click on <img src="/modules/apm/apm/images/netgain/dots.PNG" width="40px">, then <img src="/modules/apm/apm/images/netgain/tools.PNG" width="300px">, and <img src="/modules/apm/apm/images/netgain/recorder.PNG" width="300px">.

![Proceed](/modules/apm/apm/images/netgain/APM%20SM10.png)

Once clicked, the page will navigate to the dedicated page to create a recording.

![Create Recording](/modules/apm/apm/images/netgain/APM%20SM11.png)

Click on <img src="/modules/apm/apm/images/netgain/recording.PNG" width="200px"> to start the recording.

![Start Recording](/modules/apm/apm/images/netgain/APM%20SM12.png)

Input the recording name and click on <img src="/modules/apm/apm/images/netgain/redrecording.PNG" width="95px">.

![Save Recording](/modules/apm/apm/images/netgain/APM%20SM13.png)

The user will go through the simulated transaction.

Click on <img src="/modules/apm/apm/images/netgain/endrecording.PNG" width="95px"> to end the recording.

![End Recording](/modules/apm/apm/images/netgain/APM%20SM14.png)

This page captures the timeline of the interaction with the webpage.

Click on <img src="/modules/apm/apm/images/netgain/downloadjson.PNG" width="50px"> to export the recording as a JSON file.

![Export Recording](/modules/apm/apm/images/netgain/APM%20SM15.png)

## Import the Recording

Click on <img src="/modules/apm/apm/images/netgain/import.PNG" width="75px"> to start the import process.

![Start Import](/modules/apm/apm/images/netgain/APM%20SM16.png)

Click on <img src="/modules/apm/apm/images/netgain/choosefile.PNG" width="85px">, then select the file and click on <img src="/modules/apm/apm/images/netgain/upload.PNG" width="60px">.

![Upload Recording](/modules/apm/apm/images/netgain/APM%20SM17.png)

Successful upload.

![Successful Upload](/modules/apm/apm/images/netgain/APM%20SM18.png)

## View Details of the Application

Click on the application title to further view the details of the application.

![View Details](/modules/apm/apm/images/netgain/APM%20SM19.png)

Once clicked, the page will navigate to the dedicated page of the selected application.

![Application Page](/modules/apm/apm/images/netgain/APM%20SM20.png)

This page provides a performance log that shows when the application was tested, how long it took to complete each test, and whether the application passed the test. Information includes:
- Timestamp: displays the exact time and date when each synthetic monitoring check was conducted
- Number of steps: total number of steps the user performed during the session
- Duration: total time taken to complete the steps
- Status: displays the outcome of the session

Click on any of the logs to further view the individual steps involved in the Synthetic Monitoring process.

![Log Details](/modules/apm/apm/images/netgain/APM%20SM21.png)

Once clicked, the page will navigate to the dedicated page of the selected log.

![Log Page](/modules/apm/apm/images/netgain/APM%20SM22.png)

The steps are labeled sequentially, starting from Step 0. Each step provides a description of the action and is marked with a timestamp, status of the step, and the duration taken to successfully complete it.

## Run Application

Click on <img src="/modules/apm/apm/images/netgain/play.PNG" width="50px"> to run the synthetic transaction.

![Run Application](/modules/apm/apm/images/netgain/APM%20SM23.png)

A panel will appear and run the steps on the web.

![Run Steps](/modules/apm/apm/images/netgain/APM%20SM24.png)
---
title: Services
geekdocHidden: true
slug: services
---

The ‘Services tab shows the information about the services that are managed by {{% company %}} APM.

![Screenshot](/modules/apm/images/{{% imagehome %}}/services1.png)

&nbsp;

Basic information includes:
* Service Name
* Agent type
* Total Transactions
* Transactions per minute
* Total errors
* Errors per minute
* Average services response time
* Max services response time

### Check details of the service
Click on any of the service name to go into the details of the services.

![Screenshot](/modules/apm/images/{{% imagehome %}}/services2.png)

&nbsp;

Once clicked, the page will go to the dedicated page for the selected service.

![Screenshot](/modules/apm/images/{{% imagehome %}}/services3.png)

&nbsp;

This page will include information similar to the previous page , and with more graphical view.

By scrolling down, you will see each of the transacntions name with further details.
* Name: the transaction name
* Average response time
* 95th percentile response: how long did it take for this transaction at 95th percentile
* Transactions: how many times this transancation has been processed/executed
* Last transaction time

![Screenshot](/modules/apm/images/{{% imagehome %}}/services4.png)

&nbsp;

Each transactions name is a set of mutliple sub-transactions. Further details can been seen by clicking on a particular transaction name:

![Screenshot](/modules/apm/images/{{% imagehome %}}/services5.png)

&nbsp;

### Check details of a transaction
To check the details of a single transaction, click on any of the transcation within the particular timeframe:

![Screenshot](/modules/apm/images/{{% imagehome %}}/services8.png)

&nbsp;

Once clicked, the details will be shown in both forms of <strong>span and table</strong>: 

![Screenshot](/modules/apm/images/{{% imagehome %}}/services6.png)

&nbsp;

Once clicked, the details will be shown in both forms of <strong>span and table</strong>: 

![Screenshot](/modules/apm/images/{{% imagehome %}}/services7.png)

&nbsp;

The table field will consist of at least 80 fields with the values, and this is very useful for Ops team or dev team to look at the details of a single transaction and proceed with further investigation.

Useful and frequently investigate fields are:
* Event.outcome
* Host.ip
* Transaction.duration.us
* Source.ip
* User OS
* Transaction type
* User browser 
---
title: APM
geekdocHidden: true
slug: apm
---



In this APM tab is the main tab where you can get an overview of the services health status as well into the details to check each application transaction status and parameters.

<img src="/modules/apm/images/{{% imagehome %}}/apm1.png" width="400px">

&nbsp;

* <a href="/modules/apm/apm/dashboard">Dashboard</a>
* <a href="/modules/apm/apm/services">Services</a>
* <a href="/modules/apm/apm/syntheticmonitoring">Synthetic Monitoring</a>
---
title: Watcher
geekdocHidden: true
slug: watcher
---

APM Watcher is used to watch out for specified data within APM. The system generates an alarm when the data contains the specified query string. This is useful for identifying problems quickly.

To use APM Watcher, click on \<APM> on the Left Navigation Bar, then click on \<Watcher> on the Top Navigation Bar. Click <+Add rule>.

![Screenshot](/modules/apm/images/{{% imagehome %}}/watcher1.png)

&nbsp;

Enter the data and rules to define what you want to watch out for and to receive an alarm when the conditions are met.

![Screenshot](/modules/apm/images/{{% imagehome %}}/watcher2.PNG)

&nbsp;---
title: APM
weight: 5
---

{{% company %}} APM provides real-user monitoring of an organization’s key business applications. Its APM agents are deployed in application servers to collect and send performance data to the {{% company %}} APM server for processing, which then displays the application performance in an easy to understand format.

Below is the screenshot from the APM page.

![Screenshot](/modules/apm/images/{{% imagehome %}}/apmmain.png)

&nbsp;

{{% company %}} APM Mainly contains four sub tabs which can be found at the Top Navigation Bar:
* <a href="/modules/apm/apm">APM</a>
* <a href="/modules/apm/reports">Reports</a>
* <a href="/modules/apm/watcher">Watcher</a>
* <a href="/modules/apm/agent">Agent</a>



---
title: Dashboard 2.0
slug: dashboards2
geekdocHidden: true
weight: 16
---

Dashboard 2.0 is used for visualizing and tracking key performancec indicators(KPI),metrics, and data points.

Refer to this link to know more about the features of [Grafana](https://grafana.com/docs/grafana/latest/getting-started/build-first-dashboard/)
# Home
This Home tab provides an overview of the current status and performance of your NetGain EM.
![dashboard2.0](/modules/home/dashboards/Images/netgain/Dashboard2.0.png)

Basic information includes:

* Sites:number of monitored sites
* Devices:number of monitored devices
* Monitors:number of monitoring checks being performed
* Critical Status: total number of critical issues from the sites
* Major Status:total number of major issues from the sites
* Minor Status :total number of minor issues from the sites
* Warning Status:total number of warnings issues from the sites 
* Alarms Summary:severity and count of various issues 
* Logs volume:a chart display the volume of application and system logs over time

# Share dashboard/panel

Click onto ![sharinglogo](/modules/home/dashboards/Images/netgain/sharinglogo.PNG) to share dashboard/panel

![dashboard2.0SHARING](/modules/home/dashboards/Images/netgain/dashboard2.0SHaring.png)

Once clicked,the page will navigate to the sharing options page.


![dashboard2.0SHARING](/modules/home/dashboards/Images/netgain/sharingpage.png)

This page provides the sharing option for Link.Internal sharing only as log in is required.

Information includes:

* Lock time range:transforms the current relative time range into an absolute time range for the shared link
* Theme:Choose between different visual themes for the shared links
* Shorten URL: create a shortened version of the link for easier sharing 
* Link URL:Displays the generatede link that can be copied and shared

![dashboard2.0SHARING](/modules/home/dashboards/Images/netgain/snapshot.png)

This page provides the sharing option for Snapshot.External party can also view the snapshot.

Information includes 

* Snapshot name:Name of your snapshot
* Expire:snapshot's availability period
* Timeout:how duration for which the system will wait for the dashboard metrics to be collected before finalizing the snapshot

![dashboard2.0SHARING](/modules/home/dashboards/Images/netgain/export.png)

This page provides the sharing option for Export

Information includes:

* Export for sharing externally:create a file that contains the entiree dashboard's conifguration and data

# Add Panel 

Click on  to add panel in dashboard
![dashboard2.0](/modules/home/dashboards/Images/netgain/dashboard2.01.png)

# View Information

Click on  to view the information in NetGain EM.

![dashboard2.0SHARING](/modules/home/dashboards/Images/netgain/dashboard2.02.png)
# Edit information
Click onto the name of the panel you wish to edit a drop down list will pop out 

![dashboard2.0SHARING](/modules/home/dashboards/Images/netgain/dashboard2.03.png)

# Selecting Status

Click onto the Status tab to reveal the details 
![dashboard2.0SHARING](/modules/home/dashboards/Images/netgain/dashboard2.04.png)

  
---
title: Dashboard 2.0
slug: dashboards2
weight: 16
---

Dashboard 2.0 is used for visualizing and tracking key performancec indicators(KPI),metrics, and data points.

Refer to this link to know more about the features of [Grafana](https://grafana.com/docs/grafana/latest/getting-started/build-first-dashboard/)
# Home
This Home tab provides an overview of the current status and performance of your NetGain EM.
![dashboard2.0](/modules/home/dashboards/Images/netgain/Dashboard2.0.png)

Basic information includes:

* Sites:number of monitored sites
* Devices:number of monitored devices
* Monitors:number of monitoring checks being performed
* Critical Status: total number of critical issues from the sites
* Major Status:total number of major issues from the sites
* Minor Status :total number of minor issues from the sites
* Warning Status:total number of warnings issues from the sites 
* Alarms Summary:severity and count of various issues 
* Logs volume:a chart display the volume of application and system logs over time

# Share dashboard/panel

Click onto ![sharinglogo](/modules/home/dashboards/Images/netgain/sharinglogo.PNG) to share dashboard/panel

![dashboard2.0SHARING](/modules/home/dashboards/Images/netgain/dashboard2.0SHaring.png)

Once clicked,the page will navigate to the sharing options page.


![dashboard2.0SHARING](/modules/home/dashboards/Images/netgain/sharingpage.png)

This page provides the sharing option for Link.Internal sharing only as log in is required.

Information includes:

* Lock time range:transforms the current relative time range into an absolute time range for the shared link
* Theme:Choose between different visual themes for the shared links
* Shorten URL: create a shortened version of the link for easier sharing 
* Link URL:Displays the generatede link that can be copied and shared

![dashboard2.0SHARING](/modules/home/dashboards/Images/netgain/snapshot.png)

This page provides the sharing option for Snapshot.External party can also view the snapshot.

Information includes 

* Snapshot name:Name of your snapshot
* Expire:snapshot's availability period
* Timeout:how duration for which the system will wait for the dashboard metrics to be collected before finalizing the snapshot

![dashboard2.0SHARING](/modules/home/dashboards/Images/netgain/export.png)

This page provides the sharing option for Export

Information includes:

* Export for sharing externally:create a file that contains the entiree dashboard's conifguration and data

# Add Panel 

Click on  to add panel in dashboard
![dashboard2.0](/modules/home/dashboards/Images/netgain/dashboard2.01.png)

# View Information

Click on  to view the information in NetGain EM.

![dashboard2.0SHARING](/modules/home/dashboards/Images/netgain/dashboard2.02.png)
# Edit information
Click onto the name of the panel you wish to edit a drop down list will pop out 

![dashboard2.0SHARING](/modules/home/dashboards/Images/netgain/dashboard2.03.png)

# Selecting Status

Click onto the Status tab to reveal the details 
![dashboard2.0SHARING](/modules/home/dashboards/Images/netgain/dashboard2.04.png)

  
b0VIM 9.1      �ʔf      xavier                                  DESKTOP-9N66UFF                         C:/hugo/docs/content/cloud_vista/Ai/ai.md                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    utf-8U3210#"! U                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     tp �      s            
   r                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ad     �     s   �  �  �  �  �  �  �  �  �  �  y      �  �  �  �  �  �  �  }  o  h  ^  ]  S  R      �  �  �  �  a  `  Q  P  O       �  �  �  �  �  e  d  :    
  �
  �
  �
  �
  �
  v
  P
  
  �	  �	  m	  O	  �  �  �  �  p  A  @  *    �  �  v  /    �  w    �  �  �  �  �  y  H  G  <  ;  �  �  �  �  �  k  j  9  8  "    �  �  �  �  X  W    �  �  �  o  n  =  <  �                   OOnOOOOnce anomalies are detected in the graph,it will trigger the alarms.  ![AI17](/cloud_vista/Ai/images/netgain/AI17.png)  (For Anomaly Detection) Once clicked,the page will navigate to the dedicated page for further viewing of details of the Job   ![AI16](/cloud_vista/Ai/images/netgain/AI16.png) Click on ![link](url) to further view details of the Job  ![AI15](/cloud_vista/Ai/images/netgain/AI15.png) Once clicked,the page will navigate to the dedicated page of the selected Job.   ![AI14](/cloud_vista/Ai/images/netgain/AI14.png) Click on the Job Name. # View Details of Job  ![link](/cloud_vista/Ai/images/netgain/AI13.png)  Hover over the job and click on ![link](url) to delete the job. # Delete Job  ![AI12](/cloud_vista/Ai/images/netgain/AI12.png)  Hover over the job and click on ![link](url) to edit the information of the Job  # Edit Job  ![AI11](/cloud_vista/Ai/images/netgain/AI11.png) Successful creation of Job  ![AI10](/cloud_vista/Ai/images/netgain/AI10.png) Click on ![link](url) to create the job  * Generate alarm:Define the criteria for alarm * Sensitivity(1-100):Determines how easily the system identifies data points as outliers * Reference Period:The time period over which data should be used to generate a baseline for anomaly detection * Parent FDN : Path of the Job * Metrics name:the metric to be monitored * Seasonality: to account for regular predictable patterns in the data * Enabled:a toggle to enable or disable the job  * Job Type:type of job (Select Metrics,other types are seldom used) * Description:description of the job  * Name: name of your job Information includes:  ![AI9](/cloud_vista/Ai/images/netgain/AI9.png) (For Outlier Detection)  * Generate alarm:define the criteria of alarm * Bounds:set criteria to trigger alerts  * Reference Period:the time period over which data should be used to generate a baseline for anomaly detection * Parent FDN: path of the job * Metrics name:the metric to be monitored * Seasonality:to account for regular,predicatble patterns in the data * Enabled:a toggle to enable or disable the job * Job Type:type of job(Select Metrics,other types are seldom used) * Description:description of the job  * Name:name for your job Information includes  ![AI8](/cloud_vista/Ai/images/netgain/AI8.png) (For Anomaly Detecion) Input the remaining informaton  ![AI7](/cloud_vista/Ai/images/netgain/AI7.png) Paste the copied path into the Parent FDN  ![AI6](/cloud_vista/Ai/images/netgain/AI6.png)  Once clicked, a panel will appear to add Job.  ![AI5](/cloud_vista/Ai/images/netgain/AI5.png) Click onto the link ![link](url) to add Job  ![AI4](/cloud_vista/Ai/images/netgain/AI4.png)   Copy the path.  ![AI3](/cloud_vista/Ai/images/netgain/AI3.png)  Select the sites and the Object that you want to create ML(Machine Learning) Jobs  ![AI2](/cloud_vista/Ai/images/netgain/AI2.png)  Click on \<Metrics>,\<Metrics>\<Objects> then \<Device View>.  # Add Job  * Details * Type * Description * Job Name Basic information includes:   &nbsp; ![AI1](/cloud_vista/Ai/images/netgain/AI1.png)  # Same steps apply for both Anomaly and Outlier Detection.  It involves identifying data points that are significantly different from the rest of the data. # Outlier detection   It involves identifying data points,patterns that deviate from the norm within a dataset. # Anomaly Detection  AI is used for monitoring and anomaly detection within the network management platform.AI is applied through machine learning jobs to identify and alert unusual or abnormal conditions in the system metrics --- slug: "ai" geekdocHIDDEN: False title: "AI" --- ad  '  c     
   �  �  k  :  9  !  �  �  �  c  b                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ![AI21](/cloud_vista/Ai/images/netgain/AI21.png) Adjust the sensitivity to control how easily the system identifies data points as outliers  ![AI20](/cloud_vista/Ai/images/netgain/AI20.png) (For Outlier Detection)  ![AI19](/cloud_vista/Ai/images/netgain/AI19.png) Click on \<Alerts>,\<Alerts>then\<Current> and select Anomaly Alarms to view the triggered alarms.  ![AI18](/cloud_vista/Ai/images/netgain/AI18.png) ---
title: "AIOps"
geekdocHIDDEN: false
slug: "ai"
weight: 10
---

AI and machine learning technologies are used for monitoring and anomaly detection within the network management platform. It is applied through machine learning jobs to identify and alert unusual or abnormal conditions in the system metrics.

# Anomaly Detection

It involves identifying data points and patterns that deviate from the norm within a dataset.

# Outlier Detection 

It involves identifying data points that are significantly different from the rest of the data.

# Same steps apply for both Anomaly and Outlier Detection.

![AI1](/cloud_vista/Ai/images/netgain/AI1.png)

---

Basic information includes:
* Job Name
* Description
* Type
* Details

# Add Job

Click on \<Metrics>,\<Metrics>\<Objects> then \<Device View>.


![AI2](/cloud_vista/Ai/images/netgain/AI2.png)

---

Select the sites and the Object that you want to create ML (Machine Learning) Jobs.

![AI3](/cloud_vista/Ai/images/netgain/AI3.png)

---

Copy the path.

![AI4](/cloud_vista/Ai/images/netgain/AI4.png)

---

Click on ![Icon](/cloud_vista/Ai/images/spog/AIICON3.PNG) to add Job.

![AI5](/cloud_vista/Ai/images/netgain/AI5.png)

---

Once clicked, a panel will appear to add Job.

![AI6](/cloud_vista/Ai/images/netgain/AI6.png)

---

Paste the copied path into the Parent FDN.

![AI7](/cloud_vista/Ai/images/netgain/AI7.png)

---

Input the remaining information (For Anomaly Detection).

![AI8](/cloud_vista/Ai/images/netgain/AI8.png)

Information includes:
* Name: name for your job
* Description: description of the job 
* Job Type: type of job (Select Metrics, other types are seldom used)
* Enabled: a toggle to enable or disable the job
* Seasonality: to account for regular, predictable patterns in the data
* Metrics name: the metric to be monitored
* Parent FDN: path of the job
* Reference Period: the time period over which data should be used to generate a baseline for anomaly detection
* Bounds: set criteria to trigger alerts 
* Generate alarm: define the criteria of alarm

---

(For Outlier Detection)

![AI9](/cloud_vista/Ai/images/netgain/AI9.png)

Information includes:
* Name: name of your job
* Description: description of the job 
* Job Type: type of job (Select Metrics, other types are seldom used)
* Enabled: a toggle to enable or disable the job 
* Seasonality: to account for regular predictable patterns in the data
* Metrics name: the metric to be monitored
* Parent FDN: path of the Job
* Reference Period: the time period over which data should be used to generate a baseline for anomaly detection
* Sensitivity (1-100): determines how easily the system identifies data points as outliers
* Generate alarm: define the criteria for alarm

---

Click on ![Icon](/cloud_vista/Ai/images/spog/AIICON2.PNG) to create the job.

![AI10](/cloud_vista/Ai/images/netgain/AI10.png)

---

Successful creation of Job.

![AI11](/cloud_vista/Ai/images/netgain/AI11.png)

---

# Edit Job

Hover over the job and click on ![Icon](/cloud_vista/Ai/images/spog/AIICON5.PNG) to edit the information of the Job.

![AI12](/cloud_vista/Ai/images/netgain/AI12.png)

---

# Delete Job

Hover over the job and click on ![Icon](/cloud_vista/Ai/images/spog/AIICON4.PNG) to delete the job.

![AI13](/cloud_vista/Ai/images/netgain/AI13.png)

---

# View Details of Job

Click on the Job Name.

![AI14](/cloud_vista/Ai/images/netgain/AI14.png)

---

Once clicked, the page will navigate to the dedicated page of the selected Job.

![AI15](/cloud_vista/Ai/images/netgain/AI15.png)

---

Click on the ![Icon](/cloud_vista/Ai/images/spog/AIICON1.PNG) to further view details of the Job.

![AI16](/cloud_vista/Ai/images/netgain/AI16.png)

---

Once clicked, the page will navigate to the dedicated page for further viewing of details of the Job (For Anomaly Detection).

![AI17](/cloud_vista/Ai/images/netgain/AI17.png)

---

Once anomalies are detected in the graph, it will trigger the alarms.

![AI18](/cloud_vista/Ai/images/netgain/AI18.png)

---

Click on \<Alerts>,\<Alerts> then \<Current> and select Anomaly Alarms to view the triggered alarms.

![AI19](/cloud_vista/Ai/images/netgain/AI19.png)

---

(For Outlier Detection)

![AI20](/cloud_vista/Ai/images/netgain/AI20.png)

---

Adjust the sensitivity to control how easily the system identifies data points as outliers.

![AI21](/cloud_vista/Ai/images/netgain/AI21.png)
---
title: Alert Notifications
geekdocHidden: true
slug: alertnotifications
---

Notifications will be sent to relevant persons in the form of e-mails, SMS, 3rd party app messaging, sound or pop-up windows when a fault or service level violation occurs in the managed environment.---
title: History Alerts
geekdocHidden: true
slug: historyalerts
---

This gives an overview of the historical alert notifications based on the category selected.
To go to History Alerts, click on \<Alerts> on the Left Navigation Bar, then click \<Alerts> on the Top Navigation Bar. Click on \<History>.


![Screenshot](/modules/alerts/images/{{% imagehome %}}/history1.png)

&nbsp;

Select the Alert category and the date range of the alerts that you would like to see.

![Screenshot](/modules/alerts/images/{{% imagehome %}}/history2.png)

&nbsp;
---
title: Action Triggers
geekdocHidden: true
slug: actiontriggers
---

Action Trigger alarms can be configured to be executed when an alarm is generated. The auto-actions that match the filtering criteria will be invoked for each alarm generated. ---
title: Monitor Alerts
geekdocHidden: true
slug: monitoralerts
---

{{% company %}} Infrastructure Monitoring uses the following color codes to distinguish between the different severity of alerts.

{{< bootstrap-table table_class="table table-dark table-striped table-bordered" >}}

| Color        | Severity     | Color  | Severity |
| :----------: |:------------:| :-----:| :--------: |
| <table><tr><td style="background: red;">Red</td></tr></table> | Critical | <table><tr><td style="background: #1F45FC;">Blue</td></tr></table>  | Warning |
| <table><tr><td style="background: orange;">Orange</td></tr></table>  | Major    | <table><tr><td style="background: #34A56F;">Green</td></tr></table> | Normal |
| <table><tr><td style="background: yellow;">Yellow</td></tr></table>  | Minor    | <table><tr><td style="background: lightgray;">Gray</td></tr></table>  | Disabled |

{{< /bootstrap-table >}}---
title: "Notification Email"
geekdocHidden: true
slug: notificationemail
date: 2024-06-26T10:11:00Z
---

Email is used for configuring and testing emails alerts for the system, allowing users to receive notifications via email. 

The ‘Email’ tab is showing a section where users can set up email notifications using a pre-defined SMTP server. 

<img src="/modules/alerts/images/{{% imagehome %}}/email1.png" alt="Screenshot" style="width: 1000px; height: auto;">

&nbsp;

Input valid email address and click on \<Send testing mail>.

<img src="/modules/alerts/images/{{% imagehome %}}/email2.png" alt="Screenshot" style="width: 1000px; height: auto;">

Check for notification from your email.
---
title: Integration with 3rd Party Ticketing Apps
geekdocHidden: true
slug: 3rdpartyintegration
---

You can integrate the alerts generated with your existing OpsGenie, Pager Duty or Service Now ticketing apps. Refer to the appropriate documentation for information on setting up this integration.

OpsGenie – uses API key for integration  (https://docs.opsgenie.com/docs/api-integration)

Pager Duty – uses API key, Service ID and User Email ID for integration (https://www.pagerduty.com/sign-up/) 

Service Now – uses URL, Username and Password for integration

**Note**: This plug-in uses Basic Authentication with the ServiceNow REST API, so you would need a valid username and password

---
title: MSTeams notifications
geekdocHidden: true
slug: msteams
---
This document is to provide a step by step setup for MS Teams integration to be setup as the notifications channel.

<!-- spellchecker-disable -->

{{< toc >}}

<!-- spellchecker-enable -->

## Pre-Requisites
1. Download Microsoft (MS) Teams App
* [Windows / MacOS](https://teams.microsoft.com/_#/discover)
	- WebApp 
* Android 
* IOS 
2. MS Teams Account details
3. MS Teams Webhook

## Steps
1. Download MS Teams App for [Windows / MacOS](https://teams.microsoft.com/_#/discover) or just simple use the WebApp
2. Register or Login with your Office365 account
3. Add an incoming Webhook to a Teams channel  
	a. Create your team (e.g. “IT Infra Alerts”)  
	b. In your team, create more Channels  
	c. Navigate to the channel where you want to add the Webhook and select (•••) More Options from the top navigation bar.  
	d. Choose Connectors from the drop-down menu and search for Incoming Webhook.  
		![Webhook screenshot](/modules/alerts/images/{{% imagehome %}}/MSTeams.png  "Click Add on the highlighted Incoming Webhook")  
	e. Click add then provide a name, and, optionally, upload an image avatar for your Webhook.  
	f. The dialog window will present a unique URL that will map to the channel. Make sure that you copy and save the URL—you will need to provide it to the outside service.  
	g. Select the Done button. The Webhook will be available in the team channel.  
4. Go now to GUI, Alarms > Notification >  Microsoft Teams and click +Create. Key-in your Label and copy the given Webhook to Microsoft Teams settings  
5. Send Test message, if successful you can now save
6. Create desired notification Rules and don't forget to tick the “Microsoft Teams” box to enable the MS Teams alert messaging.
7. Create your MS Teams content in notification rules or just simply put “default” to receive system generated alarms
8. MS Teams label should be the same as the Label created in the MS Teams integration settings

**Notes:** You can add multiple MS Teams user to the Channel/s
---
title: Integrations
geekdocHidden: true
slug: integrations
---

* <a href="/modules/alerts/integrations/line">Line notifications</a>
* <a href="/modules/alerts/integrations/msteams">MSTeams notifications</a>
---
title: LINE notifications
geekdocHidden: true
slug: line
---
This document is to provide a step by step setup for Line App integration to be setup as the notifications channel

<!-- spellchecker-disable -->

{{< toc >}}

<!-- spellchecker-enable -->

## Pre-Requisites
1. Mobile Line App Download
* [Android APK](https://line-android-universal-download.line-scdn.net/line-apk-download.html)
* [Apple App Store](https://itunes.apple.com/app/line/id443904275)
* [Google Play](https://play.google.com/store/apps/details?id=jp.naver.line.android)
2. PC Download
* [Windows](https://desktop.line-scdn.net/win/new/LineInst.exe)
* [MacOS](https://itunes.apple.com/app/line/id539883307)


## Steps
1. Download Line App on your preferred device  
	> * Login to your Line Account or Register for new account  
2. Get your Channel Access Token  
	a. Go to [Line Dev](https://developers.line.biz/en/)  
	b. Login using Line / Business account  
	c. Go to Providers, then click "Create" for new Providers  
![Create Providers](/modules/alerts/images/{{% imagehome %}}/lineappproviders.PNG  "click Create for new Providers")  
	d. Create new Messaging API Channel, fill-in necessary details  
	> * Input Channel name, Channel description, category, sub-category, email address  
	> * Free account limit is 500 messages/month  
	
	e. Once Messaging API is created, click the Messaging API sub-menu then Issue Channel access token  
	f. In your LINE™ Mobile App, scan the QR code from the Messaging API sub-menu to add this bot as a chat friend
3. Go now to Web GUI at Alarms > Notification >  Line and click +Create. Key-in your Label and Channel access token 
4. Send Test message, if successful you can now save  
5. Go to Notifications > Rules then click Create. Set desired notification Rules and don't forget to tick the “LINE” box to enable the Line alert messaging  
6. Create your Line messaging content in notification rules or just simply put “default” to receive system generated alarms  
7. Line label should be the same as the Label created in the MS Teams integration settings	
8. Select the Users to Notify
	> * Note: Every User must have LineApp ID set in their User profile under "Users" in the product
9. Save Notification Settings to be able to receive notifications to your LineApp
		
	
	
**Notes:** You can add multiple MS Teams user to the Channel/s
---
title: Alert Categories
geekdocHidden: true
slug: alertcategories
---

Creating different categories lets you group different alerts, and is a pre-requisite in creating notification rules. To create Alert categories, click on \<Alerts> on the Left Navigation Bar, then click on \<Policies> in the Top Navigation Bar. Click on \<Categories>, then click <+Create>.

![Screenshot](/modules/alerts/images/{{% imagehome %}}/categories1.png)

&nbsp;

Fill in the details required and click \<Save> to save this Alert category: 

Name – Name of the Alert category

Object Class – Name of Monitors

Severity – Severity level of alert

Object name (fdn) – Device or Device group and/or Monitors or Monitors group to be included.

![Screenshot](/modules/alerts/images/{{% imagehome %}}/categories2.PNG)
---
title: Notification Rules
geekdocHidden: true
slug: notificationrules
---

You can create Notification Rules to send SMS, email, 3rd party app messages, or audio and pop-up Windows alerts when your devices reach preset critical threshold levels. To create a Notification Rule, click on \<Alerts> on the Left Navigation Bar, then click on \<Notifications> on the Top Navigation Bar. Click on \<Rules>, then <+Create>.

![Screenshot](/modules/alerts/images/{{% imagehome %}}/rules1.png)

&nbsp;

Fill in the details required to setup the rule, then click <Save> to save this rule: 

Send once - set to notify the End-User once.

Send every time - set to notify the End-User from time to time.

Send when the alarm occurs at least - set to notify the End-User every time the alarm is violated.

Valid start and end - start time and end time for sending notification.

Send alarm acknowledge - notify the End-User when the alarm is acknowledged.

Send alarm annotation - notify the End-User when the alarm is annotation.

Send alarm cleared - notify the End-User when the alarm is cleared.

Roles to notify - Which user roles to notify.

User to notify - Which End-User to notify.

![Screenshot](/modules/alerts/images/{{% imagehome %}}/rules2.PNG)

---
title: Current Alerts
geekdocHidden: true
slug: currentalerts
---

Device metrics that exceed set thresholds will generate an alert.  Current alerts are alerts that have not been acknowledged.

To navigate to Current alerts, click on \<Alerts> on the Left Navigation Bar, then click \<Alerts> on the Top Navigation Bar. Click on \<Current>.


![Screenshot](/modules/alerts/images/{{% imagehome %}}/currentalert1.png)

&nbsp;

The End-User can select the actions to take for a device giving an alert: 

Ack - The selected device will be acknowledged by the User; notification will be held unless the end-user unacknowledges it. 

Unack - The selected device will be unacknowledged by the User; notification will appear again for the current alert.

Discharge - Delete the alert notification.

Export - Export the information of the device selected in Excel format.

![Screenshot](/modules/alerts/images/{{% imagehome %}}/currentalert2.png)

&nbsp;

To see the full information of a certain alert, select “Details”.

![Screenshot](/modules/alerts/images/{{% imagehome %}}/currentalert3.png)

&nbsp;

A pop-up box will appear giving detailed information of the alert for the selected device, which you can customize. The alert information details include:

Alarm Object - Name of the object and the monitor group.

General info - Details of attribute and its value.

Annotations - Allows you to put short notes.

Notify now – to notify immediately any user via email / sms

Additional Info - Additional information of the device.

![Screenshot](/modules/alerts/images/{{% imagehome %}}/currentalert4.png)
---
title: Other Alert Notification Settings
geekdocHidden: true
slug: othersettings
---

Besides Email and SMS notification, there are other methods to alert users, including 3rd party messaging apps such as Slack, MS Teams, WeChat, Alicloud, LINE and Telegram. 

![Screenshot](/modulemodules/alerts/images/{{% imagehome %}}/rules2.PNG)

&nbsp;

Slack – uses webhooks to integrate (https://api.slack.com/messaging/webhooks)

MS Teams – uses webhooks to integrate (https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook)

WeChat – uses CorpID, CorpSecret and AgentID to integrate (https://mp.weixin.qq.com/)

AliCloud – uses Access Key ID, Access Secret, Sign Name, Template Code, and Phone number to integrate (https://help.aliyun.com/document_detail/101300.html) 

LINE app – uses Channel access token to integrate (https://gateway.internal.netgain-systems.com/u/gw#line_integration)

Telegram – uses token, botFather and ChatID to integrate (https://core.telegram.org/bots#6-botfather)

Users can generate a test message to check that the alert notification via these messaging apps have been properly setup.
---
title: Alert Correlation
geekdocHidden: true
slug: alertcorrelation
---

Root Cause rule defines the relation of a root cause object’s alarm to the dependent object’s alarm in a time window.  We can define such rules for well-known dependencies, such as a web-server and a web-site. 

If a root cause alarm arrives prior to the dependent alarms, the dependent alarms are not propagated until the root cause is fixed within a time window.   

This behavior could help to quickly identify the root cause, while helping to focus away from the dependent alarms. For example, if a web-server is down the web-site would be down as well. Therefore, if a root-cause alarm ‘Web-server down’ is present within a reasonable amount of time prior to the arrival of ‘Web-site down’ alarm, then the ‘Web-site down’ alarm will not be sent. 

---
title: Alerts
weight: 11
---

This section documents the alerts and notifications options in the software, and the information on settings.

* <a href="/modules/alerts/monitoralerts">Monitor Alerts</a>
* <a href="/modules/alerts/currentalerts">Current Alerts</a>
* <a href="/modules/alerts/historyalerts">History Alerts</a>
* <a href="/modules/alerts/alertpolicies">Alert Policies</a>
* <a href="/modules/alerts/alertcategories">Alert Categories</a>
* <a href="/modules/alerts/alertcorrelation">Alert Correlation</a>
* <a href="/modules/alerts/actiontriggers">Action Triggers</a>
* <a href="/modules/alerts/alertnotifications">Alert Notifications</a>
* <a href="/modules/alerts/notificationrules">Notification Rules</a>
* <a href="/modules/alerts/notificationemail">Notification Email</a>
* <a href="/modules/alerts/othersettings">Other Alert Notification Settings</a>
* <a href="/modules/alerts/3rdpartyintegration">Integration with 3rd Party Ticketing Apps</a>

---
title: Alert Policies
geekdocHidden: true
slug: alertpolicies
---

This lets you create different policies for different alerts.
---
title: Search
geekdocHidden: true
slug: search
---

The search function here is like the search bar on Log Analytics. User can do simple search or advance query string on the logs that recorded threat. \<Help> can be used to learn more about the query syntax.

User can select the time range and look at the number of threat logs on different time range.

---
title: Threat Events
geekdocHidden: true
slug: threatevents
---

In Threat Events, user can search for the threat events based on their threat ID or threat message. Clicks on the events will bring up all the related log that linked to this threat.

User can also select the different time range to check for the events that happened. 

---
title: Threat Detection
geekdocHidden: true
slug: threatdetection
---

By default, {{% company %}} support around 500 detection rules. Detection rules are done through the query string. 

For default rule, user can \<Disable>, \<Enable> and \<Edit> the tags or description (but not query expression) in the edit.

To add new rule, user can add in \<Add new rule>.  User just need to specific the name, tags, description accordingly.

User can define the \<interval> on how frequent for SIEM to run through this rule. For \<search window> under logic type query, user can define the historical search window. 

{{% company %}} supports 3 types of logic type: Python(sandbox), Query and Workflow to create new rules.  
* Python: Python API documentation is available in the GUI 
* Query: Using search query or query expression. 
* Workflow: Flow chart type logic. The workflows can be created in the \<AI Workflows>

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/threatdetection.png)

&nbsp;

### Threat Intelligence & Lookup Tables
Threat Intelligence is where {{% company %}} gather the flagged IP or URL from establish sources and compare against the logs.  User can choose to enable or disable particular sources.

For lookup tables, user can use it to create table to map key to a value. The key can be used in python script to run certain rules.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/threatdetection2.png)





---
title: MITRE ATT&CK
geekdocHidden: true
slug: mitreattack
---

MITRE ATT&CK® is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.

MITRE ATT&CK is an information tab that allow user to link certain threats to the MITRE techniques ID. User can refer more info from this link: https://attack.mitre.org/

---
title: AI Workflows
geekdocHidden: true
slug: aiworkflow
---

AI (Advanced Intelligence) Workflows support simple ways to create new rules and more complicated rules. It is useful for user that is not familiar with python language. AI workflows also provide an easy view of the logic flow for non-technical person to understand the rules.

To create the workflows, user can just drag the symbols from the left bar to the center area to create the link with other symbols. By clicking on the symbol, user can bring up symbol properties and user can fill in the require name or label accordingly.


![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/aiworkflow.png)

&nbsp;

Above picture is one of the examples of simple workflows on windows logon event. Below picture is example for Query logs symbol properties. User to specify the query string in the example is event.code : 4725.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/aiworkflow2.png)

&nbsp;

Below picture is an example for CreateThreat symbol properties. User to specify the Threat message accordingly. 

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/aiworkflow3.png)
---
title: Security Analytics
geekdocHidden: true
weight: 4

---

{{% company %}} Security Analytics can manage logs and other data from a wide range of devices including:
* Network equipment such as routers and switches
* Security devices such as firewalls, IPS/IDS and APT
* Servers such as email or AD servers
* Windows Event logs

{{% company %}} Security Analytics receives, collects, organizes, searches, correlates, and analyzes data, displaying information in customizable dashboards, and delivering alerts and notifications when abnormalities, problems, or threats are detected.

* <a href="/modules/siem/security_analytics/search">Search</a>
* <a href="/modules/siem/security_analytics/threatevents">Threat Events</a>
* <a href="/modules/siem/security_analytics/threatdetection">Threat Detection</a>
* <a href="/modules/siem/security_analytics/aiworkflow">AI Workflows</a>
* <a href="/modules/siem/security_analytics/mitreattack">MITRE ATT&CK</a>

---
title: Search
geekdocHidden: true
slug: search
---

The search function here is like the search bar on Log Analytics. User can do simple search or advance query string on the logs that recorded threat. \<Help> can be used to learn more about the query syntax.

User can select the time range and look at the number of threat logs on different time range.

---
title: Threat Events
geekdocHidden: true
slug: threatevents
---

In Threat Events, user can search for the threat events based on their threat ID or threat message. Clicks on the events will bring up all the related log that linked to this threat.

User can also select the different time range to check for the events that happened. 

---
title: Threat Detection
geekdocHidden: true
slug: threatdetection
---

By default, {{% company %}} support around 500 detection rules. Detection rules are done through the query string. 

For default rule, user can \<Disable>, \<Enable> and \<Edit> the tags or description (but not query expression) in the edit.

To add new rule, user can add in \<Add new rule>.  User just need to specific the name, tags, description accordingly.

User can define the \<interval> on how frequent for SIEM to run through this rule. For \<search window> under logic type query, user can define the historical search window. 

{{% company %}} supports 3 types of logic type: Python(sandbox), Query and Workflow to create new rules.  
* Python: Python API documentation is available in the GUI 
* Query: Using search query or query expression. 
* Workflow: Flow chart type logic. The workflows can be created in the \<AI Workflows>

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/threatdetection.png)

&nbsp;

### Threat Intelligence & Lookup Tables
Threat Intelligence is where {{% company %}} gather the flagged IP or URL from establish sources and compare against the logs.  User can choose to enable or disable particular sources.

For lookup tables, user can use it to create table to map key to a value. The key can be used in python script to run certain rules.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/threatdetection2.png)





---
title: MITRE ATT&CK
geekdocHidden: true
slug: mitreattack
---

MITRE ATT&CK® is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.

MITRE ATT&CK is an information tab that allow user to link certain threats to the MITRE techniques ID. User can refer more info from this link: https://attack.mitre.org/

---
title: AI Workflows
geekdocHidden: true
slug: aiworkflow
---

AI (Advanced Intelligence) Workflows support simple ways to create new rules and more complicated rules. It is useful for user that is not familiar with python language. AI workflows also provide an easy view of the logic flow for non-technical person to understand the rules.

To create the workflows, user can just drag the symbols from the left bar to the center area to create the link with other symbols. By clicking on the symbol, user can bring up symbol properties and user can fill in the require name or label accordingly.


![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/aiworkflow.png)

&nbsp;

Above picture is one of the examples of simple workflows on windows logon event. Below picture is example for Query logs symbol properties. User to specify the query string in the example is event.code : 4725.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/aiworkflow2.png)

&nbsp;

Below picture is an example for CreateThreat symbol properties. User to specify the Threat message accordingly. 

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/aiworkflow3.png)
---
title: Watcher
geekdocHidden: true
slug: watcher
---

This function is used to watch out for specified data within incoming data logs.  The system sends an alarm when the incoming log data contains a specified key word or phrase. This is useful to detect any known abnormalities or behavior. 

To access the Watcher function, click on the \<SIEM> icon at the Left Navigation Bar then click on \<Watcher> at the Top Navigation Bar if not already at the Reports page.


![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/watcher.png)

&nbsp;

### Add Watcher Rule
Click on Watcher < > and when you are in the Watcher menu, click <img src="/cloud_vista/securityanalytics/images/{{% imagehome %}}/addruleicon.png" width="65px">.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/watcheraddrule.png)

&nbsp;

Enter the data and rules to define what you want to watch out for and receive an alarm when the conditions are met.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/Watcher_WatcherRule.PNG)

&nbsp;

<strong>Name</strong> – Input name of rule.

<strong>Enable</strong> – Select Yes/No to enable rule.

<strong>Run interval</strong> – Select interval time to run the rule.

<strong>Search windows</strong> – Select logs past time to run the rule.

<strong>Query string</strong> - Input query string value for logs search.

<strong>Log Hits</strong> -   Input log hits “expression” and “numbers”

<strong>Alarm message</strong> – Input alarm message.

<strong>Alarm generation</strong> - Select condition for alarm generate.

<strong>Save</strong> – Save watcher rule.

&nbsp;

Watcher will search the log data according to the conditions set. Results are displayed on the main page of the Watcher menu.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/logwatcher.png)

&nbsp;

### To view LogWatch alerts
When the Watcher rule has been created and enabled,  an alert will be generated if the specified key word or phrase is detected. 

To see the alert message, click on Alerts icon at the Left Bavigation bar then click on \<Alerts> at the Top Navigation Bar than click on \<Current> at the sub menu bar then select \<LogsWatch Alarms> at the drop down list menu.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/viewlogwatch.png)

---
title: Search
geekdocHidden: true
slug: search
---

SIEM search is for the user to do simple search through keywords or to do advance query string search. Example simple search: 

 	
&#10146;	destination.ip : 10.168.104.3

&#10146;	destination.ip : 10.168.104.3 OR app.name : ssl  

Example advance search
	
&#10146;	source.ip: 192.168.* | table destination.ip bytes

User can get more accurate result by searching the field name (event.category, destination.ip, app.name etc.)

User can get more info about the search syntax through the \<Help> button.


![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/search1.png)

&nbsp;

User also can adjust time range from the drop-down menu and drag & display time range from the graph itself.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/search2.png)
---
title: Archive
geekdocHidden: true
slug: archive
---

{{% company %}} SIEM support archive of log file to external storage/NAS storage. The benefits are to keep logs both in live and archive at same time for better data recovery and at the same time allow user to easily restore the logs when needed.


### The SIEM archive mechanism
Syslog and Beatslog will be daily archive to the desired path.

The archive files for previous days will be compressed periodically to save space.

User able to re-ingest the log when necessary.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/archive.png)
---
title: Sources
geekdocHidden: true
slug: sources
---

This section enables the user to add logs into the system.  


![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/sources1.png)

&nbsp;

### Log Sources
To check for the log source from different IP at selected time range. User can get the information on total logs, Average Events Per Sec (EPS), Average Events Per Minute (EPM) , and Average Events Per Hour (EPH).  User can further search form the table from search bar. 

# Log Volumes
Log volumes can be used for monitoring and analyzing the amount of log data being generated within the system.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/SIEM1.png)

The ‘Log volumes’ tab displays the volume of data collected over a period of time. 
Basic Information includes:
* Day
* Volume: in megabytes (MB)
* Volume: in bytes
# Update Log volumes data

Click on <img src="/cloud_vista/loganalytics/images/{{% imagehome %}}/refresh.png" alt="Screenshot" style="width: 65px; height: auto;"> to update Log volumes with the latest data.


![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/SIEM2.png)

# Audit Logs

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/SIEM3.png)

The ‘Audit logs’ tab shows instructions on collecting and configuring audit logs from Linux/Unix and Windows systems using Auditbeat tool. 


### Add syslogs: 
To get network devices sending syslogs to {{% company %}} SIEM, user can follow the example guide in this tab. 

Configure network devices to forward to {{% company %}} EM IP address, at port 514.

Check the GUI for some examples. User can get more information from the device vendor on how to configure for syslog forwarding. 

### Windows Event Logs:
For windows event logs, Winlogbeat is needed to collect and parse logs from windows. User can follow the guide here to install, configure and collect logs.

### Other logs: 
Logs from various systems and applications can use the elasticsearch Filebeat module to collect and parse logs. User can follow guide here to install and configure collector. 

### Sample Data: 
Sample data are available to ingest into SIEM log analytics module to stimulate real logs. This also support file import. User can use this sample data to check for mapping rule, search functions or for demonstration. 

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
  

---
title: Filebeat
geekdocHidden: true
weight: 2
---

# About Filebeat
**Filebeat** is a software that runs on your managed host or emedge. It collects logs and parse them to **emedge** for aggregation and forwarding to **{{% company %}}**, where you can analyze the data.
## Supported Metrics
Currently **{{% company %}}** supports Filebeat for following: 

Find steps here for installation of **Filebeat**: <a href="/cloud_vista\loganalytics\filebeat/installation">Installation</a> 
>ActiveMQ module   
Apache module   
Auditd module   
AWS module   
AWS Fargate module   
Azure module   
Barracuda module   
Bluecoat module   
CEF module   
Check Point module   
Cisco module   
CoreDNS module   
Crowdstrike module   
Cyberark module   
Cyberark PAS module   
Cylance module   
Elasticsearch module   
Envoyproxy Module
F5 module   
Fortinet module   
Google Cloud module   
Google Workspace module   
GSuite module   
haproxy module   
IBM MQ module   
Icinga module   
IIS module   
Imperva module   
Infoblox module   
Iptables module   
Juniper module   
Kafka module   
Kibana module   
Logstash module   
Microsoft module   
MISP module   
MongoDB module   
MSSQL module   
MySQL module   
MySQL Enterprise module   
nats module   
NetFlow module   
Netscout module   
Nginx module   
Office 365 module   
Okta module   
Oracle module   
Osquery module   
Palo Alto Networks module   
pensando module   
PostgreSQL module   
Proofpoint module   
RabbitMQ module   
Radware module   
Redis module   
Santa module   
Snort module   
Snyk module   
Sonicwall module   
Sophos module   
Squid module   
Suricata module   
System module   
Threat Intel module   
Tomcat module   
Traefik module   
Zeek (Bro) Module
ZooKeeper module   
Zoom module   
Zscaler module   
>  


Find steps here for installation of **Filebeat**: <a href="/cloud_vista\loganalytics\filebeat/installation">Installation</a> 

---
title: Schema
geekdocHidden: true
slug: schema
---

This is information tab about Elastic Common Schema. User can get more from the following link: https://www.elastic.co/guide/en/ecs/current/index.html---
title: Filters
geekdocHidden: true
slug: filters
---

User can use filters function to exclude processing certain logs.

Example: To exclude logs that contain “session event 1656” .


![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/filters.png)

After setting filter, user can test the rule using \<Test filters>. 

---
title: Watcher
geekdocHidden: true
slug: watcher
---

This function is used to watch out for specified data within incoming data logs. The system sends an alarm when the incoming log data contains a specified key word or phrase. This is useful to detect any known abnormalities or behavior. 

To access the Watcher function, click on the \<SIEM> icon at the Left Navigation Bar then click on \<Watcher> at the Top Navigation Bar if not already at the Reports page.


![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/watcher.png)

&nbsp;

### Add Watcher Rule
Click on Watcher < > and when you are in the Watcher menu, click <img src="/cloud_vista/loganalytics/images/{{% imagehome %}}/addruleicon.png" width="65px">.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/watcheraddrule.png)

&nbsp;

Enter the data and rules to define what you want to watch out for and receive an alarm when the conditions are met.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/Watcher_WatcherRule.PNG)

&nbsp;

<strong>Name</strong> – Input name of rule.

<strong>Enable</strong> – Select Yes/No to enable rule.

<strong>Run interval</strong> – Select interval time to run the rule.

<strong>Search windows</strong> – Select logs past time to run the rule.

<strong>Query string</strong> - Input query string value for logs search.

<strong>Log Hits</strong> -   Input log hits “expression” and “numbers”

<strong>Alarm message</strong> – Input alarm message.

<strong>Alarm generation</strong> - Select condition for alarm generate.

<strong>Save</strong> – Save watcher rule.

&nbsp;

Watcher will search the log data according to the conditions set. Results are displayed on the main page of the Watcher menu.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/logwatcher.png)

&nbsp;

### To view LogWatch alerts
When the Watcher rule has been created and enabled,  an alert will be generated if the specified key word or phrase is detected. 

To see the alert message, click on Alerts icon at the Left Bavigation bar then click on \<Alerts> at the Top Navigation Bar than click on \<Current> at the sub menu bar then select \<LogsWatch Alarms> at the drop down list menu.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/viewlogwatch.png)

---
title: Mapping
geekdocHidden: true
slug: mapping
---

{{% company %}} supports some log mapping by default. The common logs follows Common Event Format (CEF), and some other mappings supported by default are Aruba, Cisco, Fortinet logs etc. 

If user want to customize log mapping, user can use the \<GROK console> and \<test mapping>. After getting the customize mapping GROK expression, user can add the mapping rule in <+ Add mapping>. 


\<Performance> can be used to check Elasticsearch ingest performance.


![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/mapping.png)

&nbsp;

### GROK Console
User can use the sample logs provided, to test out the GROK expression. Delete anything in front of the {.*} can make the expression bypass to mapped certain field.

The mapped output fields are on the right. User can control the output mapped fields using GROK expression. 

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/grok.png)

User can add the new GROK expression in <+Add mapping>. After adding, user can test the mapping rule against all configured mappings in \<Test Mapping> to check if the log if mapped intendedly to the desired field.

---
title: Log Analytics
geekdocHidden: true
weight: 6

---

{{% company %}} Log Analytics can manage logs and other data from a wide range of devices including:
* Network equipment such as routers and switches
* Security devices such as firewalls, IPS/IDS and APT
* Servers such as email or AD servers
* Windows Event logs

{{% company %}} Log Analytics receives, collects, organizes, searches, correlates, and analyzes data, displaying information in customizable dashboards, and delivering alerts and notifications when abnormalities, problems, or threats are detected.

* <a href="/cloud_vista/loganalytics/search">Search</a>
* <a href="/cloud_vista/loganalytics/sources">Sources</a>
* <a href="/cloud_vista/loganalytics/filters">Filters</a>
* <a href="/cloud_vista/loganalytics/mapping">Mapping</a>
* <a href="/cloud_vista/loganalytics/filebeat">Filebeat</a>
* <a href="/cloud_vista/loganalytics/schema">Schema</a>
* <a href="/cloud_vista/loganalytics/archive">Archive</a>
* <a href="/cloud_vista/loganalytics/reports">Reports</a>
* <a href="/cloud_vista/loganalytics/watcher">Watcher</a>
---
title: Common
geekdocHidden: true
slug: common
---

Click on \<Common> to access the report. Common will contain report template of Windows. 

There are 282 report templates for Windows ready to use. 

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/common.png)

&nbsp;

Click on the desired report format. The system will generate a report. As an example of the report as shown in the figure below, chosen to generate a \<AD Backup Error> report.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/common2.png)

&nbsp;

The information shown in the report includes:

<strong>Report Name</strong> – Show report name.

<strong>Device Type</strong> – Show description of device type.

<strong>Search criteria</strong> – Expression for search criteria.

<strong>Entries numbers</strong> – Number of entries.

### Report Submenu:

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/common3.png)

&nbsp;

<img src="/cloud_vista/loganalytics/images/{{% imagehome %}}/timeicon.png" width="50px"> - Select time range of report

<strong>Save to local</strong> - Save report to local computer and report is HTML format file.

<strong>Print</strong> – Print report.

<strong>Refresh</strong> – Refresh report.

<strong>Close</strong> - Close report page and back to previous page


---
title: GPG
geekdocHidden: true
slug: gpg
---

In \<GPG> there are 5 report templates.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/gpg.png)

&nbsp;

Recording Relating to Network Connections (PMC Rule 6)
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logon
* Windows : User Logoff
* Windows : User Logon

Recording on Data Backup status (PMC Rule 8) 
* Windows : Failed Windows Backup
* Windows : Failed Windows Restores
* Windows : Successful Windows restore
* Windows : Successful Windows backup

Recording on Internet Workstation, Server or Device Status (PMC Rule 4)
* Windows : Registry Created
* Windows : Registry Deleted
* Windows : Registry Value Modified

Reporting on The Status of The Audit System (PMC Rule 10)
* Windows : Defender Malware Detection
* Windows : Defender Real Time Protection Detection
* Windows : DoS Attacks
* Windows : Downgrade Attacks
* Windows : Event Loggins Service Shutdown
* Windows : Event Logs Cleared
* Windows : IP Conficts
* Windows : Replay Attacks
* Windows : Security Logs Cleared
* Windows : Terminal Server Attacks
* Windows : User Account Locked Out Error

Suspicious Internal Networks Activity (PMC Rule 5)
* Windows : Audit Policy Changed
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Right Assigned
* Windows : User Rights Removed



---
title: SOX
geekdocHidden: true
slug: sox
---

In \<SOX> there are 7 report templates.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/sox.png)

&nbsp;

SEC 302(a)(4)(A)
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : Process Accessed
* Windows : Process Created
* Windows : Process Duplicated
* Windows : Process Terminated
* Windows : Software Install
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Windows Startup and Windows Shutdown

SEC 302(a)(4)(b)
* Windows : Audit Policy Changed
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Right Assigned
* Windows : User Rights Removed

SEC 302(a)(4)(C)
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : User Logoff
* Windows : User Logon

SEC 302(a)(4)(D)
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : UnSuccessful Post Authentication
* Windows : UnSuccessful Pre Authentication

SEC 302(a)(5)(A)
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes

SEC 302(a)(5)(B)
* Windows : Windows Individual User Action

SEC 302(a)(6)
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified


---
title: GLBA
geekdocHidden: true
slug: glba
---

In \<GLBA> there are 2 report templates.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/glba.png)

&nbsp;

Section 501B (1)
* Windows : AD Backup Eror
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : Software installed
* Windows : Software Uninstalled
* Windows : Software Update
* Windows :: Windows Startup and Windows Shutdown


Section 501B (2) & (3)
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : User Logoff
* Windows : User Logo



---
title: ISO 2700 2013
geekdocHidden: true
slug: iso27002013
---

In \<ISO 27001 2013> there are 6 report templates.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/iso.png)

&nbsp;

Control A 12.4.1
* Windows : Audit Policy Changed
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

Control A 12.4.2
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Audit Policy Changed
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : New Service Installed
* Windows : Software Installed
* Windows : Software uninstalled
* Windows : Software updated
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Startup and Windows Shutdown

Control A.12.4.3
* Windows : Audit Policy Changed
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Group Created
* Windows : Group Deleted
* indows : Group Modified
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : User Logoff
* Windows : User Logon
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

Control A 9.2.1
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : Windows Individual User Action

Control A 9.2.5
* Windows : Audit Policy Changed
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Right Assigned
* Windows : User Rights Removed

Control A 9.4.2
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : Windows Individual User Action



---
title: HIPAA
geekdocHidden: true
slug: hipaa
---

In \<HIPAA> there are 6 report templates. 

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/hipaa.png)

&nbsp;

164.308(a)(1)(ii)(D)
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes

164.308(a)(3)(ii)(A)
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication

164.308(a)(4)(ii)(B)
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication

164.308(a)(5)(ii)(C)
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows :  User Logoff
* Windows : User Logon

164.308(a)(6)(ii)
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : User Logoff
* Windows : User Logon

166.308(a)(7)(i)
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : Software Installed
* Windows : Software uninstalled
* Windows : Software updated
* Windows : Windows Startup and Windows Shutdown
* Account Logon
* Object Access


---
title: FERPA
geekdocHidden: true
slug: ferpa
---

In \<FERPA> there is 1 report template.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/ferpa.png)

&nbsp;

Section 99.31 (a)(1)(ii)
* Windows : File Created
* Windows : Files Deleted
* Windows : Files Modified
* Windows : File Permission Changes
* Windows : Removable Disk Creates
* Windows : Removable Disk Deletes
* Windows : Removable Disk Failed Creates
* Windows : Removable Disk Failed Deletes
* Windows : Removable Disk Failed Modifications
* Windows : Removable Disk Failed Reads
* Windows : Removable Disk Modifications
* Windows : Removable Disk Reads



---
title: PDPA
geekdocHidden: true
slug: pdpa
---

In \<PDPA> there are 2 report templates.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/pdpa.png)

&nbsp;

RULE VI Section 25
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Removable Disk Creates
* Windows : Removable Disk Deletes
* Windows : Removable Disk Failed Creates
* Windows : Removable Disk Failed Deletes
* Windows : Removable Disk Failed Modifications
* Windows : Removable Disk Failed Reads
* Windows : Removable Disk Modifications
* Windows : Removable Disk Reads
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon
* Windows : Windows Individual User Action
* Windows : Wireless Network Authentications
* Windows : Wireless Network Connected
* Windows : Wireless Network Disconnected

RULE VII Section 30
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission ChangesWindows : Network Logoffs
* Windows : Network Logon
* Windows : Removable Disk Creates
* Windows : Removable Disk Deletes
* Windows : Removable Disk Failed Creates
* Windows : Removable Disk Failed Deletes
* Windows : Removable Disk Failed Modifications
* Windows : Removable Disk Failed Reads
* Windows : Removable Disk Modifications
* Windows : Removable Disk Reads
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : UnSuccessful Post Authentication
* Windows : UnSuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon
* Windows : Windows Individual User Action
* Windows : Wireless Network Authentications
* Windows : Wireless Network Connected
* Windows : Wireless Network Disconnected



---
title: FISMA
geekdocHidden: true
slug: fisma
---

In \<FISMA> there are 10 report templates.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/fisma.png)

&nbsp;

Access Control (AC)
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logons
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : User Logoff
* Windows : User Logon

Access Control (AC)
* Successful/Unsuccessful User Logons/Logoffs

Audit and Accountability (AU)
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes

Audit and Accountability (AU) – Object Access

Certification, Accreditation, and Security Assessments (CA)
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped

Configuration Management (CM)
* Windows : Software installed

Contingency Planning (CP)
* Windows : Failed Windows backup
* Windows : Failed Windows restores
* Windows : Successful Windows restores
* Windows  Successful Windows backup

Identification and Authentication (IA)
* Windows : Windows individual User Action

Information System Monitoring(SI-4)
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected



---
title: CYBER ESSENTIALS
geekdocHidden: true
slug: cyberessentials
---

In \<CYBER ESSENTIALS> there are 5 report templates.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/cyberessentials.png)

&nbsp;

Boundary firewall and internet gateways:
* Windows : Firewall Flood Attack
* Windows : Firewall Internet Protocol half-scan attack
* Windows : Firewall Ping of Death Attack
* Windows : Firewall SYN Attack
* Windows : Firewall Spoof Attack

Malware Protection
* Windows : Defender Malware Detection
* Windows : Defender Real Time Protection Detection
* Windows : DOS Attacks
* Windows : Downgrade Attacks
* Windows : Event Logging Service Shutdown
* Windows : Event Logs Cleared
* Windows : Exe or DLL File Allowed to Run
* Windows : Exe or DLL File Not Allowed to Run
* Windows : Exe or DLL Files Not Allowed to Run due to Enforced rules
* Windows : IP Conflicts
* Windows : MSI Script File Allowed to Run
* Windows : MSI Script Files Not Allowed to Run due to Enforced rules
* Windows : Removeable Disk Creates
* Windows : Removeable Disk Deletes
* Windows : Removeable Disk Failed Creates
* Windows : Removeable Disk Failed Deletes
* Windows : Removeable Disk Failed Modifications
* Windows : Removeable Disk Failed Reads
* Windows : Removeable Disk Modifications
* Windows : Removeable Disk Reads
* Windows : Replay Attack
* Windows : Security Logs Cleared
* Windows : Software Installed
* Windows : Software Restricted to Access Program
* Windows : Terminal Server Attacks
* Windows : Threat Detections by Mcafee
* Windows : Threats Detection by Microsoft Anti-malware
* Windows : Threats Detection by Norton AntiVirus
* Windows : Threats Detection by Sophos Anti-Virus
* Windows : Threats Detections by ESET Endpoint Antivirus
* Windows : User Account Locked Out Error

Patch Management:
Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Failed hotpatching
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Install
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped
* Windows : Software Install
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Windows Startup and Windows Shutdown

Secure Configuration:
* Windows : Audit Policy Changed
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : UnSuccessful Post Authentication
* Windows : UnSuccessful Pre Authentication
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : User Right Assigned
* Windows : User Right Removed
* Windows : Windows Firewall Group Policy Changes
* Windows : Windows Firewall Rule Added
* Windows : Windows Firewall Rule Deleted
* Windows : Windows Firewall Rule Modified
* Windows : Windows Firewall Setting Changed
* Windows : Windows Firewall Setting Restored
* Windows : Windows Individual User Action

User Access Control:
* Windows : Audit Policy Changed
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : trusted Domain Modified
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Rights Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action


---
title: NRC
geekdocHidden: true
slug: nrc
---

In \<NRC> there are 18 report templates.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/nrc.png)

&nbsp;

ACT B.1.11
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : UnSuccessful Post Authentication
* Windows : UnSuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon


ACT B.1.15
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

ACT B.1.17
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : Software Installed
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Windows Startup and Windows Shutdown
* Windows : Wireless Network Authentications
* Windows : Wireless Network Connected
* Windows : Wireless Network Disconnected

ACT B.1.19
* Windows : Removable Disk Creates
* Windows : Removable Disk Deletes
* Windows : Removable Disk Failed Creates
* Windows : Removable Disk Failed Deletes
* Windows : Removable Disk Failed Modifications
* Windows : Removable Disk Failed Reads
* Windows : Removable Disk Modifications
* Windows : Removable Disk Reads

ACT B.1.2
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified

ACT B.1.22
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Windows Individual User Action

ACT B.1.3
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

ACT B.1.5
* Windows : Audit Policy Changed
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

ACT B.1.6
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Windows Individual User Action

ACT B.1.7
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

ACT B.2.6
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Windows Individual User Action

ACT B.3.11
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

ACT C.11.4
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

ACT C.11.6
* Windows : Audit Policy Changed
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : User Right Assigned
* Windows : User Rights Removed

ACT C.2.2
* Windows : Audit Policy Changed
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

ACT C.3.4
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : Software Installed
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Windows Startup and Windows Shutdown

ACT C.3.7
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes

ACT C.4.3
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon



---
title: NIST
geekdocHidden: true
slug: nist
---

In \<NIST> there are 2 report templates. 

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/nist.png)

&nbsp;

Account Logon

Data Security (PR.DS)
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Removable Disk Creates
* Windows : Removable Disk Deletes
* Windows : Removable Disk Failed Creates
* Windows : Removable Disk Failed Deletes
* Windows : Removable Disk Failed Modifications
* Windows : Removable Disk Failed Reads
* Windows : Removable Disk Modifications
* Windows : Removable Disk Reads
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon
* Windows : Windows Individual User Action
* Windows : Wireless Network Authentications
* Windows : Wireless Network Connected
* Windows : Wireless Network Disconnected
* Object Access

Risk Assessment (ID.RA)
* Windows : Threat Detections by Mcafee
* Windows : Threats Detection by Microsoft Antimalware
* Windows : Threats Detection by Norton AntiVirus
* Windows : Threats Detection by Sophos Anti-Virus
* Windows : Threats Detections by ESET Endpoint Antivirus



---
title: COCO
geekdocHidden: true
slug: coco
---

In \<COCO> there are 5 report templates.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/coco.png)

&nbsp;

1.A. Vulnerrability management
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Failed hotpatching
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Install
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped
* Windows : Software Install
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Windows Startup and Windows Shutdown

1.B. Secure Configuration
* Windows : AD Backup Error
* Windows : Application Errors
* Windows : Application Hanged
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Failed hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : New application installations
* Windows : Removed Applications
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped
* Windows : Software Installed
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Updated Applications
* Windows : Windows Startup and Windows Shutdown

1.C. Physical Security
* Windows : Windows Firewall Group Policy Changes
* Windows : Windows Firewall Rule Added
* Windows : Windows Firewall Rule Deleted
* Windows : Windows Firewall Rule Modified
* Windows : Windows Firewall Settings Changed
* Windows : Windows Firewall Setting Restored

1.D. Protective monitoring and intrusion detection
* Windows : Threat Detections by Mcafee
* Windows : Threats Detection by Microsoft Antimalware
* Windows : Threats Detection by Norton AntiVirus
* Windows : Threats Detection by Sophos Anti-Virus
* Windows : Threats Detections by ESET Endpoint Antivirus

1.E. Boundary Protection and Interfaces
* Windows : Defender Malware Detection
* Windows : Defender Real Time Protection Detection
* Windows : DoS Attacks
* Windows : Downgrade Attacks
* Windows : Event Logging Service Shutdown
* Windows : Event Logs Cleared
* Windows : IP Conflicts
* Windows : Replay Attack
* Windows : Security Logs Cleared
* Windows : Terminal Server Attacks
* Windows : User Account Locked Out Error


---
title: CCPA
geekdocHidden: true
slug: ccpa
---

In \<CCPA> there is 1 report template.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/ccpa.png)

&nbsp;

Section 1798.150(a)
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changers
* Windows : Removable Disk Creates
* Windows : Removable Disk Deletes
* Windows : Removable Disk Failed Creates
* Windows : Removable Disk Failed Deletes
* Windows : Removable Disk Failed Modifications
* Windows : Removable Disk Failed Reads
* Windows : Removable Disk Modifications
* Windows : Removable Disk Reads


---
title: ISLP
geekdocHidden: true
slug: islp
---

In \<ISLP> there are 8 report templates.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/islp.png)

&nbsp;

ARTICLE 12
* Windows : Failed Windows backup
* Windows : Filed Windows restores
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Successful Windows restores
* Windows : Successful windows backup

ARTICLE 13
* Windows : Failed Windows backup
* Windows : Filed Windows restores
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Successful Windows restores
* Windows : Successful windows backup

ARTICLE 16.3
* Windows : Audit Policy Changed
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

ARTICLE 18.1
* Windows : Audit Policy Changed
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

ARTICLE 19.3
* Windows : Audit Policy Changed
* Windows : Failed Windows backup
* Windows : Filed Windows restores
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Successful Windows restores
* Windows : Successful windows backup
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

ARTICLE 20.5
* Windows : Failed Windows backup
* Windows : Filed Windows restores
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Successful Windows restores
* Windows : Successful windows backup



ARTICLE 30.4
* Windows : Failed Windows backup
* Windows : Filed Windows restores
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Successful Windows restores
* Windows : Successful windows backup

ARTICLE 30.6
* Windows : Audit Policy Changed
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Failed Windows backup
* Windows : Filed Windows restores
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Successful Windows restores
* Windows : Successful windows backup
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : UnSuccessful Post Authentication
* Windows : UnSuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action



---
title: PCI-DSS
geekdocHidden: true
slug: pcidss
---

In \<PCI-DSS> there are 6 report templates.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/pci.png)

&nbsp;

PCI-DSS requirements 10.1
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Registry Created
* Windows : Registry Deleted
* Windows : Registry Value Modified
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : User Logoff
* Windows : User Logon
* Windows : Windows Individual User Action


PCI-DSS requirements 10.2.1
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : User Logoff
* Windows : User Logon

PCI-DSS requirements 10.2.2
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : User Logoff
* Windows : User Logon
* Windows : Windows Individual User Action

PCI-DSS requirement 10.2.3
* Windows : Audit Policy Changed
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Registry Created
* Windows : Registry Deleted
* Windows : Registry Value Modified
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Logoff
* Windows : User Logon
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Firewall Group Policy Changes
* Windows : Windows Firewall Rule Added
* Windows : Windows Firewall Rule Deleted
* Windows : Windows Firewall Rule Modified
* Windows : Windows Firewall Setting Changed
* Windows : Windows Firewall Setting Restored

PCI-DSS requirements 10.2.6
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : Software Installed
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Windows Startup and Windows Shutdown

PCI-DSS requirements 10.2.7
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes




---
title: NERC
geekdocHidden: true
slug: nerc
---

In \<NERC> there are 10 report templates.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/nerc.png)

&nbsp;

CIP 005-6 R1.3
* Windows : Audit Policy Changed
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Right Assigned
* Windows : User Rights Removed

CIP 007-6 R1.1
* Windows : Windows Firewall Group Policy Changes
* Windows : Windows Firewall Rule Added
* Windows : Windows Firewall Rule Deleted
* Windows : Windows Firewall Rule Modified
* Windows : Windows Firewall Setting Changed
* Windows : Windows Firewall Setting Restored

CIP 007-6 R3.1
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Exe or DLL File Allowed to Run
* Windows : Exe or DLL File Not Allowed to Run
* Windows : Exe or DLL Files Not Allowed to Run due to Enforced rules
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : MSI Script File Allowed to Run
* Windows : MSI Script Files Not Allowed to Run due to Enforced rules
* Windows : New Service Installed
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped
* Windows : Software Installed
* Windows : Software Restricted to Access Program
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Threat Detections by Mcafee
* Windows : Threats Detection by Microsoft Antimalware
* Windows : Threats Detection by Norton AntiVirus
* Windows : Threats Detection by Sophos Anti-Virus
* Windows : Threats Detections by ESET Endpoint Antivirus
* Windows : Windows Startup and Windows Shutdown

CIP 007-6 R4.1
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

CIP 007-6 R4.2
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

CIP 007-6 R5.3
* Windows : Audit Policy Changed
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

CIP 007-6 R5.7
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

CIP 009-6 R1.3
* Windows : Windows Firewall Group Policy Changes
* Windows : Windows Firewall Rule Added
* Windows : Windows Firewall Rule Deleted
* Windows : Windows Firewall Rule Modified
* Windows : Windows Firewall Setting Changed
* Windows : Windows Firewall Setting Restored
* Windows : Windows Individual User Action

CIP 009-6 R1.4
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Failed Windows backup
* Windows : Filed Windows restores
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped
* Windows : Software Installed
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Successful Windows restores
* Windows : Successful windows backup
* Windows : Windows Startup and Windows Shutdown

CIP 010-2 R1.1
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Exe or DLL File Allowed to Run
* Windows : Exe or DLL File Not Allowed to Run
* Windows : Exe or DLL Files Not Allowed to Run due to Enforced rules
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : MSI Script File Allowed to Run
* Windows : MSI Script Files Not Allowed to Run due to Enforced rules
* Windows : New Service Installed
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped
* Windows : Software Installed
* Windows : Software Restricted to Access Program
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Windows Startup and Windows Shutdown



---
title: GDPR
geekdocHidden: true
slug: gdpr
---

In \<GDPR> there are 4 report templates.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/gdpr.png)

&nbsp;

GDPR ARTICLE 32 (1B)
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified

GDPR ARTICLE 32 (1D)
* Windows : File Created
* Windows : File Deleted
* Windows : File modified
* Windows : File Permission Changes

GDPR ARTICLE 5 (1B)
* Windows : Audit Policy Changed
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authenticaation
* Windows : User Logoff
* Windows : User Logon
* Windows : User Rights Assigned
* Windows : User Right Removed
* Windows : Windows individual User Action

GDPR ARTICLE 5 (1F)
* Windows : Audit Policy Changed
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon
* Windows : User Rights Assigned
* Windows : User Right Removed
* Windows : Windows individual User Action



---
title: Compliance
geekdocHidden: true
slug: compliance

---

Click on \<Compliance> to access the compliance report.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/compliance.png)

&nbsp;

Compliance report templates are prepared for use in complying with industry standards and IT security standards. 


List of compliance reports provided:

* <a href="/cloud_vista/loganalytics/reports/compliance/ccpa">CCPA - California Consumer Privacy Act</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/coco">COCO - Code of Connection</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/cyberessentials">CYBER ESSENTIALS</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/ferpa">FERPA - Family Educational Rights and Privacy Act</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/fisma">FISMA - Federal Information Security Management Act</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/gdpr">GDPR - General Data Protection Regulation</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/glba">GLBA – Gramm-Leach-Bliley Act</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/gpg">GPG – Good Practice Guide</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/hipaa">HIPAA – Health Insurance Portability and Accountability Act</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/islp">ISLP – Information Security Level Protection</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/iso27002013">ISO 2700 2013 – Information Security Management System</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/nerc">NERC – North American Electric Reliability</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/nist">NIST – National Institute of Standards and Technology</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/nrc">NRC – US Nuclear Regulatory Commission</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/pcidss">PCI-DSS – Payment Card Industry – Data Security Standard</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/pdpa">PDPA – Personal Data Protection Act</a>
* <a href="/cloud_vista/loganalytics/reports/compliance/sox">SOX – Sarbanes-Oxley Act</a>

---
title: To download report
geekdocHidden: true
slug: downloadreport
---

<strong>Download Excel</strong> – Download report to local computer in Excel file.

<strong>Download PDF</strong> – Download report to local computer in PDF file.

<strong>Download CSV</strong> – Download report to local compute in SCV file


---
title: To add a new report
geekdocHidden: true
slug: addreport
---

<strong>Click <+Add new report>.</strong>

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/Reports_AddAdHoc.PNG)

&nbsp;

<strong>Report</strong> title – Enter report title.

<strong>Category</strong> – Enter report category.

<strong>Description</strong> – Enter description of report.

<strong>Search expression</strong> – Enter search expression.

<strong>Visibility</strong> – Select who can see this report (Owner/All) 

<strong>Save</strong> – Save report
---
title: To edit report
geekdocHidden: true
slug: editreport
---

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/adhoceditreport.png)

&nbsp;

<strong>Report title</strong> – Enter report title.

<strong>Category</strong> – Enter report category.

<strong>Description</strong> – Enter description of report.

<strong>Search expression</strong> – Enter search expression.

<strong>Visibility</strong> – Select who can see this report (Owner/All) 

<strong>Delete report</strong> – Delete report

<strong>Save</strong> – Save report
---
title: To create auto delivery report setting
geekdocHidden: true
slug: autodelivery
---

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/adhocreportdelivery.png)

&nbsp;

<strong>Mail Subject</strong> – enter mail subject.

<strong>Mail Body</strong> – Enter mail body.

<strong>Target Address (s)</strong> – Enter email address.

<strong>Format</strong> – Select report file type. (Excel/PDF)

<strong>Data time range</strong> – Enter time range (Day(s)/Month(s)/Minute(s))

<strong>Delivery schedule</strong> – Select delivery schedule (Monthly/Weekly/Daily/Hourly)

<strong>Day of month</strong> – Enter day of month

<strong>Weekday</strong> – Enter weekday number

<strong>Hour of day</strong> – Enter number of hour

<strong>Save</strong> – Save report
---
title: Ad Hoc
geekdocHidden: true
slug: adhoc

---

Click on \<AdHoc> to access the AdHoc reports.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/adhoc.png)

&nbsp;

By \<Default> AdHoc will contain report template according to the following topics.
* Windows logon failed
* Authentications failures
* Network Conversations
* Windows Account Changes

Click on each report to create the report. The report will show in the report area.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/Reports_AdHoc.PNG)

&nbsp;

### AdHoc report sub menu

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/adhocsubmenu.png)

&nbsp;


<strong>+ Add new report</strong> – <a href="/cloud_vista/loganalytics/reports/adhoc/addreport">To add a new report</a>

<img src="/cloud_vista/loganalytics/images/{{% imagehome %}}/timeicon.png" width="50px"> - Select time range of report.

<strong>Auto delivery</strong> – <a href="/cloud_vista/loganalytics/reports/adhoc/autodelivery">To create auto delivery report setting</a>

<strong>Download</strong> – <a href="/cloud_vista/loganalytics/reports/adhoc/downloadreport">To download report</a>

<strong>Edit</strong> – <a href="/cloud_vista/loganalytics/reports/adhoc/editreport">To edit report</a>



---
title: Reports
geekdocHidden: true
slug: reports

---

To access the SIEM Reports function, click on the \<SIEM> icon at the Left Navigation Bar then click on \<Reports> at the Top Navigation Bar.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/reports.png)

&nbsp;

There are 4 sub-menus in the Reports function:

* <a href="/cloud_vista/loganalytics/reports/common">Common</a>
* <a href="/cloud_vista/loganalytics/reports/applications">Applications</a>
* <a href="/cloud_vista/loganalytics/reports/compliance">Compliance</a>
* <a href="/cloud_vista/loganalytics/reports/adhoc">Ad Hoc</a>


---
title: Applications
geekdocHidden: true
slug: applications
---

Click on \<Applications> to access the applications report.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/Reports_Application.PNG)

&nbsp;

Application will contain the report templates according to the following topics:
* DHCP Windows
* Printer Windows
* Terminal Windows

In \<DHCP Windows> there are 23 report templates for Windows ready to use.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/Reports_ApplicationDHCP.PNG)

&nbsp;

In \<Printer Windows> there are 11 report templates ready to use.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/Reports_ApplicationPrinter.PNG)

&nbsp;

In \<Terminal Windows> there are 15 report templates ready to use.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/Reports_ApplicationTerminal.PNG)
---
title: SIEM
weight: 4

---

* <a href="/modules/siem/security_analytics">Security Analytics</a>
* <a href="/modules/siem/log_analytics">Logs Analytics</a>
* <a href="/modules/siem/reports">Reports</a>
* <a href="/modules/siem/watcher">Watcher</a>

---
title: Common
geekdocHidden: true
slug: common
---

Click on \<Common> to access the report. Common will contain report template of Windows. 

There are 282 report templates for Windows ready to use. 

![Screenshot](/modules/securityanalytics/images/{{% imagehome %}}/common.png)

&nbsp;

Click on the desired report format. The system will generate a report. As an example of the report as shown in the figure below, chosen to generate a \<AD Backup Error> report.

![Screenshot](/modules/securityanalytics/images/{{% imagehome %}}/common2.png)

&nbsp;

The information shown in the report includes:

<strong>Report Name</strong> – Show report name.

<strong>Device Type</strong> – Show description of device type.

<strong>Search criteria</strong> – Expression for search criteria.

<strong>Entries numbers</strong> – Number of entries.

### Report Submenu:

![Screenshot](/modules/securityanalytics/images/{{% imagehome %}}/common3.png)

&nbsp;

<img src="/modules/securityanalytics/images/{{% imagehome %}}/timeicon.png" width="50px"> - Select time range of report

<strong>Save to local</strong> - Save report to local computer and report is HTML format file.

<strong>Print</strong> – Print report.

<strong>Refresh</strong> – Refresh report.

<strong>Close</strong> - Close report page and back to previous page


---
title: GPG
geekdocHidden: true
slug: gpg
---

In \<GPG> there are 5 report templates.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/gpg.png)

&nbsp;

Recording Relating to Network Connections (PMC Rule 6)
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logon
* Windows : User Logoff
* Windows : User Logon

Recording on Data Backup status (PMC Rule 8) 
* Windows : Failed Windows Backup
* Windows : Failed Windows Restores
* Windows : Successful Windows restore
* Windows : Successful Windows backup

Recording on Internet Workstation, Server or Device Status (PMC Rule 4)
* Windows : Registry Created
* Windows : Registry Deleted
* Windows : Registry Value Modified

Reporting on The Status of The Audit System (PMC Rule 10)
* Windows : Defender Malware Detection
* Windows : Defender Real Time Protection Detection
* Windows : DoS Attacks
* Windows : Downgrade Attacks
* Windows : Event Loggins Service Shutdown
* Windows : Event Logs Cleared
* Windows : IP Conficts
* Windows : Replay Attacks
* Windows : Security Logs Cleared
* Windows : Terminal Server Attacks
* Windows : User Account Locked Out Error

Suspicious Internal Networks Activity (PMC Rule 5)
* Windows : Audit Policy Changed
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Right Assigned
* Windows : User Rights Removed



---
title: SOX
geekdocHidden: true
slug: sox
---

In \<SOX> there are 7 report templates.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/sox.png)

&nbsp;

SEC 302(a)(4)(A)
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : Process Accessed
* Windows : Process Created
* Windows : Process Duplicated
* Windows : Process Terminated
* Windows : Software Install
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Windows Startup and Windows Shutdown

SEC 302(a)(4)(b)
* Windows : Audit Policy Changed
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Right Assigned
* Windows : User Rights Removed

SEC 302(a)(4)(C)
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : User Logoff
* Windows : User Logon

SEC 302(a)(4)(D)
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : UnSuccessful Post Authentication
* Windows : UnSuccessful Pre Authentication

SEC 302(a)(5)(A)
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes

SEC 302(a)(5)(B)
* Windows : Windows Individual User Action

SEC 302(a)(6)
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified


---
title: GLBA
geekdocHidden: true
slug: glba
---

In \<GLBA> there are 2 report templates.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/glba.png)

&nbsp;

Section 501B (1)
* Windows : AD Backup Eror
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : Software installed
* Windows : Software Uninstalled
* Windows : Software Update
* Windows :: Windows Startup and Windows Shutdown


Section 501B (2) & (3)
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : User Logoff
* Windows : User Logo



---
title: ISO 2700 2013
geekdocHidden: true
slug: iso27002013
---

In \<ISO 27001 2013> there are 6 report templates.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/iso.png)

&nbsp;

Control A 12.4.1
* Windows : Audit Policy Changed
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

Control A 12.4.2
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Audit Policy Changed
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : New Service Installed
* Windows : Software Installed
* Windows : Software uninstalled
* Windows : Software updated
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Startup and Windows Shutdown

Control A.12.4.3
* Windows : Audit Policy Changed
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Group Created
* Windows : Group Deleted
* indows : Group Modified
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : User Logoff
* Windows : User Logon
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

Control A 9.2.1
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : Windows Individual User Action

Control A 9.2.5
* Windows : Audit Policy Changed
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Right Assigned
* Windows : User Rights Removed

Control A 9.4.2
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : Windows Individual User Action



---
title: HIPAA
geekdocHidden: true
slug: hipaa
---

In \<HIPAA> there are 6 report templates. 

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/hipaa.png)

&nbsp;

164.308(a)(1)(ii)(D)
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes

164.308(a)(3)(ii)(A)
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication

164.308(a)(4)(ii)(B)
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication

164.308(a)(5)(ii)(C)
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows :  User Logoff
* Windows : User Logon

164.308(a)(6)(ii)
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : User Logoff
* Windows : User Logon

166.308(a)(7)(i)
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : Software Installed
* Windows : Software uninstalled
* Windows : Software updated
* Windows : Windows Startup and Windows Shutdown
* Account Logon
* Object Access


---
title: FERPA
geekdocHidden: true
slug: ferpa
---

In \<FERPA> there is 1 report template.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/ferpa.png)

&nbsp;

Section 99.31 (a)(1)(ii)
* Windows : File Created
* Windows : Files Deleted
* Windows : Files Modified
* Windows : File Permission Changes
* Windows : Removable Disk Creates
* Windows : Removable Disk Deletes
* Windows : Removable Disk Failed Creates
* Windows : Removable Disk Failed Deletes
* Windows : Removable Disk Failed Modifications
* Windows : Removable Disk Failed Reads
* Windows : Removable Disk Modifications
* Windows : Removable Disk Reads



---
title: PDPA
geekdocHidden: true
slug: pdpa
---

In \<PDPA> there are 2 report templates.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/pdpa.png)

&nbsp;

RULE VI Section 25
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Removable Disk Creates
* Windows : Removable Disk Deletes
* Windows : Removable Disk Failed Creates
* Windows : Removable Disk Failed Deletes
* Windows : Removable Disk Failed Modifications
* Windows : Removable Disk Failed Reads
* Windows : Removable Disk Modifications
* Windows : Removable Disk Reads
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon
* Windows : Windows Individual User Action
* Windows : Wireless Network Authentications
* Windows : Wireless Network Connected
* Windows : Wireless Network Disconnected

RULE VII Section 30
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission ChangesWindows : Network Logoffs
* Windows : Network Logon
* Windows : Removable Disk Creates
* Windows : Removable Disk Deletes
* Windows : Removable Disk Failed Creates
* Windows : Removable Disk Failed Deletes
* Windows : Removable Disk Failed Modifications
* Windows : Removable Disk Failed Reads
* Windows : Removable Disk Modifications
* Windows : Removable Disk Reads
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : UnSuccessful Post Authentication
* Windows : UnSuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon
* Windows : Windows Individual User Action
* Windows : Wireless Network Authentications
* Windows : Wireless Network Connected
* Windows : Wireless Network Disconnected



---
title: FISMA
geekdocHidden: true
slug: fisma
---

In \<FISMA> there are 10 report templates.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/fisma.png)

&nbsp;

Access Control (AC)
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logons
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : User Logoff
* Windows : User Logon

Access Control (AC)
* Successful/Unsuccessful User Logons/Logoffs

Audit and Accountability (AU)
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes

Audit and Accountability (AU) – Object Access

Certification, Accreditation, and Security Assessments (CA)
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped

Configuration Management (CM)
* Windows : Software installed

Contingency Planning (CP)
* Windows : Failed Windows backup
* Windows : Failed Windows restores
* Windows : Successful Windows restores
* Windows  Successful Windows backup

Identification and Authentication (IA)
* Windows : Windows individual User Action

Information System Monitoring(SI-4)
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected



---
title: CYBER ESSENTIALS
geekdocHidden: true
slug: cyberessentials
---

In \<CYBER ESSENTIALS> there are 5 report templates.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/cyberessentials.png)

&nbsp;

Boundary firewall and internet gateways:
* Windows : Firewall Flood Attack
* Windows : Firewall Internet Protocol half-scan attack
* Windows : Firewall Ping of Death Attack
* Windows : Firewall SYN Attack
* Windows : Firewall Spoof Attack

Malware Protection
* Windows : Defender Malware Detection
* Windows : Defender Real Time Protection Detection
* Windows : DOS Attacks
* Windows : Downgrade Attacks
* Windows : Event Logging Service Shutdown
* Windows : Event Logs Cleared
* Windows : Exe or DLL File Allowed to Run
* Windows : Exe or DLL File Not Allowed to Run
* Windows : Exe or DLL Files Not Allowed to Run due to Enforced rules
* Windows : IP Conflicts
* Windows : MSI Script File Allowed to Run
* Windows : MSI Script Files Not Allowed to Run due to Enforced rules
* Windows : Removeable Disk Creates
* Windows : Removeable Disk Deletes
* Windows : Removeable Disk Failed Creates
* Windows : Removeable Disk Failed Deletes
* Windows : Removeable Disk Failed Modifications
* Windows : Removeable Disk Failed Reads
* Windows : Removeable Disk Modifications
* Windows : Removeable Disk Reads
* Windows : Replay Attack
* Windows : Security Logs Cleared
* Windows : Software Installed
* Windows : Software Restricted to Access Program
* Windows : Terminal Server Attacks
* Windows : Threat Detections by Mcafee
* Windows : Threats Detection by Microsoft Anti-malware
* Windows : Threats Detection by Norton AntiVirus
* Windows : Threats Detection by Sophos Anti-Virus
* Windows : Threats Detections by ESET Endpoint Antivirus
* Windows : User Account Locked Out Error

Patch Management:
Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Failed hotpatching
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Install
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped
* Windows : Software Install
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Windows Startup and Windows Shutdown

Secure Configuration:
* Windows : Audit Policy Changed
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : UnSuccessful Post Authentication
* Windows : UnSuccessful Pre Authentication
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : User Right Assigned
* Windows : User Right Removed
* Windows : Windows Firewall Group Policy Changes
* Windows : Windows Firewall Rule Added
* Windows : Windows Firewall Rule Deleted
* Windows : Windows Firewall Rule Modified
* Windows : Windows Firewall Setting Changed
* Windows : Windows Firewall Setting Restored
* Windows : Windows Individual User Action

User Access Control:
* Windows : Audit Policy Changed
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : trusted Domain Modified
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Rights Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action


---
title: NRC
geekdocHidden: true
slug: nrc
---

In \<NRC> there are 18 report templates.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/nrc.png)

&nbsp;

ACT B.1.11
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : UnSuccessful Post Authentication
* Windows : UnSuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon


ACT B.1.15
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

ACT B.1.17
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : Software Installed
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Windows Startup and Windows Shutdown
* Windows : Wireless Network Authentications
* Windows : Wireless Network Connected
* Windows : Wireless Network Disconnected

ACT B.1.19
* Windows : Removable Disk Creates
* Windows : Removable Disk Deletes
* Windows : Removable Disk Failed Creates
* Windows : Removable Disk Failed Deletes
* Windows : Removable Disk Failed Modifications
* Windows : Removable Disk Failed Reads
* Windows : Removable Disk Modifications
* Windows : Removable Disk Reads

ACT B.1.2
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified

ACT B.1.22
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Windows Individual User Action

ACT B.1.3
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

ACT B.1.5
* Windows : Audit Policy Changed
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

ACT B.1.6
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Windows Individual User Action

ACT B.1.7
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

ACT B.2.6
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Windows Individual User Action

ACT B.3.11
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

ACT C.11.4
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

ACT C.11.6
* Windows : Audit Policy Changed
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : User Right Assigned
* Windows : User Rights Removed

ACT C.2.2
* Windows : Audit Policy Changed
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

ACT C.3.4
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : Software Installed
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Windows Startup and Windows Shutdown

ACT C.3.7
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes

ACT C.4.3
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon



---
title: NIST
geekdocHidden: true
slug: nist
---

In \<NIST> there are 2 report templates. 

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/nist.png)

&nbsp;

Account Logon

Data Security (PR.DS)
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Removable Disk Creates
* Windows : Removable Disk Deletes
* Windows : Removable Disk Failed Creates
* Windows : Removable Disk Failed Deletes
* Windows : Removable Disk Failed Modifications
* Windows : Removable Disk Failed Reads
* Windows : Removable Disk Modifications
* Windows : Removable Disk Reads
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon
* Windows : Windows Individual User Action
* Windows : Wireless Network Authentications
* Windows : Wireless Network Connected
* Windows : Wireless Network Disconnected
* Object Access

Risk Assessment (ID.RA)
* Windows : Threat Detections by Mcafee
* Windows : Threats Detection by Microsoft Antimalware
* Windows : Threats Detection by Norton AntiVirus
* Windows : Threats Detection by Sophos Anti-Virus
* Windows : Threats Detections by ESET Endpoint Antivirus



---
title: COCO
geekdocHidden: true
slug: coco
---

In \<COCO> there are 5 report templates.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/coco.png)

&nbsp;

1.A. Vulnerrability management
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Failed hotpatching
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Install
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped
* Windows : Software Install
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Windows Startup and Windows Shutdown

1.B. Secure Configuration
* Windows : AD Backup Error
* Windows : Application Errors
* Windows : Application Hanged
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Failed hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : New application installations
* Windows : Removed Applications
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped
* Windows : Software Installed
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Updated Applications
* Windows : Windows Startup and Windows Shutdown

1.C. Physical Security
* Windows : Windows Firewall Group Policy Changes
* Windows : Windows Firewall Rule Added
* Windows : Windows Firewall Rule Deleted
* Windows : Windows Firewall Rule Modified
* Windows : Windows Firewall Settings Changed
* Windows : Windows Firewall Setting Restored

1.D. Protective monitoring and intrusion detection
* Windows : Threat Detections by Mcafee
* Windows : Threats Detection by Microsoft Antimalware
* Windows : Threats Detection by Norton AntiVirus
* Windows : Threats Detection by Sophos Anti-Virus
* Windows : Threats Detections by ESET Endpoint Antivirus

1.E. Boundary Protection and Interfaces
* Windows : Defender Malware Detection
* Windows : Defender Real Time Protection Detection
* Windows : DoS Attacks
* Windows : Downgrade Attacks
* Windows : Event Logging Service Shutdown
* Windows : Event Logs Cleared
* Windows : IP Conflicts
* Windows : Replay Attack
* Windows : Security Logs Cleared
* Windows : Terminal Server Attacks
* Windows : User Account Locked Out Error


---
title: CCPA
geekdocHidden: true
slug: ccpa
---

In \<CCPA> there is 1 report template.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/ccpa.png)

&nbsp;

Section 1798.150(a)
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changers
* Windows : Removable Disk Creates
* Windows : Removable Disk Deletes
* Windows : Removable Disk Failed Creates
* Windows : Removable Disk Failed Deletes
* Windows : Removable Disk Failed Modifications
* Windows : Removable Disk Failed Reads
* Windows : Removable Disk Modifications
* Windows : Removable Disk Reads


---
title: ISLP
geekdocHidden: true
slug: islp
---

In \<ISLP> there are 8 report templates.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/islp.png)

&nbsp;

ARTICLE 12
* Windows : Failed Windows backup
* Windows : Filed Windows restores
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Successful Windows restores
* Windows : Successful windows backup

ARTICLE 13
* Windows : Failed Windows backup
* Windows : Filed Windows restores
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Successful Windows restores
* Windows : Successful windows backup

ARTICLE 16.3
* Windows : Audit Policy Changed
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

ARTICLE 18.1
* Windows : Audit Policy Changed
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

ARTICLE 19.3
* Windows : Audit Policy Changed
* Windows : Failed Windows backup
* Windows : Filed Windows restores
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Successful Windows restores
* Windows : Successful windows backup
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

ARTICLE 20.5
* Windows : Failed Windows backup
* Windows : Filed Windows restores
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Successful Windows restores
* Windows : Successful windows backup



ARTICLE 30.4
* Windows : Failed Windows backup
* Windows : Filed Windows restores
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Successful Windows restores
* Windows : Successful windows backup

ARTICLE 30.6
* Windows : Audit Policy Changed
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Failed Windows backup
* Windows : Filed Windows restores
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Successful Windows restores
* Windows : Successful windows backup
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : UnSuccessful Post Authentication
* Windows : UnSuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action



---
title: PCI-DSS
geekdocHidden: true
slug: pcidss
---

In \<PCI-DSS> there are 6 report templates.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/pci.png)

&nbsp;

PCI-DSS requirements 10.1
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Registry Created
* Windows : Registry Deleted
* Windows : Registry Value Modified
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : User Logoff
* Windows : User Logon
* Windows : Windows Individual User Action


PCI-DSS requirements 10.2.1
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : User Logoff
* Windows : User Logon

PCI-DSS requirements 10.2.2
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : User Logoff
* Windows : User Logon
* Windows : Windows Individual User Action

PCI-DSS requirement 10.2.3
* Windows : Audit Policy Changed
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Crated
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Registry Created
* Windows : Registry Deleted
* Windows : Registry Value Modified
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : User Logoff
* Windows : User Logon
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Firewall Group Policy Changes
* Windows : Windows Firewall Rule Added
* Windows : Windows Firewall Rule Deleted
* Windows : Windows Firewall Rule Modified
* Windows : Windows Firewall Setting Changed
* Windows : Windows Firewall Setting Restored

PCI-DSS requirements 10.2.6
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : Software Installed
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Windows Startup and Windows Shutdown

PCI-DSS requirements 10.2.7
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes




---
title: NERC
geekdocHidden: true
slug: nerc
---

In \<NERC> there are 10 report templates.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/nerc.png)

&nbsp;

CIP 005-6 R1.3
* Windows : Audit Policy Changed
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Right Assigned
* Windows : User Rights Removed

CIP 007-6 R1.1
* Windows : Windows Firewall Group Policy Changes
* Windows : Windows Firewall Rule Added
* Windows : Windows Firewall Rule Deleted
* Windows : Windows Firewall Rule Modified
* Windows : Windows Firewall Setting Changed
* Windows : Windows Firewall Setting Restored

CIP 007-6 R3.1
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Exe or DLL File Allowed to Run
* Windows : Exe or DLL File Not Allowed to Run
* Windows : Exe or DLL Files Not Allowed to Run due to Enforced rules
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : MSI Script File Allowed to Run
* Windows : MSI Script Files Not Allowed to Run due to Enforced rules
* Windows : New Service Installed
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped
* Windows : Software Installed
* Windows : Software Restricted to Access Program
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Threat Detections by Mcafee
* Windows : Threats Detection by Microsoft Antimalware
* Windows : Threats Detection by Norton AntiVirus
* Windows : Threats Detection by Sophos Anti-Virus
* Windows : Threats Detections by ESET Endpoint Antivirus
* Windows : Windows Startup and Windows Shutdown

CIP 007-6 R4.1
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

CIP 007-6 R4.2
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

CIP 007-6 R5.3
* Windows : Audit Policy Changed
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Right Assigned
* Windows : User Rights Removed
* Windows : Windows Individual User Action

CIP 007-6 R5.7
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Rconnected
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon

CIP 009-6 R1.3
* Windows : Windows Firewall Group Policy Changes
* Windows : Windows Firewall Rule Added
* Windows : Windows Firewall Rule Deleted
* Windows : Windows Firewall Rule Modified
* Windows : Windows Firewall Setting Changed
* Windows : Windows Firewall Setting Restored
* Windows : Windows Individual User Action

CIP 009-6 R1.4
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Failed Windows backup
* Windows : Filed Windows restores
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : New Service Installed
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped
* Windows : Software Installed
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Successful Windows restores
* Windows : Successful windows backup
* Windows : Windows Startup and Windows Shutdown

CIP 010-2 R1.1
* Windows : AD Backup Error
* Windows : Audit Logs Cleared
* Windows : Error in EventLog Service
* Windows : Event log automatic backup
* Windows : Exe or DLL File Allowed to Run
* Windows : Exe or DLL File Not Allowed to Run
* Windows : Exe or DLL Files Not Allowed to Run due to Enforced rules
* Windows : Falied hotpatcing
* Windows : Failed software installations
* Windows : Failed software installations due to privilege mismatches
* Windows : MSI Script File Allowed to Run
* Windows : MSI Script Files Not Allowed to Run due to Enforced rules
* Windows : New Service Installed
* Windows : Service Failed
* Windows : Service Started
* Windows : Service Stopped
* Windows : Software Installed
* Windows : Software Restricted to Access Program
* Windows : Software Uninstalled
* Windows : Software Updated
* Windows : Windows Startup and Windows Shutdown



---
title: GDPR
geekdocHidden: true
slug: gdpr
---

In \<GDPR> there are 4 report templates.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/gdpr.png)

&nbsp;

GDPR ARTICLE 32 (1B)
* Windows : Computer Account Created
* Windows : Computer Account Deleted
* Windows : Computer Account Modified
* Windows : Group Created
* Windows : Group Deleted
* Windows : Group Modified
* Windows : User Account Created
* Windows : User Account Deleted
* Windows : User Account Locked Outs
* Windows : User Account Modified

GDPR ARTICLE 32 (1D)
* Windows : File Created
* Windows : File Deleted
* Windows : File modified
* Windows : File Permission Changes

GDPR ARTICLE 5 (1B)
* Windows : Audit Policy Changed
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authenticaation
* Windows : User Logoff
* Windows : User Logon
* Windows : User Rights Assigned
* Windows : User Right Removed
* Windows : Windows individual User Action

GDPR ARTICLE 5 (1F)
* Windows : Audit Policy Changed
* Windows : Failed Network Logons
* Windows : Failed User Logons
* Windows : File Created
* Windows : File Deleted
* Windows : File Modified
* Windows : File Permission Changes
* Windows : Network Logoffs
* Windows : Network Logon
* Windows : Successful Post Authentication
* Windows : Successful Pre Authentication
* Windows : Terminal Server Disconnected
* Windows : Terminal Server Reconnected
* Windows : Trusted Domain Created
* Windows : Trusted Domain Deleted
* Windows : Trusted Domain Modified
* Windows : Unsuccessful Post Authentication
* Windows : Unsuccessful Pre Authentication
* Windows : User Logoff
* Windows : User Logon
* Windows : User Rights Assigned
* Windows : User Right Removed
* Windows : Windows individual User Action



---
title: Compliance
geekdocHidden: true
slug: compliance

---

Click on \<Compliance> to access the compliance report.

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/compliance.png)

&nbsp;

Compliance report templates are prepared for use in complying with industry standards and IT security standards. 


List of compliance reports provided:

* <a href="/cloud_vista/securityanalytics/reports/compliance/ccpa">CCPA - California Consumer Privacy Act</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/coco">COCO - Code of Connection</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/cyberessentials">CYBER ESSENTIALS</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/ferpa">FERPA - Family Educational Rights and Privacy Act</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/fisma">FISMA - Federal Information Security Management Act</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/gdpr">GDPR - General Data Protection Regulation</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/glba">GLBA – Gramm-Leach-Bliley Act</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/gpg">GPG – Good Practice Guide</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/hipaa">HIPAA – Health Insurance Portability and Accountability Act</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/islp">ISLP – Information Security Level Protection</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/iso27002013">ISO 2700 2013 – Information Security Management System</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/nerc">NERC – North American Electric Reliability</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/nist">NIST – National Institute of Standards and Technology</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/nrc">NRC – US Nuclear Regulatory Commission</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/pcidss">PCI-DSS – Payment Card Industry – Data Security Standard</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/pdpa">PDPA – Personal Data Protection Act</a>
* <a href="/cloud_vista/securityanalytics/reports/compliance/sox">SOX – Sarbanes-Oxley Act</a>

---
title: To download report
geekdocHidden: true
slug: downloadreport
---

<strong>Download Excel</strong> – Download report to local computer in Excel file.

<strong>Download PDF</strong> – Download report to local computer in PDF file.

<strong>Download CSV</strong> – Download report to local compute in SCV file


---
title: To add a new report
geekdocHidden: true
slug: addreport
---

<strong>Click <+Add new report>.</strong>

![Screenshot](/modules/securityanalytics/images/{{% imagehome %}}/Reports_AddAdHoc.PNG)

&nbsp;

<strong>Report</strong> title – Enter report title.

<strong>Category</strong> – Enter report category.

<strong>Description</strong> – Enter description of report.

<strong>Search expression</strong> – Enter search expression.

<strong>Visibility</strong> – Select who can see this report (Owner/All) 

<strong>Save</strong> – Save report
---
title: To edit report
geekdocHidden: true
slug: editreport
---

![Screenshot](/cloud_vista/securityanalytics/images/{{% imagehome %}}/adhoceditreport.png)

&nbsp;

<strong>Report title</strong> – Enter report title.

<strong>Category</strong> – Enter report category.

<strong>Description</strong> – Enter description of report.

<strong>Search expression</strong> – Enter search expression.

<strong>Visibility</strong> – Select who can see this report (Owner/All) 

<strong>Delete report</strong> – Delete report

<strong>Save</strong> – Save report
---
title: To create auto delivery report setting
geekdocHidden: true
slug: autodelivery
---

![Screenshot](/modules/securityanalytics/images/{{% imagehome %}}/adhocreportdelivery.png)

&nbsp;

<strong>Mail Subject</strong> – enter mail subject.

<strong>Mail Body</strong> – Enter mail body.

<strong>Target Address (s)</strong> – Enter email address.

<strong>Format</strong> – Select report file type. (Excel/PDF)

<strong>Data time range</strong> – Enter time range (Day(s)/Month(s)/Minute(s))

<strong>Delivery schedule</strong> – Select delivery schedule (Monthly/Weekly/Daily/Hourly)

<strong>Day of month</strong> – Enter day of month

<strong>Weekday</strong> – Enter weekday number

<strong>Hour of day</strong> – Enter number of hour

<strong>Save</strong> – Save report
---
title: Ad Hoc
geekdocHidden: true
slug: adhoc

---

Click on \<AdHoc> to access the AdHoc reports.

![Screenshot](/modules/securityanalytics/images/{{% imagehome %}}/adhoc.png)

&nbsp;

By \<Default> AdHoc will contain report template according to the following topics.
* Windows logon failed
* Authentications failures
* Network Conversations
* Windows Account Changes

Click on each report to create the report.  The report will show in the report area.

![Screenshot](/modules/securityanalytics/images/{{% imagehome %}}/Reports_AdHoc.PNG)

&nbsp;

### AdHoc report sub menu

![Screenshot](/modules/securityanalytics/images/{{% imagehome %}}/adhocsubmenu.png)

&nbsp;


<strong>+ Add new report</strong> – <a href="/modules/securityanalytics/reports/adhoc/addreport">To add a new report</a>

<img src="/modules/securityanalytics/images/{{% imagehome %}}/timeicon.png" width="50px"> - Select time range of report.

<strong>Auto delivery</strong> – <a href="/modules/securityanalytics/reports/adhoc/autodelivery">To create auto delivery report setting</a>

<strong>Download</strong> – <a href="/modules/securityanalytics/reports/adhoc/downloadreport">To download report</a>

<strong>Edit</strong> – <a href="/modules/securityanalytics/reports/adhoc/editreport">To edit report</a>



---
title: Reports
geekdocHidden: true
slug: reports

---

To access the SIEM Reports function, click on the \<SIEM> icon at the Left Navigation Bar then click on \<Reports> at the Top Navigation Bar.

![Screenshot](/modules/securityanalytics/images/{{% imagehome %}}/reports.png)

&nbsp;

There are 4 sub-menus in the Reports function:

* <a href="/modules/securityanalytics/reports/common">Common</a>
* <a href="/modules/securityanalytics/reports/applications">Applications</a>
* <a href="/modules/securityanalytics/reports/compliance">Compliance</a>
* <a href="/modules/securityanalytics/reports/adhoc">Ad Hoc</a>


---
title: Applications
geekdocHidden: true
slug: applications
---

Click on \<Applications> to access the applications report.

![Screenshot](/modules/securityanalytics/images/{{% imagehome %}}/Reports_Application.PNG)

&nbsp;

Application will contain the report templates according to the following topics:
* DHCP Windows
* Printer Windows
* Terminal Windows

In \<DHCP Windows> there are 23 report templates for Windows ready to use.

![Screenshot](/modules/securityanalytics/images/{{% imagehome %}}/Reports_ApplicationDHCP.PNG)

&nbsp;

In \<Printer Windows> there are 11 report templates ready to use.

![Screenshot](/modules/securityanalytics/images/{{% imagehome %}}/Reports_ApplicationPrinter.PNG)

&nbsp;

In \<Terminal Windows> there are 15 report templates ready to use.

![Screenshot](/modules/securityanalytics/images/{{% imagehome %}}/Reports_ApplicationTerminal.PNG)
---
title: Network Config
geekdocHidden: true
weight: 10
---


Network Configuration Management (cmdb) is a broad term for the organization and management of a computer network. All types of networks, including local area networks, wireless networks and virtual networks, need some element of maintenance, modification, repair, and general monitoring. cmdb involves collecting different information about hardware devices, software programs and other elements of the network in order to support administration and troubleshooting.

{{% company %}} cmdb is used primarily to backup and restore the configuration of the network and devices.
* Automatic backup of the network device configuration (pull config) and restoration of the configuration back to devices (push config), with auto scheduling capability. 
* Allows for bulk operations (not device by device) 
* Lets you compare configuration changes (eg, current versus history (yesterday, last week, etc.). 
* Supports devices from multiple vendors (eg, Cisco, H3C, Huawei, Juniper, etc.) 

To access cmdb, click on \<CMDB> at the Left Navigation Bar, then click on \<Network Config> at the Top Navigation Bar.

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/cmdb1.png)

&nbsp;

* <a href="/modules/cmdb/addingdevices">Adding Devices to cmdb</a>
* <a href="/modules/cmdb/deviceconfiguration">Device Configuration Management</a>
* <a href="/modules/cmdb/bulkoperations">Bulk Operations</a>
* <a href="/modules/cmdb/configurationtemplates">Configuration Templates</a>
* <a href="/modules/cmdb/schedulingbackup">Scheduling Configuration Backup</a>
* <a href="/modules/cmdb/changes">Changes</a>
---
title: Configuration Templates
geekdocHidden: true
slug: configurationtemplates
---

{{% company %}} cmdb let you create a configuration template that you can use to quickly configure newly added devices. At the top menu of \<Network Config>, click on \<Templates>.

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/LogicalMap_3.PNG)  

&nbsp;

### Adding a New Template
To create a new template, click on <+ Add> in the main \<Templates> screen.

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/LogicalMap_3.PNG)

&nbsp;

Fill in the required information, then click \<Save>. 

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/LogicalMap_3.PNG)

&nbsp;

Your newly created Config Template will be shown on the main \<Templates> screen.

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/LogicalMap_3.PNG)

&nbsp;

### Editing and Deleting Template
Click on < <img src="/modules/cmdb/images/{{% imagehome %}}/editicon2.png" width="25px"> > to edit or < <img src="/modules/cmdb/images/{{% imagehome %}}/deleteicon.png" width="25px"> > to delete a template while in the main \<Templates> screen.

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/LogicalMap_3.PNG)

---
title: Bulk Operations
geekdocHidden: true
slug: bulkoperations
---

This lets you perform operations such as to backup or restore the config on many devices at a time. Click on \<Devices> at the top menu of \<Network Config>, then select the devices for bulk operations.

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/bulk1.png)

&nbsp;

Click on \<Action> and a drop-down menu will appear for you to select the operation to perform.

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/bulk2.png)

&nbsp;

{{< bootstrap-table table_class="table table-dark table-striped table-bordered" >}}

| Action        | Operation     | 
| :----------: |:------------:| 
| Backup | To backup the config of the selected devices. |
| Restore | To restore the config of the selected devices. |
| Delete | To delete the selected devices from cmdb. |
| Change Device Property | To change the SSH credentials of the selected devices. |

{{< /bootstrap-table >}}

&nbsp;

After performing the operation, the results will be shown after a while. Click \<x Close> to close the screen and return to the main Devices screen.

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/bulk3.png)
---
title: Adding Devices to cmdb
geekdocHidden: true
slug: addingdevices
---

Click on \<Devices> at the top menu of \<Network Config>, then click on \<Discover> to find network devices.

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/adding1.png)

&nbsp;

Fill in the required details to discover the devices, then click \<Discover>.

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/adding2.png)

&nbsp;

After a while, network devices found will be shown. Select the devices to add to cmdb, then click on <+ Add selected devices>.

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/adding3.png)
---
title: Device Configuration Management
geekdocHidden: true
slug: deviceconfiguration
---

Click on \<Devices> at the top menu of \<Network Config>, then click on the name of the device whose configuration you want to manage. 

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/configuration1.png)

&nbsp;

You will see information about the device and its current and past configurations. 

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/configuration2.png)

&nbsp;

Actions you can perform by clicking on the appropriate button / icon.

{{< bootstrap-table table_class="table table-dark table-striped table-bordered" >}}

| Button        | Actions     | 
| :----------: |:------------:| 
|  <img src="/modules/cmdb/images/{{% imagehome %}}/pushicon.png" width="100px"> | To push the selected config back to device.|
|  <img src="/modules/cmdb/images/{{% imagehome %}}/pullicon.png" width="120px"> | To pull the latest config from the device.|
|  <img src="/modules/cmdb/images/{{% imagehome %}}/editicon.png" width="60px"> | To edit the SSH credentials (User/Password) of the device.  |
|  <img src="/modules/cmdb/images/{{% imagehome %}}/autoupdateicon.png" width="110px"> | To automatically update information of the device.|
|  <img src="/modules/cmdb/images/{{% imagehome %}}/compareicon.png" width="30px"> | To compare the differences in the config.|
|  <img src="/modules/cmdb/images/{{% imagehome %}}/viewicon.png" width="30px"> | To view the config. |
|  <img src="/modules/cmdb/images/{{% imagehome %}}/deleteicon.png" width="30px"> | To delete the config from the backup list.|
|  <img src="/modules/cmdb/images/{{% imagehome %}}/downloadicon.png" width="30px"> | To download the config to a text file.|

{{< /bootstrap-table >}}---
title: Scheduling Configuration Backup
geekdocHidden: true
slug: schedulingbackup
---

This lets you schedule the backup of your Network Configuration. Click on \<Schedules> at the top menu of \<Network Config>. 

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/LogicalMap_3.PNG)
![screenshot](/content/modules/cmdb/images/netgain/LogicalMap_3.PNG)
&nbsp;

### Adding a Schedule
To create a new schedule, click on <+ Create> in the main \<Schedules> screen.

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/LogicalMap_3.PNG)

&nbsp;

You can schedule the config backup by Device, Group or MO Group. Complete the schedule details and select the devices or groups the scheduled backup will apply to, then click \<Save>.

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/LogicalMap_3.PNG)

&nbsp;

{{< bootstrap-table table_class="table table-dark table-striped table-bordered" >}}

| Action        | Operation     | 
| :----------: |:------------:| 
| Name | Name of this scheduled backup job. |
| Start Date | Date and Time to start backup. |
| End Time | End time to process backup. |
| Interval | Frequency of this backup job. |

{{< /bootstrap-table >}}

&nbsp;

After saving a new schedule, your new schedule will be shown on the main \<Schedules> screen. By default, all new schedules are disabled. Click on < <img src="/modules/cmdb/images/{{% imagehome %}}/delete.png" width="30px"> > to change to < <img src="/modules/cmdb/images/{{% imagehome %}}/delete.png" width="30px"> > and enable the schedule.

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/LogicalMap_3.PNG)

&nbsp;

### Editing and Deleting a Schedule
Click on < <img src="/modules/cmdb/images/{{% imagehome %}}/editicon2.png" width="25px"> > to edit or < <img src="/modules/cmdb/images/{{% imagehome %}}/deleteicon.png" width="25px"> > to delete a schedule while in the main \<Schedules> screen.

![Screenshot](/modules/cmdb/images/{{% imagehome %}}/LogicalMap_3.PNG)

---
title: CMDB
weight: 8
---

* <a href="/modules/cmdb/network_config">Network Config</a>
---
title: Modules
weight: 13
---


---
title: Home
---

{{% welcome %}}

You will find all the comprehensive information on {{% company %}} products and services, as well as detailed technical information and tips to get your {{% company %}} software up and running smoothly.

<div class="row" style="display: grid; overflow: auto;">
<div class="column" style="display: flex;">

<button name="button" style="background-color: #FFFFFF; width: 150px; height: 130px; border-radius: 12px; border: 2px solid #0ABAB5;" onclick="location.href='/overview/architecture';"><strong>Solution <br>Architecture</strong><br><br><span style="color: #0ABAB5;">Learn More ></span>
</button> 

&nbsp; &nbsp; &nbsp;

<button name="button" style="background-color: #FFFFFF; width: 150px; height: 130px; border-radius: 12px; border: 2px solid #0ABAB5;" onclick="location.href='/overview/emedge/installation';"><strong>Installing<br> emedge</strong><br><br><span style="color: #0ABAB5;">View Guide ></span>
</button> 

&nbsp; &nbsp; &nbsp;

<button name="button" style="background-color: #FFFFFF; width: 150px; height: 130px; border-radius: 12px; border: 2px solid #0ABAB5;" onclick="location.href='/cloud_vista/overview';"><strong>Navigating the <br>Software</strong><br><br><span style="color: #0ABAB5;">View Guide ></span>
</button> 
</div>
</div>

<div class="row" style="display: grid; overflow: auto;">
<div class="column" style="display: flex;">

<button name="button" style="background-color: #FFFFFF; width: 150px; height: 130px; border-radius: 12px; border: 2px solid #0ABAB5;" onclick="location.href='/cloud_vista/inframonitoring';"><strong>Infrastructure <br>Monitoring</strong><br><br><span style="color: #0ABAB5;">View Guide ></span>
</button> 

&nbsp; &nbsp; &nbsp;

<button name="button" style="background-color: #FFFFFF; width: 150px; height: 130px; border-radius: 12px; border: 2px solid #0ABAB5;" onclick="location.href='/cloud_vista/loganalytics';"><strong>Log <br>Analytics</strong><br><br><span style="color: #0ABAB5;">View Guide ></span>
</button> 

&nbsp; &nbsp; &nbsp;

<button name="button" style="background-color: #FFFFFF; width: 150px; height: 130px; border-radius: 12px; border: 2px solid #0ABAB5;" onclick="location.href='/cloud_vista/securityanalytics';"><strong>Security <br>Analytics</strong><br><br><span style="color: #0ABAB5;">View Guide ></span>
</button> 

</div>
</div>

<div class="row" style="display: grid; overflow: auto;">
<div class="column" style="display: flex;">

<button name="button" style="background-color: #FFFFFF; width: 150px; height: 130px; border-radius: 12px; border: 2px solid #0ABAB5;" onclick="location.href='/cloud_vista/apm';"><strong>Application <br>Performance <br>Management</strong><br><br><span style="color: #0ABAB5;">View Guide ></span>
</button> 

&nbsp; &nbsp; &nbsp;

<button name="button" style="background-color: #FFFFFF; width: 150px; height: 130px; border-radius: 12px; border: 2px solid #0ABAB5;" onclick="location.href='/cloud_vista/netflow';"><strong>Network<br> Traffic<br> Analytics</strong><br><br><span style="color: #0ABAB5;">View Guide ></span>
</button> 

&nbsp; &nbsp; &nbsp;

<button name="button" style="background-color: #FFFFFF; width: 150px; height: 130px; border-radius: 12px; border: 2px solid #0ABAB5;" onclick="location.href='/cloud_vista/ncm';"><strong>Network<br> Configuration <br>Management</strong><br><br><span style="color: #0ABAB5;">View Guide ></span>
</button> 
</div>
</div>


## Quick Links
 <a href="https://www.{{% domain %}}" target="_blank">{{% company %}} Website</a>
 <br>
 <a href="https://www.portal.{{% domain %}}" target="_blank">{{% company %}} Portal</a>

## Feedback
We cherish what you have to say and value every feedback. Please reach out to us via email at support@{{% domain %}}.

<hr>
{{% copyright %}}
