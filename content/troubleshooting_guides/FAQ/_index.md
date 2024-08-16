---
title: Frequently Asked Questions
weight: 1
draft : true
---
Frequently Asked Questions

How to discover monitors through SNMPV3
Click on <Metrics>, <Discover>.
  ![FAQ1](/cloud_vista/FAQ/Images/netgain/FAQ1.png)


Select v3 Version under SNMP and Input the rest of the information.
![FAQ2](/cloud_vista/FAQ/Images/netgain/FAQ2.png)
Click on     to start discovering of devices.
![FAQ3](/cloud_vista/FAQ/Images/netgain/FAQ3.png)

After discovering, select the device you want to monitor.
  ![FAQ4](/cloud_vista/FAQ/Images/netgain/FAQ4.png)

Click     to add the selected device.
 ![FAQ5](/cloud_vista/FAQ/Images/netgain/FAQ5.png)


# How to upgrade NetGain Agent for Linux
Stop NetGain Agent service.
* systemctl stop netgain 
OR
*	cd installation_directory/netgain/bin/
*	./agent_stop.sh

# Backup netgain agent folder.
*	cd installation_directory (may vary depending on installation)
*	cp -r installation_directory/netgain ./netgain_v12.2.214_240627

Download netgain agent to preferred installation directory.

# Unzip/Untar new agent.
* cd installation_directory
* tar -xzvf NetGain-Agent-Nix-v12.2.337.tar.gz

# Configure agent.
* cd installation_directory/netgain/bin
*	./agent_setup.sh.
*	Follow the instructions prompted
*	NOTES: Before agent_setup, use Java path command: which java to know your java directory

# Start netgain agent.
* cd installation_directory/netgain/bin
* 	./agent_start.sh
*	check logs: tail -100f installation_directory/netgain/bin/nohup.out

Check GUI to confirm agent status.


# How to upgrade NetGain Agent in Windows
Stop NetGain Agent service.
 
 ![FAQ25](/cloud_vista/FAQ/Images/netgain/FAQ25.png)
*	Go to services.msc
*	Right-click on NetGain Agent
*	Stop the service

# Backup netgain agent folder.
*	cd installation_directory (may vary depending on installation)

Create a backup folder and copy paster the old NetGain Agent to the backup folder.

Download netgain agent under Tools > Agent to preferred installation directory.

Install the new Agent and override the existing Agent. 

# Configure agent.
 ![FAQ](/cloud_vista/FAQ/Images/netgain/FAQ.png)
*	Enter the destination IP for NetGain server

Start NetGain Agent in services.msc.

Check GUI to confirm agent status.


# How to add VMware monitors 
Click on <Metrics>, <Discover>. Discover your Vcenter or EXi Host. 
![FAQ6](/cloud_vista/FAQ/Images/netgain/FAQ6.png)

Click on     to start discovering of devices.
![FAQ3](/cloud_vista/FAQ/Images/netgain/FAQ3.png)

After discovering, select the device you want to add the VM.
![FAQ4](/cloud_vista/FAQ/Images/netgain/FAQ4.png)
 

Click     to add the selected device.
 ![FAQ5](/cloud_vista/FAQ/Images/netgain/FAQ5.png)
Click on <Metrics>, <Objects>, <Device view>.
 
 ![FAQ6](/cloud_vista/FAQ/Images/netgain/FAQ6.png)

Drill down the required Site and VM.

Once selected, click on   .
![FAQ7](/cloud_vista/FAQ/Images/netgain/FAQ7.png)
 

Click on     to add monitor.
 ![FAQ8](/cloud_vista/FAQ/Images/netgain/FAQ8.png)

Go to Apps > VMware. Click on    to discover all monitors.
 ![FAQ9](/cloud_vista/FAQ/Images/netgain/FAQ9.png)

Input the necessary details.
 ![FAQ10](/cloud_vista/FAQ/Images/netgain/FAQ410.png)
NOTE: User must have admin privilege.

Click <Discover> and add all the monitors that have been discovered.










How to create Daily report of CPU, Memory and Disk utilization for past 1 month on any devices
Click on <Metrics>, <Reports>, <Batch>, <Customize reports>.
 

Click on     to create customize report. 
 

Click on     ,     to create the user-defined report.
 

Fill in the necessary information
*	Time range (for last month report, choose begin of last month to end of last month)
 

Click on   .
 

Select the required Device and monitors to be included in the report.
 

Click on   .
 

Select graph type for PDF format output and click on   .
 

Successful creation of report. Go to <Metrics>, <Reports>, <Batch>, <User Defined Templates> to see the newly created report.
 














Not able to discover devices via SNMP
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
















How to install SNMP for Windows 10 in PowerShell
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







How to unlock my user account if its locked
Admin account is needed in order to unlock user’s account.

Login to Admin account, click on <Admin>, <Accounts>, <Users>.
 

Click on     to edit the information of user’s account.
 



Admin will change the password of user and tick the Unlock box and save.
 

Admin can also edit settings like ‘Login attempts strategy’ and ‘Change Password # of days’.
 

How does reset password on User Management work
Reset password only works when user has added their email address in the user profile. The newly generated password will be sent to the user email.

What is the password policy for CV
Password has a minimum of 4 characters and is case sensitive. A strong password consists of Uppercase letters, lowercase letters, numbers and symbols.

How to set the duration for password expiry
Login to Admin account, click on <Admin>, <Accounts>, <Users>.
 

