let heading = document.getElementById("heading");
let para = document.getElementById("para");
let input = document.getElementById("inputText");

let fontSize = 18;
let isVisible = true;

// Change Heading
document.getElementById("changeText").addEventListener("click", function () {
    if (input.value !== "") {
        heading.textContent = input.value;
    } else {
        alert("Enter text first!");
    }
});

// Change Background
document.getElementById("changeColor").addEventListener("click", function () {
    let colors = ["#e6e6e6", "#ffcccc", "#ccffcc", "#ccccff", "#fff3cd"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Increase Font Size
document.getElementById("increaseFont").addEventListener("click", function () {
    fontSize += 2;
    para.style.fontSize = fontSize + "px";
});

// Show/Hide Paragraph
document.getElementById("togglePara").addEventListener("click", function () {
    if (isVisible) {
        para.style.display = "none";
        isVisible = false;
    } else {
        para.style.display = "block";
        isVisible = true;
    }
});

// Reset Everything
document.getElementById("reset").addEventListener("click", function () {
    heading.textContent = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "#e6e6e6";
    para.style.fontSize = "18px";
    para.style.display = "block";
    input.value = "";
    fontSize = 18;
    isVisible = true;
});