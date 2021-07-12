---
title: Maintenance
geekdocHidden: true
slug: maintenance
---

Click on \<Maintenance> in the Top navigation bar.

![Screenshot](/cloud_vista/sysadmin/images/maintenance1.png)

&nbsp;

This page shows you two options:
* Data retention
* Backup and restore.


### Data retention
Data retention setting can be changed by clicking on <img src="/cloud_vista/sysadmin/images/changesettingsicon.png" width="100px">

Change the retention period for different data:
* Configurations data : this is to specify how long the system keeps the backup of configuration
* Metrics historical data: this is to specify how long the system keeps the Metrics performance data
* Logs data: this is to specify how long the system keeps the SIEM related logs data
* NetFlow traffic flow data: this is to specify how long the system keeps the NetFlow data
* APM transactions data: this is to specify how long the system keeps the APM data

![Screenshot](/cloud_vista/sysadmin/images/maintenance2.png)

&nbsp;

Once completed, click on <img src="/cloud_vista/sysadmin/images/savesettingsicon.png" width="90px">

![Screenshot](/cloud_vista/sysadmin/images/maintenance3.png)

&nbsp;

### Backup and Restore
This tab is to do the backup and restore for {{% company %}} configuration.

![Screenshot](/cloud_vista/sysadmin/images/maintenance4.png)

&nbsp;

* Upload local backup: to upload a local backup copy to the system
* Backup now: to do the configuration back up now
* Download to local: to download the configuration as a zipped copy to local drive
* Restore: restore the configuration that you selected
* Delete: delete the backup copy
