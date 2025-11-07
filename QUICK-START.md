# ⚡ Quick Start - Your Setup

## ✅ What's Working For You

You're using the **direct file path method** with a Chrome extension - the simplest approach!

## Your Current Setup

**Extension:** Custom New Tab URL (or similar)  
**URL:** `file:///Users/sshah31/Projects/sshah31/homepage-sticks/index.html`

### Advantages:
- ✅ No server needed
- ✅ Works offline
- ✅ Instant loading
- ✅ Simple setup
- ✅ No maintenance required

## How to Use

### Opening New Tabs
Just press **Cmd+T** (Mac) or **Ctrl+T** (Windows) and your homepage appears!

### Making Changes
1. Edit the files (`index.html`, `styles.css`, `script.js`)
2. Save your changes
3. Open a new tab or refresh (Cmd+Shift+R / Ctrl+Shift+R)
4. Changes appear immediately!

### Your Data
All your collections and links are saved in your browser's localStorage:
- **Location:** Chrome's localStorage for the file path
- **Automatic:** Saves every time you add/edit/delete
- **Private:** Never leaves your computer

## Quick Tips

### Adding a Collection
1. Click **"+ New Collection"**
2. Enter name (e.g., "Work Tools")
3. Pick a color
4. Click **"Save Collection"**

### Adding Links
1. Click **"+ Add Link"** on any collection
2. Enter title and URL
3. Click **"Save Link"**

### Searching
- Press **Cmd+K** (Mac) or **Ctrl+K** (Windows)
- Type to search across all collections and links
- Press **Esc** to close modals

### Keyboard Shortcuts
- `Cmd/Ctrl + K` - Focus search
- `Cmd/Ctrl + T` - New tab (shows your homepage)
- `Esc` - Close any modal
- `Cmd/Ctrl + Shift + R` - Hard refresh

## Color Palette

Your subtle, eye-friendly colors:
- **#F9FAFB** - Very light gray (default)
- **#F3F4F6** - Light gray
- **#E5E7EB** - Medium gray
- **#EEF2FF** - Soft blue
- **#F0FDF4** - Soft green
- **#FFFBEB** - Soft yellow
- **#FEF2F2** - Soft red
- **#FAF5FF** - Soft purple

## Customization Ideas

### Change Colors
Edit `index.html` around line 40-62 to add/change colors:
```html
<input type="radio" name="color" value="#YOUR_COLOR" id="color9">
<label for="color9" style="background-color: #YOUR_COLOR;"></label>
```

### Change Background
Edit `styles.css` line 18:
```css
background: linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 50%, #E5E7EB 100%);
```

### Adjust Card Size
Edit `styles.css` line 108:
```css
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
/* Change 300px to make cards bigger or smaller */
```

## Backup Your Data

Since your data is in localStorage, here's how to back it up:

### Export Data (Manual)
1. Open browser console (F12)
2. Run:
```javascript
console.log(localStorage.getItem('homepage-collections'))
```
3. Copy the output and save to a file

### Import Data (Manual)
1. Open browser console (F12)
2. Run:
```javascript
localStorage.setItem('homepage-collections', 'PASTE_YOUR_DATA_HERE')
```
3. Refresh the page

## Troubleshooting

### New Tab Shows Blank
- **Check:** Is the file path correct?
- **Fix:** Re-enter the path in the extension settings

### Changes Not Showing
- **Fix:** Hard refresh with Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Data Lost
- **Cause:** Browser cache cleared or localStorage disabled
- **Prevention:** Regularly export your data (see above)

### Colors Look Different
- **Cause:** Browser color profile
- **Fix:** This is normal, colors may vary slightly between displays

## Collection Organization Tips

Based on your needs:

### By Activity
- 🏢 Work
- 📚 Learning
- 🎮 Entertainment
- 🛒 Shopping

### By Project
- 📱 Project Alpha
- 💻 Project Beta
- 🎨 Side Projects

### By Frequency
- ⭐ Daily Must-Haves
- 📅 Weekly Check-ins
- 📁 Reference Materials

## File Locations

Your project files:
```
/Users/sshah31/Projects/sshah31/homepage-sticks/
├── index.html          # Main page
├── styles.css          # All styling
├── script.js           # Functionality
├── README.md           # Full documentation
├── NEW-TAB-SETUP.md    # Setup guide
└── COLLECTIONS-GUIDE.md # Usage tips
```

## Next Steps

1. ✅ **You're all set!** Your homepage is working
2. 📝 Start adding your collections
3. 🔗 Add your frequently used links
4. 🎨 Customize colors if you want
5. 💾 Remember to backup your data occasionally

## Need More Help?

- 📖 Full documentation: [README.md](README.md)
- 🚀 Other setup methods: [NEW-TAB-SETUP.md](NEW-TAB-SETUP.md)
- 📚 Collection tips: [COLLECTIONS-GUIDE.md](COLLECTIONS-GUIDE.md)
- ⚙️ Technical details: [PROJECT-DETAILS.md](PROJECT-DETAILS.md)

---

**Enjoy your personalized homepage! 🎉**

Every new tab is now your organized link collection!

