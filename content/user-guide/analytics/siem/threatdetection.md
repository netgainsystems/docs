---
title: Threat Detection
geekdocHidden: true
slug: threatdetection
---

By default, {{% company %}} support around 500 detection rules. Detection rules are done through the query string. 

For default rule, user can \<Disable>, \<Enable> and \<Edit> the tags or description (but not query expression) in the edit.

To add new rule, user can add in \<Add new rule>.  User just need to specific the name, tags, description accordingly.

User can define the \<interval> on how frequent for SIEM to run through this rule. For \<search window> under logic type query, user can define the historical search window. 

{{% company %}} supports 3 types of logic type: Python(sandbox), Query and Workflow to create new rules.  
* Python: Python API documentation is available in the GUI 
* Query: Using search query or query expression. 
* Workflow: Flow chart type logic. The workflows can be created in the \<AI Workflows>

![Screenshot](/modules/siem/security_analytics/images/{{% imagehome %}}/threatdetection.png)

&nbsp;

### Threat Intelligence & Lookup Tables
Threat Intelligence is where {{% company %}} gather the flagged IP or URL from establish sources and compare against the logs.  User can choose to enable or disable particular sources.

For lookup tables, user can use it to create table to map key to a value. The key can be used in python script to run certain rules.

![Screenshot](/modules/siem/security_analytics/images/{{% imagehome %}}/threatdetection2.png)





