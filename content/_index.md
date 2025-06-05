---
title: Home
---

<div style="text-align: center; padding: 2rem 0;">
<h1 style="font-size: 3rem; color: #0ABAB5; margin-bottom: 1rem;">{{% welcome %}}</h1>
<p style="font-size: 1.3rem; color: #666; max-width: 800px; margin: 0 auto; line-height: 1.8;">
Your complete guide to mastering {{% company %}} products and services. Get up and running in minutes with our intuitive documentation and step-by-step tutorials.
</p>
</div>

<style>
.home-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin: 3rem 0;
}

.home-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8fffe 100%);
    border: 2px solid #0ABAB5;
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.home-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(10,186,181,0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.home-card:hover::before {
    opacity: 1;
}

.home-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(10,186,181,0.15);
    border-color: #089b97;
}

.card-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.card-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
}

.card-desc {
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.5;
}

.card-link {
    color: #0ABAB5;
    font-weight: 600;
    text-decoration: none;
}

.section-title {
    text-align: center;
    font-size: 2rem;
    color: #333;
    margin: 3rem 0 2rem;
    position: relative;
    padding-bottom: 1rem;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #0ABAB5;
}
</style>

<h2 class="section-title">🚀 Quick Start</h2>
<div class="home-grid">
    <div class="home-card" onclick="location.href='/getting-started/overview/';">
        <div class="card-icon">🏗️</div>
        <h3 class="card-title">Solution Architecture</h3>
        <p class="card-desc">Understand our powerful platform architecture and how components work together</p>
        <a href="/getting-started/overview/" class="card-link">Learn More →</a>
    </div>
    
    <div class="home-card" onclick="location.href='/getting-started/installation/emedge/installation-simple';">
        <div class="card-icon">⚡</div>
        <h3 class="card-title">Installing emedge</h3>
        <p class="card-desc">Get emedge up and running in under 5 minutes with our simple installation guide</p>
        <a href="/getting-started/installation/emedge/installation-simple" class="card-link">View Guide →</a>
    </div>
    
    <div class="home-card" onclick="location.href='/getting-started/installation/cloud_vista/';">
        <div class="card-icon">🧭</div>
        <h3 class="card-title">Platform Navigation</h3>
        <p class="card-desc">Master the interface and discover powerful features at your fingertips</p>
        <a href="/getting-started/installation/cloud_vista/" class="card-link">View Guide →</a>
    </div>
</div>

<h2 class="section-title">💡 Core Features</h2>
<div class="home-grid">
    <div class="home-card" onclick="location.href='/user-guide/monitoring/metrics/';">
        <div class="card-icon">📊</div>
        <h3 class="card-title">Infrastructure Monitoring</h3>
        <p class="card-desc">Real-time monitoring of servers, networks, and applications with smart alerts</p>
        <a href="/user-guide/monitoring/metrics/" class="card-link">Explore →</a>
    </div>
    
    <div class="home-card" onclick="location.href='/user-guide/analytics/siem/';">
        <div class="card-icon">📝</div>
        <h3 class="card-title">Log Analytics</h3>
        <p class="card-desc">Powerful log search, analysis, and visualization for troubleshooting and insights</p>
        <a href="/user-guide/analytics/siem/" class="card-link">Explore →</a>
    </div>
    
    <div class="home-card" onclick="location.href='/user-guide/analytics/siem/';">
        <div class="card-icon">🔒</div>
        <h3 class="card-title">Security Analytics</h3>
        <p class="card-desc">Advanced threat detection and security event correlation to protect your assets</p>
        <a href="/user-guide/analytics/siem/" class="card-link">Explore →</a>
    </div>
    
    <div class="home-card" onclick="location.href='/user-guide/analytics/apm/';">
        <div class="card-icon">⚙️</div>
        <h3 class="card-title">Application Performance</h3>
        <p class="card-desc">Deep insights into application behavior and performance optimization</p>
        <a href="/user-guide/analytics/apm/" class="card-link">Explore →</a>
    </div>
    
    <div class="home-card" onclick="location.href='/user-guide/analytics/netflow/';">
        <div class="card-icon">🌐</div>
        <h3 class="card-title">Network Analytics</h3>
        <p class="card-desc">Comprehensive network traffic analysis and bandwidth monitoring</p>
        <a href="/user-guide/analytics/netflow/" class="card-link">Explore →</a>
    </div>
    
    <div class="home-card" onclick="location.href='/user-guide/configuration/cmdb/';">
        <div class="card-icon">🔧</div>
        <h3 class="card-title">Configuration Management</h3>
        <p class="card-desc">Automated network device configuration backup and compliance management</p>
        <a href="/user-guide/configuration/cmdb/" class="card-link">Explore →</a>
    </div>
</div>

<div style="background: linear-gradient(135deg, #f8fffe 0%, #ffffff 100%); border-radius: 16px; padding: 3rem; margin: 3rem 0; text-align: center;">
    <h2 style="color: #333; margin-bottom: 1rem;">🎯 Need Help?</h2>
    <p style="color: #666; font-size: 1.1rem; margin-bottom: 2rem;">Our team is here to help you succeed</p>
    <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">
        <a href="https://www.{{% domain %}}" target="_blank" style="background: #0ABAB5; color: white; padding: 0.8rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: all 0.3s ease;">Visit Website</a>
        <a href="mailto:support@{{% domain %}}" style="background: white; color: #0ABAB5; padding: 0.8rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 600; border: 2px solid #0ABAB5; transition: all 0.3s ease;">Contact Support</a>
    </div>
</div>

<hr style="margin: 3rem 0; border: none; border-top: 1px solid #eee;">
{{< copyright-auto-update >}}
