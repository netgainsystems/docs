---
title: Watcher
geekdocHidden: true
slug: watcher
---

NetFlow Watcher is used to watch out for specified data within incoming data flows.  The system generates an alarm when the incoming flows contains the specified query string and hits a specified amount of flow. This is useful to quickly detect what is using a lot of bandwidth.

To use NetFlow Watcher, click on \<NetFlow> on the Left Navigation Bar, then click on \<Watcher> on the Top Navigation Bar. Click <+Add rule>.

![Screenshot](/cloud_vista/netflow/images/{{% imagehome %}}/watcher1.png)

&nbsp;

Enter the data and rules to define what you want to watch out for and to receive an alarm when the conditions are met.

![Screenshot](/cloud_vista/netflow/images/{{% imagehome %}}/watcher2.png)

&nbsp;

Name - Input name of rule.

Enable - Select Yes/No

Run interval - Input interval time to run the rule.

Search window - Input past “x” time for flow search.

Query string - Input query string for flow search.

Flow Hits - Input flow hits “expressions” and “numbers”.

Alarm message - Input the alarm message.

Alarm generation - Select condition for alarm generate.

Click \<Save> when done. Watcher will search the flow data according to the conditions set. Results are displayed on the main page of the Watcher menu.

![Screenshot](/cloud_vista/netflow/images/{{% imagehome %}}/watcher3.png)
