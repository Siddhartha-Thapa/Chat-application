# YOOCHAT - Realtime Futuristic Chat App

YOOCHAT is a real-time chat application with a futuristic UI, built using **Socket.io**, **Node.js**, and a modern HTML/CSS/JS frontend. Users can join, send messages, and receive notifications instantly.

---

## 🚀 Features

- **Realtime Messaging:** Instant message delivery using Socket.io.
- **Futuristic UI:** Neon glow, glassmorphism, and animated effects.
- **Join/Leave Notifications:** See when users join or leave the chat.
- **Sound Alerts:** Audio notification for incoming messages.
- **Input Validation:** Prevents empty messages from being sent.
- **Responsive Design:** Works on desktop and mobile devices.

---

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS (Orbitron font, animations), JavaScript
- **Backend:** Node.js, Socket.io


---

## 📦 Project Structure

```
chatapp/
├── css/
│   └── style.css
├── js/
│   └── client.js
├── nodeserver/
│   └── index.js
├── index.html
└── README.md
```

---

## ⚡ Getting Started (Local Development)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/yoochat.git
cd yoochat
```

### 2. Install Dependencies

```bash
cd nodeserver
npm install socket.io
```

### 3. Start the Backend Server

```bash
node index.js
```
The server runs on `http://localhost:8000`.

### 4. Serve the Frontend

Use VS Code Live Server, Python's SimpleHTTPServer, or any static server:

```bash
# From project root
python -m http.server 5500
```
Open `http://localhost:5500` in your browser.

---


- **UI:** Edit `css/style.css` for colors, animations, and layout.
- **Sound:** Replace `ring.mp3` with your preferred notification sound.
- **Features:** Add user authentication, private rooms, emojis, etc.

---

## 🧩 Troubleshooting

- **CORS Errors:** Ensure your backend allows your frontend domain in CORS settings.
- **Socket Connection Issues:** Use the Socket.io CDN and serve your frontend via a web server.
- **No Username Prompt:** Make sure `client.js` is loaded and not blocked.

---


## 🙏 Credits

- [Socket.io](https://socket.io/)
- [Orbitron Font](https://fonts.google.com/specimen/Orbitron)
- [Netlify](https://netlify.com)
- [Render](https://render.com)

---

**Enjoy chatting with YOOCHAT!**