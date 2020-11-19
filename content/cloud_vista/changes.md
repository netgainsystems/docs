---
title: Change Logs
weight: 20
---
## Changes in v11.1.158b417 (Nov 19 2020)
  * EM Edge
    - bundle JRE for windows/linux emedge
    - support running emedge as a windows service
    - enable beats data collection in windows emedge too (previouly only in linux)

  * Log Analytics aand SIEM Threat Detections
    - fix time range select problems for beats indexs (GMT-based indices)
    - fix logs query indice names based on time range
    - enhance column names in SIEM threats table and also make all SIEM dashboard widgets able to click and drill in
    - Change Log Sources menu location for SIEM
    - fix threat detections enable/disable feature
    - update threat detection rules from elasticsearch github
    - enhance threat detect rules enable/disable methods
    - enhance syslog collector to ignore empty syslog message

  * NetFlow
    - fix netflow top-n aggregate calculation bugs
    - make netflow topn charts drillable (click thru)

  * Reports
    - add PDF export support for log reports, including download and auto-delivery
    - enable back old feature 'batch reports' in Metrics=>Reports menu

  * Notifications
    - enhnace ServiceNow integration
    - enhance PageDuty integration to add 'from' email field

  * GUI enhancements and fixes
    - fix monitor object jump links from various pages including dashboards
    - makes most of the GUI tables scrollable
    - fix logs_summary dashboard edit issue (jumps to other pages when in edit mode)

  * Monitors
    - allow edit of SNMPv3 users from GUI
    - enhance EMC Switch monitor

  * Alarm Processing and Notifications
    - enhance current and history alarms export output
    - fix bug - alarm auto discharges and then comes back to current alarms list again
    - do not show alarm object field if empty, in current and history alarms views

  * Data backup and restore
    - implement web-based data retention config and backup/restore via GUI

  * Misc
    - migrate to use elasticsearch 7.9.3 java client libraries
    - improves on general logging
    - improves on chinese localizations

## Changes in v11.1.150b407 (Nov 8 2020)
  * SIEM Threat Detections
    - enhance threat detect rules bulk enable/disable
    - fix issue of clicking on threats table row entries
    - allow view of SIEM threats by time period (new time select input)
    - fix issue of winlogbeats related logs of threats not showing

  * Alarm Processing and Notifications
    - adds ServiceNow notification integration
    - adds PagerDuty notification integration
    - adds OpsGenie notification integration
    - improves of searching on notification logs
    - enhanced current and history alarms views

  * APM
    - fix ApmWatcher bug that it does not generate alarm
    - adds APM dashboard widget to report on "application transaction errors"
    - adds APM response time history widget
    - improves performance of logs search suggestions
    - improves performance of logs query performance by targeting specific index names based on time range
    - fix logs query performance when doing complex queries e.g. stats

  * NetFlow
    - code migration of NetFlow module from scala to java
    - add support for -Dnetflow_bind_ip=xx.xx.xx.xx to bind netflow receiver to specific IP
    - fix issue of flow watcher should NOT run on IngestNode or Edge

  * Monitors
    - fix issue of Oracle monitors not able to discover in IPv6
    - fix snmp v3 discovery and monitoring issue, when username is same for mutiple devices
    - add support for netgain/var/monitor/snmp_usm_sample.yml, so as to specific incoming usernames of SNMPv3 traps
    - implements new USB plug-in/plug-out monitoring

  * EM Edge
    - shows EM edge Site ID during startup
    - disable JNI for emedge
    - improve edge logging
    - reduce emedge.zip file size by ignoring some files and clean up web menus for emedge

  * Misc
    - improves on general logging
    - ability to set debug log levels using netgain.sac.LoggingLevel
    - enhance to avoid running some unused worker threads when running in CV mode
    - enhance the threads dumper logs
    - enhance chinese localizations

## Changes in v11.1.139b394 (Oct 26 2020)
  * improves EMEdge logging logs to both screen and emedge.log
  * fix on APM index names to include prefix
  * obsolete flat file netgain/alarm/AlarmHistoryManager.java as it is causing issues
  * enhance alarm views
  * update default SIEM security threat dashboard
## Changes in v11.1.136b388 (Oct 24 2020)
  * add jump to SIEM Threat Event from SIEM alarms
  * obsolete AlarmEscalateManager module
  * enhance current and history alarms view
  * improves some CSS look and feel
## Changes in v11.1.135b387 (Oct 23 2020)
  * fix snmptrap collector not working in emedge
  * fix em edge package issue
  * remove threat rule logs to avoid the index geting big
  * refactor etgain/elastic/SearchHelper.java
  * improves elastic.SearchHelper to support sort query e.g. sum(bytes) by source.ip sort sum(bytes) top 10
  * fix query parser regarding 'sort'
  * add default SIEM security threat dashboard
  * rename duration to response time for APM transactions in most GUIs
  * do not enable SIEM plus for CV by default, only enable by default for NetGainSaaS
