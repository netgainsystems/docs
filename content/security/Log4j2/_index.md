---
title: Apache Log4j2 Vulnerability
weight: 7
geekdocHidden: true
---

## About Apache Log4j2 Remote Code Execution (RCE) Vulnerability CVE-2021-44228 & CVE-2021-45046
Apache Log4j2 <=2.14.1 JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers when message lookup substitution is enabled. From log4j 2.15.0, this behavior has been disabled by default. In previous releases (>2.10) this behavior can be mitigated by setting system property "log4j2.formatMsgNoLookups" to &#8220;true&#8221; or it can be mitigated in prior releases (<2.10) by removing the JndiLookup class from the classpath (example: zip -q -d log4j-core-*.jar org/apache/logging/log4j/core/lookup/JndiLookup.class).

It was found that the fix to address CVE-2021-44228 in Apache Log4j 2.15.0 was incomplete in certain non-default configurations. This could allows attackers with control over Thread Context Map (MDC) input data when the logging configuration uses a non-default Pattern Layout with either a Context Lookup (for example, $${ctx:loginId}) or a Thread Context Map pattern (%X, %mdc, or %MDC) to craft malicious input data using a JNDI Lookup pattern resulting in a denial of service (DOS) attack. Log4j 2.15.0 makes a best-effort attempt to restrict JNDI LDAP lookups to localhost by default. Log4j 2.16.0 fixes this issue by removing support for message lookup patterns and disabling JNDI functionality by default.

## Summary
NetGain has analysed the impact of the remote code execution vulnerability (CVE-2021-44228 & CVE-2021-45046) related to Apache Log4j (a logging tool used in many Java-based applications) disclosed on 9 Dec 2021 on its products, and has published the information below:  
  
- Affected products
- Mitigation guide

## Affected products

NetGain EM, CV and emedge versions lower than v11.2.126

## Mitigation guide
To help mitigate the risk of this vulnerability , NetGain provides one option:

- Long term fix :  To update NetGain EM, CV and emedge to version v11.2.126
  - package of log4j2 will be updated to version 2.16.0

## Ref
https://cve.mitre.org/cgi-bin/cvename.cgi?name=2021-44228

https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-45046


