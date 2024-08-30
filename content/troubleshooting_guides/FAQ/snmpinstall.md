---
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



















 