## Changes in v11.1.134b385 (Oct 21 2020)
  * fixs sample logs ingest
  * improves on sample logs ingest
  * improves log summary dashboard widget
  * enhance default SIEM dashboards
  * allow re-create of default dashboards
  * add loading of default dashboards
  * change default SIEM dashboard to show threat logs
  * add SIEM threat ids and names to source logs
  * add APM transaction mapper
## Changes in v11.1.132b383 (Oct 19 2020)
  * revamp apm agent JSP pages
  * add selectable colors for dashboard
  * improves dashboard widgets to have color selections
  * improves logs and apm dashboard widgets with selectable graph types and colors
  * improves widgets to notify config change
## Changes in v11.1.131b381 (Oct 17 2020)
  * Download Option For Monitor History Graph
  * Mobile View Formatting
  * Slack Save Formatting Code Changes
  * change to store only related log ids in security threats
  * Input Output Utilization Units-Code-Changes To User Defined Reports Admin Operation Status Values
  * Input Output Utilization Units-Code Changes for the Fix of Admin Status Values
  * add method to simulate APM production data
  * STEE CV snmp port policy violation issue Gna
  * NEC Notification Issue Code Changes
  * rename Events to Threats in SiemManager
  * improves logs and apm dashboard widgets
## Changes in v11.1.129b379 (Oct 15 2020)
  * Input Output Utilization Units
  * fix pri menu expand bug
  * add APM widgets
  * fix apm transactions query wrong (not based on timerange)
  * allow auto apm drill down based on URL hash
  * fix apm transaction filter search
  * minor JS fix
  * Bug 3987 issue with saving new assets
  * Bug 3990 Login Screen Version Formatting-Code Changes
  * improves on dashboards for logs widgets
  * fix critical snmpv3 trap receive bug introduced when fixing STEE snmpv3 bug
  * improves on logs reports to indicate no data
  * fix snmptrap varbind ingest issue
  * improves on logs reports
## Changes in v11.1.125b373 (Oct  9 2020)
  * Bug 3987 Issue With Saving New Assets-Code Changes To Fix Issue With Saving Asset Values
  * add ssl certs for cloud-vista.co for CVS
  * fix elastic threat detection rules
  * 2fa Screen Formatting
  * update threat detection rules from elastic
  * Logical Map Display Severity Color For Normal Status in Monitors
  * Browser Alert Netgain Alert Migration 2
  * License Product Version Blinking
  * fix date/time picker z-index issue
  * remove use of $.live(...)
  * refactor js/script.js
  * enhance logmgmt to show elasticsearch ingest time performance on web GUI
  * Monitor Graph Display Issue
  * Notification Sound Alert Issue
  * Latest Alarms Dashboard Formatting
  * alert box dark theme formatting
  * import CEF logs parsing
  * enhance logmgmt to show log processor workers performance on web GUI
## Changes in v11.1.122b365 (Oct  1 2020)
  * make all new reports available
  * fix minor bug in metric reports
  * improves on dashboards
  * fix bug to only run singtel wifi.java if -Dsingtel wifi=1 is set
  * add netflow histogram
  * update threat detection rules from elastic
## Changes in v11.1.120b363 (Tue Sep 29 2020)
  * fix ElasticProxy.aggHistogram method
  * enhance add dashboard widgets windows to be a popup window
  * allows enable/disable of threat intellience/caching
  * add back default logger reports and hide half-completed compliance reports
  * make mofix default 0 (not enabled) due to some more issues
  * implement bulkDelete MOs for Elastic
  * implement MOFix for Elastic
  * improves delete MOs performance
  * improves metric reports performance
  * enhance multiple metrics for combined reports
  * obsolete SingtelSyslogProcessor class
  * change getMOFullLabel to getCachedMOFullLabel method
  * remove code references for zhaoqing
  * speed up MetricsManager code
  * enhance metric reports to add in dashboard
  * add 'combined reports' prototypes
  * add top-n report prototypes
  * prototype SIEM compliance reports
  * enhance MetricsManager prototype
  * Add PerformanceManager.getHistoryData method
  * improves ElasticProxy.histogram method
  * initial prototyping of metrics report
