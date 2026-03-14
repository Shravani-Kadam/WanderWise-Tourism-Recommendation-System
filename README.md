# 🌍 WanderWise – Tourism Recommendation System

WanderWise is a web-based **Tourism Recommendation System** that helps users discover travel destinations across India based on their preferences such as **budget, season, and month**.

The system analyzes a tourism dataset and recommends suitable destinations along with useful travel information like **ratings, estimated travel cost, recommended number of days, and destination images**.

WanderWise makes travel planning easier by allowing users to quickly find destinations that match their travel preferences.

---

# Features

* 🔍 Search destinations by name
* 💰 Filter destinations based on budget
* 🌦 Filter destinations based on travel season
* 📅 Filter by preferred travel month
* 🧭 Category-based recommendations (Adventure, Nature, Historical, etc.)
* 🎲 Random destination recommendation
* ⭐ Display ratings, travel cost, and recommended travel days
* 🖼 Destination cards with images

---

# Recommendation Algorithm Used

## Content-Based Filtering Algorithm

WanderWise uses a **Content-Based Recommendation Algorithm** to suggest destinations based on user preferences.

### How the Algorithm Works

1. The tourism dataset is loaded from a CSV file.
2. The user selects preferences such as:

   * Budget
   * Season
   * Month
3. The system compares user inputs with the dataset attributes.
4. Destinations matching the selected preferences are filtered.
5. Matching destinations are displayed as recommendations.

### Algorithm Steps

1. Load tourism dataset
2. Accept user preferences (budget, season, month)
3. Compare user input with dataset attributes
4. Filter matching destinations
5. Display recommended destinations

This approach is **efficient and suitable for small datasets used in web-based recommendation systems**.

---

# 🛠 Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Python
* Flask

### Dataset

* CSV dataset containing tourism destinations

### Development Tools

* Visual Studio Code
* GitHub

---

# ▶️ How to Run the Project

### 1️⃣ Clone the repository

```
git clone https://github.com/Shravani-Kadam/WanderWise-Tourism-Recommendation-System.git
```

### 2️⃣ Navigate to the project folder

```
cd WanderWise-Tourism-Recommendation-System
```

### 3️⃣ Run the Flask application

```
python app.py
```

### 4️⃣ Open your browser and go to

```
http://127.0.0.1:5000
```