Change the input to the desired days. 
 

How to update license	
Click on <Admin>, <System>, <License>.
 

Choose the license file and click on     to upload license.
 

NOTE: no restart is needed.


How to integrate new devices via SNMP to support in Metrics
Users must provide their SNMPwalk and SNMP MIB of their device. 

NetGain will handle the integration and send the patch to the user.


















NetGain Agent not found
Check Agent log in server for issues.
For Windows:
*	check log file at (NetGain Agent directory) \agent.log 
For Linux:
*	check log file at (NetGain Agent directory)/bin/nohup.out

Check firewall.
*	Use Telnet to check connectivity on port 81 and 1808












How to request CSR generation.
Please change those fonts in bold according to customer requirements.
Create keystore.
*	cd /root
*	mkdir ssl_28Jun2024
*	/root/netgain/jre/bin/keytool -genkey -alias TBA_by_Customer_CA -keyalg RSA -keystore /root/ssl_28Jun2024/customer_name.jks -keysize 4096 -ext SAN=dns:netgain_server_hostname.example.com, ip:netgain_server_ip

Specify a password: any_password_preferred.

Enter the following details when prompted.
*	Name: TBA by Customer CA, and normally it is NetGain server hostname
*	Organization Unit: TBA by Customer CA
*	Organization: TBA by Customer CA		
*	City: TBA by Customer CA		
*	State: TBA by Customer CA		
*	Country: TBA by Customer CA

Generate CSR file to send to CA to sign.
*	/root/netgain/jre/bin/keytool -certreq -keyalg RSA -alias TBA by Customer CA -file certreq.csr -keystore /root/ssl_28Jun2024/customer_name.jks

Submit the generated file named certreq.csr to the CA to sign.

Import signed cert to NetGain EM.
Note: use notepad to open each cert and combine three certs into one .cer file, then import. And it is not able to import one by one. Three certs needed are: one signed cert, One intermediate, one root. After the combined cert is done, then import it.
*	/root/netgain/jre/bin/keytool  -import -trustcacerts -file /root/ssl_28Jun2024/NetGain_certreq_Signed.cer  -alias TBA_by_Customer_CA -keystore /root/ssl_28Jun2024/customer_name.jks

Verify the keystore entry.
*	/root/netgain/jre/bin/keytool -list -v -keystore /root/ssl_28Jun2024/customer_name.jks

Configure Tomcat keystore path.
*	vi /root/netgain/tomcat/conf/server.xml

Look for below line and update.
*	keystoreFile="/root/ssl_28Jun2024/customer_name.jks" keystorePass="your_preffered_password"

Delete or change those in yellow for port 80 to be disabled.
*	[root@netgain conf]# cat /root/netgain/tomcat/conf/server.xml
*	<?xml version="1.0" encoding="UTF-8"?>
*	<Server port="8005" shutdown="SHUTDOWN">
*	<Listener className="org.apache.catalina.startup.VersionLoggerListener" />
*	<Listener className="org.apache.catalina.core.AprLifecycleListener" SSLEngine="on" />
*	<!--Prevent memory leaks due to use of particular java/javax APIs-->
*	<Listener className="org.apache.catalina.core.JreMemoryLeakPreventionListener" />
*	<Listener className="org.apache.catalina.mbeans.GlobalResourcesLifecycleListener" />
*	<Listener className="org.apache.catalina.core.ThreadLocalLeakPreventionListener" />
*	<Service name="Catalina">
*	<Connector port="80" protocol="HTTP/1.1" connectionTimeout="30000" redirectPort="443"
*	URIEncoding="UTF-8" maxThreads="150"
*	compression="on" compressionMinSize="2048" noCompressionUserAgents="gozilla, traviata"
*	compressableMimeType="text/html,text/xml"
*	/> 
*	<Connector port="443" protocol="org.apache.coyote.http11.Http11NioProtocol" SSLEnabled="true"
*	keystoreFile="/root/ssl_28Jun2024/customer_name.jks" keystorePass="your_preffered_password"
*	maxThreads="150" scheme="https" secure="true"
*	ciphers="TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384, TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256, TLS_DHE_RSA_WITH_AES_256_GCM_SHA384, TLS_DHE_RSA_WITH_AES_128_GCM_SHA256"
*	clientAuth="false" sslProtocol="TLS" sslEnabledProtocols="TLSv1.2"

# Update netgain keystore.
For fixing the self-sign cert for TCP port 5044 and 1808, use tomcat jks file that you have in step 5 and follow the steps below.
*	Backup the current netgain_keystore: cp /root/netgain/web/lib/netgain_keystore /tmp/netgain_keystore
*	Disable crontab for check_box.sh
*	vi /root/netgain/conf/admin/config_customize.xml, put in below 
o	<config key="keystore_password " value=" your_preffered_password "/> 
o	Save and exit
*	box-stop.sh
*	Copy the /root/ssl_28Jun2024/customer_name.jks file to /root/netgain/web/lib
*	Rename the .jks file to netgain_keystore: mv /root/netgain/web/lib/customer_name.jks /root/netgain/web/lib/netgain_keystore
*	box.sh
*	enable crontab for check_box.sh
*	tail -20f /var/log/iossd.log 
*	verification of port 1808 and 5044
    	openssl s_client -connect 127.0.0.1:5044, should be able to see the signed cert same as tomcat
        	openssl s_client -connect 127.0.0.1:1808, should be able to see the signed cert same as tomcat


