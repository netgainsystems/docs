---
title: Vulnerabilities and Fixes
weight: 5
---
This document is to provide a list of vulnerabilities reported on the product and the corresponding rectification measures

<!-- spellchecker-disable -->


<!-- spellchecker-enable -->

## Product Vulnerabilities
- Version v11.1.201
  - CVE-2020-11022  JQuery 1.2 < 3.5.0 Multiple XSS
  - CWE-308 OWASP-A2 Use of Single-factor Authentication
  - CWE-384 Mulitiple Login Sessions
  - CWE-525 OWASP-A6 Lack of Client-Side Cache control
  - CWE-525 Sensitive Field Forms Autocomplete
  - CWE-200 CWE-213 OWASP-A6 Framework Version Identification

## Non-Product Vulnerabilities / Third-patry tools
### **Apache Tomcat version 8**
*Update your NetGain with our latest Apache Tomcat(8.5.63). See download and installation steps. 
  - CVE-2020-13943 Apache Tomcat HTTP/2 Request mix-up
  - CVE-2016-2183 -  Birthday attacks against TLS ciphers with 64bit block size vulnerability (Sweet32)
  - CVE-2015-4000 SSL/TLS Diffie-Hellman Modulus <= 1024 Bits (Logjam)
  - CVE-2014-3566 POODLE: SSLv3
  - CWE-200 CWE-213 OWASP-A6 Web server
  - CWE-645 OWASP-A2 Overly Restrictive Lockout Mechanism
  - CWE-16 OWASP-A6 Cookie Without HTTPOnly Flag set
  - CWE-284 - Insecure Flash Cross Domain Policy
  - CWE-523 CWE-693 OWASP-A6 HTTP String Transport Security Not Enforced
  - CWE-613 OWASP-A7 Weak Idle Timeout
  - CWE-693 CWE016 OWASP-A6 X-XSS-Protection Header not implemented
  - CWE-693 Framable response
  - Nessus Plugin ID 12085 -Apache Tomcat Default Files
  - OWASP-A9 Outdated Components with known Vulnerabilities
  - CWE-326 CWE-327 CWE-210 OWASP-A3 Inadequate Transport Layer Protection
  - CWE-326 CWE-327 CWE-310 OWASP-A3 Use of Broken or Risky Cryptographic Algorithms

### **Java Runtime Environment (JRE)**
*Update your NetGain with our latest JRE. See download and installation steps
  - CVE-2012-5081 -  TLS ROBOT Vulnerability Detected (JAVA)
  - CVE-2020-26217 - XStream Remote Code Execution Vulnerability

### **Other reported items that NetGain is not vulnerable**
  - CVE-2021-28918 - npm library, netmask
  - CVE-2021-26295 - Apache OFBiz 
  - CVE-2020-17530 - Apache Struts 2 Successful exploitation of the vulnerability may allow an attacker to perform remote code execution on a vulnerable system.
  - CVE-2020-14750 - Oracle WebLogic Server
  - CVE-2020-1971 - OpenSSL exploits to cause a Denial of Service condition (Apache Struts)

## OS-related Vulnerabilities
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
	  Use WinSCP to copy the sudo-1.9.5-3.el7.x86_64.rpm into the NetGain server and place it under /tmp directory
	</li>
	<li>
	  SSH to the NetGain server and execute the following commands below
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

<details> 
  <summary> CVE-2008-5161 SSH Server CBC Mode Ciphers Enabled</summary>

  **Overview**
  <br>
    &nbsp;&nbsp;&nbsp; The SSH server is configured to support Cipher Block Chaining (CBC) encryption.
  <br>
    &nbsp;&nbsp;&nbsp; This may allow an attacker to recover the plaintext message from the ciphertext.

  **Mitigation Steps**
  <ol>
  <li>
    SSH to the NetGain server and execute the following commands below:
  </li>
  # cd /etc/ssh/
  <br>
  # vi sshd_config file
  <li>
    Add the following strong Ciphers 
  </li>
  #  Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com,aes256-ctr,aes192-ctr,aes128-ctr 
  <li>
    Save and Exit VI editor
  </li>
  <li>
    Restart SSHD service 
  </li>
   # service sshd restart / systemctl restart sshd
  </ol>
</details>
<details> 
  <summary> CVE-1999-0517 SNMP Agent Default Community Name (public) / Nessus Plugin ID 76474 -  SNMP 'GETBULK' Reflection DDoS</summary>

  **Overview**
  <br>
    &nbsp;&nbsp;&nbsp; SNMP is using the "public" community string, which is vulnerable to attack.
  <br>
    &nbsp;&nbsp;&nbsp; The remote SNMP daemon is affected by a vulnerability that allows a reflected distributed denial of service attack.

  **Mitigation Steps**
  <ol>
  <li>
    SSH to the NetGain server and execute the following commands below:
  </li>
  # cd /etc/snmp/
  <br>
  # vi snmpd.conf file
  <li>
    Replace the string public or the last word of the line with community string 
  </li>
  #  com2sec notConfigUser  default       <strong>public</strong> 
  <li>
    Save and Exit VI editor
  </li>
  <li>
    Restart SNMPD service 
  </li>
   # service snmpd restart / systemctl restart snmpd
  </ol>
</details>