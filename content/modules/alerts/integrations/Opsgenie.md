---
title: Opsgenie notifications
geekdocHidden: true
slug:  opsgenie
---
This document is to provide a step by step setup for Opsgenie App integration to be setup as the notifications channel

<!-- spellchecker-disable -->

{{< toc >}}

<!-- spellchecker-enable -->

## Add an API integration
1. Create Opsgenie account.

<img src="/modules/alerts/integrations/images/create-account.png" alt="Screenshot" style="max-width: 400px">

2. Go to Settings > Integrations.
3. Run a search and select “API”.
4. On the next screen, enter a name for the integration.
5. Optional: Select a team in Assignee team if you want a specific team to receive alerts from the integration. Learn how alert notifications flow in Opsgenie.
6. Select Continue.
The integration is saved at this point.
7. Expand the Steps to configure the integration section and copy the API key for use in your API requests.
8. Select Turn on integration.
The rules you create for the integration will work only if you turn on the integration.

**Note:** If you're using Opsgenie's Free or Essentials plan or if you’re using Opsgenie with Jira Service Management's Standard plan, you can add this integration from your team dashboard only. The Integrations page under Settings is not available in your plan.

## Add an API integration for Free plan, Essentials plan and Jira Service Management's Standard plan

1. Go to Teams and add your team.

<img src="/modules/alerts/integrations/images/add-team.png" alt="Screenshot">

2. Enter team details.

<img src="/modules/alerts/integrations/images/enter-team-details.png" alt="Screenshot" style="max-width: 400px">

3. Select Integrations on the left navigation and then select Add integration.
4. Search for API.

<img src="/modules/alerts/integrations/images/add-api-integration.png" alt="Screenshot" style="max-width: 400px">

5. Enter integration name > select team > click continue.

<img src="/modules/alerts/integrations/images/interation-name.png" alt="Screenshot" style="max-width: 400px">

6. Click turn on integration and copy API key.
<img src="/modules/alerts/integrations/images/turn-on-integration-get-api-key.png" alt="Screenshot" style="max-width: 400px">

Adding the integration from your team dashboard will make your team the owner of the integration. This means Opsgenie will assign the alerts received through this integration to your team only. Follow the rest of the steps in this section to set up the integration.
If the Owner of your Opsgenie account has not verified their email yet, users within your organization will not be able use API integrations.

## Setup Opsgenie on NetGain
1. Go to Alerts > Notifications > Integrations > click Opsgenie.
2. Click create.
3. Enter Label and API key. Click Send test message to ensure the API key is valid.

## Create Notification Category
1. Go to NetGain web GUI >  Alerts > Policies > Categories > click Create.
2. Enter the details of the category and click save.

## Create Notification Rules
1. Go to Alerts > Notifications > Rules > click Create.
2. Enter the details > tick Opsgenie > click Save.
