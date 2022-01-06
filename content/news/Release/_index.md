---
title: Release notes
weight: 8
---

## NetGain EM Veresion Release Notes

Please find below for the past release notes: 

---------------------------------------------------------------------------------------------------------------- 
**NetGain EM Change Log v11.2.121 build 213 (release date: 23rd December 2021)**  
  - Fixes:
    - Fix cannot_create_apache_monitor_after_discovery_gna  
    - Fix Metrics_Types_Alignment_Issue  
    - Duplicate_Dashboard_Issue
    - Linux_agent_not_stopping
    - log4j - fix log4j zero-day vulnerability - CVE-2021-44228,CVE-2021-45046
    - Dell switches not able to pull config 
    - ncm Cisco_not_able_to_pull_in_full
    - Fix issue_With_Integrations_Alignment
    - Fix issue_With_Device_View_Object_Deletion
    - Various SaaS issues and enhancements
  - Enhancements:
    - NCM_to_add_support_palo_alto_device_gna
    - Add NCM_huawei_device_6300
    - Add_symbol_host_description_in_notify_rules
----------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.2.67 build 121 (release date: 28th September 2021)**  
  - Fixes:
    - Biz_View_Issue_When_Mo_Not_Found
    - notify fix notification issues when alarm count changes before sending out the first notification requests
    - User_Data_Migration_Issue_With_Latest_Version
    - googlemap displays a clean map with POIs
    - monitors add back url monitor counters to avoid warning logs
    - monitors fixed Alcatel Fan monitor perf counter names
    - Issue_With_Add_Widget_Screen_Not_Scrollable
    - ncm_snmpv3_device_import_failed
    - Special_Character_In_Global_Rules_Exported_Excel
    - security improve display of API token for user in user view
    - Bug_4294_APM_Watcher_table_Cursor_Formatting
    - dashboard implement support to plot history graphs for multiple objects of the same type
    - dashboard feature to support add metrics view to dashboard
    - logs improve search result to use aggregate labels instead of field name, if available
    - monitor gui - update and improve the status text display for monitors in monitor list view
    - topo remove icons from network topo view, so that screencapture works
    - GUI remove some javascript warnings during initial page load
    - netflow flows analyzer blank graph issue
    - monitor reimplement perf forecast function in monitor history view
    - netflow add/remove filter buttons for IP columns in flows table
    - logs improve saving of queries to include filter settings too
  - Enhancements:
    - metricbeat enhance support for more metricbeat system metrics - refactor code
----------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log 11.1.299 build 33 (release date: 27th June 2021)**
  - Fixes:
    - Issue with loading pdf reports in cvs instances
    - Adhoc reports to show heading on charts with multiple counters
    - IPMI emedge_latest_version_cannot_discover_monitor
    - Monitor make device dashboard show positive value in ylabels for traffic graphs
    - User defined reports table to show only selected counters
    - Tomcat change shutdown port from 8005 to 8006
    - Fix 2FA login with google captcha enabled and also refactor
    - Table_Canvas_is_Not_Resizing_according_To_Widget_Height
    - Fix bug of MO corruption when moving/copying MOs tree
  - Enhancements:
    - APM slight GUI improvements
    - Logs improves logs display and search UX
    - Supports export/import MO tree via GUI - enhancements
    - Add DNS hostname when adding device, if hostname is not found from snmp
----------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.240 build 581 (release date: 27th April 2021)**
  - Fixes:
    - Issue with creating new dashboards for non admin users
    - Fix capacity prediction issues
    - Fix metric objects sorting issue
    - Fix netlow search and reports toggle fields
    - Fix device import issue
    - Time range select by default not showing any values
    - APM transaction span display issue when first span is too long
    - Role add topo view when no views
    - Modal close button shows double icons
    - Too many decimal points for value in adhoc report
    - Error saving global rules
    - Horizontal Privelege Escalation VAPT fix
    - Path Traversal VAPT fix 
  - Enhancements:
    - Added TalariaX notification integration
    - Enhance SaasMonitor
----------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.203 build 522 (release date: 27th February 2021)**

  - Fixes:
    - Fix monitor status list screen flickering issue
    - Fix mobile web view bug 
    - Use TLS1.2 and disable weak Ciphers to avoid TLS ROBOT Vulnerability
    - Fixed checkboxes in alarm page issue and alarms dropdown issue on page load
    - SIEM Dashboard display error when query string contains as 'xxx'
  - Enhancements:
    - Implement logs compliance reports
----------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.185 build 493 (release date: 29th January 2021)**
  - Fixes:
  Fix netflow recording
  Fix CVS empty site showing disabled status
  Fix netflow application deletion issue
  Fix orphan mos deletion
  - Enhancements:
    - Improves on logon screen css
    - Prototype changes in alicloud integration
----------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.175 build 420 (release date: 28th December 2020)**

  - Fixes:
    - Fix critical bug of MOManger.deleteMO only deleting immediate child MOs and not grandchild MOs
    - Fix metrics report batch delivery not able to schedule delivery
    - Fix adding business view in role management
    - Fix not able to create monitor after auto discover
    - Do not annotate problem when auto discharging
    - Fix critical issue of MO not delete at edge when delete MO at CV
  - Enhancements:
    - Add MacroSan new monitors
    - Add BizView SLA batch reports
    - Enhance batch reports customization
    - Enhance agent to support IPv6
    - Implemented Arista switch optical sensors 
    - Improve the monitor history view page
    - Improve on capacity planning estimation
