---
title: Files
geekdocHidden: true
slug: files
weight: -8

---
File checks are use to monitor new content in files and optionally forwards these new contents as logs
<br>
These checks will be scheduled to run at a fixed interval (default 30 seconds intervals).
<br>
This page shows how to configure emedge-agent file check.

# Configuration Steps
- Ensure the emedge-agent is properly installed, as described <a href="{{< relref "../installation.md" >}}">here</a>
- Navigate to emedge-agent installation directory (e.g. /opt/emedge-agent)
- Edit config.yml in checks/file to add the file monitor configuration
- Reload the emedge-agent configuration

## Example: to add a file monitor for file with path "/tmp/my_sample.log", do the following
  - Add one or more sections under 'checks' to **checks/file/config.yml**
    ```yaml
    checks:
      - name: 'sample_file_check_1'
        enabled: false
        interval_secs: 30
        filepath: /tmp/my_sample.log
        forward_as_logs: false
        line_checks:
          - name: 'check1'
            contains: 'abc'
          - name: 'check2'
            regex: 'e.g. error2=.*'
      - name: 'sample_file_check_2'
        ...<snipped>...
    ```
  - Run **emedge-agent reload** to trigger emedge-agent to reload the config
  - The file will be monitored and metrics collected will now be forwarding to **emedge**