## Changes in v11.1.117b360 (Sat Sep 26 2020)
  * add EPS to log sources
  * show logs estimated ingest rate
  * fix bug of enable/disable mapping rules due to multiple transformers
  * disable all mapping rules except CEF by default
  * add performance panel for troubleshooting logs mappings
  * singtel-added percentile calculation which is required for customized traffic report
  * NetGain Alert Box Dark theme Formatting
  * add support for Transformer.IGNORE TAG to be able to ignore and not save logs
  * disable threat detection rules by default
  * supports -Dlogs suggestions=0
  * fix TCP syslog handling
  * enhance CEF log mapping
  * stee snmpv3 - adjust time only specifc for 32.7 mac address
  * stee snmpv3 - change default timeout to 3000ms
  * stee snmpv3 - clean up DiscoveryScanner code with proper logging
  * singtel v11-added nea login reports
## Changes in v11.1.114b356 (Tue Sep 22 2020)
  * enhance log ui feedback
  * stee snmpv3 - change to use our own customized overridden USM
  * refactor code to load snmpv3 agent credentials from conf/monitor/snmp agent.yml file
  * singtel wifi - implement LTA login report
  * singtel wifi - implement provider mapping rules create/edit/del and use this mapping rules in AAALogs parsing
  * stee snmpv3 - avoid UserTarget.setAuthorativeEngineId call
  * power up CEF log parsing to handle test logs in netgain/logmgmt/testdata/cef logs folder : 1.2k types
  * stee snmpv3 - final fix to snmpv3 - due to synchronized bug
  * WD001 Screen Overflow When Expandable Primary Menu Is Clicked
  * Alarm Details Acknowledge Issue And Discharge Text Consistency
  * Alarm Row Click issue
  * singtel wifi - enhance user logins report to add histogram
## Changes in v11.1.111b352 (Fri Sep 18 2020)
  * optimize log processing logging
  * optimize log processing speed
  * add jsp page to check on log mapping performance
  * singtel wifi - added more sample logs and mappings
  * add support for netgain/conf/forward.yml configuration file to forward syslogs
  * update threat detection rules from elastic
  * singtel wifi - enhance the user logins report
  * singtel wifi - complete query user logins data for report
  * singtel wifi - change property 'singtel aaa' to 'singtel wifi'
  * singtel wifi - initial implementation of the new singtel user login report
  * fix bug of role users not saved when users added to role
  * refactor the syslogd server code
  * stee snmpv3 - change to not use Snmp class as a singleton
  * stee snmpv3 - add snmp v2 check.java check script
  * stee snmpv3 - do not cache snmp users
  * stee snmpv3 - add more discovery logs
  * stee snmpv3 - minor code formatting
  * stee snmpv3 - fixed sysoidmapper null pointer exception
  * stee snmpv3 - fixed with using localized user
  * stee snmpv3 - adjust test scripts
  * stee snmpv3 - clean up code -no fix yet
  * stee snmpv3 - revert code back to suppose working version
  * enhance syslog collector to handle invalid/TCP format
  * second prototype for singtel syslog parsing in v11
## Changes in v11.1.108b349 (Tue Sep 15 2020)
  * add more syslog error logging messages
  * add syslog TCP receiver
  * initial prototype for singtel syslog parsing in v11
  * add support for property -Dlogs shards per index=nnn
  * fine turn logs ingest and processing
  * introduce concept of IngestNode (-Dingest node=1) and fine turn netflow flow processing
  * add suggestions for grok console during input
  * add standard parsing for log CEF format
  * add support for CEF log format in grok suggester
  * change use of 'useless' to the more standard 'UNWANTED' keyword
  * add grok 'add fields' mapping feature
  * add grok suggest feature
  * improves grok developer console
  * fix column display errors in SIEM default dashboard for windows user logons
## Changes in v11.1.103b344 (Thu Sep 10 2020)
  * fix deleteMO issue when parent MO is not found
  * fix weird errors in VersionInfo class
  * History Data Issue With Moving Devices
  * hack snmp4j engine boots count - to work around 'Not in time windows' issue
  * fix error haandling in elastic alarm manager startup
  * Bug 3975 NCM Scheduler Issue
  * fix emedge download page issue in CV
  * fix mom local ips issues
  * show local IPs of EMEdge in CV
  * fix typo in edge download page
  * fix edge temperarture monitor wrong discovered issue
  * add support for LogUtil.setStdOutputToLog4J to redirect stdout to log4j
  * fix CV pull edge logs bug
  * refactored netgain/protocols/snmpV3Get.java to make it more stable in multi-thread environment