---------------------------------------------------------------------------------------------------------------------
**NetGain EM Release Notes v11.1.160 build 408 (release date: 27th Nov 2020)**
  - Fixes:
    - Mobile view formatting
    - Fix Interface monitor Input Output Utilization Units
    - Fix APM transactions query wrong (not based on time range)
    - Fix APM transaction filter search
    - Fix agent make no rmi as default true. Make socket agent method as default.
    - Fix critical issue of socket agent connection not secure.
    - Fix issue with saving new assets
    - Fix critical snmpv3 trap receive
    - Fix SNMP trap varbind ingest issue
    - Fix 2fa screen formatting
    - Fix logical map display severity colour for normal status
    - Fix monitor graph display issue
    - SIEM alarms export
    - Logical map google map case sensitive comparision with new map
    - Monitor object jump links
    - Time range select problems for beats indexs (GMT-based indices)
    - Logs_summary dashboard click issue
    - Threat detections enable/disable feature
    - Fix opsgenie pager duty issues
  - Enhancements:
    - Improve logs and apm dashboard widgets
    - Add APM widgets
    - Allow auto APM drill down based on URL hash
    - Improve on dashboards for logs widgets
    - Add support for engine ID in SNMP USM Users edit
    - Add PDF support for log reports delivery
    - Support running emedge as a windows service
    - Add AliCloud Notification mechanism
    - Implement current alarms export to excel button
    - Add ServiceNow notification integration
---------------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.141 build 396 (release date: 27th October 2020)**
  - Fixes:
    - Fix ApmWatcher bug that it does not generate alarm
    - Fix input output utilization units
    - Fix primary menu expand bug
    - Fix issue with saving new assets
  - Enhancements:
    - Improve elastic query format to include sorting direction
    - Add default monitoring dashboard
    - Enhance alarm views
    - Update default SIEM security threat dashboard
    - Add APM response time dashboard widget
    - Improve log summary dashboard widget
    - Add APM transaction mapper
    - Add selectable colors for dashboard
    - Enhanced download option for monitor history graph
    - Improve on logs reports to indicate no data
    - Enhance logmgmt to show elasticsearch ingest time performance on web GUI
    - Add netflow histogram
---------------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.118 build 361 (release date: 28th September 2020)**
  - Fixes:
    - Fix bug of enable/disable mapping rules due to multiple transformers
    - NetGain alert box dark theme formatting
    - Fix history data issue with moving devices
    - Fix screen overflow when expandable primary menu is clicked
    - Fix bug of role users not saved when users added to role
    - Fix deleteMO issue when parent MO is not found
  - Enhancements:
    - Improve metric reports performance
    - Enhance multiple metrics for combined reports
    - Enhance metric reports to add in dashboard
    - Add top-n report prototypes
    - Prototype SIEM compliance reports
    - Enhance syslog collector to handle invalid/TCP format
---------------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.90 build 322 (release date: 27th August 2020)**
  - Fixes:
    - Removed obsoleted cisco process monitors
    - Fix LogStashProxy for beats logs collection
    - Do not prompt for CV IP, if 'cv' environment is already set
    - Forwards netflow traffic from edge to CV
    - Fixed EV multiple IP range discovery in CV
    - Dell switch not able to monitor
    - Fix issue with progress bar while deleting devices
    - Fix DNS resolve hostnames in netflow, and logs
    - Fix Netflow: Report download: When there is no data, downloafd report is throwing 404 exception
    - Fix bug for snmp v3 authNoPriv security level
    - Fix snmp v3 engine ID inconsistencies
    - Force need for JRE 1.8.0_162 and above, to support AES192/256 encryption
  - Enhancements:
    - Add support for remote selenium web testing
    - Make HTTP forwards to HTTPS by default
    - Add notify method for 'Wechat' messenging app
    - Add notify method for 'Telegram' messenging app
    - Enhance SIEM hunt manager to avoid reloading default rules all the time
    - Improve on monitors discovery
    - Add export feature for CiscoPSIRT
    - Add notify method: Microsoft Teams
    - Enhance apm transaction waterfall display
    - Auto CI build: v11.1.73b300 (created on Tue Aug  4 03:11:49 SGT 2020)
---------------------------------------------------------------------------------------------------------------------
**NetGain EM Change Log v11.1.62 build 289 (release date: 27th July 2020)**
  - Fixes:
    - Fixed bugs in forwarding trap from Edge to CV
    - SIEM netflow reports creating duplicates
    - Home wrong warning color
    - SIEM NetFlow reports saving empty
    - Log analytics doesn’t show the date when opted for one month
    - Update log4j to v2.13.3
    - Fix perf data display column unit label issue
    - Fix logo issue in dark mode
    - Fix table scroll issue
    - Fix SSL issues in CSV: Edge to CV connection
    - Fix for MOs loading
    - Fix status count not accurate 
    - Alarms click details link of any alarm pops up the details with Close button is hidden
    - Fix left hand side menu, when hover mouse over the icon, there is no menu item displayed
  - Enhancements:    
    - Implemented Snmp4JTrapListener to replace NgSnmpTrapListener (enabled using -Dsnmp4j_trap_listener=1)
    - Include windows event logs as part of sample logs in product
    - Add threat intelligence: talosintelligence
    - Enhance on log reports
    - Snmp4j library update
    - Improve on APM transaction display
    - Add optical power monitor for H3C switches
    - Add sangfo wac monitors
    - Make perf history chart types selectable

---------------------------------------------------------------------------------------------------------------------
**v11.1.43b266 v11 Launch**
