---
title: Slack notifications
geekdocHidden: true
slug:  slack
---
This document is to provide a step by step setup for Slack App integration to be setup as the notifications channel

<!-- spellchecker-disable -->

{{< toc >}}

<!-- spellchecker-enable -->

## Setup Slack

1. Create a Slack account.

<img src="/modules/alerts/integrations/images/slack/slack-create-account.png" alt="Screenshot" style="max-width: 400px">

2. Create a team.

<img src="/modules/alerts/integrations/images/slack/slack-create-team.png" alt="Screenshot" style="max-width: 400px">

3. Create profile.

<img src="/modules/alerts/integrations/images/slack/slack-create-profile.png" alt="Screenshot" style="max-width: 400px">

4. Invite team members (optional).

<img src="/modules/alerts/integrations/images/slack/slack-invite-team.png" alt="Screenshot" style="max-width: 400px">

5. Enter optional additional information.

<img src="/modules/alerts/integrations/images/slack/slack-team-info.png" alt="Screenshot" style="max-width: 400px">

6. Select a subscription.

<img src="/modules/alerts/integrations/images/slack/slack-plan-options.png" alt="Screenshot" style="max-width: 400px">

7. Create an App. Go to api.slack.com/apps.

<img src="/modules/alerts/integrations/images/slack/slack-create-app.png" alt="Screenshot" style="max-width: 400px">

8. Select create from scratch.

<img src="/modules/alerts/integrations/images/slack/slack-create-app-options.png" alt="Screenshot" style="max-width: 400px">

9. Select App name and workspace.

<img src="/modules/alerts/integrations/images/slack/slack-app-name.png" alt="Screenshot" style="max-width: 400px">

10. Go to your App > Incoming Webhooks > Activate Incoming Webhooks

<img src="/modules/alerts/integrations/images/slack/slack-enable-webhook.png" alt="Screenshot" style="max-width: 400px">

11. Click Add New Workspace to Webhook.

<img src="/modules/alerts/integrations/images/slack/slack-add-webhook.png" alt="Screenshot" style="max-width: 400px">

12.	Select the team member as a channel for App to post to.

<img src="/modules/alerts/integrations/images/slack/slack-add-member.png" alt="Screenshot" style="max-width: 400px">


13. Copy the webhook URL.

<img src="/modules/alerts/integrations/images/slack/slack-copy-webhook.png" alt="Screenshot" style="max-width: 400px">

## Setup Slack on NetGain

1. On NetGain GUI, go to Alerts > Notifications > Integrations > Slack > click create.
2. Enter Label and Slack WebHook.
3. Click Send test message.
4. Click Save.

## Create Notification Category

1. Go to NetGain web GUI >  Alerts > Policies > Categories > click Create.
2. Enter the details of the category and click save.
Create Notification Rules
1. Go to Alerts > Notifications > Rules > click Create.
2. Enter the details > tick Opsgenie > click Save.
