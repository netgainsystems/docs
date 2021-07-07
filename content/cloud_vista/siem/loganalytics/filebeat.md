---
title: Filebeat
geekdocHidden: true
slug: filebeat
---

NetGain supports whether you’re collecting from security devices, cloud, containers, hosts, or OT, Filebeat helps you keep the simple things simple by offering a lightweight way to forward and centralize logs and files. 

### List of vendor supports

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

Zoom module

Zscaler module

\. testing commit and merge request


![Screenshot](/cloud_vista/siem/images/mapping.png)

&nbsp;

### GROK Console
User can use the sample logs provided, to test out the GROK expression. Delete anything in front of the {.*} can make the expression bypass to mapped certain field.

The mapped output fields are on the right. User can control the output mapped fields using GROK expression. 
fda
![Screenshot](/cloud_vista/siem/images/s.png)

User can add the new GROK expression in <+Add mapping>. After adding, user can test the mapping rule against all configured mappings in \<Test Mapping> to check if the log if mapped intendedly to the desired field.

