---
title: Processes
weight: -9
---
Process checks are use to monitor OS processes.
<br>
These checks will be scheduled to run at a fixed interval (default 30 seconds intervals).
<br>
This page shows how to configure emedge-agent process check.

# Configuration Steps
- ensure the emedge-agent is properly installed, as described <a href="{{< relref "/emedge-agent/installation.md" >}}">here</a>
- navigate to emedge-agent installation directory (e.g. /opt/emedge-agent)
- edit config.yml in checks/process to add the process monitor configuration
- reload the emedge-agent configuration

## Example: to add a process monitor for process with name "proc1", do the following
  - add one or more sections under 'checks' to **checks/process/config.yml**
    ```yaml
    checks:
      - name: check1
        enabled: false
        process_name: proc1
        interval_secs: 30
      - name: check2
        ...<snipped>...
    ```
  - run **emedge-agent reload** to trigger emedge-agent to reload the config
  - the process will be monitored and metrics collected will now be forwarding to **emedge**
