# Nexariza AI Chat Widget - Dark Theme Edition

A sleek, dark-themed AI-powered chat widget with glassmorphism effects.

## Features

- Dark theme with purple/violet gradient accents
- Glassmorphism chat panel
- Left-aligned floating button with pill shape
- Bot avatar indicators
- Typing indicators with animated dots
- Timestamps on all messages
- Quick reply buttons
- Mobile-responsive design
- Single script tag embeddable

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Embed on Any Website

```html
<script src="https://your-domain.com/chat-widget.js" data-theme="dark"></script>
```

## Project Structure

```
week 4/
├── public/
│   ├── chat-widget.js      # Embeddable widget script
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ChatWidget.jsx
│   │   ├── ChatHeader.jsx
│   │   ├── ChatMessage.jsx
│   │   ├── QuickReplies.jsx
│   │   └── TypingIndicator.jsx
│   ├── utils/
│   │   └── responses.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── README.md
```

## Design Differences

| Feature | Week 4 Task (Blue) | Week 4 (Dark Purple) |
|---------|-------------------|---------------------|
| Theme | Light | Dark |
| Colors | Blue (#2563EB) | Purple (#8B5CF6) |
| Position | Right | Left |
| Button | Circle | Pill |
| Panel | Solid white | Glassmorphism |
| Avatars | No | Yes |

## Tech Stack

- React.js
- Tailwind CSS
- Vite

## License

Built for Nexariza AI Internship Program - Week 4
