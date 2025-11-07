// State Management
let collections = [];
let editingCollectionId = null;
let editingLinkId = null;
let currentCollectionId = null;

// DOM Elements
const notesContainer = document.getElementById('notesContainer');
const addCollectionBtn = document.getElementById('addCollectionBtn');
const collectionModal = document.getElementById('collectionModal');
const linkModal = document.getElementById('linkModal');
const closeModal = document.getElementById('closeModal');
const closeLinkModal = document.getElementById('closeLinkModal');
const cancelBtn = document.getElementById('cancelBtn');
const cancelLinkBtn = document.getElementById('cancelLinkBtn');
const collectionForm = document.getElementById('collectionForm');
const linkForm = document.getElementById('linkForm');
const searchInput = document.getElementById('searchInput');
const modalTitle = document.getElementById('modalTitle');
const linkModalTitle = document.getElementById('linkModalTitle');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadCollections();
    renderCollections();
    attachEventListeners();
});

// Event Listeners
function attachEventListeners() {
    addCollectionBtn.addEventListener('click', openAddCollectionModal);
    closeModal.addEventListener('click', closeCollectionModal);
    closeLinkModal.addEventListener('click', closeLinkModalFn);
    cancelBtn.addEventListener('click', closeCollectionModal);
    cancelLinkBtn.addEventListener('click', closeLinkModalFn);
    collectionForm.addEventListener('submit', handleCollectionFormSubmit);
    linkForm.addEventListener('submit', handleLinkFormSubmit);
    searchInput.addEventListener('input', handleSearch);
    
    // Close modal when clicking outside
    collectionModal.addEventListener('click', (e) => {
        if (e.target === collectionModal) {
            closeCollectionModal();
        }
    });

    linkModal.addEventListener('click', (e) => {
        if (e.target === linkModal) {
            closeLinkModalFn();
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (collectionModal.classList.contains('active')) {
                closeCollectionModal();
            }
            if (linkModal.classList.contains('active')) {
                closeLinkModalFn();
            }
        }
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
}

// Load collections from localStorage
function loadCollections() {
    const savedCollections = localStorage.getItem('homepage-collections');
    if (savedCollections) {
        collections = JSON.parse(savedCollections);
    }
}

// Save collections to localStorage
function saveCollections() {
    localStorage.setItem('homepage-collections', JSON.stringify(collections));
}

// Render collections to DOM
function renderCollections(filteredCollections = null) {
    const collectionsToRender = filteredCollections || collections;
    
    if (collectionsToRender.length === 0) {
        notesContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📚</div>
                <h3>No collections yet</h3>
                <p>Click "New Collection" to organize your links</p>
            </div>
        `;
        return;
    }

    notesContainer.innerHTML = collectionsToRender.map(collection => `
        <div class="collection-card" style="--collection-color: ${collection.color}">
            <div class="collection-header">
                <h3 class="collection-title">${escapeHtml(collection.title)}</h3>
                <div class="collection-actions">
                    <button class="icon-btn" onclick="editCollection('${collection.id}')" title="Edit Collection">
                        ✏️
                    </button>
                    <button class="icon-btn" onclick="deleteCollection('${collection.id}')" title="Delete Collection">
                        🗑️
                    </button>
                </div>
            </div>
            
            <div class="links-list">
                ${collection.links && collection.links.length > 0 ? 
                    collection.links.map(link => `
                        <div class="link-item">
                            <div class="link-content">
                                <div class="link-title">${escapeHtml(link.title)}</div>
                                <a href="${escapeHtml(link.url)}" class="link-url" target="_blank" onclick="event.stopPropagation()">
                                    ${formatUrl(link.url)}
                                </a>
                            </div>
                            <div class="link-actions">
                                <button class="link-btn" onclick="editLink('${collection.id}', '${link.id}')" title="Edit Link">
                                    ✏️
                                </button>
                                <button class="link-btn" onclick="deleteLink('${collection.id}', '${link.id}')" title="Delete Link">
                                    ❌
                                </button>
                            </div>
                        </div>
                    `).join('') 
                    : '<p style="text-align: center; color: #8B7355; opacity: 0.7; padding: 1rem 0;">No links yet</p>'
                }
            </div>
            
            <button class="add-link-btn" onclick="openAddLinkModal('${collection.id}')">
                + Add Link
            </button>
        </div>
    `).join('');
}

// Collection Management Functions
function openAddCollectionModal() {
    editingCollectionId = null;
    modalTitle.textContent = 'New Collection';
    collectionForm.reset();
    collectionModal.classList.add('active');
    document.getElementById('collectionTitle').focus();
}

function editCollection(id) {
    const collection = collections.find(c => c.id === id);
    if (!collection) return;

    editingCollectionId = id;
    modalTitle.textContent = 'Edit Collection';
    
    document.getElementById('collectionTitle').value = collection.title;
    
    // Set color
    const colorRadio = document.querySelector(`#collectionModal input[name="color"][value="${collection.color}"]`);
    if (colorRadio) {
        colorRadio.checked = true;
    }
    
    collectionModal.classList.add('active');
}

function closeCollectionModal() {
    collectionModal.classList.remove('active');
    collectionForm.reset();
    editingCollectionId = null;
}

function handleCollectionFormSubmit(e) {
    e.preventDefault();
    
    const title = document.getElementById('collectionTitle').value.trim();
    const color = document.querySelector('#collectionModal input[name="color"]:checked').value;
    
    if (editingCollectionId) {
        // Update existing collection
        const collectionIndex = collections.findIndex(c => c.id === editingCollectionId);
        if (collectionIndex !== -1) {
            collections[collectionIndex] = {
                ...collections[collectionIndex],
                title,
                color,
                updatedAt: new Date().toISOString()
            };
        }
    } else {
        // Create new collection
        const newCollection = {
            id: generateId(),
            title,
            color,
            links: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        collections.unshift(newCollection);
    }
    
    saveCollections();
    renderCollections();
    closeCollectionModal();
}

function deleteCollection(id) {
    const collection = collections.find(c => c.id === id);
    const linkCount = collection?.links?.length || 0;
    const message = linkCount > 0 
        ? `Delete "${collection.title}" and its ${linkCount} link(s)?` 
        : `Delete "${collection.title}"?`;
    
    if (confirm(message)) {
        collections = collections.filter(c => c.id !== id);
        saveCollections();
        renderCollections();
    }
}

// Link Management Functions
function openAddLinkModal(collectionId) {
    currentCollectionId = collectionId;
    editingLinkId = null;
    linkModalTitle.textContent = 'Add Link';
    linkForm.reset();
    document.getElementById('linkCollectionId').value = collectionId;
    linkModal.classList.add('active');
    document.getElementById('linkTitle').focus();
}

function editLink(collectionId, linkId) {
    const collection = collections.find(c => c.id === collectionId);
    if (!collection) return;
    
    const link = collection.links.find(l => l.id === linkId);
    if (!link) return;

    currentCollectionId = collectionId;
    editingLinkId = linkId;
    linkModalTitle.textContent = 'Edit Link';
    
    document.getElementById('linkCollectionId').value = collectionId;
    document.getElementById('linkTitle').value = link.title;
    document.getElementById('linkUrl').value = link.url;
    
    linkModal.classList.add('active');
}

function closeLinkModalFn() {
    linkModal.classList.remove('active');
    linkForm.reset();
    editingLinkId = null;
    currentCollectionId = null;
}

function handleLinkFormSubmit(e) {
    e.preventDefault();
    
    const collectionId = document.getElementById('linkCollectionId').value;
    const title = document.getElementById('linkTitle').value.trim();
    const url = document.getElementById('linkUrl').value.trim();
    
    const collectionIndex = collections.findIndex(c => c.id === collectionId);
    if (collectionIndex === -1) return;
    
    if (editingLinkId) {
        // Update existing link
        const linkIndex = collections[collectionIndex].links.findIndex(l => l.id === editingLinkId);
        if (linkIndex !== -1) {
            collections[collectionIndex].links[linkIndex] = {
                ...collections[collectionIndex].links[linkIndex],
                title,
                url,
                updatedAt: new Date().toISOString()
            };
        }
    } else {
        // Create new link
        const newLink = {
            id: generateId(),
            title,
            url,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        if (!collections[collectionIndex].links) {
            collections[collectionIndex].links = [];
        }
        collections[collectionIndex].links.push(newLink);
    }
    
    collections[collectionIndex].updatedAt = new Date().toISOString();
    
    saveCollections();
    renderCollections();
    closeLinkModalFn();
}

function deleteLink(collectionId, linkId) {
    const collectionIndex = collections.findIndex(c => c.id === collectionId);
    if (collectionIndex === -1) return;
    
    const collection = collections[collectionIndex];
    const link = collection.links.find(l => l.id === linkId);
    
    if (confirm(`Delete "${link.title}"?`)) {
        collections[collectionIndex].links = collections[collectionIndex].links.filter(l => l.id !== linkId);
        collections[collectionIndex].updatedAt = new Date().toISOString();
        saveCollections();
        renderCollections();
    }
}

// Handle search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (!searchTerm) {
        renderCollections();
        return;
    }
    
    const filteredCollections = collections.map(collection => {
        // Check if collection title matches
        const titleMatches = collection.title.toLowerCase().includes(searchTerm);
        
        // Filter links that match
        const matchingLinks = collection.links.filter(link =>
            link.title.toLowerCase().includes(searchTerm) ||
            link.url.toLowerCase().includes(searchTerm)
        );
        
        // Include collection if title matches or has matching links
        if (titleMatches || matchingLinks.length > 0) {
            return {
                ...collection,
                links: titleMatches ? collection.links : matchingLinks
            };
        }
        return null;
    }).filter(c => c !== null);
    
    renderCollections(filteredCollections);
}

// Utility Functions
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatUrl(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname + urlObj.pathname;
    } catch {
        return url;
    }
}

// Export/Import functionality (bonus feature)
function exportCollections() {
    const dataStr = JSON.stringify(collections, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `homepage-collections-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

function importCollections(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const importedCollections = JSON.parse(e.target.result);
            if (Array.isArray(importedCollections)) {
                collections = importedCollections;
                saveCollections();
                renderCollections();
                alert('Collections imported successfully!');
            }
        } catch (error) {
            alert('Error importing collections. Please check the file format.');
        }
    };
    reader.readAsText(file);
}
