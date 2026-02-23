document.addEventListener("DOMContentLoaded", function () {

    const colorBox = document.getElementById("color-box");
    const button = document.getElementById("change-color-btn");

    // Function to generate random HEX color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    // Change color when button is clicked
    button.addEventListener("click", function () {
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
    });

});