## Changes in v11.1.101b336 (Wed Sep  2 2020)
  * dsb backend csv report Generation migration2 Gna
  * vmware datastore uncommitted space nullpointer issue jhio
  * change emedge jvm max mem to 512m
  * add error stream output for windows exe
  * siem add support -Dlogger dns reverse lookup=1/0 (default 0)
  * disable threat intel refresh by default
  * add support for -Dsnmp4j fixed engine id=1
  * update ncm expect scripts
  * rename all references from netcfg to ncm
  * add support for -Dsiem supports intel refresh=1 (default is 0)
  * simplify the NCM scripts
  * change ncm to use ssh
  * clean up expect scripts
  * add podAntiAffinity for elastic cluster to ensure it runs on different notes - elasticsearch-deploy.yml
  * update night build scripts to include emedge\*.zip
  * fix potential LogStashProxy lumberjack queue limit (shows queue is full) when there are too many beat logs
  * improves CV to ignore older beats logs (using -Dmom beats ignore older mins=nn, default is 30
  * remove obsoleted cisco process monitors
  * fix LogStashProxy for beats logs collection
## Changes in v11.1.90b322 (Tue Aug 25 2020)
  * refactor netgain/perf/ElasticPerfDataManager
  * perf enhancements to reduce number of threads
  * enhance emedge executable
  * update siem intel
  * do not prompt for CV IP, if 'cv' environment is already set
  * forwards netflow traffic from edge to CV
  * add initial code to collect some SaaS audit metrics
  * saas logging to elasticsearch
  * fix caching issues in notify and security db
  * add back nightly probe patch (no gpg)
  * update em edge binary
  * update bin/run.sh for cloud
  * update em edge download link
  * fixed EV multiple IP range discovery in CV
  * bug 3966 philcomsat report issue Gna
  * Bug 3964 dell switch not able to monitor Gna
  * disable auto restart (maint freq) by default, unless -Dperiodic restart=1
## Changes in v11.1.85b315 (Wed Aug 19 2020)
  * enhance emedge go runtimes
  * major revamp of edge to make it easier to download and setup
  * use javax.net.ssl.X509ExtendedTrustManager instead of javax.net.ssl.X509TrustManager
  * Issue With Progress Bar while Deleting Device
  * Migrating Browser Alert To NetGain Alert-Part 1 Changes
  * include dummp.tar.gz as testing patch for EMEdge patch update testing
  * remove tomcat https security constraint
  * add support for remote selenium web testing
  * add redis prototype
  * make HTTP forwards to HTTPS by default
  * do not show all elastic shards for saas customers
  * implement netgain.protocols.Kube class to control kubernetes
  * No Output In Discovery Logs
  * fix some gui display for -Dnetgain saas=1 deployment
## Changes in v11.1.81b309 (Thu Aug 13 2020)
  * update siem intel
  * fix bug home dashboards table issue
  * Modify Photo Issue
  * Add notify method for 'Wechat' messenging app
  * remove old wechat support
  * Add notify method for 'Telegram' messenging app
  * improves elastic siem detection rules import logic to remove unused attributes
  * update threat detection rules from elastic
  * major enhancement to AlarmManager to remove use of alarm caching for elastic (always query)
  * Add customizable elastic index name prefix for all index names used
  * Refactor AlarmManager to split into ElasticAlarmManager and FlatFileAlarmManager
  * obsolete alarm suppressor feature
  * refactored ElasticProxy to add RequestDumper for debugging performance
  * add netgain/elastic/RequestDumper to help debug elastic performance
  * enhance SIEM hunt manager to avoid reloading default rules all the time
  * refactor alarm code
  * obsolete package netgain.slamgr
  * remove obsoleted CassandraAlarmPersistManager.java
  * remove obsoleted model netgain.event package
  * fix some typo in monitor counter names in HuaweiStorage monitors
  * update SIEM intel
  * fix some typo in monitor counter names in CiscoCbQosSet, HuaweiMpuPerf and CacheDB monitors
  * remove obsoleted code for backup/restore and reminders
  * improves on monitors discovery
  * enhance fortnet log parsing
  * add export feature for CiscoPSIRT
## Changes in v11.1.76b303 (Fri Aug  7 2020)
  * Add notify method: Microsoft Teams
  * bug 3965 mfa customize traffic report
  * BugHunt2-if we can mapped the IP to host.name when mouse over, or display ip when mouse over to the host.name
  * BugHunt2-History data issue: if there will be more counters to show, the counter names gets cuts off by the screen
  * BugHunt2-Netflow: Search: Initially when we paginate to rows like between 1000- 1500 and then search for a new query string and the result is only 10 rows
  * BugHunt2-Admin - Status - Memory: Dump memory of key objects now is throwing error
  * DNS resolve hostnames in netflow, and logs
  * update linux jre package to jre1.8.0 261
  * add web/sampleapp as part of patch
  * fix apm to create index template for NetGain ingested APM data
  * add flows/min in netflow page
  * full trial windows add version number jhio
  * enhance apm transaction waterfall display
  * add pulling and display of Cisco PSIRT info with -Dcisco psirt=1
  * bug 3963 switch network ports not showing correct label Gna
  * update activation code generation
  * List View Status Screen Fixes
  * AI WorkFlow Creating Duplicates
  * CMDB Schedules Disable Action
  * CMDB To Use Latest Time Utility-DatePicker Formatting
  * Home Dashboards Table Issue
  * enhance to hide search suggestions when ESC key pressed
  * enhance on SIEM threat events generation
  * fix double close of diaglogs in netflow reports
  * BugHunt2-Netflow: Report download: When there is no data, downloafd report is throwing 404 exception
  * BugHunt2-Netflow: Ton n result when there is no data showing undefined in query results
  * BugHunt2-NetFlow > Report  Download of report is incomplete, not showing all columns
## Changes in v11.1.72b298 (Sun Aug  2 2020)
  * update SIEM intel
  * enhance voice UI
  * jump to cisco talos link when clicking on public IPs in apm, netflow and logs pages
  * fix critical busy loop in javascript
  * enhance of demo apm java app
  * update elastic apm sample rum app
  * apm collector for logstash, edge forwards apm logs to CV
  * tighen em edge forwarding code
  * important major fix: move all snmp related code away from jSNMP to use snmp4jLibrary
  * make FlowsDBElastic.createDefaultApps static method
  * fix jenkins night build - em probe patch not uploaded to filedrop server
  * fix bug for snmp v3 authNoPriv security level
  * trial version expired after initial installation jhio
  * CMDB Network Config Template Issue
  * Blackout Schedules Issue
  * add 60d and 90d option to history data query
## Changes in v11.1.66b293 (Wed Jul 29 2020)
  * add site.id and site.name to traps received from EV edge
  * BugHunt2-SIEM not able to click the field mapping to do quick search
  * BugHunt2-zoom in logs histogram by selecting a graph port shows blank when there's only one bar
  * BugHunt2-Add more checking when saving threat detection rule
  * Alarm Details Page
  * Report Tabulate Graph Issue
  * Add link for APM sample app
  * BugHunt2-NetFlow - the raw logs data field title eg source, app should be full name
  * import default rules sorting during import siem detection rules
  * add support for '-Delastic disable track scores=1/0'
  * improves elasticsearch query to replace 'field :\*' with exists:field1', to avoid exceptions in elasticsearch v7.8+
  * bug refresh after adding business
  * improves animated logos
  * update threat detection rules from elastic
  * update SIEM intel
  * update license.txt to point to netgain website
  * enhance elastic rules import
  * update default threat rules to remove elastic rules first
  * enhance code for checking threat detection rules syntax
  * minor CSS changes
  * Refresh After Adding Business-Tool Tip In edit Mode
  * Refresh After Adding Business
  * add voiceui prototype code (not enabled by default)
## Changes in v11.1.64b291 (Mon Jul 27 2020)
  * initial implementation of auto-import of elastic opensource detection rules
  * strength SNMP v3 query code
  * update SIEM intel
  * slight refactor
  * fix snmp v3 engine ID inconsistencies
  * update trial key encryption algorithm
  * force need for JRE 1.8.0 162 and above, to support AES192/256 encryption
  * fine-tune logic to validate and check threat hunting rules
  * fixed bugs in forwarding trap from Edge to CV
  * implemented Snmp4JTrapListener to replace NgSnmpTrapListener (enabled using -Dsnmp4j trap listener=1)
  * added backup class netgain/alarm/collector/Snmp4JTrapListener
  * refactor netgain/protocols/snmpV3GetTest and netgain/snmp/mock/Agent
  * Bug 3960 Legal Notice In Login Page ST Info
  * include windows event logs as part of sample logs in product
  * Bug 3943 korlantas switch hored network ports not monitoring Gna
  * disable LogStashProxy in windows version for now (not needed), due to runtime errors of RouteBuilder
## Changes in v11.1.61b288 (Fri Jul 24 2020)
  * add threat intelligence: talosintelligence
  * enhance on log reports
  * snmp4j library update: remove snmp4j code in 3rdparty.jar and added snmp4j-2.8.4.jar,  and updated snmp4j-agent-2.4.0.jar to snmp4j-agent-2.7.4.jar
  * Line Settings Issue Merging Code Changes After Approval By SS Gna
  * SNMP Error Message Formatting
  * siem netflow reports creating duplicates
  * change labels 'Security Incidents' to 'Security Threats'
  * SIEM Netflow Reports Creating Duplicates
  * add support for new threat rule type 'query' that uses simple query expressions
  * Line Settings Issue
## Changes in v11.1.60b287 (Thu Jul 23 2020)
  * rename netgain/logmgmt/BeatsCollector to netgain/logmgmt/LogStashProxy
  * improves on APM transaction display
  * Status Screen Using Generalised Icons
  * Alarms Notify Now Users Formatting
  * Capacity Prediction Button Formatting
  * Rest API Display Issues
  * Notification Pop Up Modal Truncating Data
  * Home Wrong Warning Color
  * Status Export File Containing Special Characters
  * Merging as the changes are done by SS
  * SIEM NetFlow Reports Saving Empty
  * bug empty row saving issue few screens
  * SIEM Watcher Empty Row Issue
  * Favourite Icon Tool Tip
  * Slack SSL Trust Issue
  * Empty Row Saving Issue Few Screens
  * Search on NetFlow and other screens: drop down suggest window should be able to get out by using ESC key
  * merge ais eds branch ais/eds/eds prod v10
  * add optical power monitor for H3C switches
  * fix display of decimal point in test window
## Changes in v11.1.58b285 (Tue Jul 21 2020)
  * Bughunt cannot set siem authorization to roles
  * Bughunt there is no description of RestApi for SIEM
  * V10 slack webhook update
  * Bughunt Log analytics doesn’t show the date when opted for one month
  * Bughunt security analytics - reports - default  reports not editable
  * fix localizations
  * make ElasticProxy refresh only after changing data, if in eager mode
  * V10 Slack Webhook Update-fix SSL trust issue
## Changes in v11.1.57b284 (Mon Jul 20 2020)
  * bugfixes notify email issue and silent unzip elastic search issue…
  * Add Dashboard Access Issue
  * V10 Slack Webhook Update
  * bugfixes notify email issue and silent unzip elastic search issue Gna
  * Slack Webhook Update
  * update to use Slack new webhook API
  * Policies Threshold Creation Issue
  * bug various cmdb issues
  * Putty Download Issue
  * Various CMDB Issues
  * makefile fulltrial filename fix jhio
  * Bug fixes unzip elastic silent mode Gna
## Changes in v11.1.53b280 (Fri Jul 17 2020)
  * add access control feature to limit client login by user and IP
  * User Defined Report Add Template Issue
  * bug table display when no data
  * Forgot Password Screen Issues
  * update log4j to v2.13.3
  * update sampleapp for APM
  * bug net gain alert box improvisations
  * NetGain Alert Box Improvisations
  * Table Display When No Data
  * Bug 3951 EDS-v10: Help check if we can enable CiscoOptical class in netgain/conf/model/cisco.xml
  * do not start siem hunt manager is collector node mode, to avoid rules corruption
  * Bug Jhio-remove config customize.xml
  * description is showing null when its empty in explain specs window jhio
## Changes in v11.1.50b276 (Wed Jul 15 2020)
  * Bug 3940 eagle cement customize reports issue in downtime for whole d…
  * Bug3949 add sangfor wac monitor Gna
  * fixes elastic search not starting change trial name Gna
  * update sampleapp for apm
  * update threat intelligence db
  * improves APM demo
  * enhance JavaBase monitor base to give more concrete error logs
  * bug not generating iossd
  * fix chinese launch issue
  * Not Generating Iossd
  * Issue with downloading ping report in excel
  * Slack Settings Save issue
  * reduce exception for SocketAgentManager
  * Bug 3952 - EDS-v10: Huawei Device Model 5720 using different optical calculation method from other model
  * fix perf data display column unit label issue
  * update APM docs
  * fix siem scripts
## Changes in v11.1.48b271 (Fri Jul 10 2020)
  * bug sms feature messages
  * Table Edit And Icon Pen Inconsistencies
  * Edit Icon Changes
  * finish implement all required SIEM threat rules for MFA
  * SMS Feature Messages
  * DarkTheme Button Hover Changes
  * enhance siem python api docs
  * implement more SIEM rules
  * Icon Sizes-Code Changes
  * add threat intelligence gitsir
  * implement some partial SIEM rules
  * Help Guide Issues
  * Add Dashboard Empty Screen Enhancement
  * make perf history chart types selectable
  * fix logo issue in dark mode
  * fix CV syslogs/traps/beatslogs forwarding
  * Admin Thread analysis issue-Code Changes
  * Customize Monitor Feature Consistency Issue Code Changes
  * User Defined Reports Empty Screen
  * AI Workflow: Modal is flickering when we try to open for Query logs in AI Workflow like in the attached
  * Add Watcher rule tab not closing when switching to other tab
  * Discover Import Missing Table Lines Code Changes
  * Modal: Close button is not visible/available for the modal that is displayed on clicking Show Json
  * add elastic beats ingestion direct into EM and forward to CV
  * business view monitor groups should expand not popup jhio
  * bg image not fit into larger screens jhio
  * Issue With Alarm History Device Drill Down
  * Mouse Hover Issues In 3 Different Screens
  * Issue With Adding Entire Device View In Service Dependency
  * Table scroll issue
  * fix license generation in mac
  * bugs netflow cannot show in dashboard Gna
  * Security Analytics: Table displaying hand cursor thought the entire row is not clickable
  * Under SIEM > dashboard > security analytics - check alignment of the auth donut
  * update malware and blocked IPs list
  * Biz View Widgets issue
  * fix Inconsistency of the bottom expand arrow in pri menus
  * fix SSL issues in CSV: Edge to CV connection
  * Advise user not to use phone camera when Scanning QR Code 2FA
  * bug fix for MOs loading
  * Bugs Profile Photo Click Issue
  * Software List Issue Code Changes
  * Bugs Issue In Creating Logical Maps Code Changes
  * bug device credentials issue Code Changes
  * device credentials column filtering not working after saving or deleting
  * Logs - all have same logs
  * mfa hitting snmpv2 even v3 set Gna
  * status count seems not accurate - bulkSearch critical bug in ElasticMODB
  * fix windows build shows 'Progain ITM'
  * fix trial register key file location to avoid clash with v10.1
  * config customize.xml should not be part of windows install, as it is overwriting the existing copy, which might have existing configs
  * Discover > Device Import-showing random fdn from ais
  * fix bug on removing sample logs
  * Under SIEM-Log Analytics-Log Schema  The ECS reference link is to Github.
  * When creating new threat detection rule workflow dropdown showing nothing
  * Log analytics, NetFlow, Security Analytics shows null in the search bar
  * Improves MOs loading in elastic
  * fix typo from mappings to mapping
  * fix MO corrupt issue with 'run netgain.mo.ElasticMODBTool fix'
  * bugs agent link not working in tools Gna
  * bugs device import still able to add ping only devices Gna
  * Inconsistency of History data feature
  * Alarms click details link of any alarm pops up the details with Close button is hidden
  * update logo to animated gif
  * update logo to sharper images
  * Bug 3923 Ping Availability Report Issue when selected for month Bug 3…
  * Monitor status Auto scrolling to Top when last row of the table is clicked
  * Status types bulk modify issue
  * fix menus for CloudVista
  * tooltip for action buttons monitor screen
  * reverted few changes related to add dashboard
  * the left hand side menu, when i hover my mouse over the icon, there is no menu item displayed
  * fixed issues on EM edge
  * Monitor Types Refresh To Display Saved Values
  * default grapher formatting fix
  * Bug Hunting Issues css formatting
  * Monitor Settings Screen Formatting
  * dark mode formatting fix
  * added Roboto Mono file
  * fix log reports downloads
  * Layer3 Screen Icon formatting
  * display add dashboard button in custom dashboards
## Changes in v11.1.44b267 (Thu Jun 25 2020)
  * improves logs search group by to allow labels
  * enhance log reports
  * tooltip for action buttons in monitor screen
  * Status Types screen formatting
  * make windows event.code clickable to show event type information
  * table edit values display issue when its not edited
  * default device overview table data formatting
  * Bug 3946 Biz View Widget issue Code Changes
  * add support for -Dscrub mfa=1
  * enhance SIEM dashboard
  * avoid adding invalid longitude/latitude and add tags for snmptraps
  * improves on SIEM dashboard content sorting
  * update malware domains list
  * update malware domains list
  * refactored netgain.elastic.SearchHelper
  * cancel save button class changes
  * cancel save buttons class change
## Changes in v11.1.42b265 (Tue Jun 23 2020)
  * improves display of log fields
  * change log mappings to use standard ECS user.name
  * text and primary button changes in few screens
  * font change few table columns
  * removed inline css for ngdialog
  * fix elastic auto start in windows package
  * dark theme table formatting
  * code refactor for netgain/sac/TrialActivation class
  * add feature to allow sharing of dashboards to other users
  * fixed issue of org.apache.commons.httpclient.CircularRedirectException: Circular redirect to 'http://localhost:8081/u/jsp/settings/upload license.jsp'
  * hover state for primary button dark mode
  * add monitor formatting
  * add monitor monitor types formatting
  * AIS EDS-Supports configurable property for SNMP IP-to-FDN mapping cache expiry mins
  * file permissions
  * fixed issue of logs advance query only can show up to 10 results
  * fix query expression error due to non-breakspace space at the end of query string
  * fix query expression error for table query to handle underscore in field name
## Changes in v11.1.40b261 (Fri Jun 19 2020)
  * dark theme formatting
  * improves response time of add dashboard
  * improves on trial activation process
  * add new method 'ngWindowClose'
  * refactored all dashboard backend code into netgain.common.DashboaardUtil and rest/ngdb.jsp
  * css enhancements to current dashboard widgets
  * do not start HuntManager if not SIEM plus
  * fourth menu hover changes
  * dt button hover issue fix
  * background color for datatables filter
  * dark theme hover fix
  * users save issue fix
  * users delete issue fix
  * users create button issue fix
  * issue with role saving
  * monitor table edit
## Changes in v11.1.39b259 (Wed Jun 17 2020)
  * change in modal for adding device monitor group
  * Add service Menu display issue fix
  * ng dialog MinorChanges Add Dashboard Minor Changes
  * monitor table formatting fix
  * table edit code modifications
  * Bug 3940 eagle cement customize reports issue in downtime for whole day Gna
  * build fixes Jhio
  * make license expiring msg more proper
  * inspiro avaya alarm monitor Gna
  * bug cs1046 xapiens ad integration Gna
  * Implement v11 Full Trial version
  * Biz Views Refresh button issue fix
  * biz views Status Formatting Fixes
  * Email Settings Minor Fix
  * alarms page Table overlay issue fix
  * tabulate Formatting Fixes
  * removed some unwanted code
  * added label length menu in table
  * Status monitor fix
  * move windemo jsp files to u/jsp/trial folder
  * remove concept of free partner
  * add class netgain/common/Encryptor.java
## Changes in v11.1.37b257 (Mon Jun 15 2020)
  * fix monitor stataus list view error
  * css changes to fix default browser controls display .e.g. checkboxes
  * Revert "speed up page navigations"
  * update file permissions
  * update web jspc.xml
  * add tool netgain.elastic.IndexCsvConverter
  * improves ngDialog with ngWindow
  * minor time select enhancements
  * improves of search suggestions
  * fix logs display
  * change add new dashboard to popup
  * major css to change the default table look and feel
  * all switch to use generic query search component
  * add search history to common query component
  * SIEM AI Workflow Fileds Truncating issue fix
  * primary menu toggle text is bit visibile when it is not expanded fix
  * subnet screen issues
  * Dark theme drop down changes
  * fix add dashboard issue
  * avoid MOFix in elastic mode
## Changes in v11.1.34b254 (Fri Jun 12 2020)
  * move the search bar to top for logger aand siem
  * improves of query input for netflow screens
  * reports width issue fix
  * datatables options and other formatting fixes
  * datatables pagination row length fixes
  * use common netgain/ngElasticQueryInput component for APM dashboard
  * display apm transaction spans better
  * add larger logo when menu expands
  * fix table bug
  * speed up page navigations
  * fix apm reports bug
  * fix duplicate menu ids issue
  * minor javasacript changes
  * add APM RUM agent to NetGain code
  * border issue Monitor Screen
  * enhance on to add CaptureSpan for APM stats for key methods
  * add elastic-apm-agent-1.16.0.jar and apm-agent-api-1.16.0.jar
  * enhance on APM table displays
  * enhance on page refreshes
  * logical map add objects issue fix
  * enhance on APM feature
  * minor formating fixes
  * icon trash replacement
  * default dashboard formatting fix
  * datatables wrapper formatting issue
  * improves on apm display
  * chinese localization
  * Version Name Formatting
  * datatables formatting
  * add apm agent tracing code
  * show APM transaction details
  * reorganize report menus
  * refactor base.less
  * add reports and watcher for apm
  * partial implementation of APM
## Changes in v11.1.29b249 (Sun Jun  7 2020)
  * update jspc files
  * major refactor to remove old NetFlow implementation code
  * added APM prototype
  * save base copies of threat intels
  * improves on log sources display to show epm, eph and epd
  * add toggle primary menu show and hide
  * add support for kibana apm integration
  * add categories for siem threat rules
  * add categories for log mapping rules
  * enhance on screen help wizard for logs and siem screens
  * fix errors in winlogbeat logs display
  * improves winlogbeat install steps description for 'setup.ilm.enabled: false'
  * fix windows packaging issue (avoid Progain label)
  * create alarm and notify workflow nodes
  * clears MOs cache when a related MOs index is restored
  * implemented netgain/elastic/CrondElasticMOBackup to do periodic backup of key indexes
  * rename workflow node create event to create incident
  * save logger reports menu state
  * fix Elastic MOs query limit
  * add report category
  * fix perf history data query issue when time range more than 1 day
  * add new page to show log sources and EPM (events per minute)
  * enhance sample log ingestions
  * enhance monitor perf history console
  * add netgain.elastic.Tool for easy elastic browsing
## Changes in v11.1.26b245 (Wed Jun  3 2020)
  * add support for -Dcollector node=1 or -Dreadonly mos=1
  * temporarily fix a serious bug that causes MO updates unneccessarily
  * minor fix Monitor screen
  * Monitor Screen Data Tables Columns Formatting
  * datatables button formatting
  * Bug 3929 KB Customization Philcomsat-Minor fixes
  * improves sample logs ingestions
  * add support for netflow reports
  * add support for netflow watcher and alarms
  * remove hazelcast from elastic MODB
  * china localization
  * finish up whole threat intelligence logic (end-to-end)
  * finish up GUI threat intelligence page
  * allow edit/delete of log reports
