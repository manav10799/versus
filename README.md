# 📊 Product Comparison App

<img width="1452" height="714" alt="image" src="https://github.com/user-attachments/assets/3426aefa-bb72-418c-8500-0d6b1400c2e3" />
<img width="1455" height="705" alt="image" src="https://github.com/user-attachments/assets/07fcfb84-e057-4599-bd41-9641732214ce" />
<img width="1447" height="735" alt="image" src="https://github.com/user-attachments/assets/515c6a58-99d9-4b4d-af55-06de28a30cd6" />
<img width="328" height="659" alt="image" src="https://github.com/user-attachments/assets/2f1e7853-dff4-4c63-970c-4134145b6082" />
<img width="322" height="652" alt="image" src="https://github.com/user-attachments/assets/f6ba0e1b-6715-4867-b847-65d377b477ae" />
![Uploading image.png…]()



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
