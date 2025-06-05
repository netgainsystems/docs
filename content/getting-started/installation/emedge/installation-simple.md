---
title: "emedge Installation: The Simple Way"
geekdocHidden: false
slug: installation-simple
weight: -10
---

# 🎯 Installing emedge: Explained Like You're Five

Let's break down emedge installation using the Feynman technique - making complex things simple!

## 🤔 What is emedge?

Imagine your computer network is like a busy city. emedge is like having security cameras, traffic monitors, and health sensors all around the city - it watches everything and tells you when something needs attention.

## 📦 What You're Actually Installing

Think of emedge as a **smart assistant** that:
- 👀 **Watches** your servers and applications
- 📊 **Collects** important data about their health
- 📤 **Sends** this information to your monitoring dashboard
- 🚨 **Alerts** you when something goes wrong

## 🎨 The Big Picture

```
Your Server → emedge (collector) → CloudVista (your dashboard)
```

It's like having a weather station (emedge) in your backyard that sends data to a weather app (CloudVista) on your phone!

## 🚀 Installation Methods: Choose Your Adventure

### 🪟 **Windows Users: The Two-Click Method**

**Why it's simple:** Just like installing any Windows program!

1. **Download the installer** 
   ```
   Think of it like: Downloading a game from the internet
   ```

2. **Double-click to install**
   ```
   What happens: Windows does all the work for you
   ```

3. **Tell it where to send data**
   ```
   Like: Setting your home address for deliveries
   ```

**Command for pros:**
```bash
msiexec.exe /qn /i emedge-v12-latest.msi CV=mycv.domain.com SITE=my-office
```
- `CV=` is like saying "send my data to this address"
- `SITE=` is like naming your location "my-office"

### 🐧 **Linux Users: The One-Line Magic**

**Why it's amazing:** Copy, paste, done!

```bash
CV=mycv.domain.com SITE=mysite SERVICE=1 sh -c "$(curl -skL https://download.domain.com/emedge/install.sh)"
```

**What each part means:**
- `CV=mycv.domain.com` → "Send data here"
- `SITE=mysite` → "I'm calling this location 'mysite'"
- `SERVICE=1` → "Start automatically when computer starts"
- The rest → "Download and install everything for me"

### 🍎 **Mac Users: The Manual Method**

1. **Download the package**
2. **Unzip it** (like opening a gift box)
3. **Run configuration**
   ```bash
   cd emedge
   ./emedge config
   ```

### 🐳 **Docker Users: The Container Way**

```bash
docker run -d netgain/emedge
```

Think of Docker like a food truck - everything needed is already inside!

## 🎮 Understanding the Commands

### Starting emedge
```bash
emedge run
```
**Translation:** "Hey emedge, wake up and start working!"

### Stopping emedge
```bash
emedge stop
```
**Translation:** "Take a break, emedge!"

### Installing as a Service
```bash
emedge service install
```
**Translation:** "emedge, I want you to start automatically every time I turn on my computer"

## 🧠 Memory Management Made Simple

```bash
emedge setmem 2g
```

This is like telling emedge: "You can use up to 2GB of memory" - like giving someone a budget for groceries!

## 📋 System Requirements: What You Need

**Think of it like a recipe:**

**Minimum ingredients:**
- 🥄 CPU: Intel i3 (a basic processor)
- 🥛 RAM: 1GB (enough memory to run)
- 🍞 Disk: 5GB (space to store things)

**Better ingredients for a tastier result:**
- 🥄 CPU: Intel i5 or better
- 🥛 RAM: 4GB or more
- 🍞 Disk: 50GB (more room for data)

## 🔍 Where to Find Help

- **Logs:** Check `emedge.log` in your installation folder
  - *Think of it as:* emedge's diary where it writes what it's doing
  
- **Help command:** `emedge -h`
  - *Think of it as:* Asking emedge "What can you do?"

## 🎯 Quick Decision Guide

**Choose Windows MSI if:**
- You like clicking "Next, Next, Finish"
- You want Windows to handle everything

**Choose Linux one-liner if:**
- You love copy-paste solutions
- You want it done in 30 seconds

**Choose Manual installation if:**
- You want to understand each step
- You need custom configuration

**Choose Docker if:**
- You're already using containers
- You want isolation from your system

## 🚦 Success Checklist

✅ emedge is installed  
✅ It's configured to send data to your CloudVista  
✅ It's running (check with `emedge status`)  
✅ Logs show it's collecting data  

## 🎉 Congratulations!

You've just set up your own monitoring agent! It's now quietly working in the background, keeping an eye on your systems and sending updates to your dashboard.

**Next steps:**
1. Visit your CloudVista dashboard
2. See your data flowing in
3. Set up alerts for things you care about

Remember: emedge is like a helpful robot assistant - once it's set up, it just keeps working for you!