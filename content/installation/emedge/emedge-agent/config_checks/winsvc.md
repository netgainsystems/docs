---
title: Windows services
geekdocHidden: true
slug: winsvc
weight: -9
---
Windows service checks are use to monitor status of Window services.
<br>
These checks will be scheduled to run at a fixed interval (default 30 seconds intervals).
<br>
This page shows how to configure emedge-agent process check.

# Configuration Steps
- Ensure the emedge-agent is properly installed, as described <a href="{{< relref "installation/emedge/emedge-agent/installation.md" >}}">here</a>
- Navigate to emedge-agent installation directory (e.g. /opt/emedge-agent)
- Edit config.yml in checks/winsvc to add the winsvc monitor configuration
- Reload the emedge-agent configuration

## Example: to add a winsvc monitor for windows service with name "fax", do the following
  - Add one or more sections under 'checks' to **checks/winsvc/config.yml**
    ```yaml
    checks:
      - name: check1
        enabled: false
        service_name: fax
        interval_secs: 30
        ensure_state: RUNNING # valid values are STOPPED, RUNNING, PAUSED
      - name: check2
        ...<snipped>...
    ```
  - Run **emedge-agent reload** to trigger emedge-agent to reload the config
  - The process will be monitored and metrics collected will now be forwarding to **emedge**
