---
title: Archive
geekdocHidden: true
slug: archive
---

{{% company %}} SIEM support archive of log file to external storage/NAS storage. The benefits are to keep logs both in live and archive at same time for better data recovery and at the same time allow user to easily restore the logs when needed.


### The SIEM archive mechanism
Syslog and Beatslog will be daily archive to the desired path.

The archive files for previous days will be compressed periodically to save space.

User able to re-ingest the log when necessary.

![Screenshot](/cloud_vista/loganalytics/images/{{% imagehome %}}/archive.png)
