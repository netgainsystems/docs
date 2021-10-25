---
title: Directories
geekdocHidden: true
slug: directories
weight: -8

---
File checks are use to monitor files and subdirectories of a specific directory
<br>
These checks will be scheduled to run at a fixed interval (default 30 seconds intervals).
<br>
This page shows how to configure emedge-agent file check.

# Configuration Steps
- Ensure the emedge-agent is properly installed, as described <a href="{{< relref "getting_started/emedge/emedge-agent/installation.md" >}}">here</a>
- Navigate to emedge-agent installation directory (e.g. /opt/emedge-agent)
- Edit config.yml in checks/directory to add the directory monitor configuration
- Reload the emedge-agent configuration

## Example: to add a directory monitor for directory with path "/folder1", do the following
  - Add one or more sections under 'checks' to **checks/directory/config.yml**
    ```yaml
    checks:
      - name: 'sample_directory_check1'
        enabled: true
        interval_secs: 30
        path: '/folder1'
      - name: 'sample_directory_check2'
        ...<snipped>...
    ```
  - Run **emedge-agent reload** to trigger emedge-agent to reload the config
  - The directory will be monitored and metrics collected will now be forwarding to **emedge**
