let container = document.getElementById("container");
let resetBtn = document.querySelector(".resetBtn");
let maxColor = 360;
let pixelBtn = document.querySelector(".pixelBtn");
let pixelsGrid = 16;
let clicks = 0;

let col;
let pixel;

// if (clicks > 0) {
//     pixelHover();
// }

pixelBtn.addEventListener("click", () => {
    pixelsInput = prompt("How many pixels do u want? (100 max)");
    container.innerHTML = "";

        for (let i = 0; i < pixelsInput; i++) {
            col = document.createElement("div");
            container.appendChild(col);

            for (let j = 0; j < pixelsInput; j++) {
                pixel = document.createElement("div");
                pixel.classList.add("pixel");
                pixel.style.backgroundColor = "white";
                pixel.style.width = 800/pixelsInput + "px";
                pixel.style.height = 800/pixelsInput + "px";
                col.appendChild(pixel);
            }
        }
        let pixels = document.getElementsByClassName("pixel");
        let pixelsArr = Array.from(pixels);

        for (const pixel of pixelsArr) {
            pixel.addEventListener("mouseover", () => {
            let randomColorRed = Math.floor(Math.random() * maxColor);
            let randomColorGreen = Math.floor(Math.random() * maxColor);
            let randomColorBlue = Math.floor(Math.random() * maxColor);
            let rgbColor = `${randomColorRed},${randomColorGreen},${randomColorBlue}`;

            pixel.style.backgroundColor = `rgb(${rgbColor})`;
            console.log("test");
            })
        }
    }
)

for (let i = 0; i < pixelsGrid; i++) {
    col = document.createElement("div");
    container.appendChild(col);

    for (let j = 0; j < pixelsGrid; j++) {
        pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.backgroundColor = "white";
        pixel.style.width = 800/pixelsGrid + "px";
        pixel.style.height = 800/pixelsGrid + "px"; 
        col.appendChild(pixel);
    }
}

let pixels = document.getElementsByClassName("pixel");
let pixelsArr = Array.from(pixels);

for (const pixel of pixelsArr) {
    pixel.addEventListener("mouseover", () => {
    let randomColorRed = Math.floor(Math.random() * maxColor);
    let randomColorGreen = Math.floor(Math.random() * maxColor);
    let randomColorBlue = Math.floor(Math.random() * maxColor);
    let rgbColor = `${randomColorRed},${randomColorGreen},${randomColorBlue}`;

    pixel.style.backgroundColor = `rgb(${rgbColor})`;
    console.log("test");
    })
}

resetBtn.addEventListener("click", () => {
    for (const pixel of pixelsArr) {
        pixel.style.backgroundColor = "white";
    }
})






