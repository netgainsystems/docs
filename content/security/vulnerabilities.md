---
title: Vulnerabilities and Fixes
weight: 5
---
This document is to provide a list of vulnerabilities reported on the product and the corresponding rectification measures

<!-- spellchecker-disable -->


<!-- spellchecker-enable -->

## Product Fixes
- Version v11.1.201
  - CVE-1999-0517- SNMP Agent Default Community Name (public)
  - CVE-2008-5161 - SSH Server CBC Mode Ciphers Enabled
  - CVE-2012-5081 -  TLS ROBOT Vulnerability Detected (JAVA)
  - CVE-2014-3566 POODLE: SSLv3
  - CVE-2015-4000 SSL/TLS Diffie-Hellman Modulus <= 1024 Bits (Logjam)
  - CVE-2016-2183 -  Birthday attacks against TLS ciphers with 64bit block size vulnerability (Sweet32)
  - CVE-2020-11022  JQuery 1.2 < 3.5.0 Multiple XSS
  - CVE-2020-11023  JQuery 1.2 < 3.5.0 Multiple XSS
  - CVE-2020-13943 Apache Tomcat HTTP/2 Request mix-up
  - CVE-2020-14750 - Oracle WebLogic Server
  - CVE-2020-17527 Apache Tomcat HTTP/2 Request header mix-up
  - CVE-2020-17530 - Apache Struts 2 Successful exploitation of the vulnerability may allow an attacker to perform remote code execution on a vulnerable system.
  - CVE-2020-1971 - OpenSSL exploits to cause a Denial of Service condition.
  - CVE-2020-26217 - XStream Remote Code Execution Vulnerability
  - CWE-16 OWASP-A6 Cookie Without HTTPOnly Flag set
  - CWE-200 CWE-213 OWASP-A6 Web server & Framework Version Identification
  - CWE-284 - Insecure Flash Cross Domain Policy
  - CWE-308 OWASP-A2 Use of Single-factor Authentication
  - CWE-326 CWE-327 CWE-210 OWASP-A3 Inadequate Transport Layer Protection
  - CWE-326 CWE-327 CWE-310 OWASP-A3 Use of Broken or Risky Cryptographic Algorithms
  - CWE-384 Mulitiple Login Sessions
  - CWE-523 CWE-693 OWASP-A6 HTTP String Transport Security Not Enforced
  - CWE-525 OWASP-A6 Lack of Client-Side Cache control
  - CWE-525 Sensitive Field Forms Autocomplete
  - CWE-613 OWASP-A7 Weak Idle Timeout
  - CWE-645 OWASP-A2 Overly Restrictive Lockout Mechanism
  - CWE-693 CWE016 OWASP-A6 X-XSS-Protection Header not implemented
  - CWE-693 Framable response
  - Nessus Plugin ID 12085 -Apache Tomcat Default Files
  - Nessus Plugin ID 51192 - SSL Certificate Cannot Be Trusted
  - Nessus Plugin ID 57582 - SSL Self-Signed Certificate
  - Nessus Plugin ID 76474 -  SNMP 'GETBULK' Reflection DDoS
  - OWASP-A3 Client-initiated Renegotiation Supported
  - OWASP-A9 Outdated Components with known Vulnerabilities

## OS-related fixes
<details> 
  <summary> CVE-2021-3156 Privilege Escalation Vulnerability in Sudo</summary>

  **Overview**
  <br>
    &nbsp;&nbsp;&nbsp; Sudo before 1.9.5p2 has a Heap-based Buffer Overflow, allowing privilege escalation to root via 
  <br>
    &nbsp;&nbsp;&nbsp; "sudoedit -s" and a command-line argument that ends with a single backslash character.

  **Mitigation Steps**
  <ol>
    <li>
      Download the package <a href="https://github.com/sudo-project/sudo/releases/download/SUDO_1_9_5p2/sudo-1.9.5-3.el7.x86_64.rpm">sudo-1.9.5-3.el7.x86_64.rpm</a>
	</li>
	<li>
	  Use WinSCP to copy the sudo-1.9.5-3.el7.x86_64.rpm into the server and place it under /tmp directory
	</li>
	<li>
	  SSH to the server and execute the following commands below
	</li>
	# cd /tmp
	<br>
	# yum localinstall --disablerepo=* sudo-1.9.5-3.el7.x86_64.rpm
	<li>
	  Verify the Sudo version
	</li>
  </ol>

  &nbsp;&nbsp;&nbsp;&nbsp;![Sudo Version](/security/images/sudo_version.png  "sudo") 		
</details> 
