let container = document.getElementById("container");
let resetBtn = document.querySelector(".reset");
let maxColor = 360;

for (let i = 0; i < 16; i++) {
    let col = document.createElement("div");
    container.appendChild(col);

    for (let j = 0; j < 16; j++) {
        let pixel = document.createElement("div");
        pixel.classList.add("white","pixel");
        col.appendChild(pixel);
    }
}

let pixels = document.getElementsByClassName("white");
let pixelsArr = Array.from(pixels);

for (const pixel of pixelsArr) {
    pixel.addEventListener("mouseover", () => {
        let randomColorRed = Math.floor(Math.random() * maxColor);
        let randomColorGreen = Math.floor(Math.random() * maxColor);
        let randomColorBlue = Math.floor(Math.random() * maxColor);
        let rgbColor = `${randomColorRed},${randomColorGreen},${randomColorBlue}`;

        pixel.classList.remove("white");
        pixel.style.backgroundColor = `rgb(${rgbColor})`;

    })
}

resetBtn.addEventListener("click", () => {
    for (const pixel of pixelsArr) {
        pixel.classList.add("white");
        pixel.style.backgroundColor = "white";
    }
})