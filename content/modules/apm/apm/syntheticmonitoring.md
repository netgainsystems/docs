---
title: "Synthetic Monitoring"
geekdocHidden: true
slug: "syntheticmonitoring"
---

Synthetic Monitoring is used to test and monitor applications by simulating user interactions with the software. The user needs to make a recording of a typical transaction, and the system will run the transaction automatically throughout the day. The performance of each run is shown.

Basic information includes:
- Title
- Application URL
- Enabled status
- Last run
- Last run duration
- Last status

## Edit Application

Click on <img src="/modules/apm/apm/images/netgain/edit.PNG" width="35px"> to modify the information of the application.

![Edit Application](/modules/apm/apm/images/netgain/APM%20SM2.png)

Once clicked, the page will navigate to the configuration page.

![Configuration Page](/modules/apm/apm/images/netgain/APM%20SM3.png)

Click on <img src="/modules/apm/apm/images/netgain/edit.PNG" width="35px"> to edit the information of the application.

![Edit Information](/modules/apm/apm/images/netgain/APM%20SM4.png)

Once clicked, the page will navigate to the dedicated page of the selected application for editing.

![Edit Page](/modules/apm/apm/images/netgain/APM%20SM5.png)

Information includes:
- Title
- Enabled: a toggle to enable or disable the application
- Monitor interval: the frequency at which the application should be monitored
- Page timeout: the maximum time allowed for the page to load
- Location
- Condition: define the criteria for generating alerts

Click on <img src="/modules/apm/apm/images/netgain/duplicate.PNG" width="85px"> to create a copy of the application with similar setups.

![Copy Application](/modules/apm/apm/images/netgain/APM%20SM6.png)

Click on <img src="/modules/apm/apm/images/netgain/trash2.PNG" width="40px"> to delete the application.

![Delete Application](/modules/apm/apm/images/netgain/APM%20SM7.png)

## Recording the Simulated Transaction

In your web application, right-click and click on Inspect.

![Inspect](/modules/apm/apm/images/netgain/APM%20SM8.png)

Once clicked, a developer tools panel will appear.

![Developer Tools](/modules/apm/apm/images/netgain/APM%20SM9.png)

Click on <img src="/modules/apm/apm/images/netgain/dots.PNG" width="40px">, then <img src="/modules/apm/apm/images/netgain/tools.PNG" width="300px">, and <img src="/modules/apm/apm/images/netgain/recorder.PNG" width="300px">.

![Proceed](/modules/apm/apm/images/netgain/APM%20SM10.png)

Once clicked, the page will navigate to the dedicated page to create a recording.

![Create Recording](/modules/apm/apm/images/netgain/APM%20SM11.png)

Click on <img src="/modules/apm/apm/images/netgain/recording.PNG" width="200px"> to start the recording.

![Start Recording](/modules/apm/apm/images/netgain/APM%20SM12.png)

Input the recording name and click on <img src="/modules/apm/apm/images/netgain/redrecording.PNG" width="95px">.

![Save Recording](/modules/apm/apm/images/netgain/APM%20SM13.png)

The user will go through the simulated transaction.

Click on <img src="/modules/apm/apm/images/netgain/endrecording.PNG" width="95px"> to end the recording.

![End Recording](/modules/apm/apm/images/netgain/APM%20SM14.png)

This page captures the timeline of the interaction with the webpage.

Click on <img src="/modules/apm/apm/images/netgain/downloadjson.PNG" width="50px"> to export the recording as a JSON file.

![Export Recording](/modules/apm/apm/images/netgain/APM%20SM15.png)

## Import the Recording

Click on <img src="/modules/apm/apm/images/netgain/import.PNG" width="75px"> to start the import process.

![Start Import](/modules/apm/apm/images/netgain/APM%20SM16.png)

Click on <img src="/modules/apm/apm/images/netgain/choosefile.PNG" width="85px">, then select the file and click on <img src="/modules/apm/apm/images/netgain/upload.PNG" width="60px">.

![Upload Recording](/modules/apm/apm/images/netgain/APM%20SM17.png)

Successful upload.

![Successful Upload](/modules/apm/apm/images/netgain/APM%20SM18.png)

## View Details of the Application

Click on the application title to further view the details of the application.

![View Details](/modules/apm/apm/images/netgain/APM%20SM19.png)

Once clicked, the page will navigate to the dedicated page of the selected application.

![Application Page](/modules/apm/apm/images/netgain/APM%20SM20.png)

This page provides a performance log that shows when the application was tested, how long it took to complete each test, and whether the application passed the test. Information includes:
- Timestamp: displays the exact time and date when each synthetic monitoring check was conducted
- Number of steps: total number of steps the user performed during the session
- Duration: total time taken to complete the steps
- Status: displays the outcome of the session

Click on any of the logs to further view the individual steps involved in the Synthetic Monitoring process.

![Log Details](/modules/apm/apm/images/netgain/APM%20SM21.png)

Once clicked, the page will navigate to the dedicated page of the selected log.

![Log Page](/modules/apm/apm/images/netgain/APM%20SM22.png)

The steps are labeled sequentially, starting from Step 0. Each step provides a description of the action and is marked with a timestamp, status of the step, and the duration taken to successfully complete it.

## Run Application

Click on <img src="/modules/apm/apm/images/netgain/play.PNG" width="50px"> to run the synthetic transaction.

![Run Application](/modules/apm/apm/images/netgain/APM%20SM23.png)

A panel will appear and run the steps on the web.

![Run Steps](/modules/apm/apm/images/netgain/APM%20SM24.png)
