---
title: Cloud Vista Suite (CVS)
weight: -30
---
**Cloud Vista Suite (CVS)** by spog.ai is a scalable monitoring service for hybrid cloud environments, providing monitoring of networks, servers, databases, applications, and services, through a SaaS-based monitoring analytics platform

# Key components of CVS
## Cloud Vista

  The cloud data platform for receiving, processing, storing and visualizing monitoring data

## EM Edge

  The data aggregator and forwarder of data towards Cloud Vista

## EM Edge-Agent

  The lightweight software agent to be installed on your server hosts



---
The diagram below depicts the relationship between Cloud Vista, EM Edge and EM Edge-Agent components

  <img src='https://g.gravizo.com/svg?
   digraph G {
     CloudVista -> emedge1;
     CloudVista -> _;
     CloudVista -> __;
     CloudVista -> ___;
     CloudVista -> emedgeN;
     emedge1 -> emedge_agent_A;
     emedge1 -> emedge_agent_B;
     emedge1 -> emedge_agent_C;
     emedgeN -> emedge_agent_X;
     emedgeN -> emedge_agent_Y;
     emedgeN -> emedge_agent_Z;
   }
  '/>
