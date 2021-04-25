---
title: MSTeams notifications
weight: 5
---
This document is to provide a step by step setup for MS Teams integration to be setup as the notifications channel.

<!-- spellchecker-disable -->

{{< toc >}}

<!-- spellchecker-enable -->

## Pre-Requisites
1. Download Microsoft (MS) Teams App
* [Windows / MacOS](https://teams.microsoft.com/_#/discover)
	- WebApp 
* Android 
* IOS 
2. MS Teams Account details
3. MS Teams Webhook

## Steps
1. Download MS Teams App for [Windows / MacOS](https://teams.microsoft.com/_#/discover) or just simple use the WebApp
2. Register or Login with your Office365 account
3. Add an incoming Webhook to a Teams channel  
	a. Create your team (e.g. “IT Infra Alerts”)  
	b. In your team, create more Channels  
	c. Navigate to the channel where you want to add the Webhook and select (•••) More Options from the top navigation bar.  
	d. Choose Connectors from the drop-down menu and search for Incoming Webhook.  
		![Webhook screenshot](/integrations/images/MSTeams.png  "Click Add on the highlighted Incoming Webhook")  
	e. Click add then provide a name, and, optionally, upload an image avatar for your Webhook.  
	f. The dialog window will present a unique URL that will map to the channel. Make sure that you copy and save the URL—you will need to provide it to the outside service.  
	g. Select the Done button. The Webhook will be available in the team channel.  
4. Go now to GUI, Alarms > Notification >  Microsoft Teams and click +Create. Key-in your Label and copy the given Webhook to Microsoft Teams settings  
5. Send Test message, if successful you can now save
6. Create desired notification Rules and don't forget to tick the “Microsoft Teams” box to enable the MS Teams alert messaging.
7. Create your MS Teams content in notification rules or just simply put “default” to receive system generated alarms
8. MS Teams label should be the same as the Label created in the MS Teams integration settings

**Notes:** You can add multiple MS Teams user to the Channel/s
