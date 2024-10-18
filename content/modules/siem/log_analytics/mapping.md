---
title: Mapping
geekdocHidden: true
slug: mapping
---

{{% company %}} supports some log mapping by default. The common logs follows Common Event Format (CEF), and some other mappings supported by default are Aruba, Cisco, Fortinet logs etc. 

If user want to customize log mapping, user can use the \<GROK console> and \<test mapping>. After getting the customize mapping GROK expression, user can add the mapping rule in <+ Add mapping>. 


\<Performance> can be used to check Elasticsearch ingest performance.


![Screenshot](/modules/siem/log_analytics/images/{{% imagehome %}}/mapping.png)

&nbsp;

### GROK Console
User can use the sample logs provided, to test out the GROK expression. Delete anything in front of the {.*} can make the expression bypass to mapped certain field.

The mapped output fields are on the right. User can control the output mapped fields using GROK expression. 

![Screenshot](/modules/siem/log_analytics/images/{{% imagehome %}}/grok.png)

User can add the new GROK expression in <+Add mapping>. After adding, user can test the mapping rule against all configured mappings in \<Test Mapping> to check if the log if mapped intendedly to the desired field.

