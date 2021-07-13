---
title: Sources
geekdocHidden: true
slug: sources
---

This section enables the user to add logs into the system.  


![Screenshot](/cloud_vista/loganalytics/images/sources1.png)

&nbsp;

### Log Sources
To check for the log source from different IP at selected time range. User can get the information on total logs, Average Events Per Sec (EPS), Average Events Per Minute (EPM) , and Average Events Per Hour (EPH).  User can further search form the table from search bar. 

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

