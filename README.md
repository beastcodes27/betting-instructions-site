# betting-instructions-site

A modern, responsive betting tips website built with React and Tailwind CSS.

## Features

- 🏠 **Home Page** with 4 large menu buttons
- 📝 **Registration Guide** - Step-by-step guide to register on Paripesa
- ❓ **FAQ** - Questions and answers about using Paripesa
- 📱 **WhatsApp Group** - Join our WhatsApp group
- ✈️ **Telegram Channel** - Join our Telegram channel

## Tech Stack

- **Frontend**: React 19, Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: React Icons

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   └── Layout.js          # Main layout wrapper
├── pages/
│   ├── Home.js            # Home page with 4 menu buttons
│   ├── RegistrationGuide.js # Registration guide page
│   ├── FAQ.js             # FAQ page with accordion
│   ├── WhatsAppGroup.js   # WhatsApp group page
│   ├── TelegramChannel.js # Telegram channel page
│   └── BettingTips.js     # Betting tips page
├── App.js                 # Main app with routing
└── index.css              # Tailwind CSS imports
```

## Design

- **Theme**: Dark (Black/Dark Blue with Green accents)
- **Responsive**: Mobile-first design
- **Animations**: Smooth transitions and hover effects
- **Colors**:
  - Primary Dark: `#0a0e27`
  - Primary Blue: `#1a1f3a`
  - Primary Green: `#10b981`
  - Primary Green Dark: `#059669`

## License

Private project - All rights reserved
