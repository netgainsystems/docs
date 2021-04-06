---
title: Line
weight: 3
---
This document is to provide a step by step setup for Line App integration to be setup as the notifications channel

<!-- spellchecker-disable -->

{{< toc >}}

<!-- spellchecker-enable -->

## Pre-Requisites
1. Mobile Line App Download
* [Android APK](https://line-android-universal-download.line-scdn.net/line-apk-download.html)
* [Apple App Store](https://itunes.apple.com/app/line/id443904275)
* [Google Play](https://play.google.com/store/apps/details?id=jp.naver.line.android)
2. PC Download
* [Windows](https://desktop.line-scdn.net/win/new/LineInst.exe)
* [MacOS](https://itunes.apple.com/app/line/id539883307)


## Steps
1. Download Line App on your preferred device  
	> * Login to your Line Account or Register for new account  
2. Get your Channel Access Token  
	a. Go to [Line Dev](https://developers.line.biz/en/)  
	b. Login using Line / Business account  
	c. Go to Providers, then click "Create" for new Providers  
![Create Providers](/integrations/images/lineappproviders.PNG  "click Create for new Providers")  
	d. Create new Messaging API Channel, fill-in necessary details  
	> * Input Channel name, Channel description, category, sub-category, email address  
	> * Free account limit is 500 messages/month  
	
	e. Once Messaging API is created, click the Messaging API sub-menu then Issue Channel access token  
	f. In your LINE™ Mobile App, scan the QR code from the Messaging API sub-menu to add this bot as a chat friend
3. Go now to Web GUI at Alarms > Notification >  Line and click +Create. Key-in your Label and Channel access token 
4. Send Test message, if successful you can now save  
5. Go to Notifications > Rules then click Create. Set desired notification Rules and don't forget to tick the “LINE” box to enable the Line alert messaging  
6. Create your Line messaging content in notification rules or just simply put “default” to receive system generated alarms  
7. Line label should be the same as the Label created in the MS Teams integration settings	
8. Select the Users to Notify
	> * Note: Every User must have LineApp ID set in their User profile under "Users" in the product
9. Save Notification Settings to be able to receive notifications to your LineApp
		
	
	
**Notes:** You can add multiple MS Teams user to the Channel/s
