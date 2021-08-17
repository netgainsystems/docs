---
title: Search
geekdocHidden: true
slug: search
---

SIEM search is for the user to do simple search through keywords or to do advance query string search. Example simple search: 

 	
&#10146;	destination.ip : 10.168.104.3

&#10146;	destination.ip : 10.168.104.3 OR app.name : ssl  

Example advance search
	
&#10146;	source.ip: 192.168.* | table destination.ip bytes

User can get more accurate result by searching the field name (event.category, destination.ip, app.name etc.)

User can get more info about the search syntax through the \<Help> button.


![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/search1.png)

&nbsp;

User also can adjust time range from the drop-down menu and drag & display time range from the graph itself.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/search2.png)
