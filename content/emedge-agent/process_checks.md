---
title: Process checks
weight: -9
---
Custom process checks are use to monitor OS processes.
<br>
These checks will be scheduled to run at a fixed interval (default 30 seconds intervals).
<br>
This page shows how to configure custom emedge-agent process check.

# Configuration Steps
- ensure the emedge-agent is properly installed, as described <a href="{{< relref "/emedge-agent/installation.md" >}}">here</a>
- navigate to emedge-agent installation directory (e.g. /opt/emedge-agent)
- edit config.yml in checks/process to add the process monitor configuration
- keload the emedge-agent

## Example: adding a process monitor for process with name "proc1", do the following
  - add the following content to **config.yml**
    ```
    custom_checks:
      process_checks:
        - process_name: proc1
          enabled: true
          minimum_process_instance_count: 1
          detect_pid_changes: true
          detect_instance_count_changes: true
    ```
  - run **emedge-agent reload** to trigger emedge-agent to reload the config
  - the process will be monitored and metrics collected will now be forwarding to **emedge**




