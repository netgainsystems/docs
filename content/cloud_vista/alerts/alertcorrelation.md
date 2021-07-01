---
title: Alert Correlation
geekdocHidden: true
slug: alertcorrelation
---

Root Cause rule defines the relation of a root cause object’s alarm to the dependent object’s alarm in a time window.  We can define such rules for well-known dependencies, such as a web-server and a web-site. 

If a root cause alarm arrives prior to the dependent alarms, the dependent alarms are not propagated until the root cause is fixed within a time window.   

This behavior could help to quickly identify the root cause, while helping to focus away from the dependent alarms.  For example, if a web-server is down the web-site would be down as well.  Therefore, if a root-cause alarm ‘Web-server down’ is present within a reasonable amount of time prior to the arrival of ‘Web-site down’ alarm, then the ‘Web-site down’ alarm will not be sent. 

