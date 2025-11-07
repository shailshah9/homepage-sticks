# 🚀 Setting Up as Chrome New Tab Page

This guide will help you set up Homepage Sticks as your default new tab page in Chrome, so every time you open a new tab, you'll see your collections!

## Method 1: Chrome Extension (Recommended - Easiest)

### Step 1: Install a New Tab Extension

Choose one of these popular extensions from the Chrome Web Store:

1. **Custom New Tab URL** (Recommended)
   - [Install from Chrome Web Store](https://chrome.google.com/webstore)
   - Search for "Custom New Tab URL"
   - Click "Add to Chrome"

2. **New Tab Redirect**
   - Simple and lightweight
   - Search for "New Tab Redirect" in Chrome Web Store

3. **Custom New Tab Page**
   - More features and customization options

### Step 2: Set Up Local Server

For the extension to work properly, you need to run a local server:

**Option A: Using Python (Easiest)**
```bash
# Navigate to your project folder
cd /Users/sshah31/Projects/sshah31/homepage-sticks

# Start the server (Python 3)
python3 -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```

**Option B: Using Node.js**
```bash
# Install serve globally (one-time)
npm install -g serve

# Navigate to your project folder
cd /Users/sshah31/Projects/sshah31/homepage-sticks

# Start the server
serve -p 8000
```

**Option C: Using PHP**
```bash
cd /Users/sshah31/Projects/sshah31/homepage-sticks
php -S localhost:8000
```

### Step 3: Configure the Extension

1. After installing the extension, click on its icon in Chrome toolbar
2. Enter the URL: `http://localhost:8000`
3. Save the settings
4. Open a new tab to test!

### Step 4: Keep Server Running

**Important:** The server needs to be running for the new tab to work.

**Auto-start on Mac (Optional):**

Create a LaunchAgent to start the server automatically when you log in:

1. Create file: `~/Library/LaunchAgents/com.homepage.server.plist`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.homepage.server</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/python3</string>
        <string>-m</string>
        <string>http.server</string>
        <string>8000</string>
    </array>
    <key>WorkingDirectory</key>
    <string>/Users/sshah31/Projects/sshah31/homepage-sticks</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/tmp/homepage-server.log</string>
    <key>StandardErrorPath</key>
    <string>/tmp/homepage-server-error.log</string>
</dict>
</plist>
```

2. Load the LaunchAgent:
```bash
launchctl load ~/Library/LaunchAgents/com.homepage.server.plist
```

3. To stop it:
```bash
launchctl unload ~/Library/LaunchAgents/com.homepage.server.plist
```

Now the server will start automatically when you log in!

---

## Method 2: Chrome Extension Override (Advanced)

Create your own Chrome extension to override the new tab page.

### Step 1: Create Extension Files

Create a new folder: `homepage-sticks-extension`

**manifest.json:**
```json
{
  "manifest_version": 3,
  "name": "Homepage Sticks",
  "version": "1.0",
  "description": "Custom new tab page with link collections",
  "chrome_url_overrides": {
    "newtab": "index.html"
  },
  "permissions": []
}
```

### Step 2: Copy Your Files

Copy these files into the extension folder:
- `index.html`
- `styles.css`
- `script.js`

### Step 3: Load Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right)
3. Click "Load unpacked"
4. Select your `homepage-sticks-extension` folder
5. Open a new tab to test!

**Advantages:**
- ✅ No server needed
- ✅ Works offline
- ✅ Faster loading
- ✅ More reliable

**Note:** You'll need to update the extension whenever you make changes to your files.

---

## Method 3: File Protocol (Simple but Limited)

### Step 1: Get File Path

Get the full path to your `index.html`:
```bash
# On Mac/Linux
pwd
# Output: /Users/sshah31/Projects/sshah31/homepage-sticks

# Full path will be:
# file:///Users/sshah31/Projects/sshah31/homepage-sticks/index.html
```

### Step 2: Install Extension

Install "Custom New Tab URL" or similar extension

### Step 3: Set File URL

Configure the extension with:
```
file:///Users/sshah31/Projects/sshah31/homepage-sticks/index.html
```

**Limitations:**
- ⚠️ May have CORS issues
- ⚠️ Some browsers restrict file:// protocol
- ⚠️ localStorage might not work properly

---

## Method 4: Cloud Hosting (Best for Multiple Devices)

Host your homepage online to access it from any device!

### Option A: GitHub Pages (Free)

1. **Create GitHub Repository**
   ```bash
   cd /Users/sshah31/Projects/sshah31/homepage-sticks
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/homepage-sticks.git
   git push -u origin master
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "main" or "master" branch
   - Click Save
   - Your site will be at: `https://YOUR_USERNAME.github.io/homepage-sticks/`

3. **Configure Extension**
   - Use your GitHub Pages URL in the new tab extension

### Option B: Netlify (Free & Easy)

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   cd /Users/sshah31/Projects/sshah31/homepage-sticks
   netlify deploy --prod
   ```

3. **Get URL**
   - Netlify will give you a URL like: `https://your-site.netlify.app`
   - Use this in your new tab extension

### Option C: Vercel (Free)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd /Users/sshah31/Projects/sshah31/homepage-sticks
   vercel
   ```

3. **Use the provided URL**

**Advantages of Cloud Hosting:**
- ✅ Access from any device
- ✅ No local server needed
- ✅ Always available
- ✅ Automatic HTTPS
- ✅ Fast CDN delivery

**Privacy Note:** Your data is still stored locally in browser's localStorage, not on the server!

---

## Troubleshooting

### New Tab Shows Blank Page
- **Check:** Is your local server running?
- **Solution:** Start the server (see Method 1, Step 2)

### Extension Not Working
- **Check:** Did you enter the correct URL?
- **Solution:** Make sure it's `http://localhost:8000` (not https)

### Data Not Saving
- **Check:** Are you using file:// protocol?
- **Solution:** Use http:// with local server or create extension

### Server Stops When Terminal Closes
- **Solution:** Run server in background or use LaunchAgent (see auto-start guide)

### Can't Access from Other Devices
- **Solution:** Use cloud hosting (Method 4)

### Changes Not Showing Up
- **Solution:** Hard refresh the page (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

---

## Recommended Setup

For the best experience, we recommend:

1. **Local Development:** Method 1 (Local Server + Extension)
2. **Production Use:** Method 4 (Cloud Hosting)
3. **Offline Use:** Method 2 (Custom Extension)

---

## Quick Start Commands

### Start Server (Keep this running)
```bash
cd /Users/sshah31/Projects/sshah31/homepage-sticks
python3 -m http.server 8000
```

### Check if Server is Running
Open browser and go to: `http://localhost:8000`

### Stop Server
Press `Ctrl + C` in the terminal

---

## Tips

1. **Bookmark the Setup**
   - Keep the server start command in a text file
   - Or create a shell script to start it quickly

2. **Create a Startup Script**
   Create `start-server.sh`:
   ```bash
   #!/bin/bash
   cd /Users/sshah31/Projects/sshah31/homepage-sticks
   python3 -m http.server 8000
   ```
   
   Make it executable:
   ```bash
   chmod +x start-server.sh
   ```
   
   Run it:
   ```bash
   ./start-server.sh
   ```

3. **Use Different Port**
   If port 8000 is busy, use another:
   ```bash
   python3 -m http.server 8080
   # Then use http://localhost:8080 in extension
   ```

4. **Check Server Status**
   ```bash
   # See if port 8000 is in use
   lsof -i :8000
   ```

---

## Next Steps

1. ✅ Choose your preferred method
2. ✅ Set up the server or hosting
3. ✅ Install and configure the extension
4. ✅ Test by opening a new tab
5. ✅ Start adding your collections!

---

## Need Help?

- Check the main [README.md](README.md) for usage instructions
- Review [SETUP.md](SETUP.md) for general setup
- See [FEATURES.md](FEATURES.md) for feature details

Enjoy your personalized new tab page! 🎉

