---
title: Filebeat
weight: 5
geekdocHidden: true
---

# About Filebeat
**filebeat** is a lightweight software that runs on your managed hosts. It is a lightweight, open-source log shipper that collects logs from various sources and forwards them to emedge. It monitors the log files or locations that you specify, collects log events, and then sends them to emedge for processing


# Receiving TlS-encrypted syslogs
- Download and install **syslog-ng** as the syslog forwarder

  e.g. yum install syslog-ng

- Edit config file **syslog-ng.conf**

  To configure syslog-ng to receive tls traffic on a port and forward the syslog as plain text to filebeat, add the following content (e.g. receive on port 9003 and forwarsd to port 9004)
  ```
  @version: 4.1
  source s_tls {
      network(
          transport("tls")
          port(9003)
          tls(
              key-file("/mypath/key.pem")
              cert-file("/mypath/cert.pem")
              peer-verify("optional-untrusted")
          )
      );
  };

  destination d_logs {
      tcp("127.0.0.1" port(9004));
  };

  log {
      source(s_tls);
      destination(d_logs);
  };

  ```
- Start the syslog-ng server

  syslog-ng -e -d -v --no-caps --foreground -f syslog-ng.conf
