---
title: Security
geekdocHidden : True
---
## How to request CSR generation

**Please change the following details according to customer requirements.**

### Create keystore:

1. **Create a new directory and generate a keystore:**
    ```bash
    cd /root
    mkdir ssl_28Jun2024
    /root/netgain/jre/bin/keytool -genkey -alias TBA_by_Customer_CA -keyalg RSA -keystore /root/ssl_28Jun2024/customer_name.jks -keysize 4096 -ext SAN=dns:netgain_server_hostname.example.com, ip:netgain_server_ip
    ```
    - Specify a password: `any_password_preferred`.

2. **Enter the following details when prompted:**
    - **Name:** TBA by Customer CA, and normally it is NetGain server hostname.
    - **Organization Unit:** TBA by Customer CA.
    - **Organization:** TBA by Customer CA.
    - **City:** TBA by Customer CA.
    - **State:** TBA by Customer CA.
    - **Country:** TBA by Customer CA.

### Generate CSR file to send to CA to sign:

```bash
/root/netgain/jre/bin/keytool -certreq -keyalg RSA -alias TBA_by_Customer_CA -file certreq.csr -keystore /root/ssl_28Jun2024/customer_name.jks
