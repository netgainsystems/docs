"use strict";(function(){const t={};t.doc={id:"id",field:["title","content"],store:["title","href"]};const e=FlexSearch.create(t);window.geekdocSearchIndex=e,e.add({id:0,href:"/overview/",title:"Overview",content:""}),e.add({id:1,href:"/installation/emedge/emedge-agent/config_checks/processes/",title:"Processes",content:`Process checks are use to monitor OS processes. These checks will be scheduled to run at a fixed interval (default 30 seconds intervals). This page shows how to configure emedge-agent process check.
Configuration Steps Ensure the emedge-agent is properly installed, as described here Navigate to emedge-agent installation directory (e.g. /opt/emedge-agent) Edit config.yml in checks/process to add the process monitor configuration Reload the emedge-agent configuration Example: to add a process monitor for process with name &ldquo;proc1&rdquo;, do the following Add one or more sections under &lsquo;checks&rsquo; to checks/process/config.yml checks: - name: check1 enabled: false process_name: proc1 interval_secs: 30 - name: check2 ...&lt;snipped&gt;... Run emedge-agent reload to trigger emedge-agent to reload the config The process will be monitored and metrics collected will now be forwarding to emedge `}),e.add({id:2,href:"/installation/emedge/emedge-agent/config_checks/winsvc/",title:"Windows services",content:`Windows service checks are use to monitor status of Window services. These checks will be scheduled to run at a fixed interval (default 30 seconds intervals). This page shows how to configure emedge-agent process check.
Configuration Steps Ensure the emedge-agent is properly installed, as described here Navigate to emedge-agent installation directory (e.g. /opt/emedge-agent) Edit config.yml in checks/winsvc to add the winsvc monitor configuration Reload the emedge-agent configuration Example: to add a winsvc monitor for windows service with name &ldquo;fax&rdquo;, do the following Add one or more sections under &lsquo;checks&rsquo; to checks/winsvc/config.yml checks: - name: check1 enabled: false service_name: fax interval_secs: 30 ensure_state: RUNNING # valid values are STOPPED, RUNNING, PAUSED - name: check2 ...&lt;snipped&gt;... Run emedge-agent reload to trigger emedge-agent to reload the config The process will be monitored and metrics collected will now be forwarding to emedge `}),e.add({id:3,href:"/installation/emedge/emedge-agent/config_checks/directories/",title:"Directories",content:`File checks are use to monitor files and subdirectories of a specific directory These checks will be scheduled to run at a fixed interval (default 30 seconds intervals). This page shows how to configure emedge-agent file check.
Configuration Steps Ensure the emedge-agent is properly installed, as described here Navigate to emedge-agent installation directory (e.g. /opt/emedge-agent) Edit config.yml in checks/directory to add the directory monitor configuration Reload the emedge-agent configuration Example: to add a directory monitor for directory with path &ldquo;/folder1&rdquo;, do the following Add one or more sections under &lsquo;checks&rsquo; to checks/directory/config.yml checks: - name: &#39;sample_directory_check1&#39; enabled: true interval_secs: 30 path: &#39;/folder1&#39; - name: &#39;sample_directory_check2&#39; ...&lt;snipped&gt;... Run emedge-agent reload to trigger emedge-agent to reload the config The directory will be monitored and metrics collected will now be forwarding to emedge `}),e.add({id:4,href:"/installation/emedge/emedge-agent/config_checks/files/",title:"Files",content:`File checks are use to monitor new content in files and optionally forwards these new contents as logs These checks will be scheduled to run at a fixed interval (default 30 seconds intervals). This page shows how to configure emedge-agent file check.
Configuration Steps Ensure the emedge-agent is properly installed, as described here Navigate to emedge-agent installation directory (e.g. /opt/emedge-agent) Edit config.yml in checks/file to add the file monitor configuration Reload the emedge-agent configuration Example: to add a file monitor for file with path &ldquo;/tmp/my_sample.log&rdquo;, do the following Add one or more sections under &lsquo;checks&rsquo; to checks/file/config.yml checks: - name: &#39;sample_file_check_1&#39; enabled: false interval_secs: 30 filepath: /tmp/my_sample.log forward_as_logs: false line_checks: - name: &#39;check1&#39; contains: &#39;abc&#39; - name: &#39;check2&#39; regex: &#39;e.g. error2=.*&#39; - name: &#39;sample_file_check_2&#39; ...&lt;snipped&gt;... Run emedge-agent reload to trigger emedge-agent to reload the config The file will be monitored and metrics collected will now be forwarding to emedge `}),e.add({id:5,href:"/installation/emedge/emedge-agent/config_checks/scripts/",title:"Scripts",content:"Custom script checks are well suited to collect metrics from custom applications or special systems. These checks will be scheduled to run at a fixed interval (default 30 seconds intervals). This page looks at how to configure custom emedge-agent script check.\nConfiguration steps Ensure the emedge-agent is properly installed, as described here Navigate to emedge-agent installation directory (e.g. /opt/emedge-agent) Edit config.yml in checks/scripts to add the script configuration Reload the emedge-agent How to write a custom script emedge expects a JSON output from a custom script, in the form of a JSON array of monitor instances (and metrics) &ldquo;name&rdquo; property of each monitor instance is used as the name of that monitor instance Example: to add a custom script sample_check.sh, do the following Sample content of sample_check.sh #!/bin/sh VAL1=111 VAL2=222 cat &lt;&lt; EOF [ { &#34;name&#34; : &#34;monitor1&#34;, &#34;sample_result1&#34; : ${VAL1}, &#34;sample_result2&#34; : ${VAL2} }, { &#34;name&#34; : &#34;monitor2&#34;, &#34;sample_result1&#34; : ${VAL1}, &#34;sample_result2&#34; : ${VAL2} } ] EOF Add the following content to config.yml checks: - name: sample_check interval_secs: 30 enabled: false script: sample_check.sh args: - myarg1 - myarg2 Run emedge-agent check script to do a test run to check the configurations and validate the script output Run emedge-agent reload to trigger emedge-agent to reload the config The metrics collected by custom script check will now be forwarding to emedge "}),e.add({id:6,href:"/overview/architecture/",title:"Architecture",content:`NetGain Systems is your go-to observability platform for seamless data normalization, powerful processing, dynamic visualization, and comprehensive report generation. It’s more than just a tool—it’s your complete solution for transforming raw IT data into actionable insights. With seamless integration capabilities, NetGain Systems effortlessly connects with your trouble-ticketing systems, collaboration tools, and messaging platforms, ensuring you stay informed and ahead of the curve.
Emedge is the heart of our solution, strategically deployed within your enterprise network—whether on-premises, in the public or private cloud, or across a hybrid infrastructure. This lightweight, yet powerful, software works tirelessly behind the scenes, collecting critical IT infrastructure data. From device metrics to logs and traces, Emedge captures it all, regardless of where your infrastructure resides.
With data transmission secured by encryption, Emedge ensures your information is safely delivered to NetGain Systems, where the magic of analysis and visualization happens.
Leveraging open protocols, Emedge seamlessly gathers data from all your IT systems—be it SNMP, JDBC, Elastic Beats, or beyond. This flexibility ensures that no part of your infrastructure is left in the dark.
Together, NetGain Systems and Emedge empower you with full visibility into your IT ecosystem, whether it’s on-premises, in the cloud, or within a hybrid environment. Experience the confidence of total observability, knowing that your infrastructure is fully covered and your operations are optimized.
`}),e.add({id:7,href:"/troubleshooting_guides/FAQ/",title:"Frequently Asked Questions",content:`Our FAQ section is designed to assist with common questions regarding NetGain Systems. If you encounter any issues that are not covered here, please feel free to contact our support team for further assistance.
Agent Management User Management Monitor &amp; Discovery Reports Licensing SNMP Installation and Configuration Security `}),e.add({id:8,href:"/installation/cloud_vista/",title:"Cloud Vista",content:`Cloud Vista Suite (CVS) by NetGain Systems is a scalable monitoring service for hybrid cloud environments, providing monitoring of networks, servers, databases, applications, and services, through a SaaS-based monitoring analytics platform
Key components of CVS Cloud Vista The cloud data platform for receiving, processing, storing and visualizing monitoring data
EM Edge The on-premise data aggregator and forwarder of data towards Cloud Vista
Deployment architecture The diagram below depicts the relationship between Cloud Vista, EM Edge and EM Edge-Agent components
Setting Up `}),e.add({id:9,href:"/installation/emedge/",title:"Emedge",content:`About emedge emedge is a software that runs on your local site. It collects metrics and logics from the IT network and hosts (with emedge-agent installed) and sends them to central monitoring site, where you can analyze and visualize your monitoring and performance data. You only need to deploy an instance of emedge per local site.
Install and configure About filebeat filebeat is a lightweight software that runs on your managed hosts. It is a lightweight, open-source log shipper that collects logs from various sources and forwards them to emedge. It monitors the log files or locations that you specify, collects log events, and then sends them to emedge for processing
Install and configure About metricbeat metricbeat is a lightweight software that runs on your managed hosts. It collects monitoring and performance data from hosts and sends them to emedge for aggregation and forwarding to central monitoring site, where you can analyze the data.
Install and configure `}),e.add({id:10,href:"/modules/siem/log_analytics/filebeat/",title:"Filebeat",content:`About Filebeat Filebeat is a software that runs on your managed host or emedge. It collects logs and parse them to emedge for aggregation and forwarding to NetGain Systems, where you can analyze the data.
Supported Metrics Currently NetGain Systems supports Filebeat for following:
Find steps here for installation of Filebeat: Installation
ActiveMQ module
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
Envoyproxy Module F5 module
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
Zeek (Bro) Module ZooKeeper module
Zoom module
Zscaler module
Find steps here for installation of Filebeat: Installation
`}),e.add({id:11,href:"/modules/home/",title:"Home",content:`Home page provides summary views of the IT system being monitored. When users login to the NetGain Systems console, the Dashboard of the Home page is the first thing that they will see. Besides the Dashboard, the Home page has Business Views (Bizviews) and Maps to graphically show different representations of the status of the IT system.
Home page supports multiple dashboards which can be customized to user requirements, including embedding external content within a dashboard. Users are also able to create new dashboard widgets for use in dashboards.
Left Navigation Top Navigation Dashboards Maps Business Views `}),e.add({id:12,href:"/modules/metrics/",title:"Metrics",content:`The Metrics function within our infrastructure monitoring system gives you a comprehensive overview of the status of your IT devices, enabling proactive management and early detection of potential issues. By monitoring key metrics, you can address problems before they escalate, ensuring smooth operation and minimizing any impact on your end-users.
Discovering / Adding Devices to be Monitored Monitoring by Device Type Monitoring by Alert Type Monitoring by Business Type Editing Monitoring Settings Threshold Settings Metrics Policy Customize SNMP, Scripts, Database and Dynamic Thresholds Metrics Profile `}),e.add({id:13,href:"/modules/netflow/",title:"NetFlow",content:`NetFlow are used to collect and monitor network traffic data.They monitor IP addresses,data volumes,time,ports and protocols.
Using Network Traffic Analytics Reports Watcher Settings and Maintenance `}),e.add({id:14,href:"/installation/emedge/netgain-agent/",title:"NetGain Agent",content:`netgain-agent is a agent software that runs on managed server. It collects metrics and logics from the server and forwards the data to EM or Emedge
To get started, select your platform Other Operating Systems Installation steps on Windows Download Windows MSI Installer for NetGain Agent Install via command line search for Command Prompt and right click &ldquo;Run as administrator&rdquo;.
run following command
msiexec.exe /qn /i netgain-agent-v12-latest.msi EMIP=x.x.x.x EMIP=x.x.x.x specifies the IP address of EM or Emedge server Notes:
netgain-agent will also be configured automatically as windows service named &rsquo;netgain-agent' You may also use Windows Group Policy to remotely install software in bulk Installation steps on Linux One liner installation EMIP=x.x.x.x SERVICE=1 sh -c &#34;$(curl -skL https://download.netgain-systems.com/netgain-agent/install.sh)&#34; Manual installation RPM-based package (e.g. RedHat, CentOS, Rocky Linux, etc&hellip;)
Download netgain-agent-v12-latest.x86_64.rpm Install package yum &ndash;nogpgcheck -y install netgain-agent-v12-latest.x86_64.rpm Configures the EM destination IP EMIP=x.x.x.x SERVICE=1 /opt/netgain-agent/netgain-agent config Start the agent systemctl start netgain-agent.service Debian-based package (e.g. Ubuntu)
Download netgain-agent-v12-latest.amd64.deb Install package apt update -qq -y apt install -qq -y openjdk-8-jre-headless dpkg -i netgain-agent-v12-latest.amd64.deb Configures the EM destination IP EMIP=x.x.x.x SERVICE=1 /opt/netgain-agent/netgain-agent config Start the agent systemctl start netgain-agent.service Notes
EMIP=x.x.x.x specifies the IP address of EM or Emedge server SERVICE=1 specifies to automatically install netgain-agent as a system service If you do not wish to install as a system service, set to SERVICE=0 Installation steps on other Operating Systems Download netgain-agent-v12-latest.tar.gz Extract the package cd /opt tar zxf netgain-agent-v12-latest.tar.gz cd netgain Configures the EM destination IP edit agent.properties to add &ldquo;serverHost=x.x.x.x&rdquo; Start the agent cd /opt/netgain/bin &amp;&amp; ./agent_start.sh Additional notes All logs will be saved into agent.log in the installation directory To stop netgain-agent, simply run netgain-agent stop Run netgain-agent -h for help on more commands `}),e.add({id:15,href:"/installation/em_setup_v12/",title:"Setup NetGain Systems for v12",content:`Requirement and additional packages Recommended OS: Instal l Rocky Linux 9.2 x86_64 Install additional Packages yum install -y tar pinentry net-snmp net-snmp-utils net-tools telnet openssh openssh-clients ftp expect wget traceroute unzip zip vim openssl Installation of ElasticSearch Step 1. Install and Configure JVM Install Elasticsearch:
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.11.4-x86_64.rpm --no-check-certificate
yum localinstall --disablerepo=* elasticsearch-8.11.4-x86_64.rpm
Authentication is auto-enabled in new ElasticSearch v8.x.x and take note of the generated random password (underlined in red) during installation:
Authentication and authorization are enabled. TLS for the transport and HTTP layers is enabled and configured. The generated password for the elastic built-in superuser is : t_uYH54WkAddVJ8qAK9s
If this node should join an existing cluster, you can reconfigure this with &lsquo;/usr/share/elasticsearch/bin/elasticsearch-reconfigure-node &ndash;enrollment-token &rsquo; after creating an enrollment token on your existing cluster.
You can complete the following actions at any time:
Reset the password of the elastic built-in superuser with &lsquo;/usr/share/elasticsearch/bin/elasticsearch-reset-password -u elastic&rsquo;.
Generate an enrollment token for Kibana instances with &lsquo;/usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token -s kibana&rsquo;.
Generate an enrollment token for Elasticsearch nodes with &lsquo;/usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token -s node&rsquo;.
NOT starting on installation, please execute the following statements to configure elasticsearch service to start automatically using systemd sudo systemctl daemon-reload sudo systemctl enable elasticsearch.service
You can start elasticsearch service by executing sudo systemctl start elasticsearch.service
Edit the jvm.options to change the heap size:
vi /etc/elasticsearch/jvm.options
Change below for min and max heap size, for below the physical RAM of the server is 3GB:
Please note that the heap size cannot exceed the 50% of total RAM you have in server.
if your server is 16GB, likely this min and max heap size can be set as 4GB
-Xms4g ## 1Gb is the minimum heap size
-Xmx4g ## 1Gb is the maximum heap size
Step 2. Configure elasticsearch Edit the configuration file of elasticsearch
vi /etc/elasticsearch/elasticsearch.yml
Input below parameter
cluster.name: netgainelkdb # this is to define a cluster name
node.name: netgainnode-1 #this is to define a node name
network.host: 127.0.0.1 #this is the IP address that the localhost or other server going to contact with elasticsearch.
discovery.type: single-node
Enable security features xpack.security.enabled: true
xpack.security.enrollment.enabled: false
Enable encryption for HTTP API client connections, such as Kibana, Logstash, and Agents xpack.security.http.ssl: enabled: false keystore.path: certs/http.p12
Enable encryption and mutual authentication between cluster nodes xpack.security.transport.ssl: enabled: false verification_mode: certificate keystore.path: certs/transport.p12 truststore.path: certs/transport.p12
Create a new cluster with the current node only Additional nodes can still join the cluster later #cluster.initial_master_nodes: [&ldquo;localhost&rdquo;]
Allow HTTP API connections from anywhere Connections are encrypted and require user authentication http.host: 0.0.0.0
Allow other nodes to join the cluster from anywhere Connections are encrypted and mutually authenticated #transport.host: 0.0.0.0
** change the details of the underlined bold in red using the above settings
Step 3. Start and enable elasticsearch service on boot start and enable service on boot
systemctl enable &ndash;now elasticsearch.service
verify status
systemctl status elasticsearch.service -l
Verify security password curl http://127.0.0.1:9200 -u elastic
whereas it will ask for the generated built-in password
Optional to manually change the ES password: cd /usr/share/elasticsearch
./bin/elasticsearch-reset-password -u elastic -i Installation of NetGain EM
Download v12 Base software Download link: https://drive.google.com/file/d/16CX1TXhzT7kUhrjhfZyaMrKfmmKVdicX/view?usp=sharing winscp to your appliance and copy the download base v12 software to root directory
command: tar -xzvf netgainBASE_v12.2.148.tar.gz &ndash;absolute-names Note: please use above exact command, otherwise the license will have issues that causes process not able to start.
Updated Java and Tomcat command: export PATH=/root/netgain/jre/bin:$PATH Java version &ldquo;1.8.0_311&rdquo; Java(TM) SE Runtime Environment (build 1.8.0_311-b11) Java HotSpot(TM) 64-Bit Server VM (build 25.311-b11, mixed mode)
Tomcat version: v9.0.73
Disable firewall service firewalld stop
Configure rc.local (bold fonts &gt; change it accordingly for customer) command: vi /etc/rc.local
touch /var/lock/subsys/local systemctl stop firewalld export NG_LICENSE_BY_MACADDR=1 export IOSS_HOME=/root/netgain export NETGAIN_SERIAL=NGSG2209001 export EM_MODEL=EM-BASE export EM_CUSTOMER_NAME=Customer_name su - root -c &ldquo;$IOSS_HOME/bin/agent_start.sh&rdquo; systemctl start elasticsearch.service su - root -c &ldquo;$IOSS_HOME/bin/box.sh&rdquo;
example:
NGSG2209001 should be change to your own serial key
whereas: NG – NetGain (partner/customer name) SG – Singapore (country) 22 – 2022 (year) 09 – Sept (month) 001 – running number
EM-BASE-Demo
whereas: Demo - base model of the license
Give full permission for rc.local command: chmod +x /etc/rc.d/rc.local command: systemctl enable rc-local
command: systemctl start rc-local
Configure vi /etc/sysconfig/i18n for english language during bootup process command: vi /etc/sysconfig/i18n LANG=&ldquo;en_US.UTF-8&rdquo;
SYSFONT=&ldquo;latarcyrheb-sun16&rdquo;
SUPPORTED=&ldquo;en_US.UTF-8:en_US:en&rdquo;
Change NetGain application configuration command vi /etc/ng.conf export SKIP_WDT=1
export CHARSET=en_US export MAX_MEM=1000 #change 50 - 70% of your VM total RAM export NG_LICENSE_BY_MACADDR=1 JAVA_OPTS=&quot;\${JAVA_OPTS} -Delk=1&quot; JAVA_OPTS=&quot;\${JAVA_OPTS} -Delasticsearch_ip=127.0.0.1&quot;
Setup Date and Time hwclock &ndash;set &ndash;date=&lsquo;12/22/2014 14:35&rsquo;
date -s &ldquo;22 December 2014 14:35&rdquo; yum install chrony
timedatectl set-ntp yes
service chronyd start
(*NTP is another option for auto date and time: ntpdate pool.ntp.org)
Check DNS record command: vi /etc/resolv.conf nameserver 8.8.8.8
customer DNS should be put after nameserver
Add EM process check to cronjob command: crontab -e #* * * * * /root/netgain/bin/check_box.sh #*/15 * * * * /root/netgain/bin/ha/standby.sh 10 0 * * * mon sync; echo 3 &gt; /proc/sys/vm/drop_caches
0 6 * * * find /var/log/iossd* -mtime +30 -delete Note: this command is to check if NetGain is inaccessible and it will auto restart the service (remember to remove the # to activate)
Run export NG_LICENSE_BY_MACADDR=1 command: export NG_LICENSE_BY_MACADDR=1 echo $NG_LICENSE_BY_MACADDR
Get register key Copy paste below output on notepad, save and Email to NetGain team to request for license ommand: /root/netgain/bin/run.sh netgain.sac.Register
To update the license
paste the contents of license from NetGain team to license.txt command: vi /root/netgain/bin/license.txt
Update with the Latest patch Please ask NetGain support email for the latest patch file.
Copy the latest patch to /root directory.
** dnf install pinentry (for Rocky Linux 9)
command: gpg -d .tar.gz.gpg &gt; .tar.gz
gpg password: netgain1428117
Untar the patch on &ldquo;/root&rdquo;
command: tar -xzvf &lt;patch filename&gt;.tar.gz export JAVA path command: export PATH=/root/netgain/jre/bin:$PATH And need to add this command globally to /etc/profile and /root/.bash_profile and /root/.bashrc
Update the Elasticsearch password in config_customize of NetGain command: vi /root/netgain/conf/admin/config_customize.xml Start NetGain EM process /root/netgain/bin/box.sh tail -200f /var/log/iossd.log to check EM process running status
Please email NetGain support for further assistance: support@netgain-systems.com
`}),e.add({id:16,href:"/installation/emedge/emedge-agent/",title:"Emedge Agent",content:`About emedge-agent emedge-agent is a software that runs on your managed hosts. It collects monitoring and performance data from hosts and sends them to emedge for aggregation and forwarding to NetGain Systems, where you can analyze the data.
Installation Configure Checks `}),e.add({id:17,href:"/modules/siem/security_analytics/",title:"Security Analytics",content:`NetGain Systems Security Analytics can manage logs and other data from a wide range of devices including:
Network equipment such as routers and switches Security devices such as firewalls, IPS/IDS and APT Servers such as email or AD servers Windows Event logs NetGain Systems Security Analytics receives, collects, organizes, searches, correlates, and analyzes data, displaying information in customizable dashboards, and delivering alerts and notifications when abnormalities, problems, or threats are detected.
Search Threat Events Threat Detection AI Workflows MITRE ATT&amp;CK `}),e.add({id:18,href:"/modules/siem/",title:"SIEM",content:" Security Analytics Logs Analytics Reports Watcher "}),e.add({id:19,href:"/modules/apm/",title:"APM",content:`NetGain Systems APM delivers real-time monitoring of your organization’s critical business applications, ensuring you stay on top of performance and user experience. Our APM agents are seamlessly deployed within your application servers, where they continuously collect and transmit performance data to the NetGain Systems APM server. This data is then processed and presented in a clear, intuitive format, empowering you with actionable insights to optimize your application performance and enhance user satisfaction.
Below is the screenshot from the APM page.
NetGain Systems APM Mainly contains four sub tabs which can be found at the Top Navigation Bar:
APM Reports Watcher Agent `}),e.add({id:20,href:"/installation/emedge/Filebeat/",title:"Filebeat",content:`About Filebeat filebeat is a lightweight software that runs on your managed hosts. It is a lightweight, open-source log shipper that collects logs from various sources and forwards them to emedge. It monitors the log files or locations that you specify, collects log events, and then sends them to emedge for processing
Receiving TLS-encrypted syslogs Download and install syslog-ng as the syslog forwarder
e.g. yum install syslog-ng
Edit config file syslog-ng.conf
To configure syslog-ng to receive TLS traffic on a port and forward the syslog as plain text to filebeat, add the following content (e.g. receive on port 9003 and forwarsd to port 9004)
@version: 4.1 source s_tls { network( transport(&#34;tls&#34;) port(9003) tls( key-file(&#34;/mypath/key.pem&#34;) cert-file(&#34;/mypath/cert.pem&#34;) peer-verify(&#34;optional-untrusted&#34;) ) ); }; destination d_logs { tcp(&#34;127.0.0.1&#34; port(9004)); }; log { source(s_tls); destination(d_logs); }; Start the syslog-ng server
syslog-ng -e -d -v &ndash;no-caps &ndash;foreground -f syslog-ng.conf
`}),e.add({id:21,href:"/installation/emedge/Metricbeat/",title:"Metricbeat",content:`About Metricbeat Metricbeat is a software that runs on your managed hosts. It collects monitoring and performance data from hosts and sends them to emedge for aggregation and forwarding to NetGain Systems, where you can analyze the data.
Supported Metrics Currently NetGain Systems supports Metricbeat for following:
AWS
Azure
Docker
Elasticsearch
Kubernetes Redis
Systems
And More&hellip;
Find steps here for installation of Metricbeat: Installation
`}),e.add({id:22,href:"/modules/siem/log_analytics/",title:"Log Analytics",content:`NetGain Systems Log Analytics can manage logs and other data from a wide range of devices including:
Network equipment such as routers and switches Security devices such as firewalls, IPS/IDS and APT Servers such as email or AD servers Windows Event logs NetGain Systems Log Analytics receives, collects, organizes, searches, correlates, and analyzes data, displaying information in customizable dashboards, and delivering alerts and notifications when abnormalities, problems, or threats are detected.
Search Sources Filters Mapping Filebeat Schema Archive Reports Watcher `}),e.add({id:23,href:"/security/Log4j2/",title:"Apache Log4j2 Vulnerability",content:`About Apache Log4j2 Remote Code Execution (RCE) Vulnerability CVE-2021-44228 &amp; CVE-2021-45046 Apache Log4j2 &lt;=2.14.1 JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers when message lookup substitution is enabled. From log4j 2.15.0, this behavior has been disabled by default. In previous releases (&gt;2.10) this behavior can be mitigated by setting system property &ldquo;log4j2.formatMsgNoLookups&rdquo; to “true” or it can be mitigated in prior releases (&lt;2.10) by removing the JndiLookup class from the classpath (example: zip -q -d log4j-core-*.jar org/apache/logging/log4j/core/lookup/JndiLookup.class).
It was found that the fix to address CVE-2021-44228 in Apache Log4j 2.15.0 was incomplete in certain non-default configurations. This could allows attackers with control over Thread Context Map (MDC) input data when the logging configuration uses a non-default Pattern Layout with either a Context Lookup (for example, $\${ctx:loginId}) or a Thread Context Map pattern (%X, %mdc, or %MDC) to craft malicious input data using a JNDI Lookup pattern resulting in a denial of service (DOS) attack. Log4j 2.15.0 makes a best-effort attempt to restrict JNDI LDAP lookups to localhost by default. Log4j 2.16.0 fixes this issue by removing support for message lookup patterns and disabling JNDI functionality by default.
Summary NetGain has analysed the impact of the remote code execution vulnerability (CVE-2021-44228 &amp; CVE-2021-45046) related to Apache Log4j (a logging tool used in many Java-based applications) disclosed on 9 Dec 2021 on its products, and has published the information below:
Affected products Mitigation guide Affected products NetGain EM, CV and emedge versions lower than v11.2.126
Mitigation guide To help mitigate the risk of this vulnerability , NetGain provides one option:
Long term fix : To update NetGain EM, CV and emedge to version v11.2.126 package of log4j2 will be updated to version 2.16.0 Ref https://cve.mitre.org/cgi-bin/cvename.cgi?name=2021-44228
https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-45046
`}),e.add({id:24,href:"/security/report/",title:"Report",content:"In construction "}),e.add({id:25,href:"/modules/cmdb/",title:"CMDB",content:" Network Config "}),e.add({id:26,href:"/news/Release/",title:"Release notes",content:`NetGain EM Version Release Notes Please find below for the past release notes:
NetGain EM Change Log v12.2.274 build 969 (release date: 8th Apr 2024)
Fixes: Metrics naming of objects Batch report - Time range SNMP v3 discovery for Bluecoat devices Aruba AP uptime monitor SSH monitoring of devices Adhoc report saving NCM - show changes Dashboard request headers too large Enchancements: License update to add in the logs Oracle database monitors PostgreSQL monitors NetApp monitors SSO for Azure Oracle Database monitors Traceroute monitor Disk report Grafana additional supporting APIs GeoMap plugin CMDB - asset management plugin OS Process monitor Synthetic monitoring New Implementation: Rest API for Bizview Built-in log parsing for Trendmicro Deep Security logs Supports Elasticsearch v8.11.x Dell Backup Jobs monitor Trend Micro metrics via API Trellix monitors New supported OS: Alma Linux 9.3 Integration of MOXA dry contact monitoring NetGain EM Change Log v12.2.160 build 814 (release date: 5th Jul 2023)
Fixes: Linux Process start time SIEM built-in mappings button not shown Alarm correlation view Cipher issues for Tomcat 8 Enchancements: Added SIEM threat detection rules SNMP v3 discovery Rest APIs Metrics and Tags Oracle Database monitors Palo Alto, Huawei, Cisco, Mikrotik, VMware, Extreme, Fortigate monitors System Uptime monitor NetGain Agent for windows OS NCM - Fortinet, Palo Alto Password expiry message email to include more details New Implementation: Azure Single Sign-On (SSO) using OAuth2 and OpenID protocols SNMPtrap to alarm mapping mechanism, based on mib files Monitoring of QAX firewall under Security group Zabbix smart and zbs cluster monitors Monitor exception feature Supports Elasticsearch v8.7.x Supports Filebeat v8.7.x Supports emedge in Raspbian OS 64bit Obsolete: Temporary ignore feature, replaced with monitor exception feature NetGain EM Change Log v11.2.394 build 553 (release date: 16th Nov 2022)
Fixes:
Fix Bug 4051 - 11.1.182|Alicloud Sms wrong info - add support to test sms message using json format based on the template format corresponding to the supplied templateCode Fix Bug 4366 - v11-SaaS-SIEM log sources page is not able to display log source from filebeat Fix Bug 4480 - cpu_memory_utilization_additional_info_not_show Fix Bug 4646 - v11-EM-too many opened snmp session Fix Bug 4664 - metric beat windows services adding Fix Bug 4665 - siem_log_watcher_needs_severity_setting Fix Bug 4666 - [change request] v11-SIEM-MAH windows event logs forwarding Fix Bug 4668 - handle potential sms.java hanging issue Fix Bug 4683 - v11.2.x | metricbeat monitors not updating when device is down Fix Bug 4685 - v11-EM-missing MOs issues - add delay in shutdown hook until MOs move operation is completed, if there is an existing MO operation in progress Fix Bug - SNMP custom monitors not able to capture data Fix for critical monitor Action not triggered Fix missing counter index issues for some monitors Fix elastic data purging wrongly purging data using shorter days (meant for saas) for on prem Fix default HOME_DIR for agent Fix issue when old socket agent connection becomes invalid Fix daily logs volume usage calculation error due to beats indices in gmt time format Fix index name error in CVS cloud when ingesting sample logs Enchancements:
Synthetic - improve on stability Synthetic - implement alarm generation Synthetic - implement frontend logic, to display past transactions and steps Synthetic - delete executions and screenshots too, when script is deleted Synthetic monitoring - move to be under &lsquo;apm&rsquo; module Elastic retain snapshots for 1st and 15th of the month Elastic improve query api to throw exception with query string has syntax errors Elastic reset CvsManager configs cache when invoke ElasticBackupUtil.purgeNow method NCM encodes support for encrypting NCM data with public key on emedge Metricbeat enhance AWS monitors Metricbeat enhance AWS - enhance S3 and NatGateway mappings Metricbeat enhance AWS - enhance ELB monitors Metricbeat enhance AWS - improve on MO tagging Metricbeat enhance AWS mappings and add IIS mappings Cloud copy modules.d folder from var (if exists) for beats sidecars in cloud Cloud enable apm-server sidecar on emedge running on Azure cloud Allow monitor list page to remember the table search string different for different objects (i.e. fdns) - revert this change Improve performance for AIOps pages Improve to not run jobs on cloud yet Enhance on ML metrics anomaly detection logic Added support for more job types including logs, threats, apm, netflow Grafana add support to create and push plugin to download server SMS add support of -Dsms_keepalive_mins=xxx (default 60) to reconnect sms modem periodically Metrics add metric names Perf support &lsquo;data copy&rsquo; feature for missing data Emedge supports -Dcloud_edge=1 when deploy emedge in azure cloud Change -Delastic_snapshot_retain_days default from 30 to 90 Improve on device info mapping to vendors and models Enhance to save elastic queries templates to backend DB instead of just browser cache TOPOLOGY refactor L2 topology analyzer code and unit tests Improve socket agent stability Alarm autoaction - add support for powershell scripts (ps1 extension) Alarm improve alarm elastic indexing to avoid out of memory TSS-vmware monitoring - improve debugging logs Support customized ng.conf for CVS cloud instances (e.g. /mnt/common/etc/cvs-livedemo/ng.conf) Supports set runtime parameters e.g. via &lsquo;run.sh netgain.sac.SetParams logstash_record_filename xxx&rsquo; Logmgmt pop error when log watcher rule expression specified is invalid, during save Do not allow change of data rentention settings in CVS cloud environment. do it via CRM SIEM update elastic detection rules Add SysmonSimulator Enhance NCM to avoid detect as config changes is only line changed is &lsquo;! Last configuration change at&hellip;&rsquo; Implement NCM device testing - extend to support for emedge CV docker image to remove elasticsearch version embeddings for v7.9.3 and v7.16.3 Pingmon optimize memory Dashboards add page for user with admin role to delete other users dashboards Improve on license warning msgs Optimize memory usage by reducing max queue size MomAgent Optimize memory usage by reducing buffer size for FlowBufferPool and NorthboundManager License warnings to MSTeam for SaaS NetGain EM Change Log v11.2.318 build 466 (release date: 13th Sep 2022)
Fixes: Fix Bug_4540_oracle_tablespace_monitor_sql_query_time_out Fix Bug 4614_uptime_monitor_improvement Fix Bug 4617 disk_report_not_showing_all_disks Fix Bug 4620 new request - Sharing of Custom reports - shows the &lsquo;shared&rsquo; indication on web page Fix Bug 4624 historical_graph_long_decimal_point Fix Bug 4625 Security Audit Issues - Vulnerabilities Fix Bug 4630 EM-v11-dashboard display auto refresh stuck - fix full screen issue Fix Bug 4645 v11.2.x | SIEM add mapping feature not able to load Fix Bug 4646 v11-EM-too many opened snmp session Fix Bug 4653 topology_l2_views_cant_edit vmware fix slow monitoring when vmware sdk authentication fails for many monitors Enchancements: Dashboards add page for user with admin role to delete other users dashboards Agent supports auto device discovery when socket agent connects via -Dautodiscover_agent_devices=1 parameter NCM implement NCM device testing - extend to support for emedge NCM add more ncm scripts to support arista and huawei devices Disable config backups by default, unless -Dconfigs_backup=1 is set Elastic enable auto snapshots if -Delastic_repo_path=xxx is defined CVS add redis support (netgain.sac.CvRedis class) CVS skip periodic check license for netgain saas Improve on license warning msgs NetGain EM Change Log v11.2.276 build 416 (release date: 14th Jul 2022)
Fixes: Fix security vulnerability - 2. H-01: Multiple Reflected Cross-Site-Scripting Issues Fix singtel security vulnerability - C-01: Password Stored in Recoverable Format Rating: Critical (9.9) Fix Bug 4589_display_user_in_dashboard Fix Bug 4599 - fix interface history graph units display (e.g. Kbps to Mbps) Fix Bug 4604 - v11.2.x | Threat Rules cannot create new rule Fix Bug 4605 - v11.2.x | Netflow query error, but reports can show data Fix Bug 4606 - v11.2.x | GROK expression hangs when adding 3 or more expressions Arista monitors - fix errorneous discovery Logger supports log report with multi-line query expressions - fix chart display Monitors restore back MemoryStorage monitors for AS400 Logs improve on timeseries data query to use local timezone instead of GMT timezone APM fix real user monitoring transaction display Improve garbage collection of tomcat sessions (auto logout Enchancements: Anomaly detection - enhance job display Elasticsearch - add support for latest v7.17.4 elasticsearch and filebeat Synthetic monitoring - enhance AI anomaly detection monitoring prototype via -Dml=1 vmware refactor vmware monitors code Monitors enhance BgpPeer monitor Supports 90/95/98 thpercentile methods in complex search expressions NCM longer timeout to handle cisco configurations taking a long time to pull NCM improves device mapping for cisco 9200 switches NCM improve on NCM device table display to display last backup size NCM update last backup time, even if config pulled did not change NetGain EM Change Log v11.2.236 build 368 (release date: 20th May 2022)
Fixes: Fix Bug_4463_cv_ncm_bulk_modify_issue_gna Fix Bug_4489_my_town_cisco_wireless_client_monitor_with_report_index_at_cv - set the index max results to 50000 (bigger) Fix Bug 4569 - [change request]SIEM dashboard enable the table format Fix Bug 4571 - [change request]v11-SIEM- enable to customize the SIEM and log watch alarm to Fix Bug 4579 - v11.2.x Archimon | NCM Scheduler not working - fixed by using purely cron expressions SNMP v3 rename the GUI input fields properly to auth protocol, auth password, priv protocol and priv password metricbeat improve MO tagging for kubernetes restapi fix helper message Perf - Fix critical bug of sometimes perf counter index cannot be found Perf - Fix data intervals for longer time periods when query history perf data NCM - Fix devices table sorting NCM - Fix schedule trigger issue (sleep interval too long, so might missed the actual second specified in cron expression Notify - Add support for fixed smtp server via -Dsmtp_fixed_&hellip;.=xx Logs - Fix sometimes cannot find logs belonging to previous day log index, due to GMT timezone Enchancements: Add support for &lsquo;searchTagsInAncestors&rsquo; - change to use boolean instead of string snmpv3 enhance to support new authentication protocols HMAC128SHA224 HMAC192SHA256 HMAC256SHA384 HMAC384SHA512 emedge trim package to make it smaller in size for the install zip file Add Objects to datasource support Perf - Optimize perf history data query to query only needed counters, and not all counters everytime Perf - Improve history data query for perf history data NCM - Make the pull ncm config handler at MomAgent (emedge) side async to improve efficiency NCM - Make default schedule backup as daily at 3am NCM - Add schedule loggings shown on GUI and also skipped saving to DB if there are not changes detected JWT - Add jwt expiry check and also api for refresh token NetGain EM Change Log v11.2.201 build 318 (release date: 31st March 2022)
Fixes: Fix Bug_4423_Alarm_Annotation_Cannot_Be_Saved Fix Bug_4423_Alarm_Annotation_Cannot_Be_Saved Fix Bug 4498 - Alibaba Cloud Voice Call - fix to use user&rsquo;s mobile number when notifying alicloud Fix Bug 4498 - Alibaba Cloud Voice Call - fix critical bug in sendSms Fix Bug 4498 - Alibaba Cloud Voice Call - fix critical bug in sendTts Fix Bug 4525 - v11-EM generic indice does not restore users&rsquo; related info Fix Bug_4541_Unable_To_Generate_Network_Bandwidth_Report Fix Bug_4550 - CVS-emedge remote upgrade failed - change to use restart and run install script method for zip file (besides tar.gz file) too Fix Bug_4552_Notify_Now_Function_Not_Able_To_Select_User Fix Bug_4554_Temporarily_Ignore_VM_Groups_When_Powered_off Netflow fix error in parsing flow destination geo attributes Logs fix critical bug in log saving Logmgmt fix log archiver directory missing issue sms simplify netgain/notify/SmsSender and fix sms retries sms add support for -Dsms_flush=0 and -Dsms_flowcontrol=0 for sms modem code sms refactor SmsSender code to remove need for server and port parameter agent fixed socket agent ObjectOutputStream memory leak map hide all customized logical map right menu shortcuts and make available only via sys property logs fix bug in checking daily log limits Enchancements: vmware improve on VmwareVmNic monitoring Added synthetic monitoring cvs enhance period samba mount for CVS instances metricbeat enhance metricbeat recording monitor enhance websphere monitors to NOT require keystore or truststore per host bug_4532_poly_finance_inspur_storage_monitoring_gna bug_4481_peplink_device_speedfusion_convert_units_gna NetGain EM Change Log v11.2.164 build 258 (release date: 27th Febuary 2022)
Fixes: Fix Bug_4131_Standard_Report_Template_Issue_With_Adding_Objects Fix Bug_4423_Alarm_Annotation_Cannot_Be_Saved Fix Bug_4496_add_more_monitor_values_in_custom_script Fix Bug_4503_after_creating_global_template_agent_monitor_missing Fix Bug_4505_Service_Alarms_Enhancement Fix Bug 4515 - NetGain Agent - SSLHandshakeException - TSS Fix Bug_4516_Userdefined_Report_Date_Format Fix Bug_4518_ram_total_value_not_tally Fix Bug_4522_SIEM_ThreatRules_Datatables_Issue Fix V11_Bug_Issue_With_Device_Excel_Import cv fix samba mount issue Fix emedge dependencies on elasticsearch jar files reports fix report document template Enchancements: filebeat shows support filebeat versions for mappings filebeat add support for filebeat v7.16.3 templates and ingest pipelines, and emedge filebeat sidecar to v7.16.3 saas improve to be able to download iossd.log (internal logs) even in cloud deploy mode SIEM update elastic detection rules monitor show refreshing when loading history data react-dashboards enhance react dashboards integrations NetGain EM Change Log v11.2.142 build 227 (release date: 13th January 2022)
Fixes: Fix network_ping_monitor_shows_script_error Fix siem improve threat rules display Fix bug_log4j_vulnerability_fix_2.17 emedge fix bug of netflow data not forwarded at emedge Fix ncm_snmpv3_not_working_issue Fix Bug 4329 trace route report Fix ncm_backup_need_another_password monitors refactor netgain/monitors/ipsvc/Url Enhancements: elasticsearch update code to support elasticsearch v7.16.2 update year 2021 to 2022 in all copyright strings restapi improve on new gen apis NetGain EM Change Log v11.2.142 build 227 (release date: 13th January 2022)
Fixes: Fix network_ping_monitor_shows_script_error Fix siem improve threat rules display Fix bug_log4j_vulnerability_fix_2.17 emedge fix bug of netflow data not forwarded at emedge Fix ncm_snmpv3_not_working_issue Fix Bug 4329 trace route report Fix ncm_backup_need_another_password monitors refactor netgain/monitors/ipsvc/Url Enhancements: elasticsearch update code to support elasticsearch v7.16.2 update year 2021 to 2022 in all copyright strings restapi improve on new gen apis NetGain EM Change Log v11.2.121 build 213 (release date: 23rd December 2021)
Fixes: Fix cannot_create_apache_monitor_after_discovery Fix Metrics_Types_Alignment_Issue Duplicate_Dashboard_Issue Linux_agent_not_stopping log4j - fix log4j zero-day vulnerability - CVE-2021-44228,CVE-2021-45046 Dell switches not able to pull config ncm Cisco_not_able_to_pull_in_full Fix issue_With_Integrations_Alignment Fix issue_With_Device_View_Object_Deletion Various SaaS issues and enhancements Enhancements: NCM_to_add_support_palo_alto_device Add NCM_huawei_device_6300 Add_symbol_host_description_in_notify_rules NetGain EM Change Log v11.2.67 build 121 (release date: 28th September 2021)
Fixes: Biz_View_Issue_When_Mo_Not_Found notify fix notification issues when alarm count changes before sending out the first notification requests User_Data_Migration_Issue_With_Latest_Version googlemap displays a clean map with POIs monitors add back url monitor counters to avoid warning logs monitors fixed Alcatel Fan monitor perf counter names Issue_With_Add_Widget_Screen_Not_Scrollable ncm_snmpv3_device_import_failed Special_Character_In_Global_Rules_Exported_Excel security improve display of API token for user in user view Bug_4294_APM_Watcher_table_Cursor_Formatting dashboard implement support to plot history graphs for multiple objects of the same type dashboard feature to support add metrics view to dashboard logs improve search result to use aggregate labels instead of field name, if available monitor gui - update and improve the status text display for monitors in monitor list view topo remove icons from network topo view, so that screencapture works GUI remove some javascript warnings during initial page load netflow flows analyzer blank graph issue monitor reimplement perf forecast function in monitor history view netflow add/remove filter buttons for IP columns in flows table logs improve saving of queries to include filter settings too Enhancements: metricbeat enhance support for more metricbeat system metrics - refactor code NetGain EM Change Log 11.1.299 build 33 (release date: 27th June 2021)
Fixes: Issue with loading pdf reports in cvs instances Adhoc reports to show heading on charts with multiple counters IPMI emedge_latest_version_cannot_discover_monitor Monitor make device dashboard show positive value in ylabels for traffic graphs User defined reports table to show only selected counters Tomcat change shutdown port from 8005 to 8006 Fix 2FA login with google captcha enabled and also refactor Table_Canvas_is_Not_Resizing_according_To_Widget_Height Fix bug of MO corruption when moving/copying MOs tree Enhancements: APM slight GUI improvements Logs improves logs display and search UX Supports export/import MO tree via GUI - enhancements Add DNS hostname when adding device, if hostname is not found from snmp NetGain EM Change Log v11.1.240 build 581 (release date: 27th April 2021)
Fixes: Issue with creating new dashboards for non admin users Fix capacity prediction issues Fix metric objects sorting issue Fix netlow search and reports toggle fields Fix device import issue Time range select by default not showing any values APM transaction span display issue when first span is too long Role add topo view when no views Modal close button shows double icons Too many decimal points for value in adhoc report Error saving global rules Horizontal Privelege Escalation VAPT fix Path Traversal VAPT fix Enhancements: Added TalariaX notification integration Enhance SaasMonitor NetGain EM Change Log v11.1.203 build 522 (release date: 27th February 2021)
Fixes: Fix monitor status list screen flickering issue Fix mobile web view bug Use TLS1.2 and disable weak Ciphers to avoid TLS ROBOT Vulnerability Fixed checkboxes in alarm page issue and alarms dropdown issue on page load SIEM Dashboard display error when query string contains as &lsquo;xxx&rsquo; Enhancements: Implement logs compliance reports NetGain EM Change Log v11.1.185 build 493 (release date: 29th January 2021)
Fixes: Fix netflow recording Fix CVS empty site showing disabled status Fix netflow application deletion issue Fix orphan mos deletion Enhancements: Improves on logon screen css Prototype changes in alicloud integration NetGain EM Change Log v11.1.175 build 420 (release date: 28th December 2020)
Fixes: Fix critical bug of MOManger.deleteMO only deleting immediate child MOs and not grandchild MOs Fix metrics report batch delivery not able to schedule delivery Fix adding business view in role management Fix not able to create monitor after auto discover Do not annotate problem when auto discharging Fix critical issue of MO not delete at edge when delete MO at CV Enhancements: Add MacroSan new monitors Add BizView SLA batch reports Enhance batch reports customization Enhance agent to support IPv6 Implemented Arista switch optical sensors Improve the monitor history view page Improve on capacity planning estimation NetGain EM Release Notes v11.1.160 build 408 (release date: 27th Nov 2020)
Fixes: Mobile view formatting Fix Interface monitor Input Output Utilization Units Fix APM transactions query wrong (not based on time range) Fix APM transaction filter search Fix agent make no rmi as default true. Make socket agent method as default. Fix critical issue of socket agent connection not secure. Fix issue with saving new assets Fix critical snmpv3 trap receive Fix SNMP trap varbind ingest issue Fix 2fa screen formatting Fix logical map display severity colour for normal status Fix monitor graph display issue SIEM alarms export Logical map google map case sensitive comparision with new map Monitor object jump links Time range select problems for beats indexs (GMT-based indices) Logs_summary dashboard click issue Threat detections enable/disable feature Fix opsgenie pager duty issues Enhancements: Improve logs and apm dashboard widgets Add APM widgets Allow auto APM drill down based on URL hash Improve on dashboards for logs widgets Add support for engine ID in SNMP USM Users edit Add PDF support for log reports delivery Support running emedge as a windows service Add AliCloud Notification mechanism Implement current alarms export to excel button Add ServiceNow notification integration NetGain EM Change Log v11.1.141 build 396 (release date: 27th October 2020)
Fixes: Fix ApmWatcher bug that it does not generate alarm Fix input output utilization units Fix primary menu expand bug Fix issue with saving new assets Enhancements: Improve elastic query format to include sorting direction Add default monitoring dashboard Enhance alarm views Update default SIEM security threat dashboard Add APM response time dashboard widget Improve log summary dashboard widget Add APM transaction mapper Add selectable colors for dashboard Enhanced download option for monitor history graph Improve on logs reports to indicate no data Enhance logmgmt to show elasticsearch ingest time performance on web GUI Add netflow histogram NetGain EM Change Log v11.1.118 build 361 (release date: 28th September 2020)
Fixes: Fix bug of enable/disable mapping rules due to multiple transformers NetGain alert box dark theme formatting Fix history data issue with moving devices Fix screen overflow when expandable primary menu is clicked Fix bug of role users not saved when users added to role Fix deleteMO issue when parent MO is not found Enhancements: Improve metric reports performance Enhance multiple metrics for combined reports Enhance metric reports to add in dashboard Add top-n report prototypes Prototype SIEM compliance reports Enhance syslog collector to handle invalid/TCP format NetGain EM Change Log v11.1.90 build 322 (release date: 27th August 2020)
Fixes: Removed obsoleted cisco process monitors Fix LogStashProxy for beats logs collection Do not prompt for CV IP, if &lsquo;cv&rsquo; environment is already set Forwards netflow traffic from edge to CV Fixed EV multiple IP range discovery in CV Dell switch not able to monitor Fix issue with progress bar while deleting devices Fix DNS resolve hostnames in netflow, and logs Fix Netflow: Report download: When there is no data, downloafd report is throwing 404 exception Fix bug for snmp v3 authNoPriv security level Fix snmp v3 engine ID inconsistencies Force need for JRE 1.8.0_162 and above, to support AES192/256 encryption Enhancements: Add support for remote selenium web testing Make HTTP forwards to HTTPS by default Add notify method for &lsquo;Wechat&rsquo; messenging app Add notify method for &lsquo;Telegram&rsquo; messenging app Enhance SIEM hunt manager to avoid reloading default rules all the time Improve on monitors discovery Add export feature for CiscoPSIRT Add notify method: Microsoft Teams Enhance apm transaction waterfall display Auto CI build: v11.1.73b300 (created on Tue Aug 4 03:11:49 SGT 2020) NetGain EM Change Log v11.1.62 build 289 (release date: 27th July 2020)
Fixes: Fixed bugs in forwarding trap from Edge to CV SIEM netflow reports creating duplicates Home wrong warning color SIEM NetFlow reports saving empty Log analytics doesn’t show the date when opted for one month Update log4j to v2.13.3 Fix perf data display column unit label issue Fix logo issue in dark mode Fix table scroll issue Fix SSL issues in CSV: Edge to CV connection Fix for MOs loading Fix status count not accurate Alarms click details link of any alarm pops up the details with Close button is hidden Fix left hand side menu, when hover mouse over the icon, there is no menu item displayed Enhancements: Implemented Snmp4JTrapListener to replace NgSnmpTrapListener (enabled using -Dsnmp4j_trap_listener=1) Include windows event logs as part of sample logs in product Add threat intelligence: talosintelligence Enhance on log reports Snmp4j library update Improve on APM transaction display Add optical power monitor for H3C switches Add sangfo wac monitors Make perf history chart types selectable `}),e.add({id:27,href:"/modules/aiops/",title:"AIOps",content:`AIOps with NetGain NetGain leverages advanced AI and machine learning technologies to revolutionize network management through intelligent monitoring and proactive anomaly detection. Our platform employs sophisticated machine learning algorithms to continuously analyze system metrics, enabling the identification of unusual or abnormal conditions before they escalate into critical issues. This AI-driven approach ensures that your IT infrastructure remains resilient, with real-time alerts and insights that keep you one step ahead.
Intelligent Anomaly Detection NetGain’s Anomaly Detection capabilities are designed to pinpoint patterns and data points that deviate from expected norms within your datasets. By applying machine learning models tailored to your unique environment, we can detect subtle anomalies that might otherwise go unnoticed, providing you with actionable insights to address potential issues early.
Precise Outlier Detection With NetGain’s Outlier Detection, we go beyond traditional monitoring to identify data points that are significantly different from the rest of the dataset. These outliers, which could indicate potential threats or irregularities, are flagged by our system, allowing you to take swift action to mitigate risks and ensure optimal performance across your network.
Same steps apply for both Anomaly and Outlier Detection. Basic information includes:
Job Name Description Type Details Add Job Click on &lt;Metrics&gt;,&lt;Metrics&gt;&lt;Objects&gt; then &lt;Device View&gt;.
Select the sites and the Object that you want to create ML (Machine Learning) Jobs.
Copy the path.
Click on to add Job.
Once clicked, a panel will appear to add Job.
Paste the copied path into the Parent FDN.
Input the remaining information (For Anomaly Detection).
Information includes:
Name: name for your job Description: description of the job Job Type: type of job (Select Metrics, other types are seldom used) Enabled: a toggle to enable or disable the job Seasonality: to account for regular, predictable patterns in the data Metrics name: the metric to be monitored Parent FDN: path of the job Reference Period: the time period over which data should be used to generate a baseline for anomaly detection Bounds: set criteria to trigger alerts Generate alarm: define the criteria of alarm (For Outlier Detection)
Information includes:
Name: name of your job Description: description of the job Job Type: type of job (Select Metrics, other types are seldom used) Enabled: a toggle to enable or disable the job Seasonality: to account for regular predictable patterns in the data Metrics name: the metric to be monitored Parent FDN: path of the Job Reference Period: the time period over which data should be used to generate a baseline for anomaly detection Sensitivity (1-100): determines how easily the system identifies data points as outliers Generate alarm: define the criteria for alarm Click on to create the job.
Successful creation of Job.
Edit Job Hover over the job and click on to edit the information of the Job.
Delete Job Hover over the job and click on to delete the job.
View Details of Job Click on the Job Name.
Once clicked, the page will navigate to the dedicated page of the selected Job.
Click on the to further view details of the Job.
Once clicked, the page will navigate to the dedicated page for further viewing of details of the Job (For Anomaly Detection).
Once anomalies are detected in the graph, it will trigger the alarms.
Click on &lt;Alerts&gt;,&lt;Alerts&gt; then &lt;Current&gt; and select Anomaly Alarms to view the triggered alarms.
(For Outlier Detection)
Adjust the sensitivity to control how easily the system identifies data points as outliers.
`}),e.add({id:28,href:"/modules/cmdb/network_config/",title:"Network Config",content:`Network Configuration Management (cmdb) is a broad term for the organization and management of a computer network. All types of networks, including local area networks, wireless networks and virtual networks, need some element of maintenance, modification, repair, and general monitoring. cmdb involves collecting different information about hardware devices, software programs and other elements of the network in order to support administration and troubleshooting.
NetGain Systems cmdb is used primarily to backup and restore the configuration of the network and devices.
Automatic backup of the network device configuration (pull config) and restoration of the configuration back to devices (push config), with auto scheduling capability. Allows for bulk operations (not device by device) Lets you compare configuration changes (eg, current versus history (yesterday, last week, etc.). Supports devices from multiple vendors (eg, Cisco, H3C, Huawei, Juniper, etc.) To access cmdb, click on &lt;CMDB&gt; at the Left Navigation Bar, then click on &lt;Network Config&gt; at the Top Navigation Bar.
Adding Devices to cmdb Device Configuration Management Bulk Operations Configuration Templates Scheduling Configuration Backup Changes `}),e.add({id:29,href:"/posts/",title:"News",content:""}),e.add({id:30,href:"/modules/alerts/",title:"Alerts",content:`This section documents the alerts and notifications options in the software, and the information on settings.
Monitor Alerts Current Alerts History Alerts Alert Policies Alert Categories Alert Correlation Action Triggers Alert Notifications Notification Rules Notification Email Other Alert Notification Settings Integration with 3rd Party Ticketing Apps `}),e.add({id:31,href:"/installation/",title:"Installation",content:`Installations related will be available here.
`}),e.add({id:32,href:"/administrative/sysadmin/",title:"Sys Admin & Tools",content:`This section documents the systems administration functions and the tools provided to help the administrator.
Admin Tools `}),e.add({id:33,href:"/modules/",title:"Modules",content:""}),e.add({id:34,href:"/administrative/",title:"Adminstrative",content:""}),e.add({id:35,href:"/news/",title:"News",content:`Product realted news will be available here.
`}),e.add({id:36,href:"/security/",title:"Security",content:`We care about security. If you have any questions, or encounter any issues, please contact us at security@netgain-systems.com. If you believe you’ve discovered a bug in NetGain Systems product(s) security, please get in touch at security@netgain-systems.com and we will get back to you within 24 hours, and usually earlier. We request that you not publicly disclose the issue until we have had a chance to address it.
Security Fixes Below is a list of new vulnerabilities (include OSs and libraries) addressed in latest product release (v11.1.300)
CVE-1999-0517- SNMP Agent Default Community Name (public) CVE-2008-5161 - SSH Server CBC Mode Ciphers Enabled CVE-2012-5081 - TLS ROBOT Vulnerability Detected (JAVA) CVE-2014-3566 - POODLE: SSLv3 CVE-2015-4000 - SSL/TLS Diffie-Hellman Modulus &lt;= 1024 Bits (Logjam) CVE-2016-2183 - Birthday attacks against TLS ciphers with 64bit block size vulnerability (Sweet32) CVE-2020-11022 - JQuery 1.2 &lt; 3.5.0 Multiple XSS CVE-2020-11023 - JQuery 1.2 &lt; 3.5.0 Multiple XSS CVE-2020-13943 - Apache Tomcat HTTP/2 Request mix-up CVE-2020-14750 - Oracle WebLogic Server CVE-2020-17527 - Apache Tomcat HTTP/2 Request header mix-up CVE-2020-17530 - Apache Struts 2 allow an attacker to perform remote code execution on a vulnerable system CVE-2020-1971 - OpenSSL exploits to cause a Denial of Service condition CVE-2020-26217 - XStream Remote Code Execution Vulnerability CWE-16 OWASP-A6 - Cookie Without HTTPOnly Flag set CWE-200 CWE-213 OWASP-A6 - Web server &amp; Framework Version Identification CWE-284 - Insecure Flash Cross Domain Policy CWE-308 OWASP-A2 - Use of Single-factor Authentication CWE-326 CWE-327 CWE-210 OWASP-A3 - Inadequate Transport Layer Protection CWE-326 CWE-327 CWE-310 OWASP-A3 - Use of Broken or Risky Cryptographic Algorithms CWE-384 - Mulitiple Login Sessions CWE-523 CWE-693 OWASP-A6 - HTTP String Transport Security Not Enforced CWE-525 OWASP-A6 - Lack of Client-Side Cache control CWE-525 - Sensitive Field Forms Autocomplete CWE-613 OWASP-A7 - Weak Idle Timeout CWE-645 OWASP-A2 - Overly Restrictive Lockout Mechanism CWE-693 CWE016 OWASP-A6 - X-XSS-Protection Header not implemented CWE-693 - Framable response Nessus Plugin ID 12085 - Apache Tomcat Default Files Nessus Plugin ID 51192 - SSL Certificate Cannot Be Trusted Nessus Plugin ID 57582 - SSL Self-Signed Certificate Nessus Plugin ID 76474 - SNMP &lsquo;GETBULK&rsquo; Reflection DDoS OWASP-A3 - Client-initiated Renegotiation Supported OWASP-A9 - Outdated Components with known Vulnerabilities `}),e.add({id:37,href:"/troubleshooting_guides/",title:"Troubleshooting Guide",content:`Troubleshooting Related will be available here.
`}),e.add({id:38,href:"/modules/dashboards_2.0/",title:"Dashboard 2.0",content:`Dashboard 2.0 is your go-to tool for visualizing and tracking key performance indicators (KPIs), metrics, and critical data points. It offers a powerful and intuitive interface to monitor your most important metrics in real-time, helping you make data-driven decisions with confidence. The dashboard engine is powered by Grafana.
To explore the full range of features available in Grafana, which powers Dashboard 2.0, click here here to learn more
Home This Home tab provides an overview of the current status and performance of your NetGain EM. Basic information includes:
Sites:number of monitored sites Devices:number of monitored devices Monitors:number of monitoring checks being performed Critical Status: total number of critical issues from the sites Major Status:total number of major issues from the sites Minor Status :total number of minor issues from the sites Warning Status:total number of warnings issues from the sites Alarms Summary:severity and count of various issues Logs volume:a chart display the volume of application and system logs over time Share dashboard/panel Click onto to share dashboard/panel
Once clicked,the page will navigate to the sharing options page.
This page provides the sharing option for Link.Internal sharing only as log in is required.
Information includes:
Lock time range:transforms the current relative time range into an absolute time range for the shared link Theme:Choose between different visual themes for the shared links Shorten URL: create a shortened version of the link for easier sharing Link URL:Displays the generatede link that can be copied and shared This page provides the sharing option for Snapshot.External party can also view the snapshot.
Information includes
Snapshot name:Name of your snapshot Expire:snapshot&rsquo;s availability period Timeout:how duration for which the system will wait for the dashboard metrics to be collected before finalizing the snapshot This page provides the sharing option for Export
Information includes:
Export for sharing externally:create a file that contains the entiree dashboard&rsquo;s conifguration and data Add Panel Click on to add panel in dashboard View Information Click on to view the information in NetGain EM.
Edit information Click onto the name of the panel you wish to edit a drop down list will pop out
Selecting Status Click onto the Status tab to reveal the details `}),e.add({id:39,href:"/modules/dashboards_2.0/dashboards2/",title:"Dashboard 2.0",content:`Dashboard 2.0 is your go-to tool for visualizing and tracking key performance indicators (KPIs), metrics, and critical data points. It offers a powerful and intuitive interface to monitor your most important metrics in real-time, helping you make data-driven decisions with confidence.
To explore the full range of features available in Grafana, which powers Dashboard 2.0, click here here to learn more
Home This Home tab provides an overview of the current status and performance of your NetGain EM. Basic information includes:
Sites:number of monitored sites Devices:number of monitored devices Monitors:number of monitoring checks being performed Critical Status: total number of critical issues from the sites Major Status:total number of major issues from the sites Minor Status :total number of minor issues from the sites Warning Status:total number of warnings issues from the sites Alarms Summary:severity and count of various issues Logs volume:a chart display the volume of application and system logs over time Share dashboard/panel Click onto to share dashboard/panel
Once clicked,the page will navigate to the sharing options page.
This page provides the sharing option for Link.Internal sharing only as log in is required.
Information includes:
Lock time range:transforms the current relative time range into an absolute time range for the shared link Theme:Choose between different visual themes for the shared links Shorten URL: create a shortened version of the link for easier sharing Link URL:Displays the generatede link that can be copied and shared This page provides the sharing option for Snapshot.External party can also view the snapshot.
Information includes
Snapshot name:Name of your snapshot Expire:snapshot&rsquo;s availability period Timeout:how duration for which the system will wait for the dashboard metrics to be collected before finalizing the snapshot This page provides the sharing option for Export
Information includes:
Export for sharing externally:create a file that contains the entiree dashboard&rsquo;s conifguration and data Add Panel Click on to add panel in dashboard View Information Click on to view the information in NetGain EM.
Edit information Click onto the name of the panel you wish to edit a drop down list will pop out
Selecting Status Click onto the Status tab to reveal the details `}),e.add({id:40,href:"/modules/home/maps/",title:"Maps",content:`Maps provides a pictorial representation of the devices that are being monitored, showing their status and their location. This allows organizations to better understand and manage their devices in a specific location or network.
The Maps function can be accessed by clicking on &lt;Home&gt; in the Left Navigation Bar, then &lt;Maps&gt; in the Top Navigation Bar.
Logical Map Geographical Map Layer 2 and 3 Network Maps `}),e.add({id:41,href:"/modules/home/business_views/",title:"Business Views",content:`The NetGain Systems console supports Business View, which is an easy-to-use administrative function that integrates all IT components into one comprehensive framework, transforming the IT infrastructure into a business service.
Business View helps overcome problems in developing an effective Service Level Agreement (SLA), allowing service quality, monitoring methods and report generation parameters to be set. Services can include network interfaces, system performance, databases, web services and standard TCP/UDP ports.
Business View sets the framework for using an XML-based, object-oriented model that defines:
Client services Service dependencies Service monitoring SLA rules and threshold parameters for service monitoring A typical business framework follows, where an organization can own many services and sub-services, with each relying on one or more monitors. Each monitor has a series of SLA standards and threshold parameters.
Adding New BizViews Adding Services to BizView Adding a New Service Dependency `}),e.add({id:42,href:"/modules/home/dashboards/",title:"Dashboards",content:`Dashboards are used to provide the status of the infrastructure at a view. Dashboards can be added and configured to what the user needs.
NetGain provides 2 flavors of dashboards
Default built-in dashboards Grafana-based dashboards (namely Dashboard 2.0) Dashboards 2.0 For more info on this, refer to here
Default dashboards The default dashboard provides an overview of the status of the managed devices, including:
Total number of Business Services, Devices, and Monitors Number of critical SLAs, Business, Devices, and Monitors Monitor Status Current Alarms Device Group Status NetGain Systems Monitor Engine Status Adding a New Dashboard Adding Widgets to the Dashboard Widget Details Editing Widgets Saving Dashboard Deleting Dashboard Cloning a Dashboard `}),e.add({id:43,href:"/modules/metrics/metricsprofile/",title:"Metrics Profile",content:`Profile is used to configure and manage the settings required to connect to a database.
Click on &lt;Create&gt; to create a profile.
Once clicked, the page will navigate to the dedicated page for creation of profile.
Input the information.
Information includes:
Profile name: name for the profile Description: description of the profile Type: specifies the database management system type Username: username to access the database Password: password to access the database Successful creation of profile.
Click on to edit information of profile.
Click on to delete the profile.
`}),e.add({id:44,href:"/modules/alerts/notificationemail/",title:"Notification Email",content:`Email is used for configuring and testing emails alerts for the system, allowing users to receive notifications via email.
The ‘Email’ tab is showing a section where users can set up email notifications using a pre-defined SMTP server.
Input valid email address and click on &lt;Send testing mail&gt;.
Check for notification from your email.
`}),e.add({id:45,href:"/administrative/admin/accounts/accesscontrol/",title:"Access Control",content:`This module defines the access control rules to only grant the access for the authorized users.
On the Top Navigation Bar, click on &lt;Accounts&gt; - &lt;Access Control&gt;
To create new rule, click on &lt;+ Add rule&gt;
Enter the information
Name - name of this rule Users filter – only specified users will be granted access Allowed hosts – only specified host will be granted access Once finished, click on to save the rule.
Rules will be displayed in the access control list as below:
`}),e.add({id:46,href:"/administrative/admin/accounts/",title:"Accounts",content:`The administrator will create and manage accounts for the user.
The administrator can assign a client IP address (or IP address segment) for each user, enhancing security as an authorized user would require a client IP address as well as a username and password to successfully log in.
Accounts consists of four modules:
Creation and management of Roles Creation and management of Users Access Control rules Change of My Profile `}),e.add({id:47,href:"/modules/alerts/actiontriggers/",title:"Action Triggers",content:`Action Trigger alarms can be configured to be executed when an alarm is generated. The auto-actions that match the filtering criteria will be invoked for each alarm generated.
`}),e.add({id:48,href:"/modules/siem/log_analytics/reports/adhoc/",title:"Ad Hoc",content:`Click on &lt;AdHoc&gt; to access the AdHoc reports.
By &lt;Default&gt; AdHoc will contain report template according to the following topics.
Windows logon failed Authentications failures Network Conversations Windows Account Changes Click on each report to create the report. The report will show in the report area.
AdHoc report sub menu + Add new report – To add a new report
- Select time range of report.
Auto delivery – To create auto delivery report setting
Download – To download report
Edit – To edit report
`}),e.add({id:49,href:"/modules/siem/reports/adhoc/",title:"Ad Hoc",content:`Click on &lt;AdHoc&gt; to access the AdHoc reports.
By &lt;Default&gt; AdHoc will contain report template according to the following topics.
Windows logon failed Authentications failures Network Conversations Windows Account Changes Click on each report to create the report. The report will show in the report area.
AdHoc report sub menu + Add new report – To add a new report
- Select time range of report.
Auto delivery – To create auto delivery report setting
Download – To download report
Edit – To edit report
`}),e.add({id:50,href:"/modules/home/dashboards/adddashboard/",title:"Adding a New Dashboard",content:`You can add a new dashboard to the dashboard page and customize it to your requirements.
Click on &lt;+ Add dashboard&gt; on the right hand side of the top menu
Provide a name and group name for the new dashboard, and click on &lt;Create&gt;:
`}),e.add({id:51,href:"/modules/home/business_views/servicedependency/",title:"Adding a New Service Dependency",content:`To add a service dependency under the service, select the service and click on &lt;Edit&gt;. Then click on to add a service dependency
Select the monitor or monitor group from the device view, click on to add it to the right hand side selected list. Click on &lt;Select&gt; to add the service dependency.
You should see a screen showing the new service dependency if it was added successfully.
`}),e.add({id:52,href:"/modules/cmdb/addingdevices/",title:"Adding Devices to cmdb",content:`Click on &lt;Devices&gt; at the top menu of &lt;Network Config&gt;, then click on &lt;Discover&gt; to find network devices.
Fill in the required details to discover the devices, then click &lt;Discover&gt;.
After a while, network devices found will be shown. Select the devices to add to cmdb, then click on &lt;+ Add selected devices&gt;.
`}),e.add({id:53,href:"/modules/home/business_views/addbizview/",title:"Adding New BizViews",content:`Click on &lt;Metrics&gt; at the Left Navigation Bar, then click on &lt;Metrics&gt; at the Top Navigation Bar. Click on &lt;Objects&gt; in the left side of the top menu, then click on &lt;Business view&gt;, and click on &lt;Edit&gt;.
Click on and input the Business name. Click &lt;Add&gt;. to add a new BizView.
`}),e.add({id:54,href:"/modules/home/business_views/addservice/",title:"Adding Services to BizView",content:`To add a service under a business, select the business under &lt;Business view&gt; and click on &lt;Edit&gt;. Then click on to add a service.
Input the name of the new service then click .
`}),e.add({id:55,href:"/modules/home/dashboards/addwidget/",title:"Adding Widgets to the Dashboard",content:`Click on the &lt;Add widget &gt; button at the center of the screen to add widgets.
Add the widgets appropriate to the view and information you would like to have for the dashboard you are creating. Here is a summary of the widgets currently available by category:
Logs: APM: NetFlow: Monitor (Metrics): Alarm (Alerts): Bizviews: Maps: Tools: `}),e.add({id:56,href:"/administrative/admin/",title:"Admin",content:`The Admin Module is designed to empower administrators with comprehensive management capabilities for the NetGain Systems Infrastructure Monitoring system. Accessible exclusively to users with the admin role, this module offers a robust set of tools to effectively oversee and configure your monitoring environment.
The Admin Module includes the following key components:
Accounts: Manage user accounts, roles, profile updates, and access control configurations. Jobs: Schedule and manage tasks with the built-in task scheduler. Systems: Monitor system status, manage licenses, and configure settings, shutdowns, and defined REST APIs. Elasticsearch: Oversee Elasticsearch indices, shard and node statuses, and manage backups. Logs: Access and review logs for the Infrastructure Monitoring System. To navigate to the Admin module, choose the last icon from the Left navigation bar, as shown in below:
Account Jobs System ElasticSearch Logs `}),e.add({id:57,href:"/modules/apm/agent/",title:"Agent",content:`Agents are software components used to collect data for monitoring and management purposes.
The ‘Agents’ tab displays an overview of the performance and transaction metrics for services monitored by the agents.
Basic information includes:
Service Name Transaction Transactions per minute (tpm) Transactions per day (tpd) Spans Click on to refresh the displayed data.
Click on to simulate transactions for testing purposes.
Once clicked, the page will navigate to the dedicated page for testing.
Click on to load sample data for testing.
Click on to delete all data in the system.
Deploy Agent The ‘Deploy Agent’ tab provides an overview and instructions for deploying monitoring agents for different programming environments.
Different environments include:
Java .NET Real User Monitoring Java Agent Click on to view Java’s overview and quick start guide.
Information includes:
Overview: purpose and functionality of Java Agent Quick start guide: instructions to download Java Agent .NET Agent Click on to view .NET’s overview and quick start guide.
Information includes:
Overview: purpose and functionality of .NET Agent Quick start guide: instructions to download .NET Agent Real User Monitoring Agent Click on to view Real User Monitoring’s overview and quick start guide.
Information includes:
Overview: purpose and functionality of Real User Monitoring Agent Quick start guide: instructions to download Real User Monitoring Agent Add Transaction Mapping To get the transaction details, click on &lt;APM&gt;, &lt;APM&gt; then &lt;Services&gt;.
Click on the service name to further view the details of the service.
Once clicked, the page will navigate to the dedicated page of the selected service.
This page provides an in-depth look at the performance and health of the service.
Click on the transaction name to further view details of the transaction.
Once clicked, the page will navigate to the dedicated page of the selected transaction.
Copy the transaction details.
Paste into Original Transaction Name and input Mapped label.
Click .
Successful Addition of Mapping.
`}),e.add({id:58,href:"/administrative/tools/agentdownload/",title:"Agent Download",content:`Agent Download is used to guide users through the process of installing the NetGain Agent on different operating systems, providing instructions and necessary download links.
The ‘Download’ tab displays the installation instructions for downloading and installing the NetGain Agent on both Windows and Unix/Linux platforms.
Test Test is used to run various diagnostic and setup scripts on target machines where the NetGain Agent is installed or needs to be installed.
The ‘Test’ tab displays the options for testing scripts related to the NetGain Agent.
Information includes:
IP: a dropdown menu to choose test script and a field to enter IP address Test: execute the selected script Clear output: remove previous results from display Clear scripts cache: reset and clear the cache Scripts Scripts are used to execute various tasks on target machines related to system management and database operations.
The ‘Scripts’ tab displays options for running scripts related to the NetGain Agent.
Information includes:
IP: input IP address of the machine System: tasks like performance monitoring, resource allocation, or system health checks Information: tasks like database backups, performance tuning, or querying database statistics `}),e.add({id:59,href:"/troubleshooting_guides/FAQ/agent_management/",title:"Agent Management",content:`How to upgrade NetGain Agent for Linux Stop NetGain Agent service.
systemctl stop netgain OR cd installation_directory/netgain/bin/ ./agent_stop.sh Backup netgain agent folder.
cd installation_directory (may vary depending on installation) cp -r installation_directory/netgain ./netgain_v12.2.214_240627 Download netgain agent to preferred installation directory.
Unzip/Untar new agent.
cd installation_directory tar -xzvf NetGain-Agent-Nix-v12.2.337.tar.gz Configure agent.
cd installation_directory/netgain/bin ./agent_setup.sh. Follow the instructions prompted NOTES: Before agent_setup, use Java path command: which java to know your java directory Start netgain agent.
cd installation_directory/netgain/bin ./agent_start.sh check logs: tail -100f installation_directory/netgain/bin/nohup.out Check GUI to confirm agent status. How to upgrade NetGain Agent in Windows Stop NetGain Agent service.
Go to services.msc Right-click on NetGain Agent Stop the service Backup netgain agent folder.
cd installation_directory (may vary depending on installation) Create a backup folder and copy paste the old NetGain Agent to the backup folder.
Download netgain agent under Tools &gt; Agent to preferred installation directory.
Install the new Agent and override the existing Agent.
Configure agent.
Enter the destination IP for NetGain server Start NetGain Agent in services.msc.
Check GUI to confirm agent status.
NetGain Agent not found Check Agent log in server for issues. For Windows:
check log file at (NetGain Agent directory) \\agent.log For Linux: check log file at (NetGain Agent directory)/bin/nohup.out Check firewall.
Use Telnet to check connectivity on port 81 and 1808 Purpose Protocol Port NetGain Agent TCP 81 / 1808 `}),e.add({id:60,href:"/modules/siem/aiworkflow/",title:"AI Workflows",content:`AI (Advanced Intelligence) Workflows support simple ways to create new rules and more complicated rules. It is useful for user that is not familiar with python language. AI workflows also provide an easy view of the logic flow for non-technical person to understand the rules.
To create the workflows, user can just drag the symbols from the left bar to the center area to create the link with other symbols. By clicking on the symbol, user can bring up symbol properties and user can fill in the require name or label accordingly.
Above picture is one of the examples of simple workflows on windows logon event. Below picture is example for Query logs symbol properties. User to specify the query string in the example is event.code : 4725.
Below picture is an example for CreateThreat symbol properties. User to specify the Threat message accordingly.
`}),e.add({id:61,href:"/modules/siem/security_analytics/aiworkflow/",title:"AI Workflows",content:`AI (Advanced Intelligence) Workflows support simple ways to create new rules and more complicated rules. It is useful for user that is not familiar with python language. AI workflows also provide an easy view of the logic flow for non-technical person to understand the rules.
To create the workflows, user can just drag the symbols from the left bar to the center area to create the link with other symbols. By clicking on the symbol, user can bring up symbol properties and user can fill in the require name or label accordingly.
Above picture is one of the examples of simple workflows on windows logon event. Below picture is example for Query logs symbol properties. User to specify the query string in the example is event.code : 4725.
Below picture is an example for CreateThreat symbol properties. User to specify the Threat message accordingly.
`}),e.add({id:62,href:"/modules/alerts/alertcategories/",title:"Alert Categories",content:`Creating different categories lets you group different alerts, and is a pre-requisite in creating notification rules. To create Alert categories, click on &lt;Alerts&gt; on the Left Navigation Bar, then click on &lt;Policies&gt; in the Top Navigation Bar. Click on &lt;Categories&gt;, then click &lt;+Create&gt;.
Fill in the details required and click &lt;Save&gt; to save this Alert category:
Name – Name of the Alert category
Object Class – Name of Monitors
Severity – Severity level of alert
Object name (fdn) – Device or Device group and/or Monitors or Monitors group to be included.
`}),e.add({id:63,href:"/modules/alerts/alertcorrelation/",title:"Alert Correlation",content:`Root Cause rule defines the relation of a root cause object’s alarm to the dependent object’s alarm in a time window. We can define such rules for well-known dependencies, such as a web-server and a web-site.
If a root cause alarm arrives prior to the dependent alarms, the dependent alarms are not propagated until the root cause is fixed within a time window.
This behavior could help to quickly identify the root cause, while helping to focus away from the dependent alarms. For example, if a web-server is down the web-site would be down as well. Therefore, if a root-cause alarm ‘Web-server down’ is present within a reasonable amount of time prior to the arrival of ‘Web-site down’ alarm, then the ‘Web-site down’ alarm will not be sent.
`}),e.add({id:64,href:"/modules/alerts/alertnotifications/",title:"Alert Notifications",content:`Notifications will be sent to relevant persons in the form of e-mails, SMS, 3rd party app messaging, sound or pop-up windows when a fault or service level violation occurs in the managed environment.
`}),e.add({id:65,href:"/modules/alerts/alertpolicies/",title:"Alert Policies",content:`This lets you create different policies for different alerts.
`}),e.add({id:66,href:"/modules/apm/apm/",title:"APM",content:`In this APM tab is the main tab where you can get an overview of the services health status as well into the details to check each application transaction status and parameters.
Dashboard Services Synthetic Monitoring `}),e.add({id:67,href:"/modules/netflow/settings_maintenance/applications/",title:"Applications",content:`By default, NetGain Systems will generate all known applications. User can create new applications based on TCP/UDP protocol. Click &lt;+Create&gt;.
A pop-up to create an Application will show. Enter relevant details.
Label – Name of the Application
Protocol – ICMP / TCP / UDP
Port – Port number of the Application
IP addresses – Target IP address of the Application
Once done, click &lt;Save&gt; and your Application will be ready under the search query of NetFlow.
`}),e.add({id:68,href:"/modules/siem/log_analytics/reports/applications/",title:"Applications",content:`Click on &lt;Applications&gt; to access the applications report.
Application will contain the report templates according to the following topics:
DHCP Windows Printer Windows Terminal Windows In &lt;DHCP Windows&gt; there are 23 report templates for Windows ready to use.
In &lt;Printer Windows&gt; there are 11 report templates ready to use.
In &lt;Terminal Windows&gt; there are 15 report templates ready to use.
`}),e.add({id:69,href:"/modules/siem/reports/applications/",title:"Applications",content:`Click on &lt;Applications&gt; to access the applications report.
Application will contain the report templates according to the following topics:
DHCP Windows Printer Windows Terminal Windows In &lt;DHCP Windows&gt; there are 23 report templates for Windows ready to use.
In &lt;Printer Windows&gt; there are 11 report templates ready to use.
In &lt;Terminal Windows&gt; there are 15 report templates ready to use.
`}),e.add({id:70,href:"/modules/siem/log_analytics/archive/",title:"Archive",content:`NetGain Systems SIEM support archive of log file to external storage/NAS storage. The benefits are to keep logs both in live and archive at same time for better data recovery and at the same time allow user to easily restore the logs when needed.
The SIEM archive mechanism Syslog and Beatslog will be daily archive to the desired path.
The archive files for previous days will be compressed periodically to save space.
User able to re-ingest the log when necessary.
`}),e.add({id:71,href:"/modules/metrics/metrics/blackoutschedule/",title:"Blackout Schedule",content:`User will be able to create their own outage plan to reduce incoming false alerts due to scheduled downtime.
To create a blackout schedule, Click &lt;Metrics&gt; on the Left navigation bar then &lt;Policy&gt;. Under &lt;Blackout Schedules&gt; click &lt;+Create&gt;.
Enter a relevant definition of the schedule in Description.
Fill in the Start Date, End, Time and the Interval Period.
Under Objects, click &lt;Select&gt; and the object menu will pop up.
Click Device View to drill down into the object, then click the &lt;arrow&gt; to select objects.
Finally, click Save and the Blackout schedule will be ready.
`}),e.add({id:72,href:"/modules/cmdb/bulkoperations/",title:"Bulk Operations",content:`This lets you perform operations such as to backup or restore the config on many devices at a time. Click on &lt;Devices&gt; at the top menu of &lt;Network Config&gt;, then select the devices for bulk operations.
Click on &lt;Action&gt; and a drop-down menu will appear for you to select the operation to perform.
Action Operation Backup To backup the config of the selected devices. Restore To restore the config of the selected devices. Delete To delete the selected devices from cmdb. Change Device Property To change the SSH credentials of the selected devices. After performing the operation, the results will be shown after a while. Click &lt;x Close&gt; to close the screen and return to the main Devices screen.
`}),e.add({id:73,href:"/categories/",title:"Categories",content:""}),e.add({id:74,href:"/modules/siem/log_analytics/reports/compliance/ccpa/",title:"CCPA",content:`In &lt;CCPA&gt; there is 1 report template.
Section 1798.150(a)
Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission Changers Windows : Removable Disk Creates Windows : Removable Disk Deletes Windows : Removable Disk Failed Creates Windows : Removable Disk Failed Deletes Windows : Removable Disk Failed Modifications Windows : Removable Disk Failed Reads Windows : Removable Disk Modifications Windows : Removable Disk Reads `}),e.add({id:75,href:"/modules/siem/reports/compliance/ccpa/",title:"CCPA",content:`In &lt;CCPA&gt; there is 1 report template.
Section 1798.150(a)
Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission Changers Windows : Removable Disk Creates Windows : Removable Disk Deletes Windows : Removable Disk Failed Creates Windows : Removable Disk Failed Deletes Windows : Removable Disk Failed Modifications Windows : Removable Disk Failed Reads Windows : Removable Disk Modifications Windows : Removable Disk Reads `}),e.add({id:76,href:"/modules/home/dashboards/clonedashboard/",title:"Cloning a Dashboard",content:`Click on the button at the corner to clone the current dashboard.
Give a name for the cloned dashboard
Click on to clone the dashboard
`}),e.add({id:77,href:"/administrative/admin/elasticsearch/clusternodes/",title:"Cluster Nodes",content:`This module provides overview of the Elasticsearch nodes health condition.
Click on &lt;Cluster nodes&gt; in the Top navigation bar.
Once disk utilization hits 95%, Elasticsearch services will stop and NetGain Systems Infrastructure Monitoring services will stop. Please contact NetGain prior to the disk % &gt; 90.
`}),e.add({id:78,href:"/modules/siem/log_analytics/reports/compliance/coco/",title:"COCO",content:`In &lt;COCO&gt; there are 5 report templates.
1.A. Vulnerrability management
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Failed hotpatching Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Install Windows : Service Failed Windows : Service Started Windows : Service Stopped Windows : Software Install Windows : Software Uninstalled Windows : Software Updated Windows : Windows Startup and Windows Shutdown 1.B. Secure Configuration
Windows : AD Backup Error Windows : Application Errors Windows : Application Hanged Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Failed hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : New application installations Windows : Removed Applications Windows : Service Failed Windows : Service Started Windows : Service Stopped Windows : Software Installed Windows : Software Uninstalled Windows : Software Updated Windows : Updated Applications Windows : Windows Startup and Windows Shutdown 1.C. Physical Security
Windows : Windows Firewall Group Policy Changes Windows : Windows Firewall Rule Added Windows : Windows Firewall Rule Deleted Windows : Windows Firewall Rule Modified Windows : Windows Firewall Settings Changed Windows : Windows Firewall Setting Restored 1.D. Protective monitoring and intrusion detection
Windows : Threat Detections by Mcafee Windows : Threats Detection by Microsoft Antimalware Windows : Threats Detection by Norton AntiVirus Windows : Threats Detection by Sophos Anti-Virus Windows : Threats Detections by ESET Endpoint Antivirus 1.E. Boundary Protection and Interfaces
Windows : Defender Malware Detection Windows : Defender Real Time Protection Detection Windows : DoS Attacks Windows : Downgrade Attacks Windows : Event Logging Service Shutdown Windows : Event Logs Cleared Windows : IP Conflicts Windows : Replay Attack Windows : Security Logs Cleared Windows : Terminal Server Attacks Windows : User Account Locked Out Error `}),e.add({id:79,href:"/modules/siem/reports/compliance/coco/",title:"COCO",content:`In &lt;COCO&gt; there are 5 report templates.
1.A. Vulnerrability management
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Failed hotpatching Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Install Windows : Service Failed Windows : Service Started Windows : Service Stopped Windows : Software Install Windows : Software Uninstalled Windows : Software Updated Windows : Windows Startup and Windows Shutdown 1.B. Secure Configuration
Windows : AD Backup Error Windows : Application Errors Windows : Application Hanged Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Failed hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : New application installations Windows : Removed Applications Windows : Service Failed Windows : Service Started Windows : Service Stopped Windows : Software Installed Windows : Software Uninstalled Windows : Software Updated Windows : Updated Applications Windows : Windows Startup and Windows Shutdown 1.C. Physical Security
Windows : Windows Firewall Group Policy Changes Windows : Windows Firewall Rule Added Windows : Windows Firewall Rule Deleted Windows : Windows Firewall Rule Modified Windows : Windows Firewall Settings Changed Windows : Windows Firewall Setting Restored 1.D. Protective monitoring and intrusion detection
Windows : Threat Detections by Mcafee Windows : Threats Detection by Microsoft Antimalware Windows : Threats Detection by Norton AntiVirus Windows : Threats Detection by Sophos Anti-Virus Windows : Threats Detections by ESET Endpoint Antivirus 1.E. Boundary Protection and Interfaces
Windows : Defender Malware Detection Windows : Defender Real Time Protection Detection Windows : DoS Attacks Windows : Downgrade Attacks Windows : Event Logging Service Shutdown Windows : Event Logs Cleared Windows : IP Conflicts Windows : Replay Attack Windows : Security Logs Cleared Windows : Terminal Server Attacks Windows : User Account Locked Out Error `}),e.add({id:80,href:"/modules/siem/log_analytics/reports/common/",title:"Common",content:`Click on &lt;Common&gt; to access the report. Common will contain report template of Windows.
There are 282 report templates for Windows ready to use.
Click on the desired report format. The system will generate a report. As an example of the report as shown in the figure below, chosen to generate a &lt;AD Backup Error&gt; report.
The information shown in the report includes:
Report Name – Show report name.
Device Type – Show description of device type.
Search criteria – Expression for search criteria.
Entries numbers – Number of entries.
Report Submenu: - Select time range of report
Save to local - Save report to local computer and report is HTML format file.
Print – Print report.
Refresh – Refresh report.
Close - Close report page and back to previous page
`}),e.add({id:81,href:"/modules/siem/reports/common/",title:"Common",content:`Click on &lt;Common&gt; to access the report. Common will contain report template of Windows.
There are 282 report templates for Windows ready to use.
Click on the desired report format. The system will generate a report. As an example of the report as shown in the figure below, chosen to generate a &lt;AD Backup Error&gt; report.
The information shown in the report includes:
Report Name – Show report name.
Device Type – Show description of device type.
Search criteria – Expression for search criteria.
Entries numbers – Number of entries.
Report Submenu: - Select time range of report
Save to local - Save report to local computer and report is HTML format file.
Print – Print report.
Refresh – Refresh report.
Close - Close report page and back to previous page
`}),e.add({id:82,href:"/modules/siem/log_analytics/reports/compliance/",title:"Compliance",content:`Click on &lt;Compliance&gt; to access the compliance report.
Compliance report templates are prepared for use in complying with industry standards and IT security standards.
List of compliance reports provided:
CCPA - California Consumer Privacy Act COCO - Code of Connection CYBER ESSENTIALS FERPA - Family Educational Rights and Privacy Act FISMA - Federal Information Security Management Act GDPR - General Data Protection Regulation GLBA – Gramm-Leach-Bliley Act GPG – Good Practice Guide HIPAA – Health Insurance Portability and Accountability Act ISLP – Information Security Level Protection ISO 2700 2013 – Information Security Management System NERC – North American Electric Reliability NIST – National Institute of Standards and Technology NRC – US Nuclear Regulatory Commission PCI-DSS – Payment Card Industry – Data Security Standard PDPA – Personal Data Protection Act SOX – Sarbanes-Oxley Act `}),e.add({id:83,href:"/modules/siem/reports/compliance/",title:"Compliance",content:`Click on &lt;Compliance&gt; to access the compliance report.
Compliance report templates are prepared for use in complying with industry standards and IT security standards.
List of compliance reports provided:
CCPA - California Consumer Privacy Act COCO - Code of Connection CYBER ESSENTIALS FERPA - Family Educational Rights and Privacy Act FISMA - Federal Information Security Management Act GDPR - General Data Protection Regulation GLBA – Gramm-Leach-Bliley Act GPG – Good Practice Guide HIPAA – Health Insurance Portability and Accountability Act ISLP – Information Security Level Protection ISO 2700 2013 – Information Security Management System NERC – North American Electric Reliability NIST – National Institute of Standards and Technology NRC – US Nuclear Regulatory Commission PCI-DSS – Payment Card Industry – Data Security Standard PDPA – Personal Data Protection Act SOX – Sarbanes-Oxley Act `}),e.add({id:84,href:"/modules/cmdb/configurationtemplates/",title:"Configuration Templates",content:`NetGain Systems cmdb let you create a configuration template that you can use to quickly configure newly added devices. At the top menu of &lt;Network Config&gt;, click on &lt;Templates&gt;.
Adding a New Template To create a new template, click on &lt;+ Add&gt; in the main &lt;Templates&gt; screen.
Fill in the required information, then click &lt;Save&gt;.
Your newly created Config Template will be shown on the main &lt;Templates&gt; screen.
Editing and Deleting Template Click on &lt; &gt; to edit or &lt; &gt; to delete a template while in the main &lt;Templates&gt; screen.
`}),e.add({id:85,href:"/installation/emedge/emedge-agent/config_checks/",title:"Configure checks",content:" Files Directories Processes Scripts Windows Services "}),e.add({id:86,href:"/administrative/admin/jobs/autodiscovery/",title:"Create Auto Discovery Task",content:`Select the Schedule task Type as &lt;Auto discovery&gt; .
Enter a task name, choose start, end time, internal and count (how many times will this task run). Specify the parameters for IP address, SNMP community string and SNMP port.
Once finished, click on &lt;Save&gt; to save the changes.
`}),e.add({id:87,href:"/administrative/admin/jobs/deviceshutdown/",title:"Create Device Shutdown Task",content:`Select the Schedule task Type as &lt;Device shutdown task&gt;
Enter a task name, choose start, end time, internal and count (how many times will this task run).
Specify the IP address and operation value (either shutdown or reboot).
Once finished, click on &lt;Save&gt; to save the changes.
`}),e.add({id:88,href:"/modules/alerts/currentalerts/",title:"Current Alerts",content:`Device metrics that exceed set thresholds will generate an alert. Current alerts are alerts that have not been acknowledged.
To navigate to Current alerts, click on &lt;Alerts&gt; on the Left Navigation Bar, then click &lt;Alerts&gt; on the Top Navigation Bar. Click on &lt;Current&gt;.
The End-User can select the actions to take for a device giving an alert:
Ack - The selected device will be acknowledged by the User; notification will be held unless the end-user unacknowledges it.
Unack - The selected device will be unacknowledged by the User; notification will appear again for the current alert.
Discharge - Delete the alert notification.
Export - Export the information of the device selected in Excel format.
To see the full information of a certain alert, select “Details”.
A pop-up box will appear giving detailed information of the alert for the selected device, which you can customize. The alert information details include:
Alarm Object - Name of the object and the monitor group.
General info - Details of attribute and its value.
Annotations - Allows you to put short notes.
Notify now – to notify immediately any user via email / sms
Additional Info - Additional information of the device.
`}),e.add({id:89,href:"/modules/metrics/customize/customizedatabase/",title:"Customize Database",content:`This function lets the user query different database methods like MSSQL, Oracle, DB2, Sybase.
To create Database monitor, Click &lt;Metrics&gt; on the Left navigation bar then &lt;Customize &gt; then &lt;Database&gt;. Click &lt;+Add&gt;.
Enter the details below and click &lt;save&gt;.
Label - Appropriate label for the monitor
Argument Count – Number of arguments
Instance name column – Number of columns for the instance/s
Type – select between MSSQL, DB2, Oracle, Sybase.
Add monitor Value – To add different parameters based from the script
`}),e.add({id:90,href:"/modules/metrics/customize/customizethreshold/",title:"Customize Dynamic Threshold",content:`This function is to set-up threshold dynamically to be in effect for certain period of time. To create Dynamic Threshold, Click &lt;Metrics&gt; on the Left navigation bar then &lt;Customize&gt; then &lt;Dynamic Threshold&gt;. Click &lt;+Add&gt;.
Input the name and description (optional) and click &lt;Add new rule&gt; button to configure the threshold.
Enter the details below, click &lt;+Add rule&gt; then &lt;save&gt;.
Day of week - Which day to execute this rule
Hour - From which hour this rule is to start (start hour)
Minute - From which minute this rule is to start (start minute)
Duration - How many hours or minutes this rule should be in effect
Select operator, value and severity.
`}),e.add({id:91,href:"/modules/metrics/customize/powershell-script/",title:"Customize Powershell Script",content:`This function lets the user customize different scripting methods Powershell scritps.
To create Script monitor, Click &lt;Metrics&gt; on the Left Navigation Bar then &lt;Customize&gt; then &lt;Script&gt;. Click &lt;+Add&gt;.
Enter the details below and click &lt;save&gt;.
Label - Appropriate label for the monitor
Argument Count – Number of arguments
Category – leave it as default
Script Type – select Powershell
Add monitor Value – To add different parameters based from the script
Back to the &lt;Metrics&gt; and click to the device which installed the agent, enter edit mode and click on &lt;+ monitor&gt; to add the monitor in others.
Click on &lt;manual create&gt;
`}),e.add({id:92,href:"/modules/metrics/customize/customizescript/",title:"Customize Script",content:`This function lets the user customize different scripting methods like Unix/Linux Shell, Visual Basic and Java Script.
To create Script monitor, Click &lt;Metrics&gt; on the Left Navigation Bar then &lt;Customize&gt; then &lt;Script&gt;. Click &lt;+Add&gt;.
Enter the details below and click &lt;save&gt;.
Label - Appropriate label for the monitor
Argument Count – Number of arguments
Category – Categorize different scripts and monitors
Script Type – select between Unix/Linux Shell, Visual Basic and Java Script.
Add monitor Value – To add different parameters based from the script
`}),e.add({id:93,href:"/modules/metrics/customize/customizesnmp/",title:"Customize SNMP",content:`This feature is used to monitor a specific SNMP OID.
To create SNMP monitor, Click &lt;Metrics&gt; on the Left navigation bar then &lt;Customize&gt; then &lt;SNMP&gt;. Click &lt;+Add&gt;.
Enter the details below and click &lt;save&gt;.
Label - Appropriate label for the monitor
Display name - Appropriate name of the counter
OID - SNMP OID of required counter
Unit - unit of the counter (OPTIONAL)
Formula - formula to be applied to the value of the counter
`}),e.add({id:94,href:"/modules/metrics/customize/",title:"Customize SNMP, Scripts, Database and Dynamic Thresholds",content:" Customize SNMP Customize Script Customize Powershell-Script Customize Database Customize Dynamic Threshold "}),e.add({id:95,href:"/modules/siem/log_analytics/reports/compliance/cyberessentials/",title:"CYBER ESSENTIALS",content:`In &lt;CYBER ESSENTIALS&gt; there are 5 report templates.
Boundary firewall and internet gateways:
Windows : Firewall Flood Attack Windows : Firewall Internet Protocol half-scan attack Windows : Firewall Ping of Death Attack Windows : Firewall SYN Attack Windows : Firewall Spoof Attack Malware Protection
Windows : Defender Malware Detection Windows : Defender Real Time Protection Detection Windows : DOS Attacks Windows : Downgrade Attacks Windows : Event Logging Service Shutdown Windows : Event Logs Cleared Windows : Exe or DLL File Allowed to Run Windows : Exe or DLL File Not Allowed to Run Windows : Exe or DLL Files Not Allowed to Run due to Enforced rules Windows : IP Conflicts Windows : MSI Script File Allowed to Run Windows : MSI Script Files Not Allowed to Run due to Enforced rules Windows : Removeable Disk Creates Windows : Removeable Disk Deletes Windows : Removeable Disk Failed Creates Windows : Removeable Disk Failed Deletes Windows : Removeable Disk Failed Modifications Windows : Removeable Disk Failed Reads Windows : Removeable Disk Modifications Windows : Removeable Disk Reads Windows : Replay Attack Windows : Security Logs Cleared Windows : Software Installed Windows : Software Restricted to Access Program Windows : Terminal Server Attacks Windows : Threat Detections by Mcafee Windows : Threats Detection by Microsoft Anti-malware Windows : Threats Detection by Norton AntiVirus Windows : Threats Detection by Sophos Anti-Virus Windows : Threats Detections by ESET Endpoint Antivirus Windows : User Account Locked Out Error Patch Management: Windows : AD Backup Error
Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Failed hotpatching Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Install Windows : Service Failed Windows : Service Started Windows : Service Stopped Windows : Software Install Windows : Software Uninstalled Windows : Software Updated Windows : Windows Startup and Windows Shutdown Secure Configuration:
Windows : Audit Policy Changed Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : UnSuccessful Post Authentication Windows : UnSuccessful Pre Authentication Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : User Right Assigned Windows : User Right Removed Windows : Windows Firewall Group Policy Changes Windows : Windows Firewall Rule Added Windows : Windows Firewall Rule Deleted Windows : Windows Firewall Rule Modified Windows : Windows Firewall Setting Changed Windows : Windows Firewall Setting Restored Windows : Windows Individual User Action User Access Control:
Windows : Audit Policy Changed Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : trusted Domain Modified Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Rights Assigned Windows : User Rights Removed Windows : Windows Individual User Action `}),e.add({id:96,href:"/modules/siem/reports/compliance/cyberessentials/",title:"CYBER ESSENTIALS",content:`In &lt;CYBER ESSENTIALS&gt; there are 5 report templates.
Boundary firewall and internet gateways:
Windows : Firewall Flood Attack Windows : Firewall Internet Protocol half-scan attack Windows : Firewall Ping of Death Attack Windows : Firewall SYN Attack Windows : Firewall Spoof Attack Malware Protection
Windows : Defender Malware Detection Windows : Defender Real Time Protection Detection Windows : DOS Attacks Windows : Downgrade Attacks Windows : Event Logging Service Shutdown Windows : Event Logs Cleared Windows : Exe or DLL File Allowed to Run Windows : Exe or DLL File Not Allowed to Run Windows : Exe or DLL Files Not Allowed to Run due to Enforced rules Windows : IP Conflicts Windows : MSI Script File Allowed to Run Windows : MSI Script Files Not Allowed to Run due to Enforced rules Windows : Removeable Disk Creates Windows : Removeable Disk Deletes Windows : Removeable Disk Failed Creates Windows : Removeable Disk Failed Deletes Windows : Removeable Disk Failed Modifications Windows : Removeable Disk Failed Reads Windows : Removeable Disk Modifications Windows : Removeable Disk Reads Windows : Replay Attack Windows : Security Logs Cleared Windows : Software Installed Windows : Software Restricted to Access Program Windows : Terminal Server Attacks Windows : Threat Detections by Mcafee Windows : Threats Detection by Microsoft Anti-malware Windows : Threats Detection by Norton AntiVirus Windows : Threats Detection by Sophos Anti-Virus Windows : Threats Detections by ESET Endpoint Antivirus Windows : User Account Locked Out Error Patch Management: Windows : AD Backup Error
Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Failed hotpatching Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Install Windows : Service Failed Windows : Service Started Windows : Service Stopped Windows : Software Install Windows : Software Uninstalled Windows : Software Updated Windows : Windows Startup and Windows Shutdown Secure Configuration:
Windows : Audit Policy Changed Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : UnSuccessful Post Authentication Windows : UnSuccessful Pre Authentication Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : User Right Assigned Windows : User Right Removed Windows : Windows Firewall Group Policy Changes Windows : Windows Firewall Rule Added Windows : Windows Firewall Rule Deleted Windows : Windows Firewall Rule Modified Windows : Windows Firewall Setting Changed Windows : Windows Firewall Setting Restored Windows : Windows Individual User Action User Access Control:
Windows : Audit Policy Changed Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : trusted Domain Modified Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Rights Assigned Windows : User Rights Removed Windows : Windows Individual User Action `}),e.add({id:97,href:"/modules/apm/apm/dashboard/",title:"Dashboard",content:`The dashboard shows the overall information includes below:
Number of Apps or services have been monitored and managed. Total transactions Transactions per minute Total errors Average services response time By selecting the time range at the top , at the top timerange dropdown list, you will be able to get the results accordingly.
`}),e.add({id:98,href:"/administrative/admin/logs/debuglog/",title:"Debug Logs",content:`Click on &lt;Debug logs&gt; in the Top navigation bar.
Turn on the debug log for debugging purpose only, choose the level of the logs to enable debugging.
`}),e.add({id:99,href:"/modules/home/dashboards/deletedashboard/",title:"Deleting Dashboard",content:`Click on the button at the corner to delete dashboard.
`}),e.add({id:100,href:"/modules/cmdb/deviceconfiguration/",title:"Device Configuration Management",content:`Click on &lt;Devices&gt; at the top menu of &lt;Network Config&gt;, then click on the name of the device whose configuration you want to manage.
You will see information about the device and its current and past configurations.
Actions you can perform by clicking on the appropriate button / icon.
Button Actions To push the selected config back to device. To pull the latest config from the device. To edit the SSH credentials (User/Password) of the device. To automatically update information of the device. To compare the differences in the config. To view the config. To delete the config from the backup list. To download the config to a text file. `}),e.add({id:101,href:"/administrative/tools/diagnostic/",title:"Diagnostic",content:`Tools for troubleshooting faults. Click on &lt;Diagnostic&gt; at the top navigation bar.
Ping SNMPWALK IP Calculator MIB Browser `}),e.add({id:102,href:"/modules/metrics/discovering/discoverdevice/",title:"Discover Device",content:`Click on &lt;Metrics&gt; in the Left Navigation Bar, then &lt;Discover&gt; in the Top Navigation Bar. Then click on &lt;Discover Device&gt; in the top menu.
Step 1 First select the discovery method to be used. 3 methods are provided:
IP Range Method IP Subnet Method Specific IP Method IP Range Method Select &lt;IP Range&gt; in &lt;Method&gt;, then enter the IP address range to be scanned. Start refers to the beginning while End refers to the end of the range.
IP Subnet Method Select &lt;IP Subnet&gt; in &lt;Method&gt; to discover devices using your own subnet. You can enter multiple subnets separated by a comma.
Specific IP Method Select &lt;Specific IP&gt; in &lt;Method&gt;. Just input the IP Address of the devices to be discovered separated by a comma.
Step 2 Enter the appropriate SNMP details. For the SNMP v1/v2, the default port number is “161” while the default SNMP community string for IT environments is “public”.
For SNMP v3, the default port number is 161 followed by the subsequent required fields.
Step 3 After completing the discovery method and SNMP information, click on &lt;Start Discovery&gt;. Once the scanning is completed, the list of devices discovered will be displayed with their relevant details.
Step 4 Ensure the devices to be added have a check mark, then click on &lt;+Add selected devices&gt;.
The devices will be created and grouped automatically.
`}),e.add({id:103,href:"/modules/metrics/discovering/",title:"Discovering / Adding Devices to be Monitored",content:` Discover Device To discover or add devices to be monitored, click on &lt;Metrics&gt; in the Left Navigation Bar, then &lt;Discover&gt; in the Top Navigation Bar.
The NetGain Systems Infrastructure Monitoring Discover feature has one available method to discover and add devices to be monitored.
Discover Device: Discovers devices and monitors each device using IP address range and specific IP addresses `}),e.add({id:104,href:"/modules/metrics/editsettings/",title:"Editing Monitoring Settings",content:`Click on &lt;Metrics&gt; in the Left Navigation Bar, then &lt;Metrics&gt; in the Top Navigation Bar. Then click on &lt;Objects&gt; in the top menu, and click on &lt;Device view&gt;.
Click on &lt;Edit&gt; to edit the monitoring settings.
&lt;Settings&gt; – Lets you change browser refresh rate interval, Enable/Disable/Ignore/Delete devices and monitors.
– Exit the edit mode.
– Adds new device group to categorize devices to your requirements
– Enable / Disable the selected object device
– Change threshold settings
– Delete selected devices/monitors
`}),e.add({id:105,href:"/modules/home/dashboards/editwidget/",title:"Editing Widgets",content:`Click on the button at the center to edit the widget.
Click on to save changes
`}),e.add({id:106,href:"/administrative/admin/elasticsearch/",title:"ElasticSearch",content:`This module provides the information of Elasticsearch, and also provide the functions to configure data retention, backup and restore, indices status.
Click on &lt;Elasticsearch&gt; in the navigation bar.
Maintenance Indices Shards Cluster Nodes `}),e.add({id:107,href:"/administrative/emedge_sites/",title:"Emedge Sites",content:`Sites are used for monitoring and managing distinct environments or deployments within the organization.
The ‘Current Sites’ tab displays sites that are being monitored by the system. Basic information includes:
Site Name Site ID State Site IP Site Version View details of Sites Click on the site name to view the details of the site.
Once clicked, the page will navigate to the dedicated page of the selected site.
This page provides details of the site and options for:
Site’s health Update patch Disconnect site Backup images and logs Click on to view the health of the site.
Once clicked, the page will display the health status of the site.
Information includes:
Used Memory: Amount of memory currently used Total Memory: Total amount of memory available Max Memory: Maximum amount of memory that can be allocated Process CPU: CPU usage of the current process System CPU: Overall CPU usage of the system Click on to view update patches.
Once clicked, the page will display the available update patches.
Click on to disconnect the remote site.
Click on to make backups, delete, or restore.
Once clicked, the page will display sites with options to delete or restore and also backup now.
Click on to download or tail logs or debug statements.
Once clicked, the page will display options to download the latest logs, tail logs, enable, or disable debug statements.
Enable Debug To get the debug statement, click on , , then .
Copy the Logger.
Paste into the package name and click on .
Successful enabling debug.
Accepting New Sites Click on Site ID to view details of the site.
Once clicked, the page will navigate to the dedicated page of the selected site.
Click on to accept the site.
Successful site acceptance.
The ‘Usage’ tab displays a view of the usage metrics for different aspects of the monitoring platform.
Information includes:
Infra Monitoring (Nodes): Bar chart showing the number of nodes being monitored over time Logs: Bar chart showing the daily volume of logs in megabytes NetFlow: Bar chart showing the daily volume of NetFlow data in megabytes Network Configuration Management: Bar chart showing the number of nodes involved in network configuration management Application Performance Monitoring: Bar chart showing the daily transaction spans `}),e.add({id:108,href:"/modules/siem/log_analytics/reports/compliance/ferpa/",title:"FERPA",content:`In &lt;FERPA&gt; there is 1 report template.
Section 99.31 (a)(1)(ii)
Windows : File Created Windows : Files Deleted Windows : Files Modified Windows : File Permission Changes Windows : Removable Disk Creates Windows : Removable Disk Deletes Windows : Removable Disk Failed Creates Windows : Removable Disk Failed Deletes Windows : Removable Disk Failed Modifications Windows : Removable Disk Failed Reads Windows : Removable Disk Modifications Windows : Removable Disk Reads `}),e.add({id:109,href:"/modules/siem/reports/compliance/ferpa/",title:"FERPA",content:`In &lt;FERPA&gt; there is 1 report template.
Section 99.31 (a)(1)(ii)
Windows : File Created Windows : Files Deleted Windows : Files Modified Windows : File Permission Changes Windows : Removable Disk Creates Windows : Removable Disk Deletes Windows : Removable Disk Failed Creates Windows : Removable Disk Failed Deletes Windows : Removable Disk Failed Modifications Windows : Removable Disk Failed Reads Windows : Removable Disk Modifications Windows : Removable Disk Reads `}),e.add({id:110,href:"/modules/siem/log_analytics/filters/",title:"Filters",content:`User can use filters function to exclude processing certain logs.
Example: To exclude logs that contain “session event 1656” .
After setting filter, user can test the rule using &lt;Test filters&gt;.
`}),e.add({id:111,href:"/modules/siem/log_analytics/reports/compliance/fisma/",title:"FISMA",content:`In &lt;FISMA&gt; there are 10 report templates.
Access Control (AC)
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logons Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logon Access Control (AC)
Successful/Unsuccessful User Logons/Logoffs Audit and Accountability (AU)
Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission Changes Audit and Accountability (AU) – Object Access
Certification, Accreditation, and Security Assessments (CA)
Windows : Service Failed Windows : Service Started Windows : Service Stopped Configuration Management (CM)
Windows : Software installed Contingency Planning (CP)
Windows : Failed Windows backup Windows : Failed Windows restores Windows : Successful Windows restores Windows Successful Windows backup Identification and Authentication (IA)
Windows : Windows individual User Action Information System Monitoring(SI-4)
Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected `}),e.add({id:112,href:"/modules/siem/reports/compliance/fisma/",title:"FISMA",content:`In &lt;FISMA&gt; there are 10 report templates.
Access Control (AC)
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logons Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logon Access Control (AC)
Successful/Unsuccessful User Logons/Logoffs Audit and Accountability (AU)
Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission Changes Audit and Accountability (AU) – Object Access
Certification, Accreditation, and Security Assessments (CA)
Windows : Service Failed Windows : Service Started Windows : Service Stopped Configuration Management (CM)
Windows : Software installed Contingency Planning (CP)
Windows : Failed Windows backup Windows : Failed Windows restores Windows : Successful Windows restores Windows Successful Windows backup Identification and Authentication (IA)
Windows : Windows individual User Action Information System Monitoring(SI-4)
Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected `}),e.add({id:113,href:"/modules/siem/log_analytics/reports/compliance/gdpr/",title:"GDPR",content:`In &lt;GDPR&gt; there are 4 report templates.
GDPR ARTICLE 32 (1B)
Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified GDPR ARTICLE 32 (1D)
Windows : File Created Windows : File Deleted Windows : File modified Windows : File Permission Changes GDPR ARTICLE 5 (1B)
Windows : Audit Policy Changed Windows : Failed Network Logons Windows : Failed User Logons Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authenticaation Windows : User Logoff Windows : User Logon Windows : User Rights Assigned Windows : User Right Removed Windows : Windows individual User Action GDPR ARTICLE 5 (1F)
Windows : Audit Policy Changed Windows : Failed Network Logons Windows : Failed User Logons Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon Windows : User Rights Assigned Windows : User Right Removed Windows : Windows individual User Action `}),e.add({id:114,href:"/modules/siem/reports/compliance/gdpr/",title:"GDPR",content:`In &lt;GDPR&gt; there are 4 report templates.
GDPR ARTICLE 32 (1B)
Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified GDPR ARTICLE 32 (1D)
Windows : File Created Windows : File Deleted Windows : File modified Windows : File Permission Changes GDPR ARTICLE 5 (1B)
Windows : Audit Policy Changed Windows : Failed Network Logons Windows : Failed User Logons Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authenticaation Windows : User Logoff Windows : User Logon Windows : User Rights Assigned Windows : User Right Removed Windows : Windows individual User Action GDPR ARTICLE 5 (1F)
Windows : Audit Policy Changed Windows : Failed Network Logons Windows : Failed User Logons Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon Windows : User Rights Assigned Windows : User Right Removed Windows : Windows individual User Action `}),e.add({id:115,href:"/modules/home/maps/geomap/",title:"Geographical Map",content:`Google Map provides a geographical view of the devices in the IT infrastructure.
Click on &lt;Home&gt; in the Left Navigation Bar, then &lt;Maps&gt; in the Top Navigation Bar. Click on &lt;Google&gt;, and you can view, monitor and manage devices at Country Level, State Level, Town and down to Street Level. Device details can be further drilled down to the individual parameter level.
To create a Geographical map view, click on &lt;Home&gt; in the Left Navigation Bar, then &lt;Maps&gt; in the top navigation bar. Click on &lt;Google&gt;, then click on .
Enter your map name and click &lt;+Add&gt;.
Click to bring out the device menu, drag and drop the pin to your desired location, and click &lt;Update&gt;.
`}),e.add({id:116,href:"/modules/siem/log_analytics/reports/compliance/glba/",title:"GLBA",content:`In &lt;GLBA&gt; there are 2 report templates.
Section 501B (1)
Windows : AD Backup Eror Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : Software installed Windows : Software Uninstalled Windows : Software Update Windows :: Windows Startup and Windows Shutdown Section 501B (2) &amp; (3)
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logo `}),e.add({id:117,href:"/modules/siem/reports/compliance/glba/",title:"GLBA",content:`In &lt;GLBA&gt; there are 2 report templates.
Section 501B (1)
Windows : AD Backup Eror Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : Software installed Windows : Software Uninstalled Windows : Software Update Windows :: Windows Startup and Windows Shutdown Section 501B (2) &amp; (3)
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logo `}),e.add({id:118,href:"/modules/metrics/metrics/globalrules/",title:"Global Rules",content:`Monitoring templates can be created on the Global Rules. It is very convenient to users who are monitoring numerous devices since it can make setting up the thresholds easier.
To create a global rule, Click &lt;Metrics&gt; on the Left navigation bar then &lt;Policy&gt;. Under &lt;Global Rules&gt;&lt; click &lt;+Create&gt;.
Give your new template a name on the next screen and choose the Category of the device you want to manage.
Select the Device type. A list of preset templates will appear.
Click on the device model, you may also search the keyword of the monitor.
Click the &lt; &gt;, Threshold rules menu will appear.
Set the threshold accordingly.
Lastly, select an option in Action for non-selected monitor types. Click &lt;Save&gt; and the new Monitor template will be ready.
Apply the created template from the settings in Status objects
Click &lt;Edit&gt; to enable the edit mode and Select the device group to apply the template using the &lt;Check box&gt; and from the settings, select the desired global rule template and click &lt;Apply&gt;
`}),e.add({id:119,href:"/modules/siem/log_analytics/reports/compliance/gpg/",title:"GPG",content:`In &lt;GPG&gt; there are 5 report templates.
Recording Relating to Network Connections (PMC Rule 6)
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logon Windows : User Logoff Windows : User Logon Recording on Data Backup status (PMC Rule 8)
Windows : Failed Windows Backup Windows : Failed Windows Restores Windows : Successful Windows restore Windows : Successful Windows backup Recording on Internet Workstation, Server or Device Status (PMC Rule 4)
Windows : Registry Created Windows : Registry Deleted Windows : Registry Value Modified Reporting on The Status of The Audit System (PMC Rule 10)
Windows : Defender Malware Detection Windows : Defender Real Time Protection Detection Windows : DoS Attacks Windows : Downgrade Attacks Windows : Event Loggins Service Shutdown Windows : Event Logs Cleared Windows : IP Conficts Windows : Replay Attacks Windows : Security Logs Cleared Windows : Terminal Server Attacks Windows : User Account Locked Out Error Suspicious Internal Networks Activity (PMC Rule 5)
Windows : Audit Policy Changed Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Right Assigned Windows : User Rights Removed `}),e.add({id:120,href:"/modules/siem/reports/compliance/gpg/",title:"GPG",content:`In &lt;GPG&gt; there are 5 report templates.
Recording Relating to Network Connections (PMC Rule 6)
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logon Windows : User Logoff Windows : User Logon Recording on Data Backup status (PMC Rule 8)
Windows : Failed Windows Backup Windows : Failed Windows Restores Windows : Successful Windows restore Windows : Successful Windows backup Recording on Internet Workstation, Server or Device Status (PMC Rule 4)
Windows : Registry Created Windows : Registry Deleted Windows : Registry Value Modified Reporting on The Status of The Audit System (PMC Rule 10)
Windows : Defender Malware Detection Windows : Defender Real Time Protection Detection Windows : DoS Attacks Windows : Downgrade Attacks Windows : Event Loggins Service Shutdown Windows : Event Logs Cleared Windows : IP Conficts Windows : Replay Attacks Windows : Security Logs Cleared Windows : Terminal Server Attacks Windows : User Account Locked Out Error Suspicious Internal Networks Activity (PMC Rule 5)
Windows : Audit Policy Changed Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Right Assigned Windows : User Rights Removed `}),e.add({id:121,href:"/modules/siem/log_analytics/reports/compliance/hipaa/",title:"HIPAA",content:`In &lt;HIPAA&gt; there are 6 report templates.
164.308(a)(1)(ii)(D)
Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission Changes 164.308(a)(3)(ii)(A)
Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication 164.308(a)(4)(ii)(B)
Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication 164.308(a)(5)(ii)(C)
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logon 164.308(a)(6)(ii)
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logon 166.308(a)(7)(i)
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : Software Installed Windows : Software uninstalled Windows : Software updated Windows : Windows Startup and Windows Shutdown Account Logon Object Access `}),e.add({id:122,href:"/modules/siem/reports/compliance/hipaa/",title:"HIPAA",content:`In &lt;HIPAA&gt; there are 6 report templates.
164.308(a)(1)(ii)(D)
Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission Changes 164.308(a)(3)(ii)(A)
Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication 164.308(a)(4)(ii)(B)
Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication 164.308(a)(5)(ii)(C)
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logon 164.308(a)(6)(ii)
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logon 166.308(a)(7)(i)
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : Software Installed Windows : Software uninstalled Windows : Software updated Windows : Windows Startup and Windows Shutdown Account Logon Object Access `}),e.add({id:123,href:"/modules/alerts/historyalerts/",title:"History Alerts",content:`This gives an overview of the historical alert notifications based on the category selected. To go to History Alerts, click on &lt;Alerts&gt; on the Left Navigation Bar, then click &lt;Alerts&gt; on the Top Navigation Bar. Click on &lt;History&gt;.
Select the Alert category and the date range of the alerts that you would like to see.
`}),e.add({id:124,href:"/",title:"Home",content:`Welcome to NetGain docs!
You will find all the comprehensive information and documentations on NetGain Systems products and services, as well as detailed technical information and tips to get your NetGain Systems software up and running smoothly.
Solution Architecture
Learn More &gt; Installing
emedge
View Guide &gt; Navigating the Software
View Guide &gt; Infrastructure Monitoring
View Guide &gt; Log Analytics
View Guide &gt; Security Analytics
View Guide &gt; Application Performance Management
View Guide &gt; Network
Traffic
Analytics
View Guide &gt; Network
Configuration Management
View Guide &gt; Quick Links NetGain Systems Website NetGain Systems Portal
Feedback We cherish what you have to say and value every feedback. Please reach out to us via email at support@netgain-systems.com.
NetGain Systems (c) 2002-2021. All rights reserved. `}),e.add({id:125,href:"/administrative/admin/elasticsearch/indices/",title:"Indices",content:`All performance data and logs are stored in Elasticsearch on a daily basis as indices.
ng_perf – stores all monitoring related data in daily basis ng_flow_flows – stores all NetFlow related data in daily basis ng_logs – stores all SIEM log related data in daily basis ng_v11_alarms_– stores all current alarms related data ng_v11_history_alarms– stores all history alarm related data Delete Indices To delete indices, click on &lt; &gt;
Click on &lt;OK&gt; to confirm deletion of indices.
`}),e.add({id:126,href:"/installation/emedge/emedge-agent/installation/",title:"Installation",content:`Supported environments emedge-agent is now supported on most common flavors Linux, Unix, Windows and Apple OSX.
Installation steps for Windows Download Windows MSI Installer for emedge-agent Install via command line search for Command Prompt and right click &ldquo;Run as administrator&rdquo;.
run following command
msiexec.exe /qn /i emedge-agent-v12-latest.msi EMIP=x.x.x.x EMIP=x.x.x.x specifies the IP address of EM or Emedge server Notes:
emedge-agent will also be configured automatically as windows service named &rsquo;emedge-agent' You may also use Windows Group Policy to remotely install software in bulk Installation steps for Linux One liner installation
EMIP=x.x.x.x SERVICE=1 sh -c &quot;$(curl -skL https://download.netgain-systems.com/emedge-agent/install-agent.sh)&quot; EMIP=x.x.x.x specifies the IP of emedge that this agent should forward data to SERVICE=1 specifies to automatically install emedge-agent as a system service If you do not wish to install as a system service, set to SERVICE=0 Manual installation
RPM package emedge-agent-v12-latest.x86_64.rpm Zip package emedge-agent-v12-latest-linux.zip Installation steps for other operation systems Apple OSX
Download and unzip latest emedge-agent software package for OSX cd into emedge-agent folder and run emedge-agent config FreeBSD
Download and unzip latest emedge-agent software package for FreeBSD cd into emedge-agent folder and run emedge-agent config Installation as system service on unix/linux Linux/Unix/OSX: Run /opt/emedge-agent/emedge-agent service install Further details All logs will be saved into emedge-agent.log in the installation directory To stop emedge, simply run emedge-agent stop Note: run emedge-agent -h for more help on other commands `}),e.add({id:127,href:"/installation/emedge/installation/",title:"Installation",content:`To get started, select your platform Installation steps for emedge on Windows Method 1
Download and unzip latest emedge software package cd into emedge folder and run emedge config To run emedge, simply run emedge run Method 2
Download Windows MSI Installer for emedge Install via command line search for Command Prompt and right click &ldquo;Run as administrator&rdquo;.
run following command
msiexec.exe /qn /i emedge-v12-latest.msi CV=mycv.cloud-vista.co SITE=my-emedge-site1 CV=mycv.cloud-vista.co specifies the domain hostname of CloudVista instance that this emedge should forward data to SITE=mysitename specifies the name of this emedge site Note:
emedge will also be configured automatically as windows service named &rsquo;emedge' Installation log files at %TEMP%\\MSI*.LOG. Installation steps for emedge on Linux Linux - one liner installation
CV=mycv.cloud-vista.co SITE=mysitename SERVICE=1 sh -c &#34;$(curl -skL https://download.netgain-systems.com/emedge/install.sh)&#34; CV=mycv.cloud-vista.co specifies the domain hostname of CloudVista instance that this emedge should forward data to SITE=mysitename specifies the name of this emedge site SERVICE=1 specifies to automatically install emedge as a system service If you do not wish to install as a system service, set to SERVICE=0 Installation steps for emedge on Mac OS X Manual installation (Linux or Apple OSX)
Download and unzip latest emedge software package cd into emedge folder and run emedge config Installation steps for emedge as a Docker container Containerized version of the emedge. The official Docker image and setup instructions is available on Docker Hub.
Installation as system service or Windows service Turn to emedge folder: cd &lt;dir&gt; Run .\\emedge service install Supported environments emedge can run on Linux, Windows or Mac OS.
For Linux, recommended OS distribution is Centos or Ubuntu Recommended specs: Minimum: CPU: Intel i3-equivalent or above, 1GB RAM, 5GB disk space Ideal: CPU: Intel i5-equivalent or above, minimum 4GB RAM, 50GB disk space Additional notes All logs will be saved into emedge.log in the installation directory To stop emedge, simply run emedge stop To set the JVM maximum heap memory, use emedge setmem command e.g. emedge setmem 2g (need to restart service) Run emedge -h for help on more commands `}),e.add({id:128,href:"/modules/siem/log_analytics/filebeat/installation/",title:"Installation of Filebeat",content:`Overview This page consist of 3 section, installation, configure and start Filebeat
Supported environments Filebeat is now supported on most common flavors Linux, Unix and Windows.
Installation Windows
Download Filebeat Windows zip fileWindows zipped file
Extract the contents of the zip file into C:\\Program Files.
Rename the filebeat--windows directory to Filebeat.
Open a PowerShell prompt as an Administrator (right-click the PowerShell icon and select Run As Administrator).
From the PowerShell prompt, run the following commands to install Filebeat as a Windows service:
PS &gt; cd 'C:\\Program Files\\Filebeat' PS C:\\Program Files\\Filebeat&gt; .\\install-service-filebeat.ps1	If script execution is disabled on your system, you need to set the execution policy for the current session to allow the script to run. For example:
PowerShell.exe -ExecutionPolicy UnRestricted -File .\\install-service-filebeat.ps1. Linux
Download and install
curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-7.13.2-x86_64.rpm
yum localinstall filebeat-7.13.2-x86_64.rpm
Configure Change the configuration file:
change to the Filebeat directory, look for the file named filbeat.yml Windows directory: C:\\Program Files\\Filebeat\\filbeat.yml Linux and MacOS directory: /etc/filbeat/filebeat.yml edit and change the output as below #output.elasticsearch: #hosts: [&#34;myEShost:9200&#34;] output.logstash: hosts: [emedge_ip:5044] ssl.enable: true ssl.verification_mode: &#34;none&#34; emedge_ip is the IP address of emedge Enable the modules:
Enable the modules for Filebeat to collect data from: Windows: PS &gt; .\\filebeat.exe modules enable cisco Linux: filebeat modules enable system cisco Configure each of the modules Detail guide for configuration of each modules can be found here. Start Windows: PS C:\\Program Files\\filebeat&gt; Start-Service filebeat You may start the service from Services as well Linux: service filebeat start `}),e.add({id:129,href:"/installation/emedge/Metricbeat/installation/",title:"Installation of Metricbeat",content:`Overview This page consist of 3 section, installation, configure and start Metricbeat
Supported environments Metricbeat is now supported on most common flavors Linux, Unix, Windows and Apple OSX.
Installation Windows
Download Metricbeat Windows zip fileWindows zipped file
Extract the contents of the zip file into C:\\Program Files.
Rename the metricbeat--windows directory to Metricbeat.
Open a PowerShell prompt as an Administrator (right-click the PowerShell icon and select Run As Administrator).
From the PowerShell prompt, run the following commands to install Metricbeat as a Windows service:
PS &gt; cd 'C:\\Program Files\\Metricbeat' PS C:\\Program Files\\Metricbeat&gt; .\\install-service-metricbeat.ps1 Linux
Download and install
curl -L -O https://artifacts.elastic.co/downloads/beats/metricbeat/metricbeat-7.14.0-x86_64.rpm
yum localinstall metricbeat-7.14.0-x86_64.rpm
Apple OSX
Download and unzip
curl -L -O https://artifacts.elastic.co/downloads/beats/metricbeat/metricbeat-7.14.0-darwin-x86_64.tar.gz
tar xzvf metricbeat-7.14.0-darwin-x86_64.tar.gz Others
Download and unzip Other OS Configure Change the configuration file:
change to the Metricbeat directory, look for the file named metricbeat.yml Windows directory: C:\\Program Files\\Metricbeat\\metricbeat.yml Linux and MacOS directory: /etc/metricbeat/metricbeat.yml edit and change the output as below #output.elasticsearch: #hosts: [&#34;myEShost:9200&#34;] output.logstash: hosts: [emedge_ip:5044] ssl.enable: true ssl.verification_mode: &#34;none&#34; emedge_ip is the IP address of emedge Enable the modules:
Enable the modules for Metricbeat to collect data from: Windows: PS &gt; .\\metricbeat.exe modules enable &lt;module-name&gt; Linux: metricbeat modules enable system &lt;module-name&gt; e.g. Linux: metricbeat modules enable system elasticsearch radius Configure each of the modules Detail guide for configuration of each modules can be found here. Start Windows: PS C:\\Program Files\\metricbeat&gt; Start-Service metricbeat You may start the service from Services as well Linux: service metricbeat start `}),e.add({id:130,href:"/modules/alerts/3rdpartyintegration/",title:"Integration with 3rd Party Ticketing Apps",content:`You can integrate the alerts generated with your existing OpsGenie, Pager Duty or Service Now ticketing apps. Refer to the appropriate documentation for information on setting up this integration.
OpsGenie – uses API key for integration (https://docs.opsgenie.com/docs/api-integration)
Pager Duty – uses API key, Service ID and User Email ID for integration (https://www.pagerduty.com/sign-up/)
Service Now – uses URL, Username and Password for integration
Note: This plug-in uses Basic Authentication with the ServiceNow REST API, so you would need a valid username and password
`}),e.add({id:131,href:"/modules/alerts/integrations/",title:"Integrations",content:" Line notifications MSTeams notifications "}),e.add({id:132,href:"/administrative/admin/logs/internallog/",title:"Internal Logs",content:`Click on &lt;Internal logs&gt; in the Top navigation bar.
It consists of internal logs of NetGain Systems Infrastructure Monitoring and it is used by NetGain Systems support team during troubleshooting.
To download the log file, just click on the file name:
It will be saved to a text file, please forward this file to NetGain Systems Support team for further investigations.
`}),e.add({id:133,href:"/administrative/tools/diagnostic/ipcalculator/",title:"IP Calculator",content:`This tool helps user to calculate IP address.
Click on &lt;IP Calculator&gt; then enter the IP Address and IP Mask bits you want to calculate. Then click on &lt;Calculate&gt;, the screen will appear IP calculate result.
`}),e.add({id:134,href:"/modules/siem/log_analytics/reports/compliance/islp/",title:"ISLP",content:`In &lt;ISLP&gt; there are 8 report templates.
ARTICLE 12
Windows : Failed Windows backup Windows : Filed Windows restores Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Successful Windows restores Windows : Successful windows backup ARTICLE 13
Windows : Failed Windows backup Windows : Filed Windows restores Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Successful Windows restores Windows : Successful windows backup ARTICLE 16.3
Windows : Audit Policy Changed Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action ARTICLE 18.1
Windows : Audit Policy Changed Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action ARTICLE 19.3
Windows : Audit Policy Changed Windows : Failed Windows backup Windows : Filed Windows restores Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Successful Windows restores Windows : Successful windows backup Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action ARTICLE 20.5
Windows : Failed Windows backup Windows : Filed Windows restores Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Successful Windows restores Windows : Successful windows backup ARTICLE 30.4
Windows : Failed Windows backup Windows : Filed Windows restores Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Successful Windows restores Windows : Successful windows backup ARTICLE 30.6
Windows : Audit Policy Changed Windows : Failed Network Logons Windows : Failed User Logons Windows : Failed Windows backup Windows : Filed Windows restores Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Successful Windows restores Windows : Successful windows backup Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : UnSuccessful Post Authentication Windows : UnSuccessful Pre Authentication Windows : User Logoff Windows : User Logon Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action `}),e.add({id:135,href:"/modules/siem/reports/compliance/islp/",title:"ISLP",content:`In &lt;ISLP&gt; there are 8 report templates.
ARTICLE 12
Windows : Failed Windows backup Windows : Filed Windows restores Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Successful Windows restores Windows : Successful windows backup ARTICLE 13
Windows : Failed Windows backup Windows : Filed Windows restores Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Successful Windows restores Windows : Successful windows backup ARTICLE 16.3
Windows : Audit Policy Changed Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action ARTICLE 18.1
Windows : Audit Policy Changed Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action ARTICLE 19.3
Windows : Audit Policy Changed Windows : Failed Windows backup Windows : Filed Windows restores Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Successful Windows restores Windows : Successful windows backup Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action ARTICLE 20.5
Windows : Failed Windows backup Windows : Filed Windows restores Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Successful Windows restores Windows : Successful windows backup ARTICLE 30.4
Windows : Failed Windows backup Windows : Filed Windows restores Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Successful Windows restores Windows : Successful windows backup ARTICLE 30.6
Windows : Audit Policy Changed Windows : Failed Network Logons Windows : Failed User Logons Windows : Failed Windows backup Windows : Filed Windows restores Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Successful Windows restores Windows : Successful windows backup Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : UnSuccessful Post Authentication Windows : UnSuccessful Pre Authentication Windows : User Logoff Windows : User Logon Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action `}),e.add({id:136,href:"/modules/siem/log_analytics/reports/compliance/iso27002013/",title:"ISO 2700 2013",content:`In &lt;ISO 27001 2013&gt; there are 6 report templates.
Control A 12.4.1
Windows : Audit Policy Changed Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action Control A 12.4.2
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Audit Policy Changed Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : New Service Installed Windows : Software Installed Windows : Software uninstalled Windows : Software updated Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Startup and Windows Shutdown Control A.12.4.3
Windows : Audit Policy Changed Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Failed Network Logons Windows : Failed User Logons Windows : Group Created Windows : Group Deleted indows : Group Modified Windows : Network Logoffs Windows : Network Logon Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : User Logoff Windows : User Logon Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action Control A 9.2.1
Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : Windows Individual User Action Control A 9.2.5
Windows : Audit Policy Changed Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Right Assigned Windows : User Rights Removed Control A 9.4.2
Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : Windows Individual User Action `}),e.add({id:137,href:"/modules/siem/reports/compliance/iso27002013/",title:"ISO 2700 2013",content:`In &lt;ISO 27001 2013&gt; there are 6 report templates.
Control A 12.4.1
Windows : Audit Policy Changed Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action Control A 12.4.2
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Audit Policy Changed Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : New Service Installed Windows : Software Installed Windows : Software uninstalled Windows : Software updated Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Startup and Windows Shutdown Control A.12.4.3
Windows : Audit Policy Changed Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Failed Network Logons Windows : Failed User Logons Windows : Group Created Windows : Group Deleted indows : Group Modified Windows : Network Logoffs Windows : Network Logon Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : User Logoff Windows : User Logon Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action Control A 9.2.1
Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : Windows Individual User Action Control A 9.2.5
Windows : Audit Policy Changed Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Right Assigned Windows : User Rights Removed Control A 9.4.2
Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : Windows Individual User Action `}),e.add({id:138,href:"/administrative/admin/jobs/",title:"Jobs",content:`This module enables auto admin job to run, namely Auto discovery and Device shutdown.
Click on &lt;Jobs&gt; in the Top navigation bar
Click on &lt;+ Create&gt; to create new Task.
Create Auto Discovery Task Create Device Shutdown Task `}),e.add({id:139,href:"/modules/home/maps/networkmap/",title:"Layer 2 and 3 Network Maps",content:`This feature serves as a tool for network architecture visualization, focusing on both Layer 2 (Data Link Layer) and Layer 3 (Network Layer). It displays the interconnections within the network, highlighting the routes that data packets follow from source to destination across potentially intricate and multi-layered network paths.
A key technical aspect of this function is its incorporation of network discovery methods. It employs protocols such as the Link Layer Discovery Protocol (LLDP), Cisco Discovery Protocol (CDP), and Huawei Discovery Protocol (HDP). These protocols grant the function the ability to navigate and map the elaborate interconnections within the network, revealing both all links, including the hidden ones.
The function also features an automatic layout mechanism, which presents the complex network topology in a structured and digestible format. Beyond merely offering a static view, the function allows for user-driven customization of the layouts based on specific needs or preferences. These custom views can be preserved for later use, facilitating a more efficient understanding, management, and troubleshooting of network systems.
In summary, this function delivers a comprehensive and user-adaptable approach to network visualization, combining advanced discovery protocols with customizable views. It provides users with the necessary tools to navigate and comprehend the complexities of their network&rsquo;s architecture, thereby enhancing their ability to manage and troubleshoot their systems effectively.
Click on &lt;Home&gt; in the Left Navigation Bar, then &lt;Maps&gt; in the Top Navigation Bar. Click on &lt;Layer 2 Network&gt; or &lt;Layer 3 Network&gt; to view the Layer 2 and Layer 3 Network maps respectively.
`}),e.add({id:140,href:"/modules/home/leftnavbar/",title:"Left Navigation Bar",content:`The Left Navigation Bar of the console let users access the different modules of NetGain Systems ITM&amp;SM and is always available throughout the console.
There is a small arrow at the base of the menu to expand the icon names.
Button Description Directs you to the home page of the spog.ai console, where you can access Dashboards, BizView and Maps. Lets users check the status or performance of devices or servers over a period of time. Also, where you can discover or add devices to be monitored. Optional SIEM module which includes Log Analytics and Security Analytics. Optional NetFlow module for network traffic details. Optional APM (Application Performance Management) module for application monitoring and management. Optional CMDB (Configuration management database) module for Asset Management, Network Configuration Management and IP Address Management. Lets you define alarms and how notification messages are to be sent to different IT team members. Built-in tools available on the spog.ai console, including sending pings and SNMP settings. System administrator functions, including adding / changing end-user information/settings. `}),e.add({id:141,href:"/administrative/admin/system/license/",title:"License",content:`License shows the user the details of the NetGain Systems Infrastructure Monitoring license information on enabled modules, used license nodes, total license nodes.
Click on the &lt;License&gt; in the Top Navigation Bar.
The page will show the info:
Serial number Infrastructure Monitoring model License Expiry date Max licensed nodes XXXX (currently used: XX) Max NetFlow Flow Rate XXX flows per sec Add-ons modules eg. Unlimited Ping, Network Config Manager, IP Address Manager, Asset Manager Advance monitors `}),e.add({id:142,href:"/troubleshooting_guides/FAQ/licensing/",title:"Licensing",content:`How to update license Click on Admin, System, License.
Choose the license file and click on to upload the license.
`}),e.add({id:143,href:"/modules/alerts/integrations/line/",title:"LINE notifications",content:`This document is to provide a step by step setup for Line App integration to be setup as the notifications channel
Pre-Requisites Steps Pre-Requisites Mobile Line App Download Android APK Apple App Store Google Play PC Download Windows MacOS Steps Download Line App on your preferred device
Login to your Line Account or Register for new account Get your Channel Access Token
a. Go to Line Dev
b. Login using Line / Business account
c. Go to Providers, then click &ldquo;Create&rdquo; for new Providers
d. Create new Messaging API Channel, fill-in necessary details
Input Channel name, Channel description, category, sub-category, email address Free account limit is 500 messages/month e. Once Messaging API is created, click the Messaging API sub-menu then Issue Channel access token
f. In your LINE™ Mobile App, scan the QR code from the Messaging API sub-menu to add this bot as a chat friend
Go now to Web GUI at Alarms &gt; Notification &gt; Line and click +Create. Key-in your Label and Channel access token
Send Test message, if successful you can now save
Go to Notifications &gt; Rules then click Create. Set desired notification Rules and don&rsquo;t forget to tick the “LINE” box to enable the Line alert messaging
Create your Line messaging content in notification rules or just simply put “default” to receive system generated alarms
Line label should be the same as the Label created in the MS Teams integration settings
Select the Users to Notify
Note: Every User must have LineApp ID set in their User profile under &ldquo;Users&rdquo; in the product Save Notification Settings to be able to receive notifications to your LineApp
Notes: You can add multiple MS Teams user to the Channel/s
`}),e.add({id:144,href:"/modules/home/maps/logmap/",title:"Logical Map",content:`Logical Map allows the user to set various types of backgrounds so that there is a useful representation of the enterprise network and systems.
To view the current logical maps, click on &lt;Home&gt; in the Left Navigation Bar, then &lt;Maps&gt; in the top navigation bar. Click on &lt;Logical Map&gt;, and you can view the current information and status of devices in a specific location.
To create a new logical map, click enter the map name, and click &lt;+Add new view&gt;.
Click on the new view name that you have just created, click , click &lt;+Add objects&gt;, to bring up an edit menu.
From the pop-up menu, you can set background pictures or upload your own pictures. Drag and drop the devices and symbols into the picture. When completed, close the pop-up menu and save.
`}),e.add({id:145,href:"/administrative/admin/logs/",title:"Logs",content:`Click on &lt;Logs&gt; in the Top navigation bar.
System Logs Operation Logs Notification Logs Scheduler Logs Internal Logs Debug Logs `}),e.add({id:146,href:"/administrative/admin/elasticsearch/maintenance/",title:"Maintenance",content:`Click on &lt;Maintenance&gt; in the Top navigation bar.
This page shows you two options:
Data retention Snapshots Backup and restore. Data Retention Data retention setting can be changed by clicking on Change the retention period for different data:
Configurations data: specify how long the system keeps the backup of configuration. Metrics historical data: specify how long the system keeps the Metrics performance data. Logs data: specify how long the system keeps the SIEM related logs data. NetFlow traffic flow data: specify how long the system keeps the NetFlow data. APM transactions data: specify how long the system keeps the APM data. Once completed, click on Snapshots Snapshots are used for critical system management and data protection functions. They create point-in-time copies of the system’s state, enabling quick data recovery, system rollbacks, and historical analysis.
The ‘Snapshots’ tab displays a list of system snapshots.
Information includes:
Snapshot name: name and timestamp of snapshot. Status: outcome of the snapshot. Duration: time taken to create the snapshot. Indices: number of data indices included in the snapshot. Take a Snapshot Click on to take a snapshot of the database.
Delete a Snapshot Hover over the snapshot and click on to delete the selected snapshot.
To bulk delete, tick the snapshots to be deleted and click on to delete them.
Restore Indices Click on the snapshot.
Once clicked, a panel will appear and display the detailed contents of the system snapshot.
Tick the indices and click on to restore specific parts of the system.
Space Estimation Space Estimation is used to estimate storage requirements for monitoring data.
The ‘Space Estimation’ tab displays the options for managing data storage and system settings.
Information includes:
Monitor type: a dropdown menu allowing users to select the type of monitor. Monitor interval: a dropdown menu to select the interval for monitoring. Data Replication Count: a field to specify the number of times the data is replicated. Instance Count: a field to specify the number of instances for the monitoring type. Archives Archives is used for managing archived data within the system. Users can view, search, and restore archived logs, metrics, APM data, and NetFlow data. Archiving is essential for optimizing storage, enhancing performance, ensuring compliance, and managing data growth.
Dashboards Dashboards are used for organizing, managing, and collaborating on dashboards within the system.
The ‘Full List’ tab displays an overview of all available dashboards, their ownership, categorization, and sharing status, which facilitates better management and collaboration.
Information includes:
User: username of the individual who created the dashboard. Group: group under which the dashboard falls. Name: name of the dashboard. Shared: indicates whether the dashboard is shared with other users. Delete Dashboard Click on to delete the dashboard.
Backup and Restore This tab is to do the backup and restore for NetGain Systems configuration.
Upload local backup: to upload a local backup copy to the system. Backup now: to do the configuration backup now. Download to local: to download the configuration as a zipped copy to the local drive. Restore: restore the configuration that you selected. Delete: delete the backup copy. `}),e.add({id:147,href:"/modules/netflow/settings_maintenance/maintenance/",title:"Maintenance",content:`The &lsquo;Performance&rsquo; tab displays various flow-related metrics and statistics for the network traffic being monitored and analyzed by the NetFlow system.
Information includes:
Flows Rate Per Minute: this indicates the rate at which network flows are being received and processed per minute Flows Rate Per Sec: this shows the rate of network flows being handled per second Flows Count Last 1 Minute: the total number of network flows captured and analyzed in the last 1-minute window Total Flows Ingested: the cumulative count of all network flows that have been ingested or taken in by the system Total Flows Written: the total number of network flows that have been processed and written or stored by the system Under Maintenance feature of the NetFlow Settings, user can simulate data for presentation purposes and can view logs of flows coming in to NetGain NetFlow feature.
`}),e.add({id:148,href:"/modules/siem/log_analytics/mapping/",title:"Mapping",content:`NetGain Systems supports some log mapping by default. The common logs follows Common Event Format (CEF), and some other mappings supported by default are Aruba, Cisco, Fortinet logs etc.
If user want to customize log mapping, user can use the &lt;GROK console&gt; and &lt;test mapping&gt;. After getting the customize mapping GROK expression, user can add the mapping rule in &lt;+ Add mapping&gt;.
&lt;Performance&gt; can be used to check Elasticsearch ingest performance.
GROK Console User can use the sample logs provided, to test out the GROK expression. Delete anything in front of the {.*} can make the expression bypass to mapped certain field.
The mapped output fields are on the right. User can control the output mapped fields using GROK expression.
User can add the new GROK expression in &lt;+Add mapping&gt;. After adding, user can test the mapping rule against all configured mappings in &lt;Test Mapping&gt; to check if the log if mapped intendedly to the desired field.
`}),e.add({id:149,href:"/modules/metrics/metrics/",title:"Metrics Policy",content:`The module allows the user to configure or setup a policy for the devices and monitors. To access Policy module, click &lt;Metrics&gt; on the Left Navigation Bar then &lt;Policy&gt;.
Blackout Schedule SNMP V3 Users Global Rules Rules Audit `}),e.add({id:150,href:"/administrative/tools/diagnostic/mibbrowser/",title:"MIB Browser",content:`This tool helps user to load the devices’ MIBs file to NetGain Systems Infrastructure Monitoring server, to browse OID information and to allow user to know the particular OID of the device.
Click on &lt;MIB Browser&gt; and then click on &lt;+Load new mib&gt;.
Then click on &lt;Choose File&gt; to choose the devices MIB file.
Then click on &lt;Upload&gt; to upload MIB file to Infrastructure Monitoring server.
Screen will appear with the MIB file under &lt;Loaded mibs&gt;.
Then user can browse OID information.
`}),e.add({id:151,href:"/modules/siem/mitreattack/",title:"MITRE ATT&CK",content:`MITRE ATT&amp;CK® is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. The ATT&amp;CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.
MITRE ATT&amp;CK is an information tab that allow user to link certain threats to the MITRE techniques ID. User can refer more info from this link: https://attack.mitre.org/
`}),e.add({id:152,href:"/modules/siem/security_analytics/mitreattack/",title:"MITRE ATT&CK",content:`MITRE ATT&amp;CK® is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. The ATT&amp;CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.
MITRE ATT&amp;CK is an information tab that allow user to link certain threats to the MITRE techniques ID. User can refer more info from this link: https://attack.mitre.org/
`}),e.add({id:153,href:"/modules/alerts/monitoralerts/",title:"Monitor Alerts",content:`NetGain Systems Infrastructure Monitoring uses the following color codes to distinguish between the different severity of alerts.
Color Severity Color Severity Red Critical Blue Warning Orange Major Green Normal Yellow Minor Gray Disabled `}),e.add({id:154,href:"/modules/metrics/monitor-business/",title:"Monitor by Business Types",content:`Business view is used to monitor the health and status of various business services within the system.
The ‘Business view’ tab displays an overview of various business services and their status in a list format.
Information includes:
Object: name of business service Status Indicators: the different colors and numbers used to represent the health and operational status of the business service Update time: displays the last time the status was updated Description: additional information of the business service View Components of Object Click on Object to further view components of the business service. [Components can also be viewed in BizViews] Edit Object [Adding of New Business, Services or Service Dependency can be found under Business Views of NetGain Docs]
Click on to configure and manage the business services.
Once clicked, the page will navigate to the dedicated page for editing.
Click on to enable or disable the business service.
Click on to edit the threshold setting of the business service.
Once clicked, the page will navigate to the dedicated page of the selected service for editing of the threshold settings.
Click on to edit basic information of the business service.
Once clicked, the page will navigate to the dedicated page for editing.
You are able to edit the Label, Description and SLA weightage.
Click onto delete the business service.
Bulk Selection Of Objects Click on Action to apply the selected action to multiple business services at once.
Action includes:
Enable monitoring: activates monitoring, allowing it to track performance and status Disabling monitoring: deactivates monitoring, stopping its tracking and status updates Set as monitor exception: marks the selected business service as an exception, it will not be included in certain monitoring rules Re-discover monitors: re-discover monitors from the selected business services Delete: removes the selected business service from the monitoring list Once selected, choose which business services to apply the action on.
`}),e.add({id:155,href:"/modules/metrics/monitor-by-device-types/",title:"Monitor by Device Type",content:`Click on &lt;Metrics&gt; in the Left Navigation Bar, then &lt;Metrics&gt; in the Top Navigation Bar. Then click on &lt;Objects&gt; in the top menu, and click on &lt;Device view&gt;.
You will be able to see an overview of the monitored devices by their device types. All monitored devices that are added during device discovery will be added by default under Metrics &gt; ROOT &gt; Device View, and are automatically categorized into their device types, eg, Server, Storage, Network. You can rename or create new device types based on your requirements.
`}),e.add({id:156,href:"/troubleshooting_guides/FAQ/monitoringdiscovery/",title:"Monitoring & Discovery",content:`In Constructions
`}),e.add({id:157,href:"/modules/metrics/monitoralerts/",title:"Monitoring by Alert Types",content:`You can select the severity of the alerts at the top of the table to see those see the status of the devices that have the selected alert type. You can also make changes to the alert threshold settings.
Click on &lt;Metrics&gt; in the Left Navigation Bar, then &lt;Metrics&gt; in the Top Navigation Bar. Then click on &lt;Types&gt; in the top menu.
– Shows historical data of the monitor
`}),e.add({id:158,href:"/modules/alerts/integrations/msteams/",title:"MSTeams notifications",content:`This document is to provide a step by step setup for MS Teams integration to be setup as the notifications channel.
Pre-Requisites Steps Pre-Requisites Download Microsoft (MS) Teams App Windows / MacOS WebApp Android IOS MS Teams Account details MS Teams Webhook Steps Download MS Teams App for Windows / MacOS or just simple use the WebApp Register or Login with your Office365 account Add an incoming Webhook to a Teams channel
a. Create your team (e.g. “IT Infra Alerts”)
b. In your team, create more Channels
c. Navigate to the channel where you want to add the Webhook and select (•••) More Options from the top navigation bar.
d. Choose Connectors from the drop-down menu and search for Incoming Webhook.
e. Click add then provide a name, and, optionally, upload an image avatar for your Webhook.
f. The dialog window will present a unique URL that will map to the channel. Make sure that you copy and save the URL—you will need to provide it to the outside service.
g. Select the Done button. The Webhook will be available in the team channel. Go now to GUI, Alarms &gt; Notification &gt; Microsoft Teams and click +Create. Key-in your Label and copy the given Webhook to Microsoft Teams settings Send Test message, if successful you can now save Create desired notification Rules and don&rsquo;t forget to tick the “Microsoft Teams” box to enable the MS Teams alert messaging. Create your MS Teams content in notification rules or just simply put “default” to receive system generated alarms MS Teams label should be the same as the Label created in the MS Teams integration settings Notes: You can add multiple MS Teams user to the Channel/s
`}),e.add({id:159,href:"/administrative/admin/accounts/myprofile/",title:"My Profile",content:`This module allows you to change your current login user profile.
Click on the &lt;My Profile&gt; in the Top Navigation Bar
You can specify or change some information including
Username Password Description Email Mobile LINE ID Once finished, click on &lt;Save&gt; to save the changes.
Modify Photo This sub module allows you to change the user profile photo.
Click on &lt;Modify Photo&gt;
Choose the photo by clicking on &lt;Choose file&gt;, and then click on &lt;Upload photo&gt; to upload and make changes. Once finished, click on &lt;Save&gt; to save the changes.
Enable or Disable 2FA This sub module allows you to enable/disable 2FA when logging in to NetGain Systems Infrastructure Monitoring web GUI.
Click on &lt;Enable 2FA&gt;
Click on &lt;OK&gt; to confirm enable of 2FA
Follow the steps below to complete the 2FA setup
To disable the 2FA, click on &lt; &gt;
Click on &lt;OK&gt; to confirm disable of 2FA
`}),e.add({id:160,href:"/modules/siem/log_analytics/reports/compliance/nerc/",title:"NERC",content:`In &lt;NERC&gt; there are 10 report templates.
CIP 005-6 R1.3
Windows : Audit Policy Changed Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Right Assigned Windows : User Rights Removed CIP 007-6 R1.1
Windows : Windows Firewall Group Policy Changes Windows : Windows Firewall Rule Added Windows : Windows Firewall Rule Deleted Windows : Windows Firewall Rule Modified Windows : Windows Firewall Setting Changed Windows : Windows Firewall Setting Restored CIP 007-6 R3.1
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Exe or DLL File Allowed to Run Windows : Exe or DLL File Not Allowed to Run Windows : Exe or DLL Files Not Allowed to Run due to Enforced rules Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : MSI Script File Allowed to Run Windows : MSI Script Files Not Allowed to Run due to Enforced rules Windows : New Service Installed Windows : Service Failed Windows : Service Started Windows : Service Stopped Windows : Software Installed Windows : Software Restricted to Access Program Windows : Software Uninstalled Windows : Software Updated Windows : Threat Detections by Mcafee Windows : Threats Detection by Microsoft Antimalware Windows : Threats Detection by Norton AntiVirus Windows : Threats Detection by Sophos Anti-Virus Windows : Threats Detections by ESET Endpoint Antivirus Windows : Windows Startup and Windows Shutdown CIP 007-6 R4.1
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon CIP 007-6 R4.2
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon CIP 007-6 R5.3
Windows : Audit Policy Changed Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action CIP 007-6 R5.7
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon CIP 009-6 R1.3
Windows : Windows Firewall Group Policy Changes Windows : Windows Firewall Rule Added Windows : Windows Firewall Rule Deleted Windows : Windows Firewall Rule Modified Windows : Windows Firewall Setting Changed Windows : Windows Firewall Setting Restored Windows : Windows Individual User Action CIP 009-6 R1.4
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Failed Windows backup Windows : Filed Windows restores Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : Service Failed Windows : Service Started Windows : Service Stopped Windows : Software Installed Windows : Software Uninstalled Windows : Software Updated Windows : Successful Windows restores Windows : Successful windows backup Windows : Windows Startup and Windows Shutdown CIP 010-2 R1.1
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Exe or DLL File Allowed to Run Windows : Exe or DLL File Not Allowed to Run Windows : Exe or DLL Files Not Allowed to Run due to Enforced rules Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : MSI Script File Allowed to Run Windows : MSI Script Files Not Allowed to Run due to Enforced rules Windows : New Service Installed Windows : Service Failed Windows : Service Started Windows : Service Stopped Windows : Software Installed Windows : Software Restricted to Access Program Windows : Software Uninstalled Windows : Software Updated Windows : Windows Startup and Windows Shutdown `}),e.add({id:161,href:"/modules/siem/reports/compliance/nerc/",title:"NERC",content:`In &lt;NERC&gt; there are 10 report templates.
CIP 005-6 R1.3
Windows : Audit Policy Changed Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Right Assigned Windows : User Rights Removed CIP 007-6 R1.1
Windows : Windows Firewall Group Policy Changes Windows : Windows Firewall Rule Added Windows : Windows Firewall Rule Deleted Windows : Windows Firewall Rule Modified Windows : Windows Firewall Setting Changed Windows : Windows Firewall Setting Restored CIP 007-6 R3.1
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Exe or DLL File Allowed to Run Windows : Exe or DLL File Not Allowed to Run Windows : Exe or DLL Files Not Allowed to Run due to Enforced rules Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : MSI Script File Allowed to Run Windows : MSI Script Files Not Allowed to Run due to Enforced rules Windows : New Service Installed Windows : Service Failed Windows : Service Started Windows : Service Stopped Windows : Software Installed Windows : Software Restricted to Access Program Windows : Software Uninstalled Windows : Software Updated Windows : Threat Detections by Mcafee Windows : Threats Detection by Microsoft Antimalware Windows : Threats Detection by Norton AntiVirus Windows : Threats Detection by Sophos Anti-Virus Windows : Threats Detections by ESET Endpoint Antivirus Windows : Windows Startup and Windows Shutdown CIP 007-6 R4.1
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon CIP 007-6 R4.2
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon CIP 007-6 R5.3
Windows : Audit Policy Changed Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action CIP 007-6 R5.7
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon CIP 009-6 R1.3
Windows : Windows Firewall Group Policy Changes Windows : Windows Firewall Rule Added Windows : Windows Firewall Rule Deleted Windows : Windows Firewall Rule Modified Windows : Windows Firewall Setting Changed Windows : Windows Firewall Setting Restored Windows : Windows Individual User Action CIP 009-6 R1.4
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Failed Windows backup Windows : Filed Windows restores Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : Service Failed Windows : Service Started Windows : Service Stopped Windows : Software Installed Windows : Software Uninstalled Windows : Software Updated Windows : Successful Windows restores Windows : Successful windows backup Windows : Windows Startup and Windows Shutdown CIP 010-2 R1.1
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Exe or DLL File Allowed to Run Windows : Exe or DLL File Not Allowed to Run Windows : Exe or DLL Files Not Allowed to Run due to Enforced rules Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : MSI Script File Allowed to Run Windows : MSI Script Files Not Allowed to Run due to Enforced rules Windows : New Service Installed Windows : Service Failed Windows : Service Started Windows : Service Stopped Windows : Software Installed Windows : Software Restricted to Access Program Windows : Software Uninstalled Windows : Software Updated Windows : Windows Startup and Windows Shutdown `}),e.add({id:162,href:"/modules/siem/log_analytics/reports/compliance/nist/",title:"NIST",content:`In &lt;NIST&gt; there are 2 report templates.
Account Logon
Data Security (PR.DS)
Windows : Failed Network Logons Windows : Failed User Logons Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Removable Disk Creates Windows : Removable Disk Deletes Windows : Removable Disk Failed Creates Windows : Removable Disk Failed Deletes Windows : Removable Disk Failed Modifications Windows : Removable Disk Failed Reads Windows : Removable Disk Modifications Windows : Removable Disk Reads Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon Windows : Windows Individual User Action Windows : Wireless Network Authentications Windows : Wireless Network Connected Windows : Wireless Network Disconnected Object Access Risk Assessment (ID.RA)
Windows : Threat Detections by Mcafee Windows : Threats Detection by Microsoft Antimalware Windows : Threats Detection by Norton AntiVirus Windows : Threats Detection by Sophos Anti-Virus Windows : Threats Detections by ESET Endpoint Antivirus `}),e.add({id:163,href:"/modules/siem/reports/compliance/nist/",title:"NIST",content:`In &lt;NIST&gt; there are 2 report templates.
Account Logon
Data Security (PR.DS)
Windows : Failed Network Logons Windows : Failed User Logons Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Removable Disk Creates Windows : Removable Disk Deletes Windows : Removable Disk Failed Creates Windows : Removable Disk Failed Deletes Windows : Removable Disk Failed Modifications Windows : Removable Disk Failed Reads Windows : Removable Disk Modifications Windows : Removable Disk Reads Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon Windows : Windows Individual User Action Windows : Wireless Network Authentications Windows : Wireless Network Connected Windows : Wireless Network Disconnected Object Access Risk Assessment (ID.RA)
Windows : Threat Detections by Mcafee Windows : Threats Detection by Microsoft Antimalware Windows : Threats Detection by Norton AntiVirus Windows : Threats Detection by Sophos Anti-Virus Windows : Threats Detections by ESET Endpoint Antivirus `}),e.add({id:164,href:"/administrative/admin/logs/notificationlog/",title:"Notification Logs",content:`Click on &lt;Notification logs&gt; in the navigation bar.
It provides the history detailed records that how many notification messages been sent.
`}),e.add({id:165,href:"/modules/alerts/notificationrules/",title:"Notification Rules",content:`You can create Notification Rules to send SMS, email, 3rd party app messages, or audio and pop-up Windows alerts when your devices reach preset critical threshold levels. To create a Notification Rule, click on &lt;Alerts&gt; on the Left Navigation Bar, then click on &lt;Notifications&gt; on the Top Navigation Bar. Click on &lt;Rules&gt;, then &lt;+Create&gt;.
Fill in the details required to setup the rule, then click to save this rule:
Send once - set to notify the End-User once.
Send every time - set to notify the End-User from time to time.
Send when the alarm occurs at least - set to notify the End-User every time the alarm is violated.
Valid start and end - start time and end time for sending notification.
Send alarm acknowledge - notify the End-User when the alarm is acknowledged.
Send alarm annotation - notify the End-User when the alarm is annotation.
Send alarm cleared - notify the End-User when the alarm is cleared.
Roles to notify - Which user roles to notify.
User to notify - Which End-User to notify.
`}),e.add({id:166,href:"/modules/siem/log_analytics/reports/compliance/nrc/",title:"NRC",content:`In &lt;NRC&gt; there are 18 report templates.
ACT B.1.11
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : UnSuccessful Post Authentication Windows : UnSuccessful Pre Authentication Windows : User Logoff Windows : User Logon ACT B.1.15
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon ACT B.1.17
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : Software Installed Windows : Software Uninstalled Windows : Software Updated Windows : Windows Startup and Windows Shutdown Windows : Wireless Network Authentications Windows : Wireless Network Connected Windows : Wireless Network Disconnected ACT B.1.19
Windows : Removable Disk Creates Windows : Removable Disk Deletes Windows : Removable Disk Failed Creates Windows : Removable Disk Failed Deletes Windows : Removable Disk Failed Modifications Windows : Removable Disk Failed Reads Windows : Removable Disk Modifications Windows : Removable Disk Reads ACT B.1.2
Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified ACT B.1.22
Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Windows Individual User Action ACT B.1.3
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon ACT B.1.5
Windows : Audit Policy Changed Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action ACT B.1.6
Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Windows Individual User Action ACT B.1.7
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon ACT B.2.6
Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Windows Individual User Action ACT B.3.11
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon Windows : Service Failed Windows : Service Started Windows : Service Stopped Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon ACT C.11.4
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon ACT C.11.6
Windows : Audit Policy Changed Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : User Right Assigned Windows : User Rights Removed ACT C.2.2
Windows : Audit Policy Changed Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action ACT C.3.4
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : Software Installed Windows : Software Uninstalled Windows : Software Updated Windows : Windows Startup and Windows Shutdown ACT C.3.7
Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes ACT C.4.3
Windows : Failed Network Logons Windows : Failed User Logons Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon `}),e.add({id:167,href:"/modules/siem/reports/compliance/nrc/",title:"NRC",content:`In &lt;NRC&gt; there are 18 report templates.
ACT B.1.11
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : UnSuccessful Post Authentication Windows : UnSuccessful Pre Authentication Windows : User Logoff Windows : User Logon ACT B.1.15
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon ACT B.1.17
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : Software Installed Windows : Software Uninstalled Windows : Software Updated Windows : Windows Startup and Windows Shutdown Windows : Wireless Network Authentications Windows : Wireless Network Connected Windows : Wireless Network Disconnected ACT B.1.19
Windows : Removable Disk Creates Windows : Removable Disk Deletes Windows : Removable Disk Failed Creates Windows : Removable Disk Failed Deletes Windows : Removable Disk Failed Modifications Windows : Removable Disk Failed Reads Windows : Removable Disk Modifications Windows : Removable Disk Reads ACT B.1.2
Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified ACT B.1.22
Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Windows Individual User Action ACT B.1.3
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon ACT B.1.5
Windows : Audit Policy Changed Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action ACT B.1.6
Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Windows Individual User Action ACT B.1.7
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon ACT B.2.6
Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Windows Individual User Action ACT B.3.11
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon Windows : Service Failed Windows : Service Started Windows : Service Stopped Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon ACT C.11.4
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Rconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon ACT C.11.6
Windows : Audit Policy Changed Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : User Right Assigned Windows : User Rights Removed ACT C.2.2
Windows : Audit Policy Changed Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Individual User Action ACT C.3.4
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : Software Installed Windows : Software Uninstalled Windows : Software Updated Windows : Windows Startup and Windows Shutdown ACT C.3.7
Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes ACT C.4.3
Windows : Failed Network Logons Windows : Failed User Logons Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon `}),e.add({id:168,href:"/administrative/admin/logs/operationlog/",title:"Operation Logs",content:`Click on &lt;Operation logs&gt; in the navigation bar.
It provides NetGain Systems Infrastructure Monitoring user login event, change of account or other Ops related events.
`}),e.add({id:169,href:"/modules/alerts/othersettings/",title:"Other Alert Notification Settings",content:`Besides Email and SMS notification, there are other methods to alert users, including 3rd party messaging apps such as Slack, MS Teams, WeChat, Alicloud, LINE and Telegram.
Slack – uses webhooks to integrate (https://api.slack.com/messaging/webhooks)
MS Teams – uses webhooks to integrate (https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook)
WeChat – uses CorpID, CorpSecret and AgentID to integrate (https://mp.weixin.qq.com/)
AliCloud – uses Access Key ID, Access Secret, Sign Name, Template Code, and Phone number to integrate (https://help.aliyun.com/document_detail/101300.html)
LINE app – uses Channel access token to integrate (https://gateway.internal.netgain-systems.com/u/gw#line_integration)
Telegram – uses token, botFather and ChatID to integrate (https://core.telegram.org/bots#6-botfather)
Users can generate a test message to check that the alert notification via these messaging apps have been properly setup.
`}),e.add({id:170,href:"/modules/siem/log_analytics/reports/compliance/pcidss/",title:"PCI-DSS",content:`In &lt;PCI-DSS&gt; there are 6 report templates.
PCI-DSS requirements 10.1
Windows : Failed Network Logons Windows : Failed User Logons Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Registry Created Windows : Registry Deleted Windows : Registry Value Modified Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logon Windows : Windows Individual User Action PCI-DSS requirements 10.2.1
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logon PCI-DSS requirements 10.2.2
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logon Windows : Windows Individual User Action PCI-DSS requirement 10.2.3
Windows : Audit Policy Changed Windows : Failed Network Logons Windows : Failed User Logons Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Registry Created Windows : Registry Deleted Windows : Registry Value Modified Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Logoff Windows : User Logon Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Firewall Group Policy Changes Windows : Windows Firewall Rule Added Windows : Windows Firewall Rule Deleted Windows : Windows Firewall Rule Modified Windows : Windows Firewall Setting Changed Windows : Windows Firewall Setting Restored PCI-DSS requirements 10.2.6
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : Software Installed Windows : Software Uninstalled Windows : Software Updated Windows : Windows Startup and Windows Shutdown PCI-DSS requirements 10.2.7
Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission Changes `}),e.add({id:171,href:"/modules/siem/reports/compliance/pcidss/",title:"PCI-DSS",content:`In &lt;PCI-DSS&gt; there are 6 report templates.
PCI-DSS requirements 10.1
Windows : Failed Network Logons Windows : Failed User Logons Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Registry Created Windows : Registry Deleted Windows : Registry Value Modified Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logon Windows : Windows Individual User Action PCI-DSS requirements 10.2.1
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logon PCI-DSS requirements 10.2.2
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logon Windows : Windows Individual User Action PCI-DSS requirement 10.2.3
Windows : Audit Policy Changed Windows : Failed Network Logons Windows : Failed User Logons Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Registry Created Windows : Registry Deleted Windows : Registry Value Modified Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Logoff Windows : User Logon Windows : User Right Assigned Windows : User Rights Removed Windows : Windows Firewall Group Policy Changes Windows : Windows Firewall Rule Added Windows : Windows Firewall Rule Deleted Windows : Windows Firewall Rule Modified Windows : Windows Firewall Setting Changed Windows : Windows Firewall Setting Restored PCI-DSS requirements 10.2.6
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : Software Installed Windows : Software Uninstalled Windows : Software Updated Windows : Windows Startup and Windows Shutdown PCI-DSS requirements 10.2.7
Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission Changes `}),e.add({id:172,href:"/modules/siem/log_analytics/reports/compliance/pdpa/",title:"PDPA",content:`In &lt;PDPA&gt; there are 2 report templates.
RULE VI Section 25
Windows : Failed Network Logons Windows : Failed User Logons Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Removable Disk Creates Windows : Removable Disk Deletes Windows : Removable Disk Failed Creates Windows : Removable Disk Failed Deletes Windows : Removable Disk Failed Modifications Windows : Removable Disk Failed Reads Windows : Removable Disk Modifications Windows : Removable Disk Reads Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon Windows : Windows Individual User Action Windows : Wireless Network Authentications Windows : Wireless Network Connected Windows : Wireless Network Disconnected RULE VII Section 30
Windows : Failed Network Logons Windows : Failed User Logons Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission ChangesWindows : Network Logoffs Windows : Network Logon Windows : Removable Disk Creates Windows : Removable Disk Deletes Windows : Removable Disk Failed Creates Windows : Removable Disk Failed Deletes Windows : Removable Disk Failed Modifications Windows : Removable Disk Failed Reads Windows : Removable Disk Modifications Windows : Removable Disk Reads Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : UnSuccessful Post Authentication Windows : UnSuccessful Pre Authentication Windows : User Logoff Windows : User Logon Windows : Windows Individual User Action Windows : Wireless Network Authentications Windows : Wireless Network Connected Windows : Wireless Network Disconnected `}),e.add({id:173,href:"/modules/siem/reports/compliance/pdpa/",title:"PDPA",content:`In &lt;PDPA&gt; there are 2 report templates.
RULE VI Section 25
Windows : Failed Network Logons Windows : Failed User Logons Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes Windows : Network Logoffs Windows : Network Logon Windows : Removable Disk Creates Windows : Removable Disk Deletes Windows : Removable Disk Failed Creates Windows : Removable Disk Failed Deletes Windows : Removable Disk Failed Modifications Windows : Removable Disk Failed Reads Windows : Removable Disk Modifications Windows : Removable Disk Reads Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : Unsuccessful Post Authentication Windows : Unsuccessful Pre Authentication Windows : User Logoff Windows : User Logon Windows : Windows Individual User Action Windows : Wireless Network Authentications Windows : Wireless Network Connected Windows : Wireless Network Disconnected RULE VII Section 30
Windows : Failed Network Logons Windows : Failed User Logons Windows : File Created Windows : File Deleted Windows : File Modified Windows : File Permission ChangesWindows : Network Logoffs Windows : Network Logon Windows : Removable Disk Creates Windows : Removable Disk Deletes Windows : Removable Disk Failed Creates Windows : Removable Disk Failed Deletes Windows : Removable Disk Failed Modifications Windows : Removable Disk Failed Reads Windows : Removable Disk Modifications Windows : Removable Disk Reads Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : UnSuccessful Post Authentication Windows : UnSuccessful Pre Authentication Windows : User Logoff Windows : User Logon Windows : Windows Individual User Action Windows : Wireless Network Authentications Windows : Wireless Network Connected Windows : Wireless Network Disconnected `}),e.add({id:174,href:"/administrative/tools/diagnostic/ping/",title:"Ping",content:`This tool helps user to verify the connectivity between NetGain Systems Infrastructure Monitoring server and the destination devices.
Click on &lt;Ping&gt; then enter the IP address of destination devices. Then click on &lt;Execute&gt; to start ping test. The screen will appear with the ping result.
`}),e.add({id:175,href:"/troubleshooting_guides/FAQ/reporting/",title:"Report",content:`In Construction
`}),e.add({id:176,href:"/modules/apm/reports/",title:"Reports",content:`The report module is used to generate ad-hoc reports. This module supports:
Query string based report generation Auto delivery Download as excel Add new report The software allows users to flexibly define what kind of report they want to generate. To start, click on Give the report template a name, category, short description and the query string, for example:
Once done, click on ‘Save’
Report Generation Click on the report name and select the required time range to generate the report.
Report Download Click on to download the report, there will be a separate pop up window appeared, click on the ‘Download’ to proceed downloading.
Report template edit To edit the report, click on , once done click on ‘Save’
Schedule delivery of report You can set the schedule for the report to be generated and automatically delivered.
Click on , define the report that is going to send to whom, how frequent to generate and deliver this report.
Once done, click on ‘Save’.
`}),e.add({id:177,href:"/modules/netflow/reports/",title:"Reports",content:`You can create different NetFlow reports based on different search expressions.
To create a NetFlow report, click on &lt;NetFlow&gt; at the Left Navigation Bar, then click on &lt;Reports&gt; at the Top Navigation Bar. Click &lt;+Add new report&gt;.
Enter the relevant information including the desired search expression in the pop-up menu, then click &lt;Save&gt;.
You can retrieve the saved report by clicking on the submenu icon on the left side of the Reports page as shown, and clicking it from the selection of reports shown.
You can perform the following actions to your report by clicking on their icon in the menu:
&lt;Auto delivery&gt;, &lt;Download&gt; and &lt;Edit&gt;
Auto delivery: Schedule delivery of report (XLS/PDF) via Email
Click &lt;Save&gt; after you specify when you would like to receive the report via email. You can specify:
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
Clicking &lt;Download&gt; will download the report in Excel format.
Edit Report
Click &lt;Edit&gt; to change previous inputs, and click &lt;Save&gt; when done. You can also choose to delete the report by clicking &lt;Delete report&gt;.
`}),e.add({id:178,href:"/modules/siem/log_analytics/reports/",title:"Reports",content:`To access the SIEM Reports function, click on the &lt;SIEM&gt; icon at the Left Navigation Bar then click on &lt;Reports&gt; at the Top Navigation Bar.
There are 4 sub-menus in the Reports function:
Common Applications Compliance Ad Hoc `}),e.add({id:179,href:"/modules/siem/reports/",title:"Reports",content:`To access the SIEM Reports function, click on the &lt;SIEM&gt; icon at the Left Navigation Bar then click on &lt;Reports&gt; at the Top Navigation Bar.
There are 4 sub-menus in the Reports function:
Common Applications Compliance Ad Hoc `}),e.add({id:180,href:"/administrative/admin/system/restapis/",title:"Rest APIs",content:`This module describes the REST API and resources provided by NetGain Systems Infrastructure Monitoring.
Click on &lt;Rest APIs&gt; in the navigation bar.
`}),e.add({id:181,href:"/administrative/admin/accounts/roles/",title:"Roles",content:`The Administrator can control the newly created user’s access right through Roles. To create new role for the End-User. Click on &lt;+Create&gt; in the page.
The Administrator will select what kind of role the new user will be.
Role Users - selection of user account. Click the &lt;check box&gt; to select Role management domains - selection of devices/business which the user can access. Role topology view - selection of topology which the user can view Role access rights - Features of the system which the user can access and use. Once done, click on &lt;Save&gt;.
`}),e.add({id:182,href:"/modules/metrics/metrics/rulesaudit/",title:"Rules Audit",content:`User will be able to determine the standardization of the threshold parameters. It lets the user merge the old settings to new settings to make it standard.
If you want to make one rule similar to the others, click the link beside the monitor name and a pop-up screen will show. Select the rule number to merge from the previous selected then click &lt;modify&gt;
`}),e.add({id:183,href:"/modules/home/dashboards/savedashboard/",title:"Saving Dashboard",content:`Click on the button at the corner to save the dashboard.
`}),e.add({id:184,href:"/administrative/admin/logs/schedulerlog/",title:"Scheduler Logs",content:`Click on &lt;Scheduler logs&gt; in the Top navigation bar.
It shows the scheduler running history logs:
`}),e.add({id:185,href:"/modules/cmdb/schedulingbackup/",title:"Scheduling Configuration Backup",content:`This lets you schedule the backup of your Network Configuration. Click on &lt;Schedules&gt; at the top menu of &lt;Network Config&gt;.
Adding a Schedule To create a new schedule, click on &lt;+ Create&gt; in the main &lt;Schedules&gt; screen.
You can schedule the config backup by Device, Group or MO Group. Complete the schedule details and select the devices or groups the scheduled backup will apply to, then click &lt;Save&gt;.
Action Operation Name Name of this scheduled backup job. Start Date Date and Time to start backup. End Time End time to process backup. Interval Frequency of this backup job. After saving a new schedule, your new schedule will be shown on the main &lt;Schedules&gt; screen. By default, all new schedules are disabled. Click on &lt; &gt; to change to &lt; &gt; and enable the schedule.
Editing and Deleting a Schedule Click on &lt; &gt; to edit or &lt; &gt; to delete a schedule while in the main &lt;Schedules&gt; screen.
`}),e.add({id:186,href:"/modules/siem/log_analytics/schema/",title:"Schema",content:`This is information tab about Elastic Common Schema. User can get more from the following link: https://www.elastic.co/guide/en/ecs/current/index.html
`}),e.add({id:187,href:"/modules/siem/log_analytics/search/",title:"Search",content:`SIEM search is for the user to do simple search through keywords or to do advance query string search. Example simple search:
➢	destination.ip : 10.168.104.3
➢	destination.ip : 10.168.104.3 OR app.name : ssl
Example advance search
➢	source.ip: 192.168.* | table destination.ip bytes
User can get more accurate result by searching the field name (event.category, destination.ip, app.name etc.)
User can get more info about the search syntax through the &lt;Help&gt; button.
User also can adjust time range from the drop-down menu and drag &amp; display time range from the graph itself.
`}),e.add({id:188,href:"/modules/siem/search/",title:"Search",content:`The search function here is like the search bar on Log Analytics. User can do simple search or advance query string on the logs that recorded threat. &lt;Help&gt; can be used to learn more about the query syntax.
User can select the time range and look at the number of threat logs on different time range.
`}),e.add({id:189,href:"/modules/siem/security_analytics/search/",title:"Search",content:`The search function here is like the search bar on Log Analytics. User can do simple search or advance query string on the logs that recorded threat. &lt;Help&gt; can be used to learn more about the query syntax.
User can select the time range and look at the number of threat logs on different time range.
`}),e.add({id:190,href:"/troubleshooting_guides/FAQ/security/",title:"Security",content:`How to request CSR generation Please change the following details according to customer requirements.
Create keystore: Create a new directory and generate a keystore:
cd /root mkdir ssl_28Jun2024 /root/netgain/jre/bin/keytool -genkey -alias TBA_by_Customer_CA -keyalg RSA -keystore /root/ssl_28Jun2024/customer_name.jks -keysize 4096 -ext SAN=dns:netgain_server_hostname.example.com, ip:netgain_server_ip Specify a password: any_password_preferred. Enter the following details when prompted:
Name: TBA by Customer CA, and normally it is NetGain server hostname. Organization Unit: TBA by Customer CA. Organization: TBA by Customer CA. City: TBA by Customer CA. State: TBA by Customer CA. Country: TBA by Customer CA. Generate CSR file to send to CA to sign: /root/netgain/jre/bin/keytool -certreq -keyalg RSA -alias TBA_by_Customer_CA -file certreq.csr -keystore /root/ssl_28Jun2024/customer_name.jks `}),e.add({id:191,href:"/modules/apm/apm/services/",title:"Services",content:`The ‘Services tab shows the information about the services that are managed by NetGain Systems APM.
Basic information includes:
Service Name Agent type Total Transactions Transactions per minute Total errors Errors per minute Average services response time Max services response time Check details of the service Click on any of the service name to go into the details of the services.
Once clicked, the page will go to the dedicated page for the selected service.
This page will include information similar to the previous page , and with more graphical view.
By scrolling down, you will see each of the transacntions name with further details.
Name: the transaction name Average response time 95th percentile response: how long did it take for this transaction at 95th percentile Transactions: how many times this transancation has been processed/executed Last transaction time Each transactions name is a set of mutliple sub-transactions. Further details can been seen by clicking on a particular transaction name:
Check details of a transaction To check the details of a single transaction, click on any of the transcation within the particular timeframe:
Once clicked, the details will be shown in both forms of span and table:
Once clicked, the details will be shown in both forms of span and table:
The table field will consist of at least 80 fields with the values, and this is very useful for Ops team or dev team to look at the details of a single transaction and proceed with further investigation.
Useful and frequently investigate fields are:
Event.outcome Host.ip Transaction.duration.us Source.ip User OS Transaction type User browser `}),e.add({id:192,href:"/installation/cloud_vista/setting-up/",title:"Setting up",content:"Getting up and running Signup for at CVS account at https://portal.netgain-systems.com/signup Login to your portal at https://portal.netgain-systems.com/login to create your CVS instance Install and setup emedge at local site(s) by following steps in this page Optionally install emedge-agent software on your server hosts that you would like to manage, with these steps Once done, monitoring metrics, logs and traffic data will now be automatically streamed to the assigned CVS instance "}),e.add({id:193,href:"/modules/netflow/settings_maintenance/",title:"Settings and Maintenance",content:`To navigate to NetFlow settings, click &lt;NetFlow&gt; on the Left navigation bar then &lt;Settings&gt;.
Applications Maintenance `}),e.add({id:194,href:"/administrative/admin/elasticsearch/shards/",title:"Shards",content:`Click on &lt;Shards&gt; in the Top navigation bar.
The shards page display how many shards are open in Elasticsearch. The maximum shards that one Elasticsearch can handle is 3000.
Once reached 3000, Elasticsearch service will stop, and NetGain Systems Infrastructure Monitoring will stop services. Please contact NetGain Systems support prior to the shards reaching 3000.
`}),e.add({id:195,href:"/troubleshooting_guides/FAQ/snmpinstall/",title:"SNMP Installation & Configuration",content:`How to discover monitors through SNMPV3 Click on Metrics, Discover.
Select v3 Version under SNMP and Input the rest of the information.
Click on to start discovering of devices.
After discovering, select the device you want to monitor.
Click to add the selected device.
Not able to discover devices via SNMP Check firewall rules with UDP port 161.
Verify SNMP settings. For Linux Check if SNMP is configured to start on boot:
chkconfig &ndash;list | grep snmpd Enable SNMP to start on boot: chkconfig snmpd on Verify SNMP is now enabled to start on boot: chkconfig &ndash;list | grep snmpd Start SNMP service: service snmpd start Verify SNMP is running: ps -ef | grep snmpd Verify SNMP Community String vi /etc/snmp/snmpd.conf rocommunity [community string] For Windows To view accepted the community string:
Search ‘Services’ in Windows Double click on SNMP Service Go to Security tab SSH to NetGain server and run SNMPwalk command.
snmpwalk -On -v 2c -c [community string] [IP address] Re-Discover SNMP device in Device Discovery of NetGain.
How to install SNMP for Windows 10 in PowerShell Run PowerShell as administrator.
Search ‘Windows PowerShell’ in Windows Right-click on Windows PowerShell and select Run as administrator Check status of specific Windows capabilities.
Get-WindowsCapability -Online -Name “SNMP*” Install specific Windows capability on the system.
Add-WindowsCapability -Online -Name “SNMP.Client~~~~0.0.1.0” Check the status of Windows capabilities again.
Get-WindowsCapability -Online -Name “SNMP*” Press the Windows key + R keyboard shortcut.
Input ‘services.msc’ in Run and click OK.
Users can check if the Services window includes the SNMP Service. If so, the above fix is successful.
Double click SNMP Service to open the window directly below. Check the service’s Startup type is configured to Automatic. Click Start if the service is currently stopped.
Go to Security tab and add community string and accept from any host. Select Apply and Click OK. How to install SNMP for Linux via SSH Connect to Linux machine via SSH.
ssh username@your-server-ip Update Package Lists. For Debian-based systems
sudo apt-get update For Red Hat-based systems sudo yum update Install SNMP and SNMP Utilities. For Debian-based systems
sudo apt-get install snmp snmpd snmp-mibs-downloader For Red-Hat based systems sudo yum install net-snmp net-snmp-utils Configure SNMP. For both Debian-based and Red-Hat based systems
sudo nano /etc/snmp/snmpd.conf Set read-only community string rocommunity public localhost
Map the community name “public” into a “security name” com2sec notConfigUser localhost public Start and enable the SNMP Service. For Debian-based systems
sudo systemctl start snmpd sudo systemctl enable snmpd For Red-Hat based systems sudo systemctl start snmpd sudo systemctl enable snmpd Allow SNMP Traffic through the Firewall (if applicable). For Debian-based systems with “ufw”
sudo ufw allow from any to any port 161 proto udp For Red-Hat based systems with “firewalld” sudo firewall-cmd &ndash;permanent &ndash;add-port=161/udp sudo firewall-cmd &ndash;reload Verify SNMP Installation.
snmpwalk -On -v 2c -c [community string] [IP address] How to integrate new devices via SNMP to support in Metrics Users must provide their SNMPwalk and SNMP MIB of their device.
NetGain will handle the integration and send the patch to the user.
`}),e.add({id:196,href:"/modules/metrics/metrics/snmpv3users/",title:"SNMP V3 Users",content:`The SNMP v3 user credentials can be set here.
Click &lt;Metrics&gt; on the Left navigation bar then &lt;Policy&gt;. Under &lt;SNMP v3 Users&gt; click &lt;Add new user&gt;.
`}),e.add({id:197,href:"/administrative/tools/diagnostic/snmpwalk/",title:"SNMPWALK",content:`This tool helps user to test the SNMP connectivity between NetGain Systems EM server to the destination devices and get the SNMP.
Click on &lt;SNMPWALK&gt; then enter the IP address of destination devices, Community, Version, Port, and Timeout.
Then click on &lt;Execute&gt; to start SNMPWALK. The screen will appear with the SNMPWALK result. You can generate SNMPWALK to text file by click on &lt;Download&gt;.
`}),e.add({id:198,href:"/modules/siem/log_analytics/sources/",title:"Sources",content:`This section enables the user to add logs into the system.
Log Sources To check for the log source from different IP at selected time range. User can get the information on total logs, Average Events Per Sec (EPS), Average Events Per Minute (EPM) , and Average Events Per Hour (EPH). User can further search form the table from search bar.
Log Volumes Log volumes can be used for monitoring and analyzing the amount of log data being generated within the system.
The ‘Log volumes’ tab displays the volume of data collected over a period of time. Basic Information includes:
Day Volume: in megabytes (MB) Volume: in bytes Update Log volumes data Click on to update Log volumes with the latest data.
Audit Logs The ‘Audit logs’ tab shows instructions on collecting and configuring audit logs from Linux/Unix and Windows systems using Auditbeat tool.
Add syslogs: To get network devices sending syslogs to NetGain Systems SIEM, user can follow the example guide in this tab.
Configure network devices to forward to NetGain Systems EM IP address, at port 514.
Check the GUI for some examples. User can get more information from the device vendor on how to configure for syslog forwarding.
Windows Event Logs: For windows event logs, Winlogbeat is needed to collect and parse logs from windows. User can follow the guide here to install, configure and collect logs.
Other logs: Logs from various systems and applications can use the elasticsearch Filebeat module to collect and parse logs. User can follow guide here to install and configure collector.
Sample Data: Sample data are available to ingest into SIEM log analytics module to stimulate real logs. This also support file import. User can use this sample data to check for mapping rule, search functions or for demonstration.
`}),e.add({id:199,href:"/modules/siem/log_analytics/reports/compliance/sox/",title:"SOX",content:`In &lt;SOX&gt; there are 7 report templates.
SEC 302(a)(4)(A)
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : Process Accessed Windows : Process Created Windows : Process Duplicated Windows : Process Terminated Windows : Software Install Windows : Software Uninstalled Windows : Software Updated Windows : Windows Startup and Windows Shutdown SEC 302(a)(4)(b)
Windows : Audit Policy Changed Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Right Assigned Windows : User Rights Removed SEC 302(a)(4)(C)
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logon SEC 302(a)(4)(D)
Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : UnSuccessful Post Authentication Windows : UnSuccessful Pre Authentication SEC 302(a)(5)(A)
Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes SEC 302(a)(5)(B)
Windows : Windows Individual User Action SEC 302(a)(6)
Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified `}),e.add({id:200,href:"/modules/siem/reports/compliance/sox/",title:"SOX",content:`In &lt;SOX&gt; there are 7 report templates.
SEC 302(a)(4)(A)
Windows : AD Backup Error Windows : Audit Logs Cleared Windows : Error in EventLog Service Windows : Event log automatic backup Windows : Falied hotpatcing Windows : Failed software installations Windows : Failed software installations due to privilege mismatches Windows : New Service Installed Windows : Process Accessed Windows : Process Created Windows : Process Duplicated Windows : Process Terminated Windows : Software Install Windows : Software Uninstalled Windows : Software Updated Windows : Windows Startup and Windows Shutdown SEC 302(a)(4)(b)
Windows : Audit Policy Changed Windows : Trusted Domain Created Windows : Trusted Domain Deleted Windows : Trusted Domain Modified Windows : User Right Assigned Windows : User Rights Removed SEC 302(a)(4)(C)
Windows : Failed Network Logons Windows : Failed User Logons Windows : Network Logoffs Windows : Network Logon Windows : Terminal Server Disconnected Windows : Terminal Server Reconnected Windows : User Logoff Windows : User Logon SEC 302(a)(4)(D)
Windows : Successful Post Authentication Windows : Successful Pre Authentication Windows : UnSuccessful Post Authentication Windows : UnSuccessful Pre Authentication SEC 302(a)(5)(A)
Windows : File Crated Windows : File Deleted Windows : File Modified Windows : File Permission Changes SEC 302(a)(5)(B)
Windows : Windows Individual User Action SEC 302(a)(6)
Windows : Computer Account Created Windows : Computer Account Deleted Windows : Computer Account Modified Windows : Group Created Windows : Group Deleted Windows : Group Modified Windows : User Account Created Windows : User Account Deleted Windows : User Account Locked Outs Windows : User Account Modified `}),e.add({id:201,href:"/administrative/admin/system/status/",title:"Status",content:`This sub module provides the detail status of the NetGain Systems Infrastructure Monitoring.
Includes below details:
Status – consist of NetGain Systems Infrastructure Monitoring system status of Monitors, Alarms, Memory, CPU and Threads User session – provides a list active user session Monitor queue – provides overview of monitors status Threads – provides overview of Thread status Memory – provides overview of Memory usage Metrics – provides EM performance statistics Data checker – a simple diagnosis tool for monitor troubleshoot for admin user `}),e.add({id:202,href:"/modules/apm/apm/syntheticmonitoring/",title:"Synthetic Monitoring",content:`Synthetic Monitoring is used to test and monitor applications by simulating user interactions with the software. The user needs to make a recording of a typical transaction, and the system will run the transaction automatically throughout the day. The performance of each run is shown.
Basic information includes:
Title Application URL Enabled status Last run Last run duration Last status Edit Application Click on to modify the information of the application.
Once clicked, the page will navigate to the configuration page.
Click on to edit the information of the application.
Once clicked, the page will navigate to the dedicated page of the selected application for editing.
Information includes:
Title Enabled: a toggle to enable or disable the application Monitor interval: the frequency at which the application should be monitored Page timeout: the maximum time allowed for the page to load Location Condition: define the criteria for generating alerts Click on to create a copy of the application with similar setups.
Click on to delete the application.
Recording the Simulated Transaction In your web application, right-click and click on Inspect.
Once clicked, a developer tools panel will appear.
Click on , then , and .
Once clicked, the page will navigate to the dedicated page to create a recording.
Click on to start the recording.
Input the recording name and click on .
The user will go through the simulated transaction.
Click on to end the recording.
This page captures the timeline of the interaction with the webpage.
Click on to export the recording as a JSON file.
Import the Recording Click on to start the import process.
Click on , then select the file and click on .
Successful upload.
View Details of the Application Click on the application title to further view the details of the application.
Once clicked, the page will navigate to the dedicated page of the selected application.
This page provides a performance log that shows when the application was tested, how long it took to complete each test, and whether the application passed the test. Information includes:
Timestamp: displays the exact time and date when each synthetic monitoring check was conducted Number of steps: total number of steps the user performed during the session Duration: total time taken to complete the steps Status: displays the outcome of the session Click on any of the logs to further view the individual steps involved in the Synthetic Monitoring process.
Once clicked, the page will navigate to the dedicated page of the selected log.
The steps are labeled sequentially, starting from Step 0. Each step provides a description of the action and is marked with a timestamp, status of the step, and the duration taken to successfully complete it.
Run Application Click on to run the synthetic transaction.
A panel will appear and run the steps on the web.
`}),e.add({id:203,href:"/administrative/admin/system/",title:"System",content:`System page allows End-User to see the overview of logs on the NetGain Systems Infrastructure Monitoring systems, system diagnostics to check on the system for error and system uptime.
Status License Rest APIs `}),e.add({id:204,href:"/administrative/admin/logs/systemlog/",title:"System Logs",content:`The End-User can quickly download Infrastructure Monitoring system related logs such as System Log, Operation Log, Vista logs, Notifications log, Scheduler log, Internal log, and Debug log as text files or Excel file for analysis.
Most frequently checked logs are: Notification and Internal logs.
Click on &lt;System logs&gt; in the navigation bar.
You may query the system log by specifying the time range.
`}),e.add({id:205,href:"/tags/",title:"Tags",content:""}),e.add({id:206,href:"/modules/siem/security_analytics/threatdetection/",title:"Threat Detection",content:`By default, NetGain Systems support around 500 detection rules. Detection rules are done through the query string.
For default rule, user can &lt;Disable&gt;, &lt;Enable&gt; and &lt;Edit&gt; the tags or description (but not query expression) in the edit.
To add new rule, user can add in &lt;Add new rule&gt;. User just need to specific the name, tags, description accordingly.
User can define the &lt;interval&gt; on how frequent for SIEM to run through this rule. For &lt;search window&gt; under logic type query, user can define the historical search window.
NetGain Systems supports 3 types of logic type: Python(sandbox), Query and Workflow to create new rules.
Python: Python API documentation is available in the GUI Query: Using search query or query expression. Workflow: Flow chart type logic. The workflows can be created in the &lt;AI Workflows&gt; Threat Intelligence &amp; Lookup Tables Threat Intelligence is where NetGain Systems gather the flagged IP or URL from establish sources and compare against the logs. User can choose to enable or disable particular sources.
For lookup tables, user can use it to create table to map key to a value. The key can be used in python script to run certain rules.
`}),e.add({id:207,href:"/modules/siem/threatdetection/",title:"Threat Detection",content:`By default, NetGain Systems support around 500 detection rules. Detection rules are done through the query string.
For default rule, user can &lt;Disable&gt;, &lt;Enable&gt; and &lt;Edit&gt; the tags or description (but not query expression) in the edit.
To add new rule, user can add in &lt;Add new rule&gt;. User just need to specific the name, tags, description accordingly.
User can define the &lt;interval&gt; on how frequent for SIEM to run through this rule. For &lt;search window&gt; under logic type query, user can define the historical search window.
NetGain Systems supports 3 types of logic type: Python(sandbox), Query and Workflow to create new rules.
Python: Python API documentation is available in the GUI Query: Using search query or query expression. Workflow: Flow chart type logic. The workflows can be created in the &lt;AI Workflows&gt; Threat Intelligence &amp; Lookup Tables Threat Intelligence is where NetGain Systems gather the flagged IP or URL from establish sources and compare against the logs. User can choose to enable or disable particular sources.
For lookup tables, user can use it to create table to map key to a value. The key can be used in python script to run certain rules.
`}),e.add({id:208,href:"/modules/siem/security_analytics/threatevents/",title:"Threat Events",content:`In Threat Events, user can search for the threat events based on their threat ID or threat message. Clicks on the events will bring up all the related log that linked to this threat.
User can also select the different time range to check for the events that happened.
`}),e.add({id:209,href:"/modules/siem/threatevents/",title:"Threat Events",content:`In Threat Events, user can search for the threat events based on their threat ID or threat message. Clicks on the events will bring up all the related log that linked to this threat.
User can also select the different time range to check for the events that happened.
`}),e.add({id:210,href:"/modules/metrics/thresholdsettings/",title:"Threshold Settings",content:`Click on &lt;Metrics&gt; in the Left Navigation Bar, then &lt;Metrics&gt; in the Top Navigation Bar. Then click on &lt;Objects&gt; in the top menu, and click on &lt;Device view&gt;. To adjust the threshold settings, click on the device type / device on the right side of the table and drill down till you see the monitoring parameter you would like to change. Click &lt;Edit&gt; to enable the edit mode and click the – Change threshold settings icon to edit the threshold settings.
Note: This lets you adjust the threshold settings of an individual monitor.
You can adjust the various settings according to your preferences. If you check the Alarm box, a notification will be sent when the threshold is breached, while if you check the Auto clear box, a notification will be sent when the issue is fixed.
Interval - Monitoring interval for data collection and saving history data
Temporarily Ignore - Temporarily disable the monitor and will go back to normal if the monitor will be up and running
Critical Interval - New monitoring interval when the monitor object is in critical status
Timeout - Specifies the timeout period when performing data collection for the monitor
Retries - Number of retries if the monitor is not in normal status, before generating an alarm
Retry Interval - Specifies the time between retries
Max Concurrent - Maximum number of concurrent sessions
Hostname/IP - IP address of the device
Method - Method used to discover the device
Monitor Value - Setting the value for the threshold
Operator - Used for performing validation
Value - Used to check and validate the actual result of the monitored device by matching the monitor value against the operator.
Severity - Used to determine the severity of the threshold value set
Alarm Check box - Check the box to enable the Alarm function for the monitor
Auto Clear Check box - Check the box to enable the Auto Clear function for the monitor
`}),e.add({id:211,href:"/modules/siem/log_analytics/reports/adhoc/addreport/",title:"To add a new report",content:`Click &lt;+Add new report&gt;.
Report title – Enter report title.
Category – Enter report category.
Description – Enter description of report.
Search expression – Enter search expression.
Visibility – Select who can see this report (Owner/All)
Save – Save report
`}),e.add({id:212,href:"/modules/siem/reports/adhoc/addreport/",title:"To add a new report",content:`Click &lt;+Add new report&gt;.
Report title – Enter report title.
Category – Enter report category.
Description – Enter description of report.
Search expression – Enter search expression.
Visibility – Select who can see this report (Owner/All)
Save – Save report
`}),e.add({id:213,href:"/modules/siem/log_analytics/reports/adhoc/autodelivery/",title:"To create auto delivery report setting",content:`
Mail Subject – enter mail subject.
Mail Body – Enter mail body.
Target Address (s) – Enter email address.
Format – Select report file type. (Excel/PDF)
Data time range – Enter time range (Day(s)/Month(s)/Minute(s))
Delivery schedule – Select delivery schedule (Monthly/Weekly/Daily/Hourly)
Day of month – Enter day of month
Weekday – Enter weekday number
Hour of day – Enter number of hour
Save – Save report
`}),e.add({id:214,href:"/modules/siem/reports/adhoc/autodelivery/",title:"To create auto delivery report setting",content:`
Mail Subject – enter mail subject.
Mail Body – Enter mail body.
Target Address (s) – Enter email address.
Format – Select report file type. (Excel/PDF)
Data time range – Enter time range (Day(s)/Month(s)/Minute(s))
Delivery schedule – Select delivery schedule (Monthly/Weekly/Daily/Hourly)
Day of month – Enter day of month
Weekday – Enter weekday number
Hour of day – Enter number of hour
Save – Save report
`}),e.add({id:215,href:"/modules/siem/log_analytics/reports/adhoc/downloadreport/",title:"To download report",content:`Download Excel – Download report to local computer in Excel file.
Download PDF – Download report to local computer in PDF file.
Download CSV – Download report to local compute in SCV file
`}),e.add({id:216,href:"/modules/siem/reports/adhoc/downloadreport/",title:"To download report",content:`Download Excel – Download report to local computer in Excel file.
Download PDF – Download report to local computer in PDF file.
Download CSV – Download report to local compute in SCV file
`}),e.add({id:217,href:"/modules/siem/log_analytics/reports/adhoc/editreport/",title:"To edit report",content:`
Report title – Enter report title.
Category – Enter report category.
Description – Enter description of report.
Search expression – Enter search expression.
Visibility – Select who can see this report (Owner/All)
Delete report – Delete report
Save – Save report
`}),e.add({id:218,href:"/modules/siem/reports/adhoc/editreport/",title:"To edit report",content:`
Report title – Enter report title.
Category – Enter report category.
Description – Enter description of report.
Search expression – Enter search expression.
Visibility – Select who can see this report (Owner/All)
Delete report – Delete report
Save – Save report
`}),e.add({id:219,href:"/administrative/tools/",title:"Tools",content:`NetGain Systems Infrastructure Monitoring provides diagnostic tools for troubleshooting and agents for installation on the servers that needs to be monitored. Click on &lt;Tools&gt; at the left navigation bar.
Diagnostic Agent Download `}),e.add({id:220,href:"/modules/home/topnavbar/",title:"Top Navigation Bar",content:`The Top Navigation Bar displays different functions, depending on the module selected from the Left Navigation Bar. The current selected function will be underlined. For the Home Page, the available functions are:
Dashboards: for default dashboards as well customizable dashboards to display. BizViews: to view the services availability, status and performance from a business or services perspectives. Maps: to view devices status from a logical, physical or geographic view. `}),e.add({id:221,href:"/troubleshooting_guides/FAQ/user_management/",title:"User Management",content:`How to unlock my user account if its locked Admin account is needed in order to unlock user’s account.
Login to Admin account, click on Admin, Accounts, Users.
Click on to edit the information of user’s account.
Admin will change the password of user and tick the Unlock box and save. Admin can also edit settings like ‘Login attempts strategy’ and ‘Change Password # of days’.
How does reset password on User Management work Reset password only works when user has added their email address in the user profile. The newly generated password will be sent to the user email.
What is the password policy for CV Password has a minimum of 4 characters and is case sensitive. A strong password consists of Uppercase letters, lowercase letters, numbers and symbols.
How to set the duration for password expiry Login to Admin account, click on Admin, Accounts, Users.
Change the input to the desired days. `}),e.add({id:222,href:"/administrative/admin/accounts/users/",title:"Users",content:`You can specify different access rights for different roles, for example, specifying that business staff only receive system warnings but not able to perform operations. Different access rights will affect the administrative rights you have, and thus access to features in the Administrator interface.
Click on &lt;Account&gt; - &lt;Users&gt;
Click on &lt;+Create&gt;
Enter the information about the user. These are the basic information to be entered to create new user.
Username Password Display Name Click on &lt;Save&gt; once information is filled in.
`}),e.add({id:223,href:"/modules/netflow/usingnta/",title:"Using Network Traffic Analytics",content:`The &lsquo;Overview&rsquo; tab displays the general summary of network traffic data.
This overview can gain insights into the network usage patterns and detect any anomalies.
Click on to view network data by Bytes.
Applications The &lsquo;Applications&rsquo; tab displays a detailed view of the network traffic categorized by different applications.
The pie chart displays the distribution of network traffic among the top applications. The graph displays the traffic trend over time for the top applications. The x-axis represents the time, while the y-axis represents the volume of traffic. The table displays the detailed information about the individual traffic flows. Network Sources The &lsquo;Network Sources&rsquo; tab displays a detailed analysis of the top source IP addresses generating network traffic.
The pie chart displays the top source IP addresses contributing to network traffic. The line graph displays the traffic trends over time for the top source IP addresses. The table displays the detailed breakdown of network traffic for each source IP address. Network Destinations The &lsquo;Network Destinations&rsquo; tab displays an analysis of the top IP addresses receiving network traffic.
The pie chart displays the top destination IP addresses receiving the most network traffic. The line graph displays the traffic trends over time for the top destination IP addresses. The table displays a detailed breakdown of network traffic for each destination IP address. Network Conversations The &lsquo;Network Conversations&rsquo; tab displays a view of the top conversations between source and destination IP addresses in the network.
The pie chart displays the top conversation between IP addresses. The line graph displays the traffic trends over time for the top conversations. The table displays a detailed breakdown of each network conversation. Map Map is used for displaying and analyzing network traffic flows between geographic locations.
The &lsquo;Map&rsquo; tab displays a global network traffic visualization.
Click on to view details.
Search To use the NetFlow feature, click on &lt;NetFlow&gt; on the Left Navigation Bar, then &lt;NetFlow&gt; at the Top Navigation Bar.
Click on &lt;Search&gt; to search and query different network flows. Click on &lt;?&gt; for help in performing a search.
You can see the most recent search query and specify the time range.
You can find flow information quickly with Text Box Search. To search for any desired information, enter the information you want to search, such as Text, Numeric, Fields, Wildcards, or others in the Text Box Search.
Example of search: application : ORACLE OR destination.port : 25
You can change the time range of the data to be searched.
When you enter search terms, smart suggestions show possible search fields.
You can display “Recent searches” and “Save current query” for future searches.
`}),e.add({id:224,href:"/modules/apm/watcher/",title:"Watcher",content:`APM Watcher is used to watch out for specified data within APM. The system generates an alarm when the data contains the specified query string. This is useful for identifying problems quickly.
To use APM Watcher, click on &lt;APM&gt; on the Left Navigation Bar, then click on &lt;Watcher&gt; on the Top Navigation Bar. Click &lt;+Add rule&gt;.
Enter the data and rules to define what you want to watch out for and to receive an alarm when the conditions are met.
`}),e.add({id:225,href:"/modules/netflow/watcher/",title:"Watcher",content:`NetFlow Watcher is used to watch out for specified data within incoming data flows. The system generates an alarm when the incoming flows contains the specified query string and hits a specified amount of flow. This is useful to quickly detect what is using a lot of bandwidth.
To use NetFlow Watcher, click on &lt;NetFlow&gt; on the Left Navigation Bar, then click on &lt;Watcher&gt; on the Top Navigation Bar. Click &lt;+Add rule&gt;.
Enter the data and rules to define what you want to watch out for and to receive an alarm when the conditions are met.
Name - Input name of rule.
Enable - Select Yes/No
Run interval - Input interval time to run the rule.
Search window - Input past “x” time for flow search.
Query string - Input query string for flow search.
Flow Hits - Input flow hits “expressions” and “numbers”.
Alarm message - Input the alarm message.
Alarm generation - Select condition for alarm generate.
Click &lt;Save&gt; when done. Watcher will search the flow data according to the conditions set. Results are displayed on the main page of the Watcher menu.
`}),e.add({id:226,href:"/modules/siem/log_analytics/watcher/",title:"Watcher",content:`This function is used to watch out for specified data within incoming data logs. The system sends an alarm when the incoming log data contains a specified key word or phrase. This is useful to detect any known abnormalities or behavior.
To access the Watcher function, click on the &lt;SIEM&gt; icon at the Left Navigation Bar then click on &lt;Watcher&gt; at the Top Navigation Bar if not already at the Reports page.
Add Watcher Rule Click on Watcher &lt; &gt; and when you are in the Watcher menu, click .
Enter the data and rules to define what you want to watch out for and receive an alarm when the conditions are met.
Name – Input name of rule.
Enable – Select Yes/No to enable rule.
Run interval – Select interval time to run the rule.
Search windows – Select logs past time to run the rule.
Query string - Input query string value for logs search.
Log Hits - Input log hits “expression” and “numbers”
Alarm message – Input alarm message.
Alarm generation - Select condition for alarm generate.
Save – Save watcher rule.
Watcher will search the log data according to the conditions set. Results are displayed on the main page of the Watcher menu.
To view LogWatch alerts When the Watcher rule has been created and enabled, an alert will be generated if the specified key word or phrase is detected.
To see the alert message, click on Alerts icon at the Left Bavigation bar then click on &lt;Alerts&gt; at the Top Navigation Bar than click on &lt;Current&gt; at the sub menu bar then select &lt;LogsWatch Alarms&gt; at the drop down list menu.
`}),e.add({id:227,href:"/modules/siem/watcher/",title:"Watcher",content:`This function is used to watch out for specified data within incoming data logs. The system sends an alarm when the incoming log data contains a specified key word or phrase. This is useful to detect any known abnormalities or behavior.
To access the Watcher function, click on the &lt;SIEM&gt; icon at the Left Navigation Bar then click on &lt;Watcher&gt; at the Top Navigation Bar if not already at the Reports page.
Add Watcher Rule Click on Watcher &lt; &gt; and when you are in the Watcher menu, click .
Enter the data and rules to define what you want to watch out for and receive an alarm when the conditions are met.
Name – Input name of rule.
Enable – Select Yes/No to enable rule.
Run interval – Select interval time to run the rule.
Search windows – Select logs past time to run the rule.
Query string - Input query string value for logs search.
Log Hits - Input log hits “expression” and “numbers”
Alarm message – Input alarm message.
Alarm generation - Select condition for alarm generate.
Save – Save watcher rule.
Watcher will search the log data according to the conditions set. Results are displayed on the main page of the Watcher menu.
To view LogWatch alerts When the Watcher rule has been created and enabled, an alert will be generated if the specified key word or phrase is detected.
To see the alert message, click on Alerts icon at the Left Bavigation bar then click on &lt;Alerts&gt; at the Top Navigation Bar than click on &lt;Current&gt; at the sub menu bar then select &lt;LogsWatch Alarms&gt; at the drop down list menu.
`}),e.add({id:228,href:"/modules/home/dashboards/widgetdetails/",title:"Widget Details",content:` Category Widget Name Description Logs Histogram Query string driven. Shows logs histogram by different aggregation methods in the form of bar, line and area graphs.
Logs Summary Query string driven. Shows logs summary by different aggregation methods in the form of bar, pie, gauge, horizontal bar and line graphs. Logs SIEM Events Shows count of current security events generated APM Histogram Query string driven. Shows APM histogram by different aggregation methods in the form of bar, line and area graphs APM Summary Query string driven. Shows APM summary by different aggregation methods in the form of bar, pie, gauge, horizontal bar and line graphs. APM Errors Shows the current count of APM transaction errors APM Response Time Query string driven. Shows APM response time in the form of gauge, bar, pie, gauge, horizontal bar graphs. APM Response Time History Query string driven. Shows APM response time history trend in the form of bar, line and area graphs. NetFlow TopN Shows the Top N results in Pie chart for NetFlow related data: source.ip, destination.ip, application NetFlow Histogram Query string driven. Shows NetFlow histogram in the form of bar, line and area graphs. Monitor (Metrics) Report Provides graphical representation of specified monitor metrics Monitor (Metrics) Heatmap Shows the alarm heatmap by device category Monitor (Metrics) History Shows the history data and trend for a single monitor value Monitor (Metrics) Single Value Shows a single monitor value Monitor (Metrics) Monitor Gauge Shows a monitor value in the form of a gauge Monitor (Metrics) Unreachable Devices Shows a list of monitored devices that cannot be reached Monitor (Metrics) Device Overview Shows an overview of the monitored devices Monitor (Metrics) Monitor Status Shows the monitor status Monitor (Metrics) Monitor Summary Shows a summary of the monitor status. Alarm (Alerts) Alarm Summary Shows a summary of the current alarms Alarm (Alerts) Latest Alarms Shows the current alarms Bizviews Tree View Shows Bizview in tree view Bizviews Icon View Shows Bizview in icon view Maps Geographical Map Shows the device status in a geographical map Maps Logical Map Shows the device status in a logical map Tools IFrame Lets you integrate the Dashboard with a web supported iframe Tools Clock Displays the date and time Tools Banner Lets you create a banner message `})})()