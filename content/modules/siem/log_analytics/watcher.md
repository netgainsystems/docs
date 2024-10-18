---
title: Watcher
geekdocHidden: true
slug: watcher
---

This function is used to watch out for specified data within incoming data logs. The system sends an alarm when the incoming log data contains a specified key word or phrase. This is useful to detect any known abnormalities or behavior. 

To access the Watcher function, click on the \<SIEM> icon at the Left Navigation Bar then click on \<Watcher> at the Top Navigation Bar if not already at the Reports page.


![Screenshot](/modules/siem/log_analytics/images/{{% imagehome %}}/watcher.png)

&nbsp;

### Add Watcher Rule
Click on Watcher < > and when you are in the Watcher menu, click <img src="/cloud_vista/loganalytics/images/{{% imagehome %}}/addruleicon.png" width="65px">.

![Screenshot](/modules/siem/log_analytics/images/{{% imagehome %}}/watcheraddrule.png)

&nbsp;

Enter the data and rules to define what you want to watch out for and receive an alarm when the conditions are met.

![Screenshot](/modules/siem/log_analytics/images/{{% imagehome %}}/Watcher_WatcherRule.PNG)

&nbsp;

<strong>Name</strong> – Input name of rule.

<strong>Enable</strong> – Select Yes/No to enable rule.

<strong>Run interval</strong> – Select interval time to run the rule.

<strong>Search windows</strong> – Select logs past time to run the rule.

<strong>Query string</strong> - Input query string value for logs search.

<strong>Log Hits</strong> -   Input log hits “expression” and “numbers”

<strong>Alarm message</strong> – Input alarm message.

<strong>Alarm generation</strong> - Select condition for alarm generate.

<strong>Save</strong> – Save watcher rule.

&nbsp;

Watcher will search the log data according to the conditions set. Results are displayed on the main page of the Watcher menu.

![Screenshot](/modules/siem/log_analytics/images/{{% imagehome %}}/logwatcher.png)

&nbsp;

### To view LogWatch alerts
When the Watcher rule has been created and enabled,  an alert will be generated if the specified key word or phrase is detected. 

To see the alert message, click on Alerts icon at the Left Bavigation bar then click on \<Alerts> at the Top Navigation Bar than click on \<Current> at the sub menu bar then select \<LogsWatch Alarms> at the drop down list menu.

![Screenshot](/modules/siem/log_analytics/images/{{% imagehome %}}/viewlogwatch.png)

