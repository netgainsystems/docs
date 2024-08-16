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

![Screenshot](/cloud_vista/inframonitoring/images/{{% imagehome %}}/discoverdevice1.png)

&nbsp;

### IP Subnet Method
Select \<IP Subnet> in \<Method> to discover devices using your own subnet. You can enter multiple subnets separated by a comma.

![Screenshot](/cloud_vista/inframonitoring/images/{{% imagehome %}}/discoverdevice2.png)

&nbsp;

### Specific IP Method
Select \<Specific IP> in \<Method>. Just input the IP Address of the devices to be discovered separated by a comma. 

![Screenshot](/cloud_vista/inframonitoring/images/{{% imagehome %}}/discoverdevice3.png)

&nbsp;

## Step 2

Enter the appropriate SNMP details. For the SNMP v1/v2, the default port number is “161” while the default SNMP community string for IT environments is “public”. 

![Screenshot](/cloud_vista/inframonitoring/images/{{% imagehome %}}/discoverdevice4.png)

&nbsp;

For SNMP v3, the default port number is 161 followed by the subsequent required fields. 

![Screenshot](/cloud_vista/inframonitoring/images/{{% imagehome %}}/discoverdevice5.png)

&nbsp;

## Step 3

After completing the discovery method and SNMP information, click on \<Start Discovery>. Once the scanning is completed, the list of devices discovered will be displayed with their relevant details.

![Screenshot](/cloud_vista/inframonitoring/images/{{% imagehome %}}/discoverdevice6.png)

&nbsp;

## Step 4

Ensure the devices to be added have a check mark, then click on <+Add selected devices>. 

![Screenshot](/cloud_vista/inframonitoring/images/{{% imagehome %}}/discoverdevice6.png)

&nbsp;

The devices will be created and grouped automatically.


