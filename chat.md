# 🏃‍♂️ TrailPulse — AI-Powered Running Posture & Safety Platform

**Team Name:** TrailPulse  
**Team Members:**  
- Yuhang ZHOU (Team Leader)  
- ChunWa LUK (Jason)  
- TszHin YUEN  

**Email:** trailpulse2025@gmail.com  
**GitHub:** [https://github.com/3dsimon/trailpulse](https://github.com/3dsimon/trailpulse)  

---

## 💡 Inspiration

Hong Kong has abundant public trails and promenades — yet lacks AI tools to analyze runners’ physiological responses and posture in real time.  
We aim to **bridge the gap between Hong Kong's exceptional physical infrastructure** and **individual training safety** by using **AI and edge computing**.

---

## 🎯 Mission & Core Value

**Mission:**  
Enhance the safety and performance of Hong Kong’s running community through AI-driven posture corrections, adaptive route coaching, and emergency monitoring.

**Core Value Proposition:**  
- Personalized, *route-aware* posture analytics  
- Real-time injury prevention  
- Data privacy and ethical deployment  
- Scalable public health improvement  

---

## 🧠 Project Overview

We integrate **edge AI**, **open trail data**, and **mobile coaching** features:

1. **Posture Detection** – Analyze and correct body alignment using camera-based skeletal keypoints.  
2. **Route Recommendation** – Suggest trails based on elevation, distance, and surface type.  
3. **Adaptive Coaching** – Offer real-time voice or haptic feedback during runs.  
4. **Emergency Handling** – Alert system for off-track or injury events.  
5. **Post-Run Analytics** – Generate weekly load/recovery reports aligned with ACSM training standards.

---

## 🏗️ Technical Stack

| Layer | Technologies / Tools |
|-------|----------------------|
| Edge Inference | Jetson Nano / Raspberry Pi / ESP32 |
| AI Models | MediaPipe, TensorFlow Lite, PyTorch |
| Cloud & App | Firebase / Google Cloud / Custom Dashboard |
| Data Source | `data.gov.hk` open datasets for trails & sports |
| Visualization | Tableau (for demonstration dashboards) |

---

## 🔐 Privacy, Safety & Ethics

- Collect *only skeletal keypoints* (no facial data).  
- Edge-processing and on-device anonymization.  
- QR-based consent signage for data capture zones.  
- Encryption, retention policies, and clear MOU partnerships.  

---

## 🛠️ Development Timeline

| Phase | Milestones |
|-------|-------------|
| Part 1 | Ideation workshop, base pose classifier prototype |
| Part 2 | Edge hardware integration & posture detection |
| Pilot | 6–8 week test across 2 campus or trail sites |
| Refinement | Model optimization, UI sketching, user feedback loop |

---

## 👥 Target Users

- **Primary:** Recreational or semi-competitive runners (18–45 yrs)
- **Secondary:** University athletes, sports clubs, recreation authorities  

---

## 🗺️ Mind Map — TrailPulse System Design

```mermaid
mindmap
  root((TrailPulse))
    Inspiration
      "Underutilized public trails"
      "Lack of AI-driven posture analytics"
    Solution
      "AI-powered mobile & edge app"
        "Posture detection"
        "Adaptive coaching"
        "Emergency monitoring"
        "Post-run analysis"
    Architecture
      Edge
        "Jetson Nano / Raspberry Pi"
        "Pose detection with MediaPipe / TF Lite"
      Cloud
        "Secure data upload"
        "Post-run reports"
        "User community matching"
      App
        "Real-time feedback"
        "Trail recommendation"
    Data
      "Open Data from data.gov.hk"
      "User keypoint vectors"
      "Training metadata"
    Privacy & Ethics
      "Anonymized pose tracking"
      "Consent via QR signage"
      "Encryption & limited retention"
    Impact
      "Reduce injury rates"
      "Enhance performance"
      "Promote safer running culture"
