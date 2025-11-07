# 🚀 Quick Setup Guide

Get your new homepage up and running in 5 minutes!

## Step 1: Verify Files

Make sure you have these files:
- ✅ `index.html`
- ✅ `styles.css`
- ✅ `script.js`
- ✅ `README.md`

## Step 2: Test Locally

### Option A: Direct File Open
1. Double-click `index.html`
2. It should open in your default browser

### Option B: Local Server (Recommended)
Choose one method:

**Python 3:**
```bash
cd /Users/sshah31/Projects/sshah31/homepage-sticks
python3 -m http.server 8000
```
Then open: `http://localhost:8000`

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js:**
```bash
npx serve
```

**PHP:**
```bash
php -S localhost:8000
```

## Step 3: Set as Chrome Homepage

### Method 1: Chrome Settings (Easiest)
1. Open Chrome
2. Go to `chrome://settings/`
3. Click "On startup" in the left sidebar
4. Select "Open a specific page or set of pages"
5. Click "Add a new page"
6. Enter your URL:
   - If using local server: `http://localhost:8000`
   - If using file: `file:///Users/sshah31/Projects/sshah31/homepage-sticks/index.html`
7. Click "Add"

### Method 2: New Tab Page
1. Install a Chrome extension like:
   - "Custom New Tab URL"
   - "New Tab Redirect"
   - "Custom New Tab Page"
2. Configure it to point to your homepage URL

### Method 3: Bookmark Bar (Quick Access)
1. Open `index.html` in Chrome
2. Press `Cmd + D` (Mac) or `Ctrl + D` (Windows)
3. Save to Bookmarks Bar
4. Rename to something short like "🏠 Home"

## Step 4: Add Your First Link

1. Click "➕ Add New Link"
2. Fill in:
   - **Title**: "GitHub"
   - **URL**: "https://github.com"
   - **Description**: "My code repositories"
   - **Color**: Choose your favorite
3. Click "Save Link"

🎉 **Done!** Your link should appear as a sticky note!

## Step 5: Customize (Optional)

### Change Background Gradient
Edit `styles.css` line 19:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Try these alternatives:
```css
/* Sunset */
background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);

/* Ocean */
background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);

/* Forest */
background: linear-gradient(135deg, #134e5e 0%, #71b280 100%);

/* Purple Dream */
background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
```

### Add More Colors
Edit `index.html` around line 55, add more color options:
```html
<input type="radio" name="color" value="#YOUR_COLOR" id="color7">
<label for="color7" style="background-color: #YOUR_COLOR;"></label>
```

## Troubleshooting

### Links not saving?
- Check if localStorage is enabled in Chrome
- Try opening in incognito mode to test
- Check browser console (F12) for errors

### Page not loading?
- Ensure all 3 files (HTML, CSS, JS) are in the same folder
- Check file permissions
- Try using a local server instead of direct file open

### Styles look broken?
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Check if `styles.css` is in the same folder
- Verify internet connection (for Google Fonts)

### Modal not opening?
- Check browser console for JavaScript errors
- Ensure `script.js` is in the same folder
- Try refreshing the page

## Tips for Best Experience

1. **Use Local Server**: More reliable than file:// protocol
2. **Bookmark It**: Add to bookmarks bar for quick access
3. **Regular Backups**: Export your links periodically (feature coming soon)
4. **Organize by Color**: Create a color-coding system
5. **Use Search**: Press Cmd/Ctrl + K to quickly find links

## Advanced: Auto-start Server on Login (Mac)

Create a launch agent to start the server automatically:

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
</dict>
</plist>
```

2. Load it:
```bash
launchctl load ~/Library/LaunchAgents/com.homepage.server.plist
```

Now the server starts automatically when you log in!

## Need Help?

- 📖 Read the full [README.md](README.md)
- 🐛 Check browser console (F12) for errors
- 🔍 Search for similar issues online
- 💡 Experiment and customize!

---

**Happy link managing! 🎉**

