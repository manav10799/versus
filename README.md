# 📊 Product Comparison App

An interactive and responsive web interface to compare products (Mobiles, Laptops, Headphones).  
Built with **React, Tailwind CSS, Redux Toolkit, and LocalStorage**.

---

## 🚀 Setup & Run

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

Install dependencies:

npm install

Run the development server:

npm run dev

Open in browser:

http://localhost:5173/

Features

🌐 Three Product Categories (Mobiles, Laptops, Headphones)

📦 Static Data for product listing (name, brand, image, price, features)

📊 Comparison View:

Select minimum 2 and maximum 3 products

Side-by-side table layout

Highlight differences visually

➕ Add / Remove / Clear products from comparison

🔒 Prevents adding products from different categories into the same comparison

💾 Persistence using LocalStorage

🌓 Dark Mode / Light Mode Toggle

⚛️ State Management with Redux Toolkit

🎨 UI Styling with Tailwind CSS

⚡ React Hooks:

useState, useEffect for state & lifecycle

useContext for theme handling

🔄 Fully responsive design (desktop & mobile)

🛠️ Tech Used

React (functional components + hooks)

Redux Toolkit (state management for compare items)

React Context API (theme switching)

Tailwind CSS (styling + responsive layout)

LocalStorage (persist theme)

Vite (dev server + bundler)

📌 Assumptions

User can only compare products within the same category.

Maximum of 3 products allowed in comparison view.
