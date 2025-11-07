# 📌 Homepage Sticks - Link Collections Manager

A beautiful, Boho-styled Chrome homepage replacement with collections for organizing your bookmarks. Group multiple links under themed sticky notes for better organization!

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 🎨 Beautiful Boho Design
- **Boho Aesthetic**: Warm, earthy tones with handwritten-style fonts
- **Collection Cards**: Organize links into themed collections
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Maximized Space**: No header clutter, more room for your links

### 📚 Collection Management
- **Group Links**: Create collections to organize related links together
- **Multiple Links**: Add unlimited links to each collection
- **Easy Organization**: Work Tools, Social Media, Learning, etc.
- **8 Boho Colors**: Choose from beautiful earth-toned colors

### 🔗 Link Management
- **Add Multiple Links**: Each collection can contain many links
- **Quick Access**: All links visible within their collection
- **Easy Edit/Delete**: Manage both collections and individual links
- **Visual Organization**: See all your links at a glance

### 🔍 Smart Features
- **Real-time Search**: Filter collections and links instantly
- **Keyboard Shortcuts**: 
  - `Ctrl/Cmd + K` - Focus search bar
  - `Esc` - Close modal
- **Persistent Storage**: All data saved locally in your browser
- **No Server Required**: Everything runs locally, your data stays private

### 🎯 User Experience
- **Handwritten Titles**: Caveat font for a personal touch
- **Smooth Animations**: Cards lift and rotate on hover
- **Dashed Borders**: Boho-style separators
- **Compact Layout**: More space for your collections

## 🚀 Quick Start

### Installation

1. **Clone or Download** this repository:
```bash
git clone https://github.com/yourusername/homepage-sticks.git
cd homepage-sticks
```

2. **Open in Browser**:
   - Simply open `index.html` in your browser
   - Or use a local server (recommended):
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

### Set as Chrome New Tab Page

**Want this to open on EVERY new tab?** 

👉 **See detailed guide: [NEW-TAB-SETUP.md](NEW-TAB-SETUP.md)**

**Quick Setup (Recommended):**

1. **Start Local Server:**
   ```bash
   cd /Users/sshah31/Projects/sshah31/homepage-sticks
   python3 -m http.server 8000
   ```

2. **Install Chrome Extension:**
   - Go to Chrome Web Store
   - Search for "Custom New Tab URL"
   - Install the extension

3. **Configure Extension:**
   - Click the extension icon
   - Enter: `http://localhost:8000`
   - Save

4. **Test:**
   - Open a new tab (Cmd+T / Ctrl+T)
   - You should see your homepage!

**Other Options:**
- Set as startup page only (Chrome Settings → On startup)
- Create custom Chrome extension (see NEW-TAB-SETUP.md)
- Host online with GitHub Pages/Netlify (access from anywhere)

📖 **Full guide with all methods:** [NEW-TAB-SETUP.md](NEW-TAB-SETUP.md)

## 📖 How to Use

### Creating a Collection
1. Click **"+ New Collection"** button
2. Enter a collection name (e.g., "Work Tools", "Social Media")
3. Choose a Boho color
4. Click **"Save Collection"**

### Adding Links to a Collection
1. Click **"+ Add Link"** button on any collection card
2. Enter the link title and URL
3. Click **"Save Link"**
4. Repeat to add more links

### Editing Collections & Links
- Click **✏️** on a collection to edit its name/color
- Click **✏️** on a link to edit its title/URL

### Deleting Collections & Links
- Click **🗑️** on a collection to delete it (and all its links)
- Click **❌** on a link to remove it from the collection

### Searching
1. Type in the search box at the top
2. Search filters both collection names and link titles/URLs
3. Results update in real-time

## 🏗️ Project Structure

```
homepage-sticks/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── LICENSE             # MIT License
```

## 🎨 Customization

### Changing Boho Colors
Edit the color palette in `index.html` (collection modal section):
```html
<input type="radio" name="color" value="#YOUR_BOHO_COLOR" id="color9">
```

### Modifying the Background
Edit `styles.css` (line 22):
```css
background: linear-gradient(135deg, #F5F0E8 0%, #E8DDD0 50%, #D9C9BA 100%);
```

