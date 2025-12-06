// Function to SHOW the popup
function openPopup(title, description,imageUrl, containerClass = '') {
    var overlay = document.getElementById("popup-overlay");
    var modalContent = document.querySelector(".modal-content");
    var popupTitle = document.getElementById("popup-title");
    var popupDesc = document.getElementById("popup-desc");
    var popupImg = document.getElementById("popup-img");

    popupTitle.textContent = title;
    popupDesc.textContent = description;

    if (imageUrl) {
        popupImg.src = imageUrl;
        popupImg.style.display = 'block'; // Show the image
    } else {
        popupImg.src = ''; // Clear image source
        popupImg.style.display = 'none'; // Hide the image element
    }
    modalContent.className = 'modal-content'; 
    if (containerClass) {
        modalContent.className += ' ' + containerClass;
    }
    
    overlay.style.display = "flex"; 
}



function closePopup() {
    var overlay = document.getElementById("popup-overlay");
    overlay.style.display = "none"; 
}

// Function to close if you click on the dark background (No change needed)
window.onclick = function(event) {
    var overlay = document.getElementById("popup-overlay");
    if (event.target == overlay) {
        overlay.style.display = "none";
    }
}

// Function to close if you click on the dark background
window.onclick = function(event) {
    var overlay = document.getElementById("popup-overlay");
    if (event.target == overlay) {
        overlay.style.display = "none";
    }
}
// --- NEW: MOUSE PANNING EFFECT ---
const container = document.querySelector('.scroll-container');

// SETTINGS: Change these to fit your taste
const edgeSize = 100;   // How close to the edge (in pixels) before it moves
const scrollSpeed = 7;  // How fast it moves (Lower = Slower)

let mouseX = window.innerWidth / 2; // Start thinking mouse is in center

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
});

// 2. The "Game Loop" - runs 60 times per second
function autoScroll() {
    const viewportWidth = window.innerWidth;
    
    // Check Left Edge
    if (mouseX < edgeSize) {
        // Move scrollbar to the left
        container.scrollLeft -= scrollSpeed; 
    }
    
    // Check Right Edge
    else if (mouseX > (viewportWidth - edgeSize)) {
        // Move scrollbar to the right
        container.scrollLeft += scrollSpeed;
    }

    requestAnimationFrame(autoScroll);
}

autoScroll();
