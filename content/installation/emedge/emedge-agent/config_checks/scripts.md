---
title: Scripts
geekdocHidden: true
slug: scripts
weight: -8
---
Custom script checks are well suited to collect metrics from custom applications or special systems.
<br>
These checks will be scheduled to run at a fixed interval (default 30 seconds intervals).
<br>
This page looks at how to configure custom emedge-agent script check.

# Configuration steps
- Ensure the emedge-agent is properly installed, as described <a href="{{< relref "installation/emedge/emedge-agent/installation.md" >}}">here</a>
- Navigate to emedge-agent installation directory (e.g. /opt/emedge-agent)
- Edit config.yml in checks/scripts to add the script configuration
- Reload the emedge-agent

# How to write a custom script
- emedge expects a JSON output from a custom script, in the form of a JSON array of monitor instances (and metrics)
- "name" property of each monitor instance is used as the name of that monitor instance
## Example: to add a custom script sample_check.sh, do the following
  - Sample content of **sample_check.sh**
    ```shell
    #!/bin/sh
    VAL1=111
    VAL2=222
    cat << EOF
    [
      {
        "name" : "monitor1",
        "sample_result1" : ${VAL1},
        "sample_result2" : ${VAL2}
      },
      {
        "name" : "monitor2",
        "sample_result1" : ${VAL1},
        "sample_result2" : ${VAL2}
      }
    ]
    EOF
    ```
  - Add the following content to **config.yml**
    ```yaml
    checks:
      - name: sample_check
        interval_secs: 30
        enabled: false
        script: sample_check.sh
        args:
          - myarg1
          - myarg2
    ```
  - Run **emedge-agent check script** to do a test run to check the configurations and validate the script output
  - Run **emedge-agent reload** to trigger emedge-agent to reload the config
  - The metrics collected by custom script check will now be forwarding to **emedge**




