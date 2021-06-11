---
title: Discover Device
weight: 5
---

To discover or add devices to be monitored, click on \<Metrics> in the Left Navigation Bar, then \<Discover> in the Top Navigation Bar.  

## Step 1

First select the discovery method to be used. 3 methods are provided:
* IP Range Method
* IP Subnet Method
* Specific IP 

### IP Range Method

Select \<IP Range> in \<Method>, then enter the IP address range to be scanned. Start refers to the beginning while End refers to the end of the range. 


![Screenshot](/discovering_devices/images/Picture3.png) 


### IP Subnet Method

Select \<IP Subnet> in \<Method> to discover devices using your own subnet. You can enter multiple subnets separated by a comma.

![Screenshot](/discovering_devices/images/Picture3.png) 


### Specific IP Method

Select \<Specific IP> in \<Method>. Just input the IP Address of the devices to be discovered separated by a comma. 

![Screenshot](/discovering_devices/images/Picture3.png) 


## Step 2

Enter the appropriate SNMP details. For the SNMP v1/v2, the default port number is “161” while the default SNMP community string for IT environments is “public”. 

<p align="center"><img src="/discovering_devices/images/Picture4.png"></p>


For SNMP v3, the default port number is 161 followed by the subsequent required fields. 

<p align="center"><img src="/discovering_devices/images/Picture4.png"></p>


## Step 3

After completing the discovery method and SNMP information, click on \<Start Discovery>. Once the scanning is completed, the list of devices discovered will be displayed with their relevant details.

![Screenshot](/discovering_devices/images/Picture1.png) 


## Step 4

Ensure the devices to be added have a check mark, then click on <+Add selected devices>. 

![Screenshot](/discovering_devices/images/Picture1.png) 

The devices will be created and grouped automatically.

![Screenshot](/discovering_devices/images/Picture2.png) 