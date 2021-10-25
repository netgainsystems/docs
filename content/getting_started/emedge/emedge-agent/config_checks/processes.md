---
title: Processes
geekdocHidden: true
slug: processes
weight: -9
---
Process checks are use to monitor OS processes.
<br>
These checks will be scheduled to run at a fixed interval (default 30 seconds intervals).
<br>
This page shows how to configure emedge-agent process check.

# Configuration Steps
- Ensure the emedge-agent is properly installed, as described <a href="{{< relref "getting_started/emedge/emedge-agent/installation.md" >}}">here</a>
- Navigate to emedge-agent installation directory (e.g. /opt/emedge-agent)
- Edit config.yml in checks/process to add the process monitor configuration
- Reload the emedge-agent configuration

## Example: to add a process monitor for process with name "proc1", do the following
  - Add one or more sections under 'checks' to **checks/process/config.yml**
    ```yaml
    checks:
      - name: check1
        enabled: false
        process_name: proc1
        interval_secs: 30
      - name: check2
        ...<snipped>...
    ```
  - Run **emedge-agent reload** to trigger emedge-agent to reload the config
  - The process will be monitored and metrics collected will now be forwarding to **emedge**
