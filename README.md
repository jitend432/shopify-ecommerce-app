# React Native E-commerce Mobile Application

Ek modern, cross-platform (Android & iOS) e-commerce mobile application jise **Gymshark** ke visual reference aur modular architecture ke mutabiq banaya gaya hai.

---

## 🚀 Features & Shopping Journey

1. **Branded Welcome & Navigation:** Clean splash/welcome flow aur header navigation.
2. **Product Listing (Home Screen):** Sample products ko smooth list mein display karna.
3. **Product Detail & Variant Selection:** Product images, pricing, description, aur size variants (`S, M, L, XL`) ki selection ke sath out-of-stock/unavailable option handling.
4. **Cart & Redux State Management:** Redux Toolkit (`cartSlice`) ka use karke items add/remove karna, quantity update karna, aur total price automatic calculation.
5. **Checkout & Order Flow:** Success alert message, cart clear action, aur home screen par redirecting flow.

---

## 🛠️ Tech Stack & Architecture

* **Framework:** React Native CLI (JavaScript / ES6+)
* **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
* **Navigation:** React Navigation
* **Styling:** StyleSheet (Modular & Theme-based variables)
* **Data Layer Isolation:** Services layer (`productService.js`) jo Shopify Storefront API (GraphQL) aur offline/401 error handling ke liye **Mock Data Fallback** dono ko support karti hai.

---

## 📋 Setup & Run Instructions

### Prerequisites
* Node.js (v18+)
* React Native CLI environment setup (Android Studio / Xcode)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-folder>


2.  Install Dependencies:

npm install
# or
yarn install
Run for iOS (Mac only):


cd ios && pod install && cd ..
npx react-native run-ios

3. Run for Android:

Ensure your Android Emulator is running or a physical device is connected via USB.

Terminal 1 (Start Metro):

Bash
npx react-native start
Terminal 2 (Run App):

Bash
npx react-native run-android