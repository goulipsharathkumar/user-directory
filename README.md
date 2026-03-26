# 🏢 BuyerForesight — User Directory Dashboard

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)

A fully responsive **User Directory Dashboard** built with React as part of the BuyerForesight Frontend Engineer Assessment.

🔗 **Live Demo → [user-directory-smoky-sigma.vercel.app](https://user-directory-smoky-sigma.vercel.app)**

---

## ✨ Features

- 📋 **User Table** — Displays all users with Name, Email, Phone, and Company
- 🔍 **Live Search** — Filter users instantly by name or email (client-side, no API call)
- 🔃 **Sorting** — Sort by Name or Company in ascending / descending order with one click
- 👤 **User Detail Page** — Click any row to view full user profile (contact, address, company)
- 🔗 **React Router** — Clean URL-based navigation (`/` and `/user/:id`)
- ⚡ **Custom Hooks** — `useUsers` and `useUser` hooks handle all API logic cleanly
- 💅 **CSS Modules** — Scoped styles, zero conflicts, fully maintainable
- 📱 **Responsive Design** — Works on desktop, tablet, and mobile
- 🌙 **Dark Theme** — Professional dark UI with smooth animations

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| React Router v6 | Client-side routing |
| CSS Modules | Scoped component styling |
| JSONPlaceholder API | Mock user data |
| Vercel | Deployment |

---

## 📁 Project Structure
```
src/
├── hooks/
│   └── useUsers.js          # Custom hooks for API calls
├── components/
│   ├── Header.js            # Sticky navigation header
│   ├── Loader.js            # Loading spinner
│   └── UserTable.js         # Table with search + sort logic
├── pages/
│   ├── Dashboard.js         # Main user listing page
│   ├── UserDetail.js        # Individual user profile page
│   └── NotFound.js          # 404 page
├── App.js                   # Route definitions
├── index.js                 # App entry point
└── index.css                # Global CSS variables & reset
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/goulipsharathkumar/user-directory.git

# Navigate into the project
cd user-directory

# Install dependencies
npm install

# Start the development server
npm start
```

App runs at **http://localhost:3000** 🎉

### Production Build
```bash
npm run build
```

---

## 📸 Screenshots

### Dashboard — User Table with Search & Sort
> Clean dark UI showing all 10 users fetched from the API with live search and column sorting.

### User Detail Page
> Full user profile with contact info, address, and company details in a card grid layout.

---

## 🔌 API Used

**JSONPlaceholder** — Free fake REST API for testing and prototyping.
```
GET https://jsonplaceholder.typicode.com/users       → All users
GET https://jsonplaceholder.typicode.com/users/:id   → Single user
```

---

## 💡 Key Implementation Highlights

**Custom Hook Pattern**
```js
// Clean separation of data fetching from UI
const { users, loading, error } = useUsers();
```

**Client-side Search with useMemo**
```js
const filtered = useMemo(() => {
  const q = search.toLowerCase().trim();
  return users.filter(u =>
    u.name.toLowerCase().includes(q) ||
    u.email.toLowerCase().includes(q)
  );
}, [users, search]);
```

**Toggle Sort Logic**
```js
const toggle = (key) =>
  setSort(prev =>
    prev.key === key
      ? { key, dir: prev.dir === 'asc' ? 'desc' : 'asc' }
      : { key, dir: 'asc' }
  );
```

---

## 👨‍💻 Built By

**Gouli P Sharath Kumar**
Full Stack Developer (MERN Stack)
📧 sharathgouli20@gmail.com
🔗 [GitHub](https://github.com/goulipsharathkumar)

---

## 📄 License

This project was built as part of a Frontend Engineer Assessment for BuyerForesight.
