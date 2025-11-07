# Changelog

All notable changes to Homepage Sticks will be documented in this file.

## [2.0.0] - 2025-11-07

### 🎉 Major Update: Collections Feature

#### Added
- **Collections System**: Group multiple links under themed collections
- **8 Boho Colors**: New earth-toned color palette for a warm, natural aesthetic
- **Handwritten Font**: Caveat font for collection titles adds personal touch
- **Multiple Modals**: Separate modals for creating collections and adding links
- **Enhanced Search**: Search now filters both collections and individual links
- **Sample Collections**: Added `sample-collections.json` with example data

#### Changed
- **Design Overhaul**: Complete redesign with Boho aesthetic
  - Warm gradient background (cream, tan, beige tones)
  - Dashed borders for authentic Boho feel
  - Rounded buttons with soft shadows
  - Earth-toned color scheme
- **Removed Header**: Eliminated "My Links" header to maximize space
- **Font Update**: Changed from Inter to Quicksand (body) and Caveat (titles)
- **Layout Optimization**: Reduced padding and margins for more content space
- **Data Structure**: Migrated from flat links to nested collections with links

#### Technical Changes
- localStorage key changed from `homepage-notes` to `homepage-collections`
- New data structure supports nested links within collections
- Refactored JavaScript for collection management
- Updated CSS with Boho-specific styling variables
- Added collection-specific UI components

#### Migration Notes
- **Breaking Change**: Old data structure not compatible with v2.0
- Users upgrading from v1.x will need to recreate their links
- Consider exporting v1.x data before upgrading (if available)

---

## [1.0.0] - 2025-11-07

### Initial Release

#### Features
- Single-level link management
- 6 pastel colors for sticky notes
- Modern purple gradient background
- Add/Edit/Delete individual links
- Real-time search functionality
- Description field for links
- localStorage persistence
- Responsive design
- Keyboard shortcuts (Cmd/Ctrl + K, Esc)
- Inter font family
- Smooth animations and hover effects

---

## Version Comparison

### v1.0 vs v2.0

| Feature | v1.0 | v2.0 |
|---------|------|------|
| **Organization** | Flat list of links | Collections with multiple links |
| **Colors** | 6 pastel colors | 8 Boho earth tones |
| **Design** | Modern purple gradient | Boho cream/tan gradient |
| **Fonts** | Inter (modern) | Caveat + Quicksand (handwritten + clean) |
| **Header** | Large "My Links" header | No header (space optimized) |
| **Data Structure** | Simple link objects | Collections with nested links |
| **Description** | Per-link descriptions | Collection-based organization |
| **Use Case** | Individual bookmarks | Grouped/themed bookmarks |

---

## Upgrade Guide: v1.0 → v2.0

### What Changes
1. Data structure is completely different
2. localStorage key changed
3. UI and design completely redesigned
4. Collections replace individual notes

### How to Upgrade

#### Option 1: Fresh Start (Recommended)
1. Backup your current data (manually note your links)
2. Replace all files with v2.0
3. Recreate your links in collections

#### Option 2: Manual Migration
1. Open v1.0 in browser
2. Open DevTools Console (F12)
3. Run: `console.log(JSON.stringify(JSON.parse(localStorage.getItem('homepage-notes')), null, 2))`
4. Copy the output
5. Manually recreate links in v2.0 organized by theme

#### Option 3: Keep Both Versions
1. Keep v1.0 files in a separate folder
2. Use v2.0 in main folder
3. Gradually migrate as needed

### Benefits of Upgrading
- ✅ Better organization with collections
- ✅ More space-efficient layout
- ✅ Beautiful Boho design
- ✅ Easier to manage many links
- ✅ More intuitive grouping
- ✅ Cleaner, less cluttered interface

---

## Future Roadmap

### v2.1 (Planned)
- [ ] Export/Import collections as JSON
- [ ] Migration tool from v1.0 to v2.0
- [ ] Collapse/expand collections
- [ ] Drag-and-drop reordering

### v2.2 (Planned)
- [ ] Favicon fetching
- [ ] Link previews on hover
- [ ] Custom Boho patterns/textures
- [ ] More color themes

### v3.0 (Future)
- [ ] Cloud sync (optional)
- [ ] Nested sub-collections
- [ ] Collaborative collections
- [ ] Browser extension

---

## Bug Fixes

### v2.0.0
- Fixed: Modal z-index issues
- Fixed: Search not filtering nested links
- Fixed: Color picker selection styling
- Fixed: Mobile responsive layout issues
- Fixed: Long URL overflow in link items

---

## Performance Improvements

### v2.0.0
- Optimized rendering for collections with many links
- Reduced CSS file size with consolidated styles
- Improved search algorithm efficiency
- Better animation performance with GPU acceleration

---

## Known Issues

### v2.0.0
- None reported yet

---

**Note**: This project follows [Semantic Versioning](https://semver.org/).

