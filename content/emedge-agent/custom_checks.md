---
title: Custom checks
weight: -8
---
Custom script checks are well suited to collect metrics from custom applications or special systems.
<br>
These checks will be scheduled to run at a fixed interval (default 30 seconds intervals).
<br>
This page looks at how to configure custom emedge-agent script check.

# Configuration Steps
- ensure the emedge-agent is properly installed, as described <a href="{{< relref "/emedge-agent/installation.md" >}}">here</a>
- navigate to emedge-agent installation directory (e.g. /opt/emedge-agent)
- edit config.yml in checks/scripts to add the script configuration
- keload the emedge-agent

## Example: adding a custom script sample_check.sh, do the following
  - sample content of **sample_check.sh**
    ```properties
    #!/bin/sh
    VAL1=111
    VAL2=222
    cat << EOF
    {
      "sample_result1" : ${VAL1},
      "sample_result2" : ${VAL2}
    }
    EOF
    ```
  - add the following content to **config.yml**
    ```
    custom_checks:
      - name: sample_check
        enabled: true
        script: sample_check.sh
        args:
          - myarg1
          - myarg2
    ```
  - run **emedge-agent reload** to trigger emedge-agent to reload the config
  - the metrics collected by custom script check will now be forwarding to **emedge**




