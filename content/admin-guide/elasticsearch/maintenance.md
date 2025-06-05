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
