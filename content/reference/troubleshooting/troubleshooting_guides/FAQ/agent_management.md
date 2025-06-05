---
title: Agent Management
geekdocHidden : True
---

# How to upgrade NetGain Agent for Linux

Stop NetGain Agent service.
*	systemctl stop netgain 
     OR
*	cd installation_directory/netgain/bin/
*	./agent_stop.sh

Backup netgain agent folder.
*	cd installation_directory (may vary depending on installation)
*	cp -r installation_directory/netgain ./netgain_v12.2.214_240627

Download netgain agent to preferred installation directory.

Unzip/Untar new agent.
*	cd installation_directory
*	tar -xzvf NetGain-Agent-Nix-v12.2.337.tar.gz

Configure agent.
*	cd installation_directory/netgain/bin
*	./agent_setup.sh.
*	Follow the instructions prompted
*	NOTES: Before agent_setup, use Java path command: which java to know your java directory

Start netgain agent.
*	cd installation_directory/netgain/bin
*	./agent_start.sh
*	check logs: tail -100f installation_directory/netgain/bin/nohup.out

Check GUI to confirm agent status.
---
# How to upgrade NetGain Agent in Windows

Stop NetGain Agent service.

<img src="/troubleshooting_guides/FAQ/images/netgain/FAQ25.png" alt="FAQ1" width="300"/>

*	Go to services.msc
*	Right-click on NetGain Agent
*	Stop the service

Backup netgain agent folder.
*	cd installation_directory (may vary depending on installation)

Create a backup folder and copy paste the old NetGain Agent to the backup folder.

Download netgain agent under Tools > Agent to preferred installation directory.

Install the new Agent and override the existing Agent. 

Configure agent.

<img src="/troubleshooting_guides/FAQ/images/netgain/FAQ.PNG" alt="FAQ2" width="300"/>

*	Enter the destination IP for NetGain server

Start NetGain Agent in services.msc.

Check GUI to confirm agent status.

# NetGain Agent not found
Check Agent log in server for issues.
For Windows:
* 	check log file at (NetGain Agent directory) \agent.log 
For Linux:
*	check log file at (NetGain Agent directory)/bin/nohup.out

Check firewall.
* Use Telnet to check connectivity on port 81 and 1808
---

| Purpose        | Protocol     | Port  | 
| :----------: |:------------:| :-----:| 
| NetGain Agent | TCP | 81 / 1808  | 
