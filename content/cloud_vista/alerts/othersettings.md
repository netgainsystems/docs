---
title: Other Alert Notification Settings
geekdocHidden: true
slug: othersettings
---

Besides Email and SMS notification, there are other methods to alert users, including 3rd party messaging apps such as Slack, MS Teams, WeChat, Alicloud, LINE and Telegram. 

![Screenshot](/cloud_vista/alerts/images/{{% imagehome %}}/rules2.PNG)

&nbsp;

Slack – uses webhooks to integrate (https://api.slack.com/messaging/webhooks)

MS Teams – uses webhooks to integrate (https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook)

WeChat – uses CorpID, CorpSecret and AgentID to integrate (https://mp.weixin.qq.com/)

AliCloud – uses Access Key ID, Access Secret, Sign Name, Template Code, and Phone number to integrate (https://help.aliyun.com/document_detail/101300.html) 

LINE app – uses Channel access token to integrate (https://gateway.internal.netgain-systems.com/u/gw#line_integration)

Telegram – uses token, botFather and ChatID to integrate (https://core.telegram.org/bots#6-botfather)

Users can generate a test message to check that the alert notification via these messaging apps have been properly setup.
