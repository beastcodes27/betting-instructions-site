# Quick Setup Guide

## Firebase Configuration Steps

1. **Create Firebase Project**
   - Go to https://console.firebase.google.com/
   - Click "Add Project"
   - Follow the setup wizard

2. **Enable Authentication**
   - In Firebase Console, go to Authentication
   - Click "Get Started"
   - Enable "Email/Password" sign-in method
   - Create an admin user (this will be your admin login)

3. **Create Firestore Database**
   - Go to Firestore Database
   - Click "Create Database"
   - Start in "Test mode" (we'll add security rules)
   - Choose a location (preferably close to Tanzania)

4. **Get Firebase Config**
   - Go to Project Settings (gear icon)
   - Scroll to "Your apps"
   - Click the web icon (</>)
   - Register app if needed
   - Copy the config object

5. **Update Config File**
   - Open `src/firebase/config.js`
   - Replace the placeholder values with your Firebase config

6. **Deploy Security Rules**
   - Copy the contents of `firestore.rules`
   - Go to Firestore > Rules in Firebase Console
   - Paste and publish the rules

## Initial Data Setup

### Create Settings Document
1. Go to Firestore Database
2. Create a collection called `settings`
3. Create a document with ID `groupLinks`
4. Add fields:
   - `whatsapp` (string): Your WhatsApp group invite link
   - `telegram` (string): Your Telegram group invite link

### Add Sample Tip (Optional)
1. Go to Firestore Database
2. Create a collection called `tips`
3. Add a document with fields:
   - `matchName`: "Team A vs Team B"
   - `league`: "Premier League"
   - `tip`: "Team A Win"
   - `odds`: "2.5"
   - `status`: "Pending"
   - `createdAt`: (timestamp - use server timestamp)

## Update Contact Links

1. Open `src/components/Layout.js`
2. Find the footer section
3. Update the WhatsApp link: `https://wa.me/255XXXXXXXXX` (replace with your number)
4. Update the Telegram link: `https://t.me/yourusername` (replace with your username)

## Running the App

```bash
# Install dependencies (if not done)
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Admin Access

- URL: `http://localhost:3000/admin/login`
- Use the email/password you created in Firebase Authentication

## Deployment

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize (select Hosting and Firestore)
firebase init

# Build the app
npm run build

# Deploy
firebase deploy
```

## Troubleshooting

### Tailwind CSS not working
- Make sure `src/index.css` has the Tailwind directives
- Restart the development server

### Firebase connection errors
- Check your Firebase config in `src/firebase/config.js`
- Verify your Firestore database is created
- Check browser console for specific error messages

### Admin login not working
- Verify the user exists in Firebase Authentication
- Check that Email/Password is enabled
- Ensure you're using the correct email/password


