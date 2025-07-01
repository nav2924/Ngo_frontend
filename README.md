# NGO Frontend – `nav2924-ngo_frontend`

This is a modern **React + Vite** based frontend boilerplate tailored for building scalable NGO or social-impact web applications. It comes pre-configured with **Tailwind CSS**, **shadcn/ui components**, **ESLint**, and a clean modular directory structure to streamline development.

---

## 🌟 Features

- ⚡️ **Vite** for lightning-fast development builds
- 🎨 **Tailwind CSS** utility-first styling
- 🧩 **shadcn/ui** for accessible and aesthetic UI components
- 📦 Component-based folder structure (`/components/ui`)
- 🔍 Responsive utilities and hooks (`/hooks/use-mobile.js`)
- 🧹 Pre-configured ESLint for code quality and consistency

---

## 🗂️ Project Structure

```plaintext
nav2924-ngo_frontend/
├── README.md               → Project overview and instructions
├── components.json         → Tracks shadcn/ui components
├── eslint.config.js        → ESLint configuration
├── index.html              → HTML entry point for Vite
├── jsconfig.json           → JS/TS path aliases
├── package.json            → Project dependencies and scripts
├── vite.config.js          → Vite configuration
└── src/
    ├── pages/         → For pages
    ├── App.jsx             → Root App component
    ├── main.jsx            → React DOM renderer
    ├── index.css           → Tailwind base styles
    ├── components/
        └── custom/         → For custom compoents
    │   └── ui/             → All shadcn UI components (e.g., button, card, dialog, etc.)
    ├── hooks/
    │   └── use-mobile.js   → Custom hook for mobile viewport detection
    └── lib/
        └── utils.js        → Utility/helper functions
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/nav2924-ngo_frontend.git
cd nav2924-ngo_frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```


## 🤝 Contributing

We welcome contributions to improve this project! To contribute:

1. **Fork this repository**

2. **Create a new branch**

```bash
git checkout -b feat/your-feature
```

3. **Make your changes and commit**

```bash
 git commit -m "feat: add your feature"
```

4. **Push to your branch**
```bash
git push origin feat/your-feature
```

5. **Open a Pull Request**
