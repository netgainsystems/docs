---
title: "Emedge Sites"

slug: "sites"
---

Sites are used for monitoring and managing distinct environments or deployments within the organization.

The ‘Current Sites’ tab displays sites that are being monitored by the system.

![Screenshot](/cloud_vista/Sites/images/Sites1.png)

**Basic information includes:**
- Site Name
- Site ID
- State
- Site IP
- Site Version

# View details of Sites

Click on the site name to view the details of the site.

![Screenshot](/cloud_vista/Sites/images/Sites2.png)

Once clicked, the page will navigate to the dedicated page of the selected site.

![Screenshot](/cloud_vista/Sites/images/Sites3.png)

This page provides details of the site and options for:
- Site’s health
- Update patch
- Disconnect site
- Backup images and logs

Click on ![Screenshot](/cloud_vista/Sites/images/health.png) to view the health of the site.

![Screenshot](/cloud_vista/Sites/images/Sites4.png)

Once clicked, the page will display the health status of the site.

![Screenshot](/cloud_vista/Sites/images/Sites5.png)

**Information includes:**
- Used Memory: Amount of memory currently used
- Total Memory: Total amount of memory available
- Max Memory: Maximum amount of memory that can be allocated
- Process CPU: CPU usage of the current process
- System CPU: Overall CPU usage of the system

Click on ![Screenshot](/cloud_vista/Sites/images/update.png) to view update patches.

![Screenshot](/cloud_vista/Sites/images/Sites6.png)

Once clicked, the page will display the available update patches.

![Screenshot](/cloud_vista/Sites/images/Sites7.png)

Click on ![Screenshot](/cloud_vista/Sites/images/disconnect.png) to disconnect the remote site.

![Screenshot](/cloud_vista/Sites/images/Sites8.png)

Click on ![Screenshot](/cloud_vista/Sites/images/backup.png) to make backups, delete, or restore.

![Screenshot](/cloud_vista/Sites/images/Sites9.png)

Once clicked, the page will display sites with options to delete or restore and also backup now.

![Screenshot](/cloud_vista/Sites/images/Sites10.png)

Click on ![Screenshot](/cloud_vista/Sites/images/logs.png) to download or tail logs or debug statements.

![Screenshot](/cloud_vista/Sites/images/Sites11.png)

Once clicked, the page will display options to download the latest logs, tail logs, enable, or disable debug statements.

![Screenshot](/cloud_vista/Sites/images/Sites12.png)

# Enable Debug

To get the debug statement, click on <Admin>, <Logs>, then <Debug log>.

![Screenshot](/cloud_vista/Sites/images/Sites13.png)

Copy the Logger.

![Screenshot](/cloud_vista/Sites/images/Sites14.png)

Paste into the package name and click on ![Screenshot](/cloud_vista/Sites/images/enable.png).

![Screenshot](/cloud_vista/Sites/images/Sites15.png)

Successful enabling debug.

![Screenshot](/cloud_vista/Sites/images/Sites16.png)

# Accepting New Sites

Click on Site ID to view details of the site.

![Screenshot](/cloud_vista/Sites/images/Sites17.png)

Once clicked, the page will navigate to the dedicated page of the selected site.

![Screenshot](/cloud_vista/Sites/images/Sites18.png)

Click on ![Screenshot](/cloud_vista/Sites/images/accept.png) to accept the site.

![Screenshot](/cloud_vista/Sites/images/Sites19.png)

Successful site acceptance.

![Screenshot](/cloud_vista/Sites/images/Sites20.png)

The ‘Usage’ tab displays a view of the usage metrics for different aspects of the monitoring platform.

![Screenshot](/cloud_vista/Sites/images/Sites21.png)

**Information includes:**
- Infra Monitoring (Nodes): Bar chart showing the number of nodes being monitored over time
- Logs: Bar chart showing the daily volume of logs in megabytes
- NetFlow: Bar chart showing the daily volume of NetFlow data in megabytes
- Network Configuration Management: Bar chart showing the number of nodes involved in network configuration management
- Application Performance Monitoring: Bar chart showing the daily transaction spans
