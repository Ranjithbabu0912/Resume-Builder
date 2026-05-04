# 🚀 Namma Resume — AI-Powered Resume Builder

**Namma Resume** is a full-stack AI-powered resume builder that helps users create professional, ATS-friendly resumes quickly and effortlessly. With an intuitive UI and smart automation, users can generate, customize, and export resumes in minutes.

🌐 Live Demo: https://namma-resume.vercel.app/

---

## ✨ Features

- 🤖 AI-powered resume content generation
- 🧾 ATS-friendly resume templates
- 🎨 Clean and modern UI with Tailwind CSS
- 🔐 Authentication & secure user data handling
- 🖼️ Profile image upload with background removal (ImageKit)
- 📄 Resume preview & export
- ⚡ Fast and responsive (Vite + React)
- 📦 RESTful API with Express & MongoDB

---

## 🛠️ Tech Stack

### Frontend (Client)

- ⚛️ React 19
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔄 Redux Toolkit
- 🌐 Axios
- 🔔 React Hot Toast
- 🎯 React Router DOM

### Backend (Server)

- 🟢 Node.js
- 🚀 Express.js
- 🍃 MongoDB + Mongoose
- 🔐 JWT Authentication
- 🔑 Bcrypt (password hashing)
- 📁 Multer (file uploads)
- 🖼️ ImageKit (image processing)
- 🤖 OpenAI API (AI resume generation)

## 📂 Project Structure

```
namma-resume/
├── 📁 client — React + Vite frontend
├── 📁 server — Node.js + Express backend
└── 📄 README.md
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/namma-resume.git
cd namma-resume
```

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a .env file in /server:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url

OPENAI_API_KEY=your_openai_key
```

Run backend:

```bash
npm run server
```

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

### 🔐 Environment Variables

| Vriable              | Description               |
| -------------------- | ------------------------- |
| MONGODB_URI          | MongoDB connection string |
| JWT_SECRET           | JWT authentication secret |
| IMAGEKIT_PRIVATE_KEY | ImageKit configuration    |
| OPENAI_API_KEY       | OpenAI API key            |

### 📸 Screenshots

Add screenshots here (Home, Builder, Preview, etc.)

- 🚀 Future Improvements
- 📄 Multiple resume templates
- 🌍 Multi-language support
- 📊 Resume scoring system
- 🧠 Better AI suggestions
- 📥 PDF download optimization

### 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

### 📄 License

This project is licensed under the ISC License.

### 👨‍💻 Author

Ranjith Babu S
(Web Developer)
