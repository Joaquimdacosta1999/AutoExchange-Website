# 🚗 AutoExchange – Static Car Marketplace Website

AutoExchange is a static website clone of AutoTrader, built using **HTML** and **CSS**. It serves as a conceptual prototype for a car marketplace platform tailored to the South African market. The site includes structured car listings, search tools, valuation services, and editorial content — all designed to simulate a real-world automotive trading experience.

---

## 🎯 Purpose

This project was created to:

- Practice semantic HTML and responsive CSS layout techniques  
- Explore real-world UI/UX patterns used in automotive marketplaces  
- Build a modular, scalable front-end structure suitable for future backend integration  
- Serve as a learning artifact for full stack certification and portfolio development

---

## 🧩 Features

### 🔍 Core Pages
- **Home Page**: Featured listings (e.g., Volkswagen Polo, Hyundai Accent, Ford Ranger)  
- **Buy a Car**: Filter and browse vehicles by brand, model, location  
- **Sell My Car**: Form-based interface for submitting car details  
- **Value My Car**: Static valuation tool with mock input/output  
- **News & Reviews**: Editorial articles (e.g., Toyota Hilux Legend 55 Review)  
- **Tools & Services**: Finance calculator, insurance info, K53 guides

### 🧭 Navigation
- Responsive top bar with links to major sections  
- Sign In / Register options (non-functional placeholders)  
- Footer with social media icons and company links

### 📱 Responsive Design
- Mobile-first layout using Flexbox  
- Adaptive sections for listings, forms, and content blocks  
- Clean typography and spacing for readability

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML       | Semantic structure and content layout |
| CSS        | Styling, positioning, responsive design |

No JavaScript or backend logic is included — this is a front-end-only prototype.

---

## 🧱 Layout Architecture

```plaintext
autoexchange/
├── index.html                 # Home page
├── about.html                 # About AutoExchange
├── buy.html                   # Buy a car
├── sell.html                  # Sell my car
├── value.html                 # Car valuation tool
├── news.html                  # News & reviews
├── tools.html                 # Tools & services
├── styles/
│   └── styles.css             # Global styles
├── assets/
│   ├── images/                # Placeholder car images
│   └── icons/                 # Social media and UI icons
├── README.md
├── LICENSE
└── .gitignore