### Changing Fonts
The project uses:
- **Caveat**: For handwritten-style collection titles
- **Quicksand**: For body text and UI elements

Replace in `index.html` Google Fonts link to use different fonts

## 💾 Data Storage

- **Location**: Browser's localStorage
- **Key**: `homepage-collections`
- **Format**: JSON array of collection objects
- **Persistence**: Data persists across browser sessions
- **Privacy**: All data stays on your local machine

### Data Structure
```javascript
{
  id: "unique-id",
  title: "Collection Name",
  color: "#E8D5C4",
  links: [
    {
      id: "link-id",
      title: "Link Title",
      url: "https://example.com",
      createdAt: "2025-11-07T...",
      updatedAt: "2025-11-07T..."
    }
  ],
  createdAt: "2025-11-07T...",
  updatedAt: "2025-11-07T..."
}
```

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **Vanilla JavaScript**: No frameworks or dependencies
- **localStorage API**: For data persistence
- **Google Fonts**: Caveat (handwritten) and Quicksand (body) fonts

### Browser Compatibility
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

### Performance
- **Lightweight**: No external dependencies
- **Fast Loading**: < 50KB total size
- **Instant Search**: Real-time filtering
- **Smooth Animations**: GPU-accelerated transforms

## 🎯 Use Cases

1. **Developer**: Collections for GitHub repos, docs, dev tools, APIs
2. **Student**: Collections for each course, research topics, study materials
3. **Professional**: Separate work tools, client portals, project resources
4. **Personal**: Collections for shopping, entertainment, hobbies, recipes
5. **Research**: Organize articles by topic, papers, reference materials

## 🔒 Privacy & Security

- ✅ **No tracking**: Zero analytics or tracking code
- ✅ **No external requests**: Everything runs locally
- ✅ **No server**: Your data never leaves your machine
- ✅ **Open source**: Full transparency, inspect the code
- ✅ **No accounts**: No sign-up or login required

## 🚀 Future Enhancements (Ideas)

- [ ] Export/Import collections as JSON
- [ ] Drag-and-drop reordering of collections and links
- [ ] Collapse/expand collections
- [ ] Favicon fetching for links
- [ ] Cloud sync option (optional)
- [ ] More Boho themes and patterns
- [ ] Link statistics (click count, last visited)
- [ ] Nested sub-collections
- [ ] Bulk operations
- [ ] Link validation and health checks

## 🤝 Contributing

Feel free to fork this project and make it your own! Some ideas:
- Add new features
- Improve the design
- Fix bugs
- Enhance documentation

## 📝 License

MIT License - feel free to use this project however you like!

## 🙏 Credits

- **Font**: [Inter](https://fonts.google.com/specimen/Inter) by Rasmus Andersson
- **Inspiration**: Trello, Notion, and modern bookmark managers
- **Icons**: Emoji (native support)

## 📞 Support

If you encounter any issues or have questions:
1. Check this README
2. Inspect browser console for errors
3. Ensure localStorage is enabled in your browser
4. Try clearing browser cache

## 🎉 Tips & Tricks

1. **Organize by Theme**: Create collections like "Work", "Learning", "Entertainment"
2. **Color Code**: Use different Boho colors for different life areas
3. **Keep it Tidy**: Regularly review and remove unused links
4. **Search Power**: Use search to quickly find any collection or link
5. **Logical Grouping**: Group related links together (e.g., all Google services in one collection)
6. **Descriptive Names**: Use clear collection names for easy identification

## 📋 Example Collections

- **Work Tools**: Slack, Email, Jira, GitHub, Google Drive
- **Social Media**: Twitter, LinkedIn, Instagram, Facebook
- **Learning**: Coursera, YouTube, MDN, Stack Overflow
- **Shopping**: Amazon, eBay, Etsy, local stores
- **Entertainment**: Netflix, Spotify, YouTube, Gaming sites
- **Finance**: Banking, Investment, Budget tools
- **Health**: Fitness apps, Health portals, Recipe sites

---

**Made with ❤️ for better bookmark organization**

Enjoy your new Boho homepage! 🌿
