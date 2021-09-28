---
title: Services
geekdocHidden: true
slug: services
---

The ‘Services tab shows the information about the services that are managed by {{% company %}} APM.

![Screenshot](/cloud_vista/apm/images/{{% imagehome %}}/services1.png)

&nbsp;

Basic information includes:
* Service Name
* Agent type
* Total Transactions
* Transactions per minute
* Total errors
* Errors per minute
* Average services response time
* Max services response time

### Check details of the service
Click on any of the service name to go into the details of the services.

![Screenshot](/cloud_vista/apm/images/{{% imagehome %}}/services2.png)

&nbsp;

Once clicked, the page will go to the dedicated page for the selected service.

![Screenshot](/cloud_vista/apm/images/{{% imagehome %}}/services3.png)

&nbsp;

This page will include information similar to the previous page , and with more graphical view.

By scrolling down, you will see each of the transacntions name with further details.
* Name: the transaction name
* Average response time
* 95th percentile response: how long did it take for this transaction at 95th percentile
* Transactions: how many times this transancation has been processed/executed
* Last transaction time

![Screenshot](/cloud_vista/apm/images/{{% imagehome %}}/services4.png)

&nbsp;

Each transactions name is a set of mutliple sub-transactions. Further details can been seen by clicking on a particular transaction name:

![Screenshot](/cloud_vista/apm/images/{{% imagehome %}}/services5.png)

&nbsp;

### Check details of a transaction
To check the details of a single transaction, click on any of the transcation within the particular timeframe:

![Screenshot](/cloud_vista/apm/images/{{% imagehome %}}/services8.png)

&nbsp;

Once clicked, the details will be shown in both forms of <strong>span and table</strong>: 

![Screenshot](/cloud_vista/apm/images/{{% imagehome %}}/services6.png)

&nbsp;

Once clicked, the details will be shown in both forms of <strong>span and table</strong>: 

![Screenshot](/cloud_vista/apm/images/{{% imagehome %}}/services7.png)

&nbsp;

The table field will consist of at least 80 fields with the values, and this is very useful for Ops team or dev team to look at the details of a single transaction and proceed with further investigation.

Useful and frequently investigate fields are:
* Event.outcome
* Host.ip
* Transaction.duration.us
* Source.ip
* User OS
* Transaction type
* User browser 
