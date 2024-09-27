---
title: Elasticsearch Upgrade from 7.9
geekdocHidden: true
slug: elasticsearch_upgrade_from_7_9
---
## 1. Disable check_box.sh in crontab
```bash
crontab -e
```
<br>
{{< highlight bash "linenos=inline" >}}
#* * * * * /root/netgain/bin/check_box.sh
#*/15 * * * * /root/netgain/bin/ha/standby.sh
10 0 * * * mon sync; echo 3 > /proc/sys/vm/drop_caches
0 6 * * * find /var/log/iossd* -mtime +30 -delete
{{< /highlight >}}

## 2. Stop NetGain EM 
```bash
/root/netgain/bin/box-stop.sh
```

## 3. Export Elasticsearch indices for backup
### a. View indices
```bash
curl -X GET “<localhost_IP>:9200/_cat/indices”
```
<br>
<img src="images/es_indices.png" alt="es_indices" style="width: 100%; max-width:800px;" />

### b. Create directory where to store exported indices
```bash
mkdir /root/exported_indices
``` 

### c. Export each index
```bash
/root/netgain/bin/run.sh netgain.elastic.IndexExporter index_name /root/exported_indices/index_name
``` 

## 4. Stop Elasticsearch
```bash
systemctl stop elasticsearch
```

## 5. Download  Elasticsearch 7.17.0
```bash
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.0-x86_64.rpm --no-check-certificate
```

## 6. Install  Elasticsearch 7.17.0
```bash
yum localinstall --disablerepo=* elasticsearch-7.17.0-x86_64.rpm
```

## 7. Start Elasticsearch
```bash
systemctl start elasticsearch
```

## 8. Check Elasticsearch status
```bash
systemctl status elasticsearch
```

## 9. Repeat steps 4 to 6 for Elasticsearch 8.11.4 installation
Replace version with 8.11.4 in steps 4 to 6.
## 10. Edit elasticsearch.yml for Elasticsearch 8.11.4
```bash
vi /etc/elasticsearch/elasticsearch.yml
```

### a. Remove old node roles below:
{{< highlight bash "linenos=inline" >}}
node.master: true
node.data: true
node.ingest: true
{{< /highlight >}}

### b. Add new node roles below:
{{< highlight bash "linenos=inline" >}}
node.roles: [ data, master, ingest ]
{{< /highlight >}}

## 11. Start Elasticsearch
```bash
systemctl start elasticsearch
```

## 12. Check Elasticsearch status
```bash
systemctl status elasticsearch
```