let container = document.getElementById("container");
let resetBtn = document.querySelector(".reset");

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
console.log(pixelsArr);

for (const pixel of pixelsArr) {
    pixel.addEventListener("mousedown", () => {
        console.log(pixel);
        pixel.classList.replace("white","black");
    })
}

resetBtn.addEventListener("click", () => {
    for (const pixel of pixelsArr) {
        pixel.classList.replace("black", "white");
    }
})