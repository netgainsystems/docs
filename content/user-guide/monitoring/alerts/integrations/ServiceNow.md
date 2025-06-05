---
title: ServiceNow notifications
geekdocHidden: true
slug:  servicenow
---
This document is to provide a step by step setup for ServiceNow App integration to be setup as the notifications channel

{{< toc >}}

## Setup ServiceNow
1. Go to https://account.servicenow.com to create an account or sign in.

<img src="/modules/alerts/integrations/images/servicenow/sn1.png" alt="Screenshot" style="max-width: 400px">

2. Go to https://developer.servicenow.com > click account icon.

<img src="/modules/alerts/integrations/images/servicenow/sn2.png" alt="Screenshot" style="max-width: 600px">

3. Click Manage instance password.

<img src="/modules/alerts/integrations/images/servicenow/sn3.png" alt="Screenshot" style="max-width: 400px">

4. Take note of the following:
    *	Instance URL
    *	Username
    *	Password

## Setup ServiceNow on NetGain
1. On NetGain GUI, go to Alerts > Notifications > Integrations > ServiceNow > click create.
2. Enter Labe, URL, Username, and Password.
    * Note: URL e.g. https://myinstance.service-now.com/api/now/table/incident
3. Click Send test message.
4. Click Save.

## Create Notification Category
1. Go to NetGain web GUI >  Alerts > Policies > Categories > click Create.
2. Enter the details of the category and click save.

## Create Notification Rules
1. Go to Alerts > Notifications > Rules > click Create.
2. Enter the details > tick ServiceNow > click Save.