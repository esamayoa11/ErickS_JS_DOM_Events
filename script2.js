document.addEventListener("DOMContentLoaded", function() {

    // Get the element
    let onloadE1 = document.getElementById("onload");
    onloadE1.innerHTML = "<h1>I loaded cause the DOM was fully rendered</h1>";

    // Get the element that will show key code
    let directionE1 = document.getElementById("direction");
    document.addEventListener("keydown", function(e) {
        directionE1.innerText = `The Key you pressed is ${e.code}`;
    });

    // Toggle click me button 
    const clickMeBtn = document.getElementById("clickMe");
    const initialText = "Click me for something to happen"; // Store original text
    const clickedText = "You clicked me!"; // Store clicked me text

    clickMeBtn.addEventListener("click", function() {
        this.innerText = (this.innerText === initialText)
            ? clickedText
            : initialText;
    });

    // Function to generate a random hex color
    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    // Change Background Color
    const randomColorBtn = document.getElementById("randomColorBtn");
    randomColorBtn.addEventListener("click", function() {
        let newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;
        document.body.setAttribute("data-original-color", newColor); // Store for dark mode toggling
    });

    // Function change button style and to toggle glow
    const coolBtn = document.querySelector(".cool-btn");
    coolBtn.addEventListener("click", function() {
        this.classList.toggle("glow");
    });

    // Function to adjust brightness of color as needed
    function adjustBrightness(color, amount) {
        // convert hex format to RGB
        let rgb; 
        if (color.startsWith('#')) {
            rgb = hexToRgb(color);
        } else {
            rgb = color.match(/\d+/g); // extract RGB values if in RGB format    
        }

        if (!rgb) return "#000000"; // Default to black if no valid RGB
        let [r, g, b] = rgb.map(value => Math.max(0, Math.min(255, parseInt(value) + amount)));
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Function to convert hex to rgb
    function hexToRgb(hex) {
        let r = parseInt(hex.slce(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16);
        return [r, g, b];
    } 

    // Toggle dark mode and adjust background color
    const darkModeBtn = document.getElementById("darkModeBtn");
    let isDarkMode = false;

    darkModeBtn.addEventListener("click", function() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle("dark-mode");

        let currentColor = window.getComputedStyle(document.body).backgroundColor;
        let originalColor = document.body.getAttribute("data-original-color")  || "rgb (255, 255, 255)"; // default to white

        document.body.style.backgroundColor = isDarkMode
            ? adjustBrightness(currentColor, -150) // Darken color
            : adjustBrightness(currentColor, 150); // Lighten color

            darkModeBtn.innerText = isDarkMode ? "Light Color Mode" : "Dark Color Mode";
    });
});