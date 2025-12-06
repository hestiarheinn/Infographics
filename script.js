// Function to SHOW the popup
function openPopup() {
    var overlay = document.getElementById("popup-overlay");
    overlay.style.display = "flex"; 
}

// Function to HIDE the popup
function closePopup() {
    var overlay = document.getElementById("popup-overlay");
    overlay.style.display = "none"; 
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

// 1. Track the mouse position constantly
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

    // Repeat this function smoothly
    requestAnimationFrame(autoScroll);
}

// Start the loop!
autoScroll();
