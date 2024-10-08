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
