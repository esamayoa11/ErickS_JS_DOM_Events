// When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function() {

    //Get the element with an id of onload
    let onloadE1 = document.getElementById("onload");

    //Add some HTML within the element we grabbed
    onloadE1.innerHTML = "<h1>I loaded cause the DOM was fully rendered</h1>"

    //Get the element that will show our key code
    let directionE1 = document.getElementById("direction");

    //Can be changed with Key press or key up depending on what you might need
    document.addEventListener("keydown", function(e) {
        directionE1.innerText = `The Key you pressed is ${e.code}`;
    });

    // Button and click event listener    
    document.getElementById("clickMe").addEventListener("click", function(){
        this.innerText = "You clicked me!"
    });

    //Function to generate random hex color
    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    //Event Listener to change background color
    document.getElementById("randomColorBtn").addEventListener("click", function() {
        document.body.style.backgroundColor = getRandomColor();
    });
});

//Function change button style and to toggle glow
function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn");
    btn.classList.toggle("glow");
} 
