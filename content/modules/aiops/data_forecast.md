---
title: "Data Forecasting"
geekdocHIDDEN: true
slug: "data_forecasting"
---

# Data Forecasting Details

NetGain Cloud Vista uses advanced machine learning algorithms to provide data forecasting, anomaly detection, and outlier detection for monitoring metrics. The system relies on historical data as training input, where users can specify the time duration for training (e.g., past weeks or months of data). In addition, the model considers seasonal patterns such as the hour of the day, day of the week, and month of the year, which helps improve the accuracy by accounting for periodic trends.
 
NetGain leverages a variety of machine learning algorithms:
 
- RandomForest: For predictive analysis, this ensemble method creates multiple decision trees and averages the results to forecast trends, reducing overfitting and enhancing generalization.
- IsolationForest: This unsupervised algorithm is used for anomaly and outlier detection by isolating unusual data points based on their characteristics.
- Logistic Regression: Used for classifying data, particularly for binary predictions (e.g., whether certain events will occur or not based on previous patterns).
 
Each algorithm is fine-tuned to process large volumes of monitoring data and provide accurate, actionable insights. The forecasting also offers user-controlled sensitivity levels, allowing customization of the model’s sensitivity to changes or anomalies, based on specific operational needs.
 
## Forecast Accuracy
 
The accuracy of forecasts depends on the quality and volume of historical data provided, as well as the complexity of the monitored environment. Based on internal testing, NetGain Cloud Vista typically achieves forecast accuracy between 85% to 95%, depending on the data set and patterns involved. This range can be optimized further by adjusting the sensitivity level and including adequate seasonality information, ensuring that predictions are reliable for both normal trends and anomaly detection.