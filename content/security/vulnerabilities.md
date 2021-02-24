---
title: Vulnerabilities and Fixes
weight: 5
---
This document is to provide a list of vulnerabilities reported on the product and the corresponding rectification measures

<!-- spellchecker-disable -->


<!-- spellchecker-enable -->

## Product Fixes
<details> 
  <summary>Version v11.1.201 or above </summary> 
    <ul>
       <li>OWASP-A9 Outdated Components with known Vulnerabilities</li> 
       <li>CWE-284 - Insecure Flash Cross Domain Policy</li>  
       <li>CWE-308 OWASP-A2 Use of Single-factor Authentication</li> 
       <li>CWE-613 OWASP-A7 Weak Idle Timeout</li> 
       <li>CWE-645 OWASP-A2 Overly Restrictive Lockout Mechanism</li> 
       <li>CWE-326 CWE-327 CWE-210 OWASP-A3 Inadequate Transport Layer Protection</li> 
       <li>CWE-16 OWASP-A6 Cookie Without HTTPOnly Flag set</li> 
       <li>CWE-326 CWE-327 CWE-310 OWASP-A3 Use of Broken or Risky Cryptographic Algorithms</li> 
       <li>OWASP-A3 Client-initiated Renegotiation Supported</li> 
       <li>CWE-693 Framable response</li> 
       <li>CWE-525 OWASP-A6 Lack of Client-Side Cache control</li> 
       <li>CWE-525 Sensitive Field Forms Autocomplete</li> 
       <li>CWE-523 CWE-693 OWASP-A6 HTTP String Transport Security Not Enforced</li> 
       <li>CWE-693 CWE016 OWASP-A6 X-XSS-Protection Header not implemented</li> 
       <li>CWE-384 Mulitiple Login Sessions</li> 
       <li>CWE-200 CWE-213 OWASP-A6 Web server & Framework Version Identification</li> 
       <li>CVE-2014-3566 POODLE: SSLv3</li> 
    <ul>
</details>

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
