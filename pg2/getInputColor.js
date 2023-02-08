const color = document.getElementById("favcolor");
const hexValue = document.getElementById("hex");
const boxColor = document.getElementById("box");

color.addEventListener("input", function () {
    hexValue.innerHTML = color.value;
    console.log(color.value);
    boxColor.style.backgroundColor = color.value;
})
