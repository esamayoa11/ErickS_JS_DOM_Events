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
    clickMeBtn.addEventListener("click", function() {
        this.innerText = this.innerText === "Click me for something to happen"
            ? "You clicked me!"
            : "Click me for something to hapen";
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

    // Function to darken/lighten color as needed
    function adjustBrightness(color, amount) {
        let rgb = color.match(/\d+/g); // Using to Extract RGB Values
        if (!rgb) return "#000000"; // Default to black as failproof 
        let [r, g, b] = rgb.map(value => Math.max(0, Math.min(255, parseInt(value) + amount)));
        return `rgb(${r}, ${g}, ${b})`;
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
            ? adjustBrightness(currentColor, -50) // Darken color
            : adjustBrightness(currentColor, 50); // Lighten color

            darkModeBtn.innerText = isDarkMode ? "Light Color Mode" : "Dark Color Mode";
    });
});